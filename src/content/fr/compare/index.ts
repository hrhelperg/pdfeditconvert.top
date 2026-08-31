import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/fr/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/fr/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/fr/compare/pdf-app-vs-online-pdf-tools";

/** French comparison pages, keyed by the English slug. */
export const COMPARE_FR: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
