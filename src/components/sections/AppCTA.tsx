import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { StoreButtons } from "@/components/sections/StoreButtons";
import { BrandMark } from "@/components/primitives/BrandMark";

type Variant = "hero" | "inline" | "final";

export function AppCTA({
  variant = "final",
  heading,
  sub,
}: {
  variant?: Variant;
  heading: string;
  sub?: string;
}) {
  if (variant === "inline") {
    return (
      <div className="my-10 rounded-2xl border-l-4 border-l-[--color-brand] border-y border-r border-[--color-border] bg-[--color-brand-soft] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 shadow-[var(--shadow-card)]">
        <BrandMark size={48} className="h-12 w-12 shrink-0" />
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-[--color-ink]">{heading}</h3>
          {sub ? <p className="text-[--color-muted] mt-1">{sub}</p> : null}
        </div>
        <StoreButtons size="md" />
      </div>
    );
  }
  if (variant === "hero") {
    return (
      <div className="space-y-5">
        <StoreButtons size="lg" />
        {sub ? <p className="text-sm text-[--color-muted]">{sub}</p> : null}
      </div>
    );
  }
  return (
    <Section
      tone="default"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-brand-deep)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <Container size="md" className="text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80 mb-4">
          PDF Editor app
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {heading}
        </h2>
        {sub ? (
          <p className="mt-4 text-lg text-white/90">{sub}</p>
        ) : null}
        <div className="mt-8 flex justify-center">
          <StoreButtons size="lg" align="center" />
        </div>
      </Container>
    </Section>
  );
}
