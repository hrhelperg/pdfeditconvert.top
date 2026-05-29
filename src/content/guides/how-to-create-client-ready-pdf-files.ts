import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-client-ready-pdf-files",
  h1: "How to Create Client-Ready PDF Files (Polished, On-Brand)",
  description:
    "What separates an internal PDF from a client-ready one: cover sheet, page numbering, branding, file size, file name. The quick polish that makes the document feel done.",
  updated: "2026-05-29",
  intro: [
    "There's a difference between a working PDF and a client-ready one, and the difference is mostly small details. The internal version has a placeholder cover, an absent page number, a 14 MB file size, and a filename like 'final-final-v2.pdf'. The client-ready version has a clean cover, branded type, numbered pages, a 2 MB file size, and a name that reads as professional. Both communicate the same information; only one feels finished.",
    "Producing the client-ready version doesn't require a designer. It's a short sequence of standard moves — adjust the source, re-export cleanly, polish the PDF, label appropriately, compress sensibly, rename deliberately. Done in order, the polish takes a few minutes per document.",
    "This guide walks the sequence. None of these steps need expensive tools; most can be done in a browser tab without uploading anything sensitive.",
  ],
  steps: [
    {
      title: "Start with a properly designed source",
      body: "If the source document looks placeholder-y, the PDF will too. Fix margins, font choices and heading hierarchy in Word, Pages or Docs before exporting. The PDF can't add polish that isn't in the source.",
    },
    {
      title: "Add a cover sheet that names the deliverable",
      body: "Client name, project name, document title, date, your business name. One page. Adds context that the document inside doesn't have to repeat in every header.",
    },
    {
      title: "Include page numbers from the second page onward",
      body: "X of Y format is unambiguous and confirms completeness — the reader knows nothing's missing. Skip numbering on the cover; start on page 2.",
    },
    {
      title: "Apply consistent branding (typography, color, logo)",
      body: "A small logo and consistent type system signal care. The branding should feel quiet, not loud. If the client has a brand book, mirror it.",
    },
    {
      title: "Re-export with embedded fonts",
      body: "Embedded fonts mean the document looks identical for the client as it does for you. Re-export from the source with 'embed all fonts' enabled.",
    },
    {
      title: "Compress, rename, and verify before sending",
      body: "Compress PDF for the typical email cap. Rename to ClientName_DocType_YYYY-MM-DD.pdf. Open the final once and read the first and last pages before sending — typos catch in re-reads.",
    },
  ],
  tips: [
    "Avoid stock backgrounds and screenshot-y title pages. A clean type-driven cover ages better than a designed one.",
    "Don't put 'DRAFT' watermarks on the final. The absence of the watermark is the indicator that this is final.",
    "Tables that span pages need to repeat their header row. In Word, 'repeat header row' is a single click that prevents readability issues in print.",
    "Charts exported as vector (PDF) stay sharp. Pasted-as-image charts go blurry at high zoom — fix at source.",
    "If you reuse the same template across clients, refresh the metadata each time so the document title doesn't say 'Acme Proposal' when it's going to Beta Co.",
  ],
  mobileNote:
    "Clients often open deliverables on phones first. The PDF Editor app lets you preview the final PDF on a phone the way the client will, so a cover page that looks fine on a 27-inch monitor but cramped on a phone gets caught before delivery.",
  faq: [
    {
      q: "What's the single biggest tell that a PDF isn't client-ready?",
      a: "An unedited filename. 'final_v3_revised.pdf' tells the client this is one of many. A named, dated filename signals a finished artifact.",
    },
    {
      q: "Do I need a logo on every page?",
      a: "No. A logo on the cover and a subtle footer signal is enough. Big logos on every page feel like a sales presentation, not a document.",
    },
    {
      q: "Should I include a table of contents?",
      a: "On anything over ten pages, yes. It's a small courtesy that makes the document feel finished and helps the reader navigate.",
    },
    {
      q: "What page numbering format is best?",
      a: "X of Y. The Y confirms completeness. Plain X is fine for shorter documents but loses the integrity signal.",
    },
    {
      q: "Is it worth designing a custom cover?",
      a: "For repeat deliverables, yes — a branded template pays back across many documents. For one-offs, a clean typographic cover is enough.",
    },
  ],
  related: [
    { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
    { label: "Word to PDF — clean exports for distribution", path: "/word-to-pdf" },
    { label: "How to share PDFs with clients", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "How to prepare a PDF for business use", path: "/guides/how-to-prepare-pdf-for-business-use" },
  ],
  parentHub: { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
};

export default content;
