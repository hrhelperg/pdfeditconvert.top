"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";
import { SuccessState } from "@/components/tools/primitives/SuccessState";
import { ProcessingStatus } from "@/components/tools/primitives/ProcessingStatus";
import { OptionGroup } from "@/components/tools/primitives/OptionGroup";
import { OptionRange } from "@/components/tools/primitives/OptionRange";
import { OptionField } from "@/components/tools/primitives/OptionField";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfJs } from "@/lib/tools/pdfjs";
import { parsePageRange } from "@/lib/tools/pageRange";
import { ToolFailure } from "@/lib/tools/toolError";
import { fmt, plural, formatBytesLocalized } from "@/lib/i18n/format";
import type { Locale } from "@/lib/i18n/locales";
import type { ResolvedToolStrings } from "@/lib/i18n/toolStrings";

type Format = "png" | "jpeg";

export function PdfToImagesTool({
  strings,
  locale,
}: {
  strings: ResolvedToolStrings<"pdf-to-images">;
  locale: Locale;
}) {
  const t = strings;
  const size = (bytes: number) => formatBytesLocalized(locale, bytes);
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<Format>("png");
  const [scale, setScale] = useState(2);
  const [quality, setQuality] = useState(0.92);
  const [range, setRange] = useState("");
  // Retain every generated image Blob so "Download again" can re-trigger all
  // downloads without re-rendering the PDF. Held in component state so it
  // survives rerenders; cleared on Start over (and dropped on unmount → GC).
  const [outputs, setOutputs] = useState<
    { blob: Blob; filename: string; mime: string }[]
  >([]);
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : file ? 1 : 0;

  const onFiles = (files: File[]) => {
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      setFile(f);
    } catch (e) {
      const m = mapToolError(e, t.common);
      setError(m.message, m.hint);
    }
  };

  const startOver = () => {
    setFile(null);
    setRange("");
    setOutputs([]);
    resetFlow();
  };

  const downloadAll = () => {
    for (const o of outputs) downloadBlob(o.blob, o.filename, o.mime);
  };

  const run = async () => {
    if (!file) return;
    setBusy(t.busyLoading);
    try {
      const pdfjs = await loadPdfJs();
      const bytes = new Uint8Array(await file.arrayBuffer());
      const doc = await pdfjs.getDocument({ data: bytes }).promise;
      const base = file.name.replace(/\.pdf$/i, "");
      const totalPages = doc.numPages;
      const pages = range.trim()
        ? parsePageRange(range, totalPages)
        : Array.from({ length: totalPages }, (_, i) => i + 1);
      const produced: { blob: Blob; filename: string; mime: string }[] = [];
      for (const i of pages) {
        setBusy(fmt(t.busyPage, { page: i, total: totalPages }));
        const page = await doc.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new ToolFailure("canvas_unsupported");
        await page.render({ canvas, canvasContext: ctx, viewport }).promise;
        const mime = format === "png" ? "image/png" : "image/jpeg";
        const ext = format === "png" ? "png" : "jpg";
        const q = format === "jpeg" ? quality : undefined;
        const blob: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new ToolFailure("encode_failed"))),
            mime,
            q,
          ),
        );
        const filename = `${base}-page-${String(i).padStart(2, "0")}.${ext}`;
        downloadBlob(blob, filename, mime);
        produced.push({ blob, filename, mime });
        await new Promise((r) => setTimeout(r, 100));
      }
      if (produced.length > 0) {
        setOutputs(produced);
        const last = produced[produced.length - 1];
        const totalBytes = produced.reduce((n, o) => n + o.blob.size, 0);
        setSuccess({
          filename: plural(locale, produced.length, t.downloadedSummary, {
            filename: last.filename,
          }),
          sizeBytes: totalBytes,
          blob: last.blob,
        });
      }
    } catch (e) {
      const m = mapToolError(e, t.common);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell title={t.title} subtitle={t.subtitle}>
      <div className="mb-5">
        <StepIndicator steps={t.steps} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title={t.successTitle}
          description={t.successDescription}
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          sizeText={size(state.success.sizeBytes)}
          onReset={startOver}
          onDownloadAgain={downloadAll}
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
                onRemove={() => setFile(null)}
              />
            </ul>
          ) : null}

          {file ? (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <OptionGroup<Format>
                label={t.formatLabel}
                value={format}
                onChange={setFormat}
                options={[
                  { value: "png", label: "PNG" },
                  { value: "jpeg", label: "JPEG" },
                ]}
              />
              <OptionRange
                label={t.scaleLabel}
                valueLabel={`${scale}×`}
                min={1}
                max={3}
                step={0.5}
                value={scale}
                onChange={setScale}
              />
              {format === "jpeg" ? (
                <OptionRange
                  label={t.qualityLabel}
                  valueLabel={`${Math.round(quality * 100)}%`}
                  min={0.5}
                  max={1}
                  step={0.05}
                  value={quality}
                  onChange={setQuality}
                />
              ) : null}
              <OptionField
                label={t.rangeLabel}
                hint={t.rangeHint}
                type="text"
                value={range}
                onChange={(e) => setRange(e.currentTarget.value)}
                placeholder={t.rangePlaceholder}
                inputMode="numeric"
              />
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={run}
              disabled={!file}
            >
              {state.status === "busy" ? t.actionBusy : t.actionIdle}
            </ProcessButton>
          </div>

          <ProcessingStatus
            message={state.status === "busy" ? state.message : null}
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
