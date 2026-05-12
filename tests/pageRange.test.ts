import { describe, expect, it } from "vitest";
import { parsePageRange } from "@/lib/tools/pageRange";

describe("parsePageRange", () => {
  it("parses single page", () => {
    expect(parsePageRange("3", 10)).toEqual([3]);
  });
  it("parses comma list", () => {
    expect(parsePageRange("1,3,5", 10)).toEqual([1, 3, 5]);
  });
  it("parses ranges", () => {
    expect(parsePageRange("2-5", 10)).toEqual([2, 3, 4, 5]);
  });
  it("merges ranges and singles, dedupes, sorts", () => {
    expect(parsePageRange("5,1-3,2", 10)).toEqual([1, 2, 3, 5]);
  });
  it("clamps to totalPages and ignores zero / negative", () => {
    expect(parsePageRange("0-3,9-15", 10)).toEqual([1, 2, 3, 9, 10]);
  });
  it("throws on completely invalid input", () => {
    expect(() => parsePageRange("abc", 10)).toThrow();
  });
  it("throws on empty input", () => {
    expect(() => parsePageRange("", 10)).toThrow();
  });
});
