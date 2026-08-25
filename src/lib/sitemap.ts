import { ROUTES, SITE_URL } from "@/lib/routes";
import type { RouteEntry, RouteCategory } from "@/types/content";

/**
 * Sitemap segmentation.
 *
 * One flat sitemap is valid at this size (176 URLs, far under the 50k cap),
 * but it makes diagnosis impossible: Search Console reports discovered /
 * indexed counts *per submitted sitemap*, so a single file can only ever say
 * "N of 176". Splitting by route type turns that into "2 of 12 tools, 1 of
 * 145 guides", which is what an indexation recovery actually needs to steer
 * by. The grouping is diagnostic only — it confers no ranking benefit and the
 * URL set is byte-identical to the flat sitemap it replaces.
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

/** Absolute canonical URL for a route, matching the canonical tag exactly. */
export function routeUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/**
 * Routes belonging to a sitemap group. `hidden` routes are excluded here and
 * nowhere else, so "in the registry and not hidden" is the single definition
 * of "we want this indexed".
 */
export function routesInGroup(group: SitemapGroup): RouteEntry[] {
  const categories = SITEMAP_GROUPS[group] as readonly RouteCategory[];
  return ROUTES.filter((r) => !r.hidden && categories.includes(r.category));
}

/** Most recent genuine content change within a group, for the index's lastmod. */
export function groupLastModified(group: SitemapGroup): string {
  const dates = routesInGroup(group).map((r) => r.lastModified);
  return dates.reduce((max, d) => (d > max ? d : max), dates[0] ?? "1970-01-01");
}

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function urlsetXml(group: SitemapGroup): string {
  const entries = routesInGroup(group)
    .map(
      (r) =>
        `  <url>\n` +
        `    <loc>${xmlEscape(routeUrl(r.path))}</loc>\n` +
        `    <lastmod>${r.lastModified}</lastmod>\n` +
        `    <changefreq>${r.changeFrequency}</changefreq>\n` +
        `    <priority>${r.priority}</priority>\n` +
        `  </url>`,
    )
    .join("\n");
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
  );
}

export function sitemapIndexXml(): string {
  const entries = SITEMAP_GROUP_NAMES.filter((g) => routesInGroup(g).length > 0)
    .map(
      (g) =>
        `  <sitemap>\n` +
        `    <loc>${SITE_URL}/sitemap-${g}.xml</loc>\n` +
        `    <lastmod>${groupLastModified(g)}</lastmod>\n` +
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
