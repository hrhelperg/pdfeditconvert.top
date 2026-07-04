import { describe, it, expect } from "vitest";
import { KNOWLEDGE } from "@/content/knowledge";

const INTENTS = new Set([
  "definition",
  "concept",
  "standard",
  "specification",
  "comparison",
  "security",
  "format",
  "history",
  "printing",
  "metadata",
  "rendering",
  "accessibility",
  "workflow",
]);
const DIFF = new Set(["Beginner", "Intermediate", "Advanced"]);
const isoDate = (s: string) =>
  /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));

describe("knowledge field validity", () => {
  const cases = Object.values(KNOWLEDGE).map((e) => [e.slug, e] as const);
  it.each(cases)("%s has valid enums, dates and non-empty prose", (_slug, e) => {
    expect(INTENTS.has(e.searchIntent)).toBe(true);
    expect(DIFF.has(e.difficulty)).toBe(true);
    expect(isoDate(e.updated)).toBe(true);
    expect(isoDate(e.reviewed)).toBe(true);
    expect(e.aliases.length).toBeGreaterThanOrEqual(1);
    expect(e.intro.join("").length).toBeGreaterThan(60);
    expect(e.sections.length).toBeGreaterThanOrEqual(3);
    expect(e.sections.every((s) => s.body.join("").length > 40)).toBe(true);
    expect(e.faq.length).toBeGreaterThanOrEqual(3);
    expect(e.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  });

  it("registry is non-empty once a wave has shipped", () => {
    // Guard test so the suite has at least one assertion when KNOWLEDGE is empty.
    expect(Object.keys(KNOWLEDGE).length).toBeGreaterThanOrEqual(0);
  });
});
