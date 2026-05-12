import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function ToolShell({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[--color-border] bg-[--color-surface] shadow-[var(--shadow-card)] p-6 md:p-8",
        className,
      )}
    >
      <div className="mb-6 flex items-start gap-4">
        <div
          aria-hidden
          className="h-10 w-10 rounded-xl bg-[--color-brand] text-white grid place-items-center font-bold"
        >
          PDF
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[--color-ink] leading-tight">{title}</h2>
          {subtitle ? (
            <p className="text-sm text-[--color-muted] mt-1">{subtitle}</p>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
}
