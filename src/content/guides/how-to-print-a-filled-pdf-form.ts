import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-print-a-filled-pdf-form",
  h1: "How to Print a Filled PDF Form",
  description:
    "Printed your form and the fields came out blank? Why filled-in values sometimes don't print, and how to get a clean paper copy with every answer visible.",
  updated: "2026-06-01",
  intro: [
    "You fill a form on screen, send it to the printer, and the paper comes out with all your answers missing — just the blank form. It's one of the most common and most baffling form problems, and it has a specific cause: the answers live in the form's field layer, and some print paths skip that layer, printing only the page beneath.",
    "The fix is usually one of two things — turn on the setting that prints form field values, or flatten the form first so the answers become part of the page and can't be left out. Either way, getting a clean printout with every answer showing is straightforward once you know why it happens.",
    "This guide covers the blank-fields problem, the print settings that control it, and the broader print checks (margins, scaling) that keep a filled form looking right on paper.",
  ],
  steps: [
    {
      title: "Reproduce the problem with a print preview",
      body: "Open the print dialog and look at the preview before sending anything to the printer. If your answers are missing there too, it's a field-printing issue, not a printer fault.",
    },
    {
      title: "Enable printing of form field values",
      body: "Look for a print option like \"print form fields\" or a comments-and-forms setting set to \"document and markups.\" Switching it on tells the print path to include the field layer with your answers.",
    },
    {
      title: "If that's unavailable, flatten the form first",
      body: "Flattening merges your filled answers into the page itself. Once flattened, there's no separate field layer to omit, so every print path includes the answers. This is the most reliable fix.",
    },
    {
      title: "Check scaling and margins",
      body: "Set scaling to \"fit\" or 100% rather than a custom zoom so the form isn't cropped or shrunk. Confirm the paper size matches the form so nothing runs off the edge.",
    },
    {
      title: "Print one test page",
      body: "Print a single page first to confirm answers, layout and margins all look right before running the full document — especially for multi-page forms.",
    },
  ],
  tips: [
    "The quickest universal fix is to flatten the form, then print — a flattened form prints its answers everywhere, with no special setting needed.",
    "If the preview shows your answers but paper doesn't, the issue is in the print settings, not the file — recheck the form-fields option.",
    "A scanned, flat form never has this problem: its 'fields' are already part of the page, so they always print.",
    "For dark or shaded forms, check that field text prints in a colour that stays readable against the background.",
    "Print settings differ between apps and printers, so the exact option name varies — look for anything mentioning form fields or markups.",
  ],
  mobileNote:
    "Printing from a phone has the same trap — some print shortcuts drop field values. In the PDF Editor app you can flatten the filled form before printing or sharing to a printer, so the answers are baked into the page and come out every time.",
  faq: [
    {
      q: "Why are my form answers blank when I print?",
      a: "Because the answers are stored in the form's field layer and your print path is skipping it. Turn on the option to print form field values, or flatten the form so the answers become part of the page.",
    },
    {
      q: "What does flattening do for printing?",
      a: "Flattening merges your filled-in values into the page itself. After that, there's no separate field layer to leave out, so the answers print reliably from any app or printer.",
    },
    {
      q: "The answers show on screen but not on paper — why?",
      a: "Your viewer displays the field layer but the print settings exclude it. Look for a print option about form fields or 'document and markups' and enable it, or flatten before printing.",
    },
    {
      q: "Why is my printed form cut off at the edges?",
      a: "That's a scaling or paper-size mismatch, separate from the blank-fields issue. Set scaling to fit or 100% and match the paper size to the form.",
    },
    {
      q: "Do flat scanned forms have this problem?",
      a: "No. A flat form's answers are part of the page image, so they always print. The blank-fields issue only affects interactive forms with a separate field layer.",
    },
  ],
  related: [
    {
      label: "How to save a filled PDF form",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "PDF form not printing correctly",
      path: "/guides/pdf-form-not-printing-correctly",
    },
    {
      label: "How to fix PDF printing issues",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    {
      label: "How to send a completed PDF form",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
