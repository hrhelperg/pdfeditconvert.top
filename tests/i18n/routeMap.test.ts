import { describe, expect, it } from "vitest";
import { ROUTES } from "@/lib/routes";
import { ROUTE_IDS } from "@/lib/i18n/routeIds";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_CODES,
  localeChain,
  localeFromPath,
  localeFromPrefix,
  publishedLocaleCodes,
} from "@/lib/i18n/locales";
import {
  allPublishedRoutes,
  alternatesFor,
  pathFor,
  routeFor,
  routesForLocale,
  xDefaultFor,
} from "@/lib/i18n/routeMap";

const PUBLISHED = publishedLocaleCodes();
const NON_DEFAULT_PUBLISHED = PUBLISHED.filter((l) => l !== DEFAULT_LOCALE);

describe("locale configuration", () => {
  it("keeps the default locale at the site root", () => {
    expect(LOCALES[DEFAULT_LOCALE].prefix).toBe("");
  });

  it("gives every non-default locale a distinct, url-safe prefix", () => {
    const prefixes = LOCALE_CODES.filter((c) => c !== DEFAULT_LOCALE).map(
      (c) => LOCALES[c].prefix,
    );
    for (const p of prefixes) expect(p).toMatch(/^[a-z0-9-]+$/);
    expect(new Set(prefixes).size).toBe(prefixes.length);
  });

  it("declares a complete config for every locale code", () => {
    for (const code of LOCALE_CODES) {
      const cfg = LOCALES[code];
      expect(cfg.code).toBe(code);
      expect(cfg.htmlLang.length).toBeGreaterThan(0);
      expect(cfg.nativeName.length).toBeGreaterThan(0);
      expect(["ltr", "rtl"]).toContain(cfg.direction);
      expect(cfg.intlLocale.length).toBeGreaterThan(0);
    }
  });

  it("every non-default locale falls back, terminating at the default", () => {
    for (const code of LOCALE_CODES) {
      const chain = localeChain(code);
      expect(chain[0]).toBe(code);
      expect(chain.at(-1)).toBe(DEFAULT_LOCALE);
    }
    expect(LOCALES[DEFAULT_LOCALE].fallback).toBeNull();
  });

  it("resolves a locale from its prefix, and refuses unpublished ones", () => {
    expect(localeFromPrefix("")).toBe(DEFAULT_LOCALE);
    expect(localeFromPrefix("pt-br")).toBe("pt-BR");
    // `es` is configured but not published: it must not resolve to a locale.
    expect(LOCALES.es.published).toBe(false);
    expect(localeFromPrefix("es")).toBeNull();
    expect(localeFromPrefix("nope")).toBeNull();
  });

  it("reads the locale off a path's first segment only", () => {
    expect(localeFromPath("/compress-pdf")).toBe(DEFAULT_LOCALE);
    expect(localeFromPath("/pt-br/comprimir-pdf")).toBe("pt-BR");
    expect(localeFromPath("/guides/pt-br-something")).toBe(DEFAULT_LOCALE);
  });
});

