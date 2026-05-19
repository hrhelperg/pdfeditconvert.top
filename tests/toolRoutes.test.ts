import { describe, expect, it } from "vitest";
import { ROUTES, routesByCategory } from "@/lib/routes";

describe("tool routes", () => {
  it("includes every interactive tool plus the index", () => {
    const tools = routesByCategory("tool").map((r) => r.path).sort();
    expect(tools).toEqual(
      [
        "/add-watermark-to-pdf",
        "/compress-pdf",
        "/image-to-pdf",
        "/merge-pdf",
        "/pdf-to-images",
        "/pdf-to-word",
        "/pdf-tools",
        "/rotate-pdf",
        "/split-pdf",
        "/word-to-pdf",
      ].sort(),
    );
  });

  it("every tool route exposes a non-empty title and description", () => {
    for (const r of routesByCategory("tool")) {
      expect(r.title.length).toBeGreaterThan(10);
      expect(r.description.length).toBeGreaterThan(40);
    }
  });

  it("all tool routes are in the global ROUTES list (so sitemap picks them up)", () => {
    const tools = routesByCategory("tool").map((r) => r.path);
    for (const p of tools) expect(ROUTES.some((r) => r.path === p)).toBe(true);
  });
});
