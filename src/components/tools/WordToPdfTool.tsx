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
import { assertWordDoc, isPlainText } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { loadMammoth } from "@/lib/tools/officeLib";

// StandardFont (Helvetica) is WinAnsi-encoded; characters outside Latin-1
// can't be drawn and would throw. Downgrade them so conversion never fails.
function toWinAnsi(text: string): string {
  return text
    .replace(/[‘’‚‛]/g, "'")
    .replace(/[“”„‟]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/ /g, " ")
    .replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF]/g, "?");
}

export function WordToPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 = state.status === "success" ? 2 : file ? 1 : 0;

  const onFiles = (files: File[]) => {
    const f = files[0];
    if (!f) return;
    try {
      assertWordDoc(f);
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
    setBusy("Reading document…");
    try {
      let text: string;
      if (isPlainText(file)) {
        text = await file.text();
      } else {
        const mammoth = await loadMammoth();
        const extractRawText =
          mammoth.extractRawText ?? mammoth.default.extractRawText;
        const result = await extractRawText({
          arrayBuffer: await file.arrayBuffer(),
        }).catch(() => {
          throw new Error(
            "Could not read this .docx. It may be corrupted or password-protected.",
          );
        });
        text = result.value;
      }

      if (!text || text.trim().length === 0) {
        throw new Error("The document appears to be empty — there's no text to convert.");
      }

      setBusy("Building PDF…");
      const { PDFDocument, StandardFonts, rgb } = await loadPdfLib();
      const pdf = await PDFDocument.create();
      const font = await pdf.embedFont(StandardFonts.Helvetica);

      const PAGE = [595.28, 841.89] as const; // A4 (pt)
      const MARGIN = 56;
      const SIZE = 11;
      const LINE = 15.5;
      const maxWidth = PAGE[0] - MARGIN * 2;

      let page = pdf.addPage([PAGE[0], PAGE[1]]);
      let y = PAGE[1] - MARGIN;
      const newPage = () => {
        page = pdf.addPage([PAGE[0], PAGE[1]]);
        y = PAGE[1] - MARGIN;
      };
      const drawLine = (line: string) => {
        if (y < MARGIN) newPage();
        page.drawText(line, { x: MARGIN, y, size: SIZE, font, color: rgb(0.04, 0.07, 0.12) });
        y -= LINE;
      };

      const paragraphs = toWinAnsi(text).replace(/\r\n/g, "\n").split("\n");
      for (const para of paragraphs) {
        if (para.trim() === "") {
          y -= LINE; // blank line
          if (y < MARGIN) newPage();
          continue;
        }
        const words = para.split(/\s+/);
        let line = "";
        for (const w of words) {
          const next = line ? `${line} ${w}` : w;
          if (font.widthOfTextAtSize(next, SIZE) > maxWidth && line) {
            drawLine(line);
            line = w;
          } else {
            line = next;
          }
        }
        if (line) drawLine(line);
      }

      const outBytes = await pdf.save();
      const blob = new Blob([new Uint8Array(outBytes)], { type: "application/pdf" });
      const filename = file.name.replace(/\.(docx|txt)$/i, "") + ".pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Word to PDF"
      subtitle="Turn a .docx or .txt document into a clean PDF — in your browser."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Convert", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your PDF is ready"
          description="Text was laid out into a clean A4 PDF. Original .docx fonts, images, tables and exact spacing are not reproduced."
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "PDF to Word — the reverse", path: "/pdf-to-word" },
            { label: "Image to PDF", path: "/image-to-pdf" },
          ]}
          appCta={{
            heading: "Need PDF tools on your phone?",
            sub: "PDF Editor for iPhone and Android converts and signs documents too.",
          }}
        />
      ) : (
        <>
          <DropZone
            accept=".docx,.txt,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
            onFiles={onFiles}
            label="Drop a .docx or .txt file here, or click to choose"
            hint="Word .docx or plain .txt · up to 100 MB"
          />

          {file ? (
            <ul className="mt-4 space-y-2">
              <FileChip
                name={file.name}
                size={file.size}
                onRemove={() => setFile(null)}
              />
            </ul>
          ) : null}

          <div className="mt-5 rounded-xl border border-[--color-border] bg-[--color-bg] p-4 text-sm text-[--color-muted]">
            <p className="font-semibold text-[--color-ink] mb-1">
              What this does
            </p>
            Reads the text from a Word (.docx) or plain text (.txt) file and
            lays it into a clean, paginated A4 PDF. It is an honest text
            conversion — original fonts, images, tables and exact formatting
            are <strong>not</strong> reproduced. Legacy binary .doc isn&apos;t
            supported; save as .docx first.
          </div>

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton busy={state.status === "busy"} onClick={run} disabled={!file}>
              {state.status === "busy" ? "Converting…" : "Convert to PDF"}
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
