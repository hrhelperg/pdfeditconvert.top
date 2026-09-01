import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seo } from "@/lib/seo";
import { sectionEntries, sectionEntry } from "@/lib/i18n/routeMap";
import { getGuideContent } from "@/content/registry";
import { GuidePage } from "@/components/sections/GuidePage";

const LOCALE = "ja" as const;
const SECTION = "guides" as const;

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
  const content = getGuideContent(LOCALE, entry.englishSlug);
  return seo({
    title: entry.route.title,
    description: entry.route.description,
    path: entry.route.path,
    locale: LOCALE,
    routeId: entry.routeId,
    type: "article",
    publishedTime: content?.updated,
    modifiedTime: content?.updated,
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
  const content = getGuideContent(LOCALE, entry.englishSlug);
  if (!content) notFound();
  return <GuidePage content={content} locale={LOCALE} />;
}
