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

  it("uses default OG image when none provided", () => {
    const m = seo({ title: "x", description: "y", path: "/" });
    const images = m.openGraph?.images as { url: string }[];
    expect(images[0].url).toBe(
      "https://pdfeditconvert.top/og/default.png",
    );
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
