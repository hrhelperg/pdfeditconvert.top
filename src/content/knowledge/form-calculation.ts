import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "form-calculation",
  "h1": "Form Field Calculations",
  "cluster": "interactivity",
  "aliases": [
    "PDF form calculations",
    "calculated form fields",
    "auto-calculate PDF fields",
    "AcroForm calculations",
    "form calculation scripts"
  ],
  "definition": "Form field calculations are automatic computations that derive one AcroForm field's value from other fields, run as JavaScript in the order set by the form's calculation-order array.",
  "description": "How PDF forms auto-calculate field values: the calculate action, the AcroForm calculation-order array, and why results depend on JavaScript support.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Form field calculations let a PDF form fill in some of its own values. Instead of a person typing a total, a line item times a tax rate, or an average, a calculated field derives its value from the contents of other fields and updates as those fields change. This is what turns a static order form or invoice into one that keeps its arithmetic consistent while it is being filled in.",
    "In the classic PDF form model — the AcroForm — a calculation is not a special 'formula cell' like a spreadsheet has. It is a small JavaScript program attached to a field, run by the PDF viewer whenever any field value in the document changes. The document's interactive-form dictionary records which fields carry these calculations and the order in which they should run, so that fields depending on other calculated fields are evaluated after their inputs.",
    "Because the mechanism is script-driven, calculated forms behave differently depending on where they are opened. A full desktop PDF application will typically run the scripts and show live totals; many browser and mobile viewers execute little or no form JavaScript, so the same fields may sit empty until the file is opened somewhere that supports them."
  ],
  "sections": [
    {
      "heading": "How a Calculated Field Gets Its Value",
      "body": [
        "Each interactive field can carry an additional-actions dictionary, and within it a calculate action stored under the key C. That action holds JavaScript whose job is to compute and set this field's value. Whenever the user changes any field, the viewer runs through the fields that have calculate actions and executes each one; a typical script reads the current values of one or more source fields, performs arithmetic, and assigns the result to the field's value. The computed result is written to the field's value entry (V), and the viewer regenerates the field's appearance so the new number is drawn on the page.",
        "Nothing about a number or currency field makes it calculate on its own. A field only participates in calculation if it has been given a calculate action; ordinary fields simply store whatever the user types. This is why two visually identical totals can behave differently — one may be a live calculated field and the other just a place where someone is expected to type the sum by hand."
      ]
    },
    {
      "heading": "Calculation Order and Dependencies",
      "body": [
        "When many fields calculate, order matters. If a grand total depends on several subtotals that are themselves calculated, the subtotals have to be evaluated first. The interactive-form dictionary carries a calculation-order array under the key CO — a list of the fields that have calculate actions, in the sequence the viewer should run them. On every change, the viewer processes that list from start to finish, so authoring tools place dependent fields after the fields they read from.",
        "Getting the order wrong, or creating a loop where two fields each depend on the other, tends to produce stale or unstable results rather than a clear error. Because the recalculation runs on essentially every keystroke or field exit, calculations are also kept lightweight; heavy scripts spread across many fields can make a large form feel sluggish to fill in."
      ]
    },
    {
      "heading": "Predefined Formulas and Custom JavaScript",
      "body": [
        "Desktop form editors usually offer a menu of ready-made calculations — sum, product, average, minimum, and maximum over a chosen set of fields — plus a 'simplified field notation' where you write an expression using field names, and a full custom-JavaScript option. These conveniences are not separate PDF features: the editor generates JavaScript (for example a call to Adobe's AFSimple_Calculate helper, or code compiled from the simplified notation) and stores it as the field's calculate action. The predefined helpers come from Adobe's JavaScript for Acrobat, so a viewer needs those library functions available for them to work.",
        "Custom scripts can go well beyond arithmetic — conditional logic, date math, or pulling values from several fields — but they are still ordinary field-level calculate actions running in the same calculation pass. Separately, a field can carry a format action that controls how the stored value is displayed (as currency, a percentage, or a date), which is why a calculated amount can show as a formatted currency string while its underlying value is a plain number."
      ]
    },
    {
      "heading": "Why Results Depend on the Viewer",
      "body": [
        "Form calculations are only as reliable as the viewer's support for form JavaScript. A capable desktop application runs the calculate actions and refreshes appearances immediately; lightweight viewers, some print pipelines, and many in-browser and mobile PDF renderers run little or no form scripting, so calculated fields can appear blank, show a stale value, or never update. Nothing is necessarily wrong with the file in these cases — the logic is present but simply is not being executed.",
        "This viewer dependence is the single most common source of confusion around calculated forms. It also means a form should be tested in the environments where it will actually be filled in, and that a value which looks correct on screen in one program is not guaranteed to recompute the same way somewhere else."
      ]
    },
    {
      "heading": "Calculations, Read-Only Fields, and Flattening",
      "body": [
        "Calculated fields are frequently marked read-only so users cannot overtype a computed total. The read-only flag prevents manual editing but does not stop the field from being updated by its calculate action — the script sets the value regardless. The result still lives in the field's value entry, so a form saved after calculation carries the computed numbers with it, even in a viewer that would not itself recompute them.",
        "Flattening changes the picture. When a form is flattened, its interactive fields are converted into static page content: the last computed appearance is painted onto the page and the calculate actions, the CO order, and the field objects themselves are discarded. The numbers remain visible and printable, but the form no longer recalculates. This is a common final step before distributing a completed form, and it is why a flattened copy cannot be turned back into a live, calculating form."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where the logic lives",
      "value": "Each calculated field stores JavaScript in the C (calculate) entry of its additional-actions dictionary."
    },
    {
      "label": "Calculation order",
      "value": "The interactive-form dictionary's CO array lists calculating fields in the sequence the viewer recalculates them."
    },
    {
      "label": "Runs on every change",
      "value": "The viewer re-runs the calculate actions whenever any field value in the document changes."
    },
    {
      "label": "Viewer-dependent",
      "value": "Calculations execute through the viewer's form-JavaScript engine, so viewers without that support won't update the fields."
    }
  ],
  "specification": {
    "typicalUsage": "Deriving field values automatically in AcroForm-based interactive PDF forms, such as totals on invoices and order forms.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Any PDF with number fields adds them up automatically.",
      "truth": "A field only calculates if it has a calculate action (JavaScript). Without one, a number field just stores whatever the user types."
    },
    {
      "claim": "Calculated fields work everywhere a PDF can be opened.",
      "truth": "Calculations run through the viewer's form-JavaScript engine. Many browser and mobile viewers execute little or no form JavaScript, so those fields may never update."
    },
    {
      "claim": "The formula is a native PDF math feature.",
      "truth": "In an AcroForm the computation is JavaScript; the 'sum/average' menu options are just Adobe helper scripts, not a separate spec-level formula language. XFA forms use their own model and are deprecated in PDF 2.0."
    }
  ],
  "faq": [
    {
      "q": "Why does my calculated total stay blank or show a stale number?",
      "a": "Usually the viewer isn't running form JavaScript, or the field wasn't reached because it sits outside the calculation order or its source fields are empty. Opening the file in a full PDF application that supports form scripting typically makes it update."
    },
    {
      "q": "In what order are fields calculated?",
      "a": "In the order listed in the interactive-form dictionary's CO array. Every field change triggers a recalculation pass that runs the calculate actions down that list from start to finish."
    },
    {
      "q": "Can a PDF form calculate without JavaScript?",
      "a": "AcroForm calculations are JavaScript-based. The alternative, XFA, has its own FormCalc and JavaScript, but XFA is deprecated in PDF 2.0, so JavaScript-driven AcroForm calculations are the mainstream approach."
    },
    {
      "q": "Do calculated values survive flattening or printing?",
      "a": "Flattening freezes the last computed value as static page content and removes the live calculation. Printing renders the current computed appearance, so the visible numbers are preserved even though the recalculation logic is not."
    },
    {
      "q": "Where in the file is a calculation stored?",
      "a": "In two places: each calculated field's additional-actions dictionary holds the JavaScript in its C entry, and the form-level CO array records the overall calculation order."
    }
  ],
  "graph": {
    "parentConcept": "pdf-interactive-features",
    "relatedConcepts": [
      "choice-fields",
      "widget-annotations",
      "fdf-and-xfdf",
      "signature-fields"
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
        "label": "PDF Form Not Working? Triage and Fixes",
        "path": "/guides/pdf-form-not-working"
      }
    ]
  },
  "seeAlso": [
    "javascript-in-pdf",
    "acroform",
    "pdf-form-fields",
    "text-form-fields",
    "form-field-flags",
    "pdf-actions",
    "form-flattening",
    "xfa-forms"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
