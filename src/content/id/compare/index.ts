import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/id/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/id/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/id/compare/pdf-app-vs-online-pdf-tools";

/** Indonesian comparison pages, keyed by the English slug. */
export const COMPARE_ID: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
