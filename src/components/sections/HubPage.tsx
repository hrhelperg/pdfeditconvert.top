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
import { breadcrumbSchema, faqSchema } from "@/content/schema";

export function HubPage({ content }: { content: HubContent }) {
  const crumbLabel = content.hero.eyebrow ?? content.hero.h1;
  const hubPath = `/${content.slug}`;

  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: crumbLabel }]}
        />
      </Container>

      <Hero
        eyebrow={content.hero.eyebrow}
        h1={content.hero.h1}
        highlight={content.hero.highlight}
        lead={content.hero.lead}
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
          />
        </Container>
      </Section>

      <RelatedGuides items={content.related} />

      {/*
        Every guide declares this hub as its parentHub; surfacing that reverse
        edge is the most contextually relevant internal link the site can give
        those guides, and it turns the hub into a real cluster entry point.
      */}
      <ClusterGuides
        heading={`All ${guidesForHub(hubPath).length} guides in this cluster`}
        items={clusterLinks(hubPath)}
        moreHref="/guides"
        moreLabel="Browse every PDF guide"
      />

      <FAQ items={content.faq} />

      <AppCTA
        variant="final"
        heading={content.appCta.heading}
        sub={content.appCta.sub}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: crumbLabel, path: hubPath },
          ]),
          faqSchema(content.faq),
        ]}
      />
    </>
  );
}
