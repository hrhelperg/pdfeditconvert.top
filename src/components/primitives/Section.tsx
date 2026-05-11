import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  tone = "default",
  id,
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "muted" | "brand-soft";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "muted" && "bg-[--color-bg]",
        tone === "brand-soft" && "bg-[--color-brand-soft]",
        className,
      )}
    >
      {children}
    </section>
  );
}
