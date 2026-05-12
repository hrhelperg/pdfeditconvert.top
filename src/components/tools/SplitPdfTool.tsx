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
import { parsePageRange } from "@/lib/tools/pageRange";

export function SplitPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [range, setRange] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFiles = async (files: File[]) => {
    setError(null);
    setPageCount(null);
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      const { PDFDocument } = await loadPdfLib();
      const bytes = new Uint8Array(await f.arrayBuffer());
      const doc = await PDFDocument.load(bytes).catch(() => {
        throw new Error("Could not read this PDF. It may be corrupted or password-protected.");
      });
      setFile(f);
      setPageCount(doc.getPageCount());
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const split = async () => {
    setError(null);
    if (!file || !pageCount) return;
    let pages: number[];
    try {
      pages = parsePageRange(range, pageCount);
    } catch (e) {
      setError((e as Error).message);
      return;
    }
    setBusy(true);
    try {
      const { PDFDocument } = await loadPdfLib();
      const bytes = new Uint8Array(await file.arrayBuffer());
      const src = await PDFDocument.load(bytes);
      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, pages.map((p) => p - 1));
      for (const p of copied) out.addPage(p);
      const result = await out.save();
      const base = file.name.replace(/\.pdf$/i, "");
      downloadBlob(result, `${base}-pages-${pages[0]}-to-${pages[pages.length - 1]}.pdf`, "application/pdf");
    } catch (e) {
      setError((e as Error).message || "Split failed. Try a smaller file.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Split PDF" subtitle="Extract pages or ranges into a new document.">
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
            onRemove={() => {
              setFile(null);
              setPageCount(null);
              setRange("");
            }}
          />
        </ul>
      ) : null}
      {pageCount ? (
        <div className="mt-5">
          <label className="block text-sm font-semibold text-[--color-ink] mb-2">
            Pages to keep ({pageCount} total)
          </label>
          <input
            type="text"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            placeholder="e.g. 1-3,5,8-10"
            className="w-full rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-[--color-ink] focus:outline-none focus:border-[--color-brand]"
          />
        </div>
      ) : null}
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={split} disabled={!file || !range.trim()}>
          {busy ? "Extracting…" : "Extract pages"}
        </ProcessButton>
      </div>
      <ToolError message={error} />
    </ToolShell>
  );
}
