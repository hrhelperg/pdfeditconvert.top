import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "PDF Converter",
    h1: "Convert PDFs to the format you actually need.",
    highlight: "actually",
    lead: "PDF to Word for editing. PDF to JPG for messaging apps. Word and images back to PDF for archiving. One app, fast results, no uploads to random servers.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "The conversion mess most people run into",
    paragraphs: [
      "PDFs are great until somebody asks for the file in Word. Or until a messaging app refuses to accept anything but JPG. Or until you need to combine receipts (which are images) with a quote (which is a PDF) into a single, sendable document.",
      "Public PDF converter websites get this job done — and create new problems. They upload your file, sometimes keep it for hours, often paywall conversions over a certain size, and rarely produce a clean DOCX. Formatting drifts, fonts get substituted, tables break.",
      "A native converter does the work on your device. The same engine that lays out the PDF rebuilds it into the target format. Tables stay aligned, fonts are mapped intelligently, and you never hand a sensitive contract to a free website that pays its bills with ad networks.",
    ],
  },
  features: {
    heading: "Convert in both directions",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Editable Word documents that keep layout, fonts, tables, and images intact.",
      },
      {
        icon: "Image",
        title: "PDF → JPG and PNG",
        body: "Export single pages or every page as separate images, ready for messaging or slides.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Extract tables into proper XLSX cells instead of pasting screenshots.",
      },
      {
        icon: "FilePlus",
        title: "Word and images → PDF",
        body: "Turn a DOCX, a photo of a receipt, or a screenshot into a clean PDF in seconds.",
      },
      {
        icon: "ScanText",
        title: "OCR for scanned PDFs",
        body: "Run text recognition on scanned documents so the result is selectable and searchable.",
      },
      {
        icon: "Layers",
        title: "Batch conversion",
        body: "Queue several files at once. The app processes them locally in the background.",
      },
    ],
  },
  steps: {
    heading: "How to convert a PDF on your phone",
    items: [
      {
        title: "Open the PDF Editor app",
        body: "Tap the Convert tile on the home screen.",
      },
      {
        title: "Pick the source file",
        body: "Choose a PDF, DOCX, image, or any document the app supports.",
      },
      {
        title: "Choose the output format",
        body: "Word, Excel, JPG, PNG, PowerPoint — whatever the receiving end needs.",
      },
      {
        title: "Tap Convert",
        body: "Conversion happens on-device. Most files finish in a few seconds.",
      },
      {
        title: "Save or share",
        body: "Save to Files, sync to Drive or iCloud, or share directly via Mail or messaging.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Conversion while you're moving",
    body: "The realistic conversion job isn't 'turn this annual report into a Word doc'. It's 'turn this hotel receipt photo into a PDF I can attach to an expense form' or 'pull these three tables out of a quote so I can paste them into a spreadsheet'. Both happen on a phone, between other things, and need to be done now.",
  },
  faq: [
    {
      q: "Which formats are supported?",
      a: "In both directions: Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG, and plain text. Word, images, and a few common formats can be turned into PDF.",
    },
    {
      q: "How accurate is PDF to Word?",
      a: "Very accurate for text-based PDFs — tables, lists, and headings carry across. Complex multi-column layouts may need light cleanup. Scanned PDFs need OCR first.",
    },
    {
      q: "Does conversion happen offline?",
      a: "Standard conversions run locally. Some advanced features (high-quality OCR for some languages) may use the cloud — the app tells you before sending anything.",
    },
    {
      q: "Will my fonts survive conversion?",
      a: "The app maps fonts intelligently. If a font isn't installed on the destination device, the closest match is used so the document still reads correctly.",
    },
    {
      q: "Can I convert protected PDFs?",
      a: "If the PDF is password-protected, you'll need to enter the password before conversion. PDFs with editing restrictions usually convert if the open password is known.",
    },
  ],
  related: [
    { label: "PDF vs DOCX — which to use", path: "/guides/pdf-vs-docx" },
    { label: "PDF vs JPG comparison", path: "/compare/pdf-vs-jpg" },
    { label: "Edit PDFs after converting", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Convert PDFs without uploading them.",
    sub: "Free on iOS and Android. Conversions run on-device.",
  },
};

export default content;
