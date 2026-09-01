import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import type { StepItem } from "@/types/content";

export function Steps({
  heading,
  items,
  variant = "section",
}: {
  heading: string;
  items: StepItem[];
  variant?: "section" | "inline";
}) {
  const list = (
    <ol className="space-y-6">
      {items.map((s, i) => (
        <li key={s.title} className="flex gap-5">
          <span
            className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl text-white font-bold shadow-[var(--shadow-brand)]"
            style={{ background: "var(--gradient-brand)" }}
          >
            {i + 1}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-[--color-ink]">
              {s.title}
            </h3>
            <p className="mt-1.5 text-[--color-muted] leading-relaxed">
              {s.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );

  if (variant === "inline") {
    return (
      <div className="my-10">
        <h2 className="text-xl font-bold text-[--color-ink] mb-6">{heading}</h2>
        {list}
      </div>
    );
  }

  return (
    <Section tone="muted">
      <Container size="md">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-10">
          {heading}
        </h2>
        {list}
      </Container>
    </Section>
  );
}
