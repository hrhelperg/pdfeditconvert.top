"use client";

import { X, ChevronUp, ChevronDown } from "lucide-react";
import { formatBytes } from "@/lib/tools/validate";
import { fmt } from "@/lib/i18n/format";

/**
 * A selected file in a tool's file list.
 *
 * The aria-labels are whole localized templates ("Move {name} up"), not an
 * English verb concatenated with a filename. Building them from fragments
 * would produce word-salad the moment the target language puts the object
 * before the verb.
 */
export function FileChip({
  name,
  size,
  onRemove,
  onMoveUp,
  onMoveDown,
  moveUpLabel = "Move {name} up",
  moveDownLabel = "Move {name} down",
  removeLabel = "Remove {name}",
  sizeText,
}: {
  name: string;
  size: number;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  moveUpLabel?: string;
  moveDownLabel?: string;
  removeLabel?: string;
  /** Pre-formatted, locale-aware size. Falls back to the English format. */
  sizeText?: string;
}) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-xl border border-[--color-border] bg-[--color-bg] px-3 py-2">
      <div className="min-w-0">
        <p className="truncate font-medium text-[--color-ink]">{name}</p>
        <p className="text-xs text-[--color-muted]">{sizeText ?? formatBytes(size)}</p>
      </div>
      <div className="flex items-center gap-1">
        {onMoveUp ? (
          <button
            type="button"
            aria-label={fmt(moveUpLabel, { name })}
            onClick={onMoveUp}
            className="p-1 rounded hover:bg-[--color-surface]"
          >
            <ChevronUp className="h-4 w-4 text-[--color-muted]" />
          </button>
        ) : null}
        {onMoveDown ? (
          <button
            type="button"
            aria-label={fmt(moveDownLabel, { name })}
            onClick={onMoveDown}
            className="p-1 rounded hover:bg-[--color-surface]"
          >
            <ChevronDown className="h-4 w-4 text-[--color-muted]" />
          </button>
        ) : null}
        <button
          type="button"
          aria-label={fmt(removeLabel, { name })}
          onClick={onRemove}
          className="p-1 rounded hover:bg-[--color-surface]"
        >
          <X className="h-4 w-4 text-[--color-muted]" />
        </button>
      </div>
    </li>
  );
}
