import { describe, it, expect } from "vitest";
import { SITE_URL } from "@/lib/routes";
import {
  SITEMAP_GROUP_NAMES,
  groupLastModified,
  routeUrl,
  routesInGroup,
  sitemapFiles,
  sitemapIndexXml,
  sitemapName,
  urlsetXml,
} from "@/lib/sitemap";
import { DEFAULT_LOCALE, LOCALES, publishedLocaleCodes } from "@/lib/i18n/locales";
import { routesForLocale } from "@/lib/i18n/routeMap";

const PUBLISHED = publishedLocaleCodes();

describe("sitemap segmentation", () => {
  it.each(PUBLISHED)("%s: covers every non-hidden route exactly once", (locale) => {
    const paths = SITEMAP_GROUP_NAMES.flatMap((g) => routesInGroup(g, locale)).map(
      (r) => r.path,
    );
    const expected = routesForLocale(locale)
      .filter((r) => !r.hidden)
      .map((r) => r.path);
    expect(new Set(paths).size).toBe(paths.length);
    expect([...paths].sort()).toEqual([...expected].sort());
  });

  it("the index lists every non-empty (group, published locale) pair", () => {
    const xml = sitemapIndexXml();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const expected = sitemapFiles().map(
      ({ group, locale }) => `${SITE_URL}/sitemap-${sitemapName(group, locale)}.xml`,
    );
    expect(locs).toEqual(expected);
  });

  it("keeps the default locale's sitemap filenames unsuffixed", () => {
    // These URLs are already submitted in Search Console. Renaming them to
    // sitemap-tools-en.xml would 404 every existing submission for nothing.
    for (const group of SITEMAP_GROUP_NAMES) {
      expect(sitemapName(group, DEFAULT_LOCALE)).toBe(group);
    }
    expect(sitemapName("guides", "pt-BR")).toBe("guides-pt-br");
  });

  it("never publishes a sitemap for an unpublished locale", () => {
    expect(LOCALES.es.published).toBe(false);
    expect(sitemapFiles().every((f) => LOCALES[f.locale].published)).toBe(true);
    expect(sitemapIndexXml()).not.toContain("-es.xml");
  });

  it("index lastmod for a group is the newest lastModified inside it", () => {
    for (const { group, locale } of sitemapFiles()) {
      const newest = routesInGroup(group, locale)
        .map((r) => r.lastModified)
        .sort()
        .at(-1);
      expect(groupLastModified(group, locale)).toBe(newest);
    }
  });
});

describe("sitemap URL entries", () => {
  const allXml = sitemapFiles()
    .map(({ group, locale }) => urlsetXml(group, locale))
    .join("\n");
  const locs = [...allXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  it("emits one <loc> per non-hidden route in every published locale", () => {
    const expected = PUBLISHED.flatMap((l) =>
      routesForLocale(l).filter((r) => !r.hidden),
    );
    expect(locs).toHaveLength(expected.length);
    for (const loc of locs)
      expect(loc.startsWith(`${SITE_URL}/`) || loc === SITE_URL).toBe(true);
  });

  it("every <loc> matches the canonical URL the page itself declares", () => {
    const expected = PUBLISHED.flatMap((l) =>
      routesForLocale(l)
        .filter((r) => !r.hidden)
        .map((r) => routeUrl(r.path)),
    );
    expect([...locs].sort()).toEqual([...expected].sort());
  });

  it("contains no duplicate URLs across every locale", () => {
    expect(new Set(locs).size).toBe(locs.length);
  });

  it("annotates each URL with its translations, including a self-reference", () => {
    const xml = urlsetXml("tools", DEFAULT_LOCALE);
    expect(xml).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
    expect(xml).toContain(
      `<xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/compress-pdf" />`,
    );
    expect(xml).toContain(
      `<xhtml:link rel="alternate" hreflang="pt-BR" href="${SITE_URL}/pt-br/comprimir-pdf" />`,
    );
    // Reciprocity: the Portuguese file makes the same two claims.
    const pt = urlsetXml("tools", "pt-BR");
    expect(pt).toContain(
      `<xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/compress-pdf" />`,
    );
    expect(pt).toContain(
      `<xhtml:link rel="alternate" hreflang="pt-BR" href="${SITE_URL}/pt-br/comprimir-pdf" />`,
    );
  });

  it("never annotates an unpublished locale", () => {
    expect(allXml).not.toContain('hreflang="es"');
    expect(allXml).not.toContain('hreflang="ar"');
  });

  it("priority stays within the 0..1 range the protocol allows", () => {
    for (const p of [...allXml.matchAll(/<priority>([^<]+)<\/priority>/g)].map((m) =>
      Number(m[1]),
    )) {
      expect(p).toBeGreaterThanOrEqual(0);
      expect(p).toBeLessThanOrEqual(1);
    }
  });

  it("lastmod is a real date, never a build timestamp", () => {
    const lastmods = [...allXml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
    for (const d of lastmods) expect(d).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    // A build timestamp would make every page look freshly edited on every
    // deploy. Real content history is necessarily varied.
    expect(new Set(lastmods).size).toBeGreaterThan(1);
  });

  it("is byte-identical across two calls (no time-dependent output)", () => {
    expect(urlsetXml("tools")).toBe(urlsetXml("tools"));
    expect(urlsetXml("tools", "pt-BR")).toBe(urlsetXml("tools", "pt-BR"));
    expect(sitemapIndexXml()).toBe(sitemapIndexXml());
  });

  it("is well-formed enough to parse: balanced url elements", () => {
    for (const { group, locale } of sitemapFiles()) {
      const body = urlsetXml(group, locale);
      expect((body.match(/<url>/g) ?? []).length).toBe(
        (body.match(/<\/url>/g) ?? []).length,
      );
      expect(body.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    }
  });
});
