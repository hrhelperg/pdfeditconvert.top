import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "can-you-edit-a-pdf-form",
  h1: "Can You Edit a PDF Form?",
  description:
    "Editing a PDF form's questions is different from filling it in. What's editable, what's locked, and how to change a form you only have as a finished PDF.",
  updated: "2026-06-01",
  intro: [
    "\"Can you edit a PDF form?\" usually hides two different questions. One is: can I fill it in — type my answers into the fields? Almost always yes. The other is: can I change the form itself — reword a question, add a field, fix a label? That depends entirely on how the form was made and whether it's been locked.",
    "Filling a form is the everyday case and rarely a problem. Editing the form's structure is the harder one, and whether you can do it comes down to three things: whether the file has real editable text or is a flat scan, whether the author applied security that blocks changes, and whether you have a tool capable of editing form fields rather than just filling them.",
    "This guide separates the two questions cleanly, then walks through what's realistically possible when you only have the finished PDF — including the honest limits, since some forms are deliberately built to resist editing.",
  ],
  steps: [
    {
      title: "Decide which kind of edit you mean",
      body: "Filling in answers is one thing; changing the form's wording, layout or fields is another. The first is easy and expected; the second is what people usually mean by \"editing a form,\" and it's more constrained.",
    },
    {
      title: "Check for editable text versus a flat scan",
      body: "Try selecting the form's own text. If it selects, the content is real and potentially editable. If nothing selects, it's a flat scan — an image of a form — and editing means OCR first or rebuilding the layout.",
    },
    {
      title: "Check for security restrictions",
      body: "Some forms carry permissions that allow filling but block editing or even forbid changes without a password. If a PDF editor greys out editing tools, the file is likely restricted on purpose.",
    },
    {
      title: "Use a form-capable editor for real fields",
      body: "Filling tools only let you answer fields. To add, move, rename or delete fields, or change questions, you need an editor that exposes the form's structure — not every app does.",
    },
    {
      title: "Know when to ask for the source",
      body: "If you need substantial changes, the cleanest route is often to request the original editable document (a Word file or the form's source) from whoever made it, rather than fighting a locked PDF.",
    },
  ],
  tips: [
    "If you only need to complete the form, you don't need to edit it at all — just fill the fields or add text to a flat copy.",
    "Editing a scanned form means working with an image: you either OCR it to recover text or lay new text and boxes over the old ones.",
    "Renaming or rearranging form fields is genuine form editing and needs a tool built for it — basic viewers can't do it.",
    "Respect locked forms: a security setting that blocks editing is usually a deliberate choice by the author, not a glitch to work around.",
    "Keep an unflattened copy if you expect to revise your answers later; once a form is flattened, the answers become fixed page content.",
  ],
  mobileNote:
    "On a phone, the PDF Editor app lets you fill any form and edit document content where the file allows it. For flat forms, you add text directly onto the page rather than editing fields. Filling and light edits happen on-device, with the blank original kept intact for reuse.",
  faq: [
    {
      q: "Can I change the questions on a PDF form?",
      a: "Sometimes. If the form has real editable text and isn't locked, a form-capable editor can change wording and fields. If it's a flat scan or security-restricted, editing the questions is much harder or blocked.",
    },
    {
      q: "Why won't my editor let me change a form?",
      a: "Either the file is a flat image with no editable text, or it carries permissions that allow filling but not editing. Both are common and usually intentional.",
    },
    {
      q: "Can I edit my answers after filling a form?",
      a: "Yes, as long as you saved it as an interactive form and didn't flatten it. Once flattened, the answers merge into the page and become fixed.",
    },
    {
      q: "How do I edit a scanned form with no fields?",
      a: "Treat it as an image. Run OCR to recover editable text, or simply place your own text and checkmarks on top — for filling it in, the second approach is usually all you need.",
    },
    {
      q: "Is it better to edit the PDF or get the original file?",
      a: "For big changes, ask the author for the source document if you can. Editing a finished, possibly locked PDF is always more limited than working from the original.",
    },
  ],
  related: [
    { label: "What is a PDF form?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Editable PDF vs fillable PDF",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    {
      label: "How to create a fillable PDF",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    { label: "Why can't I edit a PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
