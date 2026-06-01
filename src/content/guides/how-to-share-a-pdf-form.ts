import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-a-pdf-form",
  h1: "How to Share a PDF Form for Others to Fill In",
  description:
    "Sending a blank form to be completed is different from sending a finished document. How to share a form so recipients can actually fill it, and collect the results.",
  updated: "2026-06-01",
  intro: [
    "Sharing a PDF form sounds trivial — attach it, hit send — but there's a difference between distributing a blank form for people to complete and sending a document for them to read. When you share a form, you need recipients to be able to fill it on whatever device they have, and you need their completed copies to come back in a state you can actually use.",
    "Two things commonly go wrong. The form arrives in a way that strips or hides its fields, so recipients can't type. Or the responses come back inconsistently — some flattened, some editable, some as photos of a printout. A little care at the sending stage prevents both, and makes collecting responses far less painful.",
    "This guide covers how to share a blank form so it stays fillable, how to give recipients clear instructions, and how to handle the completed copies as they return — without routing anything through a third-party upload service if the contents are sensitive.",
  ],
  steps: [
    {
      title: "Confirm the blank form is fillable before sending",
      body: "Open your form and check it yourself. If it's interactive, make sure the fields are active; if it's flat, make sure there's clear space for answers. Don't flatten a blank form — that removes the fields recipients need.",
    },
    {
      title: "Send the file, not a link to a converter",
      body: "Attach the PDF directly to email or a message, or share it through a drive the recipient already uses. Avoid routing a sensitive form through public upload tools when a plain attachment does the job.",
    },
    {
      title: "Tell recipients how to fill it",
      body: "A one-line note helps: \"Tap the fields to type, or add text on top if your viewer doesn't show fields, then export a completed copy.\" Point phone users to a proper PDF app rather than an email preview.",
    },
    {
      title: "Ask for completed copies in a usable form",
      body: "Request that people send back a saved or flattened PDF rather than a photo of a printout. Flattened copies display consistently and are easier to file and read.",
    },
    {
      title: "Collect and organise the responses",
      body: "As copies return, rename them by respondent and date so they don't blur together. Keep the blank master separate so you always have a clean template to re-send.",
    },
  ],
  tips: [
    "Never flatten the blank form you distribute — flattening removes the fields and leaves recipients nothing to fill.",
    "If recipients keep sending photos of printouts, your instructions need to be clearer about filling on screen and exporting.",
    "For sensitive forms, prefer direct attachments or a private drive over public 'fill online' websites.",
    "Give the file a clear name like 'intake-form-blank.pdf' so recipients can tell the master from their completed copy.",
    "Form behaviour can vary between viewers, so suggesting a specific reliable app heads off most 'I can't type' replies.",
  ],
  mobileNote:
    "Recipients on phones can fill your form in the PDF Editor app — it activates interactive fields and lets people add text to flat forms — then export a completed copy to send straight back. Suggesting it in your message spares the people who'd otherwise be stuck in an email preview that ignores fields.",
  faq: [
    {
      q: "How do I share a PDF form so people can fill it in?",
      a: "Send the fillable PDF as a direct attachment or via a shared drive, and don't flatten it first. Tell recipients to open it in a real PDF app, fill the fields or add text, then export a completed copy.",
    },
    {
      q: "Why can't my recipients type in the form I sent?",
      a: "They're often opening it in an email preview or viewer that ignores form fields, or the form is flat. Recommend a dedicated PDF app, and note they can add text on top if no fields appear.",
    },
    {
      q: "Should I share a form through an online fill service?",
      a: "For ordinary forms it can be convenient, but for anything sensitive, a direct attachment or private drive keeps the contents off third-party servers. Match the channel to the sensitivity.",
    },
    {
      q: "How should completed forms come back to me?",
      a: "Ask for a saved or flattened PDF rather than a photo of a printout. Flattened copies look the same everywhere and are far easier to file and process.",
    },
    {
      q: "How do I keep responses organised?",
      a: "Rename each returned file by respondent and date, store them in one folder, and keep the blank master separate so you can always re-send a clean template.",
    },
  ],
  related: [
    {
      label: "How to send a completed PDF form",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "How to send client intake forms",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Document collection workflows with PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "How to share PDFs with clients",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
