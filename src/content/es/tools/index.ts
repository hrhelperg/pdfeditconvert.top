import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/es/tools/compress-pdf";
import mergePdf from "@/content/es/tools/merge-pdf";
import splitPdf from "@/content/es/tools/split-pdf";
import rotatePdf from "@/content/es/tools/rotate-pdf";
import imageToPdf from "@/content/es/tools/image-to-pdf";
import pdfToImages from "@/content/es/tools/pdf-to-images";
import addWatermark from "@/content/es/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/es/tools/pdf-to-word";
import wordToPdf from "@/content/es/tools/word-to-pdf";
import reorderPdfPages from "@/content/es/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/es/tools/extract-pdf-pages";

/**
 * Spanish tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_ES: Record<string, ToolContent> = {
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