describe("route id registry", () => {
  it("matches the English route registry exactly", () => {
    const fromRoutes = ROUTES.map((r) => r.path.replace(/^\//, ""));
    expect([...ROUTE_IDS]).toEqual(fromRoutes);
  });

  it("has no duplicates", () => {
    expect(new Set(ROUTE_IDS).size).toBe(ROUTE_IDS.length);
  });
});

describe("localized route manifests", () => {
  it.each(NON_DEFAULT_PUBLISHED)("%s translates every English route", (locale) => {
    const missing = ROUTES.filter((r) => !pathFor(locale, r.path.replace(/^\//, "") as never));
    expect(missing.map((r) => r.path)).toEqual([]);
  });

  it.each(NON_DEFAULT_PUBLISHED)("%s prefixes every path with its locale", (locale) => {
    const prefix = `/${LOCALES[locale].prefix}`;
    for (const route of routesForLocale(locale)) {
      expect(route.path === prefix || route.path.startsWith(`${prefix}/`)).toBe(true);
    }
  });

  it.each(PUBLISHED)("%s has no duplicate path", (locale) => {
    const paths = routesForLocale(locale).map((r) => r.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it.each(PUBLISHED)("%s has no duplicate title", (locale) => {
    const titles = routesForLocale(locale).map((r) => r.title);
    const dupes = titles.filter((t, i) => titles.indexOf(t) !== i);
    expect(dupes).toEqual([]);
  });

  it.each(PUBLISHED)("%s has no duplicate meta description", (locale) => {
    const descriptions = routesForLocale(locale).map((r) => r.description);
    const dupes = descriptions.filter((d, i) => descriptions.indexOf(d) !== i);
    expect(dupes).toEqual([]);
  });

  it.each(NON_DEFAULT_PUBLISHED)("%s never reuses an English title", (locale) => {
    const english = new Set(ROUTES.map((r) => r.title));
    const untranslated = routesForLocale(locale)
      .filter((r) => english.has(r.title))
      .map((r) => r.path);
    expect(untranslated).toEqual([]);
  });

  it.each(NON_DEFAULT_PUBLISHED)("%s never reuses an English description", (locale) => {
    const english = new Set(ROUTES.map((r) => r.description));
    const untranslated = routesForLocale(locale)
      .filter((r) => english.has(r.description))
      .map((r) => r.path);
    expect(untranslated).toEqual([]);
  });

  it.each(NON_DEFAULT_PUBLISHED)("%s never reuses an English slug verbatim", (locale) => {
    // A slug identical to the English one usually means the entry was copied
    // and the URL never localized. Genuinely-shared tokens are allowlisted.
    const SHARED = new Set(["pdf-ou-jpg", "pdf-ou-docx", "pdf-ou-png"]);
    const prefix = `/${LOCALES[locale].prefix}`;
    const suspicious = routesForLocale(locale)
      .filter((r) => {
        const localized = r.path.slice(prefix.length).replace(/^\//, "");
        const english = r.routeId;
        return localized === english && english !== "" && !SHARED.has(localized);
      })
      .map((r) => r.path);
    expect(suspicious).toEqual([]);
  });

  it("does not publish routes for unpublished locales", () => {
    expect(routesForLocale("es")).toEqual([]);
    expect(allPublishedRoutes().every((r) => PUBLISHED.includes(r.locale))).toBe(true);
  });

  it.each(NON_DEFAULT_PUBLISHED)(
    "%s inherits category, priority and lastmod from its English source",
    (locale) => {
      for (const route of routesForLocale(locale)) {
        const source = ROUTES.find((r) => r.path === `/${route.routeId}`);
        expect(source).toBeDefined();
        expect(route.category).toBe(source!.category);
        expect(route.priority).toBe(source!.priority);
        expect(route.changeFrequency).toBe(source!.changeFrequency);
        expect(route.lastModified).toBe(source!.lastModified);
      }
    },
  );
});

describe("hreflang alternates", () => {
  it("are reciprocal for every route id", () => {
    for (const id of ROUTE_IDS) {
      const alternates = alternatesFor(id);
      for (const a of alternates) {
        const back = alternatesFor(id).map((x) => x.locale);
        expect(back).toContain(a.locale);
        // Every alternate must resolve to a real route in its own locale.
        expect(routeFor(a.locale, id)).not.toBeNull();
      }
    }
  });

  it("include one entry per published locale that has the page", () => {
    for (const id of ROUTE_IDS) {
      const alternates = alternatesFor(id);
      const expected = PUBLISHED.filter((l) => {
        const r = routeFor(l, id);
        return r !== null && !r.hidden;
      });
      expect(alternates.map((a) => a.locale)).toEqual(expected);
    }
  });

  it("never emit an alternate for an unpublished locale", () => {
    for (const id of ROUTE_IDS) {
      for (const a of alternatesFor(id)) {
        expect(LOCALES[a.locale].published).toBe(true);
      }
    }
  });

  it("point x-default at the default-locale page", () => {
    for (const id of ROUTE_IDS) {
      const x = xDefaultFor(id);
      const en = alternatesFor(id).find((a) => a.locale === DEFAULT_LOCALE);
      expect(x).toBe(en ? en.url : null);
    }
  });
});
