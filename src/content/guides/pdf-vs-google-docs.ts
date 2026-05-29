import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-google-docs",
  h1: "PDF vs Google Docs — When to Use Each (Editing, Sharing, Locking)",
  description:
    "Google Docs is for collaboration; PDF is for delivery. The realistic when-to-use-each, and how to convert cleanly between them at the right moments.",
  updated: "2026-05-29",
  intro: [
    "Google Docs and PDF aren't really competing — they're for different phases of a document's life. Docs is for writing, collaborating, revising, commenting; PDF is for delivering, locking, signing, archiving. Trying to use either one outside its strength is where the friction comes from.",
    "A typical document goes through both: drafted in Docs because that's where collaboration happens, then exported as PDF when the version is final and going outside the working group. Going the other way — receiving a PDF, importing into Docs to edit — works but always loses some fidelity, so it's a fallback rather than a routine.",
    "This guide walks the realistic when-to-use-each by phase, plus the conversion mechanics for the two directions. Pick the right format at the right time and the friction mostly disappears.",
  ],
  steps: [
    {
      title: "Use Google Docs while the document is being written",
      body: "Multi-author editing, live cursors, version history, comments. Docs handles all of this cleanly and PDF handles none of it. Drafting and review belong in Docs.",
    },
    {
      title: "Switch to PDF when the document is final or external",
      body: "Once a document is going to a client, a regulator, a vendor or an archive, PDF locks the layout and content. The Doc stays as the editable source; the PDF is the deliverable.",
    },
    {
      title: "Export from Docs to PDF cleanly",
      body: "File → Download → PDF Document. Embed fonts via the export settings if available. The resulting PDF preserves headings, tables, images and formatting.",
    },
    {
      title: "Convert PDF to editable when you must",
      body: "PDF to Word in your browser pulls text out of a PDF. The output is approximate — layout suffers, tables can break. Treat it as a recovery path, not a regular workflow.",
    },
    {
      title: "Don't sign or archive in Google Docs",
      body: "Docs doesn't have real signature support, and version history is tied to your Google account. Signed documents and archives belong in PDF, stored locally or in a deliberate vault.",
    },
    {
      title: "Match the file format to the recipient",
      body: "Clients expect PDF. Editors expect Word or Docs. Internal teams might prefer Docs for collaboration. Send the format the recipient will actually use.",
    },
  ],
  tips: [
    "Don't share a Google Docs link to a client — they may not have a Google account, the share permissions may surprise you, and the document can keep changing after they open it.",
    "When converting Docs to PDF, check pagination — what looked like one page in Docs sometimes overflows into two in the PDF.",
    "Don't 'open in Docs' a PDF you received unless you need heavy editing. The conversion loses formatting; the original PDF is cleaner for reading and sharing.",
    "Use Docs version history for collaborative drafting. The PDF is the snapshot at delivery.",
    "Treat Docs as the source of truth during drafting; treat the PDF as the source of truth after delivery.",
  ],
  mobileNote:
    "Phones do most of the late-stage PDF work even when drafting happens on desktop. The PDF Editor app handles last-minute compression, signing and sharing of the final PDF on iOS and Android — useful for the moment between 'Docs is done' and 'client has the file'.",
  faq: [
    {
      q: "Can I just keep everything in Google Docs?",
      a: "For internal collaboration, yes. For external delivery, no — clients expect PDF, and Docs share permissions can leak access in ways you don't expect.",
    },
    {
      q: "How well does PDF to Docs conversion work?",
      a: "Acceptable for text recovery, poor for layout. The text usually comes through; tables, columns and precise formatting suffer. Use only when you need to re-edit a PDF you don't have the source for.",
    },
    {
      q: "Should I sign in Google Docs or PDF?",
      a: "PDF. Real e-signatures attach to PDF cleanly; Docs doesn't have native signature support comparable to PDF signing tools.",
    },
    {
      q: "What about Google Docs for archive?",
      a: "Possible but risky — accounts can change, Docs can be deleted, and the format depends on Google's service. PDF is the better archive format.",
    },
    {
      q: "Can I round-trip Docs → PDF → Docs?",
      a: "Possible but lossy. Each conversion loses fidelity. Keep the original Doc as the editable source and only round-trip when you must.",
    },
  ],
  related: [
    { label: "PDF Converter — Word, JPG, PNG and back", path: "/pdf-converter" },
    { label: "PDF to Word — convert for heavy editing", path: "/pdf-to-word" },
    { label: "PDF vs DOCX — feature comparison", path: "/guides/pdf-vs-docx" },
    { label: "PDF vs DOCX for business", path: "/guides/pdf-vs-docx-for-business" },
  ],
  parentHub: { label: "PDF Converter — Word, JPG, PNG and back", path: "/pdf-converter" },
};

export default content;
