"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";
import { SuccessState } from "@/components/tools/primitives/SuccessState";
import { ProcessingStatus } from "@/components/tools/primitives/ProcessingStatus";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfJs } from "@/lib/tools/pdfjs";
import { moveInOrder, buildReorderedPdf } from "@/lib/tools/pdfPages";
import { ToolFailure } from "@/lib/tools/toolError";
import { fmt, plural, formatBytesLocalized } from "@/lib/i18n/format";
import type { Locale } from "@/lib/i18n/locales";
import type { ResolvedToolStrings } from "@/lib/i18n/toolStrings";

export function ReorderPdfPagesTool({
  strings,
  locale,
}: {
  strings: ResolvedToolStrings<"reorder-pdf-pages">;
  locale: Locale;
}) {
  const t = strings;
  const size = (bytes: number) => formatBytesLocalized(locale, bytes);
  const [file, setFile] = useState<File | null>(null);
  const [thumbs, setThumbs] = useState<string[]>([]);
  const [order, setOrder] = useState<number[]>([]); // 0-based source page indices
  const [prep, setPrep] = useState<string | null>(null);
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : order.length ? 1 : 0;

  const onFiles = async (files: File[]) => {
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      setPrep(t.prepRendering);
      const pdfjs = await loadPdfJs();
      const doc = await pdfjs
        .getDocument({ data: new Uint8Array(await f.arrayBuffer()) })
        .promise.catch(() => {
          throw new ToolFailure("unreadable_pdf");
        });
      const n = doc.numPages;
      const imgs: string[] = [];
      for (let i = 1; i <= n; i++) {
        setPrep(fmt(t.prepRenderingProgress, { done: i, total: n }));
        const page = await doc.getPage(i);
        const viewport = page.getViewport({ scale: 0.4 });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new ToolFailure("canvas_unsupported");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvas, canvasContext: ctx, viewport }).promise;
        imgs.push(canvas.toDataURL("image/jpeg", 0.7));
      }
      setFile(f);
      setThumbs(imgs);
      setOrder(Array.from({ length: n }, (_, i) => i));
      setPrep(null);
    } catch (e) {
      setPrep(null);
      const m = mapToolError(e, t.common);
      setError(m.message, m.hint);
    }
  };

  const startOver = () => {
    setFile(null);
    setThumbs([]);
    setOrder([]);
    setPrep(null);
    resetFlow();
  };

  const move = (pos: number, dir: -1 | 1) =>
    setOrder((o) => moveInOrder(o, pos, dir));

  const run = async () => {
    if (!file || order.length === 0) return;
    setBusy(t.busyBuilding);
    try {
      const srcBytes = new Uint8Array(await file.arrayBuffer());
      const outBytes = await buildReorderedPdf(srcBytes, order);
      const blob = new Blob([new Uint8Array(outBytes)], { type: "application/pdf" });
      const filename = file.name.replace(/\.pdf$/i, "") + t.outputSuffix + ".pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e, t.common);
      setError(m.message, m.hint);
    }
  };

  const unchanged = order.length > 0 && order.every((v, i) => v === i);

  return (
    <ToolShell title={t.title} subtitle={t.subtitle}>
      <div className="mb-5">
        <StepIndicator steps={t.steps} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title={t.successTitle}
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          sizeText={size(state.success.sizeBytes)}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[...t.related]}
          downloadAgainLabel={t.common.downloadAgain}
          startOverLabel={t.common.startOver}
          tryNextLabel={t.common.tryNext}
          appCta={{ heading: t.common.appCtaHeading, sub: t.appCtaSub }}
        />
      ) : (
        <>
          <DropZone
            accept="application/pdf"
            onFiles={onFiles}
            label={t.common.dropPdfLabel}
            hint={t.common.dropPdfHint}
            privacyText={t.common.privacyText}
          />

          {file ? (
            <ul className="mt-4 space-y-2">
              <FileChip
                name={file.name}
                size={file.size}
                sizeText={size(file.size)}
                removeLabel={t.common.fileRemove}
                onRemove={startOver}
              />
            </ul>
          ) : null}

          {order.length > 0 ? (
            <>
              <p className="mt-4 mb-3 text-sm text-[--color-muted]">
                {plural(locale, order.length, t.instructions)}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {order.map((srcIdx, pos) => (
                  <li
                    key={srcIdx}
                    className="rounded-xl border border-[--color-border] bg-[--color-surface] p-2 flex flex-col gap-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumbs[srcIdx]}
                      alt={fmt(t.originalPageAlt, { page: srcIdx + 1 })}
                      className="w-full h-auto rounded-md border border-[--color-border] bg-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex items-center justify-between gap-1">
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[--color-ink] leading-tight">
                          {fmt(t.positionLabel, { position: pos + 1 })}
                        </p>
                        <p className="text-xs text-[--color-muted]">
                          {fmt(t.wasPageLabel, { page: srcIdx + 1 })}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          aria-label={fmt(t.moveEarlier, { position: pos + 1 })}
                          disabled={pos === 0}
                          onClick={() => move(pos, -1)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[--color-border] text-[--color-ink] hover:border-[--color-brand] disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <ChevronUp className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          aria-label={fmt(t.moveLater, { position: pos + 1 })}
                          disabled={pos === order.length - 1}
                          onClick={() => move(pos, 1)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[--color-border] text-[--color-ink] hover:border-[--color-brand] disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={run}
              disabled={!file || prep !== null || order.length === 0}
            >
              {state.status === "busy" ? t.actionBusy : t.actionIdle}
            </ProcessButton>
            {!unchanged ? (
              <button
                type="button"
                onClick={() =>
                  setOrder(Array.from({ length: order.length }, (_, i) => i))
                }
                className="text-sm font-semibold text-[--color-muted] hover:text-[--color-ink]"
              >
                {t.resetOrder}
              </button>
            ) : null}
          </div>

          <ProcessingStatus
            message={prep ?? (state.status === "busy" ? state.message : null)}
          />
          <ToolError
            message={state.status === "error" ? state.error : null}
            hint={state.status === "error" ? state.hint : undefined}
          />
        </>
      )}
    </ToolShell>
  );
}
