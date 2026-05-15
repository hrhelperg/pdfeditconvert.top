"use client";

import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

export function ProcessButton({
  busy,
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { busy?: boolean }) {
  return (
    <button
      type="button"
      disabled={busy || rest.disabled}
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-white",
        "shadow-[var(--shadow-brand)] hover:shadow-[var(--shadow-elevated)]",
        "transition-shadow disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none",
        "min-h-[48px]",
        className,
      )}
      style={{
        background:
          busy || rest.disabled
            ? "var(--color-brand-dark)"
            : "var(--gradient-brand)",
      }}
    >
      {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
      {children}
    </button>
  );
}
