"use client";

import { X, ChevronUp, ChevronDown } from "lucide-react";
import { formatBytes } from "@/lib/tools/validate";

export function FileChip({
  name,
  size,
  onRemove,
  onMoveUp,
  onMoveDown,
}: {
  name: string;
  size: number;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-xl border border-[--color-border] bg-[--color-bg] px-3 py-2">
      <div className="min-w-0">
        <p className="truncate font-medium text-[--color-ink]">{name}</p>
        <p className="text-xs text-[--color-muted]">{formatBytes(size)}</p>
      </div>
      <div className="flex items-center gap-1">
        {onMoveUp ? (
          <button
            type="button"
            aria-label={`Move ${name} up`}
            onClick={onMoveUp}
            className="p-1 rounded hover:bg-[--color-surface]"
          >
            <ChevronUp className="h-4 w-4 text-[--color-muted]" />
          </button>
        ) : null}
        {onMoveDown ? (
          <button
            type="button"
            aria-label={`Move ${name} down`}
            onClick={onMoveDown}
            className="p-1 rounded hover:bg-[--color-surface]"
          >
            <ChevronDown className="h-4 w-4 text-[--color-muted]" />
          </button>
        ) : null}
        <button
          type="button"
          aria-label={`Remove ${name}`}
          onClick={onRemove}
          className="p-1 rounded hover:bg-[--color-surface]"
        >
          <X className="h-4 w-4 text-[--color-muted]" />
        </button>
      </div>
    </li>
  );
}
