import { SITE_URL } from "@/lib/routes";
import type { RouteCategory } from "@/types/content";
import {
  DEFAULT_LOCALE,
  LOCALES,
  publishedLocaleCodes,
  type Locale,
} from "@/lib/i18n/locales";
import {
  alternatesFor,
  routesForLocale,
  type LocalizedRoute,
} from "@/lib/i18n/routeMap";

/**
 * Sitemap segmentation, by route type and by locale.
 *
 * One flat sitemap is valid at this size, but it makes diagnosis
 * impossible: Search Console reports discovered / indexed counts *per
 * submitted sitemap*, so a single file can only ever say "N of 348".
 * Splitting by route type turns that into "2 of 12 tools, 1 of 145 guides",
 * which is what an indexation recovery actually needs to steer by. Adding
 * the locale axis extends the same idea: "Portuguese guides: 0 of 144" is a
 * fact you can act on; "348 URLs, 12 indexed" is not.
 *
 * The grouping is diagnostic only — it confers no ranking benefit and the
 * URL set is identical to the flat sitemap it replaces.
 */
export const SITEMAP_GROUPS = {
  tools: ["tool"],
  hubs: ["core", "hub"],
  guides: ["guide"],
  comparisons: ["compare", "use-case"],
  pages: ["legal", "meta"],
} as const satisfies Record<string, readonly RouteCategory[]>;

export type SitemapGroup = keyof typeof SITEMAP_GROUPS;

export const SITEMAP_GROUP_NAMES = Object.keys(SITEMAP_GROUPS) as SitemapGroup[];

/**
 * File name for a group in a locale.
 *
 * The default locale keeps the unsuffixed name it has always had —
 * `sitemap-tools.xml`, not `sitemap-tools-en.xml`. Those URLs are already
 * submitted in Search Console and already crawled; renaming them would 404
 * every submission on the day the translation shipped, for no benefit. The
 * rule is locale-driven, not an English special case: any locale that is
 * the default gets the bare name.
 */
export function sitemapName(group: SitemapGroup, locale: Locale): string {
  return locale === DEFAULT_LOCALE ? group : `${group}-${LOCALES[locale].prefix}`;
}

/** Absolute canonical URL for a route path, matching the canonical tag exactly. */
export function routeUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/**
 * Routes belonging to a sitemap group in one locale. `hidden` routes are
 * excluded here and nowhere else, so "in the registry and not hidden" stays
 * the single definition of "we want this indexed".
 */
export function routesInGroup(
  group: SitemapGroup,
  locale: Locale = DEFAULT_LOCALE,
): LocalizedRoute[] {
  const categories = SITEMAP_GROUPS[group] as readonly RouteCategory[];
  return routesForLocale(locale).filter(
    (r) => !r.hidden && categories.includes(r.category),
  );
}

/** Most recent genuine content change within a group, for the index's lastmod. */
export function groupLastModified(
  group: SitemapGroup,
  locale: Locale = DEFAULT_LOCALE,
): string {
  const dates = routesInGroup(group, locale).map((r) => r.lastModified);
  return dates.reduce((max, d) => (d > max ? d : max), dates[0] ?? "1970-01-01");
}

/** Every (group, locale) pair that has at least one URL, in a stable order. */
export function sitemapFiles(): { group: SitemapGroup; locale: Locale }[] {
  return publishedLocaleCodes().flatMap((locale) =>
    SITEMAP_GROUP_NAMES.filter((group) => routesInGroup(group, locale).length > 0).map(
      (group) => ({ group, locale }),
    ),
  );
}

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * A urlset for one group in one locale.
 *
 * Each entry carries `xhtml:link` alternates for every published
 * translation of that page, including a self-reference — the form Google
 * documents for sitemap-declared hreflang. It says the same thing the
 * pages' own `<link rel="alternate">` tags do; stating it in both places is
 * what makes the annotation robust when only one of the two is fetched.
 */
export function urlsetXml(
  group: SitemapGroup,
  locale: Locale = DEFAULT_LOCALE,
): string {
  const entries = routesInGroup(group, locale)
    .map((r) => {
      const alternates = alternatesFor(r.routeId);
      const links =
        alternates.length > 1
          ? alternates
              .map(
                (a) =>
                  `\n    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${xmlEscape(a.url)}" />`,
              )
              .join("")
          : "";
      return (
        `  <url>\n` +
        `    <loc>${xmlEscape(routeUrl(r.path))}</loc>${links}\n` +
        `    <lastmod>${r.lastModified}</lastmod>\n` +
        `    <changefreq>${r.changeFrequency}</changefreq>\n` +
        `    <priority>${r.priority}</priority>\n` +
        `  </url>`
      );
    })
    .join("\n");
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ` +
    `xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`
  );
}

export function sitemapIndexXml(): string {
  const entries = sitemapFiles()
    .map(
      ({ group, locale }) =>
        `  <sitemap>\n` +
        `    <loc>${SITE_URL}/sitemap-${sitemapName(group, locale)}.xml</loc>\n` +
        `    <lastmod>${groupLastModified(group, locale)}</lastmod>\n` +
        `  </sitemap>`,
    )
    .join("\n");
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`
  );
}

export const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  // Sitemaps are rebuilt on deploy; a short shared cache keeps a stale copy
  // from outliving a content change by more than an hour.
  "Cache-Control": "public, max-age=0, s-maxage=3600, must-revalidate",
};
