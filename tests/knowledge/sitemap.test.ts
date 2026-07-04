import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import { KNOWLEDGE } from "@/content/knowledge";

describe("sitemap includes knowledge routes", () => {
  const urls = sitemap().map((e) => e.url);

  it("has no duplicate URLs", () => {
    expect(urls.filter((u, i) => urls.indexOf(u) !== i)).toEqual([]);
  });

  it("contains the hub and every knowledge entry, all apex", () => {
    expect(urls).toContain("https://pdfeditconvert.top/pdf-encyclopedia");
    for (const slug of Object.keys(KNOWLEDGE)) {
      const u = `https://pdfeditconvert.top/pdf-encyclopedia/${slug}`;
      expect(urls).toContain(u);
      expect(u.startsWith("https://pdfeditconvert.top/")).toBe(true);
      expect(u).not.toContain("www.");
    }
  });
});
