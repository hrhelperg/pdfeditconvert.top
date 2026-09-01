import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/pl/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/pl/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/pl/compare/pdf-app-vs-online-pdf-tools";

/** Polish comparison pages, keyed by the English slug. */
export const COMPARE_PL: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
