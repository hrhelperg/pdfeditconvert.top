import { describe, it, expect } from "vitest";
import { mapToolError } from "@/components/tools/primitives/errors";

describe("mapToolError", () => {
  it("recognises a password-protected / corrupted PDF", () => {
    const r = mapToolError(new Error('"x.pdf" looks corrupted or password-protected.'));
    expect(r.kind).toBe("unreadable");
    expect(r.message).toMatch(/could not be opened/i);
    expect(r.hint).toMatch(/corrupted or password-protected/i);
  });

  it("recognises an invalid page range message", () => {
    const r = mapToolError(new Error('"abc" is not a valid page or range.'));
    expect(r.kind).toBe("invalid_range");
    expect(r.message).toMatch(/page range/i);
    expect(r.hint).toMatch(/1-3|2,4,6/i);
  });

  it("recognises an out-of-bounds page range message", () => {
    const r = mapToolError(new Error("No pages matched. Use values between 1 and 3."));
    expect(r.kind).toBe("invalid_range");
    expect(r.message).toMatch(/page range/i);
    expect(r.hint).toMatch(/1-3|2,4,6/i);
  });

  it("recognises out-of-memory / large file errors", () => {
    const r = mapToolError(new RangeError("Maximum call stack size exceeded"));
    expect(r.kind).toBe("memory");
    expect(r.message).toMatch(/too large/i);
  });

  it("falls back to a generic message for unknown errors", () => {
    const r = mapToolError(new Error("kaboom"));
    expect(r.kind).toBe("generic");
    expect(r.message).toBe("kaboom");
  });

  it("handles non-Error throwables", () => {
    const r = mapToolError("oops");
    expect(r.kind).toBe("generic");
    expect(r.message).toMatch(/something went wrong/i);
  });
});
