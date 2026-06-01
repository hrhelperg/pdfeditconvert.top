import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "PDF Form Font Problems",
  description:
    "Field text too big, too small, or auto-shrinking as you type? The font quirks specific to form fields — auto-size, substitution, clipping — and how to get clean, legible answers.",
  updated: "2026-06-01",
  intro: [
    "Form fields have their own font behaviour, separate from the rest of a PDF, and it produces a specific set of headaches. Text that shrinks as you type more, answers that look huge in one field and tiny in the next, characters clipped at the top or bottom of a field, or a different font appearing than the form's labels. These are form-field font quirks, not general PDF font problems — and most are about how the field was set up.",
    "The biggest culprit is auto-size. Many fields are configured to shrink text automatically so longer answers still fit, which is why your text gets smaller the more you type. Other issues come from a field's font not being embedded, so it's substituted in some viewers, or a field that's simply too short for its font size, clipping the characters.",
    "This guide covers the form-field-specific font issues, how to recognise each, and what to change to get legible, consistent answers. For font problems across a whole document rather than its fields, the general PDF font guide goes broader.",
  ],
  steps: [
    {
      title: "Recognise auto-size shrinking",
      body: "If field text gets smaller as you add characters, the field uses auto-size to fit everything in. That's intended, but it can make long answers tiny. Keep answers concise or, if you control the form, set a fixed size.",
    },
    {
      title: "Fix inconsistent sizes across fields",
      body: "Answers that look big in one field and small in another usually mean each field has a different font size set. If it's your form, standardise the field font size so every answer matches.",
    },
    {
      title: "Address clipped characters",
      body: "If letters are cut off top or bottom, the field is too short for its font size. Enlarge the field or reduce the font size (on a form you control), or accept a smaller size when filling one you don't.",
    },
    {
      title: "Handle substituted fonts",
      body: "If field text appears in a different font than expected, the intended font isn't embedded and the viewer substituted one. Embedding the field font when building the form keeps it consistent across viewers.",
    },
    {
      title: "Flatten to lock the appearance",
      body: "Once your answers look right, flatten the form. Flattening fixes the field text into the page so its size and font display the same everywhere, regardless of the recipient's viewer.",
    },
  ],
  tips: [
    "Auto-size is the usual reason field text shrinks as you type — concise answers stay legible, or set a fixed size on forms you build.",
    "If you're designing the form, standardise field font sizes so answers don't come out a patchwork of big and small.",
    "Clipped characters mean the field is too short for its font; resize the field or the font on a form you control.",
    "Flatten before sending so your field fonts and sizes can't shift on the recipient's screen.",
    "Field appearance can vary between viewers, so a fixed, embedded, flattened result is the most consistent.",
  ],
  mobileNote:
    "On a phone, the PDF Editor app lets you place text on flat forms at a size you choose, sidestepping field auto-size entirely, and flatten the result so the font and size are locked. For interactive fields, keeping answers concise avoids the auto-shrink that makes long entries hard to read.",
  faq: [
    {
      q: "Why does my form text shrink as I type?",
      a: "The field uses auto-size, which shrinks text so longer answers still fit. It's intended behaviour. Keep answers concise to stay legible, or set a fixed font size if you control the form.",
    },
    {
      q: "Why do my answers appear in different sizes?",
      a: "Each field likely has its own font size set. On a form you built, standardise the field font size so every answer matches. On one you didn't, the sizes are baked into the fields.",
    },
    {
      q: "Why are characters in my form fields cut off?",
      a: "The field is too short for its font size, clipping the letters. Enlarge the field or reduce the font size on a form you control, or use a smaller size when filling one you don't.",
    },
    {
      q: "Why does the field font look different from the labels?",
      a: "The field's intended font isn't embedded, so your viewer substituted one. Embedding the field font when creating the form keeps it consistent across different viewers.",
    },
    {
      q: "How is this different from general PDF font issues?",
      a: "This is about fonts inside form fields — auto-size, field-level sizing, clipping. The general PDF font guide covers missing or substituted fonts across an entire document.",
    },
  ],
  related: [
    {
      label: "How to fix PDF font issues",
      path: "/guides/how-to-fix-pdf-font-issues",
    },
    {
      label: "PDF form formatting issues",
      path: "/guides/pdf-form-formatting-issues",
    },
    { label: "PDF form best practices", path: "/guides/pdf-form-best-practices" },
    { label: "Fix PDF form errors", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
