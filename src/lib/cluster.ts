import { GUIDES } from "@/content/guides";
import { ROUTES } from "@/lib/routes";
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
 */

/** Guides whose declared parentHub is `hubPath`, in registry order. */
export function guidesForHub(hubPath: string): GuideContent[] {
  return Object.values(GUIDES).filter((g) => g.parentHub?.path === hubPath);
}

/** Hub paths that have at least one child guide, ordered by cluster size. */
export function hubsWithGuides(): string[] {
  const counts = new Map<string, number>();
  for (const g of Object.values(GUIDES)) {
    const p = g.parentHub?.path;
    if (p) counts.set(p, (counts.get(p) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([p]) => p);
}

/** Registry title for a hub path, trimmed of the marketing suffix. */
export function hubLabel(hubPath: string): string {
  const route = ROUTES.find((r) => r.path === hubPath);
  return route ? (route.title.split("—")[0]?.trim() ?? route.title) : hubPath;
}

/**
 * Child guides of a hub as link items. `limit` caps how many render inline on
 * the hub page itself — the complete set always stays reachable via /guides,
 * so no guide depends on this cap to be crawlable.
 */
export function clusterLinks(hubPath: string, limit?: number): RelatedLink[] {
  const guides = guidesForHub(hubPath);
  return (limit ? guides.slice(0, limit) : guides).map((g) => ({
    label: g.h1,
    path: `/guides/${g.slug}`,
  }));
}
