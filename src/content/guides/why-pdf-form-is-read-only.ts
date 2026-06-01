import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-is-read-only",
  h1: "Why a PDF Form Is Read-Only",
  description:
    "Your form opens locked and greyed out? Why forms are set read-only, how to tell deliberate security from a viewer quirk, and the honest options for completing one.",
  updated: "2026-06-01",
  intro: [
    "A read-only PDF form opens fine but refuses every attempt to fill it — fields greyed out, a lock icon, maybe a \"protected\" or \"secured\" notice in the title bar. Unlike a flat form (which simply has no fields) or a save problem (where answers don't persist), a read-only form has fields that exist but are deliberately switched off. Something or someone has locked it.",
    "There are a few honest reasons for this, and they matter because they change what you should do. The form's author may have secured it on purpose. The form may be certified or already signed, so changing it would break that. Or your viewer may be opening it in a read-only mode you can switch off. Telling deliberate protection from a viewer quirk is the key first step.",
    "This guide explains the causes, how to identify which you're hitting, and the legitimate ways to complete a read-only form — without trying to defeat security on a document that isn't yours to alter.",
  ],
  steps: [
    {
      title: "Check for a protected or secured notice",
      body: "Look at the title bar and document properties for words like 'secured', 'protected', or a lock icon. That signals deliberate security applied by the author — the read-only state is intentional.",
    },
    {
      title: "Rule out a viewer read-only mode",
      body: "Some apps open files in a read-only or 'protected view' by default. Look for an 'enable editing' prompt or a read-only toggle, and try a dedicated PDF app, before assuming the file itself is locked.",
    },
    {
      title: "Consider whether it's certified or signed",
      body: "If the form is already digitally signed or certified, editing would invalidate that signature, so viewers lock it. That's correct behaviour — you generally shouldn't alter a signed form.",
    },
    {
      title: "Complete it by adding text on top",
      body: "Even when fields are locked, you can often place your own text and checkmarks on the page as if it were a flat form, then export — a legitimate way to fill a read-only form.",
    },
    {
      title: "Ask the sender for an unlocked version",
      body: "If you genuinely need the interactive fields, the cleanest route is to request a version that allows input from whoever sent it. Don't try to bypass security on a document that isn't yours.",
    },
  ],
  tips: [
    "First decide: deliberate security or viewer quirk? Look for a lock icon or 'secured' notice versus an 'enable editing' prompt.",
    "Placing text on top of the page works on most read-only forms and is often the quickest legitimate route to completion.",
    "Don't try to strip protection from a form that isn't yours — if you need fields unlocked, ask the sender.",
    "A certified or signed form is locked for a good reason; altering it would break the signature it carries.",
    "Some viewers' 'protected view' is just a default — switching to a full PDF app or enabling editing may be all you need.",
  ],
  mobileNote:
    "On a phone, a read-only form can still usually be completed in the PDF Editor app by placing text and checkmarks on the page, even when its fields are locked. It works on-device, so your details stay private — and it won't tamper with a form's security, just lay your answers on top.",
  faq: [
    {
      q: "Why is my PDF form read-only?",
      a: "Either the author secured it on purpose, it's certified or already signed (so editing would break that), or your viewer opened it in a read-only mode. Check for a lock icon or 'secured' notice to tell deliberate protection from a viewer setting.",
    },
    {
      q: "How do I fill a read-only PDF form?",
      a: "Often you can place your own text and checkmarks on the page as if it were flat, then export — even when the fields are locked. If you need the interactive fields, ask the sender for an unlocked copy.",
    },
    {
      q: "Is read-only the same as not being able to type?",
      a: "It's one cause of not being able to type. A form can also refuse typing because it's flat or opened in the wrong viewer. Read-only specifically means fields exist but are deliberately disabled.",
    },
    {
      q: "Can I remove the read-only protection?",
      a: "If the form is yours and you set the protection, you can change it in a capable editor. If it's someone else's, don't try to bypass their security — request an unlocked version instead.",
    },
    {
      q: "Why does editing a signed form get blocked?",
      a: "Editing would invalidate the digital signature or certification the form carries, so viewers lock it. That's intended behaviour to keep signed documents trustworthy.",
    },
  ],
  related: [
    {
      label: "Why can't I type in a PDF form?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    { label: "PDF form not working", path: "/guides/pdf-form-not-working" },
    {
      label: "Why a PDF form won't save",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "How to password protect a PDF file",
      path: "/guides/how-to-protect-pdf-file",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
