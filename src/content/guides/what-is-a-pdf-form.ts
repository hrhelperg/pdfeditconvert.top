import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "What Is a PDF Form?",
  description:
    "A PDF form is a document built to collect answers — sometimes with real fields you type into, sometimes a flat page you write on top of. What that means and how to tell.",
  updated: "2026-06-01",
  intro: [
    "A PDF form is any PDF designed to collect information from the person who opens it: a job application, a tax document, a consent slip, a booking sheet. What separates a form from an ordinary PDF is intent — it expects you to add answers, not just read it. The confusing part is that two forms can look identical on screen and behave completely differently when you try to fill them.",
    "The split comes down to whether the form has interactive fields. An interactive form has boxes the designer built into the file — tap one and a cursor appears, ready for you to type. A flat form has none; it's effectively a picture of a form, often a scan of a paper original, where the lines and labels are part of the image rather than active areas. Both are forms, and both are fillable, but they need different handling.",
    "Knowing which kind you're looking at takes about two seconds and saves a lot of frustration. This guide explains what a PDF form actually is, the two types you'll meet, and how to tell them apart before you start filling.",
  ],
  steps: [
    {
      title: "Recognise that a form is built to be completed",
      body: "Unlike a report or a contract you only read, a form has blanks waiting for answers — name lines, checkboxes, signature areas. That intent is what makes it a form, regardless of how it was produced.",
    },
    {
      title: "Identify an interactive form",
      body: "Open the PDF and tap or click where an answer belongs. If a text cursor appears, a field highlights, or a checkbox toggles, the form has interactive fields the designer added on purpose.",
    },
    {
      title: "Identify a flat form",
      body: "If tapping a blank does nothing — no cursor, no highlight — the form is flat. The lines and labels are baked into the page image, so there's nothing to type into directly.",
    },
    {
      title: "Check how it was created",
      body: "Forms exported from form-design software tend to be interactive. Forms that were printed, signed by hand, then scanned back in are almost always flat. Knowing the origin predicts the type.",
    },
    {
      title: "Pick the right filling approach",
      body: "Interactive forms: tap and type. Flat forms: add your own text boxes and checkmarks on top of the page. A capable PDF editor handles both in the same file.",
    },
  ],
  tips: [
    "The fastest test is the tap test — touch a blank line. A cursor means interactive; nothing happening means flat.",
    "A form can be partly interactive: some fields are real, others are missing. Fill the real ones, then add text manually for the gaps.",
    "Interactive forms are easier to fill cleanly, but flat forms are completely workable — you just position text yourself.",
    "If you're designing a form for others, build it interactive where you can; it makes completion far easier for the recipient.",
    "Form appearance can vary between PDF viewers, so a field that looks one way on your phone may render slightly differently on someone else's computer.",
  ],
  mobileNote:
    "On a phone, the PDF Editor app checks whether a form has interactive fields when you open it: where they exist, you tap and type; where they don't, you place text and checkmarks anywhere on the page. Either way you can sign and export a completed copy without printing.",
  faq: [
    {
      q: "Is every PDF a form?",
      a: "No. A PDF only counts as a form when it's meant to collect answers — fields, checkboxes, signature lines. A report or article is a PDF but not a form.",
    },
    {
      q: "How do I know if my PDF form is interactive or flat?",
      a: "Tap or click a blank where an answer goes. If a cursor appears and you can type, it's interactive. If nothing happens, it's a flat form and you add text on top.",
    },
    {
      q: "Can I fill a flat PDF form?",
      a: "Yes. A flat form has no fields, but you can place your own text and checkmarks anywhere on the page using a PDF editor, then export the completed file.",
    },
    {
      q: "Why would someone send a flat form instead of an interactive one?",
      a: "Usually because it started as paper and was scanned, or because the tool that made it doesn't add fields. It's not wrong — it just takes a slightly different filling method.",
    },
    {
      q: "Are interactive forms always better?",
      a: "They're easier to complete and look tidier, but they can also use features some viewers don't support. A well-made flat form is reliable everywhere, even if it takes more effort to fill.",
    },
  ],
  related: [
    {
      label: "Editable PDF vs fillable PDF",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    { label: "How PDF forms work", path: "/guides/how-pdf-forms-work" },
    {
      label: "How to fill out a PDF form",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Editable PDF vs flat PDF",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
