import type { ToolContent } from "@/types/content";

import compressPdf from "@/content/ja/tools/compress-pdf";
import mergePdf from "@/content/ja/tools/merge-pdf";
import splitPdf from "@/content/ja/tools/split-pdf";
import rotatePdf from "@/content/ja/tools/rotate-pdf";
import imageToPdf from "@/content/ja/tools/image-to-pdf";
import pdfToImages from "@/content/ja/tools/pdf-to-images";
import addWatermark from "@/content/ja/tools/add-watermark-to-pdf";
import pdfToWord from "@/content/ja/tools/pdf-to-word";
import wordToPdf from "@/content/ja/tools/word-to-pdf";
import reorderPdfPages from "@/content/ja/tools/reorder-pdf-pages";
import extractPdfPages from "@/content/ja/tools/extract-pdf-pages";

/**
 * Japanese tool-page content, keyed by the English tool slug.
 * `related` paths stay English and are translated at render time.
 */
export const TOOL_CONTENT_JA: Record<string, ToolContent> = {
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
