"use client";

import Link from "next/link";
import { CheckCircle2, Download, RotateCcw } from "lucide-react";
import { formatBytes } from "@/lib/tools/validate";
import { StoreButtons } from "@/components/sections/StoreButtons";

export type RelatedToolLink = { label: string; path: string };

export function SuccessState({
  title,
  description,
  filename,
  sizeBytes,
  onReset,
  onDownloadAgain,
  related,
  appCta,
}: {
  title: string;
  description?: string;
  filename: string;
  sizeBytes: number;
  onReset: () => void;
  onDownloadAgain?: () => void;
  related?: RelatedToolLink[];
  appCta?: { heading: string; sub?: string };
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-2xl border border-[--color-border] bg-[--color-brand-soft] p-5 md:p-6"
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className="h-6 w-6 text-[--color-brand] shrink-0 mt-0.5" aria-hidden />
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-[--color-ink]">{title}</h3>
          {description ? (
            <p className="mt-1 text-sm text-[--color-muted]">{description}</p>
          ) : null}
          <p className="mt-3 text-sm text-[--color-ink]">
            <span className="font-semibold break-all">{filename}</span>
            {sizeBytes > 0 ? (
              <span className="text-[--color-muted]"> · {formatBytes(sizeBytes)}</span>
            ) : null}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {onDownloadAgain ? (
              <button
                type="button"
                onClick={onDownloadAgain}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold text-white bg-[--color-brand] hover:bg-[--color-brand-2]"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download again
              </button>
            ) : null}
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold text-[--color-ink] border border-[--color-border] bg-[--color-surface] hover:border-[--color-brand]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Start over
            </button>
          </div>
        </div>
      </div>

      {related && related.length > 0 ? (
        <div className="mt-5 border-t border-[--color-border]/60 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[--color-muted] mb-2">
            Try next
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {related.map((r) => (
              <li key={r.path}>
                <Link
                  href={r.path}
                  className="block rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-sm font-medium text-[--color-ink] hover:border-[--color-brand]"
                >
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {appCta ? (
        <div className="mt-5 border-t border-[--color-border]/60 pt-4">
          <p className="font-semibold text-[--color-ink]">{appCta.heading}</p>
          {appCta.sub ? (
            <p className="text-sm text-[--color-muted] mt-1">{appCta.sub}</p>
          ) : null}
          <div className="mt-3">
            <StoreButtons size="md" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
