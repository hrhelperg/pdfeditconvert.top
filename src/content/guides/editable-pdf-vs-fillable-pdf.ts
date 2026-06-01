import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-fillable-pdf",
  h1: "Editable PDF vs Fillable PDF",
  description:
    "Editing a PDF changes its content; filling a PDF means entering answers in form fields. Why the two are different jobs, and which one you actually need.",
  updated: "2026-06-01",
  intro: [
    "\"Editable\" and \"fillable\" sound like the same thing, and people use them interchangeably — but they describe two different jobs. Editing a PDF means changing the document itself: rewording a sentence, swapping a logo, moving a paragraph. Filling a PDF means leaving the document as the author intended and only entering answers into the spots set aside for them. A form is built to be filled, not edited.",
    "The distinction matters because the tools and permissions differ. An editable PDF lets you alter the underlying content. A fillable PDF restricts you, on purpose, to its form fields so the questions and layout stay fixed while you supply the responses. Many forms are deliberately not editable — the author wants everyone's copy to ask the same questions in the same place.",
    "There's a third word that muddies things further — \"flat\" — which is about whether a PDF's text is real or just an image. This guide keeps the focus on editable versus fillable: what each means, when you need which, and how to tell what a given file allows.",
  ],
  steps: [
    {
      title: "Define editing: changing the document",
      body: "Editing alters the content the author created — text, images, page order. You'd edit a PDF to fix a typo in a contract or update a price in a brochure. It changes what the document says.",
    },
    {
      title: "Define filling: answering within fields",
      body: "Filling leaves the document intact and only adds your responses in designated fields or spaces. You fill an application form; you don't rewrite its questions.",
    },
    {
      title: "Check whether a file is fillable",
      body: "Tap where an answer should go. A cursor or highlighted box means the form is fillable through interactive fields. If there are no fields, you can still add text on top — a manual fill rather than a built-in one.",
    },
    {
      title: "Check whether a file is editable",
      body: "Try selecting a line of the document's own text. If it selects and a PDF editor lets you change it, the content is editable. Scanned pages and locked files often resist this.",
    },
    {
      title: "Match the tool to the task",
      body: "Need to change what the document says? Use a PDF editor. Need to complete a form someone sent you? Use form filling — tap fields or place text where answers belong, then export.",
    },
  ],
  tips: [
    "A file can be fillable but not editable: you can answer the fields, but you can't change the questions. That's by design for most forms.",
    "If a form asks a question you can't answer in the space given, don't try to edit the form — add a clarifying note where allowed, or ask the sender.",
    "Editing a finished form's answers later is possible if you keep an editable copy, but flattened or scanned versions are far harder to change.",
    "When you're the author, decide upfront: do you want people to fill it (lock the content, add fields) or collaborate on it (keep it editable)?",
    "Some PDFs use security settings that block editing while still allowing form filling — a deliberate combination, not a fault.",
  ],
  mobileNote:
    "The PDF Editor app handles both jobs on a phone: edit a document's text and images when you need to change content, or tap into form fields — and place text on flat forms — when you just need to fill one in. It picks up interactive fields automatically and keeps everything on-device.",
  faq: [
    {
      q: "Is a fillable PDF the same as an editable PDF?",
      a: "No. Fillable means you can enter answers in form fields without changing the document. Editable means you can change the document's actual content. A form is usually fillable but intentionally not editable.",
    },
    {
      q: "Can a PDF be both editable and fillable?",
      a: "Yes, if its security settings allow both. But many forms are locked so the questions and layout can't be altered, while the fields still accept answers.",
    },
    {
      q: "I can't edit the questions on a form — is it broken?",
      a: "Almost certainly not. Forms are commonly protected so every copy asks the same things. You're meant to fill the fields, not rewrite the form.",
    },
    {
      q: "Which do I need to complete an application someone sent me?",
      a: "Filling, not editing. Enter your answers in the fields or place text on the page if it's flat, then sign and export. You shouldn't need to change the form itself.",
    },
    {
      q: "How is this different from editable vs flat?",
      a: "Editable vs flat is about whether a PDF's text is real or an image. Editable vs fillable is about whether you're changing the document or just answering it. They're related but separate questions.",
    },
  ],
  related: [
    { label: "What is a PDF form?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Editable PDF vs flat PDF",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
    {
      label: "Can you edit a PDF form?",
      path: "/guides/can-you-edit-a-pdf-form",
    },
    { label: "PDF Editor — edit and fill", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
