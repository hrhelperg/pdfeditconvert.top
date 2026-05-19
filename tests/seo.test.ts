import { describe, it, expect } from "vitest";
import { seo } from "@/lib/seo";

describe("seo()", () => {
  it("sets canonical to absolute URL on pdfeditconvert.top", () => {
    const m = seo({
      title: "Compress PDF",
      description: "Shrink PDFs without quality loss.",
      path: "/compress-pdf",
    });
    expect(m.alternates?.canonical).toBe(
      "https://pdfeditconvert.top/compress-pdf",
    );
  });

  it("defaults OG + Twitter image to the framework /opengraph-image route (never the 404 /og/default.png)", () => {
    const m = seo({ title: "x", description: "y", path: "/" });
    const ogImages = m.openGraph?.images as { url: string }[];
    const twImages = m.twitter?.images as string[];
    expect(ogImages[0].url).toBe(
      "https://pdfeditconvert.top/opengraph-image",
    );
    expect(twImages[0]).toBe("https://pdfeditconvert.top/opengraph-image");
    // Regression guard: the old default had no backing asset and 404'd.
    expect(ogImages[0].url).not.toContain("/og/default.png");
  });

  it("supports article type with publishedTime", () => {
    const m = seo({
      title: "x",
      description: "y",
      path: "/guides/x",
      type: "article",
      publishedTime: "2026-05-11T00:00:00.000Z",
    });
    const og = m.openGraph as { type?: string };
    expect(og.type).toBe("article");
  });
});
