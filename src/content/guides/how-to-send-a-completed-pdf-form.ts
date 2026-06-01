import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-a-completed-pdf-form",
  h1: "How to Send a Completed PDF Form",
  description:
    "You filled the form — now return it cleanly. How to flatten so answers can't be changed, attach it the right way, and confirm it arrived without the data getting lost.",
  updated: "2026-06-01",
  intro: [
    "Filling a form is only half the job; getting it back to the sender intact is the other half. This is the return trip — you've completed a form someone sent you and now need to deliver it so your answers arrive exactly as you entered them, can't be accidentally cleared, and land in a format the recipient can actually open.",
    "The two things that go wrong here are answers that vanish in transit (because the field data wasn't saved or flattened) and files that arrive as awkward photos of a screen. Both are avoidable with a couple of deliberate steps before you hit send. A flattened PDF attachment is almost always the right answer.",
    "This guide covers preparing the completed form, choosing how to send it, and the small confirmations that save a round of \"the form came back blank\" emails.",
  ],
  steps: [
    {
      title: "Do a final check of every answer",
      body: "Scan the whole form once more for blank required fields, the date, and your signature. Catching a missing box now is far cheaper than after it bounces back to you.",
    },
    {
      title: "Save the filled copy properly",
      body: "Export or save so the field values are written into the file. If your answers don't survive a close-and-reopen, the tool only printed — switch to one that saves form data.",
    },
    {
      title: "Flatten so the answers lock in",
      body: "Flatten the completed form before sending. This merges your answers into the page so they can't be edited or cleared by the recipient's viewer, and they display the same everywhere.",
    },
    {
      title: "Attach the PDF directly",
      body: "Send the flattened PDF as a normal email attachment, or upload it to the portal the sender specified. Avoid sending a screenshot or photo of the form unless that's explicitly all that's wanted.",
    },
    {
      title: "Confirm and keep a copy",
      body: "Note that you sent it and keep your own copy of the completed file. If it's going to a portal, watch for an on-screen or emailed confirmation that the upload succeeded.",
    },
  ],
  tips: [
    "Flattening is the single best habit for returning forms — it guarantees your answers show up for the recipient.",
    "Name the file usefully, like 'smith-application-completed.pdf', so the recipient can file it without renaming.",
    "If a portal rejects the file for size, compress it rather than re-doing your answers — the content stays intact.",
    "Keep your own completed copy; if a dispute or follow-up arises, you'll want the exact version you sent.",
    "Government and business requirements vary, so follow any specific submission instructions the sender gave over these general steps.",
  ],
  mobileNote:
    "On a phone, the PDF Editor app exports a flattened completed copy you can send straight from the share sheet — email, portal upload, or message — with your answers locked into the page. It works on-device, so the personal details on the form stay private as you send.",
  faq: [
    {
      q: "How do I make sure my answers don't disappear when I send a form?",
      a: "Save so the field values are written to the file, then flatten the form before sending. Flattening merges your answers into the page so they can't be cleared and display the same in any viewer.",
    },
    {
      q: "Should I flatten a completed form before emailing it?",
      a: "Yes, in almost all cases. Once you're done editing, flattening locks the answers in and prevents the recipient's viewer from dropping or altering them.",
    },
    {
      q: "Is it okay to send a photo of the filled form?",
      a: "Only if that's specifically what's requested. A flattened PDF is cleaner, more readable, and easier to file. Photos of screens or printouts often arrive skewed or low quality.",
    },
    {
      q: "What if the upload portal rejects my form?",
      a: "It's usually a size or format limit. Compress the PDF or check the accepted formats — you don't need to refill it. The content stays the same after compression.",
    },
    {
      q: "Should I keep a copy of what I sent?",
      a: "Yes. Keep your own completed copy in case of follow-up questions or a resubmission request, so you can resend the exact version you submitted.",
    },
  ],
  related: [
    {
      label: "How to save a filled PDF form",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "How to fill out a PDF form",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "How to share a PDF form",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "PDF form submission errors",
      path: "/guides/pdf-form-submission-errors",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
