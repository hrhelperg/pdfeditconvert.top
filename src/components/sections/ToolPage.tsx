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
import { ClusterGuides } from "@/components/sections/ClusterGuides";
import { clusterLinks, guidesForHub } from "@/lib/cluster";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { localizeLinks } from "@/content/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { plural } from "@/lib/i18n/format";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
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

export function ToolPage({
  content,
  toolSlot,
  locale = DEFAULT_LOCALE,
}: {
  content: ToolContent;
  toolSlot: ReactNode;
  locale?: Locale;
}) {
  const dictionary = getSiteDictionary(locale);
  const { sections, breadcrumbs } = dictionary;
  // `content.slug` is the canonical (English) route id in every language;
  // the localized URL comes from the route map, never from the content.
  const englishPath = `/${content.slug}`;
  const path = pathForWithFallback(locale, content.slug as RouteId);
  const crumbLabel = content.hero.eyebrow;
  const clusterCount = guidesForHub(englishPath, locale).length;

  return (
    <>
      <Container className="pt-4">
        <Breadcrumbs
          items={[
            { label: breadcrumbs.home, href: pathForWithFallback(locale, "") },
            { label: crumbLabel },
          ]}
        />
      </Container>

      {/*
        Conversion-first hero band. The converter is the dominant element:
        it is first in the DOM so on mobile (single column) it appears on
        the first screen, before any marketing prose. On desktop it takes
        the wide column; the marketing copy (H1 kept for SEO + concise lead
        + trust signals) sits in a slim supporting rail. The SEO content
        (how-to, use cases, limitations, related, FAQ) stays server-rendered
        below.
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
        <Container className="py-6 md:py-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pdf-editor-wordmark.svg"
            alt="PDF Editor"
            width={150}
            height={28}
            className="h-7 w-auto mb-6 md:mb-8"
            loading="eager"
            decoding="async"
          />
          <div className="grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,340px)] gap-8 lg:gap-12 lg:items-start">
            {/* The actual converter — dominant; first in DOM = first on mobile. */}
            <div>{toolSlot}</div>

            {/* Supporting rail: H1 for SEO + concise lead + trust signals. */}
            <div className="lg:pt-2">
              {content.hero.eyebrow ? (
                <p className="inline-flex items-center rounded-full bg-[--color-brand] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  {content.hero.eyebrow}
                </p>
              ) : null}
              <h1 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight leading-[1.15] text-[--color-ink]">
                {renderH1(content.hero.h1, content.hero.highlight)}
              </h1>
              <p className="mt-3 text-sm md:text-base text-[--color-muted] leading-relaxed">
                {content.hero.lead}
              </p>
              <ul className="mt-6 space-y-2.5">
                {sections.trust.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-[--color-ink]">
                    <span
                      aria-hidden
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[--color-brand] text-white shrink-0 mt-0.5"
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
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
            {sections.relatedTools}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {localizeLinks(locale, content.related).map((r) => (
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

      {/*
        Guides that name this tool as their parentHub. Tool pages are the
        site's most differentiated asset but were the least editorially
        linked; this connects each one to the guides written about it.
      */}
      <ClusterGuides
        heading={plural(locale, clusterCount, sections.toolGuidesHeading, {
          label: crumbLabel,
        })}
        items={clusterLinks(englishPath, locale)}
        moreHref={pathForWithFallback(locale, "pdf-tools")}
        moreLabel={sections.allFreeTools}
        seeAllLabel={sections.seeAllGuides}
      />

      <AppCTA variant="inline" heading={content.appCta.heading} sub={content.appCta.sub} />

      <FAQ heading={sections.faqHeading} items={content.faq} />

      <AppCTA variant="final" heading={content.appCta.heading} sub={content.appCta.sub} />

      <JsonLd
        data={[
          breadcrumbSchema([
            { label: breadcrumbs.home, path: pathForWithFallback(locale, "") },
            { label: crumbLabel, path },
          ]),
          faqSchema(content.faq, locale),
          webApplicationSchema({
            name: content.hero.h1,
            description: content.hero.lead,
            path,
            locale,
          }),
        ]}
      />
    </>
  );
}
