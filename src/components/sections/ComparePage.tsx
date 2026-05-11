import type { CompareContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { CompareTable } from "@/components/sections/CompareTable";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/content/schema";

export function ComparePage({ content }: { content: CompareContent }) {
  const path = `/compare/${content.slug}`;
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Compare" },
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
              When to pick {content.leftLabel}
            </h2>
            <ul className="list-disc pl-5 text-[--color-muted] space-y-1.5">
              {content.whenLeft.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[--color-ink] mb-3">
              When to pick {content.rightLabel}
            </h2>
            <ul className="list-disc pl-5 text-[--color-muted] space-y-1.5">
              {content.whenRight.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <FAQ items={content.faq} />
      <RelatedGuides items={content.related} />
      <AppCTA
        variant="final"
        heading="Edit PDFs on your phone."
        sub="Free on iOS and Android."
      />
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: content.h1, path },
          ]),
          faqSchema(content.faq),
        ]}
      />
    </>
  );
}
