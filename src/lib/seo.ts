import type { Metadata } from "next";
import { SITE_URL } from "@/lib/routes";

const BRAND = "PDF Editor";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function seo({
  title,
  description,
  path,
  ogImage = "/og/default.png",
  type = "website",
  publishedTime,
  modifiedTime,
}: SeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullOg = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND,
      type,
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

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "PDF Editor — Edit, Convert, Sign and Scan PDFs",
      template: "%s | PDF Editor",
    },
    description:
      "All-in-one PDF solution for work, study and life. Edit, convert, compress, merge, sign and scan PDFs from your phone.",
  };
}
