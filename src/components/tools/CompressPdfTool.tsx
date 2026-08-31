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
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { loadPdfJs } from "@/lib/tools/pdfjs";
import { ToolFailure } from "@/lib/tools/toolError";
import { fmt, formatBytesLocalized } from "@/lib/i18n/format";
import type { Locale } from "@/lib/i18n/locales";
import type { ResolvedToolStrings } from "@/lib/i18n/toolStrings";

type Preset = "low" | "recommended" | "strong";

const PRESETS: Record<Preset, { scale: number; quality: number }> = {
  low: { scale: 2.0, quality: 0.82 },
  recommended: { scale: 1.5, quality: 0.68 },
  strong: { scale: 1.0, quality: 0.5 },
};

export function CompressPdfTool({
  strings,
  locale,
}: {
  strings: ResolvedToolStrings<"compress-pdf">;
  locale: Locale;
}) {
  const t = strings;
  const size = (bytes: number) => formatBytesLocalized(locale, bytes);
  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState<Preset>("recommended");
  const [summary, setSummary] = useState<string>("");
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 = state.status === "success" ? 2 : file ? 1 : 0;

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
    setPreset("recommended");
    resetFlow();
  };

  const run = async () => {
    if (!file) return;
    const originalSize = file.size;
    setBusy(t.busyReading);
    try {
      const { scale, quality } = PRESETS[preset];
      const { PDFDocument } = await loadPdfLib();
      const pdfjs = await loadPdfJs();

      const srcBytes = new Uint8Array(await file.arrayBuffer());
      const srcDoc = await PDFDocument.load(srcBytes).catch(() => {
        throw new ToolFailure("unreadable_pdf");
      });
      const jsDoc = await pdfjs.getDocument({ data: new Uint8Array(srcBytes) }).promise;

      const out = await PDFDocument.create();
      const total = jsDoc.numPages;
      for (let i = 0; i < total; i++) {
        setBusy(fmt(t.busyPage, { page: i + 1, total }));
        const { width, height } = srcDoc.getPage(i).getSize();
        const page = await jsDoc.getPage(i + 1);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new ToolFailure("canvas_unsupported");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvas, canvasContext: ctx, viewport }).promise;
        const jpeg: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new ToolFailure("encode_failed"))),
            "image/jpeg",
            quality,
          ),
        );
        const img = await out.embedJpg(new Uint8Array(await jpeg.arrayBuffer()));
        const p = out.addPage([width, height]);
        p.drawImage(img, { x: 0, y: 0, width, height });
      }

      setBusy(t.busyFinalizing);
      const outBytes = await out.save({ useObjectStreams: true });
      const base = file.name.replace(/\.pdf$/i, "");

      let blob: Blob;
      let filename: string;
      let description: string;
      if (outBytes.byteLength >= originalSize * 0.97) {
        // No meaningful gain (typically text/vector-only PDFs). Never hand
        // back a larger file — keep the user's original untouched.
        blob = new Blob([new Uint8Array(srcBytes)], { type: "application/pdf" });
        filename = `${base}.pdf`;
        description = fmt(t.summaryAlreadyCompact, { size: size(originalSize) });
      } else {
        blob = new Blob([new Uint8Array(outBytes)], { type: "application/pdf" });
        filename = `${base}${t.outputSuffix}.pdf`;
        const pct = Math.round((1 - outBytes.byteLength / originalSize) * 100);
        description = fmt(t.summaryReduced, {
          from: size(originalSize),
          to: size(blob.size),
          percent: pct,
        });
      }
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
      // stash the human-readable summary on the flow via description prop below
      setSummary(description);
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
          description={summary}
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
                onRemove={() => setFile(null)}
              />
            </ul>
          ) : null}

          {file ? (
            <div className="mt-5">
              <OptionGroup<Preset>
                label={t.levelLabel}
                value={preset}
                onChange={setPreset}
                options={[
                  { value: "low", label: t.levelLow },
                  { value: "recommended", label: t.levelRecommended },
                  { value: "strong", label: t.levelStrong },
                ]}
              />
              <p className="mt-2 text-xs text-[--color-muted]">{t.levelNote}</p>
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton busy={state.status === "busy"} onClick={run} disabled={!file}>
              {state.status === "busy" ? t.actionBusy : t.actionIdle}
            </ProcessButton>
          </div>

          <ProcessingStatus message={state.status === "busy" ? state.message : null} />
          <ToolError
            message={state.status === "error" ? state.error : null}
            hint={state.status === "error" ? state.hint : undefined}
          />
        </>
      )}
    </ToolShell>
  );
}
