import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-flat-pdf",
  h1: "Editable PDF vs Flat PDF — What the Difference Actually Is",
  description:
    "Some PDFs have real selectable text and editable structure; some are images of pages with no underlying text. How to tell which you have, and when each is right.",
  updated: "2026-05-29",
  intro: [
    "Two files can both be PDFs and behave completely differently. One lets you select text, copy quotes, search for words, and edit the content. The other looks identical on screen but is essentially a picture of a document — text is part of the image, not separate from it. The first is an editable PDF; the second is a flat PDF (sometimes called a scanned or image PDF).",
    "Knowing which kind you have matters because the tools to work with each are different. Editable PDFs respond to PDF editors, conversion tools and search. Flat PDFs need OCR to become searchable, and editing them means either OCR-then-edit or replacing the image entirely. Trying to use editable-PDF tools on a flat PDF mostly produces frustration.",
    "This guide explains the difference, walks the test that tells you in two seconds, and shows when each kind is the right choice. Sometimes flat is intentional — sometimes it's an accident of how the file was produced.",
  ],
  steps: [
    {
      title: "The two-second test: try to select text",
      body: "Open the PDF, click and drag across some text. If the text gets selected (highlighted, copyable), it's an editable PDF. If your cursor draws a marquee but no text highlights, it's flat — the 'text' is image data.",
    },
    {
      title: "Editable PDF: text is selectable, searchable, copyable",
      body: "Direct exports from Word, Pages, Docs, or design tools produce editable PDFs. The text is structured data inside the file; search and copy-paste work; PDF editors can change it.",
    },
    {
      title: "Flat PDF: image of a page, no underlying text",
      body: "Scanned documents are the most common flat PDFs. The text exists only as pixels; there's no underlying character data. Search returns nothing; copy-paste returns nothing.",
    },
    {
      title: "OCR converts flat to searchable (but not perfectly editable)",
      body: "OCR analyzes the page image and adds a text layer beneath the pixels. Search starts working; copy-paste returns approximate text. Edit still requires manually replacing image elements.",
    },
    {
      title: "When flat is intentional: locking, image-perfect fidelity",
      body: "Some workflows deliberately flatten a PDF — the file can't be easily edited, signatures and stamps don't disturb underlying text. PDF to Images then Image to PDF round-trips a flat copy.",
    },
    {
      title: "When editable is intentional: every other workflow",
      body: "For sharing, signing, editing, archiving, repurposing — editable PDF is the right choice. Don't flatten unless you specifically need to.",
    },
  ],
  tips: [
    "If you can't select text in a PDF you produced, the export settings dropped the text layer. Re-export with 'preserve text' enabled.",
    "Scanned PDFs from older scanners are usually flat. OCR them at scan time or with a tool afterwards to make them useful long-term.",
    "Flat PDFs are larger than equivalent editable PDFs — image data takes more space than character data.",
    "Don't flatten to 'lock' a PDF — proper edit restrictions work better and preserve searchability.",
    "Some 'editable' PDFs export each character as a tiny shape rather than text. Selection looks right but copy-paste produces nonsense. This is the worst case for editing.",
  ],
  mobileNote:
    "On mobile, flat and editable PDFs look identical in a viewer. The PDF Editor app marks the difference in editing mode — you can see which files have real text and which are image-only, and route them to OCR or to direct edit accordingly.",
  faq: [
    {
      q: "How do I tell at a glance which kind I have?",
      a: "Try to select text. If selection works and copy returns clean text, it's editable. If not, it's flat.",
    },
    {
      q: "Are scanned PDFs always flat?",
      a: "Out of the scanner, yes. Many scanning apps now OCR automatically and produce a searchable flat PDF — text is still image-rendered, but a searchable layer is added beneath.",
    },
    {
      q: "Can I edit a flat PDF?",
      a: "Only by manipulating the image (rotate, crop, add overlay text). Real text editing requires OCR first, and even then the output is approximate.",
    },
    {
      q: "Why would I want a flat PDF?",
      a: "To prevent text edits, to lock in signatures and stamps so they can't be moved, or to deliver an image-perfect rendition. Rare but real use cases.",
    },
    {
      q: "Does file format matter for which kind I get?",
      a: "Yes — direct exports from word processors produce editable PDFs; scanned-then-saved files produce flat PDFs. The source determines the kind.",
    },
  ],
  related: [
    { label: "PDF Editor — edit text and images on mobile", path: "/pdf-editor" },
    { label: "Why can't I edit a PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
    { label: "PDF to Word — recover editable text", path: "/pdf-to-word" },
    { label: "When to use a scanned PDF", path: "/guides/when-to-use-scanned-pdf" },
  ],
  parentHub: { label: "PDF Editor — edit text, images and pages", path: "/pdf-editor" },
};

export default content;
