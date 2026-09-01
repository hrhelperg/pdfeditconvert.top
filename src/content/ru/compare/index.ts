import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/ru/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/ru/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/ru/compare/pdf-app-vs-online-pdf-tools";

/** Russian comparison pages, keyed by the English slug. */
export const COMPARE_RU: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
