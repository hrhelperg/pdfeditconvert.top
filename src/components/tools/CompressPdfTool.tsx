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
import { assertPdf, formatBytes } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { loadPdfJs } from "@/lib/tools/pdfjs";

type Preset = "low" | "recommended" | "strong";

const PRESETS: Record<Preset, { scale: number; quality: number }> = {
  low: { scale: 2.0, quality: 0.82 },
  recommended: { scale: 1.5, quality: 0.68 },
  strong: { scale: 1.0, quality: 0.5 },
};

export function CompressPdfTool() {
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
      const m = mapToolError(e);
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
    setBusy("Reading PDF…");
    try {
      const { scale, quality } = PRESETS[preset];
      const { PDFDocument } = await loadPdfLib();
      const pdfjs = await loadPdfJs();

      const srcBytes = new Uint8Array(await file.arrayBuffer());
      const srcDoc = await PDFDocument.load(srcBytes).catch(() => {
        throw new Error("Could not read this PDF. It may be corrupted or password-protected.");
      });
      const jsDoc = await pdfjs.getDocument({ data: new Uint8Array(srcBytes) }).promise;

      const out = await PDFDocument.create();
      const total = jsDoc.numPages;
      for (let i = 0; i < total; i++) {
        setBusy(`Compressing page ${i + 1} of ${total}…`);
        const { width, height } = srcDoc.getPage(i).getSize();
        const page = await jsDoc.getPage(i + 1);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas not supported in this browser.");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvas, canvasContext: ctx, viewport }).promise;
        const jpeg: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error("Image encoding failed."))),
            "image/jpeg",
            quality,
          ),
        );
        const img = await out.embedJpg(new Uint8Array(await jpeg.arrayBuffer()));
        const p = out.addPage([width, height]);
        p.drawImage(img, { x: 0, y: 0, width, height });
      }

      setBusy("Finalizing…");
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
        description = `This PDF is mostly text or vector graphics and is already compact (${formatBytes(
          originalSize,
        )}). Compression wouldn't help, so your original file is unchanged.`;
      } else {
        blob = new Blob([new Uint8Array(outBytes)], { type: "application/pdf" });
        filename = `${base}-compressed.pdf`;
        const pct = Math.round((1 - outBytes.byteLength / originalSize) * 100);
        description = `Reduced ${formatBytes(originalSize)} → ${formatBytes(
          blob.size,
        )} (${pct}% smaller). Pages were re-rendered as images, so text is no longer selectable.`;
      }
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
      // stash the human-readable summary on the flow via description prop below
      setSummary(description);
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Compress PDF"
      subtitle="Shrink a PDF's file size for email, upload or storage — in your browser."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your compressed PDF is ready"
          description={summary}
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Merge PDFs", path: "/merge-pdf" },
            { label: "Split a PDF", path: "/split-pdf" },
          ]}
          appCta={{
            heading: "Need PDF tools on your phone?",
            sub: "PDF Editor for iPhone and Android compresses and shares PDFs too.",
          }}
        />
      ) : (
        <>
          <DropZone
            accept="application/pdf"
            onFiles={onFiles}
            label="Drop a PDF here, or click to choose"
            hint="One PDF · up to 100 MB"
          />

          {file ? (
            <ul className="mt-4 space-y-2">
              <FileChip
                name={file.name}
                size={file.size}
                onRemove={() => setFile(null)}
              />
            </ul>
          ) : null}

          {file ? (
            <div className="mt-5">
              <OptionGroup<Preset>
                label="Compression level"
                value={preset}
                onChange={setPreset}
                options={[
                  { value: "low", label: "Low" },
                  { value: "recommended", label: "Recommended" },
                  { value: "strong", label: "Strong" },
                ]}
              />
              <p className="mt-2 text-xs text-[--color-muted]">
                Stronger compression rasterizes pages (text becomes an image,
                no longer selectable). Best for scanned or image-heavy PDFs.
              </p>
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton busy={state.status === "busy"} onClick={run} disabled={!file}>
              {state.status === "busy" ? "Compressing…" : "Compress PDF"}
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
