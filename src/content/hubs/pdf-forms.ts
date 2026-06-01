import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "PDF Forms",
    h1: "Fill, sign and manage PDF forms anywhere.",
    highlight: "PDF forms",
    lead: "Tax forms, applications, intake sheets, consent forms — most of them arrive as PDFs. Learn how PDF forms actually work, how to fill the interactive and flat ones, and how to fix the common problems, all without printing a single page.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why PDF forms trip people up",
    paragraphs: [
      "A PDF form looks like one thing but is often two. Some are interactive — the designer added real fields you can tap and type into. Others are flat: a scanned or printed-then-saved form with no fields at all, where you have to lay your own text on top. The two behave completely differently, and most of the frustration around forms comes from not knowing which kind you have.",
      "On top of that, forms misbehave in ways ordinary PDFs don't. Fields vanish in the wrong viewer, typed answers refuse to save, a form opens read-only, or the values you filled in don't show up when you print. None of these mean the form is broken — they're predictable problems with predictable fixes once you know what's happening underneath.",
      "This hub collects everything in one place: the fundamentals of how forms work, the step-by-step for filling them on a computer or a phone, the business workflows for collecting information from clients, and a troubleshooting set for when a form won't cooperate. Form appearance and behaviour can vary between PDF viewers, so the guides stay honest about what works everywhere and what depends on the tool you open the file in.",
    ],
  },
  features: {
    heading: "What you can do with PDF forms",
    items: [
      {
        icon: "FileText",
        title: "Fill interactive fields",
        body: "Tap a real form field and type. Move between fields, tick checkboxes, and pick from dropdowns where the designer built them in.",
      },
      {
        icon: "TextCursorInput",
        title: "Complete flat forms",
        body: "No fields? Place your own text and checkmarks anywhere on the page — exactly where each answer belongs on a scanned or printed form.",
      },
      {
        icon: "PenLine",
        title: "Sign where it's needed",
        body: "Add a typed or handwritten signature in the signature area, whether the field is interactive or just a line on a flat form.",
      },
      {
        icon: "Save",
        title: "Save a completed copy",
        body: "Export a finished version you can send straight back, and keep the blank original for the next time you need it.",
      },
      {
        icon: "Lock",
        title: "Flatten before sending",
        body: "Lock your answers into the page so they can't be changed or accidentally cleared by the recipient's viewer.",
      },
      {
        icon: "Smartphone",
        title: "Do it all on a phone",
        body: "Forms arrive by email and go back the same way — filling and signing on a phone is one of the most genuinely mobile PDF tasks there is.",
      },
    ],
  },
  steps: {
    heading: "Filling a PDF form, start to finish",
    items: [
      {
        title: "Open the form and check the type",
        body: "Open the PDF and tap where an answer should go. If a cursor appears, it has interactive fields. If nothing happens, it's a flat form and you'll add text on top.",
      },
      {
        title: "Fill the fields",
        body: "For interactive forms, tap and type, tabbing between fields. For flat forms, use the text tool to drop answers precisely on each line.",
      },
      {
        title: "Handle checkboxes, dates and signatures",
        body: "Tick boxes or place a checkmark, add the date where required, and use the sign tool for any signature area.",
      },
      {
        title: "Review every required field",
        body: "Scan back through the form for blanks. A form bounced for one missing date costs more time than the check would have.",
      },
      {
        title: "Save, flatten and send",
        body: "Export a completed copy, flatten it so the answers are locked, and send it back by email or upload. Keep the blank original.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Forms on your phone",
    body: "A form lands in your inbox while you're away from your desk. With a phone you can open it, fill the fields or add text to a flat scan, sign it, and send it back before you've found a chair — no printer, no scanner, no waiting until you're home. The PDF Editor app detects interactive fields where they exist, lets you place text and checkmarks anywhere when they don't, and keeps the personal details on the form on your device.",
  },
  faq: [
    {
      q: "What's the difference between an interactive and a flat PDF form?",
      a: "An interactive form has fields the designer built in — tap one and a cursor appears so you can type. A flat form is essentially a picture of a form with no fields, so you add your own text on top. You can fill both; they just need slightly different handling.",
    },
    {
      q: "Do I need to print a PDF form to fill it out?",
      a: "Almost never. Both interactive and flat forms can be completed digitally — type into fields or place text on the page, then sign and export. Printing is only worth it if a recipient specifically demands a wet-ink signature on paper.",
    },
    {
      q: "Why can't I type in some PDF forms?",
      a: "Usually it's one of three things: the form is flat (no fields to type into), your viewer doesn't support form fields, or the form is read-only or secured. The troubleshooting guides in this hub walk through each cause.",
    },
    {
      q: "Will a form I fill look the same to the person who receives it?",
      a: "Mostly, but not always — form appearance can vary between PDF viewers. Flattening your completed form before sending locks the answers into the page so they display consistently wherever it's opened.",
    },
    {
      q: "Is filling a form online private?",
      a: "It depends on the tool. The PDF Editor app fills forms on your device, so the personal information you enter isn't uploaded anywhere. Browser-based tools that run locally keep the file on your machine too.",
    },
  ],
  related: [
    { label: "What is a PDF form?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "How to fill out a PDF form",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "How to create a fillable PDF",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "PDF form not working? Start here",
      path: "/guides/pdf-form-not-working",
    },
    { label: "PDF Editor — fill and sign on mobile", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Fill and sign PDF forms on your phone.",
    sub: "Free on iOS and Android. Nothing to upload.",
  },
};

export default content;
