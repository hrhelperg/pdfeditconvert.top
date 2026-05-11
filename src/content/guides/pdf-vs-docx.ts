import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF vs DOCX — Which Format Should You Use?",
  description:
    "When to choose PDF over DOCX and vice versa. Clear comparison of editability, fidelity, signing and sharing.",
  updated: "2026-05-11",
  intro: [
    "PDF and DOCX solve different problems. PDF is a printable, locked-down format that looks identical on every device. DOCX is an editable working format that can be reshaped, restyled, and reformatted. Picking the right one for the job avoids most of the headaches people associate with both.",
    "This guide explains when each format is the right choice — with concrete examples of contracts, drafts, invoices, and reports.",
  ],
  steps: [
    {
      title: "Use PDF when the document is final",
      body: "Contracts, signed agreements, invoices, brochures, reports. Anything where the receiver should see exactly what you saw.",
    },
    {
      title: "Use DOCX when the document is a draft",
      body: "Anything still being written, reviewed, or collaboratively edited. Comments and track changes work properly only in DOCX.",
    },
    {
      title: "Use PDF for archiving",
      body: "PDFs are designed for long-term storage. DOCX files can break across Word versions; PDFs render the same in 10 years.",
    },
    {
      title: "Use DOCX when you need to extract content",
      body: "Pulling text into another tool, repurposing a section, rewriting in a different style — all easier from DOCX.",
    },
    {
      title: "Convert between them as needed",
      body: "Good PDF tools convert in both directions with high fidelity. Edit in DOCX, export to PDF when sharing.",
    },
  ],
  tips: [
    "Never send a draft contract as DOCX to an external party — they can edit it without you knowing.",
    "Never send a final invoice as DOCX — it should be uneditable.",
    "If a recipient asks for 'editable PDF', they usually mean DOCX. Ask before assuming.",
  ],
  mobileNote:
    "On mobile, DOCX requires Word or Google Docs to view properly. PDF opens in any app. That alone makes PDF the right choice for most shared documents.",
  faq: [
    {
      q: "Can I edit a PDF directly?",
      a: "Yes, with a proper PDF editor. PDF editing is more constrained than DOCX editing — it's good for fixes and changes, not for major rewrites.",
    },
    {
      q: "Which format is smaller?",
      a: "Depends on content. Text-heavy DOCX is usually smaller than the equivalent PDF. Image-heavy PDFs can be smaller if well-compressed.",
    },
  ],
  related: [
    { label: "PDF vs DOCX — full comparison", path: "/compare/pdf-vs-docx" },
    { label: "PDF Converter", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
