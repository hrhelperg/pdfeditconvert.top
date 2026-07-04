import type { KnowledgeContent } from "@/types/content";
import { ArticleLayout } from "@/components/sections/ArticleLayout";
import { Prose } from "@/components/primitives/Prose";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { knowledgePath, resolveRefs } from "@/content/knowledge";
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  faqSchema,
} from "@/content/schema";

export function KnowledgePage({ content }: { content: KnowledgeContent }) {
  const path = knowledgePath(content.slug);
  const related = [
    ...resolveRefs(content.graph.relatedConcepts),
    ...resolveRefs(content.graph.relatedStandards),
    ...resolveRefs(content.graph.relatedFormats),
    ...(content.graph.relatedTools ?? []),
    ...(content.graph.relatedGuides ?? []),
    ...(content.graph.parentConcept
      ? resolveRefs([content.graph.parentConcept])
      : []),
    ...resolveRefs(content.graph.childConcepts),
  ];
  // Deduplicate by path, preserving order.
  const relatedUnique = related.filter(
    (r, i) => related.findIndex((x) => x.path === r.path) === i,
  );
  const seeAlso = resolveRefs(content.seeAlso);

  return (
    <>
      <ArticleLayout
        crumbs={[
          { label: "Home", href: "/" },
          { label: "PDF Encyclopedia", href: "/pdf-encyclopedia" },
          { label: content.h1 },
        ]}
        h1={content.h1}
        updated={content.updated}
      >
        <p className="text-sm text-[--color-muted] -mt-4 mb-6">
          {content.difficulty}
          {content.aliases.length
            ? ` · Also known as: ${content.aliases.join(", ")}`
            : ""}
          {" · Reviewed "}
          <time dateTime={content.reviewed}>
            {new Date(content.reviewed).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>

        <p className="text-lg font-semibold text-[--color-ink] border-l-4 border-[--color-brand] pl-4 mb-8">
          {content.definition}
        </p>

        <Prose>
          {content.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>

        {content.specification ? (
          <dl className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 rounded-lg bg-[--color-surface] p-6">
            {content.specification.iso ? (
              <div>
                <dt className="text-sm font-semibold text-[--color-muted]">
                  ISO
                </dt>
                <dd className="text-[--color-ink]">
                  {content.specification.iso}
                </dd>
              </div>
            ) : null}
            {content.specification.introduced ? (
              <div>
                <dt className="text-sm font-semibold text-[--color-muted]">
                  Introduced
                </dt>
                <dd className="text-[--color-ink]">
                  {content.specification.introduced}
                </dd>
              </div>
            ) : null}
            {content.specification.latestVersion ? (
              <div>
                <dt className="text-sm font-semibold text-[--color-muted]">
                  Latest version
                </dt>
                <dd className="text-[--color-ink]">
                  {content.specification.latestVersion}
                </dd>
              </div>
            ) : null}
            {content.specification.typicalUsage ? (
              <div>
                <dt className="text-sm font-semibold text-[--color-muted]">
                  Typical usage
                </dt>
                <dd className="text-[--color-ink]">
                  {content.specification.typicalUsage}
                </dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {content.keyFacts?.length ? (
          <ul className="my-8 space-y-2 list-disc pl-5 text-[--color-muted]">
            {content.keyFacts.map((f) => (
              <li key={f.label}>
                <span className="font-semibold text-[--color-ink]">
                  {f.label}:
                </span>{" "}
                {f.value}
              </li>
            ))}
          </ul>
        ) : null}

        {content.sections.map((s) => (
          <section key={s.heading} className="my-8">
            <h2 className="text-2xl font-bold text-[--color-ink] mb-4">
              {s.heading}
            </h2>
            <Prose>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>
          </section>
        ))}

        {content.misconceptions?.length ? (
          <section className="my-10">
            <h2 className="text-2xl font-bold text-[--color-ink] mb-4">
              Common misconceptions
            </h2>
            <ul className="space-y-4">
              {content.misconceptions.map((m) => (
                <li key={m.claim}>
                  <p className="font-semibold text-[--color-ink]">
                    ✗ {m.claim}
                  </p>
                  <p className="text-[--color-muted]">✓ {m.truth}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <AppCTA
          variant="inline"
          heading="Work with PDFs on your phone"
          sub="PDF Editor is free on iOS and Android."
        />
      </ArticleLayout>

      <FAQ items={content.faq} />

      {seeAlso.length ? (
        <RelatedGuides heading="See also" items={seeAlso} cta="Explore →" />
      ) : null}
      {relatedUnique.length ? (
        <RelatedGuides
          heading="Related"
          items={relatedUnique}
          cta="Learn more →"
        />
      ) : null}

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
            dateModified: content.reviewed,
          }),
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "PDF Encyclopedia", path: "/pdf-encyclopedia" },
            { label: content.h1, path },
          ]),
          definedTermSchema({
            term: content.h1,
            aliases: content.aliases,
            definition: content.definition,
            path,
          }),
          faqSchema(content.faq),
        ]}
      />
    </>
  );
}
