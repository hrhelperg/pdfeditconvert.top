import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-save-a-filled-pdf-form",
  h1: "How to Save a Filled PDF Form",
  description:
    "Fill a form, then watch your answers disappear? How to save filled form data reliably, why some viewers don't, and when to flatten before sending.",
  updated: "2026-06-01",
  intro: [
    "Few PDF moments are more annoying than filling a long form, closing it, reopening it, and finding every field blank again. The work isn't gone because you did anything wrong — it's because the answers live in the form's field layer, and not every tool actually writes that layer back into the file when you save.",
    "Saving a filled form reliably comes down to two things: using a tool that stores field values (not just one that prints them), and deciding whether to keep the form editable or flatten it so the answers become permanent. Get those two right and your answers stick every time, on any device that opens the file afterward.",
    "This guide explains exactly how to save filled answers, why some viewers quietly drop them, and when flattening is the right move before you send a form back.",
  ],
  steps: [
    {
      title: "Fill the form completely first",
      body: "Enter every answer, tick the checkboxes, and add any signature before saving. Saving partway is fine, but a final pass first means you save a finished file rather than a half-done one.",
    },
    {
      title: "Use Save or Export, not just Print",
      body: "Choose Save or Export to write the field values into the PDF. Some basic viewers only offer Print, which produces paper or a flat copy but never stores the editable answers — the classic cause of vanished data.",
    },
    {
      title: "Save as a new copy",
      body: "Export to a new filename like \"application-completed.pdf\" rather than overwriting the blank. You keep a clean original and a saved, filled version side by side.",
    },
    {
      title: "Decide whether to flatten",
      body: "If you still need to change answers, keep it as an interactive form. If you're sending it for good, flatten it so the values merge into the page and can't be cleared or edited.",
    },
    {
      title: "Reopen to confirm it stuck",
      body: "Close and reopen the saved file before sending. If your answers are still there, the field values were written correctly. If they're gone, the tool only printed — switch to one that saves form data.",
    },
  ],
  tips: [
    "If answers keep vanishing, the tool isn't writing the field layer. Use a form-capable editor that genuinely saves field values.",
    "Flattening is the most reliable way to guarantee answers display everywhere — once flattened, there's no field layer left to drop.",
    "Keep the blank original separate; flattening your filled copy shouldn't cost you a reusable template.",
    "On phones, \"share\" or \"export\" usually saves the data; a print-to-PDF shortcut may flatten it, which is fine if you're done editing.",
    "Name files clearly — blank, draft, and final — so you never email the empty form by mistake.",
  ],
  mobileNote:
    "The PDF Editor app saves filled answers into the file and can export a flattened copy when you're ready to send, so nothing gets cleared on the recipient's end. It all happens on-device, so the details you enter aren't uploaded anywhere.",
  faq: [
    {
      q: "Why do my PDF form answers disappear after saving?",
      a: "Because the tool printed the form rather than saving the field values. Field answers live in a separate layer; if it isn't written back to the file, reopening shows the blanks again. Use a tool that saves form data.",
    },
    {
      q: "Should I flatten a form before sending it?",
      a: "If you're finished editing, yes. Flattening merges your answers into the page so they can't be cleared and display the same in every viewer. Keep an unflattened copy only if you might revise it.",
    },
    {
      q: "How do I keep the form editable but still save my answers?",
      a: "Save or export as an interactive PDF without flattening. A form-capable tool stores the field values so you can reopen and change them later.",
    },
    {
      q: "Is saving a filled form private?",
      a: "It depends on the tool. The PDF Editor app and local browser tools save on your device, so the personal details you entered aren't sent anywhere. Upload-based tools handle your file on a server.",
    },
    {
      q: "Can I save a flat form I filled with text on top?",
      a: "Yes. Since flat forms have no field layer, your added text is part of the page once exported, so it always saves and displays reliably.",
    },
  ],
  related: [
    {
      label: "How to fill out a PDF form",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    { label: "How PDF forms work", path: "/guides/how-pdf-forms-work" },
    {
      label: "Why a PDF form won't save",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "How to send a completed PDF form",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
