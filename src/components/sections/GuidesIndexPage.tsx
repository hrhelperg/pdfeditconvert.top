import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/content/schema";
import { guidesForHub, hubLabel, hubsWithGuides, guideHref } from "@/lib/cluster";
import { guidesFor } from "@/content/registry";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { fmt, formatNumber } from "@/lib/i18n/format";
import type { Locale } from "@/lib/i18n/locales";
import type { GuidesIndexContent } from "@/types/content";

/**
 * The guides index, grouped by topical cluster.
 *
 * Every guide already declares a parentHub, so grouping by that turns the
 * index into a topical map: each cluster names its hub, links to it, and
 * lists only its own guides. Same URLs, same single click from the index —
 * but the structure now tells a crawler (and a reader) how the library is
 * organised, and it adds a contextual link to each hub from the index.
 */
export function GuidesIndexPage({
  content,
  locale,
}: {
  content: GuidesIndexContent;
  locale: Locale;
}) {
  const { sections, breadcrumbs } = getSiteDictionary(locale);
  const homeHref = pathForWithFallback(locale, "");
  const selfHref = pathForWithFallback(locale, "guides");

  const clusters = hubsWithGuides(locale).map((hubPath) => ({
    hubPath,
    label: hubLabel(hubPath, locale),
    href: pathForWithFallback(locale, hubPath.replace(/^\//, "") as never),
    guides: guidesForHub(hubPath, locale),
  }));
  const total = Object.keys(guidesFor(locale)).length;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: breadcrumbs.home, path: homeHref },
            { label: breadcrumbs.guides, path: selfHref },
          ]),
        ]}
      />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: breadcrumbs.home, href: homeHref },
            { label: breadcrumbs.guides },
          ]}
        />
      </Container>
      <Container className="pt-10 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
          {content.h1}
        </h1>
        <p className="mt-4 text-lg text-[--color-muted] max-w-2xl">
          {fmt(content.lead, { count: formatNumber(locale, total) })}
        </p>
        <nav aria-label={sections.guideTopicsNav} className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {clusters.map((c) => (
              <li key={c.hubPath}>
                <a
                  href={`#${slugId(c.hubPath)}`}
                  className="inline-block rounded-full border border-[--color-border] bg-[--color-surface] px-3.5 py-1.5 text-sm font-medium text-[--color-ink] hover:border-[--color-brand] hover:text-[--color-brand]"
                >
                  {c.label} ({formatNumber(locale, c.guides.length)})
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
                href={c.href}
                className="text-sm font-semibold text-[--color-brand] hover:underline"
              >
                {fmt(sections.goToHub, { label: c.label })}
              </Link>
            </div>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
              {c.guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={guideHref(g.slug, locale)}
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
