import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "radio-button-fields",
  "h1": "Radio Button Fields",
  "cluster": "interactivity",
  "aliases": [
    "Radio buttons",
    "Radio button group",
    "PDF radio field",
    "Option buttons"
  ],
  "definition": "A radio button field is an AcroForm button field whose options are mutually exclusive, so selecting one widget in the group automatically turns the others off.",
  "description": "Radio button fields group mutually exclusive options into one PDF button field, using widget annotations, appearance states, and field flags.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A radio button field is the part of a PDF's interactive-form machinery that presents a small set of mutually exclusive options: the classic \"pick exactly one\" control. Behind the familiar ring of clickable circles sits a single form field that groups several on-screen buttons together and guarantees that turning one on turns the rest off.",
    "In PDF's form model, radio buttons are not a distinct field type of their own. They are one flavor of button field, the same broad category that also covers checkboxes and pushbuttons. What makes a button field behave like a radio group is a specific field flag, combined with a structure in which each visible option is a separate widget annotation belonging to the same parent field.",
    "That design of one logical field with many on-screen widgets is what lets a viewer enforce single-choice behavior, remember which option a user picked, and export that answer as a single value. Understanding it explains a lot of otherwise puzzling behavior, such as why two \"radio\" buttons sometimes both stay on, or why the stored value does not match the label a person sees."
  ],
  "sections": [
    {
      "heading": "One Field, Many Widget Annotations",
      "body": [
        "Every AcroForm field has a field type, and for radio buttons that type is the button field, written /FT /Btn, identical to the type used by checkboxes and pushbuttons. A radio group is a single field object that carries a /Kids array pointing to two or more widget annotations. Each widget is the physical, clickable appearance of one option, positioned on a page with its own rectangle, while the parent field holds the shared name, value, and flags for the whole group.",
        "Because the options share one parent field, they also share one field name and one current value. This is the mechanism that makes the choice mutually exclusive: the group can hold only a single value at a time, so a viewer displays exactly one widget in its on state and every other widget in its off state. If a designer instead gives each option its own separate field name, the options stop being a group and start behaving like independent checkboxes, which is a common reason a form lets a user select more than one \"radio\" button."
      ]
    },
    {
      "heading": "Appearance States and the Selected Value",
      "body": [
        "Each radio widget defines its look through an appearance dictionary (/AP) that contains named appearance states. Every widget has an off appearance under the reserved state name /Off, plus an on appearance stored under a name chosen by the form's author; that on-state name doubles as the option's export value. The widget's /AS entry records which of its states is currently showing, and the field's value entry (/V) holds the on-state name of whichever option is selected.",
        "Selection therefore works by name matching. When the field value equals a particular widget's on-state name, that widget renders its on appearance and all the others render /Off. Setting the value to /Off, or leaving it unset, shows no option as selected. Keeping the parent /V and each widget's /AS consistent is what a compliant viewer does when a user clicks; when they drift out of sync, often after programmatic edits, a form can display a selection that does not match its stored value."
      ]
    },
    {
      "heading": "The Flags That Define the Behavior",
      "body": [
        "The button field's flags, stored in the field flags entry (/Ff), decide exactly how the group behaves. The Radio flag is what marks a button field as a radio group in the first place; the Pushbutton flag, when set instead, makes a stateless action button, and a button field with neither flag set is an ordinary checkbox. So the same underlying field type produces three different controls depending on these flags.",
        "Two further flags fine-tune radio behavior. NoToggleToOff, when set, requires that one option always stay selected: clicking the currently selected button will not clear it, so the group can never return to an all-off state. RadiosInUnison governs what happens when more than one widget in the group shares the same on-state name; with it set, those same-valued buttons switch on and off together, which is how a form can show the same answer in two places at once, while without it the widgets are treated individually even when their values coincide."
      ]
    },
    {
      "heading": "Radio Buttons, Checkboxes, and Choice Fields",
      "body": [
        "Radio buttons, checkboxes, and choice fields all let a user pick from options, but they model the choice differently. A checkbox is a button field that toggles a single option on or off independently of any other. A radio group ties several options into one field so the selection is exclusive. Choice fields, meaning list boxes and combo boxes, present their options inside a single scrolling or drop-down widget rather than as separate clickable markers, and can be configured for single or multiple selection.",
        "The practical trade-off is visibility versus space. Radio buttons show every option at once, which suits short lists where seeing all the choices matters, while a combo box hides its options until opened, which suits long lists. None of these differences are cosmetic accidents of the viewer: they come from the field type and flags recorded in the PDF, which is why converting between them is a genuine change to the form's structure, not just its styling."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Field type",
      "value": "Button field (/FT Btn), shared with checkboxes and pushbuttons"
    },
    {
      "label": "Structure",
      "value": "One field with a /Kids array of widget annotations, one per option"
    },
    {
      "label": "Unselected state",
      "value": "The reserved appearance state named /Off"
    },
    {
      "label": "Standardized in",
      "value": "ISO 32000-1 (2008), as part of AcroForm interactive forms"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1:2008; ISO 32000-2",
    "introduced": "PDF 1.2 (AcroForm interactive forms)",
    "typicalUsage": "Single-choice questions in interactive PDF forms",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Radio buttons and checkboxes are different field types in a PDF.",
      "truth": "Both are button fields (/FT /Btn). The Radio and Pushbutton flags, not the field type, decide whether a button field acts as a radio group, a checkbox, or a pushbutton."
    },
    {
      "claim": "Each option in a radio group is its own separate form field.",
      "truth": "A radio group is a single field. Each clickable option is a widget annotation listed in that one field's /Kids array, which is what makes the choice mutually exclusive."
    },
    {
      "claim": "The value a radio group stores is the visible label text next to the button.",
      "truth": "The stored value is the selected widget's on-state name, which is the option's export value. The author chooses it, and it often differs from the label a reader sees."
    }
  ],
  "faq": [
    {
      "q": "Why does my PDF let me select more than one radio button at a time?",
      "a": "Most often the options were built as separate fields with different names, so each behaves like an independent checkbox instead of belonging to one group. True radio buttons share a single parent field and can hold only one value, so a viewer forces the others off."
    },
    {
      "q": "How does a PDF remember which radio button is chosen?",
      "a": "The parent field stores the on-state name of the selected option in its value entry (/V), and each widget's /AS entry records the state it is currently showing. A viewer displays whichever widget's on-state name matches the field value."
    },
    {
      "q": "Why are radio buttons round and checkboxes square?",
      "a": "That shape is a drawing convention carried in each widget's appearance stream, often a marker character from the ZapfDingbats font, rather than a rule enforced by the PDF format. Either control can be drawn with any shape."
    },
    {
      "q": "Can a radio group start with no option selected?",
      "a": "Yes. If the field value is absent or set to /Off, no option shows as selected. The exception is when the NoToggleToOff flag is set, which requires one option to remain selected at all times."
    },
    {
      "q": "What happens to radio buttons when a form is flattened?",
      "a": "Flattening paints each field's current appearance directly onto the page and removes the interactive field, so a flattened radio group becomes static graphics: the selected option stays visible but can no longer be changed."
    }
  ],
  "graph": {
    "parentConcept": "pdf-form-fields",
    "relatedConcepts": [
      "form-flattening",
      "fdf-and-xfdf",
      "signature-fields",
      "accessible-pdf-forms",
      "javascript-in-pdf",
      "pdf-annotations"
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
        "label": "How to Fill Out a PDF Form (Interactive or Flat)",
        "path": "/guides/how-to-fill-out-a-pdf-form"
      }
    ]
  },
  "seeAlso": [
    "pdf-form-fields",
    "checkbox-form-fields",
    "acroform",
    "widget-annotations",
    "form-field-flags",
    "appearance-streams",
    "choice-fields",
    "text-form-fields"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
