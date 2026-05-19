// DOCX engines, dynamically imported so they stay out of the main bundle
// and only load on the converter routes that need them (same pattern as
// pdfLib.ts / pdfjs.ts). Both run fully client-side.
//
// These loaders are deliberately defensive. `await import("pkg")` can resolve
// to different shapes depending on bundler/interop and CDN state:
//   - a live module namespace:           { Document, Packer, ... }
//   - an interop-wrapped default:        { default: { Document, Packer, ... } }
//   - a failed/again chunk (deploy skew): import() rejects entirely
// Without normalization the third/second cases surface in the UI as the
// useless "undefined is not a function" (e.g. `Packer.toBlob` on undefined).
// We normalize the shape and fail loudly with a human, retryable message.

import type * as DocxNS from "docx";
import type * as MammothNS from "mammoth";

export type DocxApi = Pick<
  typeof DocxNS,
  "Document" | "Packer" | "Paragraph" | "TextRun"
>;
export type MammothApi = Pick<typeof MammothNS, "extractRawText">;

type Wrapped<T> = T & { default?: T };

/** Pick the object that actually carries `key`, unwrapping a `default`
 *  interop wrapper if needed. Exported for regression testing of the
 *  namespace-vs-default import-shape handling. */
export function resolveModule<T>(mod: Wrapped<T>, key: keyof T): T | undefined {
  const flat = mod as T;
  if (flat && typeof (flat as Record<string, unknown>)[key as string] !== "undefined") {
    return flat;
  }
  const inner = mod.default;
  if (inner && typeof (inner as Record<string, unknown>)[key as string] !== "undefined") {
    return inner;
  }
  return undefined;
}

export async function loadDocx(): Promise<DocxApi> {
  let mod: Wrapped<typeof DocxNS>;
  try {
    mod = (await import("docx")) as Wrapped<typeof DocxNS>;
  } catch {
    throw new Error(
      "Couldn't load the Word engine. Check your connection and try again.",
    );
  }
  const api = resolveModule<typeof DocxNS>(mod, "Document");
  if (
    !api ||
    typeof api.Document !== "function" ||
    typeof api.Paragraph !== "function" ||
    typeof api.TextRun !== "function" ||
    !api.Packer ||
    typeof api.Packer.toBlob !== "function"
  ) {
    throw new Error(
      "The Word engine didn't initialize correctly in this browser. Please reload the page and try again.",
    );
  }
  return {
    Document: api.Document,
    Packer: api.Packer,
    Paragraph: api.Paragraph,
    TextRun: api.TextRun,
  };
}

export async function loadMammoth(): Promise<MammothApi> {
  let mod: Wrapped<typeof MammothNS>;
  try {
    mod = (await import("mammoth")) as Wrapped<typeof MammothNS>;
  } catch {
    throw new Error(
      "Couldn't load the document reader. Check your connection and try again.",
    );
  }
  const api = resolveModule<typeof MammothNS>(mod, "extractRawText");
  if (!api || typeof api.extractRawText !== "function") {
    throw new Error(
      "The document reader didn't initialize correctly in this browser. Please reload the page and try again.",
    );
  }
  return { extractRawText: api.extractRawText };
}
