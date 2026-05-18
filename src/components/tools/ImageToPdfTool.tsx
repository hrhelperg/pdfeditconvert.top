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
import { assertImage, MAX_FILES } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { uuid } from "@/lib/tools/uuid";

type Item = { id: string; file: File };

type PageSize = "auto" | "a4" | "letter";
type Orientation = "auto" | "portrait" | "landscape";
type Fit = "fit" | "fill";
type Margin = "none" | "small" | "medium";

const PAGE_SIZES: Record<Exclude<PageSize, "auto">, { w: number; h: number }> = {
  // 72 dpi PDF points
  a4: { w: 595.28, h: 841.89 },
  letter: { w: 612, h: 792 },
};

const MARGINS: Record<Margin, number> = {
  none: 0,
  small: 24,
  medium: 48,
};

export function ImageToPdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [pageSize, setPageSize] = useState<PageSize>("auto");
  const [orientation, setOrientation] = useState<Orientation>("auto");
  const [fit, setFit] = useState<Fit>("fit");
  const [margin, setMargin] = useState<Margin>("none");
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : items.length > 0 ? 1 : 0;

  const addFiles = (files: File[]) => {
    try {
      for (const f of files) assertImage(f);
      const next = [...items, ...files.map((file) => ({ id: uuid(), file }))];
      if (next.length > MAX_FILES) {
        throw new Error(`Add up to ${MAX_FILES} images at a time.`);
      }
      setItems(next);
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
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

  const startOver = () => {
    setItems([]);
    resetFlow();
  };

  const create = async () => {
    if (items.length === 0) {
      setError("Add at least one image first.");
      return;
    }
    setBusy("Creating your PDF…");
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
        const { width: pageW, height: pageH } = resolvePageSize(
          pageSize,
          orientation,
          image.width,
          image.height,
        );
        const m = MARGINS[margin];
        const innerW = pageW - m * 2;
        const innerH = pageH - m * 2;
        const { w, h, x, y } = layoutImage(image.width, image.height, innerW, innerH, fit);
        const page = pdf.addPage([pageW, pageH]);
        page.drawImage(image, { x: x + m, y: y + m, width: w, height: h });
      }
      const out = await pdf.save();
      const blob = new Blob([new Uint8Array(out)], { type: "application/pdf" });
      const filename = "images.pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Image to PDF"
      subtitle="Upload JPG, PNG, or WebP images and combine them into one PDF."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your PDF is ready"
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Merge two PDFs", path: "/merge-pdf" },
            { label: "Add a watermark", path: "/add-watermark-to-pdf" },
          ]}
          appCta={{
            heading: "Need PDF tools on your phone?",
            sub: "PDF Editor for iPhone and Android works offline too.",
          }}
        />
      ) : (
        <>
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

          {items.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <OptionGroup<PageSize>
                label="Page size"
                value={pageSize}
                onChange={setPageSize}
                options={[
                  { value: "auto", label: "Auto" },
                  { value: "a4", label: "A4" },
                  { value: "letter", label: "Letter" },
                ]}
              />
              <OptionGroup<Orientation>
                label="Orientation"
                value={orientation}
                onChange={setOrientation}
                options={[
                  { value: "auto", label: "Auto" },
                  { value: "portrait", label: "Portrait" },
                  { value: "landscape", label: "Landscape" },
                ]}
              />
              <OptionGroup<Fit>
                label="Image fit"
                value={fit}
                onChange={setFit}
                options={[
                  { value: "fit", label: "Fit page" },
                  { value: "fill", label: "Fill page" },
                ]}
              />
              <OptionGroup<Margin>
                label="Margin"
                value={margin}
                onChange={setMargin}
                options={[
                  { value: "none", label: "None" },
                  { value: "small", label: "Small" },
                  { value: "medium", label: "Medium" },
                ]}
              />
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={create}
              disabled={items.length === 0}
            >
              {state.status === "busy" ? "Converting…" : "Convert to PDF"}
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

function resolvePageSize(
  size: PageSize,
  orientation: Orientation,
  imgW: number,
  imgH: number,
): { width: number; height: number } {
  const base =
    size === "auto"
      ? { w: imgW, h: imgH }
      : PAGE_SIZES[size];

  let { w, h } = base;
  if (orientation === "portrait" && w > h) [w, h] = [h, w];
  if (orientation === "landscape" && h > w) [w, h] = [h, w];
  if (orientation === "auto" && size !== "auto") {
    if (imgW > imgH && h > w) [w, h] = [h, w];
    if (imgH > imgW && w > h) [w, h] = [h, w];
  }
  return { width: w, height: h };
}

function layoutImage(
  imgW: number,
  imgH: number,
  boxW: number,
  boxH: number,
  fit: Fit,
): { w: number; h: number; x: number; y: number } {
  if (fit === "fit") {
    const scale = Math.min(boxW / imgW, boxH / imgH);
    const w = imgW * scale;
    const h = imgH * scale;
    return { w, h, x: (boxW - w) / 2, y: (boxH - h) / 2 };
  }
  // fill: draw the image at the box dimensions, accepting horizontal or vertical
  // crop of the source — never bleed past the media box.
  return { w: boxW, h: boxH, x: 0, y: 0 };
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
