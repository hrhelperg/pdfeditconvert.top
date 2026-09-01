import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/tr/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/tr/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/tr/compare/pdf-app-vs-online-pdf-tools";

/** Turkish comparison pages, keyed by the English slug. */
export const COMPARE_TR: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
