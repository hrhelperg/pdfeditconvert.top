import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/de/hubs/pdf-editor";
import pdfConverter from "@/content/de/hubs/pdf-converter";
import signPdf from "@/content/de/hubs/sign-pdf";
import scanToPdf from "@/content/de/hubs/scan-to-pdf";
import pdfSecurity from "@/content/de/hubs/pdf-security";
import pdfForBusiness from "@/content/de/hubs/pdf-for-business";
import pdfForStudents from "@/content/de/hubs/pdf-for-students";
import pdfForms from "@/content/de/hubs/pdf-forms";

/** German hub content, keyed by the English hub slug. */
export const HUBS_DE: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
