"use client";

import { useId, useState, type DragEvent } from "react";
import { cn } from "@/lib/cn";
import { UploadCloud, ShieldCheck } from "lucide-react";

export function DropZone({
  accept,
  multiple = false,
  onFiles,
  label,
  hint,
  privacyText = "Files are processed locally in your browser.",
}: {
  accept: string;
  multiple?: boolean;
  onFiles: (files: File[]) => void;
  label: string;
  hint: string;
  privacyText?: string;
}) {
  const [hover, setHover] = useState(false);
  const inputId = useId();
  const hintId = useId();
  const privacyId = useId();

  const handle = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    onFiles(Array.from(files));
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setHover(false);
    handle(e.dataTransfer.files);
  };

  return (
    <label
      htmlFor={inputId}
      onDragOver={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onDragLeave={() => setHover(false)}
      onDrop={onDrop}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-12 cursor-pointer transition-all text-center",
        hover
          ? "border-[--color-brand] bg-[--color-brand-soft] shadow-[var(--shadow-brand)]"
          : "border-[--color-border] bg-[--color-surface] hover:border-[--color-brand-2] hover:bg-[--color-brand-soft]",
      )}
    >
      <UploadCloud className="h-10 w-10 text-[--color-brand]" aria-hidden />
      <span className="font-semibold text-[--color-ink]">{label}</span>
      <span id={hintId} className="text-sm text-[--color-muted]">{hint}</span>
      <span
        id={privacyId}
        className="mt-1 inline-flex items-center gap-1.5 text-xs text-[--color-muted]"
      >
        <ShieldCheck className="h-3.5 w-3.5 text-[--color-brand]" aria-hidden />
        {privacyText}
      </span>
      <input
        id={inputId}
        type="file"
        accept={accept}
        multiple={multiple}
        aria-describedby={`${hintId} ${privacyId}`}
        onChange={(e) => handle(e.currentTarget.files)}
        className="sr-only"
      />
    </label>
  );
}
