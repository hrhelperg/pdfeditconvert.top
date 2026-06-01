import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-working",
  h1: "PDF Form Not Working? Start Here",
  description:
    "A PDF form misbehaving has a handful of usual causes. A quick triage to identify which one you've hit — fields missing, won't type, won't save, read-only — and where to fix it.",
  updated: "2026-06-01",
  intro: [
    "\"My PDF form isn't working\" covers a lot of different problems, and the fix depends entirely on which one you've actually got. The form won't let you type, the fields have vanished, your answers won't save, it opens read-only, or it just behaves oddly. Each has a specific cause and a specific solution — the trick is naming the symptom first.",
    "This page is a triage. Rather than one giant fix-all, it helps you identify which problem you're facing in a few seconds, then points you to the guide that handles it. Most form problems aren't faults in the file at all; they're a mismatch between the form and the viewer you opened it in, or a deliberate setting like read-only protection.",
    "Work through the quick checks below. They'll tell you whether you're dealing with a flat form, a viewer problem, a save problem, a security setting, or a compatibility issue — and where to go next.",
  ],
  steps: [
    {
      title: "Can you see fields at all?",
      body: "If form fields are missing or the page looks incomplete, that's a fields-missing problem — usually a viewer that doesn't render the field layer. See the fields-missing guide for the fix.",
    },
    {
      title: "Fields are there but you can't type?",
      body: "If you tap a field and nothing happens, the form may be flat, opened in the wrong viewer, or read-only. The 'can't type' guide walks through telling those apart.",
    },
    {
      title: "Answers disappear after saving?",
      body: "If you fill the form, save, reopen, and it's blank again, the field values aren't being written to the file. The 'won't save' guide covers saving form data reliably.",
    },
    {
      title: "Form opens read-only or locked?",
      body: "If everything is greyed out or you see a protected notice, the form is secured against editing. The read-only guide explains your options without defeating security you shouldn't.",
    },
    {
      title: "Works in one app but not another?",
      body: "If the form behaves in one program and breaks in another, it's a compatibility issue — possibly an advanced form type. See the compatibility guide, or try the consolidated fix checklist.",
    },
  ],
  tips: [
    "Name the symptom before trying fixes — the right solution depends entirely on which problem you have.",
    "The fastest single test for many issues: open the same file in a dedicated PDF app. It separates 'broken form' from 'bad viewer' instantly.",
    "A form that won't behave is rarely truly broken; most causes are viewer mismatches or deliberate settings.",
    "If you just need it done, placing text on top of the page works on nearly any form regardless of the underlying problem.",
    "Form appearance and behaviour can vary between PDF viewers, so 'not working here' seldom means 'broken everywhere'.",
  ],
  mobileNote:
    "Many 'form not working' reports are simply an email preview or basic viewer ignoring the fields. Opening the file in the PDF Editor app activates interactive fields where they exist and lets you place text on flat or locked forms where they don't — on-device, with nothing uploaded.",
  faq: [
    {
      q: "Why isn't my PDF form working?",
      a: "It's almost always one of a few things: the form is flat with no fields, your viewer doesn't render fields, the answers aren't saving, the form is read-only, or it uses features your app doesn't support. Identify the symptom, then apply the matching fix.",
    },
    {
      q: "What's the quickest thing to try first?",
      a: "Open the same file in a dedicated PDF app rather than an email preview or browser. That single step resolves a large share of 'form not working' problems, which are really viewer mismatches.",
    },
    {
      q: "How do I know if the form is broken or just my app?",
      a: "Try it in a different, capable PDF app. If it works there, your original viewer was the problem. If it fails everywhere, it may be an advanced form type or a genuinely damaged file.",
    },
    {
      q: "I just need to fill it — what's the universal workaround?",
      a: "Place your own text and checkmarks on top of the page with a PDF editor. This works on flat, locked and field-less forms alike, regardless of the underlying cause.",
    },
    {
      q: "Where do I go for my specific problem?",
      a: "Use the checks above to match your symptom — fields missing, can't type, won't save, read-only, or compatibility — and follow the linked guide for that issue, or the consolidated fix checklist.",
    },
  ],
  related: [
    {
      label: "PDF form fields missing",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Why can't I type in a PDF form?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Why a PDF form won't save",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "PDF form compatibility problems",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Fix PDF form errors", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
