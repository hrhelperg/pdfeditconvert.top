import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "choice-fields",
  "h1": "Choice Fields (Lists and Combos)",
  "cluster": "interactivity",
  "aliases": [
    "List box field",
    "Combo box field",
    "Dropdown field",
    "Selection list field",
    "Ch field type"
  ],
  "definition": "A choice field is a PDF form field that offers a predefined set of options as either a scrollable list box or a dropdown combo box and stores the option the user picks.",
  "description": "How PDF choice fields work: list boxes versus combo boxes, the Opt options array, export versus display values, and single or multiple selection.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Choice fields are the PDF form controls that let someone pick from a fixed set of answers rather than typing free text. In an interactive AcroForm they appear as either a list box, which shows several options in a scrollable pane, or a combo box, the familiar single-line dropdown that expands when clicked. Both are the same underlying field type, distinguished only by a flag.",
    "Under the hood, a choice field is a form field whose field-type entry (FT) is set to Ch. The available options live in an array, the selected option is recorded separately, and the field is drawn on the page by an associated widget annotation. This separation between what is displayed, what is stored, and what is drawn is what makes choice fields flexible but also occasionally confusing.",
    "This page explains how choice fields are structured in the PDF format and how a viewer decides what to show and what to save. It is a reference on the mechanism, not a step-by-step tutorial; where you actually need to fill or build one, the linked tools and guides walk through the workflow."
  ],
  "sections": [
    {
      "heading": "List boxes versus combo boxes",
      "body": [
        "Both variants share the field type Ch, and a single flag in the field's flags entry (Ff) decides which one a viewer renders. When the Combo flag is set, the control is a combo box: a compact dropdown that occupies one line until the user opens it. When the flag is clear, the field is a list box that displays multiple options at once inside a scrollable region. This is why the two feel so different to a user yet are described almost identically in the file.",
        "A combo box can optionally be made editable through a separate Edit flag. An editable combo box lets the user type a value that is not among the listed options, effectively combining a dropdown with a text entry. The Edit flag is only meaningful when Combo is also set; a plain list box never accepts typed-in values that fall outside its option list."
      ]
    },
    {
      "heading": "The options list: the Opt array",
      "body": [
        "The selectable options are stored in an array named Opt. Each element is either a single text string, which serves as both the label shown to the user and the value that gets exported, or a two-element array of the form [export value, display text]. The two-element form lets a form author show a human-friendly label while storing a different machine-friendly code. A dropdown might display \"United States\" to the reader while the form actually records \"US\".",
        "Two related entries control presentation of the list. The Sort flag is meant for authoring tools rather than for viewers: it indicates that an authoring application should keep the Opt array in alphabetical order, and conforming readers display the options in the order in which they occur in Opt rather than re-sorting them. For scrollable list boxes, the top-index entry (TI) records which option is scrolled to the top of the visible area, so a long list can reopen at a sensible position rather than always at the first item."
      ]
    },
    {
      "heading": "How a selection is stored",
      "body": [
        "The field's current value is held in its value entry (V), and its default in the default-value entry (DV). For a single selection, V is the export value of the chosen option. A list box may permit several selections at once when the MultiSelect flag is set; in that case V can be an array holding the export values of every selected option. Because two or more options in Opt can share the same export value, PDF also allows an indices entry (I) that lists the zero-based positions of the selected items within Opt, removing any ambiguity about exactly which entries are selected.",
        "It is the export value, not the on-screen label, that ends up in V and in any exported form data. When Opt entries use the [export, display] pair form, the saved result can legitimately differ from what the reader sees on the page. This is intentional and is how choice fields feed clean, consistent values into downstream processing while still reading naturally to a person."
      ]
    },
    {
      "heading": "Widgets, appearances, and interactivity",
      "body": [
        "A choice field is drawn on the page by a widget annotation, the same annotation mechanism used by other form fields. The annotation carries an appearance stream that describes how the control looks, so a compliant viewer renders the field consistently and a printout can show the current selection. In many files the field dictionary and its single widget are merged into one object.",
        "Choice fields can participate in the wider interactive form system. Actions and JavaScript can respond when a selection changes, for example to recalculate a total or reveal another field. A flag called CommitOnSelChange, added in a later PDF revision, tells the viewer to commit the new value the moment the user changes the selection rather than waiting for the field to lose focus, which matters when a script needs the value immediately."
      ]
    },
    {
      "heading": "Where choice fields fit in the form model",
      "body": [
        "Choice fields are part of AcroForm, the native interactive-form technology defined in the PDF standard, and the field type is one of a small set alongside buttons, text, and signature fields. Because the field type can be inherited through a field hierarchy, a group of related widgets can share one logical choice field, though this is more common with buttons than with choice controls.",
        "AcroForm choice fields are broadly supported across conforming PDF viewers. A separate, largely superseded technology called XFA also defined its own dropdown and list controls using an XML form model; those are not the same as AcroForm choice fields and are not universally supported. When people report a dropdown that does not render, an XFA form is a common cause."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Field type",
      "value": "The field-type entry (FT) is set to Ch for every choice field."
    },
    {
      "label": "List vs. combo",
      "value": "The Combo flag in the Ff flags selects a dropdown combo box; when clear, the field is a list box."
    },
    {
      "label": "Options storage",
      "value": "Options live in the Opt array as plain strings or [export value, display text] pairs."
    },
    {
      "label": "Selected value",
      "value": "The chosen export value is stored in V; a MultiSelect list box can store an array of values."
    }
  ],
  "specification": {
    "introduced": "PDF 1.2, with the introduction of AcroForm interactive forms",
    "iso": "ISO 32000 (PDF)",
    "typicalUsage": "Presenting a fixed set of options as a scrollable list box or a space-saving dropdown combo box within an AcroForm, single or multiple selection.",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF dropdown always lets you type your own answer.",
      "truth": "Only an editable combo box does. The user can type a custom value just when the Edit flag is set; otherwise the selection is limited to the options listed in Opt."
    },
    {
      "claim": "The text you see selected in a dropdown is exactly what gets saved.",
      "truth": "When an option is defined as an [export value, display text] pair, the value written to V and to exported data is the export value, which can differ from the visible label."
    },
    {
      "claim": "Choice fields and radio buttons are interchangeable ways to pick one option.",
      "truth": "They are distinct field types (Ch versus Btn) with different storage and behavior. Choice fields scale to long option lists and can support multiple selection, which radio groups do not."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a list box and a combo box in a PDF?",
      "a": "They are the same field type distinguished by the Combo flag. A list box shows several options at once in a scrollable pane, while a combo box is a single-line dropdown that expands on click and can optionally be made editable."
    },
    {
      "q": "What is the Opt array in a choice field?",
      "a": "It is the array that holds the field's selectable options. Each entry is either a text string used as both label and value, or a two-element array whose first item is the export value and second item is the text displayed to the reader."
    },
    {
      "q": "Can a user select more than one option?",
      "a": "Yes, in a list box when the MultiSelect flag is set. The value entry (V) can then hold an array of the selected export values, and an indices entry (I) can record the exact positions chosen within Opt."
    },
    {
      "q": "Can choosing an option trigger a calculation or script?",
      "a": "Yes. Choice fields can carry actions and JavaScript that fire on selection. A CommitOnSelChange flag can make the viewer commit the new value immediately on change, so a script sees the updated value without waiting for the field to lose focus."
    },
    {
      "q": "Are choice fields supported in every PDF viewer?",
      "a": "AcroForm choice fields are broadly supported across conforming viewers. Dropdowns built with the older XFA XML forms technology are a separate mechanism and are not universally supported, which is a common reason a dropdown fails to render."
    }
  ],
  "graph": {
    "parentConcept": "pdf-form-fields",
    "relatedConcepts": [
      "signature-fields",
      "javascript-in-pdf",
      "form-calculation",
      "xfa-forms",
      "fdf-and-xfdf",
      "pdf-actions"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
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
        "label": "How to Fill Out a PDF Form (Interactive or Flat)",
        "path": "/guides/how-to-fill-out-a-pdf-form"
      },
      {
        "label": "How PDF Forms Work — Fields, AcroForms and Flat Scans",
        "path": "/guides/how-pdf-forms-work"
      },
      {
        "label": "How to Create a Fillable PDF — Honest Options and Limits",
        "path": "/guides/how-to-create-a-fillable-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-form-fields",
    "acroform",
    "text-form-fields",
    "checkbox-form-fields",
    "radio-button-fields",
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
