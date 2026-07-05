import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "form-field-flags",
  "h1": "PDF Form Field Flags",
  "cluster": "interactivity",
  "aliases": [
    "Ff entry",
    "Ff field flags",
    "AcroForm field flags",
    "field flags",
    "form field bit flags"
  ],
  "definition": "PDF form field flags are the bits packed into a field dictionary's Ff entry that switch on behaviors such as read-only, required, multiline, password, or radio-button handling.",
  "description": "Form field flags live in the Ff entry of an AcroForm field as a bit field, toggling read-only, required, multiline, password, combo, comb and other behaviors.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "In an AcroForm, every interactive form field is a PDF dictionary, and much of how that field behaves is not stored as separate keys but packed into a single integer called Ff. Each bit of that integer is a flag: a yes/no switch that a conforming viewer reads to decide whether a text field accepts multiple lines, whether a control is a radio button or a pushbutton, whether a value is mandatory, and so on. Because the flags share one integer, they are combined the way any bit field is: by adding (bitwise OR-ing) the individual bit values together.",
    "The flags fall into two groups. A small set applies to fields of any type and controls document-wide behaviors like whether the field is read-only or required. The rest are specific to the field's type, defined only for button fields, text fields, or choice fields, and they carry the personality of each control, turning a plain text box into a password entry, a comb of fixed cells, or a file-path picker. Understanding which bit means what is the difference between a field that behaves as intended and one that silently ignores your input.",
    "Form field flags are a structural detail rather than something a reader sees directly, but they underlie many everyday form questions, such as why a field cannot be typed into or why a set of choices behaves as radio buttons. This page explains where the flags are stored, how the bit field is interpreted, and what the most common flags do."
  ],
  "sections": [
    {
      "heading": "How the flags are stored in the Ff entry",
      "body": [
        "Field flags live in the Ff entry of a form field dictionary. Its value is a single integer that the PDF specification interprets as a bit field, where each meaningful bit corresponds to one named flag. The specification numbers bit positions starting at 1 for the low-order bit, so a flag described as 'bit position n' has the numeric value 2 raised to the power (n minus 1). ReadOnly is bit position 1 (value 1), Required is bit position 2 (value 2), and NoExport is bit position 3 (value 4).",
        "To set several behaviors at once you combine their values. A field that is both required (2) and multiline is expressed by summing the relevant bit values into one Ff integer, and a viewer reads the integer back bit by bit. If Ff is absent, all flags are treated as unset. This compact representation is efficient but opaque: the same number can encode very different behavior depending on the field's type, because most bits are only defined for a particular type of control."
      ]
    },
    {
      "heading": "Flags shared by every field type",
      "body": [
        "Three flags apply regardless of whether the field is a button, text, or choice field. ReadOnly tells a conforming reader not to let the user change the field's value through the interface; it does not delete the field or its value, and it is not a security measure, since the bit itself can be cleared by editing the Ff entry. Required marks the field as one that must have a value before the form is submitted, and a conforming viewer enforces this at submit time. NoExport instructs the viewer to leave the field's value out of the data that is exported or submitted, even though the value still lives in the file.",
        "Because these flags govern general behavior rather than a specific widget, they are the ones most likely to surface in day-to-day form problems, such as a field that refuses input because ReadOnly is set. They are also frequently confused with document-level permission flags, which are a separate mechanism stored in the encryption dictionary."
      ]
    },
    {
      "heading": "Flags specific to buttons, text, and choice fields",
      "body": [
        "Most flags are defined only for a particular field type. For button fields, the Pushbutton flag marks a control that has no value and simply triggers an action, the Radio flag marks a set of mutually exclusive radio buttons, and NoToggleToOff forces one radio button in a group to stay selected at all times. For text fields, Multiline allows more than one line of text, Password hides the typed characters behind bullets or asterisks, Comb divides the field into a fixed number of equally spaced cells (which requires a MaxLen value), and FileSelect turns the field into a picker for a file path.",
        "For choice fields, which present lists of options, the Combo flag distinguishes a drop-down combo box from a scrolling list box, Edit lets the user type a custom value into a combo box, Sort keeps the options in alphabetical order, and MultiSelect allows more than one option to be chosen at once. Because these bits are type-specific, the same numeric bit position can mean different things on different field types, so a flag value is only meaningful once you know the field's type (its FT entry)."
      ]
    },
    {
      "heading": "Inheritance and how flags interact with the rest of the field",
      "body": [
        "Field flags are one of the attributes that can be inherited through the AcroForm field hierarchy. Along with the field type, value, and default value, the Ff entry may be set on a parent field and inherited by its children, so flags do not always have to be repeated on every terminal field. This matters when reading a PDF: a field that appears to have no Ff of its own may still be governed by flags defined higher up the tree.",
        "Flags describe intent, but the visible result depends on other parts of the field and on the viewer honoring them. A Password or Comb text field still relies on its appearance stream to render correctly, a Required field is only enforced by a conforming viewer at submission, and a ReadOnly field can be flattened or unlocked by tools that rewrite the field dictionary. Because the flags are advisory to the reader software rather than cryptographically enforced, they configure behavior rather than guarantee it."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Storage",
      "value": "A single integer in the field dictionary's Ff entry, read as a bit field."
    },
    {
      "label": "Universal flags",
      "value": "ReadOnly (bit 1), Required (bit 2), and NoExport (bit 3) apply to any field type."
    },
    {
      "label": "Type-specific",
      "value": "Most flags are defined only for button, text, or choice fields."
    },
    {
      "label": "Inheritable",
      "value": "Ff can be inherited down the AcroForm field hierarchy along with FT, V, and DV."
    }
  ],
  "specification": {
    "iso": "ISO 32000-1 / ISO 32000-2",
    "typicalUsage": "Configuring interactive AcroForm field behavior (read-only, required, multiline, password, radio, combo, comb) via the Ff bit field.",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Setting the ReadOnly flag locks the document so no one can change the field.",
      "truth": "ReadOnly only asks conforming viewers to prevent interactive edits to that field; it is not encryption and can be cleared by any tool that rewrites the Ff entry."
    },
    {
      "claim": "Form field flags and document permission flags are the same thing.",
      "truth": "They are separate. Permission flags live in the encryption dictionary and govern document-level actions, while field flags live in each field's Ff entry and govern that one field's behavior."
    },
    {
      "claim": "The Required flag guarantees the field will be filled in before the file can be saved.",
      "truth": "Required is enforced by a conforming viewer at submit time, not baked into the file; a non-conforming tool can ignore it or save the form incomplete."
    }
  ],
  "faq": [
    {
      "q": "Where are PDF form field flags stored?",
      "a": "In the Ff entry of a form field's dictionary. The value is one integer that the PDF specification reads as a bit field, with each bit corresponding to a named flag."
    },
    {
      "q": "How do you combine more than one flag?",
      "a": "You add the individual bit values together (a bitwise OR) into the single Ff integer. A viewer then reads the integer bit by bit to recover each flag."
    },
    {
      "q": "Do these flags apply to XFA forms too?",
      "a": "The Ff flags described here belong to AcroForm fields. XFA forms describe behavior in their own XML configuration instead, though hybrid documents can carry both an AcroForm and an XFA representation."
    },
    {
      "q": "Can a field be both Required and ReadOnly?",
      "a": "Technically yes, since they are independent bits, but the combination is contradictory because the user cannot supply the value the field demands, so it is usually a mistake rather than an intended design."
    },
    {
      "q": "Why does the same bit value mean different things on different fields?",
      "a": "Most flag bits are defined only for a specific field type, so the meaning of a bit depends on the field's type entry (FT); a bit set on a text field and the same bit on a choice field can represent unrelated behaviors."
    }
  ],
  "graph": {
    "parentConcept": "pdf-form-fields",
    "relatedConcepts": [
      "pdf-permission-flags",
      "font-flags",
      "signature-fields",
      "form-calculation",
      "appearance-streams",
      "xfa-forms",
      "fdf-and-xfdf"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ],
    "relatedFormats": [
      "acroform",
      "xfa-forms"
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
        "label": "Why a PDF Form Is Read-Only (And What to Do)",
        "path": "/guides/why-pdf-form-is-read-only"
      },
      {
        "label": "How PDF Forms Work — Fields, AcroForms and Flat Scans",
        "path": "/guides/how-pdf-forms-work"
      },
      {
        "label": "Why Can't I Type in a PDF Form? Causes and Fixes",
        "path": "/guides/why-cant-i-type-in-a-pdf-form"
      }
    ]
  },
  "seeAlso": [
    "pdf-form-fields",
    "acroform",
    "text-form-fields",
    "checkbox-form-fields",
    "radio-button-fields",
    "choice-fields",
    "form-flattening",
    "widget-annotations"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
