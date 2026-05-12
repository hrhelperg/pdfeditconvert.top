"use client";

import { useRef, useState, type DragEvent } from "react";
import { cn } from "@/lib/cn";
import { UploadCloud } from "lucide-react";

export function DropZone({
  accept,
  multiple = false,
  onFiles,
  label,
  hint,
}: {
  accept: string;
  multiple?: boolean;
  onFiles: (files: File[]) => void;
  label: string;
  hint: string;
}) {
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
      onDragOver={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onDragLeave={() => setHover(false)}
      onDrop={onDrop}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-10 cursor-pointer transition-colors",
        hover
          ? "border-[--color-brand] bg-[rgba(229,9,20,0.04)]"
          : "border-[--color-border] hover:border-[--color-brand-2] hover:bg-[--color-bg]",
      )}
    >
      <UploadCloud className="h-8 w-8 text-[--color-brand]" aria-hidden />
      <span className="font-semibold text-[--color-ink]">{label}</span>
      <span className="text-sm text-[--color-muted]">{hint}</span>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handle(e.currentTarget.files)}
        className="sr-only"
      />
    </label>
  );
}
