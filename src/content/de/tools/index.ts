import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/de/tools/compress-pdf";
import mergePdf from "@/content/de/tools/merge-pdf";
import splitPdf from "@/content/de/tools/split-pdf";
import rotatePdf from "@/content/de/tools/rotate-pdf";
import imageToPdf from "@/content/de/tools/image-to-pdf";
import pdfToImages from "@/content/de/tools/pdf-to-images";
import addWatermark from "@/content/de/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/de/tools/pdf-to-word";
import wordToPdf from "@/content/de/tools/word-to-pdf";
import reorderPdfPages from "@/content/de/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/de/tools/extract-pdf-pages";

/**
 * German tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_DE: Record<string, ToolContent> = {
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
