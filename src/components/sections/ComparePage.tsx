import type { CompareContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { CompareTable } from "@/components/sections/CompareTable";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { localizeLinks } from "@/content/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { fmt } from "@/lib/i18n/format";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
import { breadcrumbSchema, faqSchema } from "@/content/schema";

export function ComparePage({
  content,
  locale = DEFAULT_LOCALE,
}: {
  content: CompareContent;
  locale?: Locale;
}) {
  const { sections, breadcrumbs } = getSiteDictionary(locale);
  const homeHref = pathForWithFallback(locale, "");
  const path = pathForWithFallback(locale, `compare/${content.slug}` as RouteId);
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: breadcrumbs.home, href: homeHref },
            { label: breadcrumbs.compare },
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
        <CompareTable
          leftLabel={content.leftLabel}
          rightLabel={content.rightLabel}
          rows={content.rows}
        />
        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div>
            <h2 className="text-xl font-bold text-[--color-ink] mb-3">
              {fmt(sections.whenToPick, { label: content.leftLabel })}
            </h2>
            <ul className="list-disc pl-5 text-[--color-muted] space-y-1.5">
              {content.whenLeft.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[--color-ink] mb-3">
              {fmt(sections.whenToPick, { label: content.rightLabel })}
            </h2>
            <ul className="list-disc pl-5 text-[--color-muted] space-y-1.5">
              {content.whenRight.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <FAQ heading={sections.faqHeading} items={content.faq} />
      <RelatedGuides
        heading={sections.relatedGuides}
        readMoreLabel={sections.readTheGuide}
        items={localizeLinks(locale, content.related)}
      />
      <AppCTA
        variant="final"
        heading={sections.editOnPhoneHeading}
        sub={sections.freeOnBoth}
        locale={locale}
      />
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: breadcrumbs.home, path: homeHref },
            { label: content.h1, path },
          ]),
          faqSchema(content.faq, locale),
        ]}
      />
    </>
  );
}
