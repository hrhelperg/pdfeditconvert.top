import { ToolFailure } from "@/lib/tools/toolError";

export const MAX_SINGLE_FILE_MB = 100;
export const MAX_FILES = 30;

const PDF_TYPES = new Set(["application/pdf"]);
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function assertSize(file: File) {
  const mb = file.size / (1024 * 1024);
  if (mb > MAX_SINGLE_FILE_MB) {
    throw new ToolFailure(
      "too_large",
      { name: file.name, size: mb.toFixed(1), limit: MAX_SINGLE_FILE_MB },
      `"${file.name}" is too large (${mb.toFixed(1)} MB). Limit is ${MAX_SINGLE_FILE_MB} MB per file because everything is processed in your browser.`,
    );
  }
}

export function assertPdf(file: File) {
  if (!PDF_TYPES.has(file.type) && !/\.pdf$/i.test(file.name)) {
    throw new ToolFailure("not_pdf", { name: file.name }, `"${file.name}" is not a PDF.`);
  }
  assertSize(file);
}

export function assertImage(file: File) {
  if (!IMAGE_TYPES.has(file.type) && !/\.(jpe?g|png|webp)$/i.test(file.name)) {
    throw new ToolFailure(
      "not_image",
      { name: file.name },
      `"${file.name}" is not a supported image. Use JPG, PNG or WebP.`,
    );
  }
  assertSize(file);
}

const WORD_TYPES = new Set([
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
]);

/** Accepts .docx (and plain .txt as a simple fallback). Legacy binary .doc
 *  is not supported by the in-browser parser. */
export function assertWordDoc(file: File) {
  const okExt = /\.(docx|txt)$/i.test(file.name);
  if (!WORD_TYPES.has(file.type) && !okExt) {
    if (/\.doc$/i.test(file.name)) {
      throw new ToolFailure(
        "legacy_doc",
        { name: file.name },
        `Legacy ".doc" files can't be read in the browser. Save it as ".docx" first.`,
      );
    }
    throw new ToolFailure(
      "not_word",
      { name: file.name },
      `"${file.name}" is not a Word (.docx) or .txt file.`,
    );
  }
  assertSize(file);
}

export function isPlainText(file: File): boolean {
  return file.type === "text/plain" || /\.txt$/i.test(file.name);
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
