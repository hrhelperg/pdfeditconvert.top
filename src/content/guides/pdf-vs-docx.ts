import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF vs DOCX — Which Format Should You Use?",
  description:
    "When to choose PDF over DOCX and vice versa. Clear comparison of editability, fidelity, signing, and sharing.",
  updated: "2026-05-11",
  intro: [
    "PDF and DOCX solve different problems. PDF is a locked-down, printable format that looks identical on every device. DOCX is an editable working format that can be reshaped, restyled, and reformatted by anyone with Word, Google Docs, or any office suite.",
    "Picking the right format for each job avoids most of the headaches people associate with both. Sending a final contract as DOCX invites accidental edits. Sending a working draft as PDF makes review awkward. The choice isn't aesthetic — it's about what the document is for.",
    "This guide breaks down when each format wins, with concrete examples from contracts, drafts, invoices, reports, and the kinds of documents small businesses and individuals deal with every week.",
  ],
  steps: [
    {
      title: "Use PDF when the document is final",
      body: "Contracts, signed agreements, invoices, brochures, reports going to clients or stakeholders. Anything where the recipient should see exactly what you saw, and shouldn't be able to edit it without notice.",
    },
    {
      title: "Use DOCX when the document is still being written",
      body: "Drafts, collaborative documents, anything under review, templates that will be reused and tweaked. Comments and track changes only work properly in DOCX — they're the whole point of the format.",
    },
    {
      title: "Use PDF for archiving",
      body: "PDFs are designed for long-term storage. The format renders the same in 10 years. DOCX files can break subtly across Word versions and operating systems — fine for working documents, risky for archives.",
    },
    {
      title: "Use DOCX when content needs to be extracted",
      body: "Pulling text into another tool, repurposing a section for a blog post, rewriting in a different style — all easier from DOCX where the content is already structured and editable.",
    },
    {
      title: "Convert between them as needed",
      body: "Good PDF tools convert in both directions with high fidelity for text-based documents. The usual workflow: edit in DOCX, export to PDF when sharing externally. Receive PDF, convert to DOCX if you need to repurpose the content.",
    },
    {
      title: "Use PDF when receiving from someone you don't know",
      body: "DOCX files can contain macros and embedded objects that present security risks. PDFs are safer to open from untrusted sources, though you should still keep your PDF reader updated.",
    },
  ],
  tips: [
    "Never send a draft contract as DOCX to an external party unless you're inviting changes — they can edit it without you knowing, and you'll only spot the differences if you compare carefully.",
    "Never send a final invoice as DOCX — it should be uneditable. PDF is the correct choice every time.",
    "If a recipient asks for 'editable PDF', they usually mean DOCX. Ask before assuming, then convert.",
    "PDFs with signatures should stay PDF. Converting back to DOCX strips the signature.",
    "For documents with form fields, PDF is usually the better choice — DOCX form fields are clunky and inconsistent across editors.",
  ],
  mobileNote:
    "On mobile, DOCX requires Word, Google Docs, or another office app to view properly. PDF opens natively in iOS and Android with built-in viewers. That alone makes PDF the right choice for most shared documents — your recipient won't have to install anything to read it.",
  faq: [
    {
      q: "Can I edit a PDF directly without converting?",
      a: "Yes, with a proper PDF editor. PDF editing is more constrained than DOCX editing — it's designed for fixes, signatures, and small changes, not for major rewrites. For substantial editing, converting to DOCX first usually makes more sense.",
    },
    {
      q: "Which format produces smaller files?",
      a: "Depends on content. Text-heavy DOCX is usually smaller than the equivalent PDF. Image-heavy PDFs can be smaller than DOCX if well-compressed, because PDF's image compression is more flexible.",
    },
    {
      q: "Will my fonts survive conversion?",
      a: "Mostly. If a font isn't available on the destination device, a similar one is substituted automatically. Stick to common fonts (Inter, Helvetica, Calibri, Arial) to minimize visible substitution.",
    },
    {
      q: "Is PDF/A different from regular PDF?",
      a: "Yes. PDF/A is a strict archival subset that embeds all fonts and disallows external dependencies. Required by some government and legal archives. Standard PDF works for almost everything else.",
    },
    {
      q: "Can DOCX contain a signature?",
      a: "It can contain an image of a signature, but the signature has no cryptographic validity. PDFs support real digital signatures that bind the signature to the document. For anything that needs to be legally signed, PDF is the right format.",
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
