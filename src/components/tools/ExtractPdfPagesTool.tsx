"use client";

import { useMemo, useState } from "react";
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
import { buildPdfFromPages } from "@/lib/tools/pdfPages";

export function ExtractPdfPagesTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [range, setRange] = useState("");
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 = state.status === "success" ? 2 : file ? 1 : 0;

  const selectedCount = useMemo(() => {
    if (!pageCount || !range.trim()) return null;
    try {
      return parsePageRange(range, pageCount).length;
    } catch {
      return null;
    }
  }, [range, pageCount]);

  const onFiles = async (files: File[]) => {
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      const { PDFDocument } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await f.arrayBuffer())).catch(
        () => {
          throw new Error(
            "Could not read this PDF. It may be corrupted or password-protected.",
          );
        },
      );
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

  const run = async () => {
    if (!file || !pageCount) return;
    setBusy("Extracting pages…");
    try {
      const pages = parsePageRange(range, pageCount); // throws on invalid
      const srcBytes = new Uint8Array(await file.arrayBuffer());
      const outBytes = await buildPdfFromPages(srcBytes, pages);
      const blob = new Blob([new Uint8Array(outBytes)], { type: "application/pdf" });
      const filename = file.name.replace(/\.pdf$/i, "") + "-pages.pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Extract PDF pages"
      subtitle="Pick specific pages or ranges and download a new PDF with only those pages."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Select", "Download"]} current={current} />
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
            { label: "Split a PDF", path: "/split-pdf" },
            { label: "Reorder PDF pages", path: "/reorder-pdf-pages" },
          ]}
          appCta={{
            heading: "Need PDF tools on your phone?",
            sub: "PDF Editor for iPhone and Android extracts and reorders pages too.",
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
              <p className="text-sm text-[--color-muted] mb-2">
                This PDF has{" "}
                <strong className="text-[--color-ink]">{pageCount}</strong>{" "}
                page{pageCount === 1 ? "" : "s"}.
              </p>
              <OptionField
                label="Pages to extract"
                hint="Examples: 1-3 · 2,4,6 · 1-2,5,8-10"
                type="text"
                value={range}
                onChange={(e) => setRange(e.currentTarget.value)}
                placeholder="e.g. 1-3,5"
                inputMode="numeric"
              />
              {selectedCount !== null ? (
                <p className="mt-2 text-sm font-medium text-[--color-ink]">
                  {selectedCount} of {pageCount} page
                  {selectedCount === 1 ? "" : "s"} selected.
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={run}
              disabled={!file || !range.trim()}
            >
              {state.status === "busy" ? "Extracting…" : "Extract pages"}
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
