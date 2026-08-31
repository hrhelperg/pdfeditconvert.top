import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/pt-BR/tools/compress-pdf";
import mergePdf from "@/content/pt-BR/tools/merge-pdf";
import splitPdf from "@/content/pt-BR/tools/split-pdf";
import rotatePdf from "@/content/pt-BR/tools/rotate-pdf";
import imageToPdf from "@/content/pt-BR/tools/image-to-pdf";
import pdfToImages from "@/content/pt-BR/tools/pdf-to-images";
import addWatermark from "@/content/pt-BR/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/pt-BR/tools/pdf-to-word";
import wordToPdf from "@/content/pt-BR/tools/word-to-pdf";
import reorderPdfPages from "@/content/pt-BR/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/pt-BR/tools/extract-pdf-pages";

/**
 * Brazilian Portuguese tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_PT_BR: Record<string, ToolContent> = {
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
