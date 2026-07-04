import type { KnowledgeContent } from "@/types/content";

let n = 0;
/** Build a valid KnowledgeContent for tests. Override any field. */
export function makeKnowledgeFixture(
  overrides: Partial<KnowledgeContent> = {},
): KnowledgeContent {
  n += 1;
  const slug = overrides.slug ?? `fixture-${n}`;
  return {
    slug,
    h1: `Fixture ${n}`,
    cluster: "foundations",
    aliases: [`alias-${n}`],
    definition: `Definition ${n}.`,
    description: `Description ${n} that is unique enough for tests.`,
    searchIntent: "definition",
    difficulty: "Beginner",
    updated: "2026-07-04",
    reviewed: "2026-07-04",
    intro: [`Intro paragraph ${n} with enough length to satisfy validators.`],
    sections: [
      { heading: `Section A ${n}`, body: [`Body A ${n} with real length here.`] },
      { heading: `Section B ${n}`, body: [`Body B ${n} with real length here.`] },
      { heading: `Section C ${n}`, body: [`Body C ${n} with real length here.`] },
    ],
    faq: [
      { q: `Q1 ${n}?`, a: `A1 ${n}.` },
      { q: `Q2 ${n}?`, a: `A2 ${n}.` },
      { q: `Q3 ${n}?`, a: `A3 ${n}.` },
    ],
    graph: {},
    seeAlso: [],
    parentHub: { label: "PDF Encyclopedia", path: "/pdf-encyclopedia" },
    ...overrides,
  };
}
