import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/fr/hubs/pdf-editor";
import pdfConverter from "@/content/fr/hubs/pdf-converter";
import signPdf from "@/content/fr/hubs/sign-pdf";
import scanToPdf from "@/content/fr/hubs/scan-to-pdf";
import pdfSecurity from "@/content/fr/hubs/pdf-security";
import pdfForBusiness from "@/content/fr/hubs/pdf-for-business";
import pdfForStudents from "@/content/fr/hubs/pdf-for-students";
import pdfForms from "@/content/fr/hubs/pdf-forms";

/** French hub content, keyed by the English hub slug. */
export const HUBS_FR: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
