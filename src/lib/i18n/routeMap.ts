import { ROUTES, SITE_URL } from "@/lib/routes";
import type { RouteEntry } from "@/types/content";
import {
  DEFAULT_LOCALE,
  LOCALES,
  localePathPrefix,
  publishedLocaleCodes,
  type Locale,
} from "@/lib/i18n/locales";
import { ROUTE_IDS, isRouteId, type RouteId } from "@/lib/i18n/routeIds";
import { PT_BR_ROUTE_MANIFEST } from "@/content/pt-BR/routes";
import { FR_ROUTE_MANIFEST } from "@/content/fr/routes";
import { ES_ROUTE_MANIFEST } from "@/content/es/routes";
import { DE_ROUTE_MANIFEST } from "@/content/de/routes";
import { IT_ROUTE_MANIFEST } from "@/content/it/routes";
import { AR_ROUTE_MANIFEST } from "@/content/ar/routes";
import { RU_ROUTE_MANIFEST } from "@/content/ru/routes";
import { PL_ROUTE_MANIFEST } from "@/content/pl/routes";
import { CS_ROUTE_MANIFEST } from "@/content/cs/routes";
import { JA_ROUTE_MANIFEST } from "@/content/ja/routes";
import { TR_ROUTE_MANIFEST } from "@/content/tr/routes";

/**
 * The centralized locale route map.
 *
 * One canonical route id maps to one path per locale:
 *
 *   id "compress-pdf"
 *     en     -> /compress-pdf
 *     pt-BR  -> /pt-br/comprimir-pdf
 *     es     -> (undefined until Spanish ships)
 *
 * Localized slugs are always declared explicitly in a locale manifest. They
 * are never derived from a translated title, never transliterated at
 * runtime and never guessed: a URL is a permanent commitment, and deriving
 * one from prose means an editorial tweak silently moves an indexed page.
 *
 * Slugs are plain strings, so a locale is free to use native characters
 * (Cyrillic, diacritics) or an ASCII-normalized form — that is an SEO
 * decision per language, not an architectural one. pt-BR uses
 * ASCII-normalized slugs, which is the prevailing Brazilian convention and
 * avoids percent-encoded URLs in links and analytics.
 */
export interface LocaleRouteEntry {
  /** English route id this page is the translation of. */
  readonly id: RouteId;
  /**
   * Path after the locale prefix, without leading or trailing slashes.
   * `""` is the locale home page (e.g. `/pt-br`).
   */
  readonly slug: string;
  /** Localized `<title>`. Must be unique within the locale. */
  readonly title: string;
  /** Localized meta description. Must be unique within the locale. */
  readonly description: string;
  /**
   * Date this localized copy last genuinely changed.
   *
   * Set it when a page is re-translated after its English source moves.
   * Left unset, it falls back to the locale's `publishedAt` (see
   * `LocaleRouteDefaults`) and then to the English route's date.
   */
  readonly lastModified?: string;
}

/** A route entry that knows which locale and canonical page it belongs to. */
export interface LocalizedRoute extends RouteEntry {
  readonly locale: Locale;
  readonly routeId: RouteId;
}

