import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import { ROUTES } from "@/lib/routes";

describe("sitemap", () => {
  it("includes every non-hidden route", () => {
    const entries = sitemap();
    const expected = ROUTES.filter((r) => !r.hidden).length;
    expect(entries).toHaveLength(expected);
  });

  it("every URL is absolute on pdfeditconvert.top", () => {
    const entries = sitemap();
    for (const e of entries) {
      expect(e.url).toMatch(/^https:\/\/pdfeditconvert\.top/);
    }
  });

  it("priority is between 0 and 1", () => {
    for (const e of sitemap()) {
      expect(e.priority).toBeGreaterThanOrEqual(0);
      expect(e.priority).toBeLessThanOrEqual(1);
    }
  });
});
