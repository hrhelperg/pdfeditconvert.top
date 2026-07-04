import { describe, it, expect } from "vitest";
import { KNOWLEDGE } from "@/content/knowledge";
import { ROUTES } from "@/lib/routes";

const entries = Object.values(KNOWLEDGE);
const slugs = new Set(Object.keys(KNOWLEDGE));
const routePaths = new Set(ROUTES.map((r) => r.path));

const knowledgeSlugFields = (e: (typeof entries)[number]) => [
  ...(e.graph.parentConcept ? [e.graph.parentConcept] : []),
  ...(e.graph.childConcepts ?? []),
  ...(e.graph.relatedConcepts ?? []),
  ...(e.graph.relatedStandards ?? []),
  ...(e.graph.relatedFormats ?? []),
  ...(e.specification?.relatedStandards ?? []),
  ...e.seeAlso,
];

describe("knowledge graph integrity", () => {
  it("every knowledge-slug edge points to a real entry", () => {
    for (const e of entries) {
      for (const target of knowledgeSlugFields(e)) {
        expect(slugs.has(target), `${e.slug} → ${target}`).toBe(true);
      }
    }
  });

  it("no entry references itself", () => {
    for (const e of entries) {
      expect(knowledgeSlugFields(e)).not.toContain(e.slug);
    }
  });

  it("every relatedTools/relatedGuides/parentHub path is a real route", () => {
    for (const e of entries) {
      for (const link of [
        ...(e.graph.relatedTools ?? []),
        ...(e.graph.relatedGuides ?? []),
        e.parentHub,
      ]) {
        expect(routePaths.has(link.path), `${e.slug} → ${link.path}`).toBe(true);
      }
    }
  });

  it("seeAlso has 5–8 curated entries", () => {
    for (const e of entries) {
      expect(e.seeAlso.length, `${e.slug} seeAlso`).toBeGreaterThanOrEqual(5);
      expect(e.seeAlso.length, `${e.slug} seeAlso`).toBeLessThanOrEqual(8);
    }
  });

  it("no entry is orphaned — each is a seeAlso/graph target of another entry", () => {
    if (entries.length < 2) return; // vacuous until the graph is populated
    const referenced = new Set<string>();
    for (const e of entries)
      for (const t of knowledgeSlugFields(e)) referenced.add(t);
    for (const e of entries) {
      expect(referenced.has(e.slug), `orphan: ${e.slug}`).toBe(true);
    }
  });
});
