import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/id/tools/compress-pdf";
import mergePdf from "@/content/id/tools/merge-pdf";
import splitPdf from "@/content/id/tools/split-pdf";
import rotatePdf from "@/content/id/tools/rotate-pdf";
import imageToPdf from "@/content/id/tools/image-to-pdf";
import pdfToImages from "@/content/id/tools/pdf-to-images";
import addWatermark from "@/content/id/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/id/tools/pdf-to-word";
import wordToPdf from "@/content/id/tools/word-to-pdf";
import reorderPdfPages from "@/content/id/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/id/tools/extract-pdf-pages";

/**
 * Indonesian tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_ID: Record<string, ToolContent> = {
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
