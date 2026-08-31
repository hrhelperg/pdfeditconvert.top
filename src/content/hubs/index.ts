import type { HubContent } from "@/types/content";

import pdfEditor from "@/content/hubs/pdf-editor";
import pdfConverter from "@/content/hubs/pdf-converter";
import compressPdf from "@/content/hubs/compress-pdf";
import signPdf from "@/content/hubs/sign-pdf";
import scanToPdf from "@/content/hubs/scan-to-pdf";
import pdfSecurity from "@/content/hubs/pdf-security";
import pdfForBusiness from "@/content/hubs/pdf-for-business";
import pdfForStudents from "@/content/hubs/pdf-for-students";
import pdfForms from "@/content/hubs/pdf-forms";

/**
 * English hub content, keyed by hub slug.
 *
 * Hub pages each imported their own content file directly; the registry
 * exists so the content layer can be addressed by locale and slug the same
 * way guides and tools already are.
 */
export const HUBS_EN: Record<string, HubContent> = {
  "pdf-editor": pdfEditor,
  "pdf-converter": pdfConverter,
  "compress-pdf": compressPdf,
  "sign-pdf": signPdf,
  "scan-to-pdf": scanToPdf,
  "pdf-security": pdfSecurity,
  "pdf-for-business": pdfForBusiness,
  "pdf-for-students": pdfForStudents,
  "pdf-forms": pdfForms,
};
