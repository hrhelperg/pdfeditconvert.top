import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/it/hubs/pdf-editor";
import pdfConverter from "@/content/it/hubs/pdf-converter";
import signPdf from "@/content/it/hubs/sign-pdf";
import scanToPdf from "@/content/it/hubs/scan-to-pdf";
import pdfSecurity from "@/content/it/hubs/pdf-security";
import pdfForBusiness from "@/content/it/hubs/pdf-for-business";
import pdfForStudents from "@/content/it/hubs/pdf-for-students";
import pdfForms from "@/content/it/hubs/pdf-forms";

/** Italian hub content, keyed by the English hub slug. */
export const HUBS_IT: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
