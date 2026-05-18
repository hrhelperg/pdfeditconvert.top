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
import { OptionField } from "@/components/tools/primitives/OptionField";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { parsePageRange } from "@/lib/tools/pageRange";

export function SplitPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [range, setRange] = useState("");
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : file ? 1 : 0;

  const onFiles = async (files: File[]) => {
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
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  const startOver = () => {
    setFile(null);
    setPageCount(null);
    setRange("");
    resetFlow();
  };

  const split = async () => {
    if (!file || !pageCount) return;
    let pages: number[];
    try {
      pages = parsePageRange(range, pageCount);
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
      return;
    }
    setBusy("Extracting pages…");
    try {
      const { PDFDocument } = await loadPdfLib();
      const bytes = new Uint8Array(await file.arrayBuffer());
      const src = await PDFDocument.load(bytes);
      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, pages.map((p) => p - 1));
      for (const p of copied) out.addPage(p);
      const result = await out.save();
      const blob = new Blob([new Uint8Array(result)], { type: "application/pdf" });
      const base = file.name.replace(/\.pdf$/i, "");
      const filename = `${base}-pages-${pages[0]}-to-${pages[pages.length - 1]}.pdf`;
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Split PDF"
      subtitle="Upload a PDF and select the page range you want to export. Examples: 1-3 or 2,4,6."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your extracted PDF is ready"
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Merge PDFs", path: "/merge-pdf" },
            { label: "Rotate pages", path: "/rotate-pdf" },
          ]}
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
              <OptionField
                label={`Pages to keep (${pageCount} total)`}
                hint="Examples: 1-3 or 2,4,6 or 1-3,5,8-10"
                type="text"
                value={range}
                onChange={(e) => setRange(e.currentTarget.value)}
                placeholder="e.g. 1-3 or 2,4,6"
                inputMode="numeric"
              />
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={split}
              disabled={!file || !range.trim()}
            >
              {state.status === "busy" ? "Splitting…" : "Split PDF"}
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
