import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "How PDF Forms Work",
  description:
    "Under the hood, a PDF form is either a set of interactive fields layered on the page or a flat image with none. How each is built and why it matters for filling.",
  updated: "2026-06-01",
  intro: [
    "It helps to understand what's actually happening inside a PDF form, because it explains almost every quirk you'll run into. A PDF page is a fixed layout — text, lines and images placed at exact coordinates. A form adds a separate layer on top of that layout: interactive fields, each one a little box that knows it's a text field, a checkbox, a dropdown or a signature area.",
    "When a form has that field layer, your PDF viewer draws editable boxes where the designer put them. You type, and the viewer stores your input in the field rather than burning it into the page. That separation is why filled answers can sometimes be cleared, edited or fail to save — they live in the field layer, not the page itself, until you flatten them down.",
    "Flat forms skip the field layer entirely. They're just the page image, so there's nothing interactive to type into; you add your own text objects on top. This guide walks through how both kinds are built, what flattening does, and why the same form can behave differently in different apps.",
  ],
  steps: [
    {
      title: "The page layer: fixed and final",
      body: "Every PDF has a page layer with text and graphics locked to exact positions. This is what makes a PDF look identical everywhere. On a flat form, the question lines and labels live entirely here.",
    },
    {
      title: "The field layer: interactive on top",
      body: "Interactive forms add a layer of form fields above the page — text inputs, checkboxes, radio buttons, dropdowns, signature fields. Each field has a name and a type the viewer understands.",
    },
    {
      title: "Filling: input stored in fields",
      body: "When you type into an interactive field, your answer is held in that field, not merged into the page. That's why you can clear and retype it, and why a different viewer might display it slightly differently.",
    },
    {
      title: "Saving: keeping the field values",
      body: "Saving a filled form stores the field values inside the file. Some basic viewers only let you print, not save the data — which is the classic reason filled answers vanish when you reopen the file.",
    },
    {
      title: "Flattening: merging fields into the page",
      body: "Flattening pushes the field values down into the page layer, turning them into permanent page content. After flattening, the answers can't be edited or cleared — useful right before you send the form back.",
    },
  ],
  tips: [
    "Think of an interactive form as a transparent sheet of editable boxes laid over a printed page. Flattening glues the sheet down for good.",
    "Because field values are separate from the page, the same form can look slightly different across viewers — fonts and field sizing aren't always identical.",
    "If answers keep disappearing, the field layer isn't being saved. Use a tool that writes field values into the file, or flatten before closing.",
    "Some advanced forms (often called XFA or dynamic forms) use a more complex structure that many viewers don't fully support — these are the ones most likely to misbehave.",
    "Flat forms have no field layer at all, so they never lose data the way interactive ones can — your added text simply sits on the page.",
  ],
  mobileNote:
    "The PDF Editor app reads a form's field layer when you open it, so interactive fields are tappable straight away. For flat forms with no field layer, it lets you add text and marks directly onto the page, then export — and you can flatten the result so your answers are locked in before sending.",
  faq: [
    {
      q: "What are PDF form fields made of?",
      a: "They're a layer of interactive objects — text boxes, checkboxes, radio buttons, dropdowns and signature fields — placed over the fixed page layout, each with a name and a type the viewer recognises.",
    },
    {
      q: "Why do my filled-in answers sometimes disappear?",
      a: "Field values are stored separately from the page. If your viewer only prints rather than saving the data, or you don't save properly, the field layer isn't written to the file and the answers are lost.",
    },
    {
      q: "What does it mean to flatten a PDF form?",
      a: "Flattening merges the field values into the page itself, making them permanent. The form is no longer editable, but the answers will display and print consistently everywhere.",
    },
    {
      q: "What is an AcroForm?",
      a: "AcroForm is the standard, widely supported kind of interactive PDF form. There's also a more complex dynamic type (XFA) that many viewers handle poorly, which is why some forms only work in specific software.",
    },
    {
      q: "Why does the same form look different in two apps?",
      a: "Because viewers render the field layer themselves. Form appearance can vary between PDF viewers, especially field fonts and sizing. Flattening before sharing avoids surprises.",
    },
  ],
  related: [
    { label: "What is a PDF form?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "How to save a filled PDF form",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "PDF form compatibility problems",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF Editor — fill on mobile", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
