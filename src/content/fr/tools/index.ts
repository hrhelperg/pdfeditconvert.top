import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/fr/tools/compress-pdf";
import mergePdf from "@/content/fr/tools/merge-pdf";
import splitPdf from "@/content/fr/tools/split-pdf";
import rotatePdf from "@/content/fr/tools/rotate-pdf";
import imageToPdf from "@/content/fr/tools/image-to-pdf";
import pdfToImages from "@/content/fr/tools/pdf-to-images";
import addWatermark from "@/content/fr/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/fr/tools/pdf-to-word";
import wordToPdf from "@/content/fr/tools/word-to-pdf";
import reorderPdfPages from "@/content/fr/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/fr/tools/extract-pdf-pages";

/**
 * French tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_FR: Record<string, ToolContent> = {
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
