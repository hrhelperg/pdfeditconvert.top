import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { BrandMark } from "@/components/primitives/BrandMark";

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
        "relative overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface] shadow-[var(--shadow-elevated)] p-6 md:p-8",
        className,
      )}
    >
      {/* Brand accent strip */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="mb-6 flex items-start gap-4">
        <BrandMark size={52} className="shrink-0" />
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
