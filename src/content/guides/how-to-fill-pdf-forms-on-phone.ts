import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-phone",
  h1: "How to Fill Out PDF Forms on Your Phone",
  description:
    "Fill PDF forms on iPhone or Android, whether they have real form fields or are flat scans. Tap-to-type, add text boxes, and sign in one place.",
  updated: "2026-05-23",
  intro: [
    "PDF forms come in two flavours, and knowing which you've got determines how you fill it. Some are interactive — tap a field and type, with neat boxes the form designer built in. Others are flat: a scanned or printed-then-PDF'd form with no fields at all, where you have to lay your own text on top. Both are perfectly fillable on a phone; they just need slightly different handling.",
    "This guide covers filling both kinds on iPhone and Android using the PDF Editor app, which detects interactive fields where they exist and lets you place text and checkmarks anywhere when they don't. Many forms also need a signature, which the same app handles in one flow.",
    "The result is a completed form you can send straight back — no printing, no scanning, no hunting for a working printer at the worst possible moment.",
  ],
  steps: [
    {
      title: "Open the form in the PDF Editor app",
      body: "Import the PDF from Files, Mail, Drive, or any share sheet. The app checks whether the form has interactive fields.",
    },
    {
      title: "If it has fields, tap and type",
      body: "Interactive forms let you tap directly into each field and type. Tab or scroll between fields, and tap checkboxes to tick them.",
    },
    {
      title: "If it's flat, add your own text",
      body: "For a scanned or fieldless form, use the text tool to drop text where each answer belongs. Size and position it to sit neatly on the line.",
    },
    {
      title: "Handle checkboxes and dates",
      body: "Place a checkmark or X on tick boxes, and add the date where required. On flat forms these are just text or mark objects you position yourself.",
    },
    {
      title: "Sign if the form asks for it",
      body: "Use the Sign tool to add your saved signature in the signature area — the same flow whether the form is interactive or flat.",
    },
    {
      title: "Export and send",
      body: "Save a completed copy as a new file and share it back via email or any app. Keep the blank original in case you need to fill it again.",
    },
  ],
  tips: [
    "Check first whether fields are interactive — tap where an answer goes. If a cursor appears, type; if nothing happens, it's a flat form and you add text on top.",
    "On flat forms, zoom in before placing text so it lands precisely on the line rather than floating above or below it.",
    "Keep a blank copy of forms you fill repeatedly. Re-filling a fresh original is cleaner than editing last time's answers.",
    "Fill and sign in the same session so you don't export, reopen and re-place everything — the app keeps it to one pass.",
    "Double-check required fields before sending. A form bounced back for a missing date wastes more time than the check would have.",
  ],
  mobileNote:
    "Filling forms is one of the most genuinely phone-friendly PDF tasks — the form arrives by email and goes back the same way. The PDF Editor app fills interactive and flat forms, adds your signature, and exports a completed copy, all on-device with nothing uploaded.",
  faq: [
    {
      q: "How do I know if a PDF form is interactive?",
      a: "Tap where an answer should go. If a text cursor appears and you can type, it has interactive fields. If nothing happens, it's a flat form and you add text on top.",
    },
    {
      q: "Can I fill a scanned form that has no fields?",
      a: "Yes. Use the text tool to place your answers directly on the page, and add checkmarks where needed. The app treats them as objects you position yourself.",
    },
    {
      q: "Can I sign the form in the same app?",
      a: "Yes. The Sign tool adds your saved signature in the same session, so you fill and sign without switching apps.",
    },
    {
      q: "Is the filled form uploaded anywhere?",
      a: "No. The PDF Editor app fills forms on your device, so the personal details on them stay private.",
    },
    {
      q: "Can I reuse a form I fill out often?",
      a: "Keep the blank original and fill a fresh copy each time. That's cleaner than editing a previously completed version.",
    },
  ],
  related: [
    { label: "PDF Editor — edit and fill on mobile", path: "/pdf-editor" },
    { label: "How to sign a PDF on your phone", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "How to annotate a PDF on mobile", path: "/guides/how-to-annotate-pdf-on-mobile" },
    { label: "How to edit a PDF on iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
