/**
 * Central locale configuration.
 *
 * Every locale-aware decision in this codebase — routing, metadata, hreflang,
 * sitemaps, breadcrumbs, navigation, the language switcher, schema and the
 * tool UI — reads from this file and nothing else. Adding a language is
 * meant to be: flip `published`, supply a route manifest, supply localized
 * content, run the parity gates. It must never require touching routing or
 * SEO plumbing again.
 *
 * Design rules enforced by tests/i18n/locales.test.ts:
 *
 * - `en` is the default locale and has an EMPTY prefix. English stays at the
 *   site root (`/compress-pdf`, never `/en/compress-pdf`); moving it would
 *   redirect and reset every indexed English URL.
 * - Every other locale has a non-empty, lowercase, URL-safe prefix.
 * - `published: false` locales are inert: they never produce a page, a
 *   sitemap entry, an hreflang alternate or a clickable switcher option.
 *   They exist here so the architecture is provably locale-generic rather
 *   than an EN/PT special case.
 * - `direction` exists so an RTL locale (ar) can ship without a layout
 *   rewrite. Components use CSS logical properties; see docs/localization.
 */

export const LOCALE_CODES = [
  "en",
  "pt-BR",
  "es",
  "fr",
  "de",
  "ja",
  "id",
  "ar",
  "ru",
  "pl",
  "cs",
  "it",
  "tr",
] as const;

export type Locale = (typeof LOCALE_CODES)[number];

export type TextDirection = "ltr" | "rtl";

export interface LocaleConfig {
  /** BCP-47 locale code. Also the key used in hreflang output. */
  readonly code: Locale;
  /**
   * First URL path segment for this locale, without slashes. Empty string
   * for the default locale, which lives at the site root.
   */
  readonly prefix: string;
  /** Value for the `lang` attribute on `<html>`. */
  readonly htmlLang: string;
  /** Value for the `dir` attribute on `<html>`. */
  readonly direction: TextDirection;
  /** English-language name, for `hreflang` documentation and admin UI. */
  readonly name: string;
  /** Endonym — what speakers call the language. Used in the switcher. */
  readonly nativeName: string;
  /**
   * Locale to fall back to for UI strings this locale has not translated
   * yet. `null` for the default locale, which must be complete.
   */
  readonly fallback: Locale | null;
  /**
   * Whether this locale is live. Unpublished locales produce no public
   * pages, no sitemap URLs, no hreflang alternates and no switcher links.
   */
  readonly published: boolean;
  /** Locale tag passed to `Intl` for dates and numbers. */
  readonly intlLocale: string;
}

