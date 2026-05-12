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
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white bg-[--color-brand] hover:bg-[--color-brand-2] disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
        className,
      )}
    >
      {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
      {children}
    </button>
  );
}
