import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/ja/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/ja/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/ja/compare/pdf-app-vs-online-pdf-tools";

/** Japanese comparison pages, keyed by the English slug. */
export const COMPARE_JA: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
