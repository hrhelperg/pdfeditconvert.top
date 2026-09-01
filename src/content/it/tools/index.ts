import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/it/tools/compress-pdf";
import mergePdf from "@/content/it/tools/merge-pdf";
import splitPdf from "@/content/it/tools/split-pdf";
import rotatePdf from "@/content/it/tools/rotate-pdf";
import imageToPdf from "@/content/it/tools/image-to-pdf";
import pdfToImages from "@/content/it/tools/pdf-to-images";
import addWatermark from "@/content/it/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/it/tools/pdf-to-word";
import wordToPdf from "@/content/it/tools/word-to-pdf";
import reorderPdfPages from "@/content/it/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/it/tools/extract-pdf-pages";

/**
 * Italian tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_IT: Record<string, ToolContent> = {
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
