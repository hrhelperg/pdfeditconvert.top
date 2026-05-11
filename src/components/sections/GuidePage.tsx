import type { GuideContent } from "@/types/content";
import { ArticleLayout } from "@/components/sections/ArticleLayout";
import { Steps } from "@/components/sections/Steps";
import { Prose } from "@/components/primitives/Prose";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
} from "@/content/schema";

export function GuidePage({ content }: { content: GuideContent }) {
  const path = `/guides/${content.slug}`;
  return (
    <>
      <ArticleLayout
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: content.h1 },
        ]}
        h1={content.h1}
        updated={content.updated}
      >
        <Prose>
          {content.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>

        <Steps heading="Step by step" items={content.steps} variant="inline" />

        {content.tips.length ? (
          <div className="my-10">
            <h3 className="text-xl font-bold text-[--color-ink] mb-4">Tips</h3>
            <ul className="space-y-2 list-disc pl-5 text-[--color-muted]">
              {content.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <AppCTA
          variant="inline"
          heading="Try it on your phone"
          sub={content.mobileNote}
        />
      </ArticleLayout>

      <FAQ items={content.faq} />
      <RelatedGuides items={[content.parentHub, ...content.related]} />
      <AppCTA
        variant="final"
        heading="Take PDF Editor with you."
        sub="Free on iOS and Android."
      />

      <JsonLd
        data={[
          articleSchema({
            title: content.h1,
            description: content.description,
            path,
            datePublished: content.updated,
          }),
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "Guides", path: "/guides" },
            { label: content.h1, path },
          ]),
          howToSchema({
            name: content.h1,
            description: content.description,
            steps: content.steps,
          }),
          faqSchema(content.faq),
        ]}
      />
    </>
  );
}
