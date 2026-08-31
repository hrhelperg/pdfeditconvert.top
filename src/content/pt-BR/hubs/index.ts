import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/pt-BR/hubs/pdf-editor";
import pdfConverter from "@/content/pt-BR/hubs/pdf-converter";
import signPdf from "@/content/pt-BR/hubs/sign-pdf";
import scanToPdf from "@/content/pt-BR/hubs/scan-to-pdf";
import pdfSecurity from "@/content/pt-BR/hubs/pdf-security";
import pdfForBusiness from "@/content/pt-BR/hubs/pdf-for-business";
import pdfForStudents from "@/content/pt-BR/hubs/pdf-for-students";
import pdfForms from "@/content/pt-BR/hubs/pdf-forms";

/** Brazilian Portuguese hub content, keyed by the English hub slug. */
export const HUBS_PT_BR: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
