import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full",
        tone === "neutral" &&
          "bg-[--color-bg] text-[--color-muted] border border-[--color-border]",
        tone === "brand" && "bg-[--color-brand-soft] text-[--color-brand]",
        className,
      )}
    >
      {children}
    </span>
  );
}
