import Link from "next/link";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import type { ToolContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
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

/**
 * Render the H1 with the highlighted phrase in brand red. Mirrors the
 * shared Hero component's highlight logic so tool pages keep an identical
 * heading treatment without inheriting the marketing Hero's height
 * (large 6xl type + StoreButtons + caption), which pushed the actual
 * converter panel below the fold.
 */
function renderH1(h1: string, highlight?: string): ReactNode {
  if (!highlight || !h1.includes(highlight)) return h1;
  const idx = h1.indexOf(highlight);
  return (
    <>
      {h1.slice(0, idx)}
      <span className="text-[--color-brand]">{highlight}</span>
      {h1.slice(idx + highlight.length)}
    </>
  );
}

const TRUST = [
  "Files are processed locally in your browser",
  "No upload, no account, no watermark",
  "Free — works on mobile and desktop",
];

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
      <Container className="pt-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: crumbLabel }]} />
      </Container>

      {/*
        Conversion-first hero band: compact marketing copy on the left,
        the working tool panel on the right. On desktop both sit above
        the fold; on mobile the copy is intentionally short so the tool
        panel appears within the first screen. The SEO content (how-to,
        use cases, limitations, related, FAQ) stays server-rendered below.
      */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-brand-soft)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(229,9,20,0.40), transparent)" }}
        />
        <Container className="py-8 md:py-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] gap-8 lg:gap-12 lg:items-start">
            <div className="lg:pt-4">
              {content.hero.eyebrow ? (
                <p className="inline-flex items-center rounded-full bg-[--color-brand] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  {content.hero.eyebrow}
                </p>
              ) : null}
              <h1 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-[--color-ink]">
                {renderH1(content.hero.h1, content.hero.highlight)}
              </h1>
              <p className="mt-4 text-base md:text-lg text-[--color-muted] leading-relaxed max-w-xl">
                {content.hero.lead}
              </p>
              <ul className="mt-7 space-y-2.5">
                {TRUST.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-[--color-ink]">
                    <span
                      aria-hidden
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[--color-brand] text-white shrink-0"
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* The actual converter — first screen, no scrolling required. */}
            <div className="lg:sticky lg:top-24">{toolSlot}</div>
          </div>
        </Container>
      </div>

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
