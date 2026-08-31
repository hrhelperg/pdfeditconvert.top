import type { UseCaseContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { AppCTA } from "@/components/sections/AppCTA";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { localizeLinks } from "@/content/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
import { breadcrumbSchema } from "@/content/schema";

export function UseCasePage({
  content,
  locale = DEFAULT_LOCALE,
}: {
  content: UseCaseContent;
  locale?: Locale;
}) {
  const { sections, breadcrumbs } = getSiteDictionary(locale);
  const homeHref = pathForWithFallback(locale, "");
  const path = pathForWithFallback(locale, `use-cases/${content.slug}` as RouteId);
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: breadcrumbs.home, href: homeHref },
            { label: breadcrumbs.useCases },
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
            {sections.workflowsHeading}
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
        <AppCTA variant="inline" heading={sections.tryOnPhone} locale={locale} />
      </Container>
      <RelatedGuides
        heading={sections.relatedGuides}
        readMoreLabel={sections.readTheGuide}
        items={localizeLinks(locale, content.related)}
      />
      <AppCTA
        variant="final"
        heading={sections.takeWithYou}
        sub={sections.freeOnBoth}
        locale={locale}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: breadcrumbs.home, path: homeHref },
          { label: content.h1, path },
        ])}
      />
    </>
  );
}
