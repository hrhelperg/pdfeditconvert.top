import type { Metadata } from "next";
import { SITE_URL } from "@/lib/routes";
import {
  DEFAULT_LOCALE,
  LOCALES,
  publishedLocaleCodes,
  type Locale,
} from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
import { alternatesFor, xDefaultFor } from "@/lib/i18n/routeMap";

const BRAND = "PDF Editor";
const BRAND_SUFFIX = ` | ${BRAND}`;

/**
 * Budget for a `<title>`, in Latin-character equivalents.
 *
 * Google truncates the desktop title around 580px, which is roughly 60
 * average Latin characters at the size it renders. This is a width budget,
 * not a character count — see `titleWidth`.
 */
const TITLE_BUDGET = 60;

/**
 * Approximate rendered width of a title, in Latin-character equivalents.
 *
 * A plain `.length` misjudges two of this site's scripts in opposite
 * directions. Japanese titles are short in characters but every CJK glyph
 * is full-width, so a 56-character ja title can render wider than a
 * 100-character English one. Arabic is the reverse: it renders narrower
 * than Latin per character, so a character count over-flags it. Counting
 * CJK as two units and Arabic as roughly half keeps one budget honest
 * across all 13 locales.
 */
function titleWidth(title: string): number {
  let units = 0;
  for (const ch of title) {
    const cp = ch.codePointAt(0)!;
    const isCJK =
      (cp >= 0x3000 && cp <= 0x30ff) || // CJK punctuation, kana
      (cp >= 0x3400 && cp <= 0x4dbf) || // CJK ext A
      (cp >= 0x4e00 && cp <= 0x9fff) || // CJK unified
      (cp >= 0xac00 && cp <= 0xd7af) || // Hangul
      (cp >= 0xff00 && cp <= 0xff60); // full-width forms
    const isArabic = cp >= 0x0600 && cp <= 0x06ff;
    units += isCJK ? 2 : isArabic ? 0.5 : 1;
  }
  return units;
}

/**
 * The page title as it should actually be emitted.
 *
 * The brand suffix is appended only when it fits. It used to be applied
 * unconditionally through Next's `title.template`, which produced two
 * problems at once: 52 titles that already opened with "PDF Editor" came
 * out double-branded ("PDF Editor — … | PDF Editor"), and the suffix spent
 * 13 characters of budget on titles that were already over it, pushing 70%
 * of the site past the point where Google truncates or rewrites the
 * snippet. The domain already identifies the brand in the SERP, so on a
 * long title the suffix is the first thing worth dropping.
 */
export function brandedTitle(title: string): string {
  const trimmed = title.trim();
  if (trimmed.includes(BRAND)) return trimmed;
  return titleWidth(trimmed + BRAND_SUFFIX) <= TITLE_BUDGET
    ? trimmed + BRAND_SUFFIX
    : trimmed;
}

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
    // Absolute, so the root layout's `title.template` cannot re-append a
    // brand suffix that `brandedTitle` deliberately withheld.
    title: { absolute: brandedTitle(title) },
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
      // og:locale is `language_TERRITORY`, not BCP-47 — see LocaleConfig.
      locale: LOCALES[locale].ogLocale,
      // Only claim sibling editions on pages that actually have them, which
      // is the same condition that turns on hreflang.
      ...(languages
        ? {
            alternateLocale: publishedLocaleCodes()
              .filter((l) => l !== locale)
              .map((l) => LOCALES[l].ogLocale),
          }
        : {}),
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
