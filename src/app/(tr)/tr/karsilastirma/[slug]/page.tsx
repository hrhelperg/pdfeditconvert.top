import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seo } from "@/lib/seo";
import { sectionEntries, sectionEntry } from "@/lib/i18n/routeMap";
import { getCompareContent } from "@/content/registry";
import { ComparePage } from "@/components/sections/ComparePage";

const LOCALE = "tr" as const;
const SECTION = "compare" as const;

/**
 * The URL carries this locale's slug; the content registry is keyed by the
 * English one. `sectionEntry` is the only place that translation happens,
 * so neither the URL nor the content file has to know about the other.
 */
export function generateStaticParams() {
  return sectionEntries(LOCALE, SECTION).map((e) => ({ slug: e.param }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = sectionEntry(LOCALE, SECTION, slug);
  if (!entry) return {};
  return seo({
    title: entry.route.title,
    description: entry.route.description,
    path: entry.route.path,
    locale: LOCALE,
    routeId: entry.routeId,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = sectionEntry(LOCALE, SECTION, slug);
  if (!entry) notFound();
  const content = getCompareContent(LOCALE, entry.englishSlug);
  if (!content) notFound();
  return <ComparePage content={content} locale={LOCALE} />;
}
