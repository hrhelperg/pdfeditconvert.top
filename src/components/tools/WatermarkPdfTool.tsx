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
import { OptionRange } from "@/components/tools/primitives/OptionRange";
import { OptionField } from "@/components/tools/primitives/OptionField";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";

type Position = "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

export function WatermarkPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState(0.2);
  const [angleDeg, setAngleDeg] = useState(45);
  const [position, setPosition] = useState<Position>("center");
  const [fontSize, setFontSize] = useState(48);
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : file ? 1 : 0;

  const onFiles = (files: File[]) => {
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      setFile(f);
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  const startOver = () => {
    setFile(null);
    resetFlow();
  };

  const run = async () => {
    if (!file) return;
    if (!text.trim()) {
      setError("Watermark text can't be empty.");
      return;
    }
    setBusy("Stamping pages…");
    try {
      const { PDFDocument, StandardFonts, degrees, rgb } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await file.arrayBuffer())).catch(() => {
        throw new Error("Could not read this PDF. It may be corrupted or password-protected.");
      });
      const font = await doc.embedFont(StandardFonts.HelveticaBold);
      for (const page of doc.getPages()) {
        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const { x, y } = positionFor(position, width, height, textWidth, fontSize);
        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0.85, 0.05, 0.08),
          opacity,
          rotate: degrees(position === "center" ? angleDeg : 0),
        });
      }
      const out = await doc.save();
      const blob = new Blob([new Uint8Array(out)], { type: "application/pdf" });
      const filename = file.name.replace(/\.pdf$/i, "") + "-watermarked.pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Add watermark to PDF"
      subtitle="Add a simple text watermark before sharing your PDF."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your watermarked PDF is ready"
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
          appCta={{
            heading: "Need PDF tools on your phone?",
            sub: "PDF Editor for iPhone and Android stamps and signs documents too.",
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
              <FileChip name={file.name} size={file.size} onRemove={() => setFile(null)} />
            </ul>
          ) : null}

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <OptionField
                label="Watermark text"
                type="text"
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
                maxLength={60}
              />
            </div>
            <OptionGroup<Position>
              label="Position"
              value={position}
              onChange={setPosition}
              options={[
                { value: "center", label: "Center" },
                { value: "top-left", label: "Top-left" },
                { value: "top-right", label: "Top-right" },
                { value: "bottom-left", label: "Bottom-left" },
                { value: "bottom-right", label: "Bottom-right" },
              ]}
            />
            <OptionRange
              label="Font size"
              valueLabel={`${fontSize}pt`}
              min={16}
              max={120}
              step={4}
              value={fontSize}
              onChange={setFontSize}
            />
            <OptionRange
              label="Opacity"
              valueLabel={`${Math.round(opacity * 100)}%`}
              min={0.05}
              max={0.6}
              step={0.05}
              value={opacity}
              onChange={setOpacity}
            />
            {position === "center" ? (
              <OptionRange
                label="Angle"
                valueLabel={`${angleDeg}°`}
                min={0}
                max={90}
                step={5}
                value={angleDeg}
                onChange={setAngleDeg}
              />
            ) : null}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={run}
              disabled={!file || !text.trim()}
            >
              {state.status === "busy" ? "Stamping…" : "Add watermark"}
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

function positionFor(
  pos: Position,
  pageW: number,
  pageH: number,
  textW: number,
  fontSize: number,
): { x: number; y: number } {
  const pad = 36;
  switch (pos) {
    case "top-left":
      return { x: pad, y: pageH - pad - fontSize };
    case "top-right":
      return { x: pageW - pad - textW, y: pageH - pad - fontSize };
    case "bottom-left":
      return { x: pad, y: pad };
    case "bottom-right":
      return { x: pageW - pad - textW, y: pad };
    case "center":
    default:
      return { x: (pageW - textW) / 2, y: pageH / 2 };
  }
}
