import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-edit-a-pdf",
  h1: "Why Can't I Edit a PDF? The Real Reasons and What Helps",
  description:
    "PDFs were designed to resist editing, but several specific things — scans, security flags, viewer limits — make some files harder than others. What's blocking yours, and what actually works.",
  updated: "2026-05-29",
  intro: [
    "PDFs were designed to look the same everywhere, which is exactly why editing them feels harder than editing a Word document. The format treats text more like a printed page than a stream of characters — useful when you want pixel-perfect sharing, frustrating when you need to change a name on a contract.",
    "But not every PDF is equally locked. There are four common reasons you can't edit one: it's a scanned image of a document with no real text underneath, the file has a security flag that blocks edits, your viewer is read-only by design, or the original was exported in a way that fragmented the text into shapes. Each has a different path forward.",
    "This guide walks each cause in plain terms, with the right tool for each. None of them require expensive software, and most fixes work in a browser tab.",
  ],
  steps: [
    {
      title: "Confirm whether the PDF has real text or scanned images",
      body: "Try to select text with your cursor or finger. If selection works, the PDF has real text and editing is doable. If you can't select anything, it's a scan — images of text, not text itself.",
    },
    {
      title: "Check for an edit-restriction flag",
      body: "PDFs can carry permissions that allow viewing but block editing, printing or copying. Most viewers show a small lock icon or a 'protected' notice when this is on. The author can lift the restriction; recipients can't safely bypass it.",
    },
    {
      title: "Use a real PDF editor for actual edits",
      body: "Browsers and basic viewers don't edit text — they just display it. The PDF Editor app makes structural edits to text, images and pages without converting away from PDF, which preserves layout.",
    },
    {
      title: "Convert to Word when you need heavy rewriting",
      body: "If you need to rewrite paragraphs rather than tweak words, PDF to Word pulls the text into a real editor. You lose strict layout but gain real flow editing — better for documents that will get republished anyway.",
    },
    {
      title: "For scanned PDFs, expect OCR limits",
      body: "Editing a scan means converting images into text first (OCR). Some tools do this online, some don't, and quality varies wildly with scan resolution. Treat OCR output as a starting point, not a finished edit.",
    },
    {
      title: "Page-level changes don't need 'editing'",
      body: "If you only need to delete, rearrange, rotate or add pages, you don't need a text editor at all — the Extract, Reorder and Rotate PDF tools handle structural edits without unlocking the text layer.",
    },
  ],
  tips: [
    "If you only need to add a signature or fill a form, the file probably doesn't need 'editing' — Sign PDF and form-fill workflows leave the original text alone.",
    "Some PDFs export every character as a tiny shape rather than text. Selection looks fine but copy-paste produces garbage. This is the worst case for editing; the source document is the only realistic path back.",
    "Don't trust password-cracker websites that promise to remove edit restrictions. They're either ineffective, malicious, or both.",
    "If you're the author and want to enable editing on a file you sent earlier, the cleanest path is to re-export it without the restriction.",
    "For repeated edits to the same document, edit the source (Word, Pages, design tool) and re-export, instead of patching the PDF every time.",
  ],
  mobileNote:
    "On a phone, most native viewers are intentionally read-only. The PDF Editor app handles text edits, image swaps and page rearrangement on iOS and Android without flattening the file, so a quick fix doesn't have to wait until you're back at a laptop.",
  faq: [
    {
      q: "Why can I see the text but not click into it?",
      a: "Either the PDF is a scan (image of text, no underlying characters), or your viewer is read-only. A real PDF editor — like the PDF Editor app — lets you click into editable text.",
    },
    {
      q: "Is there a way to remove edit restrictions?",
      a: "Only the original author can lift permission restrictions cleanly. Tools that promise to strip them either don't work or compromise the file. Ask the sender for an unrestricted copy.",
    },
    {
      q: "What's OCR and when do I need it?",
      a: "OCR is the process of turning images of text into actual text — needed when editing a scanned PDF. Quality depends on the scan; clean, high-resolution scans OCR much better than blurry phone photos.",
    },
    {
      q: "Should I convert to Word to edit it?",
      a: "Only if you need heavy text changes. Conversion loses layout fidelity. For small edits, a real PDF editor preserves more.",
    },
    {
      q: "Can I edit pages without touching text?",
      a: "Yes. Reordering, rotating, extracting and removing pages are structural edits and don't require a text editor. The browser tools on this site handle them without uploading.",
    },
  ],
  related: [
    { label: "PDF Editor — edit text and images on mobile", path: "/pdf-editor" },
    { label: "PDF to Word — convert for heavy editing", path: "/pdf-to-word" },
    { label: "How to edit a PDF on iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "How to edit a PDF on Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "PDF Editor — edit text, images and pages", path: "/pdf-editor" },
};

export default content;