export const LOCALES: Record<Locale, LocaleConfig> = {
  en: {
    code: "en",
    prefix: "",
    htmlLang: "en",
    direction: "ltr",
    name: "English",
    nativeName: "English",
    fallback: null,
    published: true,
    intlLocale: "en-US",
  },
  "pt-BR": {
    code: "pt-BR",
    prefix: "pt-br",
    htmlLang: "pt-BR",
    direction: "ltr",
    name: "Brazilian Portuguese",
    nativeName: "Português (Brasil)",
    fallback: "en",
    published: true,
    intlLocale: "pt-BR",
  },
  es: {
    code: "es",
    prefix: "es",
    htmlLang: "es",
    direction: "ltr",
    name: "Spanish",
    nativeName: "Español",
    fallback: "en",
    published: true,
    intlLocale: "es-ES",
  },
  fr: {
    code: "fr",
    prefix: "fr",
    htmlLang: "fr",
    direction: "ltr",
    name: "French",
    nativeName: "Français",
    fallback: "en",
    published: true,
    intlLocale: "fr-FR",
  },
  de: {
    code: "de",
    prefix: "de",
    htmlLang: "de",
    direction: "ltr",
    name: "German",
    nativeName: "Deutsch",
    fallback: "en",
    published: true,
    intlLocale: "de-DE",
  },
  ja: {
    code: "ja",
    prefix: "ja",
    htmlLang: "ja",
    direction: "ltr",
    name: "Japanese",
    nativeName: "日本語",
    fallback: "en",
    published: false,
    intlLocale: "ja-JP",
  },
  id: {
    code: "id",
    prefix: "id",
    htmlLang: "id",
    direction: "ltr",
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
    fallback: "en",
    published: false,
    intlLocale: "id-ID",
  },
  ar: {
    code: "ar",
    prefix: "ar",
    htmlLang: "ar",
    direction: "rtl",
    name: "Arabic",
    nativeName: "العربية",
    fallback: "en",
    published: true,
    intlLocale: "ar",
  },
  ru: {
    code: "ru",
    prefix: "ru",
    htmlLang: "ru",
    direction: "ltr",
    name: "Russian",
    nativeName: "Русский",
    fallback: "en",
    published: true,
    intlLocale: "ru-RU",
  },
  pl: {
    code: "pl",
    prefix: "pl",
    htmlLang: "pl",
    direction: "ltr",
    name: "Polish",
    nativeName: "Polski",
    fallback: "en",
    published: true,
    intlLocale: "pl-PL",
  },
  cs: {
    code: "cs",
    prefix: "cs",
    htmlLang: "cs",
    direction: "ltr",
    name: "Czech",
    nativeName: "Čeština",
    fallback: "en",
    published: true,
    intlLocale: "cs-CZ",
  },
  it: {
    code: "it",
    prefix: "it",
    htmlLang: "it",
    direction: "ltr",
    name: "Italian",
    nativeName: "Italiano",
    fallback: "en",
    published: true,
    intlLocale: "it-IT",
  },
  tr: {
    code: "tr",
    prefix: "tr",
    htmlLang: "tr",
    direction: "ltr",
    name: "Turkish",
    nativeName: "Türkçe",
    fallback: "en",
    published: false,
    intlLocale: "tr-TR",
  },
};

/** The locale served at the site root. */
export const DEFAULT_LOCALE: Locale = "en";

export const DEFAULT_LOCALE_CONFIG = LOCALES[DEFAULT_LOCALE];

/** Locale configs that are live, default locale first, then declaration order. */
export function publishedLocales(): LocaleConfig[] {
  return LOCALE_CODES.map((c) => LOCALES[c]).filter((l) => l.published);
}

/** Locale codes that are live. */
export function publishedLocaleCodes(): Locale[] {
  return publishedLocales().map((l) => l.code);
}

export function isLocale(value: string): value is Locale {
  return (LOCALE_CODES as readonly string[]).includes(value);
}

export function isPublishedLocale(value: string): value is Locale {
  return isLocale(value) && LOCALES[value].published;
}

/**
 * Locale owning a URL prefix segment, e.g. `"pt-br"` -> `"pt-BR"`.
 * Returns `null` for an unknown or unpublished prefix so callers cannot
 * accidentally serve a locale that is not live.
 */
export function localeFromPrefix(prefix: string): Locale | null {
  const normalized = prefix.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (normalized === "") return DEFAULT_LOCALE;
  const hit = publishedLocales().find((l) => l.prefix === normalized);
  return hit ? hit.code : null;
}

/**
 * The locale a URL path belongs to, based on its first segment only.
 * Unprefixed paths belong to the default locale.
 */
export function localeFromPath(path: string): Locale {
  const first = path.replace(/^\/+/, "").split("/")[0] ?? "";
  const hit = publishedLocales().find((l) => l.prefix !== "" && l.prefix === first.toLowerCase());
  return hit ? hit.code : DEFAULT_LOCALE;
}

/** `""` for the default locale, otherwise `"/pt-br"`. */
export function localePathPrefix(locale: Locale): string {
  const { prefix } = LOCALES[locale];
  return prefix === "" ? "" : `/${prefix}`;
}

/**
 * Fallback chain for UI strings, nearest first, ending at the default
 * locale. `["pt-BR", "en"]` for Brazilian Portuguese.
 */
export function localeChain(locale: Locale): Locale[] {
  const chain: Locale[] = [];
  let cursor: Locale | null = locale;
  while (cursor && !chain.includes(cursor)) {
    chain.push(cursor);
    cursor = LOCALES[cursor].fallback;
  }
  return chain;
}
