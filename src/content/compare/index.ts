import type { CompareContent } from "@/types/content";

import pdfVsDocx from "@/content/compare/pdf-vs-docx";
import pdfVsJpg from "@/content/compare/pdf-vs-jpg";
import pdfAppVsOnline from "@/content/compare/pdf-app-vs-online-pdf-tools";

export const COMPARE: Record<string, CompareContent> = {
  "pdf-vs-docx": pdfVsDocx,
  "pdf-vs-jpg": pdfVsJpg,
  "pdf-app-vs-online-pdf-tools": pdfAppVsOnline,
};
