"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfJs } from "@/lib/tools/pdfjs";

type Format = "png" | "jpeg";

export function PdfToImagesTool() {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<Format>("png");
  const [scale, setScale] = useState(2);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onFiles = (files: File[]) => {
    setError(null);
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      setFile(f);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const run = async () => {
    setError(null);
    if (!file) return;
    setBusy(true);
    setProgress("Loading PDF…");
    try {
      const pdfjs = await loadPdfJs();
      const bytes = new Uint8Array(await file.arrayBuffer());
      const doc = await pdfjs.getDocument({ data: bytes }).promise;
      const base = file.name.replace(/\.pdf$/i, "");
      for (let i = 1; i <= doc.numPages; i++) {
        setProgress(`Rendering page ${i} of ${doc.numPages}…`);
        const page = await doc.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas not supported.");
        await page.render({ canvasContext: ctx, viewport }).promise;
        const mime = format === "png" ? "image/png" : "image/jpeg";
        const ext = format === "png" ? "png" : "jpg";
        const quality = format === "jpeg" ? 0.92 : undefined;
        const blob: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error("Encoding failed."))),
            mime,
            quality,
          ),
        );
        downloadBlob(blob, `${base}-page-${String(i).padStart(2, "0")}.${ext}`, mime);
        await new Promise((r) => setTimeout(r, 100));
      }
      setProgress(`Done — ${doc.numPages} image${doc.numPages === 1 ? "" : "s"} downloaded.`);
    } catch (e) {
      setError((e as Error).message || "Rendering failed. Try a smaller PDF or lower scale.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="PDF to images" subtitle="Render each page as a PNG or JPG.">
      <DropZone
        accept="application/pdf"
        onFiles={onFiles}
        label="Drop a PDF here, or click to choose"
        hint="One PDF · up to 100 MB"
      />
      {file ? (
        <ul className="mt-4 space-y-2">
          <FileChip name={file.name} size={file.size} onRemove={() => setFile(null)} />
        </ul>
      ) : null}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-[--color-ink] mb-2">Format</label>
          <div className="flex gap-2">
            {(["png", "jpeg"] as Format[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFormat(f)}
                className={`px-4 py-2 rounded-xl border font-semibold uppercase ${
                  format === f
                    ? "border-[--color-brand] bg-[--color-brand] text-white"
                    : "border-[--color-border] bg-[--color-surface] text-[--color-ink]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[--color-ink] mb-2">
            Scale: {scale}×
          </label>
          <input
            type="range"
            min={1}
            max={3}
            step={0.5}
            value={scale}
            onChange={(e) => setScale(Number(e.currentTarget.value))}
            className="w-full"
          />
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={run} disabled={!file}>
          {busy ? "Rendering…" : "Export images"}
        </ProcessButton>
        {progress ? <span className="text-sm text-[--color-muted]">{progress}</span> : null}
      </div>
      <ToolError message={error} />
    </ToolShell>
  );
}
