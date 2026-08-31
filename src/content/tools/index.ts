import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/tools/compress-pdf";
import mergePdf from "@/content/tools/merge-pdf";
import splitPdf from "@/content/tools/split-pdf";
import rotatePdf from "@/content/tools/rotate-pdf";
import imageToPdf from "@/content/tools/image-to-pdf";
import pdfToImages from "@/content/tools/pdf-to-images";
import addWatermark from "@/content/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/tools/pdf-to-word";
import wordToPdf from "@/content/tools/word-to-pdf";
import reorderPdfPages from "@/content/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/tools/extract-pdf-pages";

/** English tool-page content, keyed by tool slug. */
export const TOOL_CONTENT_EN: Record<string, ToolContent> = {
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
