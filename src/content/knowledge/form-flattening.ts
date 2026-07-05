import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "form-flattening",
  "h1": "PDF Form Flattening",
  "cluster": "interactivity",
  "aliases": [
    "flatten PDF form",
    "form field flattening",
    "flatten AcroForm fields",
    "flattened PDF form",
    "flatten form fields"
  ],
  "definition": "PDF form flattening merges a form's interactive fields into the page's static content, turning editable widgets into fixed page graphics while keeping the visible values.",
  "description": "Form flattening bakes a PDF's interactive fields into the page as fixed content, so values stay visible and consistent but can no longer be edited.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Form flattening is the operation of taking a PDF's interactive form fields and merging their current appearance into the static content of each page. After flattening, the values a user typed or selected are still visible, but they are drawn as ordinary page graphics rather than living inside editable form objects. The document looks the same and prints the same, yet there is no longer an interactive form behind the page.",
    "People reach for flattening at the end of a form's life: a form has been filled in, and the goal is now to preserve exactly what it shows and stop it from changing. It is a presentation and hand-off step rather than a security feature. Understanding what it removes, what it keeps, and how it interacts with signatures explains why flattening is common but also why it is effectively permanent.",
    "The term is widely used by PDF software even though it is not a single defined operator in the PDF specification. What the standard does define are the pieces flattening relies on: form fields, widget annotations, and the appearance streams that describe how each field currently looks."
  ],
  "sections": [
    {
      "heading": "How Form Flattening Works",
      "body": [
        "An interactive PDF form field is stored as a field object in the document's AcroForm structure and is shown on the page by a widget annotation. Each widget carries an appearance stream — a small Form XObject referenced through the normal (/N) entry of its appearance (/AP) dictionary — that describes exactly how the field looks in its current state, including any text the user has entered. Flattening takes that current appearance and paints it directly into the page's content stream, so the value becomes part of the page rather than something the viewer's form engine renders on the fly.",
        "Once the appearances have been written into the page content, the tool removes the widget annotations and the associated AcroForm field entries. The page then displays the same thing it did before, but there is no interactive object behind it — a viewer simply draws the baked-in content. Because the operation depends on each field having an up-to-date appearance stream, a field whose appearance has not yet been generated can flatten to a blank or stale result."
      ]
    },
    {
      "heading": "Why PDFs Get Flattened",
      "body": [
        "The most common reason to flatten is to lock in a completed form so its answers display identically everywhere. Interactive fields depend on the viewer's form support, and a program with limited or no AcroForm handling might show a field empty, mis-sized, or with substituted fonts. After flattening, the values are part of the page itself, so any conforming PDF viewer, and any printer, reproduces them the same way.",
        "Flattening is also used to stop further editing. Because the fields no longer exist as editable objects, a recipient cannot simply click into a field and change a typed answer. This is a practical, presentation-level lock rather than a security control: it changes what is interactive, not who can open or alter the file, so it is different in kind from encryption, permission flags, or a digital signature."
      ]
    },
    {
      "heading": "What Is Lost and What Remains",
      "body": [
        "Flattening keeps the visible result but discards the machinery behind it. The AcroForm dictionary, the field hierarchy, and the widget annotations are removed, which means the document no longer exposes named fields or their values. Tools that read structured form data — for example through FDF or XFDF export — find nothing to read once a form is flattened, and the values can no longer be repopulated or reset programmatically.",
        "What remains is whatever the appearance streams contained. Field text is usually preserved as real text drawn with text-showing operators, so in many cases it stays selectable and searchable, though this is not guaranteed for every producer. The operation is effectively one-way: the original interactive fields cannot be reconstructed from a flattened file, so keeping an unflattened copy is the only way to preserve editability."
      ]
    },
    {
      "heading": "Flattening, Signatures, and Dynamic Forms",
      "body": [
        "Flattening interacts carefully with signatures. A digital signature covers a specific byte range of the file, so flattening — which rewrites the document after signing — would break the signed state or invalidate the signature. A signature field can itself be flattened, but that only bakes in the visual signature appearance; it does not carry the cryptographic signature, so the result can look signed without being verifiable.",
        "Dynamic XFA forms complicate flattening further. Classic AcroForm fields map cleanly to widget annotations with appearance streams, which is what makes them straightforward to flatten. XFA-based forms instead describe their layout and fields in a separate XML template that a compatible viewer renders, so flattening such a form generally means first rendering it to ordinary PDF page content, and the exact behavior varies from tool to tool."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "What it merges",
      "value": "The current appearance of each interactive form field is drawn into the page's static content stream."
    },
    {
      "label": "Depends on",
      "value": "Each field's normal appearance stream (the /N entry of its /AP dictionary)."
    },
    {
      "label": "What it removes",
      "value": "Widget annotations and the AcroForm field structure, so no editable fields remain."
    },
    {
      "label": "Reversibility",
      "value": "Generally one-way — interactive fields and their data cannot be restored from a flattened file."
    }
  ],
  "misconceptions": [
    {
      "claim": "Flattening a PDF turns the page into an image.",
      "truth": "Form flattening merges field appearances into the page content; text is usually kept as real text, not a rasterized picture. Converting a page to an image is a separate operation."
    },
    {
      "claim": "Form flattening and transparency flattening are the same thing.",
      "truth": "They are unrelated. Transparency flattening is a print-production step that resolves overlapping transparent objects, while form flattening bakes interactive fields into static page content."
    },
    {
      "claim": "Flattening protects a document the way a password does.",
      "truth": "Flattening only removes interactivity. It is not encryption and does not restrict who can open the file or edit its other content."
    }
  ],
  "faq": [
    {
      "q": "Can a flattened form be un-flattened?",
      "a": "In general no. The interactive fields and their form data are removed, so there is nothing left to restore. Keep an editable copy before flattening if you may need to change values later."
    },
    {
      "q": "Will my typed answers still show after flattening?",
      "a": "Yes. The current field values are drawn into the page, so they stay visible and print correctly — they simply can no longer be edited as fields."
    },
    {
      "q": "Does flattening make a form print correctly?",
      "a": "It usually helps, because the values become page content instead of viewer-rendered fields. Some viewers otherwise print form fields blank or misaligned, which flattening avoids."
    },
    {
      "q": "Is flattened text still searchable?",
      "a": "Often yes, when the appearance streams draw real text with text-showing operators. It depends on the producer, though — some tools may output outlined glyphs or non-text that is not searchable."
    },
    {
      "q": "Should I flatten before sending a completed form?",
      "a": "It is common when you want the recipient to see fixed answers they cannot change. If they still need to edit fields, send an unflattened copy instead."
    }
  ],
  "graph": {
    "parentConcept": "pdf-interactive-features",
    "relatedConcepts": [
      "fdf-and-xfdf",
      "form-field-flags",
      "pdf-content-streams",
      "pdf-digital-signatures",
      "pdf-transparency"
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
        "label": "Editable PDF vs Flat PDF — What the Difference Actually Is",
        "path": "/guides/editable-pdf-vs-flat-pdf"
      },
      {
        "label": "How to Send a Completed PDF Form (Flatten & Deliver)",
        "path": "/guides/how-to-send-a-completed-pdf-form"
      },
      {
        "label": "How to Print a Filled PDF Form With Answers Showing",
        "path": "/guides/how-to-print-a-filled-pdf-form"
      },
      {
        "label": "How to Save a Filled PDF Form So Answers Stick",
        "path": "/guides/how-to-save-a-filled-pdf-form"
      }
    ]
  },
  "seeAlso": [
    "acroform",
    "pdf-form-fields",
    "widget-annotations",
    "appearance-streams",
    "signature-fields",
    "xfa-forms",
    "pdf-annotations",
    "form-xobjects"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
