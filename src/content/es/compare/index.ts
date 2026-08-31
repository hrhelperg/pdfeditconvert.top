import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/es/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/es/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/es/compare/pdf-app-vs-online-pdf-tools";

/** Spanish comparison pages, keyed by the English slug. */
export const COMPARE_ES: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
