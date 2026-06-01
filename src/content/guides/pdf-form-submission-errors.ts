import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-submission-errors",
  h1: "PDF Form Submission Errors",
  description:
    "A form's Submit button fails or does nothing? Why built-in submit buttons depend on the issuer's server, what the errors mean, and the reliable manual way to send your form.",
  updated: "2026-06-01",
  intro: [
    "Some PDF forms have a Submit button built in — press it and the form is supposed to send itself somewhere. When it works, it's convenient; when it doesn't, it's baffling, because the button just fails, throws a cryptic error, or appears to do nothing at all. The reason is that a submit button doesn't send the form on its own: it tries to hand the data to a destination the form's issuer set up, and that link is often the part that breaks.",
    "These submit buttons usually post the form's data to a web address or email controlled by whoever created the form. If that server is down, the address has changed, or your viewer blocks the action for security, the submission fails — and none of that is something you can fix from your side. The good news is there's almost always a reliable manual fallback.",
    "This guide explains what submit buttons actually do, what the common failures mean, and how to get your completed form to its destination when the button won't cooperate. It's distinct from upload errors on a web portal, which is a different problem.",
  ],
  steps: [
    {
      title: "Understand what Submit does",
      body: "A form's Submit button sends the field data to a destination — a web address or email — that the issuer configured. It's not self-contained; it depends on that destination still working and your viewer allowing the action.",
    },
    {
      title: "Read the error for a clue",
      body: "A message about a server, network, or blocked action points to the destination or a security restriction, not your file. 'Nothing happened' often means your viewer silently blocked the submit for safety.",
    },
    {
      title: "Try a full-featured PDF app",
      body: "Basic and browser viewers frequently block or ignore submit actions. Opening the completed form in a dedicated PDF app sometimes lets the button work as intended.",
    },
    {
      title: "Fall back to manual sending",
      body: "If the button still fails, save and flatten the completed form, then send it manually — email it to the address on the form, or upload it to the issuer's portal. This bypasses the broken submit entirely.",
    },
    {
      title: "Confirm and keep a copy",
      body: "When you send manually, keep your flattened copy and watch for a confirmation. If the form was meant to reach a specific inbox or portal, the issuer's instructions tell you where.",
    },
  ],
  tips: [
    "A failing Submit button is usually the issuer's destination, not your file — manual sending is the dependable fallback.",
    "Save and flatten your answers before sending manually, so the recipient gets a locked, complete copy.",
    "'Nothing happened' on Submit often means your viewer blocked the action for security; a dedicated app may allow it.",
    "Submit errors are different from portal upload errors — if you're uploading a file to a website, that's a separate fix.",
    "Check the form for a contact email or instructions; issuers often provide a manual route for exactly this situation.",
  ],
  mobileNote:
    "If a form's Submit button fails on a phone, the PDF Editor app lets you flatten the completed form and send it manually from the share sheet — email or portal upload — so a broken submit action never traps your answers. It all works on-device.",
  faq: [
    {
      q: "Why does the Submit button on my PDF form not work?",
      a: "The button sends your data to a destination the issuer set up — a server or email. If that's down, changed, or your viewer blocks the action for security, it fails. That's outside your control; send the form manually instead.",
    },
    {
      q: "What does it mean when Submit does nothing?",
      a: "Your viewer most likely blocked the submit action silently for safety. Try a full-featured PDF app, or skip the button and send the completed form manually.",
    },
    {
      q: "How do I submit the form if the button is broken?",
      a: "Save and flatten the completed form, then send it the manual way: email it to the address on the form or upload it to the issuer's portal. This bypasses the submit action entirely.",
    },
    {
      q: "Is a submission error the same as an upload error?",
      a: "No. A submission error is the form's built-in Submit button failing. An upload error is a website rejecting a file you're uploading. They have different causes and fixes.",
    },
    {
      q: "Could the form's data have sent even though I got an error?",
      a: "Possibly not — if you saw an error, assume it didn't arrive. Send manually and keep your own copy, and look for a confirmation so you know it reached the destination.",
    },
  ],
  related: [
    {
      label: "How to send a completed PDF form",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "How to fix PDF upload errors",
      path: "/guides/how-to-fix-pdf-upload-errors",
    },
    { label: "PDF form not working", path: "/guides/pdf-form-not-working" },
    {
      label: "PDF form compatibility problems",
      path: "/guides/pdf-form-compatibility-problems",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
