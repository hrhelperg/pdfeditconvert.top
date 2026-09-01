import { SITE_URL } from "@/lib/routes";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/locales";
import { pathForWithFallback } from "@/lib/i18n/routeMap";

const BRAND = "PDF Editor";
const APP_STORE = "https://apps.apple.com/app/id6747341672";
const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share";

const ORG = {
  "@type": "Organization",
  name: "hrhelperg s.r.o.",
  url: SITE_URL,
  logo: `${SITE_URL}/pdf-editor-mark.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Husitská 502/36",
    addressLocality: "Praha",
    postalCode: "130 00",
    addressCountry: "CZ",
  },
  email: "info@hrhelperg.com",
} as const;

export function organizationSchema() {
  return { "@context": "https://schema.org", ...ORG };
}

/**
 * WebSite node for one locale.
 *
 * `url` points at that locale's home page and `inLanguage` names the
 * language, so each edition describes itself rather than all of them
 * claiming to be the English site. The publisher, the app ids and every
 * external URL stay identical across locales — those are facts about the
 * business and the product, not text to be translated.
 */
export function websiteSchema(locale: Locale = DEFAULT_LOCALE) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: `${SITE_URL}${pathForWithFallback(locale, "") === "/" ? "" : pathForWithFallback(locale, "")}`,
    inLanguage: LOCALES[locale].htmlLang,
    publisher: ORG,
  };
}

export function softwareAppSchema(locale: Locale = DEFAULT_LOCALE) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    inLanguage: LOCALES[locale].htmlLang,
    name: BRAND,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: [APP_STORE, GOOGLE_PLAY],
    publisher: ORG,
  };
}

export function breadcrumbSchema(
  items: { label: string; path?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.path ? { item: `${SITE_URL}${it.path}` } : {}),
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  locale = DEFAULT_LOCALE,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  locale?: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: `${SITE_URL}${path}`,
    inLanguage: LOCALES[locale].htmlLang,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: ORG,
    publisher: ORG,
  };
}

/**
 * Whether a guide is procedural enough for HowTo markup.
 *
 * Locale-aware: the English test is "starts with How to", and each locale
 * supplies the equivalent opener for its own language. A regex over English
 * words would silently drop HowTo from every translated guide — or, worse,
 * keep it on translated pages that are not procedures at all.
 *
 * Every guide has a `steps` array, so HowTo used to be emitted on all 144 —
 * including "PDF vs DOCX", "Best PDF App for Students" and "Why Is My PDF
 * Blurry?", where the steps are explanation, not a procedure. Schema that
 * misdescribes the page type is worse than no schema, and HowTo rich results
 * were retired by Google in 2023, so there is nothing to lose by scoping it
 * to pages that genuinely instruct.
 */
const PROCEDURAL_OPENERS: Partial<Record<Locale, RegExp>> = {
  en: /^how to\b/i,
  "pt-BR": /^como\b/i,
  fr: /^comment\b/i,
  // Matches "Cómo …" only — the same "how to" opener EN/pt-BR/fr key off,
  // not the "¿Por qué…?"/"¿Se puede…?" openers used by es's explanatory and
  // troubleshooting guides, which aren't step-by-step procedures either.
  es: /^cómo\b/i,
  // Matches "Come …" only — not the "Perché…?"/"Cos'è…?" openers used by
  // it's explanatory and troubleshooting guides, which aren't step-by-step
  // procedures either.
  it: /^come\b/i,
  // Matches "Как …" only. Deliberately \s, not \b: JS regex \b is a
  // transition between \w ([A-Za-z0-9_]) and non-\w, and Cyrillic letters
  // are not in \w — so \b never matches on either side of an all-Cyrillic
  // word, silently failing to match anything at all. \s after the literal
  // prefix sidesteps that entirely.
  ru: /^как\s/i,
};

/**
 * Locales with no reliable "how to" title opener to test for.
 *
 * The Romance locales above all phrase a how-to guide as "Cómo/Comment/Como
 * …", so a lexical prefix works. German infinitive-phrase titles put the
 * verb at the end ("PDF-Dateien kundenfertig gestalten" — OV word order),
 * which reads naturally but leaves no stable prefix to test, and forcing an
 * artificial "Wie …" opener onto every title would be worse copy than the
 * schema is worth. These locales fall back to the English route id instead:
 * every "how-to-*" id is a genuine step-by-step procedure by construction
 * (see docs/localization/de-terminology.md), and every other id is not —
 * the same distinction the title regex draws for other locales, just keyed
 * off a signal that survives translation instead of prose.
 */
const PROCEDURAL_LOCALES_BY_ROUTE_ID = new Set<Locale>(["de"]);

export function isProceduralGuide(
  h1: string,
  locale: Locale = DEFAULT_LOCALE,
  englishSlug?: string,
): boolean {
  if (PROCEDURAL_LOCALES_BY_ROUTE_ID.has(locale)) {
    return (englishSlug ?? "").startsWith("how-to-");
  }
  const pattern = PROCEDURAL_OPENERS[locale] ?? PROCEDURAL_OPENERS.en!;
  return pattern.test(h1.trim());
}

export function howToSchema({
  name,
  description,
  steps,
  locale = DEFAULT_LOCALE,
}: {
  name: string;
  description: string;
  steps: { title: string; body: string }[];
  locale?: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    inLanguage: LOCALES[locale].htmlLang,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}

export function faqSchema(
  items: { q: string; a: string }[],
  locale: Locale = DEFAULT_LOCALE,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: LOCALES[locale].htmlLang,
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function webApplicationSchema({
  name,
  description,
  path,
  locale = DEFAULT_LOCALE,
}: {
  name: string;
  description: string;
  path: string;
  locale?: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: LOCALES[locale].htmlLang,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: ORG,
  };
}
