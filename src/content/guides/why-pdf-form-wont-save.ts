import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-wont-save",
  h1: "Why a PDF Form Won't Save",
  description:
    "Filled a form and the answers vanish on reopening? Why some viewers only print instead of saving field data, and the reliable ways to make your answers stick.",
  updated: "2026-06-01",
  intro: [
    "You spend ten minutes filling a form, save it, reopen it later, and every field is blank again. It's maddening, and it isn't your mistake — it's that form field values live in a separate layer from the page, and not every tool actually writes that layer back to the file when you save. Some can only print the form, never store your input.",
    "There are two reliable fixes: use a tool that genuinely saves form data, or flatten the form so your answers become permanent page content that nothing can drop. Which you choose depends on whether you still need to edit the answers later. Either way, the disappearing-answers problem is completely solvable.",
    "This guide explains why saving fails, how to confirm whether your tool is the problem, and the two dependable ways to make filled answers stay put.",
  ],
  steps: [
    {
      title: "Confirm the answers really aren't saving",
      body: "Fill a field, save, fully close the file, and reopen it. If the answer is gone, the field values aren't being written — this is a save problem, not something you did wrong.",
    },
    {
      title: "Use Save or Export, never just Print",
      body: "Choose Save or Export to write field values into the PDF. A Print-only path (common in basic viewers) produces output but never stores the editable answers — the classic cause of the vanishing data.",
    },
    {
      title: "Switch to a form-capable tool",
      body: "If your current app only prints, move the form to a dedicated PDF app or browser tool that saves form data. Reopen the saved file to confirm the answers persisted.",
    },
    {
      title: "Flatten to make answers permanent",
      body: "If you're finished editing, flatten the form. Flattening merges the values into the page, so there's no separate layer left to drop and the answers survive everywhere.",
    },
    {
      title: "Save as a new copy",
      body: "Export to a new filename so you keep both a clean blank and a saved, filled version — and never accidentally overwrite the master with an empty form.",
    },
  ],
  tips: [
    "If answers vanish, your tool is only printing, not saving the field layer — switch to one that writes form data.",
    "Flattening is the surest fix: once flattened, there's no field layer left to lose.",
    "Always reopen a saved form before relying on it; the close-and-reopen test catches the problem immediately.",
    "Keep the blank original separate so flattening your filled copy never costs you the reusable template.",
    "On phones, a 'print to PDF' shortcut usually flattens — fine if you're done, but it won't keep the form editable.",
  ],
  mobileNote:
    "The PDF Editor app writes filled answers into the file and can export a flattened copy when you're done, so nothing disappears on reopening or on the recipient's end. It saves on-device, so the details you entered stay private.",
  faq: [
    {
      q: "Why does my PDF form keep saving blank?",
      a: "Because your viewer is printing the form rather than saving its field values. The answers live in a separate field layer; if that isn't written to the file, reopening shows blanks. Use a tool that saves form data, or flatten the form.",
    },
    {
      q: "How do I make my form answers stick?",
      a: "Save or export with a form-capable tool so the field values are written into the file, then reopen to confirm. For a permanent result, flatten the form so the answers merge into the page.",
    },
    {
      q: "What does flattening do for saving?",
      a: "It merges your filled values into the page itself, leaving no separate field layer to drop. After flattening, the answers save and display reliably in any viewer.",
    },
    {
      q: "Should I overwrite the original or save a copy?",
      a: "Save a copy with a new name. That keeps a clean blank master and your filled version separate, so you never lose the reusable template or send an empty form by mistake.",
    },
    {
      q: "Is this the same as a form being read-only?",
      a: "No. A won't-save problem means your tool isn't storing field data. A read-only form actively blocks editing. If you can type but can't keep the answers, it's a save issue, not a security one.",
    },
  ],
  related: [
    {
      label: "How to save a filled PDF form",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "PDF form not working", path: "/guides/pdf-form-not-working" },
    {
      label: "Why a PDF form is read-only",
      path: "/guides/why-pdf-form-is-read-only",
    },
    { label: "How PDF forms work", path: "/guides/how-pdf-forms-work" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
