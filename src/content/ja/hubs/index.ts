import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/ja/hubs/pdf-editor";
import pdfConverter from "@/content/ja/hubs/pdf-converter";
import signPdf from "@/content/ja/hubs/sign-pdf";
import scanToPdf from "@/content/ja/hubs/scan-to-pdf";
import pdfSecurity from "@/content/ja/hubs/pdf-security";
import pdfForBusiness from "@/content/ja/hubs/pdf-for-business";
import pdfForStudents from "@/content/ja/hubs/pdf-for-students";
import pdfForms from "@/content/ja/hubs/pdf-forms";

/** Japanese hub content, keyed by the English hub slug. */
export const HUBS_JA: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
