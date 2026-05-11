import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF vs DOCX — Feature-by-Feature Comparison",
  description:
    "Compare PDF and DOCX across editability, fidelity, signing, security and sharing. Pick the right format for the job.",
  intro: [
    "PDF and DOCX are the two formats most documents end up in. Both have a job to do — and choosing the right one for any given task avoids most of the formatting and sharing headaches people associate with documents in general.",
    "This comparison is practical, not academic. Each row reflects how the two formats behave in real workflows, not how they're specified in standards documents.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Pixel-perfect layout", left: "yes", right: "no" },
    { feature: "Easy text editing", left: "Limited", right: "yes" },
    { feature: "Universal viewing", left: "yes", right: "no" },
    { feature: "Track changes and comments", left: "Limited", right: "yes" },
    { feature: "Password protection (AES-256)", left: "yes", right: "yes" },
    { feature: "Reliable rendering 10 years later", left: "yes", right: "no" },
    { feature: "Mobile viewing without extra app", left: "yes", right: "no" },
    { feature: "Form fields", left: "yes", right: "Limited" },
    { feature: "Built-in signature support", left: "yes", right: "Add-on" },
  ],
  whenLeft: [
    "The document is finalized and shouldn't be edited",
    "You need it to render identically on every device",
    "The recipient may not have Microsoft Word",
    "The document will be archived for years",
    "You need a printable, signature-ready format",
  ],
  whenRight: [
    "The document is still being drafted",
    "Multiple people are reviewing or co-writing",
    "Track changes and comments are important",
    "You need to repurpose or restyle the content",
    "The document will become a template",
  ],
  faq: [
    {
      q: "Can I convert between PDF and DOCX?",
      a: "Yes. Good PDF tools convert in both directions with high fidelity for text-based documents.",
    },
    {
      q: "Which format is more secure?",
      a: "Both support AES-256 encryption. The format itself doesn't determine security — the password and how you share it do.",
    },
    {
      q: "Will my fonts survive conversion?",
      a: "Mostly. If a font isn't available on the destination device, a similar one is substituted. Stick to common fonts (Calibri, Inter, Helvetica) to minimize substitution.",
    },
  ],
  related: [
    { label: "PDF vs DOCX guide", path: "/guides/pdf-vs-docx" },
    { label: "PDF Converter", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
