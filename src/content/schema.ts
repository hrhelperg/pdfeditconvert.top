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
  // The legal entity and the product are different names. Without this the
  // publisher on every page reads as a Czech s.r.o. with no stated relation
  // to "PDF Editor", which is the name everything else on the site uses.
  brand: { "@type": "Brand", name: BRAND },
  url: SITE_URL,
  logo: `${SITE_URL}/pdf-editor-mark.svg`,
  // The two store listings are the site's only other first-party profiles,
  // and they are what an entity resolver needs to connect this site to the
  // app it exists to promote. They were previously stated only as
  // `downloadUrl` on the 13 home pages.
  sameAs: [APP_STORE, GOOGLE_PLAY],
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
/**
 * Procedural guides whose English slug does not start with `how-to-`.
 *
 * The slug prefix carries the distinction for 75 of the 76 procedures. This
 * one is phrased as a qualifier ("…Without Losing Too Much Quality") but is
 * a genuine step-by-step procedure, so it is named explicitly rather than
 * loosening the prefix rule for everything.
 */
const PROCEDURAL_EXCEPTIONS = new Set<string>([
  "compress-pdf-without-losing-too-much-quality",
]);

/**
 * Decided by English slug, identically for every locale.
 *
 * This used to test a per-language title opener (`^how to`, `^cómo`, `^как`
 * …), with a route-id fallback for locales whose word order leaves no
 * stable prefix. That approach failed in both directions. Any locale absent
 * from both tables silently fell through to the *English* regex, which
 * cannot match a Japanese, Indonesian, Polish, Czech or Turkish title — so
 * those five locales emitted zero HowTo across ~380 pages. And where a
 * prefix did match, it over-matched: "Cómo funcionan los formularios PDF"
 * ("how PDF forms work") is an explainer, not a procedure, yet it took
 * HowTo in es and ru while the same page took none in en, de or ar.
 *
 * The English slug is the one signal that survives translation intact — it
 * is what every localized guide already stores in `slug` — so keying off it
 * makes the answer identical across all 13 locales by construction, which
 * is the correct invariant: whether a page is a procedure is a property of
 * the page, not of the language it is written in.
 */
export function isProceduralGuide(englishSlug: string): boolean {
  return (
    englishSlug.startsWith("how-to-") || PROCEDURAL_EXCEPTIONS.has(englishSlug)
  );
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
