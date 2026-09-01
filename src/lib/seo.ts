import type { Metadata } from "next";
import { SITE_URL } from "@/lib/routes";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
import { alternatesFor, xDefaultFor } from "@/lib/i18n/routeMap";

const BRAND = "PDF Editor";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Locale this page is published in. Defaults to the site's default locale. */
  locale?: Locale;
  /**
   * Canonical route id. Supplying it turns on hreflang: the page emits one
   * `<link rel="alternate">` per published locale that actually has this
   * page, plus `x-default`. Omit it and the page self-canonicalizes with no
   * alternates, which is correct for a page that exists in one language.
   */
  routeId?: RouteId;
}

/**
 * Page metadata: canonical, hreflang alternates, OpenGraph and Twitter.
 *
 * Two rules this function exists to enforce:
 *
 * 1. Every page self-canonicalizes to its own URL. A Portuguese page
 *    canonicalizing to its English source would be telling Google the
 *    Portuguese page should not be indexed — which is the single most
 *    common way a localization launch produces zero traffic. Properly
 *    localized pages are not duplicate content.
 *
 * 2. Alternates are generated from the route map, so they are reciprocal by
 *    construction. Both sides of a pair read the same list; page A cannot
 *    point at page B without B pointing back, and a locale that does not
 *    have the page cannot appear at all.
 */
export function seo({
  title,
  description,
  path,
  // Use the framework-generated OG image route (app/opengraph-image.tsx,
  // served at /opengraph-image, 200 image/png). The previous default
  // "/og/default.png" had no backing asset and 404'd sitewide.
  ogImage = "/opengraph-image",
  type = "website",
  publishedTime,
  modifiedTime,
  locale = DEFAULT_LOCALE,
  routeId,
}: SeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullOg = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  // The home route id is the empty string, so test for presence rather than
  // truthiness — `routeId ? …` silently dropped hreflang from both homepages.
  const languages =
    routeId === undefined ? undefined : buildLanguageAlternates(routeId);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND,
      type,
      locale: LOCALES[locale].htmlLang,
      images: [{ url: fullOg, width: 1200, height: 630, alt: BRAND }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullOg],
    },
    robots: { index: true, follow: true },
  };
}

/**
 * `alternates.languages` for a canonical page.
 *
 * Returns `undefined` when the page exists in only one published locale:
 * a lone self-referential hreflang is noise, and an `x-default` with no
 * alternatives to default between says nothing.
 */
function buildLanguageAlternates(
  routeId: RouteId,
): Record<string, string> | undefined {
  const alternates = alternatesFor(routeId);
  if (alternates.length < 2) return undefined;

  const languages: Record<string, string> = {};
  for (const alternate of alternates) {
    languages[alternate.hreflang] = alternate.url;
  }
  const xDefault = xDefaultFor(routeId);
  if (xDefault) languages["x-default"] = xDefault;
  return languages;
}

/**
 * Root metadata for one locale's root layout.
 *
 * Each locale has its own root layout (see the (en) and (pt-br) route
 * groups) so `<html lang>` and `dir` are correct in the served HTML rather
 * than patched in after hydration. This supplies that layout's title
 * template and fallback description.
 */
export function rootMetadata(locale: Locale = DEFAULT_LOCALE): Metadata {
  const copy: RootCopy = ROOT_COPY[locale] ?? ROOT_COPY.en;
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: copy.defaultTitle,
      template: copy.template,
    },
    description: copy.description,
  };
}

interface RootCopy {
  defaultTitle: string;
  template: string;
  description: string;
}

