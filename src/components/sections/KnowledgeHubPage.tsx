import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { CardLink } from "@/components/primitives/Card";
import { AppCTA } from "@/components/sections/AppCTA";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/content/schema";
import { CLUSTER_ORDER, CLUSTERS } from "@/content/knowledge/_clusters";
import { entriesByCluster, knowledgePath } from "@/content/knowledge";
import { KNOWLEDGE_HUB } from "@/content/knowledge-hub";

export function KnowledgeHubPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "PDF Encyclopedia" }]}
        />
      </Container>

      <Hero
        eyebrow={KNOWLEDGE_HUB.eyebrow}
        h1={KNOWLEDGE_HUB.h1}
        lead={KNOWLEDGE_HUB.lead}
      />

      <Section>
        <Container>
          <p className="max-w-3xl text-[--color-muted] mb-12">
            {KNOWLEDGE_HUB.intro}
          </p>
          {CLUSTER_ORDER.map((key) => {
            const entries = entriesByCluster(key);
            if (!entries.length) return null;
            return (
              <div key={key} className="mb-14">
                <h2 className="text-2xl font-bold text-[--color-ink]">
                  {CLUSTERS[key].title}
                </h2>
                <p className="text-[--color-muted] mt-1 mb-6">
                  {CLUSTERS[key].blurb}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {entries.map((e) => (
                    <li key={e.slug}>
                      <CardLink href={knowledgePath(e.slug)}>
                        <span className="text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                          {e.h1}
                        </span>
                        <span className="block mt-3 text-sm text-[--color-muted]">
                          {e.definition}
                        </span>
                      </CardLink>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </Section>

      <AppCTA
        variant="final"
        heading="Put it into practice."
        sub="PDF Editor is free on iOS and Android."
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "PDF Encyclopedia", path: "/pdf-encyclopedia" },
          ]),
        ]}
      />
    </>
  );
}
