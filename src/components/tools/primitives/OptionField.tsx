"use client";

import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function OptionField({
  label,
  hint,
  className,
  ...rest
}: { label: string; hint?: string; className?: string } & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  const hintId = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-[--color-ink] mb-2">
        {label}
      </label>
      <input
        id={id}
        aria-describedby={hint ? hintId : undefined}
        {...rest}
        className={cn(
          "w-full rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-[--color-ink] focus:outline-none focus:border-[--color-brand]",
        )}
      />
      {hint ? (
        <p id={hintId} className="mt-1 text-xs text-[--color-muted]">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