const ROOT_COPY: Record<string, RootCopy> & { en: RootCopy } = {
  en: {
    defaultTitle: "PDF Editor — Edit, Convert, Sign and Scan PDFs",
    template: "%s | PDF Editor",
    description:
      "All-in-one PDF solution for work, study and life. Edit, convert, compress, merge, sign and scan PDFs from your phone.",
  },
  "pt-BR": {
    defaultTitle: "PDF Editor — edite, converta, assine e digitalize PDFs",
    template: "%s | PDF Editor",
    description:
      "A solução completa de PDF para o trabalho, os estudos e o dia a dia. Edite, converta, comprima, junte, assine e digitalize PDFs pelo celular.",
  },
  fr: {
    defaultTitle: "PDF Editor — modifier, convertir, signer et numériser vos PDF",
    template: "%s | PDF Editor",
    description:
      "La solution PDF complète pour le travail, les études et le quotidien. Modifiez, convertissez, compressez, fusionnez, signez et numérisez vos PDF depuis votre téléphone.",
  },
  es: {
    defaultTitle: "PDF Editor — edita, convierte, firma y escanea tus PDF",
    template: "%s | PDF Editor",
    description:
      "La solución PDF completa para el trabajo, los estudios y el día a día. Edita, convierte, comprime, une, firma y escanea tus PDF desde el móvil.",
  },
  de: {
    defaultTitle: "PDF Editor — PDFs bearbeiten, konvertieren, unterschreiben und scannen",
    template: "%s | PDF Editor",
    description:
      "Die komplette PDF-Lösung für Arbeit, Studium und Alltag. Bearbeite, konvertiere, komprimiere, führe zusammen, unterschreibe und scanne deine PDFs vom Handy aus.",
  },
  it: {
    defaultTitle: "PDF Editor — modifica, converti, firma e scansiona i tuoi PDF",
    template: "%s | PDF Editor",
    description:
      "La soluzione PDF completa per lavoro, studio e vita quotidiana. Modifica, converti, comprimi, unisci, firma e scansiona i tuoi PDF dal telefono.",
  },
  cs: {
    defaultTitle: "PDF Editor — uprav, převeď, podepiš a naskenuj PDF",
    template: "%s | PDF Editor",
    description:
      "Komplexní řešení PDF pro práci, studium i běžný den. Uprav, převeď, komprimuj, sluč, podepiš a naskenuj PDF přímo v telefonu.",
  },
  ar: {
    defaultTitle: "PDF Editor — تحرير وتحويل وتوقيع ومسح PDF من الهاتف",
    template: "%s | PDF Editor",
    description:
      "الحل الشامل لملفات PDF للعمل والدراسة والحياة اليومية. حرّر وحوّل واضغط وادمج ووقّع وامسح ملفات PDF من هاتفك مع تطبيق PDF Editor لنظامَي iOS وAndroid.",
  },
  ru: {
    defaultTitle: "PDF Editor — редактирование, конвертация, подпись и сканирование PDF на телефоне",
    template: "%s | PDF Editor",
    description:
      "Универсальное решение для работы с PDF: работа, учёба, повседневные задачи. Редактируйте, конвертируйте, сжимайте, объединяйте, подписывайте и сканируйте PDF прямо с телефона с приложением PDF Editor для iOS и Android.",
  },
  ja: {
    defaultTitle: "PDF Editor — PDFの編集・変換・署名・スキャン",
    template: "%s | PDF Editor",
    description:
      "仕事、学業、日常生活のためのオールインワンPDFソリューション。スマホからPDFの編集・変換・圧縮・結合・署名・スキャンができます。",
  },
  pl: {
    defaultTitle: "PDF Editor — edytuj, konwertuj, podpisuj i skanuj pliki PDF",
    template: "%s | PDF Editor",
    description:
      "Kompleksowe rozwiązanie PDF do pracy, nauki i życia codziennego. Edytuj, konwertuj, kompresuj, scalaj, podpisuj i skanuj pliki PDF prosto z telefonu.",
  },
  id: {
    defaultTitle: "PDF Editor — Edit, Konversi, Tanda Tangani, dan Pindai PDF",
    template: "%s | PDF Editor",
    description:
      "Solusi PDF all-in-one untuk kerja, belajar, dan kehidupan sehari-hari. Edit, konversi, kompres, gabungkan, tanda tangani, dan pindai PDF dari ponsel Anda.",
  },
  tr: {
    defaultTitle: "PDF Editor — PDF Düzenle, Dönüştür, İmzala ve Tara",
    template: "%s | PDF Editor",
    description:
      "İş, okul ve günlük hayat için hepsi bir arada PDF çözümü. Telefonundan PDF'leri düzenle, dönüştür, sıkıştır, birleştir, imzala ve tara.",
  },
};
