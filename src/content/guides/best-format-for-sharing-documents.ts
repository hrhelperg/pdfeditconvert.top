import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-format-for-sharing-documents",
  h1: "Best Format for Sharing Documents (PDF, DOCX, Images Compared)",
  description:
    "When PDF is the right format to share, when it isn't, and how the realistic alternatives (DOCX, images, HTML, Markdown) actually compare across the everyday scenarios.",
  updated: "2026-05-29",
  intro: [
    "There isn't one best format for sharing documents — there's a best format for each kind of sharing situation. PDF is right most of the time, but not always. DOCX is right for documents that will be edited. Images are right for single visuals. HTML is right for web. Markdown is right for plain text with light structure. Each excels at one thing and is awkward elsewhere.",
    "The right way to decide is to think about what the recipient will do with the file. Read and file? PDF. Edit? DOCX. View on the web? HTML. Quote in a chat? Markdown. Look at a single image? PNG or JPG. Forcing every share through PDF is convenient but produces friction when the recipient wanted to edit.",
    "This guide walks the choice scenario by scenario. The aim is sending the format the recipient will use, not the format you find easiest to produce.",
  ],
  steps: [
    {
      title: "If they'll read and archive, send PDF",
      body: "Locked layout, identical on every device, signable, archivable. PDF is the default for shared documents and the right choice most of the time.",
    },
    {
      title: "If they'll edit, send DOCX or Google Docs",
      body: "Real editing happens in DOCX or Docs. Sending PDF when the recipient will edit forces them to convert back — they'll get something approximate of what you sent.",
    },
    {
      title: "If they'll view on the web, send a link or HTML",
      body: "Web pages display in browsers without needing a download. For content meant to be web-native, HTML beats PDF.",
    },
    {
      title: "If it's plain text with light structure, send Markdown",
      body: "Notes, technical content, light documentation. Markdown is text-readable in any context and renders nicely where supported.",
    },
    {
      title: "If it's a single image, send PNG or JPG",
      body: "Single image, no text underneath, no pages to manage. PNG for sharp/transparent, JPG for photos. PDF wrappers single images unnecessarily.",
    },
    {
      title: "Default to PDF when the right answer is unclear",
      body: "When you can't predict what the recipient will do with the file, PDF is the safest fallback. It can be read by anyone, doesn't change after sending, and converts to other formats if needed.",
    },
  ],
  tips: [
    "Ask the recipient if they'll need to edit. The answer changes the right format.",
    "Don't send PDF and DOCX both unless asked. It signals indecision.",
    "Multi-page content in any format other than PDF is usually wrong.",
    "Internal tools (chat, wiki, docs platforms) often have native formats that beat PDF in context. Don't reflexively export to PDF for an internal share.",
    "When in doubt about format, ship PDF — recipients can convert if they need to.",
  ],
  mobileNote:
    "Phones receive most shared documents now, and PDF works best on small screens because the layout is locked. The PDF Editor app reads, signs and shares PDFs on iOS and Android without surprises about how the file will look on each device.",
  faq: [
    {
      q: "Is PDF really the best default?",
      a: "For sharing finished documents, yes. For working drafts, DOCX is better. For single images, PNG or JPG. Pick by what the recipient will do.",
    },
    {
      q: "When is DOCX better than PDF?",
      a: "When the recipient will edit the document. PDF is hard to edit; DOCX is easy. Don't make them convert.",
    },
    {
      q: "Should I send both?",
      a: "Only when explicitly asked. Sending two formats signals you're not sure which the recipient wants, and they'll have to choose.",
    },
    {
      q: "What about cloud document links?",
      a: "Useful for collaborative documents (Docs, Sheets). For one-way shares of finished documents, downloads are simpler than link permissions.",
    },
    {
      q: "Does the recipient's device matter?",
      a: "Some — older devices may not open newer DOCX features. PDF is the most universally compatible format.",
    },
  ],
  related: [
    { label: "PDF tools — full list of in-browser tools", path: "/pdf-tools" },
    { label: "PDF vs DOCX — feature comparison", path: "/guides/pdf-vs-docx" },
    { label: "PDF vs Google Docs", path: "/guides/pdf-vs-google-docs" },
    { label: "PDF vs images for sharing documents", path: "/guides/pdf-vs-images-for-sharing-documents" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
