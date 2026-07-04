import { describe, it, expect } from "vitest";
import { CLUSTERS, CLUSTER_ORDER } from "@/content/knowledge/_clusters";
import {
  knowledgePath,
  knowledgeRef,
  resolveRefs,
  allKnowledgeSlugs,
  KNOWLEDGE,
} from "@/content/knowledge";

describe("knowledge clusters", () => {
  it("defines exactly 10 clusters with unique ascending order", () => {
    expect(CLUSTER_ORDER).toHaveLength(10);
    const orders = CLUSTER_ORDER.map((k) => CLUSTERS[k].order);
    expect(new Set(orders).size).toBe(10);
    expect([...orders].sort((a, b) => a - b)).toEqual(orders);
  });
  it("every cluster has a title and blurb", () => {
    for (const key of CLUSTER_ORDER) {
      expect(CLUSTERS[key].title.length).toBeGreaterThan(0);
      expect(CLUSTERS[key].blurb.length).toBeGreaterThan(0);
    }
  });
});

describe("knowledge registry helpers", () => {
  it("knowledgePath builds the encyclopedia path", () => {
    expect(knowledgePath("pdf-a")).toBe("/pdf-encyclopedia/pdf-a");
  });
  it("knowledgeRef throws on an unknown slug", () => {
    expect(() => knowledgeRef("does-not-exist-xyz")).toThrow(
      /Unknown knowledge slug/,
    );
  });
  it("resolveRefs maps known slugs and is empty for undefined", () => {
    expect(resolveRefs(undefined)).toEqual([]);
    for (const slug of allKnowledgeSlugs()) {
      expect(resolveRefs([slug])[0]).toEqual({
        label: KNOWLEDGE[slug].h1,
        path: knowledgePath(slug),
      });
    }
  });
});
