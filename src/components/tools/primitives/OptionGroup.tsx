"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

export type OptionItem<T extends string> = { value: T; label: string };

export function OptionGroup<T extends string>({
  label,
  value,
  options,
  onChange,
  className,
}: {
  label: string;
  value: T;
  options: ReadonlyArray<OptionItem<T>>;
  onChange: (next: T) => void;
  className?: string;
}) {
  const groupId = useId();
  return (
    <fieldset className={cn(className)} aria-labelledby={groupId}>
      <legend
        id={groupId}
        className="block text-sm font-semibold text-[--color-ink] mb-2"
      >
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt.value)}
              className={cn(
                "px-4 py-2 rounded-xl border font-semibold text-sm min-h-[44px]",
                active
                  ? "border-[--color-brand] bg-[--color-brand] text-white"
                  : "border-[--color-border] bg-[--color-surface] text-[--color-ink] hover:border-[--color-brand-2]",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
