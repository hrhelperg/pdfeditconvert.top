// Regression coverage for the /pdf-to-word & /word-to-pdf runtime failure
// class: a dynamic import resolving to an unexpected shape (interop
// `default` wrapper) or a missing API, which surfaced in production as the
// opaque "undefined is not a function" (e.g. calling `Packer.toBlob` on
// undefined). These tests pin the import-shape normalization and assert the
// real engines load with callable APIs.
import { describe, it, expect } from "vitest";
import { resolveModule, loadDocx, loadMammoth } from "@/lib/tools/officeLib";

describe("resolveModule (import-shape normalization)", () => {
  it("returns a live namespace unchanged", () => {
    const ns = { Document: () => {}, Packer: {} };
    expect(resolveModule(ns, "Document")).toBe(ns);
  });

  it("unwraps an interop `default` wrapper", () => {
    const inner = { Document: () => {}, Packer: {} };
    const wrapped = { default: inner } as typeof inner & { default: typeof inner };
    expect(resolveModule(wrapped, "Document")).toBe(inner);
  });

  it("returns undefined when the key is absent in both shapes", () => {
    expect(resolveModule({ something: 1 } as unknown as { Document: unknown }, "Document")).toBeUndefined();
  });
});

describe("loadDocx", () => {
  it("resolves docx with callable Document/Paragraph/TextRun and Packer.toBlob", async () => {
    const docx = await loadDocx();
    expect(typeof docx.Document).toBe("function");
    expect(typeof docx.Paragraph).toBe("function");
    expect(typeof docx.TextRun).toBe("function");
    expect(typeof docx.Packer.toBlob).toBe("function");
  });

  it("actually generates a non-empty .docx (PDF→DOCX output path)", async () => {
    const { Document, Packer, Paragraph, TextRun } = await loadDocx();
    const doc = new Document({
      sections: [{ children: [new Paragraph({ children: [new TextRun("Hello regression")] })] }],
    });
    // toBuffer is the Node-deterministic equivalent of the browser toBlob path.
    const buf = await Packer.toBuffer(doc);
    expect(buf.byteLength).toBeGreaterThan(0);
    // .docx is a ZIP — must start with the PK signature.
    expect(buf[0]).toBe(0x50);
    expect(buf[1]).toBe(0x4b);
  });
});

describe("loadMammoth", () => {
  it("resolves mammoth with a callable extractRawText", async () => {
    const mammoth = await loadMammoth();
    expect(typeof mammoth.extractRawText).toBe("function");
  });
});
