import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { StoreButtons } from "@/components/sections/StoreButtons";

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
      <div className="my-10 rounded-2xl border border-[--color-border] bg-[--color-surface] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 shadow-[var(--shadow-card)]">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[--color-ink]">{heading}</h3>
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
    <Section tone="brand-soft">
      <Container size="md" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink]">
          {heading}
        </h2>
        {sub ? (
          <p className="mt-3 text-lg text-[--color-muted]">{sub}</p>
        ) : null}
        <div className="mt-7 flex justify-center">
          <StoreButtons size="lg" align="center" />
        </div>
      </Container>
    </Section>
  );
}