const EN_BY_ID: ReadonlyMap<RouteId, RouteEntry> = new Map(
  ROUTES.map((r) => [r.path.replace(/^\//, "") as RouteId, r]),
);

/** The English route registry, expressed as localized routes. */
export const EN_ROUTES: LocalizedRoute[] = ROUTES.map((r) => ({
  ...r,
  locale: DEFAULT_LOCALE,
  routeId: r.path.replace(/^\//, "") as RouteId,
}));

/** Locale-wide defaults applied to every entry that does not override them. */
export interface LocaleRouteDefaults {
  /**
   * The date this locale's pages first went live.
   *
   * Without it a translation inherits the English `lastModified`, which
   * claims a French page last changed in May when it did not exist until
   * August. That is false in the *understating* direction — it tells a
   * crawler a brand-new page is four months stale — so it is still a lie,
   * just a self-harming one.
   *
   * `publishedAt` is deliberately not `max(publishedAt, source)`: if the
   * English source moves and the translation is not redone, the localized
   * page genuinely has not changed, and the honest date is the older one.
   * A page that *is* re-translated states its own `lastModified`.
   */
  readonly publishedAt?: string;
}

/**
 * Expands a locale manifest into full route entries.
 *
 * Category, priority and change frequency are inherited from the English
 * route rather than restated per locale: they describe the *page's role in
 * the site*, which translation does not change. Only the things translation
 * genuinely changes — path, title, description, and when the copy last moved
 * — are authored per locale.
 */
export function buildLocaleRoutes(
  locale: Locale,
  entries: readonly LocaleRouteEntry[],
  defaults: LocaleRouteDefaults = {},
): LocalizedRoute[] {
  const prefix = localePathPrefix(locale);
  return entries.map((e) => {
    const source = EN_BY_ID.get(e.id);
    if (!source) {
      throw new Error(`[i18n] ${locale} manifest references unknown route id "${e.id}"`);
    }
    const slug = e.slug.replace(/^\/+|\/+$/g, "");
    return {
      ...source,
      path: slug === "" ? prefix || "/" : `${prefix}/${slug}`,
      title: e.title,
      description: e.description,
      lastModified: e.lastModified ?? defaults.publishedAt ?? source.lastModified,
      locale,
      routeId: e.id,
    };
  });
}

/**
 * Route manifests for every locale, keyed by locale.
 *
 * A locale absent from this record — or present but unpublished — simply has
 * no pages. Adding Spanish means adding one manifest import here.
 */
/**
 * The day each translated locale first went live. See `publishedAt`.
 * pt-BR and fr shipped in the same release window.
 */
export const LOCALE_PUBLISHED_AT: Partial<Record<Locale, string>> = {
  "pt-BR": "2026-08-31",
  fr: "2026-08-31",
  es: "2026-08-31",
  de: "2026-09-01",
  it: "2026-09-01",
  ar: "2026-09-01",
  ru: "2026-09-01",
  pl: "2026-09-01",
  cs: "2026-09-01",
  ja: "2026-09-01",
  tr: "2026-09-01",
};

const LOCALE_ROUTES: Partial<Record<Locale, LocalizedRoute[]>> = {
  [DEFAULT_LOCALE]: EN_ROUTES,
  "pt-BR": buildLocaleRoutes("pt-BR", PT_BR_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT["pt-BR"],
  }),
  fr: buildLocaleRoutes("fr", FR_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.fr,
  }),
  es: buildLocaleRoutes("es", ES_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.es,
  }),
  de: buildLocaleRoutes("de", DE_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.de,
  }),
  it: buildLocaleRoutes("it", IT_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.it,
  }),
  ar: buildLocaleRoutes("ar", AR_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.ar,
  }),
  ru: buildLocaleRoutes("ru", RU_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.ru,
  }),
  pl: buildLocaleRoutes("pl", PL_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.pl,
  }),
  cs: buildLocaleRoutes("cs", CS_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.cs,
  }),
  ja: buildLocaleRoutes("ja", JA_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.ja,
  }),
  tr: buildLocaleRoutes("tr", TR_ROUTE_MANIFEST, {
    publishedAt: LOCALE_PUBLISHED_AT.tr,
  }),
};

/** All routes for one locale, or an empty list if the locale has none. */
export function routesForLocale(locale: Locale): LocalizedRoute[] {
  return LOCALE_ROUTES[locale] ?? [];
}

/** Every route across every published locale. */
export function allPublishedRoutes(): LocalizedRoute[] {
  return publishedLocaleCodes().flatMap((l) => routesForLocale(l));
}

/** The route for a canonical page in one locale, if that translation exists. */
export function routeFor(locale: Locale, id: RouteId): LocalizedRoute | null {
  return routesForLocale(locale).find((r) => r.routeId === id) ?? null;
}

/**
 * The route for a page that must exist. Throws at build time rather than
 * rendering a page with an empty title if a manifest entry is missing.
 */
export function requireRoute(locale: Locale, id: RouteId): LocalizedRoute {
  const route = routeFor(locale, id);
  if (!route) throw new Error(`[i18n] ${locale} has no route for "${id}"`);
  return route;
}

/** Path for a canonical page in one locale, or `null` when untranslated. */
export function pathFor(locale: Locale, id: RouteId): string | null {
  return routeFor(locale, id)?.path ?? null;
}

