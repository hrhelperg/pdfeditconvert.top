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
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfJs } from "@/lib/tools/pdfjs";
import { loadDocx } from "@/lib/tools/officeLib";

const DOCX_MIME =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

type TextItem = { str: string; transform: number[] };

function linesFromItems(items: TextItem[]): string[] {
  const withStr = items.filter((i) => typeof i.str === "string" && i.str.length);
  // Group by rounded Y (PDF origin is bottom-left, so higher Y = higher up).
  const byY = new Map<number, { x: number; str: string }[]>();
  for (const it of withStr) {
    const y = Math.round(it.transform[5]);
    const x = it.transform[4];
    if (!byY.has(y)) byY.set(y, []);
    byY.get(y)!.push({ x, str: it.str });
  }
  return [...byY.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([, parts]) =>
      parts
        .sort((a, b) => a.x - b.x)
        .map((p) => p.str)
        .join("")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .filter((l) => l.length > 0);
}

export function PdfToWordTool() {
  const [file, setFile] = useState<File | null>(null);
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 = state.status === "success" ? 2 : file ? 1 : 0;

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
    setBusy("Reading PDF…");
    try {
      const pdfjs = await loadPdfJs();
      const bytes = new Uint8Array(await file.arrayBuffer());
      const doc = await pdfjs.getDocument({ data: bytes }).promise.catch(() => {
        throw new Error("Could not read this PDF. It may be corrupted or password-protected.");
      });

      const blocks: string[][] = [];
      for (let i = 1; i <= doc.numPages; i++) {
        setBusy(`Extracting text from page ${i} of ${doc.numPages}…`);
        const page = await doc.getPage(i);
        const tc = await page.getTextContent();
        blocks.push(linesFromItems(tc.items as TextItem[]));
      }

      const allLines = blocks.flat();
      if (allLines.join("").trim().length === 0) {
        throw new Error(
          "No selectable text found — this looks like a scanned or image-only PDF. OCR isn't available in the browser; try the PDF Editor mobile app.",
        );
      }

      setBusy("Building Word document…");
      const { Document, Packer, Paragraph, TextRun } = await loadDocx();
      const children = blocks.flatMap((lines, idx) => {
        const paras = lines.map(
          (line) => new Paragraph({ children: [new TextRun(line)] }),
        );
        // Page break between source pages (except after the last).
        if (idx < blocks.length - 1) {
          paras.push(new Paragraph({ children: [new TextRun({ text: "", break: 1 })] }));
        }
        return paras;
      });
      const wordDoc = new Document({ sections: [{ children }] });
      const blob = await Packer.toBlob(wordDoc);
      const filename = file.name.replace(/\.pdf$/i, "") + ".docx";
      downloadBlob(blob, filename, DOCX_MIME);
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="PDF to Word"
      subtitle="Extract a PDF's text into an editable .docx document — in your browser."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Convert", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your Word document is ready"
          description="Editable text was extracted into a .docx file. Original layout, columns and images are not preserved."
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, DOCX_MIME)
          }
          related={[
            { label: "Word to PDF — the reverse", path: "/word-to-pdf" },
            { label: "PDF to images", path: "/pdf-to-images" },
          ]}
          appCta={{
            heading: "Need PDF tools on your phone?",
            sub: "PDF Editor for iPhone and Android converts and edits documents too.",
          }}
        />
      ) : (
        <>
          <DropZone
            accept="application/pdf"
            onFiles={onFiles}
            label="Drop a PDF here, or click to choose"
            hint="One PDF · up to 100 MB · text-based PDFs only"
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
            Extracts the selectable text from your PDF and writes it into an
            editable Word (.docx) file. It does <strong>not</strong> reproduce
            the original layout, fonts, columns, tables or images — it&apos;s a
            practical, honest text conversion. Scanned (image-only) PDFs have no
            text layer and can&apos;t be converted here.
          </div>

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton busy={state.status === "busy"} onClick={run} disabled={!file}>
              {state.status === "busy" ? "Converting…" : "Convert to Word"}
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
