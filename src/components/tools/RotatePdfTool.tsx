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
import { OptionField } from "@/components/tools/primitives/OptionField";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { parsePageRange } from "@/lib/tools/pageRange";

type Angle = "90" | "180" | "270";
type Scope = "all" | "some";

export function RotatePdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [angle, setAngle] = useState<Angle>("90");
  const [scope, setScope] = useState<Scope>("all");
  const [range, setRange] = useState("");
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : file ? 1 : 0;

  const onFiles = async (files: File[]) => {
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      const { PDFDocument } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await f.arrayBuffer())).catch(() => {
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
    setScope("all");
    setAngle("90");
    resetFlow();
  };

  const run = async () => {
    if (!file || !pageCount) return;
    setBusy("Rotating pages…");
    try {
      const { PDFDocument, degrees } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await file.arrayBuffer()));
      const indices =
        scope === "all"
          ? doc.getPageIndices()
          : parsePageRange(range, pageCount).map((p) => p - 1);
      const angleNum = Number(angle);
      for (const i of indices) {
        const page = doc.getPage(i);
        const current = page.getRotation().angle;
        page.setRotation(degrees((current + angleNum) % 360));
      }
      const out = await doc.save();
      const blob = new Blob([new Uint8Array(out)], { type: "application/pdf" });
      const filename = file.name.replace(/\.pdf$/i, "") + "-rotated.pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Rotate PDF"
      subtitle="Rotate all pages or selected pages, then download a corrected PDF."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your rotated PDF is ready"
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Split a PDF", path: "/split-pdf" },
            { label: "Add a watermark", path: "/add-watermark-to-pdf" },
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
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <OptionGroup<Angle>
                label="Rotation"
                value={angle}
                onChange={setAngle}
                options={[
                  { value: "90", label: "90°" },
                  { value: "180", label: "180°" },
                  { value: "270", label: "270°" },
                ]}
              />
              <OptionGroup<Scope>
                label="Apply to"
                value={scope}
                onChange={setScope}
                options={[
                  { value: "all", label: "All pages" },
                  { value: "some", label: "Some pages" },
                ]}
              />
              {scope === "some" ? (
                <div className="md:col-span-2">
                  <OptionField
                    label="Pages to rotate"
                    hint="Examples: 1-3 or 2,4,6"
                    type="text"
                    value={range}
                    onChange={(e) => setRange(e.currentTarget.value)}
                    placeholder="e.g. 1,3-5"
                    inputMode="numeric"
                  />
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={run}
              disabled={!file || (scope === "some" && !range.trim())}
            >
              {state.status === "busy" ? "Rotating…" : "Rotate PDF"}
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
