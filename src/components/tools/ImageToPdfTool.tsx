"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertImage, MAX_FILES } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { uuid } from "@/lib/tools/uuid";

type Item = { id: string; file: File };

export function ImageToPdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addFiles = (files: File[]) => {
    setError(null);
    try {
      for (const f of files) assertImage(f);
      const next = [...items, ...files.map((file) => ({ id: uuid(), file }))];
      if (next.length > MAX_FILES) {
        throw new Error(`Add up to ${MAX_FILES} images at a time.`);
      }
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

  const create = async () => {
    setError(null);
    if (items.length === 0) {
      setError("Add at least one image first.");
      return;
    }
    setBusy(true);
    try {
      const { PDFDocument } = await loadPdfLib();
      const pdf = await PDFDocument.create();
      for (const { file } of items) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        let image;
        if (file.type === "image/png" || /\.png$/i.test(file.name)) {
          image = await pdf.embedPng(bytes);
        } else if (file.type === "image/webp" || /\.webp$/i.test(file.name)) {
          const png = await webpToPng(file);
          image = await pdf.embedPng(png);
        } else {
          image = await pdf.embedJpg(bytes);
        }
        const page = pdf.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      }
      const out = await pdf.save();
      downloadBlob(out, "images.pdf", "application/pdf");
    } catch (e) {
      setError((e as Error).message || "We couldn't create your PDF. Try fewer or smaller images.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Image to PDF" subtitle="Combine JPG, PNG and WebP images into one document.">
      <DropZone
        accept="image/jpeg,image/png,image/webp"
        multiple
        onFiles={addFiles}
        label="Drop images here, or click to choose"
        hint="JPG, PNG or WebP · up to 100 MB each"
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
        <ProcessButton busy={busy} onClick={create} disabled={items.length === 0}>
          {busy ? "Creating PDF…" : "Create PDF"}
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

async function webpToPng(file: File): Promise<Uint8Array> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported in this browser.");
  ctx.drawImage(bitmap, 0, 0);
  const blob: Blob = await new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Failed to encode PNG."))), "image/png"),
  );
  return new Uint8Array(await blob.arrayBuffer());
}
