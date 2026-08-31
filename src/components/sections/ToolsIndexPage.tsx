import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { AppCTA } from "@/components/sections/AppCTA";
import { PrivacyNote } from "@/components/tools/primitives/PrivacyNote";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/content/schema";
import { ClusterGuides } from "@/components/sections/ClusterGuides";
import { clusterLinks, guidesForHub } from "@/lib/cluster";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { pathForWithFallback, routesForLocale } from "@/lib/i18n/routeMap";
import { fmt, formatNumber } from "@/lib/i18n/format";
import type { Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
import type { ToolsIndexContent } from "@/types/content";

/**
 * The free-tools index.
 *
 * The tool cards read from the *locale's* route registry, so each card's
 * title and description are the ones that page actually serves. Nothing is
 * restated in the content record, which means the index cannot drift out of
 * sync with the pages it links to.
 */
export function ToolsIndexPage({
  content,
  locale,
}: {
  content: ToolsIndexContent;
  locale: Locale;
}) {
  const { sections, breadcrumbs } = getSiteDictionary(locale);
  const href = (id: string) => pathForWithFallback(locale, id as RouteId);
  const selfPath = href("pdf-tools");

  const tools = routesForLocale(locale).filter(
    (r) => r.category === "tool" && r.routeId !== "pdf-tools" && !r.hidden,
  );
  const clusterCount = guidesForHub("/pdf-tools", locale).length;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: breadcrumbs.home, path: href("") },
            { label: content.crumbLabel, path: selfPath },
          ]),
        ]}
      />
      <Container className="pt-4">
        <Breadcrumbs
          items={[
            { label: breadcrumbs.home, href: href("") },
            { label: content.crumbLabel },
          ]}
        />
      </Container>
      <Hero
        eyebrow={content.heroEyebrow}
        h1={content.heroH1}
        highlight={content.heroHighlight}
        lead={content.heroLead}
      />
      <Section>
        <Container size="md">
          <PrivacyNote>{content.privacyNote}</PrivacyNote>
        </Container>
      </Section>
      <Section>
        <Container>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((r) => (
              <li key={r.path}>
                <Link
                  href={r.path}
                  className="block rounded-2xl border border-[--color-border] bg-[--color-surface] p-5 shadow-[var(--shadow-card)] hover:border-[--color-brand]"
                >
                  <h3 className="font-bold text-[--color-ink] mb-1">
                    {r.title.split("—")[0]?.trim() ?? r.title}
                  </h3>
                  <p className="text-sm text-[--color-muted] leading-relaxed">
                    {r.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/*
        The tools index is a Tier-1 entry point that used to link only the
        eleven tool pages, making it the thinnest hub on the site. The guides
        that name it as their parentHub belong here, and so does a route up
        to the topical hubs.
      */}
      <ClusterGuides
        heading={fmt(content.clusterHeading, {
          count: formatNumber(locale, clusterCount),
        })}
        items={clusterLinks("/pdf-tools", locale)}
        moreHref={href("guides")}
        moreLabel={sections.browseEveryGuide}
        seeAllLabel={sections.seeAllGuides}
      />

      <Section tone="muted">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink] mb-6">
            {content.goingFurtherHeading}
          </h2>
          <p className="text-[--color-muted] max-w-2xl mb-6">
            {content.goingFurtherBody}
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {content.hubs.map((h) => (
              <li key={h.id}>
                <Link
                  href={href(h.id)}
                  className="block rounded-xl border border-[--color-border] bg-[--color-surface] px-4 py-3 font-medium text-[--color-ink] hover:border-[--color-brand]"
                >
                  {h.label} →
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <AppCTA
        variant="final"
        heading={content.appCtaHeading}
        sub={content.appCtaSub}
        locale={locale}
      />
    </>
  );
}
