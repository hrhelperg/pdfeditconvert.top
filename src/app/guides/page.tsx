import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/content/schema";
import { GUIDES } from "@/content/guides";
import { guidesForHub, hubLabel, hubsWithGuides } from "@/lib/cluster";

const route = getRoute("/guides");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

/**
 * The guides index used to render all 144 guides as one undifferentiated
 * grid. Every guide already declares a parentHub, so grouping by that turns
 * the index into a topical map: each cluster names its hub, links to it, and
 * lists only its own guides. Same URLs, same single click from the index —
 * but the structure now tells a crawler (and a reader) how the library is
 * organised, and it adds a contextual link to each hub from the index.
 */
export default function GuidesIndex() {
  const clusters = hubsWithGuides().map((hubPath) => ({
    hubPath,
    label: hubLabel(hubPath),
    guides: guidesForHub(hubPath),
  }));
  const total = Object.keys(GUIDES).length;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "Guides", path: "/guides" },
          ]),
        ]}
      />
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
          {total} practical, mobile-first tutorials for editing, converting,
          compressing, signing and protecting PDFs — grouped by the tool or
          topic they belong to.
        </p>
        <nav aria-label="Guide topics" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {clusters.map((c) => (
              <li key={c.hubPath}>
                <a
                  href={`#${slugId(c.hubPath)}`}
                  className="inline-block rounded-full border border-[--color-border] bg-[--color-surface] px-3.5 py-1.5 text-sm font-medium text-[--color-ink] hover:border-[--color-brand] hover:text-[--color-brand]"
                >
                  {c.label} ({c.guides.length})
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      {clusters.map((c, i) => (
        <Section key={c.hubPath} tone={i % 2 === 1 ? "muted" : undefined}>
          <Container>
            <div
              id={slugId(c.hubPath)}
              className="flex flex-wrap items-baseline justify-between gap-3 scroll-mt-24"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink]">
                {c.label}
              </h2>
              <Link
                href={c.hubPath}
                className="text-sm font-semibold text-[--color-brand] hover:underline"
              >
                Go to {c.label} →
              </Link>
            </div>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
              {c.guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="block py-1.5 text-[--color-muted] hover:text-[--color-brand]"
                  >
                    {g.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ))}
    </>
  );
}

const slugId = (hubPath: string) => `topic-${hubPath.replace(/^\//, "")}`;
