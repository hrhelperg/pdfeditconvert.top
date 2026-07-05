import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "accessible-pdf-forms",
  "h1": "Accessible PDF Forms",
  "cluster": "accessibility",
  "aliases": [
    "Tagged PDF forms",
    "Accessible AcroForms",
    "Screen-reader-friendly PDF forms",
    "PDF/UA forms",
    "Accessible fillable PDFs"
  ],
  "definition": "Accessible PDF forms are interactive PDF forms whose fields are tagged in the document's logical structure and given text labels and a defined order so assistive technology can identify and complete them.",
  "description": "How interactive PDF form fields are tagged, labeled through the TU entry, and ordered so screen readers and keyboard users can find and complete them.",
  "searchIntent": "accessibility",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "An accessible PDF form is an interactive form that has been prepared so that people using assistive technology can complete it independently. Under the surface it is built from the same pieces as any interactive form: AcroForm form fields, each drawn on the page by a widget annotation. What makes it accessible is a second layer of information the tagged PDF structure tree that tells software what each field is, what it is called, and in what order it should be encountered.",
    "This matters because a screen reader does not perceive a form the way a sighted user does. A visible caption printed next to an input box means nothing to assistive technology unless that caption is programmatically connected to the field. Without tagging and labels, a screen reader may announce an unlabeled edit box with no clue about what to type, and a keyboard user may tab through fields in an order that has nothing to do with the visual layout. Accessible form work closes that gap by attaching a machine-readable name, role, and sequence to every field.",
    "Because accessible forms are one specialization of tagged PDF, the same logical structure concepts apply here, and the recognized accessibility profile for PDF is PDF/UA (ISO 14289). WCAG and Section 508 describe accessibility expectations at a higher, format-independent level; the PDF-specific mechanisms below are how those expectations are realized inside the file."
  ],
  "sections": [
    {
      "heading": "How an accessible form field is assembled",
      "body": [
        "Each interactive field lives in the AcroForm field hierarchy and is presented on the page by a widget annotation, which carries the field's appearance stream. To make that field accessible, the widget is represented in the structure tree by a structure element usually the standard Form structure type that groups the field within the document's logical order. The structure element points to the annotation through an object reference (an OBJR entry), and the annotation points back to its place in the tree through a StructParent entry. This two-way link is what lets assistive technology treat the visual widget and the logical element as the same object.",
        "The field's accessible name its short description comes primarily from the alternate field name, stored in the field dictionary's TU entry. Interactive PDF viewers surface TU as the field's tooltip, and assistive technology reads it as the name announced to the user. A field can be visually labeled on the page yet still have no TU, in which case a screen reader has nothing meaningful to announce; conversely, a well-authored TU gives a clear spoken label even when the on-page caption is purely visual."
      ]
    },
    {
      "heading": "Reading order and tab order",
      "body": [
        "Two separate orderings affect a form. Reading order is the sequence in which the structure tree presents content, and it governs how assistive technology narrates the page. Tab order is the sequence in which keyboard focus moves between fields when the user presses Tab. In an accessible form these should agree with the logical flow of the form rather than the incidental order in which fields were added.",
        "PDF controls a page's tab order through the Tabs entry in the page dictionary. Setting Tabs to the value that follows structure order ties keyboard navigation to the logical structure tree, so tabbing walks the fields in the same order the document is read. This is generally preferred for accessible forms because it keeps the keyboard experience and the screen-reader experience consistent, instead of leaving focus to jump around by raw geometric position or object-creation order."
      ]
    },
    {
      "heading": "Labels, grouping, and instructions",
      "body": [
        "Beyond a single accessible name, real forms need more nuance. Radio buttons and checkboxes belong to groups, and the relationship between the group and its options has to be expressed so a user understands they are choosing among alternatives rather than filling isolated boxes. Required fields, formatting hints (such as a date pattern), and validation feedback are meaningful to a sighted user reading the page but are invisible to assistive technology unless that information is carried in the field's name, description, or surrounding tagged content.",
        "Because PDF form messaging such as calculation results or validation alerts is often delivered through scripting and viewer behavior, it is not guaranteed to reach every assistive technology reliably. Accessible form design therefore leans on stable, structural information the TU name, clear tagged labels, and logical order rather than depending on dynamic prompts to convey what a field expects."
      ]
    },
    {
      "heading": "Flat forms, scanned forms, and interactive forms",
      "body": [
        "Not every document that looks like a form is a form to software. A scanned or flattened page is just imagery or static graphics with no interactive fields, so there is nothing for a keyboard or screen reader to enter. Making such a document into an accessible form is a two-part job: interactive fields have to be created, and then those fields and the surrounding content have to be tagged. Optical character recognition can add a text layer to a scan, but a text layer alone does not create fillable, labeled fields.",
        "An interactive but untagged form sits in the middle: it can be filled with a mouse, yet assistive technology may not be able to name its fields or present them in a sensible order. Accessibility is the layer added on top of interactivity, which is why accessible PDF forms are treated as a subtopic of tagged PDF rather than of form fields alone."
      ]
    },
    {
      "heading": "Standards that describe accessible forms",
      "body": [
        "PDF/UA (ISO 14289) is the conformance standard for universally accessible PDF. It sets requirements for how tagged content including form fields must be structured, named, and ordered, so that a file described as PDF/UA conformant behaves predictably with assistive technology. It defines technical criteria for the file, not legal obligations for any person or organization.",
        "WCAG (the Web Content Accessibility Guidelines) and, in the United States, Section 508 operate at a broader level and are frequently referenced when people talk about document accessibility. They describe outcomes such as content being perceivable and operable; PDF-specific techniques and the PDF/UA requirements are how those outcomes are met inside a PDF. This encyclopedia describes what these standards are and how the format supports them, not what any party is legally required to do."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Accessible name source",
      "value": "The field dictionary's TU (alternate field name) entry supplies the label assistive technology announces and viewers show as a tooltip."
    },
    {
      "label": "Structure type",
      "value": "The standard Form structure element represents a form field's widget annotation within the logical structure tree."
    },
    {
      "label": "Tab order control",
      "value": "A page's Tabs entry can bind keyboard tab order to structure order, keeping navigation consistent with reading order."
    },
    {
      "label": "Conformance profile",
      "value": "PDF/UA (ISO 14289) is the recognized standard for universally accessible PDF, including forms."
    }
  ],
  "misconceptions": [
    {
      "claim": "Adding fillable fields to a PDF automatically makes the form accessible.",
      "truth": "Interactive fields still need to be tagged in the structure tree and given a text label (such as a TU entry); interactivity and accessibility are separate layers."
    },
    {
      "claim": "A visible caption printed next to a field is enough for a screen reader to know its label.",
      "truth": "On-page text is not programmatically linked to a field by mere proximity; the accessible name comes from the field's TU entry or an explicitly associated tagged label."
    },
    {
      "claim": "Accessible PDF forms require XFA.",
      "truth": "Standard AcroForm fields with proper tagging are the interoperable path; XFA is a separate technology and is not required, and it is not part of PDF 2.0 or the PDF/UA approach."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a fillable PDF form and an accessible one?",
      "a": "A fillable form simply has interactive fields you can type into. An accessible form adds tagging, programmatic labels, and a logical reading and tab order so assistive technology can identify and complete each field."
    },
    {
      "q": "How does a screen reader know what a form field is for?",
      "a": "Chiefly from the field's TU (alternate field name) entry, read as the field's accessible name, combined with its role in the tagged structure tree and its position in the reading order."
    },
    {
      "q": "Can a scanned or flattened form be made accessible?",
      "a": "Not as-is. A scan has no interactive fields and no tags. Making it accessible requires creating real form fields and then tagging them and the surrounding content; OCR alone adds a text layer but not fillable, labeled fields."
    },
    {
      "q": "Why do keyboard users end up tabbing through fields in a strange order?",
      "a": "Because tab order defaults to something other than the visual or logical flow. Binding the page's Tabs entry to structure order aligns keyboard navigation with the reading order."
    },
    {
      "q": "Which standards apply to accessible PDF forms?",
      "a": "PDF/UA (ISO 14289) defines PDF-level accessibility conformance, while WCAG and Section 508 describe broader accessibility expectations that PDF techniques and PDF/UA are used to satisfy."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "pdf-structure-tree",
      "structure-elements",
      "pdf-alt-text",
      "role-mapping",
      "standard-structure-types",
      "form-field-flags",
      "appearance-streams",
      "section-508-and-pdf",
      "pdf-accessibility-checking",
      "signature-fields"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1"
    ],
    "relatedTools": [
      {
        "label": "PDF Forms — Fill, Sign and Manage Fillable PDFs",
        "path": "/pdf-forms"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Create a Fillable PDF — Honest Options and Limits",
        "path": "/guides/how-to-create-a-fillable-pdf"
      },
      {
        "label": "How PDF Forms Work — Fields, AcroForms and Flat Scans",
        "path": "/guides/how-pdf-forms-work"
      },
      {
        "label": "What Is a PDF Form? Interactive vs Flat Forms Explained",
        "path": "/guides/what-is-a-pdf-form"
      },
      {
        "label": "PDF Form Best Practices (Design Forms People Finish)",
        "path": "/guides/pdf-form-best-practices"
      }
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "acroform",
    "pdf-form-fields",
    "widget-annotations",
    "pdf-ua",
    "wcag-and-pdf",
    "screen-readers-and-pdf",
    "reading-order"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
