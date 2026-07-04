import { describe, it, expect } from "vitest";
import { KNOWLEDGE } from "@/content/knowledge";
import { ROUTES } from "@/lib/routes";

describe("knowledge ↔ ROUTES parity", () => {
  const refRoutes = ROUTES.filter((r) => r.category === "reference");

  it("every knowledge entry has a matching reference route", () => {
    for (const slug of Object.keys(KNOWLEDGE)) {
      const path = `/pdf-encyclopedia/${slug}`;
      expect(
        refRoutes.some((r) => r.path === path),
        `missing route: ${path}`,
      ).toBe(true);
    }
  });

  it("every reference route has a matching knowledge entry", () => {
    for (const r of refRoutes) {
      const slug = r.path.replace("/pdf-encyclopedia/", "");
      expect(KNOWLEDGE[slug], `missing entry: ${r.path}`).toBeDefined();
    }
  });

  it("each reference route description equals its entry description", () => {
    for (const r of refRoutes) {
      const slug = r.path.replace("/pdf-encyclopedia/", "");
      expect(KNOWLEDGE[slug].description).toBe(r.description);
    }
  });
});
