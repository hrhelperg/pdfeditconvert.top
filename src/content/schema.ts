import { SITE_URL } from "@/lib/routes";

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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: SITE_URL,
    publisher: ORG,
  };
}

export function softwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
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
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: `${SITE_URL}${path}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: ORG,
    publisher: ORG,
  };
}

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { title: string; body: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function definedTermSchema({
  term,
  aliases,
  definition,
  path,
}: {
  term: string;
  aliases: string[];
  definition: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term,
    alternateName: aliases,
    description: definition,
    url: `${SITE_URL}${path}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "PDF Encyclopedia",
      url: `${SITE_URL}/pdf-encyclopedia`,
    },
  };
}

export function webApplicationSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: ORG,
  };
}
