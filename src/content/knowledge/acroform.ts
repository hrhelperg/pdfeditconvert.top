import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "acroform",
  "h1": "AcroForm (PDF Interactive Forms)",
  "cluster": "interactivity",
  "aliases": [
    "Acrobat Forms",
    "AcroForms",
    "PDF AcroForm fields",
    "native PDF forms"
  ],
  "definition": "AcroForm is the native interactive-form system built into the PDF format, in which fillable fields like text boxes, checkboxes, and signatures are stored as field and widget-annotation objects.",
  "description": "AcroForm is the PDF format's native interactive-form system, storing fillable fields as field dictionaries and widget annotations in the document catalog.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "AcroForm is the interactive-form technology built directly into the PDF format. It turns an otherwise static page into a document with fillable fields — text boxes you can type into, checkboxes and radio buttons you can toggle, drop-down lists you can choose from, and areas you can sign. Because it is part of the core PDF specification, an AcroForm is understood by virtually any conforming PDF viewer without extra plug-ins.",
    "The name is a contraction of “Acrobat form,” reflecting its origins in Adobe Acrobat. Under the hood, AcroForm data lives in a single dictionary referenced from the document catalog, and each field is described by its own object. What the reader clicks on the page is a special kind of annotation tied to that field, so AcroForm sits at the intersection of PDF's form model and its annotation model.",
    "AcroForm is one of two form technologies PDF has supported. The other, XFA, layers an XML-based form description on top of the file; PDF 2.0 deprecates XFA, which leaves AcroForm as the interactive-form approach carried forward in the standard. Understanding AcroForm therefore explains how the large majority of fillable PDFs actually work."
  ],
  "sections": [
    {
      "heading": "Where AcroForm Data Lives",
      "body": [
        "Every AcroForm begins at the document catalog, the root object of a PDF. The catalog holds an /AcroForm entry pointing to the interactive-form dictionary, and that dictionary's /Fields array lists the form's top-level fields. The same dictionary can carry document-wide defaults, such as default resources (fonts and other assets shared by fields), a default appearance string, default text justification, and flags describing whether the form contains signatures. This central location is why a viewer can discover and enumerate a form's fields without scanning every page.",
        "Fields can be arranged in a hierarchy. A parent field can group several child fields that share a name and behave together — the classic example being a set of radio buttons or a field repeated across multiple pages. Only the fields at the bottom of the tree, the terminal fields, actually hold a value and a type; intermediate nodes exist to organize and share properties."
      ]
    },
    {
      "heading": "Field Dictionaries and Widget Annotations",
      "body": [
        "Each form field is described by a field dictionary that records its type, name, current value, and behavioral flags. On its own, a field dictionary has no position on the page. The visible, clickable control the reader interacts with is a widget annotation — one of PDF's annotation types — that carries the field's rectangle, border, background, and appearance. In the common case where a field appears exactly once, the field dictionary and its widget annotation are merged into a single object; when a field appears in more than one place, the field points to several widget “kids.”",
        "A widget's on-screen look is defined by an appearance stream: a small piece of PDF content that draws the field's current state, such as a checkmark for a ticked box or the typed characters in a text field. If a file omits these streams, the form can set a NeedAppearances flag asking the viewer to generate them. This is one reason the same form can look slightly different between viewers, and why some forms appear blank until opened in a reader that builds the missing appearances."
      ]
    },
    {
      "heading": "The AcroForm Field Types",
      "body": [
        "AcroForm defines a small, fixed set of field types, identified by a field-type key. Button fields cover push buttons, checkboxes, and radio buttons. Text fields accept typed input, from a single line to multi-line comments, and can be constrained to formats or fixed comb cells. Choice fields present list boxes and combo (drop-down) boxes. Signature fields hold a digital signature that can lock or certify the document.",
        "Each type has its own flags and options that refine behavior — a text field can be marked as a password or multiline, a button can act as a radio group, and a choice field can allow multiple selections or custom entry. This compact vocabulary, combined with the field hierarchy and widget appearances, is enough to express the great majority of everyday paper-form equivalents."
      ]
    },
    {
      "heading": "AcroForm vs. XFA",
      "body": [
        "PDF has carried two distinct form technologies. AcroForm is the native one defined throughout the PDF specification and described above. XFA (XML Forms Architecture) takes a different approach: it embeds an XML description of the form and can render layouts dynamically, growing or reflowing as data is entered. An XFA form is stored inside the AcroForm dictionary's /XFA entry, so the two are often present together, but they are separate models with different capabilities and different levels of viewer support.",
        "The direction of the standard favors AcroForm. PDF 2.0 deprecates XFA, and many viewers never fully supported dynamic XFA forms, which is a frequent source of the “please open this form in a compatible reader” warning some documents display. Forms built purely on AcroForm stay within the interoperable core of the format and avoid that fragmentation."
      ]
    },
    {
      "heading": "Data Exchange, Scripting, and Flattening",
      "body": [
        "AcroForm separates a form's structure from the values entered into it, which makes the entered data portable. Field values can be exported and imported using FDF or its XML sibling XFDF, or the entire filled PDF can be exchanged. Forms can also include JavaScript to validate input, format values, and calculate one field from others, with the interactive-form dictionary recording the order in which calculations run.",
        "When a form should no longer be editable — for archiving, printing, or final delivery — it can be flattened. Flattening paints each field's current appearance directly into the page content and discards the interactive field objects, producing a static page that looks identical but can no longer be changed. This is a one-way transformation, so the original fillable version is usually kept separately if further edits might be needed."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Storage location",
      "value": "The /AcroForm dictionary referenced from the PDF document catalog, with a /Fields array"
    },
    {
      "label": "Field types",
      "value": "Button, Text, Choice, and Signature fields"
    },
    {
      "label": "On-page control",
      "value": "Each visible field is a widget annotation with an appearance stream"
    },
    {
      "label": "Standard status",
      "value": "Native to ISO 32000; the alternative, XFA, is deprecated in PDF 2.0"
    }
  ],
  "specification": {
    "iso": "Part of ISO 32000-1 and ISO 32000-2",
    "introduced": "PDF 1.2",
    "latestVersion": "ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Fillable PDF forms such as applications, contracts, government forms, and surveys",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "AcroForm and XFA are the same thing.",
      "truth": "They are two different PDF form technologies. AcroForm is defined in the core PDF specification, while XFA is an XML-based form layer that PDF 2.0 deprecates."
    },
    {
      "claim": "A scanned form with printed lines to write on is an AcroForm.",
      "truth": "That is a flat image with no interactive fields. AcroForm fields are actual objects a viewer can focus and fill; a scan has to be given fields before it behaves like one."
    },
    {
      "claim": "Flattening a form keeps its fields editable.",
      "truth": "Flattening merges each field's current appearance into the page content and removes the interactive field objects, so the result is no longer fillable."
    }
  ],
  "faq": [
    {
      "q": "What does the “Acro” in AcroForm stand for?",
      "a": "It comes from Adobe Acrobat, the application in which this form model originated; “AcroForm” is short for “Acrobat form.”"
    },
    {
      "q": "Where are AcroForm fields stored in a PDF?",
      "a": "In the interactive-form dictionary referenced by the /AcroForm entry of the document catalog, whose /Fields array lists the top-level fields."
    },
    {
      "q": "Can an AcroForm perform calculations?",
      "a": "Yes. Fields can carry JavaScript for validation, formatting, and calculation, and the form dictionary records a calculation order so dependent fields update in sequence."
    },
    {
      "q": "How is data from a filled AcroForm exchanged?",
      "a": "Field values can be exported and imported as FDF or XFDF, or the whole filled PDF can be shared as a single file."
    },
    {
      "q": "Do all PDF viewers support AcroForm?",
      "a": "Because AcroForm is part of the core PDF standard, conforming viewers broadly support it, though details like appearance generation and scripting can vary between readers."
    }
  ],
  "graph": {
    "parentConcept": "pdf-interactive-features",
    "childConcepts": [
      "pdf-form-fields"
    ],
    "relatedConcepts": [
      "text-form-fields",
      "checkbox-form-fields",
      "radio-button-fields",
      "choice-fields",
      "form-field-flags",
      "form-calculation",
      "javascript-in-pdf",
      "pdf-annotations",
      "pdf-document-catalog"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedFormats": [
      "fdf-and-xfdf"
    ],
    "relatedTools": [
      {
        "label": "PDF Forms — Fill, Sign and Manage Fillable PDFs",
        "path": "/pdf-forms"
      },
      {
        "label": "Sign PDF — Add Electronic Signatures on Phone",
        "path": "/sign-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How PDF Forms Work — Fields, AcroForms and Flat Scans",
        "path": "/guides/how-pdf-forms-work"
      },
      {
        "label": "What Is a PDF Form? Interactive vs Flat Forms Explained",
        "path": "/guides/what-is-a-pdf-form"
      },
      {
        "label": "How to Fill Out a PDF Form (Interactive or Flat)",
        "path": "/guides/how-to-fill-out-a-pdf-form"
      },
      {
        "label": "How to Create a Fillable PDF — Honest Options and Limits",
        "path": "/guides/how-to-create-a-fillable-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-form-fields",
    "xfa-forms",
    "widget-annotations",
    "form-flattening",
    "signature-fields",
    "fdf-and-xfdf",
    "pdf-interactive-features",
    "appearance-streams"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
