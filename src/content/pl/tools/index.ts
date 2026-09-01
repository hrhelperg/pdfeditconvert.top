import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/pl/tools/compress-pdf";
import mergePdf from "@/content/pl/tools/merge-pdf";
import splitPdf from "@/content/pl/tools/split-pdf";
import rotatePdf from "@/content/pl/tools/rotate-pdf";
import imageToPdf from "@/content/pl/tools/image-to-pdf";
import pdfToImages from "@/content/pl/tools/pdf-to-images";
import addWatermark from "@/content/pl/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/pl/tools/pdf-to-word";
import wordToPdf from "@/content/pl/tools/word-to-pdf";
import reorderPdfPages from "@/content/pl/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/pl/tools/extract-pdf-pages";

/**
 * Polish tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_PL: Record<string, ToolContent> = {
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
