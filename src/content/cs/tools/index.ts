import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/cs/tools/compress-pdf";
import mergePdf from "@/content/cs/tools/merge-pdf";
import splitPdf from "@/content/cs/tools/split-pdf";
import rotatePdf from "@/content/cs/tools/rotate-pdf";
import imageToPdf from "@/content/cs/tools/image-to-pdf";
import pdfToImages from "@/content/cs/tools/pdf-to-images";
import addWatermark from "@/content/cs/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/cs/tools/pdf-to-word";
import wordToPdf from "@/content/cs/tools/word-to-pdf";
import reorderPdfPages from "@/content/cs/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/cs/tools/extract-pdf-pages";

/**
 * Czech tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_CS: Record<string, ToolContent> = {
  "compress-pdf": compressPdf,
  "merge-pdf": mergePdf,
  "split-pdf": splitPdf,
  "rotate-pdf": rotatePdf,
  "image-to-pdf": imageToPdf,
  "pdf-to-images": pdfToImages,
  "add-watermark-to-pdf": addWatermark,
  "pdf-to-word": pdfToWord,
  "word-to-pdf": wordToPdf,
  "reorder-pdf-pages": reorderPdfPages,
  "extract-pdf-pages": extractPdfPages,
};
