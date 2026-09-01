import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/ar/hubs/pdf-editor";
import pdfConverter from "@/content/ar/hubs/pdf-converter";
import signPdf from "@/content/ar/hubs/sign-pdf";
import scanToPdf from "@/content/ar/hubs/scan-to-pdf";
import pdfSecurity from "@/content/ar/hubs/pdf-security";
import pdfForBusiness from "@/content/ar/hubs/pdf-for-business";
import pdfForStudents from "@/content/ar/hubs/pdf-for-students";
import pdfForms from "@/content/ar/hubs/pdf-forms";

/** Arabic hub content, keyed by the English hub slug. */
export const HUBS_AR: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
