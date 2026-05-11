import type { UseCaseContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { AppCTA } from "@/components/sections/AppCTA";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/content/schema";

export function UseCasePage({ content }: { content: UseCaseContent }) {
  const path = `/use-cases/${content.slug}`;
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Use cases" },
            { label: content.h1 },
          ]}
        />
      </Container>
      <Container className="pt-10 pb-2" size="md">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
          {content.h1}
        </h1>
        <Prose className="mt-6">
          {content.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </Container>
      <Section tone="muted">
        <Container size="md">
          <h2 className="text-3xl font-bold text-[--color-ink] mb-8">
            Workflows that pay off
          </h2>
          <ul className="space-y-6">
            {content.workflows.map((w) => (
              <li key={w.title}>
                <h3 className="text-lg font-semibold text-[--color-ink]">
                  {w.title}
                </h3>
                <p className="mt-1.5 text-[--color-muted] leading-relaxed">
                  {w.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Container size="md" className="py-16">
        <p className="text-lg text-[--color-muted] leading-relaxed">
          {content.appPitch}
        </p>
        <AppCTA variant="inline" heading="Try it on your phone" />
      </Container>
      <RelatedGuides items={content.related} />
      <AppCTA
        variant="final"
        heading="Take PDF Editor with you."
        sub="Free on iOS and Android."
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", path: "/" },
          { label: content.h1, path },
        ])}
      />
    </>
  );
}
