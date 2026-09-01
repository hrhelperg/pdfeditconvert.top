import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/ar/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/ar/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/ar/compare/pdf-app-vs-online-pdf-tools";

/** Arabic comparison pages, keyed by the English slug. */
export const COMPARE_AR: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
