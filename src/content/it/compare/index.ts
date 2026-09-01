import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/it/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/it/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/it/compare/pdf-app-vs-online-pdf-tools";

/** Italian comparison pages, keyed by the English slug. */
export const COMPARE_IT: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
