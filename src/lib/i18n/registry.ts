import { localeChain, type Locale } from "@/lib/i18n/locales";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import type { SiteDictionary } from "@/lib/i18n/dictionary";
import type {
  ResolvedToolStrings,
  ToolDictionary,
  ToolKey,
} from "@/lib/i18n/toolStrings";
import { SITE_EN } from "@/lib/i18n/dictionaries/site.en";
import { SITE_PT_BR } from "@/lib/i18n/dictionaries/site.pt-BR";
import { SITE_FR } from "@/lib/i18n/dictionaries/site.fr";
import { SITE_ES } from "@/lib/i18n/dictionaries/site.es";
import { SITE_DE } from "@/lib/i18n/dictionaries/site.de";
import { SITE_IT } from "@/lib/i18n/dictionaries/site.it";
import { SITE_AR } from "@/lib/i18n/dictionaries/site.ar";
import { SITE_RU } from "@/lib/i18n/dictionaries/site.ru";
import { SITE_PL } from "@/lib/i18n/dictionaries/site.pl";
import { SITE_CS } from "@/lib/i18n/dictionaries/site.cs";
import { SITE_JA } from "@/lib/i18n/dictionaries/site.ja";
import { SITE_TR } from "@/lib/i18n/dictionaries/site.tr";
import { TOOLS_EN } from "@/lib/i18n/dictionaries/tools.en";
import { TOOLS_PT_BR } from "@/lib/i18n/dictionaries/tools.pt-BR";
import { TOOLS_FR } from "@/lib/i18n/dictionaries/tools.fr";
import { TOOLS_ES } from "@/lib/i18n/dictionaries/tools.es";
import { TOOLS_DE } from "@/lib/i18n/dictionaries/tools.de";
import { TOOLS_IT } from "@/lib/i18n/dictionaries/tools.it";
import { TOOLS_AR } from "@/lib/i18n/dictionaries/tools.ar";
import { TOOLS_RU } from "@/lib/i18n/dictionaries/tools.ru";
import { TOOLS_PL } from "@/lib/i18n/dictionaries/tools.pl";
import { TOOLS_CS } from "@/lib/i18n/dictionaries/tools.cs";
import { TOOLS_JA } from "@/lib/i18n/dictionaries/tools.ja";
import { TOOLS_TR } from "@/lib/i18n/dictionaries/tools.tr";

/**
 * Where every translated dictionary is wired in.
 *
 * Static objects rather than imperative registration: a module that has to
 * be imported for its side effects before anything else works is a bug
 * waiting for the first import-order change. Adding a locale here is two
 * lines, and the compiler checks both.
 *
 * These modules are only ever imported by Server Components. Next.js
 * therefore never sends them to the browser, which is what keeps an English
 * page from shipping the Portuguese corpus — and keeps locale eleven from
 * costing locales one through ten a single byte.
 */
const SITE_DICTIONARIES: Partial<Record<Locale, SiteDictionary>> = {
  en: SITE_EN,
  "pt-BR": SITE_PT_BR,
  fr: SITE_FR,
  es: SITE_ES,
  de: SITE_DE,
  it: SITE_IT,
  ar: SITE_AR,
  ru: SITE_RU,
  pl: SITE_PL,
  cs: SITE_CS,
  ja: SITE_JA,
  tr: SITE_TR,
};

const TOOL_DICTIONARIES: Partial<Record<Locale, ToolDictionary>> = {
  en: TOOLS_EN,
  "pt-BR": TOOLS_PT_BR,
  fr: TOOLS_FR,
  es: TOOLS_ES,
  de: TOOLS_DE,
  it: TOOLS_IT,
  ar: TOOLS_AR,
  ru: TOOLS_RU,
  pl: TOOLS_PL,
  cs: TOOLS_CS,
  ja: TOOLS_JA,
  tr: TOOLS_TR,
};

function resolve<T>(
  locale: Locale,
  registry: Partial<Record<Locale, T>>,
  kind: string,
): T {
  for (const candidate of localeChain(locale)) {
    const hit = registry[candidate];
    if (hit) return hit;
  }
  throw new Error(`[i18n] no ${kind} dictionary for "${locale}"`);
}

/**
 * Site chrome for a locale, walking the fallback chain.
 *
 * Falling back rather than throwing means a half-translated locale renders
 * a working page with a visible English gap — which the parity report
 * lists — instead of taking the site down over one missing string.
 */
export function getSiteDictionary(locale: Locale): SiteDictionary {
  return resolve(locale, SITE_DICTIONARIES, "site");
}

/** Tool copy for a locale, with related-tool ids resolved to local paths. */
export function getToolStrings<K extends ToolKey>(
  locale: Locale,
  key: K,
): ResolvedToolStrings<K> {
  const dictionary = resolve(locale, TOOL_DICTIONARIES, "tool");
  const { related, ...rest } = dictionary.tools[key];
  return {
    ...rest,
    related: related.map((r) => ({
      label: r.label,
      path: pathForWithFallback(locale, r.id),
    })),
    common: dictionary.common,
  } as ResolvedToolStrings<K>;
}

/** Whether a locale has its own dictionary rather than inheriting one. */
export function hasOwnSiteDictionary(locale: Locale): boolean {
  return SITE_DICTIONARIES[locale] !== undefined;
}

export function hasOwnToolDictionary(locale: Locale): boolean {
  return TOOL_DICTIONARIES[locale] !== undefined;
}
