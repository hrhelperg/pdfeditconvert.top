import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-type-in-a-pdf-form",
  h1: "Why Can't I Type in a PDF Form?",
  description:
    "You click a field and nothing happens. The three usual reasons — a flat form, the wrong viewer, or a locked file — and exactly what to do about each.",
  updated: "2026-06-01",
  intro: [
    "You open a form, click where your name should go, and… nothing. No cursor, no box, no way to type. It feels like the form is broken, but it almost never is. The inability to type comes down to one of three specific causes, each with a clear fix once you can name it.",
    "The first and most common is that the form is flat — there are no interactive fields to type into, just a picture of a form. The second is that you're opening it in a viewer that can't handle form fields properly. The third is that the form is locked or read-only, deliberately preventing input. Telling them apart takes a couple of quick checks.",
    "This guide walks the three causes in order, shows how to confirm which one you're hitting, and gives the practical workaround for each so you can get your answers onto the page.",
  ],
  steps: [
    {
      title: "Confirm whether the form has fields at all",
      body: "Tap several different blanks. If not one produces a cursor or highlight anywhere on the page, the form is almost certainly flat — there are no fields to type into, by design or because it was scanned.",
    },
    {
      title: "If it's flat, add text on top",
      body: "Flat forms can't be typed into, but you can place your own text and checkmarks over the page with a PDF editor's text tool. That's the intended way to complete a scanned or fieldless form.",
    },
    {
      title: "Rule out the viewer",
      body: "Some browsers and lightweight previewers show a form but ignore its fields. Open the same file in a dedicated PDF app. If fields suddenly work, the original viewer was the problem.",
    },
    {
      title: "Check for a locked or read-only form",
      body: "If fields exist but reject input everywhere, the form may be secured or marked read-only. Look for a lock icon or a \"protected\" notice. A read-only form blocks typing on purpose.",
    },
    {
      title: "Work around a locked form",
      body: "For a read-only form, you can often still place text on top as if it were flat, or ask the sender for an unlocked version. Don't try to defeat security on a form that isn't yours to alter.",
    },
  ],
  tips: [
    "The single fastest diagnosis: try the same file in a proper PDF app. It separates \"flat form\" from \"bad viewer\" immediately.",
    "Adding text on top works on nearly any form, flat or locked, and is often the quickest route to a completed page.",
    "A form that types fine on a computer but not in a phone's email preview is a viewer issue — open it in a real PDF app instead.",
    "If only some fields reject typing, those specific fields may be calculated or locked while the rest stay open.",
    "Form appearance and behaviour can vary between PDF viewers, so \"it doesn't work here\" rarely means \"it's broken everywhere.\"",
  ],
  mobileNote:
    "On a phone, the PDF Editor app types into interactive fields where they exist and lets you place text directly on flat or locked forms where they don't — so a form that wouldn't accept typing in your email preview becomes fillable. It works on-device, with nothing uploaded.",
  faq: [
    {
      q: "Why can't I type in my PDF form?",
      a: "Usually one of three reasons: the form is flat with no fields, your viewer doesn't support form fields, or the form is locked/read-only. Identify which, then either add text on top, switch viewers, or request an unlocked copy.",
    },
    {
      q: "How do I type in a flat PDF form?",
      a: "You can't type into fields because there aren't any. Instead, use a PDF editor to place text and checkmarks directly on the page where each answer belongs, then export the file.",
    },
    {
      q: "Why does the form work on my computer but not my phone?",
      a: "Your phone is probably previewing it in an app that ignores form fields. Open the file in a dedicated PDF app and the fields should become active.",
    },
    {
      q: "What does a read-only PDF form mean?",
      a: "It's a form the author secured so the fields can't be edited or typed into. You can often still lay text on top, or ask the sender for a version that allows input.",
    },
    {
      q: "Can a form be partly typeable?",
      a: "Yes. Some fields may be locked or auto-calculated while others accept input. Fill the open ones and add text manually for any you can't reach.",
    },
  ],
  related: [
    {
      label: "How to fill out a PDF form",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Why a PDF form is read-only",
      path: "/guides/why-pdf-form-is-read-only",
    },
    {
      label: "PDF form fields missing",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "PDF form not working", path: "/guides/pdf-form-not-working" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
