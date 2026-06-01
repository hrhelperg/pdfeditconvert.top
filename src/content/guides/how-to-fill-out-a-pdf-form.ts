import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-out-a-pdf-form",
  h1: "How to Fill Out a PDF Form",
  description:
    "Fill any PDF form, whether it has real fields or is a flat scan you write on top of. The complete walkthrough for computer and phone, plus signing and saving.",
  updated: "2026-06-01",
  intro: [
    "Filling out a PDF form is straightforward once you know which of the two kinds you're holding. An interactive form has fields you tap and type into; a flat form is a page image where you place your own text. Most forms are one or the other, occasionally a mix, and both can be completed digitally without ever touching a printer.",
    "This is the complete walkthrough — the head of the topic, covering both the interactive and flat cases on a computer and a phone. The mechanics are the same idea each time: get your answers onto the page, handle checkboxes and dates, sign if asked, then save a clean copy and keep the blank original.",
    "If you specifically want the phone steps, the mobile guides go deeper on iPhone and Android. Here the goal is the universal method that works regardless of device, with honest notes on where forms can be awkward.",
  ],
  steps: [
    {
      title: "Open the form and run the tap test",
      body: "Open the PDF and click or tap where the first answer goes. A cursor or highlighted box means interactive fields; nothing happening means it's flat and you'll add text yourself.",
    },
    {
      title: "Fill interactive fields by typing",
      body: "Tap a field and type. Use Tab or scroll to move between fields, click checkboxes to tick them, and open dropdowns to choose set options. Work top to bottom so you don't miss any.",
    },
    {
      title: "Fill flat forms with text boxes",
      body: "For a form with no fields, use the text tool to drop your answer on each line. Zoom in first so text lands precisely on the line rather than floating above or below it.",
    },
    {
      title: "Handle checkboxes, dates and selections",
      body: "Tick interactive checkboxes directly; on flat forms, place a checkmark or X. Add dates where required, and match the format the form shows (day-month-year or month-day-year).",
    },
    {
      title: "Sign if the form needs it",
      body: "Use the sign tool to add a typed or handwritten signature in the signature area. The same step works whether the signature field is interactive or just a printed line.",
    },
    {
      title: "Save a completed copy and keep the original",
      body: "Export a finished version as a new file, optionally flattening it so the answers lock in. Keep the blank original so you can fill a fresh copy next time.",
    },
  ],
  tips: [
    "Always keep the blank original untouched — re-filling a clean copy is tidier than editing last time's answers.",
    "On flat forms, set a consistent text size so every answer looks uniform rather than a patchwork of fonts.",
    "Check required fields before sending; a form returned for one missing box wastes more time than a final review.",
    "If a field won't accept typing, the form may be flat or locked — switch to placing text on top, or see the troubleshooting guides.",
    "Flatten the form before sending if you want the answers to display the same way for every recipient.",
  ],
  mobileNote:
    "The PDF Editor app fills both interactive and flat forms on iPhone and Android: it detects real fields where they exist and lets you place text and checkmarks anywhere when they don't. Sign in the same session and export a completed copy — all on-device, nothing uploaded.",
  faq: [
    {
      q: "How do I fill a PDF form that has no fields?",
      a: "Use a PDF editor's text tool to place your answers directly on the page, add checkmarks where needed, then export. The form is flat, so you're laying text on top rather than typing into fields.",
    },
    {
      q: "Can I fill out a PDF form for free?",
      a: "Yes. Free browser-based and mobile tools fill both interactive and flat forms. The PDF Editor app handles filling and signing without an account.",
    },
    {
      q: "Do I need to print the form to fill it in?",
      a: "Almost never. Both form types can be completed on screen and sent back digitally. Print only if a recipient specifically requires a hand-signed paper copy.",
    },
    {
      q: "Why won't the form let me type?",
      a: "It's usually flat (no fields), opened in a viewer that doesn't support fields, or locked. Try placing text on top, switch to a form-capable tool, or check the troubleshooting guides.",
    },
    {
      q: "How do I make sure my answers don't get cleared?",
      a: "Save with a tool that writes field values into the file, and flatten the form before sending so the answers merge permanently into the page.",
    },
  ],
  related: [
    { label: "What is a PDF form?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "How to fill PDF forms on iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "How to fill PDF forms on Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "How to save a filled PDF form",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "PDF form best practices", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
