import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/ru/tools/compress-pdf";
import mergePdf from "@/content/ru/tools/merge-pdf";
import splitPdf from "@/content/ru/tools/split-pdf";
import rotatePdf from "@/content/ru/tools/rotate-pdf";
import imageToPdf from "@/content/ru/tools/image-to-pdf";
import pdfToImages from "@/content/ru/tools/pdf-to-images";
import addWatermark from "@/content/ru/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/ru/tools/pdf-to-word";
import wordToPdf from "@/content/ru/tools/word-to-pdf";
import reorderPdfPages from "@/content/ru/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/ru/tools/extract-pdf-pages";

/**
 * Russian tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_RU: Record<string, ToolContent> = {
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
