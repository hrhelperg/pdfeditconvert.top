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
};

export function isProceduralGuide(
  h1: string,
  locale: Locale = DEFAULT_LOCALE,
): boolean {
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
