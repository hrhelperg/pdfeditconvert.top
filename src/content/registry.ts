import type {
  CompareContent,
  GuideContent,
  HubContent,
  RelatedLink,
  ToolContent,
  UseCaseContent,
} from "@/types/content";
import { GUIDES } from "@/content/guides";
import { COMPARE } from "@/content/compare";
import { USE_CASES } from "@/content/use-cases";
import { GUIDES_PT_BR } from "@/content/pt-BR/guides";
import { COMPARE_PT_BR } from "@/content/pt-BR/compare";
import { USE_CASES_PT_BR } from "@/content/pt-BR/use-cases";
import { HUBS_PT_BR } from "@/content/pt-BR/hubs";
import { TOOL_CONTENT_PT_BR } from "@/content/pt-BR/tools";
import { GUIDES_FR } from "@/content/fr/guides";
import { COMPARE_FR } from "@/content/fr/compare";
import { USE_CASES_FR } from "@/content/fr/use-cases";
import { HUBS_FR } from "@/content/fr/hubs";
import { TOOL_CONTENT_FR } from "@/content/fr/tools";
import { GUIDES_ES } from "@/content/es/guides";
import { COMPARE_ES } from "@/content/es/compare";
import { USE_CASES_ES } from "@/content/es/use-cases";
import { HUBS_ES } from "@/content/es/hubs";
import { TOOL_CONTENT_ES } from "@/content/es/tools";
import { GUIDES_DE } from "@/content/de/guides";
import { COMPARE_DE } from "@/content/de/compare";
import { USE_CASES_DE } from "@/content/de/use-cases";
import { HUBS_DE } from "@/content/de/hubs";
import { TOOL_CONTENT_DE } from "@/content/de/tools";
import { GUIDES_IT } from "@/content/it/guides";
import { TOOL_CONTENT_IT } from "@/content/it/tools";
import { COMPARE_IT } from "@/content/it/compare";
import { USE_CASES_IT } from "@/content/it/use-cases";
import { HUBS_IT } from "@/content/it/hubs";
import { TOOL_CONTENT_AR } from "@/content/ar/tools";
import { COMPARE_AR } from "@/content/ar/compare";
import { USE_CASES_AR } from "@/content/ar/use-cases";
import { HUBS_AR } from "@/content/ar/hubs";
import { GUIDES_AR } from "@/content/ar/guides";
import { GUIDES_RU } from "@/content/ru/guides";
import { COMPARE_RU } from "@/content/ru/compare";
import { USE_CASES_RU } from "@/content/ru/use-cases";
import { HUBS_RU } from "@/content/ru/hubs";
import { TOOL_CONTENT_RU } from "@/content/ru/tools";
import { GUIDES_PL } from "@/content/pl/guides";
import { COMPARE_PL } from "@/content/pl/compare";
import { USE_CASES_PL } from "@/content/pl/use-cases";
import { HUBS_PL } from "@/content/pl/hubs";
import { TOOL_CONTENT_PL } from "@/content/pl/tools";
import { GUIDES_CS } from "@/content/cs/guides";
import { COMPARE_CS } from "@/content/cs/compare";
import { USE_CASES_CS } from "@/content/cs/use-cases";
import { HUBS_CS } from "@/content/cs/hubs";
import { TOOL_CONTENT_CS } from "@/content/cs/tools";
import { HUBS_EN } from "@/content/hubs";
import { TOOL_CONTENT_EN } from "@/content/tools";
import { DEFAULT_LOCALE, localeChain, type Locale } from "@/lib/i18n/locales";
import { localizePath } from "@/lib/i18n/routeMap";

/**
 * Per-locale content registries.
 *
 * Localized content is keyed by the **English** slug, and every `slug` field
 * holds the English slug too. The Portuguese URL is not stored in the
 * content at all — it comes from the route map. One consequence matters:
 * the same page cannot have two different ideas of its own URL, so a slug
 * change is a one-line edit in the manifest rather than a hunt through
 * content files.
 *
 * The same rule applies to internal links. `related` and `parentHub` in
 * every content file, in every language, carry the **English** path. The
 * renderer translates it for the page's locale. That means a translator
 * never types a URL, a Portuguese page can never link to a Portuguese page
 * that does not exist, and a route rename cannot silently break 500
 * cross-links.
 */

interface LocaleContent {
  readonly guides: Record<string, GuideContent>;
  readonly hubs: Record<string, HubContent>;
  readonly tools: Record<string, ToolContent>;
  readonly compare: Record<string, CompareContent>;
  readonly useCases: Record<string, UseCaseContent>;
}

