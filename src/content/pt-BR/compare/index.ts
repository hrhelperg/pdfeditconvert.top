import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/pt-BR/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/pt-BR/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/pt-BR/compare/pdf-app-vs-online-pdf-tools";

/** Brazilian Portuguese comparison pages, keyed by the English slug. */
export const COMPARE_PT_BR: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
