import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-fields-missing",
  h1: "PDF Form Fields Missing? Here's Why",
  description:
    "Opened a form and the fields aren't there? Why interactive fields disappear in some viewers, how to get them back, and what to do when there were never any to begin with.",
  updated: "2026-06-01",
  intro: [
    "You open a form expecting boxes to type into and there's nothing — just a flat-looking page, or fields that show as empty outlines you can't interact with. Missing form fields are alarming but usually harmless: the fields are still in the file; your viewer just isn't rendering them. Occasionally the form never had fields at all and was always meant to be filled by hand.",
    "Two scenarios cover almost every case. In the first, the form is interactive but you've opened it somewhere that ignores the field layer — a browser preview, an email viewer, a basic image-style PDF reader. In the second, the form is genuinely flat, so there are no fields to find and you complete it by placing text on top.",
    "This guide helps you tell the two apart and get the fields back when they exist — without assuming the file is damaged, because it almost never is.",
  ],
  steps: [
    {
      title: "Rule out the viewer first",
      body: "Open the same file in a dedicated PDF app rather than a browser tab or email preview. If the fields reappear, they were always there — the previous viewer just wasn't rendering the field layer.",
    },
    {
      title: "Check whether fields ever existed",
      body: "If no capable app shows fields anywhere on the page, the form is flat — it was scanned or exported without a field layer. There's nothing missing; it was simply never interactive.",
    },
    {
      title: "Update or switch your PDF app",
      body: "An outdated or minimal viewer may render the page but skip fields. A current, full-featured PDF app is the most reliable way to display and use interactive fields.",
    },
    {
      title: "Re-download if the file seems incomplete",
      body: "A partial or interrupted download can drop content. Download the form again from the source and reopen it — a fresh, complete copy sometimes restores fields that appeared missing.",
    },
    {
      title: "Fill a flat form by adding text",
      body: "If the form genuinely has no fields, complete it the flat way: place text and checkmarks on the page with a PDF editor, then export. You don't need the fields to finish it.",
    },
  ],
  tips: [
    "Before assuming damage, switch viewers — a different app is the fastest test for whether fields actually exist.",
    "Browser previews and email viewers are the usual culprits for 'disappearing' fields; a real PDF app fixes most cases.",
    "If fields show as empty outlines you can't click, that's often a viewer that draws but doesn't activate them — switch apps.",
    "A truly flat form isn't missing anything — adding text on top is the intended way to fill it.",
    "Advanced dynamic forms sometimes only reveal fields in specific software; if so, the form may need that program or an alternative format.",
  ],
  mobileNote:
    "On a phone, missing fields are usually a preview that won't render them. Open the form in the PDF Editor app: it activates interactive fields where they exist and lets you place text on the page where they don't — so a form that looked field-less in email becomes fillable.",
  faq: [
    {
      q: "Why are the form fields missing from my PDF?",
      a: "Most often your viewer isn't rendering the field layer — common with browser previews and email viewers. Open the file in a dedicated PDF app and the fields usually reappear. If no app shows them, the form is simply flat.",
    },
    {
      q: "Did I lose the fields, or were there never any?",
      a: "Open it in a capable PDF app. If fields appear, they were always there and the old viewer hid them. If none appear anywhere, the form is flat and never had an interactive field layer.",
    },
    {
      q: "Can a damaged download cause missing fields?",
      a: "Occasionally. A partial download can drop content. Re-download the form from the source and reopen it before concluding the fields are truly gone.",
    },
    {
      q: "How do I fill a form that has no fields?",
      a: "Place your own text and checkmarks directly on the page with a PDF editor, then export. Flat forms are completed this way — no fields required.",
    },
    {
      q: "Why do fields show as outlines I can't click?",
      a: "Your viewer is drawing the field boxes but not making them interactive. Switch to a full-featured PDF app, which both displays and activates the fields.",
    },
  ],
  related: [
    { label: "PDF form not working", path: "/guides/pdf-form-not-working" },
    {
      label: "Why can't I type in a PDF form?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "PDF form compatibility problems",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "What is a PDF form?", path: "/guides/what-is-a-pdf-form" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
