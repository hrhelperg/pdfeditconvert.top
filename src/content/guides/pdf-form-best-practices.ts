import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-best-practices",
  h1: "PDF Form Best Practices",
  description:
    "Design forms people actually finish: clear labels, real spacing, sensible fields, an obvious signature area, and a flatten step. Practical rules for makers and senders.",
  updated: "2026-06-01",
  intro: [
    "A form's job is to get completed accurately and returned without friction. Most forms that fail do so for boring, fixable reasons: cramped fields, ambiguous labels, no room to write, or a layout that breaks the moment someone opens it on a phone. Good form design isn't about looking clever — it's about removing every small reason a person might give up or get it wrong.",
    "These best practices apply whether you're building interactive forms or flat templates, and whether you're a business collecting intake details or anyone sending a form to be filled. They also cover the sending side: how to distribute a form so it stays fillable and comes back usable. None of it is complicated; it's mostly discipline.",
    "Treat this as the reference the other form guides point back to. If you only adopt a handful of these, pick clear labels, generous spacing, and flattening on return — those three prevent most form pain.",
  ],
  steps: [
    {
      title: "Label every field unambiguously",
      body: "Each field should make plain what goes in it, including the format where it matters (date style, one character per box). Ambiguous labels produce wrong answers you then have to chase.",
    },
    {
      title: "Give answers real room",
      body: "Under-sized fields are the top complaint about forms. Leave more space than you think you need, especially for names, addresses and free-text answers, so nothing gets cramped or cut off.",
    },
    {
      title: "Ask only what you need",
      body: "Every extra field lowers completion and adds data you must then handle. Trim anything that isn't genuinely necessary at this stage. Shorter forms come back faster and fuller.",
    },
    {
      title: "Make the signature area obvious",
      body: "If a signature is needed, give it a clear, well-placed area and a date field beside it. People miss signatures more than any other field; an obvious area prevents the bounce-back.",
    },
    {
      title: "Distribute and return correctly",
      body: "Send blank forms unflattened so the fields survive, recommend a reliable PDF app, and ask for flattened copies back so answers lock in and display the same everywhere.",
    },
  ],
  tips: [
    "Fill your own form once on a phone before sending it — you'll catch every cramped field and unclear label instantly.",
    "Clear labels, generous spacing, and flattening on return are the three habits that prevent most form problems.",
    "Don't flatten a blank form you're distributing; flattening removes the fields recipients need.",
    "Match field formats to what you'll do with the data — consistent date and number formats save cleanup later.",
    "Keep expectations honest: form appearance can vary between viewers, so a flat template or flattened return is the most reliable across the board.",
  ],
  mobileNote:
    "Since most people fill forms on a phone, test yours in the PDF Editor app on a phone before you send it: confirm fields are tappable or that a flat template has room for thumbed-in text, that the signature area is reachable, and that a flattened export looks right.",
  faq: [
    {
      q: "What makes a PDF form easy to fill?",
      a: "Clear, unambiguous labels; generous space for every answer; only the fields you genuinely need; and an obvious signature area. Then test it yourself on a phone, since that's where most people will complete it.",
    },
    {
      q: "Should I send forms interactive or flat?",
      a: "Interactive is tidier where you can build it well, but a clean flat template works in every viewer. Whichever you choose, clear labels and real spacing matter more than the field type.",
    },
    {
      q: "Why shouldn't I flatten a blank form before sending?",
      a: "Flattening merges the field layer into the page, removing the interactive fields. Recipients would have nothing to type into. Only flatten completed forms on return.",
    },
    {
      q: "How do I stop people forgetting the signature?",
      a: "Give the signature a clear, well-placed area with a date field beside it. Missed signatures are the most common cause of forms bouncing back, and an obvious area fixes most of it.",
    },
    {
      q: "How many fields is too many?",
      a: "Any field that isn't needed at this stage is too many — each one lowers completion. Ask for the minimum now and collect the rest later if you actually need it.",
    },
  ],
  related: [
    {
      label: "How to create a fillable PDF",
      path: "/guides/how-to-create-a-fillable-pdf",
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
      label: "PDF form formatting issues",
      path: "/guides/pdf-form-formatting-issues",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
