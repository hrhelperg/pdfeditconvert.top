import { describe, it, expect } from "vitest";
import { PDFDocument } from "pdf-lib";
import { moveInOrder, buildReorderedPdf, buildPdfFromPages } from "@/lib/tools/pdfPages";

// Distinct page widths so we can verify ORDER, not just page count.
async function makePdf(n: number): Promise<Uint8Array> {
  const d = await PDFDocument.create();
  for (let i = 0; i < n; i++) d.addPage([200 + i * 10, 400]);
  return d.save();
}
async function widths(bytes: Uint8Array): Promise<number[]> {
  const d = await PDFDocument.load(bytes);
  return d.getPages().map((p) => Math.round(p.getSize().width));
}

describe("moveInOrder", () => {
  it("moves an item later (+1) and earlier (-1)", () => {
    expect(moveInOrder([0, 1, 2, 3], 1, 1)).toEqual([0, 2, 1, 3]);
    expect(moveInOrder([0, 1, 2, 3], 2, -1)).toEqual([0, 2, 1, 3]);
  });
  it("is a no-op at the boundaries (still returns a new array)", () => {
    const a = [0, 1, 2];
    expect(moveInOrder(a, 0, -1)).toEqual([0, 1, 2]);
    expect(moveInOrder(a, 2, 1)).toEqual([0, 1, 2]);
    expect(moveInOrder(a, 0, -1)).not.toBe(a);
  });
});

describe("buildReorderedPdf", () => {
  it("reverses page order", async () => {
    const src = await makePdf(5); // widths 200,210,220,230,240
    const out = await buildReorderedPdf(src, [4, 3, 2, 1, 0]);
    expect(await widths(out)).toEqual([240, 230, 220, 210, 200]);
  });
  it("drops out-of-range / invalid indices", async () => {
    const src = await makePdf(3);
    const out = await buildReorderedPdf(src, [2, 99, -1, 0]);
    expect(await widths(out)).toEqual([220, 200]);
  });
  it("throws when nothing valid remains", async () => {
    const src = await makePdf(2);
    await expect(buildReorderedPdf(src, [5, 6])).rejects.toThrow(/no valid pages/i);
  });
});

describe("buildPdfFromPages (1-based extract)", () => {
  it("extracts a subset in the given order", async () => {
    const src = await makePdf(6); // widths 200..250
    const out = await buildPdfFromPages(src, [1, 3, 5]);
    expect(await widths(out)).toEqual([200, 220, 240]);
  });
  it("allows duplicates (repeated pages)", async () => {
    const src = await makePdf(3);
    const out = await buildPdfFromPages(src, [2, 2, 1]);
    expect(await widths(out)).toEqual([210, 210, 200]);
  });
});