/**
 * Path for a canonical page in `locale`, falling back to the default locale.
 *
 * Used for internal links inside a localized page when that specific target
 * has no translation yet. It never invents a URL: the fallback is a real,
 * indexable English page.
 */
export function pathForWithFallback(locale: Locale, id: RouteId): string {
  const own = pathFor(locale, id);
  if (own) return own;
  const fallback = pathFor(DEFAULT_LOCALE, id);
  if (!fallback) throw new Error(`[i18n] no path for route id "${id}" in any locale`);
  return fallback;
}

/** Translates an English path into `locale`, keeping it English if untranslated. */
export function localizePath(locale: Locale, englishPath: string): string {
  const id = englishPath.replace(/^\//, "");
  if (!isRouteId(id)) return englishPath;
  return pathForWithFallback(locale, id);
}

/** Whether an English path has a real translation in `locale`. */
export function hasTranslation(locale: Locale, englishPath: string): boolean {
  const id = englishPath.replace(/^\//, "");
  return isRouteId(id) && pathFor(locale, id) !== null;
}

/** The route serving a URL path, in any published locale. */
export function routeByPath(path: string): LocalizedRoute | null {
  const normalized = path === "" ? "/" : path;
  return allPublishedRoutes().find((r) => r.path === normalized) ?? null;
}

export interface SectionEntry {
  /** Value Next.js will pass as the dynamic `[slug]` param, in this locale. */
  readonly param: string;
  /** The canonical route id, e.g. "guides/how-to-compress-pdf". */
  readonly routeId: RouteId;
  /** The English slug — the key content registries are indexed by. */
  readonly englishSlug: string;
  readonly route: LocalizedRoute;
}

/**
 * Every page of a section in one locale, e.g. all guides in pt-BR.
 *
 * `section` is the English path prefix ("guides", "compare", "use-cases").
 * This is what lets one dynamic segment serve a localized section: the URL
 * carries the Portuguese slug, `englishSlug` finds the content, and neither
 * has to know about the other.
 */
export function sectionEntries(locale: Locale, section: string): SectionEntry[] {
  const prefix = `${section}/`;
  return routesForLocale(locale)
    .filter((r) => r.routeId.startsWith(prefix))
    .map((r) => ({
      param: r.path.split("/").pop() ?? "",
      routeId: r.routeId,
      englishSlug: r.routeId.slice(prefix.length),
      route: r,
    }));
}

/** The section entry a localized `[slug]` param refers to, if any. */
export function sectionEntry(
  locale: Locale,
  section: string,
  param: string,
): SectionEntry | null {
  return sectionEntries(locale, section).find((e) => e.param === param) ?? null;
}

/** Absolute URL for a route path, matching the canonical tag exactly. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export interface LocaleAlternate {
  readonly locale: Locale;
  /** hreflang value — the locale code, which is already BCP-47. */
  readonly hreflang: string;
  readonly path: string;
  readonly url: string;
}

/**
 * Every published, existing translation of a canonical page.
 *
 * Only real pages appear here, which is what keeps hreflang reciprocal by
 * construction: both sides of a pair are generated from the same list, so
 * page A cannot point at page B without B pointing back.
 */
export function alternatesFor(id: RouteId): LocaleAlternate[] {
  const out: LocaleAlternate[] = [];
  for (const locale of publishedLocaleCodes()) {
    const route = routeFor(locale, id);
    if (!route || route.hidden) continue;
    out.push({
      locale,
      hreflang: LOCALES[locale].code,
      path: route.path,
      url: absoluteUrl(route.path),
    });
  }
  return out;
}

/**
 * The `x-default` target for a canonical page: the default-locale version.
 *
 * x-default names the page to serve when no declared language matches the
 * user. English is the site's canonical edition, so it is the honest answer
 * unless an international SEO decision later says otherwise.
 */
export function xDefaultFor(id: RouteId): string | null {
  const route = routeFor(DEFAULT_LOCALE, id);
  return route && !route.hidden ? absoluteUrl(route.path) : null;
}

/** Route ids that exist in the English registry, in registry order. */
export const ALL_ROUTE_IDS: readonly RouteId[] = ROUTE_IDS;
