import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-a-fillable-pdf",
  h1: "How to Create a Fillable PDF",
  description:
    "What it really takes to make a PDF people can fill in — interactive fields versus a simple flat template — and which approach fits the tools you have.",
  updated: "2026-06-01",
  intro: [
    "There are two honest ways to make a PDF people can fill in, and they're very different in effort and result. The polished route is a true interactive form: a PDF with real fields — text boxes, checkboxes, dropdowns — that recipients tap and type into. The simpler route is a flat template: a clean, well-spaced PDF with clear lines and labels that people complete by adding text on top.",
    "It's worth being upfront: building genuine interactive form fields generally needs dedicated form-design software, and the result can still behave differently across PDF viewers. A flat template, by contrast, can be made from almost any document tool and works reliably everywhere — at the cost of recipients doing a little more work to place their answers.",
    "This guide covers both approaches, when each makes sense, and how to design either so the finished form is easy to complete. It won't pretend a browser tool can conjure complex interactive fields it can't — instead it points you to the method that fits what you actually have.",
  ],
  steps: [
    {
      title: "Start from a clean, well-spaced layout",
      body: "Design the form in a document tool first: clear labels, generous blank space for answers, obvious checkboxes, and a signature line. Good spacing matters for both interactive and flat versions.",
    },
    {
      title: "Decide: interactive fields or flat template",
      body: "If recipients will fill it often and you want a tidy, tap-to-type experience, aim for interactive fields. If you need something quick that works in any viewer, a flat template is the pragmatic choice.",
    },
    {
      title: "For a flat template, export to PDF",
      body: "Export your laid-out document straight to PDF. The lines and labels become the page; recipients add text on top with any PDF editor. This works from nearly any tool you already use.",
    },
    {
      title: "For interactive fields, use form-design software",
      body: "Creating real text fields, checkboxes and dropdowns needs software built for it. Add each field over the layout, name it clearly, and set its type. Expect to test the result in more than one viewer.",
    },
    {
      title: "Test the form before sending it out",
      body: "Open your form the way recipients will — on a phone and a computer. Fill it yourself end to end. Fix any field that's too small, mislabelled, or sits off its line before distributing.",
    },
  ],
  tips: [
    "A clean flat template that fills reliably everywhere often beats a fancy interactive form that breaks in some viewers.",
    "Leave more answer space than you think you need — cramped fields are the top complaint people have about forms.",
    "Name interactive fields meaningfully; it helps both completion and any later processing of the responses.",
    "Avoid advanced dynamic form features unless you know your recipients' software supports them — some PDF viewers don't.",
    "Whichever route you take, fill the form yourself first; you'll catch the awkward bits no design review surfaces.",
  ],
  mobileNote:
    "Recipients can complete your form on a phone with the PDF Editor app whether it's interactive or flat — it taps into real fields and lets people place text on flat templates. If you're building a flat template, test it in the app on a phone to confirm the answer spaces are big enough for thumbs.",
  faq: [
    {
      q: "Can I create a fillable PDF for free?",
      a: "You can make a flat fillable template for free from almost any document tool by exporting to PDF — recipients add text on top. Building true interactive fields usually needs dedicated form-design software.",
    },
    {
      q: "What's the difference between interactive and flat fillable PDFs?",
      a: "An interactive PDF has real fields people tap and type into. A flat template is a clean page where people place their own text. Interactive is tidier; flat is simpler to make and works in every viewer.",
    },
    {
      q: "Do interactive PDF forms work everywhere?",
      a: "Not always. Standard fields are widely supported, but form appearance and advanced features can vary between PDF viewers, and dynamic forms may not open at all in some apps. Test before relying on them.",
    },
    {
      q: "Which approach should I choose?",
      a: "If the form will be reused heavily and you want a polished experience, invest in interactive fields. If you need it done quickly and reliably, a well-designed flat template is the safer bet.",
    },
    {
      q: "How do I make a flat template easy to fill?",
      a: "Use clear labels, plenty of blank space, visible lines or boxes for each answer, and an obvious signature area. Then fill it yourself once to confirm everything has room.",
    },
  ],
  related: [
    { label: "What is a PDF form?", path: "/guides/what-is-a-pdf-form" },
    { label: "How PDF forms work", path: "/guides/how-pdf-forms-work" },
    { label: "PDF form best practices", path: "/guides/pdf-form-best-practices" },
    {
      label: "How to share a PDF form",
      path: "/guides/how-to-share-a-pdf-form",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
