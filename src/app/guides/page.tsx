import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { CardLink } from "@/components/primitives/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { GUIDES } from "@/content/guides";

const route = getRoute("/guides");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function GuidesIndex() {
  const items = Object.values(GUIDES);
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Guides" }]}
        />
      </Container>
      <Container className="pt-10 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
          PDF Guides
        </h1>
        <p className="mt-4 text-lg text-[--color-muted] max-w-2xl">
          Practical, mobile-first tutorials for editing, converting,
          compressing, signing and protecting PDFs.
        </p>
      </Container>
      <Section>
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((g) => (
              <li key={g.slug}>
                <CardLink href={`/guides/${g.slug}`}>
                  <span className="text-sm font-semibold uppercase tracking-wide text-[--color-brand]">
                    Guide
                  </span>
                  <span className="block mt-2 text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                    {g.h1}
                  </span>
                  <span className="block mt-2 text-sm text-[--color-muted]">
                    {g.description}
                  </span>
                </CardLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
