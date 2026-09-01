import type { HubContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { SEOContentSection } from "@/components/sections/SEOContentSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Steps } from "@/components/sections/Steps";
import { AppCTA } from "@/components/sections/AppCTA";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { ClusterGuides } from "@/components/sections/ClusterGuides";
import { clusterLinks, guidesForHub } from "@/lib/cluster";
import { FAQ } from "@/components/sections/FAQ";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { localizeLinks } from "@/content/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { plural } from "@/lib/i18n/format";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
import { breadcrumbSchema, faqSchema } from "@/content/schema";

export function HubPage({
  content,
  locale = DEFAULT_LOCALE,
}: {
  content: HubContent;
  locale?: Locale;
}) {
  const { sections, breadcrumbs, store } = getSiteDictionary(locale);
  const crumbLabel = content.hero.eyebrow ?? content.hero.h1;
  // The English hub path identifies the cluster in every language; the
  // reader-facing URL is resolved from the route map.
  const englishHubPath = `/${content.slug}`;
  const hubPath = pathForWithFallback(locale, content.slug as RouteId);
  const homeHref = pathForWithFallback(locale, "");
  const clusterCount = guidesForHub(englishHubPath, locale).length;

  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          ariaLabel={breadcrumbs.ariaLabel}
          items={[{ label: breadcrumbs.home, href: homeHref }, { label: crumbLabel }]}
        />
      </Container>

      <Hero
        eyebrow={content.hero.eyebrow}
        h1={content.hero.h1}
        highlight={content.hero.highlight}
        lead={content.hero.lead}
        availabilityText={store.availability}
        storeLabels={{
          appStoreLabel: store.appStoreAria,
          googlePlayLabel: store.googlePlayAria,
        }}
      />

      <SEOContentSection
        heading={content.problem.heading}
        paragraphs={content.problem.paragraphs}
        tone="muted"
      />

      <FeatureGrid
        heading={content.features.heading}
        items={content.features.items}
        cols={3}
      />

      <Steps heading={content.steps.heading} items={content.steps.items} />

      <Section>
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-6">
            {content.mobileUseCase.heading}
          </h2>
          <p className="text-lg text-[--color-muted] leading-relaxed">
            {content.mobileUseCase.body}
          </p>
          <AppCTA
            variant="inline"
            heading={content.appCta.heading}
            sub={content.appCta.sub}
            locale={locale}
          />
        </Container>
      </Section>

      <RelatedGuides
        heading={sections.relatedGuides}
        readMoreLabel={sections.readTheGuide}
        items={localizeLinks(locale, content.related)}
      />

      {/*
        Every guide declares this hub as its parentHub; surfacing that reverse
        edge is the most contextually relevant internal link the site can give
        those guides, and it turns the hub into a real cluster entry point.
      */}
      <ClusterGuides
        heading={plural(locale, clusterCount, sections.clusterHeading)}
        items={clusterLinks(englishHubPath, locale)}
        moreHref={pathForWithFallback(locale, "guides")}
        moreLabel={sections.browseEveryGuide}
        seeAllLabel={sections.seeAllGuides}
      />

      <FAQ heading={sections.faqHeading} items={content.faq} />

      <AppCTA
        variant="final"
        heading={content.appCta.heading}
        sub={content.appCta.sub}
        locale={locale}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { label: breadcrumbs.home, path: homeHref },
            { label: crumbLabel, path: hubPath },
          ]),
          faqSchema(content.faq, locale),
        ]}
      />
    </>
  );
}
