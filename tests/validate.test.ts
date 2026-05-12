import { describe, expect, it } from "vitest";
import { assertPdf, assertImage, MAX_SINGLE_FILE_MB, formatBytes } from "@/lib/tools/validate";

const file = (name: string, type: string, size = 1024) =>
  new File([new Uint8Array(size)], name, { type });

describe("assertPdf", () => {
  it("accepts application/pdf", () => {
    expect(() => assertPdf(file("a.pdf", "application/pdf"))).not.toThrow();
  });
  it("rejects non-pdf", () => {
    expect(() => assertPdf(file("a.png", "image/png"))).toThrow(/PDF/);
  });
  it("rejects oversized files", () => {
    const big = file("big.pdf", "application/pdf", MAX_SINGLE_FILE_MB * 1024 * 1024 + 1);
    expect(() => assertPdf(big)).toThrow(/too large/i);
  });
});

describe("assertImage", () => {
  it("accepts jpg/png/webp", () => {
    expect(() => assertImage(file("a.jpg", "image/jpeg"))).not.toThrow();
    expect(() => assertImage(file("a.png", "image/png"))).not.toThrow();
    expect(() => assertImage(file("a.webp", "image/webp"))).not.toThrow();
  });
  it("rejects gif", () => {
    expect(() => assertImage(file("a.gif", "image/gif"))).toThrow(/JPG|PNG|WebP/);
  });
});

describe("formatBytes", () => {
  it("formats KB and MB", () => {
    expect(formatBytes(1024)).toBe("1.0 KB");
    expect(formatBytes(1024 * 1024)).toBe("1.0 MB");
  });
});
