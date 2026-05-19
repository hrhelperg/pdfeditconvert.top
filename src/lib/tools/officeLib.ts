// Dynamically imported so the DOCX engines stay out of the main bundle and
// only load on the converter routes that need them (same pattern as
// pdfLib.ts / pdfjs.ts). Both libraries run fully client-side.
export async function loadDocx() {
  return await import("docx");
}

export async function loadMammoth() {
  // mammoth's package.json `browser` field maps its Node-only deps to
  // browser shims, which Turbopack/Next resolves for client bundles.
  return await import("mammoth");
}
