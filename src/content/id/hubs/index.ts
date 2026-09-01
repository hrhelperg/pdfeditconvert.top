import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/id/hubs/pdf-editor";
import pdfConverter from "@/content/id/hubs/pdf-converter";
import signPdf from "@/content/id/hubs/sign-pdf";
import scanToPdf from "@/content/id/hubs/scan-to-pdf";
import pdfSecurity from "@/content/id/hubs/pdf-security";
import pdfForBusiness from "@/content/id/hubs/pdf-for-business";
import pdfForStudents from "@/content/id/hubs/pdf-for-students";
import pdfForms from "@/content/id/hubs/pdf-forms";

/** Indonesian hub content, keyed by the English hub slug. */
export const HUBS_ID: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
