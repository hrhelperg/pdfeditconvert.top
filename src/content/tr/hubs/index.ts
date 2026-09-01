import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/tr/hubs/pdf-editor";
import pdfConverter from "@/content/tr/hubs/pdf-converter";
import signPdf from "@/content/tr/hubs/sign-pdf";
import scanToPdf from "@/content/tr/hubs/scan-to-pdf";
import pdfSecurity from "@/content/tr/hubs/pdf-security";
import pdfForBusiness from "@/content/tr/hubs/pdf-for-business";
import pdfForStudents from "@/content/tr/hubs/pdf-for-students";
import pdfForms from "@/content/tr/hubs/pdf-forms";

/** Turkish hub content, keyed by the English hub slug. */
export const HUBS_TR: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
