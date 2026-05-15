import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { Steps } from "@/components/sections/Steps";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PrivacyNote } from "@/components/tools/primitives/PrivacyNote";
import {
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
} from "@/content/schema";

export function ToolPage({
  content,
  toolSlot,
}: {
  content: ToolContent;
  toolSlot: ReactNode;
}) {
  const path = `/${content.slug}`;
  const crumbLabel = content.hero.eyebrow;

  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: crumbLabel }]} />
      </Container>

      <div
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-brand-soft)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(229,9,20,0.40), transparent)" }}
        />
        <Hero
          eyebrow={content.hero.eyebrow}
          h1={content.hero.h1}
          highlight={content.hero.highlight}
          lead={content.hero.lead}
        />
      </div>

      <Section>
        <Container size="md">{toolSlot}</Container>
      </Section>

      <Section tone="muted">
        <Container size="md">
          <PrivacyNote>{content.privacyNote}</PrivacyNote>
        </Container>
      </Section>

      <Steps heading={content.howTo.heading} items={content.howTo.steps} />

      <Section>
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-8">
            {content.useCases.heading}
          </h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {content.useCases.items.map((it) => (
              <li
                key={it.title}
                className="rounded-2xl border border-[--color-border] bg-[--color-surface] p-5 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-semibold text-[--color-ink] mb-1">{it.title}</h3>
                <p className="text-[--color-muted] leading-relaxed">{it.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container size="md">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink] mb-6">
            {content.limitations.heading}
          </h2>
          <ul className="space-y-3">
            {content.limitations.items.map((it) => (
              <li key={it.title} className="text-[--color-muted] leading-relaxed">
                <strong className="text-[--color-ink]">{it.title}.</strong> {it.body}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink] mb-6">
            Related PDF tools
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {content.related.map((r) => (
              <li key={r.path}>
                <Link
                  href={r.path}
                  className="block rounded-xl border border-[--color-border] bg-[--color-surface] px-4 py-3 font-medium text-[--color-ink] hover:border-[--color-brand]"
                >
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <AppCTA variant="inline" heading={content.appCta.heading} sub={content.appCta.sub} />

      <FAQ items={content.faq} />

      <AppCTA variant="final" heading={content.appCta.heading} sub={content.appCta.sub} />

      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: crumbLabel, path },
          ]),
          faqSchema(content.faq),
          webApplicationSchema({
            name: content.hero.h1,
            description: content.hero.lead,
            path,
          }),
        ]}
      />
    </>
  );
}
