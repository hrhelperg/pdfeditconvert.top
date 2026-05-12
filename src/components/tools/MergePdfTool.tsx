"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertPdf, MAX_FILES } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";

type Item = { id: string; file: File };

export function MergePdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addFiles = (files: File[]) => {
    setError(null);
    try {
      for (const f of files) assertPdf(f);
      const next = [...items, ...files.map((file) => ({ id: crypto.randomUUID(), file }))];
      if (next.length > MAX_FILES) throw new Error(`Add up to ${MAX_FILES} PDFs at a time.`);
      setItems(next);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const remove = (id: string) => setItems((xs) => xs.filter((x) => x.id !== id));
  const move = (id: string, dir: -1 | 1) =>
    setItems((xs) => {
      const i = xs.findIndex((x) => x.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= xs.length) return xs;
      const next = xs.slice();
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  const merge = async () => {
    setError(null);
    if (items.length < 2) {
      setError("Add at least two PDFs to merge.");
      return;
    }
    setBusy(true);
    try {
      const { PDFDocument } = await loadPdfLib();
      const out = await PDFDocument.create();
      for (const { file } of items) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const src = await PDFDocument.load(bytes, { ignoreEncryption: false }).catch(() => {
          throw new Error(`"${file.name}" looks corrupted or password-protected.`);
        });
        const copied = await out.copyPages(src, src.getPageIndices());
        for (const p of copied) out.addPage(p);
      }
      const bytes = await out.save();
      downloadBlob(bytes, "merged.pdf", "application/pdf");
    } catch (e) {
      setError((e as Error).message || "Merge failed. Try fewer or smaller files.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Merge PDFs" subtitle="Combine multiple PDFs into a single document.">
      <DropZone
        accept="application/pdf"
        multiple
        onFiles={addFiles}
        label="Drop PDFs here, or click to choose"
        hint="PDF · up to 100 MB each"
      />
      {items.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {items.map((it, idx) => (
            <FileChip
              key={it.id}
              name={it.file.name}
              size={it.file.size}
              onRemove={() => remove(it.id)}
              onMoveUp={idx > 0 ? () => move(it.id, -1) : undefined}
              onMoveDown={idx < items.length - 1 ? () => move(it.id, 1) : undefined}
            />
          ))}
        </ul>
      ) : null}
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={merge} disabled={items.length < 2}>
          {busy ? "Merging…" : "Merge PDFs"}
        </ProcessButton>
        {items.length > 0 ? (
          <button
            type="button"
            onClick={() => setItems([])}
            className="text-sm font-semibold text-[--color-muted] hover:text-[--color-ink]"
          >
            Clear all
          </button>
        ) : null}
      </div>
      <ToolError message={error} />
    </ToolShell>
  );
}
