import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/ar/tools/compress-pdf";
import mergePdf from "@/content/ar/tools/merge-pdf";
import splitPdf from "@/content/ar/tools/split-pdf";
import rotatePdf from "@/content/ar/tools/rotate-pdf";
import imageToPdf from "@/content/ar/tools/image-to-pdf";
import pdfToImages from "@/content/ar/tools/pdf-to-images";
import addWatermark from "@/content/ar/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/ar/tools/pdf-to-word";
import wordToPdf from "@/content/ar/tools/word-to-pdf";
import reorderPdfPages from "@/content/ar/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/ar/tools/extract-pdf-pages";

/**
 * Arabic tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_AR: Record<string, ToolContent> = {
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
