import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/ru/hubs/pdf-editor";
import pdfConverter from "@/content/ru/hubs/pdf-converter";
import signPdf from "@/content/ru/hubs/sign-pdf";
import scanToPdf from "@/content/ru/hubs/scan-to-pdf";
import pdfSecurity from "@/content/ru/hubs/pdf-security";
import pdfForBusiness from "@/content/ru/hubs/pdf-for-business";
import pdfForStudents from "@/content/ru/hubs/pdf-for-students";
import pdfForms from "@/content/ru/hubs/pdf-forms";

/** Russian hub content, keyed by the English hub slug. */
export const HUBS_RU: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
