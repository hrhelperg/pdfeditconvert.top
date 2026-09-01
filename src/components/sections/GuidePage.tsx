import type { GuideContent } from "@/types/content";
import { ArticleLayout } from "@/components/sections/ArticleLayout";
import { Steps } from "@/components/sections/Steps";
import { Prose } from "@/components/primitives/Prose";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { localizeLinks } from "@/content/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  isProceduralGuide,
} from "@/content/schema";

export function GuidePage({
  content,
  locale = DEFAULT_LOCALE,
}: {
  content: GuideContent;
  locale?: Locale;
}) {
  const { sections, breadcrumbs } = getSiteDictionary(locale);
  const homeHref = pathForWithFallback(locale, "");
  const guidesHref = pathForWithFallback(locale, "guides");
  const path = pathForWithFallback(locale, `guides/${content.slug}` as RouteId);

  return (
    <>
      <ArticleLayout
        crumbs={[
          { label: breadcrumbs.home, href: homeHref },
          { label: breadcrumbs.guides, href: guidesHref },
          { label: content.h1 },
        ]}
        h1={content.h1}
        updated={content.updated}
        updatedLabel={sections.lastUpdated}
        locale={locale}
      >
        <Prose>
          {content.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>

        <Steps heading={sections.stepByStep} items={content.steps} variant="inline" />

        {content.tips.length ? (
          <div className="my-10">
            <h3 className="text-xl font-bold text-[--color-ink] mb-4">
              {sections.tips}
            </h3>
            <ul className="space-y-2 list-disc ps-5 text-[--color-muted]">
              {content.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <AppCTA
          variant="inline"
          heading={sections.tryOnPhone}
          sub={content.mobileNote}
          locale={locale}
        />
      </ArticleLayout>

      <FAQ heading={sections.faqHeading} items={content.faq} />
      <RelatedGuides
        heading={sections.relatedGuides}
        readMoreLabel={sections.readTheGuide}
        items={localizeLinks(locale, [content.parentHub, ...content.related])}
      />
      <AppCTA
        variant="final"
        heading={sections.takeWithYou}
        sub={sections.freeOnBoth}
        locale={locale}
      />

      <JsonLd
        data={[
          articleSchema({
            title: content.h1,
            description: content.description,
            path,
            datePublished: content.updated,
            locale,
          }),
          breadcrumbSchema([
            { label: breadcrumbs.home, path: homeHref },
            { label: breadcrumbs.guides, path: guidesHref },
            { label: content.h1, path },
          ]),
          ...(isProceduralGuide(content.h1, locale, content.slug)
            ? [
                howToSchema({
                  name: content.h1,
                  description: content.description,
                  steps: content.steps,
                  locale,
                }),
              ]
            : []),
          faqSchema(content.faq, locale),
        ]}
      />
    </>
  );
}
