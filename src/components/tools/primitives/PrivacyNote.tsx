import { ShieldCheck } from "lucide-react";

export function PrivacyNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[--color-border] border-s-4 border-s-[--color-brand] bg-[--color-brand-soft] p-5 flex gap-3 items-start">
      <ShieldCheck className="h-5 w-5 text-[--color-brand] shrink-0 mt-0.5" aria-hidden />
      <p className="text-sm text-[--color-ink] leading-relaxed">{children}</p>
    </div>
  );
}
