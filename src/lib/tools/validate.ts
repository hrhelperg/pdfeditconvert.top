export const MAX_SINGLE_FILE_MB = 100;
export const MAX_FILES = 30;

const PDF_TYPES = new Set(["application/pdf"]);
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function assertSize(file: File) {
  const mb = file.size / (1024 * 1024);
  if (mb > MAX_SINGLE_FILE_MB) {
    throw new Error(
      `"${file.name}" is too large (${mb.toFixed(1)} MB). Limit is ${MAX_SINGLE_FILE_MB} MB per file because everything is processed in your browser.`,
    );
  }
}

export function assertPdf(file: File) {
  if (!PDF_TYPES.has(file.type) && !/\.pdf$/i.test(file.name)) {
    throw new Error(`"${file.name}" is not a PDF.`);
  }
  assertSize(file);
}

export function assertImage(file: File) {
  if (!IMAGE_TYPES.has(file.type)) {
    throw new Error(`"${file.name}" is not a supported image. Use JPG, PNG or WebP.`);
  }
  assertSize(file);
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