const CONTENT: Partial<Record<Locale, LocaleContent>> = {
  en: {
    guides: GUIDES,
    hubs: HUBS_EN,
    tools: TOOL_CONTENT_EN,
    compare: COMPARE,
    useCases: USE_CASES,
  },
  "pt-BR": {
    guides: GUIDES_PT_BR,
    hubs: HUBS_PT_BR,
    tools: TOOL_CONTENT_PT_BR,
    compare: COMPARE_PT_BR,
    useCases: USE_CASES_PT_BR,
  },
  fr: {
    guides: GUIDES_FR,
    hubs: HUBS_FR,
    tools: TOOL_CONTENT_FR,
    compare: COMPARE_FR,
    useCases: USE_CASES_FR,
  },
  es: {
    guides: GUIDES_ES,
    hubs: HUBS_ES,
    tools: TOOL_CONTENT_ES,
    compare: COMPARE_ES,
    useCases: USE_CASES_ES,
  },
  de: {
    guides: GUIDES_DE,
    hubs: HUBS_DE,
    tools: TOOL_CONTENT_DE,
    compare: COMPARE_DE,
    useCases: USE_CASES_DE,
  },
  it: {
    guides: GUIDES_IT,
    hubs: HUBS_IT,
    tools: TOOL_CONTENT_IT,
    compare: COMPARE_IT,
    useCases: USE_CASES_IT,
  },
  ar: {
    guides: GUIDES_AR,
    hubs: HUBS_AR,
    tools: TOOL_CONTENT_AR,
    compare: COMPARE_AR,
    useCases: USE_CASES_AR,
  },
  ru: {
    guides: GUIDES_RU,
    hubs: HUBS_RU,
    tools: TOOL_CONTENT_RU,
    compare: COMPARE_RU,
    useCases: USE_CASES_RU,
  },
  pl: {
    guides: GUIDES_PL,
    hubs: HUBS_PL,
    tools: TOOL_CONTENT_PL,
    compare: COMPARE_PL,
    useCases: USE_CASES_PL,
  },
  cs: {
    guides: GUIDES_CS,
    hubs: HUBS_CS,
    tools: TOOL_CONTENT_CS,
    compare: COMPARE_CS,
    useCases: USE_CASES_CS,
  },
};

function contentFor(locale: Locale): LocaleContent {
  for (const candidate of localeChain(locale)) {
    const hit = CONTENT[candidate];
    if (hit) return hit;
  }
  throw new Error(`[i18n] no content registry for "${locale}"`);
}

/**
 * Looks a record up in `locale`, falling back through the locale chain.
 *
 * A locale that has translated its tools but not yet a given guide serves
 * the English guide at the English URL rather than a 404 or an empty page.
 * The parity report names every page in that state.
 */
function lookup<T>(
  locale: Locale,
  pick: (c: LocaleContent) => Record<string, T>,
  slug: string,
): T | null {
  for (const candidate of localeChain(locale)) {
    const registry = CONTENT[candidate];
    if (registry && pick(registry)[slug]) return pick(registry)[slug];
  }
  return null;
}

export function guidesFor(locale: Locale): Record<string, GuideContent> {
  return contentFor(locale).guides;
}

export function getGuideContent(locale: Locale, slug: string): GuideContent | null {
  return lookup(locale, (c) => c.guides, slug);
}

export function getHubContent(locale: Locale, slug: string): HubContent | null {
  return lookup(locale, (c) => c.hubs, slug);
}

export function getToolContent(locale: Locale, slug: string): ToolContent | null {
  return lookup(locale, (c) => c.tools, slug);
}

export function getCompareContent(locale: Locale, slug: string): CompareContent | null {
  return lookup(locale, (c) => c.compare, slug);
}

export function getUseCaseContent(locale: Locale, slug: string): UseCaseContent | null {
  return lookup(locale, (c) => c.useCases, slug);
}

/** Whether a locale has authored its own copy of a content record. */
export function hasOwnContent(
  locale: Locale,
  kind: keyof LocaleContent,
  slug: string,
): boolean {
  const own = CONTENT[locale];
  return own !== undefined && own[kind][slug] !== undefined;
}

/** Translates a content file's English link paths into the page's locale. */
export function localizeLinks(
  locale: Locale,
  links: readonly RelatedLink[],
): RelatedLink[] {
  return links.map((l) => ({ label: l.label, path: localizePath(locale, l.path) }));
}

export const CONTENT_LOCALES: Locale[] = (Object.keys(CONTENT) as Locale[]).filter(
  (l) => CONTENT[l] !== undefined,
);

export { DEFAULT_LOCALE };
