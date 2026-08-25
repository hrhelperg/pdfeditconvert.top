import { SITEMAP_GROUP_NAMES, urlsetXml } from "@/lib/sitemap";

/**
 * Every URL the segmented sitemap actually publishes, flattened across groups.
 * Tests assert against the emitted XML rather than the route registry so a
 * registry entry that never reaches a sitemap group cannot pass silently.
 */
export function sitemapUrls(): string[] {
  return SITEMAP_GROUP_NAMES.flatMap((g) =>
    [...urlsetXml(g).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]),
  );
}
