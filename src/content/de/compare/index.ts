import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/de/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/de/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/de/compare/pdf-app-vs-online-pdf-tools";

/** German comparison pages, keyed by the English slug. */
export const COMPARE_DE: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
