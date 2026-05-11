import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Prose } from "@/components/primitives/Prose";

export function SEOContentSection({
  heading,
  paragraphs,
  tone = "default",
}: {
  heading: string;
  paragraphs: string[];
  tone?: "default" | "muted";
}) {
  return (
    <Section tone={tone}>
      <Container size="md">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-6">
          {heading}
        </h2>
        <Prose>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </Container>
    </Section>
  );
}
