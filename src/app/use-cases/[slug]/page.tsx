import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { USE_CASES } from "@/content/use-cases";
import { UseCasePage } from "@/components/sections/UseCasePage";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";

export async function generateStaticParams() {
  return Object.keys(USE_CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = USE_CASES[slug];
  if (!c) return {};
  const path = `/use-cases/${slug}`;
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
  const c = USE_CASES[slug];
  if (!c) notFound();
  return <UseCasePage content={c} />;
}
