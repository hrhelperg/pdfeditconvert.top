import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KNOWLEDGE } from "@/content/knowledge";
import { KnowledgePage } from "@/components/sections/KnowledgePage";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";

export async function generateStaticParams() {
  return Object.keys(KNOWLEDGE).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = KNOWLEDGE[slug];
  if (!entry) return {};
  const path = `/pdf-encyclopedia/${slug}`;
  try {
    const r = getRoute(path);
    return seo({
      title: r.title,
      description: r.description,
      path,
      type: "article",
      publishedTime: entry.updated,
      modifiedTime: entry.reviewed,
    });
  } catch {
    return seo({
      title: entry.h1,
      description: entry.description,
      path,
      type: "article",
      publishedTime: entry.updated,
      modifiedTime: entry.reviewed,
    });
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = KNOWLEDGE[slug];
  if (!entry) notFound();
  return <KnowledgePage content={entry} />;
}
