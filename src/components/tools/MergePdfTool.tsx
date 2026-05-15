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
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf, MAX_FILES } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { uuid } from "@/lib/tools/uuid";

type Item = { id: string; file: File };

export function MergePdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : items.length >= 2 ? 1 : 0;

  const addFiles = (files: File[]) => {
    try {
      for (const f of files) assertPdf(f);
      const next = [...items, ...files.map((file) => ({ id: uuid(), file }))];
      if (next.length > MAX_FILES) throw new Error(`Add up to ${MAX_FILES} PDFs at a time.`);
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

  const merge = async () => {
    if (items.length < 2) {
      setError("Add at least two PDFs to merge.");
      return;
    }
    setBusy("Combining PDFs…");
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
      const blob = new Blob([new Uint8Array(bytes)], { type: "application/pdf" });
      const filename = "merged.pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Merge PDFs"
      subtitle="Upload two or more PDF files and combine them into one document."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your merged PDF is ready"
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Split a PDF", path: "/split-pdf" },
            { label: "Rotate pages", path: "/rotate-pdf" },
          ]}
          appCta={{
            heading: "Need PDF tools on your phone?",
            sub: "PDF Editor for iPhone and Android handles merge and split too.",
          }}
        />
      ) : (
        <>
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
            <ProcessButton
              busy={state.status === "busy"}
              onClick={merge}
              disabled={items.length < 2}
            >
              {state.status === "busy" ? "Merging…" : "Merge PDFs"}
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
