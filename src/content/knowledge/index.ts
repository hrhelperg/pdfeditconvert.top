import type {
  KnowledgeCluster,
  KnowledgeContent,
  RelatedLink,
} from "@/types/content";
import { ENTRIES } from "./entries";

export const KNOWLEDGE: Record<string, KnowledgeContent> = Object.fromEntries(
  ENTRIES.map((e) => [e.slug, e]),
);

export function knowledgePath(slug: string): string {
  return `/pdf-encyclopedia/${slug}`;
}

export function allKnowledgeSlugs(): string[] {
  return Object.keys(KNOWLEDGE);
}

export function knowledgeRef(slug: string): RelatedLink {
  const entry = KNOWLEDGE[slug];
  if (!entry) throw new Error(`Unknown knowledge slug referenced: ${slug}`);
  return { label: entry.h1, path: knowledgePath(slug) };
}

export function resolveRefs(slugs: string[] | undefined): RelatedLink[] {
  return (slugs ?? []).map(knowledgeRef);
}

export function entriesByCluster(
  cluster: KnowledgeCluster,
): KnowledgeContent[] {
  return ENTRIES.filter((e) => e.cluster === cluster).sort((a, b) =>
    a.h1.localeCompare(b.h1),
  );
}
