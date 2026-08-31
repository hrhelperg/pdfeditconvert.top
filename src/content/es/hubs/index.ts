import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/es/hubs/pdf-editor";
import pdfConverter from "@/content/es/hubs/pdf-converter";
import signPdf from "@/content/es/hubs/sign-pdf";
import scanToPdf from "@/content/es/hubs/scan-to-pdf";
import pdfSecurity from "@/content/es/hubs/pdf-security";
import pdfForBusiness from "@/content/es/hubs/pdf-for-business";
import pdfForStudents from "@/content/es/hubs/pdf-for-students";
import pdfForms from "@/content/es/hubs/pdf-forms";

/** Spanish hub content, keyed by the English hub slug. */
export const HUBS_ES: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
