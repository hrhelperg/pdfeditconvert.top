import { describe, it, expect } from "vitest";
import { ROUTES, SITE_URL } from "@/lib/routes";
import {
  SITEMAP_GROUP_NAMES,
  groupLastModified,
  routeUrl,
  routesInGroup,
  sitemapIndexXml,
  urlsetXml,
} from "@/lib/sitemap";

const nonHidden = ROUTES.filter((r) => !r.hidden);
const allGroupRoutes = SITEMAP_GROUP_NAMES.flatMap((g) => routesInGroup(g));

describe("sitemap segmentation", () => {
  it("covers every non-hidden route exactly once across all groups", () => {
    const paths = allGroupRoutes.map((r) => r.path);
    expect(new Set(paths).size).toBe(paths.length);
    expect([...paths].sort()).toEqual(nonHidden.map((r) => r.path).sort());
  });

  it("the index lists every non-empty group and nothing else", () => {
    const xml = sitemapIndexXml();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const expected = SITEMAP_GROUP_NAMES.filter((g) => routesInGroup(g).length > 0).map(
      (g) => `${SITE_URL}/sitemap-${g}.xml`,
    );
    expect(locs).toEqual(expected);
  });

  it("index lastmod for a group is the newest lastModified inside it", () => {
    for (const g of SITEMAP_GROUP_NAMES) {
      const newest = routesInGroup(g)
        .map((r) => r.lastModified)
        .sort()
        .at(-1);
      expect(groupLastModified(g)).toBe(newest);
    }
  });
});

describe("sitemap URL entries", () => {
  const xml = SITEMAP_GROUP_NAMES.map((g) => urlsetXml(g)).join("\n");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  it("emits one <loc> per non-hidden route, on the canonical host", () => {
    expect(locs).toHaveLength(nonHidden.length);
    for (const loc of locs) expect(loc.startsWith(`${SITE_URL}/`) || loc === SITE_URL).toBe(true);
  });

  it("every <loc> matches the canonical URL the page itself declares", () => {
    expect([...locs].sort()).toEqual(nonHidden.map((r) => routeUrl(r.path)).sort());
  });

  it("contains no duplicate URLs", () => {
    expect(new Set(locs).size).toBe(locs.length);
  });

  it("priority stays within the 0..1 range the protocol allows", () => {
    for (const p of [...xml.matchAll(/<priority>([^<]+)<\/priority>/g)].map((m) => Number(m[1]))) {
      expect(p).toBeGreaterThanOrEqual(0);
      expect(p).toBeLessThanOrEqual(1);
    }
  });

  it("lastmod is a real date, never a build timestamp", () => {
    const lastmods = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
    expect(lastmods).toHaveLength(nonHidden.length);
    for (const d of lastmods) expect(d).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    // A build timestamp would make every page look freshly edited on every
    // deploy. Real content history is necessarily varied.
    expect(new Set(lastmods).size).toBeGreaterThan(1);
  });

  it("is byte-identical across two calls (no time-dependent output)", () => {
    expect(urlsetXml("tools")).toBe(urlsetXml("tools"));
    expect(sitemapIndexXml()).toBe(sitemapIndexXml());
  });

  it("is well-formed enough to parse: balanced url elements", () => {
    for (const g of SITEMAP_GROUP_NAMES) {
      const body = urlsetXml(g);
      expect((body.match(/<url>/g) ?? []).length).toBe((body.match(/<\/url>/g) ?? []).length);
      expect(body.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    }
  });
});
