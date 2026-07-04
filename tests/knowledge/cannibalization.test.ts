import { describe, it, expect } from "vitest";
import { MANIFEST } from "@/content/knowledge/_manifest";
import { ROUTES } from "@/lib/routes";
import { KNOWLEDGE } from "@/content/knowledge";

const existingPaths = new Set(ROUTES.map((r) => r.path));

describe("cannibalization / dedup gate", () => {
  it("no manifest slug collides with a non-reference existing route path", () => {
    const nonRef = ROUTES.filter((r) => r.category !== "reference").map(
      (r) => r.path,
    );
    for (const m of MANIFEST) {
      expect(nonRef).not.toContain(`/${m.slug}`);
      expect(nonRef).not.toContain(`/pdf-encyclopedia/${m.slug}`);
    }
  });

  it("manifest slugs are unique", () => {
    const slugs = MANIFEST.map((m) => m.slug);
    expect(slugs.filter((s, i) => slugs.indexOf(s) !== i)).toEqual([]);
  });

  it("manifest h1 values are unique", () => {
    const h1s = MANIFEST.map((m) => m.h1);
    expect(h1s.filter((s, i) => h1s.indexOf(s) !== i)).toEqual([]);
  });

  it("every manifest parentConcept points at another manifest slug", () => {
    const slugs = new Set(MANIFEST.map((m) => m.slug));
    for (const m of MANIFEST) {
      if (m.parentConcept) {
        expect(slugs.has(m.parentConcept), `${m.slug} → ${m.parentConcept}`).toBe(
          true,
        );
      }
    }
  });

  it("no manifest slug duplicates an existing /guides/<slug> intent", () => {
    const guideTails = new Set(
      [...existingPaths]
        .filter((p) => p.startsWith("/guides/"))
        .map((p) => p.replace("/guides/", "")),
    );
    for (const m of MANIFEST) {
      expect(guideTails.has(m.slug), `dupe of guide: ${m.slug}`).toBe(false);
    }
  });

  it("every shipped knowledge entry is in the approved manifest", () => {
    const manifestSlugs = new Set(MANIFEST.map((m) => m.slug));
    for (const slug of Object.keys(KNOWLEDGE)) {
      expect(manifestSlugs.has(slug), `unlisted entry: ${slug}`).toBe(true);
    }
  });
});
