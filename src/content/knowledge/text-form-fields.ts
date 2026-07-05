import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "text-form-fields",
  "h1": "Text Form Fields",
  "cluster": "interactivity",
  "aliases": [
    "Tx field",
    "text field",
    "AcroForm text field",
    "text input field",
    "variable text field"
  ],
  "definition": "A text form field is an interactive AcroForm field (field type Tx) that lets a reader type or edit variable text — such as a name or address — directly into a PDF.",
  "description": "Text form fields are AcroForm Tx fields that accept typed input in a PDF. See how their stored value, appearance stream, and flags like Multiline and Comb work.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A text form field is the most common kind of interactive field in a PDF form. It presents an on-page box into which a reader can type free-form content — a name, a date, a comment — and the PDF stores what they enter as part of the document. Text fields belong to PDF's AcroForm system, the interactive-forms technology built into the core PDF specification.",
    "Internally, a text field is a dictionary object whose field type (the FT entry) is Tx. It couples a data model — the current value the reader has typed — with a visual model, a widget annotation that draws the box and renders the text on the page. Keeping the value separate from its drawn appearance lets the same underlying text be displayed, printed, exported, or cleared without altering the value itself.",
    "How a text field behaves is governed by a handful of flags and properties. These decide whether input wraps onto multiple lines, is masked like a password, is split into evenly spaced comb cells, or is capped at a maximum number of characters. Reading these entries explains why the same field can look and act differently from one PDF viewer to another."
  ],
  "sections": [
    {
      "heading": "How a Text Field Is Structured",
      "body": [
        "A text field is defined by a field dictionary. Its field type entry (FT) is set to Tx, which distinguishes it from checkboxes, radio buttons, choice lists, and signature fields. The text the reader has entered is held in the field's value entry (V) as a string, and an optional default value (DV) supplies the text a reset returns the field to. A field name gives the field an identity so its value can be read, set, exported, or referenced by scripts.",
        "On the page, the field is realized through a widget annotation, which carries the rectangle, borders, and background color. For a simple field the field dictionary and its single widget annotation are often merged into one object. A default appearance string (DA) records the font, size, and color used for the typed text, and the widget's appearance stream (AP) contains the actual drawing instructions a viewer shows."
      ]
    },
    {
      "heading": "Field Flags That Shape Behavior",
      "body": [
        "A text field's field-flags entry (Ff) turns individual behaviors on or off. The Multiline flag lets input wrap and occupy several lines instead of a single line. The Password flag masks characters as they are typed and keeps the value from being stored in plain form by the viewer. Other flags include FileSelect (the field names a file path), DoNotSpellCheck, DoNotScroll (text does not scroll once the box is full), and RichText (styled text rather than plain).",
        "The Comb flag is a special case: it divides the field's box into a fixed number of equally spaced cells, one character per cell, which is common on printed-style forms. A comb field only works together with a MaxLen entry, which sets the maximum number of characters the field accepts — the comb uses that count to decide how many cells to draw."
      ]
    },
    {
      "heading": "Value, Appearance, and Rendering",
      "body": [
        "The value a reader types and the pixels shown on the page are two different things. The value lives in the V entry, while the visible result is an appearance stream that a viewer generates from that value using the default appearance settings. When the two are out of step — for example after a value is changed programmatically — a viewer may need to regenerate the appearance before the new text shows. The interactive-form dictionary's NeedAppearances flag signals that viewers should rebuild field appearances rather than trust the stored ones.",
        "The default appearance string controls the font, text size, and color of the typed text; a size of zero requests auto-sizing so the text shrinks to fit the box. A quadding (Q) value sets horizontal justification — left, centered, or right. Because different viewers implement appearance regeneration with varying fidelity, the same field can render with slightly different spacing, fonts, or clipping depending on the software used to open it."
      ]
    },
    {
      "heading": "Where Text Fields Fit in the Form System",
      "body": [
        "Text fields are one member of the AcroForm family of field types, alongside checkboxes, radio buttons, choice fields, and signature fields. They can participate in calculations and scripted validation, and their contents can be exported on their own — without the surrounding pages — as FDF or XFDF data, or sent by a submit action. This makes a text field both a place to capture input and a unit of data that can move between a form and a back-end system.",
        "AcroForm is the interactive-forms mechanism defined in the core PDF specification; a separate, XML-based approach called XFA also existed but is not part of PDF 2.0. When a filled form no longer needs to be editable, flattening converts the field's current appearance into ordinary static page content, after which the box is no longer an interactive text field."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Field type",
      "value": "A text field's field-type entry (FT) is Tx."
    },
    {
      "label": "Stored value",
      "value": "The entered text is kept in the field's value entry (V) as a string."
    },
    {
      "label": "Comb fields",
      "value": "A comb text field splits its box into equal cells and requires a MaxLen entry."
    },
    {
      "label": "Form technology",
      "value": "Text fields are defined by PDF's built-in AcroForm interactive forms."
    }
  ],
  "specification": {
    "introduced": "AcroForm interactive forms, present since the PDF 1.2 era",
    "typicalUsage": "Collecting typed text such as names, dates, and free-form comments in fillable PDF forms",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "The text you see in a form field is the same object as the value the field stores.",
      "truth": "The typed value is stored separately in the field's value entry, while what you see is an appearance stream a viewer draws from that value; the two can fall out of sync until the appearance is regenerated."
    },
    {
      "claim": "A text field can only ever hold a single line of text.",
      "truth": "Setting the Multiline flag lets a text field wrap and hold several lines; without that flag the field is single-line."
    },
    {
      "claim": "Typing into a form field permanently rewrites the PDF's page text.",
      "truth": "Until the form is flattened, the value lives in the interactive field layer and can still be edited or cleared; flattening is what bakes it into static page content."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a text field and a choice field?",
      "a": "A text field accepts free-form typed input, while a choice field (a list or combo box) restricts the reader to predefined options. Both are AcroForm fields but use different field types."
    },
    {
      "q": "Why does a text field sometimes look empty until I click it?",
      "a": "Some viewers regenerate a field's appearance only on demand, or when the form's NeedAppearances flag is set. If the stored appearance stream is missing or stale, the value may not display until the viewer redraws the field."
    },
    {
      "q": "Can a text field limit how many characters I type?",
      "a": "Yes. The MaxLen entry caps the number of characters, and comb fields rely on it to divide the box into that many equally spaced cells."
    },
    {
      "q": "How is the data from a text field extracted or submitted?",
      "a": "Field values can be exported to FDF or XFDF, or sent by a submit action, so just the data moves rather than the entire PDF."
    },
    {
      "q": "Do text fields support styling like bold text or color?",
      "a": "Basic font, size, and color come from the field's default appearance string. The RichText flag allows more richly styled text, though how faithfully it renders varies between viewers."
    }
  ],
  "graph": {
    "parentConcept": "pdf-form-fields",
    "relatedConcepts": [
      "form-flattening",
      "form-calculation",
      "fdf-and-xfdf",
      "javascript-in-pdf",
      "radio-button-fields",
      "accessible-pdf-forms",
      "xfa-forms"
    ],
    "relatedStandards": [
      "iso-32000"
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
        "label": "How to Fill Out a PDF Form (Interactive or Flat)",
        "path": "/guides/how-to-fill-out-a-pdf-form"
      }
    ]
  },
  "seeAlso": [
    "pdf-form-fields",
    "acroform",
    "checkbox-form-fields",
    "choice-fields",
    "signature-fields",
    "form-field-flags",
    "widget-annotations",
    "appearance-streams"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
