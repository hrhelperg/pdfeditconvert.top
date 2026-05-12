"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { parsePageRange } from "@/lib/tools/pageRange";

type Angle = 90 | 180 | 270;

export function RotatePdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [angle, setAngle] = useState<Angle>(90);
  const [scope, setScope] = useState<"all" | "some">("all");
  const [range, setRange] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFiles = async (files: File[]) => {
    setError(null);
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
      setError((e as Error).message);
    }
  };

  const run = async () => {
    setError(null);
    if (!file || !pageCount) return;
    setBusy(true);
    try {
      const { PDFDocument, degrees } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await file.arrayBuffer()));
      const indices =
        scope === "all"
          ? doc.getPageIndices()
          : parsePageRange(range, pageCount).map((p) => p - 1);
      for (const i of indices) {
        const page = doc.getPage(i);
        const current = page.getRotation().angle;
        page.setRotation(degrees((current + angle) % 360));
      }
      const out = await doc.save();
      downloadBlob(out, file.name.replace(/\.pdf$/i, "") + "-rotated.pdf", "application/pdf");
    } catch (e) {
      setError((e as Error).message || "Rotation failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Rotate PDF" subtitle="Rotate all or selected pages by 90°, 180° or 270°.">
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
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-[--color-ink] mb-2">Angle</label>
            <div className="flex gap-2">
              {[90, 180, 270].map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAngle(a as Angle)}
                  className={`px-4 py-2 rounded-xl border font-semibold ${
                    angle === a
                      ? "border-[--color-brand] bg-[--color-brand] text-white"
                      : "border-[--color-border] bg-[--color-surface] text-[--color-ink]"
                  }`}
                >
                  {a}°
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[--color-ink] mb-2">Scope</label>
            <div className="flex gap-2 items-center">
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" checked={scope === "all"} onChange={() => setScope("all")} />
                All pages
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" checked={scope === "some"} onChange={() => setScope("some")} />
                Some pages
              </label>
            </div>
            {scope === "some" ? (
              <input
                type="text"
                value={range}
                onChange={(e) => setRange(e.target.value)}
                placeholder="e.g. 1,3-5"
                className="mt-2 w-full rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-[--color-ink] focus:outline-none focus:border-[--color-brand]"
              />
            ) : null}
          </div>
        </div>
      ) : null}
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={run} disabled={!file || (scope === "some" && !range.trim())}>
          {busy ? "Rotating…" : "Rotate PDF"}
        </ProcessButton>
      </div>
      <ToolError message={error} />
    </ToolShell>
  );
}
