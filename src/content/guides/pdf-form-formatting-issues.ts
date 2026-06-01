import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "PDF Form Formatting Issues",
  description:
    "Fields misaligned, answers overflowing, the form looking different on someone else's screen? The form-layout problems that vary by viewer, and how to get a consistent result.",
  updated: "2026-06-01",
  intro: [
    "A form can look perfect on your screen and arrive looking wrong on someone else's — fields nudged off their lines, answers overflowing their boxes, checkboxes misaligned, the whole layout subtly shifted. Because form fields are drawn by each viewer rather than fixed into the page, their exact appearance can vary, and that's the root of most form formatting complaints.",
    "These are distinct from general PDF formatting problems, which usually trace back to the source document's margins and spacing. Form formatting issues are about the field layer: how fields sit relative to the page, how answers fit inside them, and how consistently that renders across different apps. The fixes are correspondingly form-specific.",
    "This guide covers the common form-layout problems, why they happen, and the single most reliable cure — flattening — that makes a form look the same everywhere.",
  ],
  steps: [
    {
      title: "Confirm it's a viewer difference",
      body: "Open the form in two different PDF apps. If the layout shifts between them, the field rendering is the issue, not the file — fields are being drawn slightly differently by each viewer.",
    },
    {
      title: "Fix answers overflowing their fields",
      body: "If text spills past a field's edge, the field is too small or the answer too long. On a form you control, enlarge the field; when filling, keep answers within the visible space or use auto-size.",
    },
    {
      title: "Realign fields that sit off their lines",
      body: "Fields drifting above or below their labels usually means the field positions don't match the page beneath. If it's your form, reposition the fields; if not, adding text on top can be more reliable than the misaligned field.",
    },
    {
      title: "Flatten for a consistent result",
      body: "Flattening merges the fields into the page, fixing their position and appearance. After flattening, the form looks identical in every viewer — the most reliable cure for layout that varies.",
    },
    {
      title: "Prefer a flat template when consistency is critical",
      body: "If a form must look the same for everyone, a well-designed flat template (no interactive field layer) avoids viewer-to-viewer rendering differences entirely.",
    },
  ],
  tips: [
    "Open the form in two apps to confirm a layout problem is viewer rendering rather than a damaged file.",
    "Flattening is the most reliable fix — it locks field positions and appearance into the page for every viewer.",
    "When filling a form with misaligned fields, placing text on top can land more precisely than fighting the field.",
    "If you're building a form that must look identical everywhere, a flat template sidesteps field-rendering differences.",
    "Form appearance can vary between PDF viewers by design, so 'it looks wrong on their screen' is usually rendering, not corruption.",
  ],
  mobileNote:
    "The PDF Editor app lets you flatten a completed form so its layout is fixed before you send it, so it won't shift on the recipient's screen. For forms with awkward fields, you can also place text precisely on the page and flatten — a consistent result on any device.",
  faq: [
    {
      q: "Why does my PDF form look different on someone else's screen?",
      a: "Form fields are drawn by each viewer, so their position and appearance can vary between apps. Flattening the form merges the fields into the page so it looks identical everywhere.",
    },
    {
      q: "Why do my answers overflow the field boxes?",
      a: "The field is too small for the answer, or the answer is too long. Enlarge the field on a form you control, keep answers within the visible space, or rely on auto-size to fit them.",
    },
    {
      q: "How do I fix fields that sit off their lines?",
      a: "The field positions don't match the page beneath. Reposition the fields if it's your form; if not, placing your text directly on the page can be more reliable than the misaligned field.",
    },
    {
      q: "What's the most reliable way to keep a form's layout consistent?",
      a: "Flatten it. Flattening fixes the field appearance into the page so it renders the same in any viewer. For forms you build, a flat template avoids the issue from the start.",
    },
    {
      q: "How is this different from general PDF formatting problems?",
      a: "This is about the field layer — alignment, overflow, viewer rendering. General PDF formatting problems usually come from the source document's margins and spacing, not its form fields.",
    },
  ],
  related: [
    {
      label: "How to fix PDF formatting problems",
      path: "/guides/how-to-fix-pdf-formatting-problems",
    },
    {
      label: "PDF form font problems",
      path: "/guides/pdf-form-font-problems",
    },
    {
      label: "PDF form compatibility problems",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF form best practices", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
