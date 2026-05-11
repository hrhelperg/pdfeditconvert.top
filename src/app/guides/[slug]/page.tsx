import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES } from "@/content/guides";
import { GuidePage } from "@/components/sections/GuidePage";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";

export async function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES[slug];
  if (!guide) return {};
  const path = `/guides/${slug}`;
  try {
    const r = getRoute(path);
    return seo({
      title: r.title,
      description: r.description,
      path,
      type: "article",
      publishedTime: guide.updated,
      modifiedTime: guide.updated,
    });
  } catch {
    return seo({
      title: guide.h1,
      description: guide.description,
      path,
      type: "article",
      publishedTime: guide.updated,
      modifiedTime: guide.updated,
    });
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = GUIDES[slug];
  if (!guide) notFound();
  return <GuidePage content={guide} />;
}
