import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "PDF Form Not Printing Correctly",
  description:
    "Form prints with blank fields, shifted text or cut edges? The form-specific print problems — missing field values especially — and the settings that fix each one.",
  updated: "2026-06-01",
  intro: [
    "Forms print badly in ways ordinary PDFs don't. The most common and confusing is filled fields coming out blank — you completed everything on screen, but the paper shows only the empty form. Close behind are field text that shifts off its line, checkboxes that don't print, and edges that get cut off. Each has a specific, fixable cause rooted in how form fields print differently from page content.",
    "The headline issue — blank fields on paper — happens because filled answers live in the form's field layer, and some print paths skip that layer entirely. The fix is either a print setting that includes form fields, or flattening the form so the answers become part of the page. The other problems are about scaling and field rendering, each with its own setting.",
    "This guide focuses on the form-specific print problems. For general PDF printing issues like wrong page sizes across any document, the broader printing guide goes wider.",
  ],
  steps: [
    {
      title: "Fix blank fields: print field values or flatten",
      body: "If filled fields print blank, enable the option to print form fields (sometimes 'document and markups'), or flatten the form first so the answers merge into the page and always print.",
    },
    {
      title: "Fix shifted field text",
      body: "If field text prints out of place or in the wrong font, the viewer is rendering fields differently for print. Flattening locks the appearance you see on screen so it prints the same way.",
    },
    {
      title: "Fix missing checkboxes and marks",
      body: "Checkmarks that vanish on paper are the same field-layer issue as blank text. The print-form-fields setting or a flatten step brings them back along with the rest of your answers.",
    },
    {
      title: "Fix cut-off edges",
      body: "Set scaling to 'fit' or 100% rather than a custom zoom, and match the paper size to the form. This is a scaling problem, separate from the field-layer issue, but common on dense forms.",
    },
    {
      title: "Print one page to confirm",
      body: "After changing settings, print a single page first. Confirm the answers, alignment and margins all look right before committing the whole multi-page form to paper.",
    },
  ],
  tips: [
    "Flattening before printing is the universal fix for blank or shifted fields — a flattened form prints its answers everywhere with no special setting.",
    "If answers show on screen but not on paper, it's a print setting, not the file — look for the form-fields option.",
    "Scaling and paper-size problems are separate from the blank-fields issue; fix them with 'fit'/100% and matching paper.",
    "Flat scanned forms don't suffer the blank-field problem because their answers are already part of the page.",
    "Print option names vary by app and printer, so look for anything mentioning form fields, markups, or comments.",
  ],
  mobileNote:
    "Phone print shortcuts can drop field values just like desktop ones. In the PDF Editor app, flatten the completed form before printing or sharing to a printer so every answer is baked into the page and prints reliably.",
  faq: [
    {
      q: "Why does my form print with blank fields?",
      a: "The filled answers are in the form's field layer, and your print path is skipping it. Enable the option to print form fields, or flatten the form so the answers become part of the page and always print.",
    },
    {
      q: "Why does the field text print in the wrong place or font?",
      a: "The viewer renders fields differently for printing. Flatten the form first — flattening fixes the appearance to what you see on screen, so it prints identically.",
    },
    {
      q: "My checkmarks don't print — why?",
      a: "Same cause as blank text: checkboxes are part of the field layer. The print-form-fields setting or a flatten step prints them along with your other answers.",
    },
    {
      q: "Why is my printed form cut off at the edges?",
      a: "That's a scaling or paper-size mismatch, not a field issue. Set scaling to fit or 100% and match the paper size to the form's page size.",
    },
    {
      q: "How is this different from general PDF printing problems?",
      a: "This covers form-specific issues — chiefly blank field values. The general PDF printing guide handles document-wide problems like wrong sizes and cropping across any PDF.",
    },
  ],
  related: [
    {
      label: "How to print a filled PDF form",
      path: "/guides/how-to-print-a-filled-pdf-form",
    },
    {
      label: "How to fix PDF printing issues",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    { label: "PDF form not working", path: "/guides/pdf-form-not-working" },
    { label: "Fix PDF form errors", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
