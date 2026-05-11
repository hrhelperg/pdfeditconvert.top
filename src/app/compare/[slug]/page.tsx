import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPARE } from "@/content/compare";
import { ComparePage } from "@/components/sections/ComparePage";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";

export async function generateStaticParams() {
  return Object.keys(COMPARE).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = COMPARE[slug];
  if (!c) return {};
  const path = `/compare/${slug}`;
  try {
    const r = getRoute(path);
    return seo({ title: r.title, description: r.description, path });
  } catch {
    return seo({ title: c.h1, description: c.description, path });
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = COMPARE[slug];
  if (!c) notFound();
  return <ComparePage content={c} />;
}
