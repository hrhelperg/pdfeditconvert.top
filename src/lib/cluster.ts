import { guidesFor } from "@/content/registry";
import { routeFor, pathForWithFallback } from "@/lib/i18n/routeMap";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
import type { GuideContent, RelatedLink } from "@/types/content";

/**
 * The site already has a complete guide → hub taxonomy: every guide declares
 * a `parentHub`. Until Aug 2026 that relationship was only ever traversed
 * downward (guide links up to its hub) and was invisible from the hub itself,
 * so /guides was a flat list of 144 links and hubs linked to at most five
 * hand-picked children.
 *
 * Exposing the reverse edge gives each hub a topically exact set of outbound
 * links and gives every guide an inbound link from its own parent — the most
 * relevant internal link that exists for it. Nothing here invents a
 * relationship: it only reads the one the content already declares.
 *
 * Every function takes a locale and reads that locale's guide registry, so a
 * Portuguese hub lists Portuguese guides at Portuguese URLs. `hubPath` is
 * always the *English* hub path: it identifies the cluster, and content
 * files in every language declare their parent with it.
 */

/** Guides whose declared parentHub is `hubPath`, in registry order. */
export function guidesForHub(
  hubPath: string,
  locale: Locale = DEFAULT_LOCALE,
): GuideContent[] {
  return Object.values(guidesFor(locale)).filter(
    (g) => g.parentHub?.path === hubPath,
  );
}

/** Hub paths that have at least one child guide, ordered by cluster size. */
export function hubsWithGuides(locale: Locale = DEFAULT_LOCALE): string[] {
  const counts = new Map<string, number>();
  for (const g of Object.values(guidesFor(locale))) {
    const p = g.parentHub?.path;
    if (p) counts.set(p, (counts.get(p) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([p]) => p);
}

/**
 * Display label for a hub, from that locale's registry title trimmed of the
 * marketing suffix. Splitting on the em dash works for every language the
 * titles are written in — the separator is punctuation, not a word.
 */
export function hubLabel(
  hubPath: string,
  locale: Locale = DEFAULT_LOCALE,
): string {
  const route = routeFor(locale, hubPath.replace(/^\//, "") as RouteId);
  return route ? (route.title.split("—")[0]?.trim() ?? route.title) : hubPath;
}

/** The hub's own URL in `locale`. */
export function hubHref(hubPath: string, locale: Locale = DEFAULT_LOCALE): string {
  return pathForWithFallback(locale, hubPath.replace(/^\//, "") as RouteId);
}

/** A guide's URL in `locale`, from its English slug. */
export function guideHref(slug: string, locale: Locale = DEFAULT_LOCALE): string {
  return pathForWithFallback(locale, `guides/${slug}` as RouteId);
}

/**
 * Child guides of a hub as link items. `limit` caps how many render inline on
 * the hub page itself — the complete set always stays reachable via the
 * guides index, so no guide depends on this cap to be crawlable.
 */
export function clusterLinks(
  hubPath: string,
  locale: Locale = DEFAULT_LOCALE,
  limit?: number,
): RelatedLink[] {
  const guides = guidesForHub(hubPath, locale);
  return (limit ? guides.slice(0, limit) : guides).map((g) => ({
    label: g.h1,
    path: guideHref(g.slug, locale),
  }));
}
