import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/cs/hubs/pdf-editor";
import pdfConverter from "@/content/cs/hubs/pdf-converter";
import signPdf from "@/content/cs/hubs/sign-pdf";
import scanToPdf from "@/content/cs/hubs/scan-to-pdf";
import pdfSecurity from "@/content/cs/hubs/pdf-security";
import pdfForBusiness from "@/content/cs/hubs/pdf-for-business";
import pdfForStudents from "@/content/cs/hubs/pdf-for-students";
import pdfForms from "@/content/cs/hubs/pdf-forms";

/** Czech hub content, keyed by the English hub slug. */
export const HUBS_CS: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
