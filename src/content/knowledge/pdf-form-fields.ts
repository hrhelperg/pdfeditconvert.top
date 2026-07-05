import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-form-fields",
  "h1": "PDF Form Fields",
  "cluster": "interactivity",
  "aliases": [
    "AcroForm fields",
    "interactive form fields",
    "fillable form fields",
    "PDF fields",
    "form field objects"
  ],
  "definition": "PDF form fields are the interactive data-entry objects in an AcroForm — text boxes, checkboxes, radio buttons, choice lists and signature fields — each stored as a dictionary with a type and value.",
  "description": "How PDF form fields work: the AcroForm field tree, the field types (Btn, Tx, Ch, Sig), field names and values, and the widget annotations that draw them.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF form field is the piece of a fillable PDF that actually holds a piece of data — the name a person types, the box they tick, the option they pick from a list, or the place where they sign. Under the surface, each field is a PDF dictionary object with a type, a name, and a stored value, and all of a document's fields together make up its interactive form, or AcroForm.",
    "Fields are deliberately split into two ideas: the field itself, which is the data and behaviour, and the widget annotation, which is the visual box drawn on a page. This separation is what lets one logical field (say, a set of radio buttons) appear as several boxes, and it is why a filled-in value can be stored without rewriting the page's underlying text. Understanding that split explains most of how PDF forms behave.",
    "This page describes what form fields are and how the format represents them. It is a reference, not a walkthrough — where you actually need to fill, build, or fix a form, the linked tools and guides cover the steps."
  ],
  "sections": [
    {
      "heading": "How a PDF stores its form fields",
      "body": [
        "A document's interactive form is reached through the AcroForm entry in the PDF document catalog. That AcroForm dictionary carries a Fields array, which is the root of the form's field tree. Fields can be nested: a field may have Kids that are themselves fields, which lets related controls be grouped under a common parent. A field with no child fields is called a terminal field — it is the one that actually holds a value — while parent fields above it exist mainly to organise and name the group.",
        "The AcroForm dictionary also holds document-wide form settings that individual fields inherit or reference, such as default resources (DR), a default appearance string (DA) used for text, default text alignment (Q), and the NeedAppearances flag. Because the form tree hangs off the catalog rather than being tied to a single page, a field is a document-level object that can be referenced from anywhere in the file."
      ]
    },
    {
      "heading": "The four field types",
      "body": [
        "Every terminal field declares a field type through its FT entry, and the format defines four: Btn (button), Tx (text), Ch (choice), and Sig (signature). The button type is the broadest — depending on its flags it can be a pushbutton, a checkbox, or one of a set of radio buttons. Text fields accept typed input and can be configured as single-line, multiline, password, or comb (fixed-width) entry. Choice fields present a list of options as either a scrollable list box or a drop-down combo box. Signature fields hold a digital signature or reserve space for one to be added later.",
        "The type mostly determines which additional entries and flags are meaningful for a field. A checkbox and a radio group are both Btn fields but are distinguished by their flags and by how their on/off appearance states are named; a list box and a combo box are both Ch fields separated by a single flag. This small, fixed set of types is what makes AcroForm fields broadly interoperable across conforming viewers."
      ]
    },
    {
      "heading": "Fields versus widget annotations",
      "body": [
        "A form field is a data object; a widget annotation is its visible representation on a page. The two are distinct concepts, but when a field is shown in exactly one place the format allows the field dictionary and its widget annotation dictionary to be merged into a single dictionary, which is the common case. When a field needs to appear in more than one spot — the members of a radio group, or a field repeated on every page — the field has several Kids that are separate widget annotations, each drawing the same underlying value in a different location.",
        "This design has practical consequences. Because the value lives on the field and the appearance lives on the widget(s), changing what a person entered does not require editing the page content stream; the viewer regenerates the widget's appearance from the field's value. It also means a single logical answer can be presented consistently in multiple positions, and that a widget's position, size, and border are properties of the annotation rather than of the data."
      ]
    },
    {
      "heading": "Names, values, and flags",
      "body": [
        "Each field has a partial name in its T entry, and a field's fully qualified name is built by joining the partial names of the field and its ancestors with periods. That fully qualified name is how form data is addressed when it is exported, imported, or manipulated by scripts, so two fields that share a value (like radio buttons) do so by sharing a name. A field can also carry a TU entry — an alternate, human-readable description used for tooltips and read by assistive technology.",
        "A field's current value is stored in its V entry, with an optional default in DV that a reset restores. Behaviour is tuned through the field flags in the Ff entry: general flags such as ReadOnly, Required, and NoExport apply to any field, while type-specific flags control things like Multiline and Password for text, Radio and Pushbutton for buttons, and Combo and MultiSelect for choice fields. Fields may also attach additional actions (AA) that trigger scripts on events such as keystrokes or value changes."
      ]
    },
    {
      "heading": "How viewers draw a field",
      "body": [
        "What a filled field looks like is governed by its appearance. A widget's AP entry references appearance streams — small, self-contained graphics that render the field's normal (and optionally rollover or down) state. For checkboxes and radio buttons, the appearance dictionary contains named states, and the widget's AS entry selects which one is currently shown, so ticking a box is a matter of switching the active appearance state to match the field's value.",
        "When a value changes and no matching appearance stream exists, viewers can fall back on the AcroForm's NeedAppearances flag, which asks the viewer to construct appearances on the fly using the default appearance (DA) and default resources (DR). Relying on that fallback is why the same form can look slightly different between viewers, and why some tools regenerate or flatten appearances to lock a form's rendered look in place."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Field types",
      "value": "Four: Btn (button/checkbox/radio), Tx (text), Ch (choice list/combo), Sig (signature)."
    },
    {
      "label": "Where fields live",
      "value": "In the AcroForm dictionary's Fields array, reached from the document catalog."
    },
    {
      "label": "Field naming",
      "value": "A fully qualified name joins the partial names (T) of a field and its ancestors with periods."
    },
    {
      "label": "Data vs. appearance",
      "value": "The value is stored on the field (V); the on-page box is a widget annotation with its own appearance streams."
    }
  ],
  "specification": {
    "introduced": "Interactive AcroForm fields date to PDF 1.2 (mid-1990s)",
    "iso": "ISO 32000-1 and ISO 32000-2",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Interactive data entry — forms filled on screen, calculated, signed, exported, or flattened for delivery.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A form field and the box drawn on the page are the same thing.",
      "truth": "The field is a data object that holds the value and behaviour; the on-page box is a widget annotation with its own appearance. They are often merged into one dictionary but are conceptually separate, which is why one field can appear in several places."
    },
    {
      "claim": "All fillable PDFs use the same underlying form technology.",
      "truth": "AcroForm fields are the form model defined by ISO 32000. Some PDFs instead (or additionally) use XFA, a separate XML-based form technology that was deprecated in PDF 2.0 and is not supported the same way everywhere."
    },
    {
      "claim": "Typing into a field permanently rewrites the document's text.",
      "truth": "The entry is stored in the field's value (and drawn via the widget's appearance), not merged into the page content — unless the form is flattened, which bakes the current values into static page graphics."
    }
  ],
  "faq": [
    {
      "q": "What are the field types in a PDF form?",
      "a": "There are four: Btn (buttons, which include pushbuttons, checkboxes, and radio buttons), Tx (text fields), Ch (choice fields — list boxes and combo boxes), and Sig (signature fields). A field's FT entry declares which one it is."
    },
    {
      "q": "Where are form fields stored inside a PDF?",
      "a": "They live in the interactive form's field tree, rooted in the Fields array of the AcroForm dictionary, which the document catalog references. Fields can be nested, with parent fields grouping child fields."
    },
    {
      "q": "What is the difference between a form field and a widget annotation?",
      "a": "The field is the logical object that carries the name, value, and behaviour; the widget annotation is the visible box on a page that draws it. For a field shown in one place the two dictionaries are usually merged into one."
    },
    {
      "q": "Can one field appear in more than one place on a document?",
      "a": "Yes. A field can have several Kid widget annotations, each rendering the same shared value in a different location. This is how radio-button groups and fields repeated across pages work."
    },
    {
      "q": "Why does the same PDF form look different in different apps?",
      "a": "If a field lacks a stored appearance stream for its current value, viewers may regenerate the look on the fly using the NeedAppearances flag and the form's default appearance settings, and results can vary slightly. Flattening or regenerating appearances makes the rendered look consistent."
    }
  ],
  "graph": {
    "parentConcept": "acroform",
    "childConcepts": [
      "text-form-fields",
      "checkbox-form-fields",
      "radio-button-fields",
      "choice-fields",
      "signature-fields",
      "form-field-flags"
    ],
    "relatedConcepts": [
      "appearance-streams",
      "form-flattening",
      "form-calculation",
      "fdf-and-xfdf",
      "xfa-forms",
      "pdf-annotations",
      "javascript-in-pdf"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
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
        "label": "How PDF Forms Work — Fields, AcroForms and Flat Scans",
        "path": "/guides/how-pdf-forms-work"
      },
      {
        "label": "What Is a PDF Form? Interactive vs Flat Forms Explained",
        "path": "/guides/what-is-a-pdf-form"
      },
      {
        "label": "How to Create a Fillable PDF — Honest Options and Limits",
        "path": "/guides/how-to-create-a-fillable-pdf"
      }
    ]
  },
  "seeAlso": [
    "acroform",
    "widget-annotations",
    "text-form-fields",
    "checkbox-form-fields",
    "radio-button-fields",
    "choice-fields",
    "signature-fields",
    "form-field-flags"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
