import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/tr/tools/compress-pdf";
import mergePdf from "@/content/tr/tools/merge-pdf";
import splitPdf from "@/content/tr/tools/split-pdf";
import rotatePdf from "@/content/tr/tools/rotate-pdf";
import imageToPdf from "@/content/tr/tools/image-to-pdf";
import pdfToImages from "@/content/tr/tools/pdf-to-images";
import addWatermark from "@/content/tr/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/tr/tools/pdf-to-word";
import wordToPdf from "@/content/tr/tools/word-to-pdf";
import reorderPdfPages from "@/content/tr/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/tr/tools/extract-pdf-pages";

/**
 * Turkish tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_TR: Record<string, ToolContent> = {
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
