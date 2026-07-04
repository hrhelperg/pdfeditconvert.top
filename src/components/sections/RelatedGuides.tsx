import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { CardLink } from "@/components/primitives/Card";
import type { RelatedLink } from "@/types/content";

export function RelatedGuides({
  heading = "Related guides",
  items,
  cta = "Read the guide →",
}: {
  heading?: string;
  items: RelatedLink[];
  cta?: string;
}) {
  if (!items.length) return null;
  return (
    <Section tone="muted">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink] mb-8">
          {heading}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((r) => (
            <li key={r.path}>
              <CardLink href={r.path}>
                <span className="text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                  {r.label}
                </span>
                <span className="block mt-3 text-sm text-[--color-muted]">
                  {cta}
                </span>
              </CardLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
