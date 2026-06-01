import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-compatibility-problems",
  h1: "PDF Form Compatibility Problems",
  description:
    "A form that opens in one program and breaks in another usually uses features not every viewer supports. How to spot dynamic forms, what causes the mismatch, and your options.",
  updated: "2026-06-01",
  intro: [
    "Sometimes a form works flawlessly in one program and falls apart in another — fields don't appear, a warning says \"please open in a different viewer,\" or the page is blank with only an error message. This is a compatibility problem, and it almost always means the form uses features that not every PDF viewer supports. The form isn't broken; it's just pickier about where it's opened than a standard one.",
    "The usual cause is an advanced or dynamic form built with technology (often called XFA or LiveCycle) that only certain software renders properly. Standard interactive forms are widely supported, but these dynamic ones can demand a specific program, and many modern viewers — especially on phones and in browsers — won't open them correctly at all.",
    "This guide helps you recognise a compatibility problem, understand why it happens, and weigh your realistic options — including the honest reality that some forms simply require the software they were designed for, or a different format from the issuer.",
  ],
  steps: [
    {
      title: "Recognise the tell-tale signs",
      body: "A 'please wait' or 'open in a compatible viewer' message, a blank page where a form should be, or fields that appear in one program and vanish in another all point to a form using unsupported features.",
    },
    {
      title: "Identify a dynamic (XFA) form",
      body: "Forms that show a warning about needing specific software are usually dynamic XFA forms. These aren't standard interactive forms and many viewers — particularly mobile and browser ones — can't render them.",
    },
    {
      title: "Try a different, full-featured viewer",
      body: "Open the form in a couple of capable PDF programs. A standard interactive form that broke in a basic viewer will often work in a full one. A dynamic form may still need its specific software.",
    },
    {
      title: "Ask the issuer for a compatible version",
      body: "If a form genuinely won't open anywhere you can use, ask whoever sent it for a standard PDF, a flat printable version, or instructions on which software it needs. Issuers usually have an alternative.",
    },
    {
      title: "Fall back to print-and-fill if needed",
      body: "As a last resort for a form you can't open interactively, request or generate a flat printable copy and complete it by placing text on the page or by hand. It's not elegant, but it always works.",
    },
  ],
  tips: [
    "A 'compatible viewer' warning is the classic sign of a dynamic XFA form that needs specific software.",
    "Standard interactive forms are widely supported; if one only breaks in a basic viewer, a full-featured app usually fixes it.",
    "Some forms simply require the program they were built for — that's a real limit, not something to force around.",
    "When a form won't open anywhere usable, the issuer can almost always provide a standard or printable alternative.",
    "Some PDF forms may use unsupported features, so 'it won't open here' can be the form's design rather than a fault on your end.",
  ],
  mobileNote:
    "Phones are where compatibility problems bite hardest — dynamic XFA forms often won't render in mobile viewers at all. The PDF Editor app opens and fills standard interactive and flat forms reliably; for a dynamic form that needs specific desktop software, ask the issuer for a standard PDF version instead.",
  faq: [
    {
      q: "Why does my PDF form work in one program but not another?",
      a: "It likely uses features not every viewer supports — often a dynamic XFA form. Standard forms are widely compatible; dynamic ones can require specific software and won't render in many viewers, especially mobile and browser ones.",
    },
    {
      q: "What is a dynamic or XFA form?",
      a: "It's an advanced form type that behaves like a small program rather than a static page. Only certain software renders it correctly, which is why it may show a warning or a blank page elsewhere.",
    },
    {
      q: "How do I open a form that says 'use a compatible viewer'?",
      a: "Try a full-featured PDF program. If it's a dynamic form that still won't open, ask the issuer for a standard PDF or a printable version — many viewers genuinely can't render dynamic forms.",
    },
    {
      q: "Can I convert a dynamic form to a standard one myself?",
      a: "Not reliably from the finished file. The dependable route is to ask the issuer for a standard or flat version. Forcing a conversion often loses fields or data.",
    },
    {
      q: "Is a compatibility problem the same as missing fields?",
      a: "They overlap — a compatibility issue can cause fields to be missing in an unsupported viewer. But missing fields are often just a basic viewer not rendering a standard form, which a capable app fixes.",
    },
  ],
  related: [
    {
      label: "PDF form fields missing",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "PDF form not working", path: "/guides/pdf-form-not-working" },
    { label: "How PDF forms work", path: "/guides/how-pdf-forms-work" },
    { label: "Fix PDF form errors", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
