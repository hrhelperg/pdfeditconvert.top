"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";

export function WatermarkPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState(0.2);
  const [angleDeg, setAngleDeg] = useState(45);
  const [busy, setBusy] = useState(false);
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
    if (!text.trim()) {
      setError("Watermark text can't be empty.");
      return;
    }
    setBusy(true);
    try {
      const { PDFDocument, StandardFonts, degrees, rgb } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await file.arrayBuffer())).catch(() => {
        throw new Error("Could not read this PDF. It may be corrupted or password-protected.");
      });
      const font = await doc.embedFont(StandardFonts.HelveticaBold);
      for (const page of doc.getPages()) {
        const { width, height } = page.getSize();
        const fontSize = Math.min(width, height) / Math.max(text.length / 2, 8);
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const x = (width - textWidth) / 2;
        const y = height / 2;
        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0.85, 0.05, 0.08),
          opacity,
          rotate: degrees(angleDeg),
        });
      }
      const out = await doc.save();
      downloadBlob(out, file.name.replace(/\.pdf$/i, "") + "-watermarked.pdf", "application/pdf");
    } catch (e) {
      setError((e as Error).message || "Watermarking failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Add watermark to PDF" subtitle="Stamp text across every page.">
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
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="md:col-span-3">
          <label htmlFor="wm-text" className="block text-sm font-semibold text-[--color-ink] mb-2">
            Watermark text
          </label>
          <input
            id="wm-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            maxLength={60}
            className="w-full rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-[--color-ink] focus:outline-none focus:border-[--color-brand]"
          />
        </div>
        <div>
          <label htmlFor="wm-op" className="block text-sm font-semibold text-[--color-ink] mb-2">
            Opacity: {Math.round(opacity * 100)}%
          </label>
          <input
            id="wm-op"
            type="range"
            min={0.05}
            max={0.6}
            step={0.05}
            value={opacity}
            onChange={(e) => setOpacity(Number(e.currentTarget.value))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="wm-angle" className="block text-sm font-semibold text-[--color-ink] mb-2">
            Angle: {angleDeg}°
          </label>
          <input
            id="wm-angle"
            type="range"
            min={0}
            max={90}
            step={5}
            value={angleDeg}
            onChange={(e) => setAngleDeg(Number(e.currentTarget.value))}
            className="w-full"
          />
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={run} disabled={!file || !text.trim()}>
          {busy ? "Stamping…" : "Add watermark"}
        </ProcessButton>
      </div>
      <ToolError message={error} />
    </ToolShell>
  );
}
