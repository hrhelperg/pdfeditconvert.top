import { describe, it, expect } from "vitest";
import { KNOWLEDGE } from "@/content/knowledge";
import { ROUTES } from "@/lib/routes";

const entries = Object.values(KNOWLEDGE);

describe("knowledge metadata uniqueness", () => {
  it("every entry has a unique slug, h1 and description", () => {
    const dup = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i);
    expect(dup(entries.map((e) => e.slug))).toEqual([]);
    expect(dup(entries.map((e) => e.h1))).toEqual([]);
    expect(dup(entries.map((e) => e.description))).toEqual([]);
  });

  it("no entry h1 or description collides with a foreign existing route", () => {
    for (const e of entries) {
      const own = `/pdf-encyclopedia/${e.slug}`;
      const foreignTitles = new Set(
        ROUTES.filter((r) => r.path !== own).map((r) => r.title),
      );
      const foreignDescs = new Set(
        ROUTES.filter((r) => r.path !== own).map((r) => r.description),
      );
      expect(foreignTitles.has(e.h1)).toBe(false);
      expect(foreignDescs.has(e.description)).toBe(false);
    }
  });
});
