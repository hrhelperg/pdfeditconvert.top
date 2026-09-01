import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/cs/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/cs/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/cs/compare/pdf-app-vs-online-pdf-tools";

/** Czech comparison pages, keyed by the English slug. */
export const COMPARE_CS: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
