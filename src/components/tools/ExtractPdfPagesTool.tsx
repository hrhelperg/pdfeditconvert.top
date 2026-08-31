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
import { ToolFailure } from "@/lib/tools/toolError";
import { plural, formatBytesLocalized } from "@/lib/i18n/format";
import type { Locale } from "@/lib/i18n/locales";
import type { ResolvedToolStrings } from "@/lib/i18n/toolStrings";

export function ExtractPdfPagesTool({
  strings,
  locale,
}: {
  strings: ResolvedToolStrings<"extract-pdf-pages">;
  locale: Locale;
}) {
  const t = strings;
  const size = (bytes: number) => formatBytesLocalized(locale, bytes);
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
          throw new ToolFailure("unreadable_pdf");
        },
      );
      setFile(f);
      setPageCount(doc.getPageCount());
    } catch (e) {
      const m = mapToolError(e, t.common);
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
    setBusy(t.busyExtracting);
    try {
      const pages = parsePageRange(range, pageCount); // throws on invalid
      const srcBytes = new Uint8Array(await file.arrayBuffer());
      const outBytes = await buildPdfFromPages(srcBytes, pages);
      const blob = new Blob([new Uint8Array(outBytes)], { type: "application/pdf" });
      const filename = file.name.replace(/\.pdf$/i, "") + t.outputSuffix + ".pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e, t.common);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell title={t.title} subtitle={t.subtitle}>
      <div className="mb-5">
        <StepIndicator steps={t.steps} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title={t.successTitle}
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          sizeText={size(state.success.sizeBytes)}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[...t.related]}
          downloadAgainLabel={t.common.downloadAgain}
          startOverLabel={t.common.startOver}
          tryNextLabel={t.common.tryNext}
          appCta={{ heading: t.common.appCtaHeading, sub: t.appCtaSub }}
        />
      ) : (
        <>
          <DropZone
            accept="application/pdf"
            onFiles={onFiles}
            label={t.common.dropPdfLabel}
            hint={t.common.dropPdfHint}
            privacyText={t.common.privacyText}
          />

          {file ? (
            <ul className="mt-4 space-y-2">
              <FileChip
                name={file.name}
                size={file.size}
                sizeText={size(file.size)}
                removeLabel={t.common.fileRemove}
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
                {plural(locale, pageCount, t.pageCountNote)}
              </p>
              <OptionField
                label={t.rangeLabel}
                hint={t.rangeHint}
                type="text"
                value={range}
                onChange={(e) => setRange(e.currentTarget.value)}
                placeholder={t.rangePlaceholder}
                inputMode="numeric"
              />
              {selectedCount !== null ? (
                <p className="mt-2 text-sm font-medium text-[--color-ink]">
                  {plural(locale, selectedCount, t.selectedNote, { total: pageCount })}
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
              {state.status === "busy" ? t.actionBusy : t.actionIdle}
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
