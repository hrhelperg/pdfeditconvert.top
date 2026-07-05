import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "signature-fields",
  "h1": "Signature Fields in PDF",
  "cluster": "interactivity",
  "aliases": [
    "signature form field",
    "/Sig field",
    "digital signature field",
    "signature placeholder",
    "unsigned signature field"
  ],
  "definition": "A signature field is a PDF form field of type /Sig that reserves a place on the document to hold a digital signature, or stays empty until one is applied.",
  "description": "A signature field is the form-field placeholder in a PDF that reserves space for a digital signature and ties it to a widget annotation on the page.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A signature field is one of the interactive form field types defined for PDF's AcroForm system. Unlike a text field that stores typed characters or a checkbox that stores an on/off state, a signature field is a container whose job is to hold a digital signature — or to sit empty as a designated place where someone is expected to sign.",
    "It helps to separate two things that people routinely merge: the field, which is a structural placeholder that belongs to the form, and the digital signature, which is the cryptographic data that fills it. A blank contract can ship with an empty signature field already positioned where a signer should sign; only when signing actually occurs does the field gain a value that points to the signature itself.",
    "Because a signature field is both a form field and a widget annotation, it bridges the interactive-form model and the visible page. Its presence lets a viewer offer a 'sign here' affordance, drives multi-party signing workflows, and — once filled — anchors the tamper-evidence guarantees that PDF digital signatures provide."
  ],
  "sections": [
    {
      "heading": "A Signature Field Is a Form Field, Not the Signature Itself",
      "body": [
        "In PDF's interactive form (AcroForm) model, every field carries a field-type key, /FT. A signature field sets /FT to /Sig, placing it alongside text (/Tx), button (/Btn), and choice (/Ch) fields. What sets it apart is its value: where a text field's value is a string and a checkbox's is an on/off name, a signature field's value (/V) is a reference to a signature dictionary — the object that actually stores the encoded signature, the covered byte range, and signer details.",
        "Until the field is signed, it usually has no value at all. Framing the field as a container that is distinct from the signature that fills it is the key to understanding everything else about it, and it is why the deeper cryptographic details are described separately on the digital signatures page."
      ]
    },
    {
      "heading": "How the Field Connects to the Page",
      "body": [
        "A form field is a logical object, but a reader needs something to see and something to click. That role is played by a widget annotation. For a signature field the field dictionary and its single widget annotation are often merged into one dictionary, so a single object describes both the field's identity and its rectangle, border, and appearance on a given page.",
        "The widget's rectangle sets where a signed appearance is drawn; a rectangle of zero width and height ([0 0 0 0]) produces an invisible signature that signs the document without leaving any visible mark. The interactive-form dictionary also carries a /SigFlags entry whose bits advertise that signatures exist in the document and whether the file should only be modified by appending, which viewers use to warn against edits that would break an existing signature."
      ]
    },
    {
      "heading": "Empty, Signed, and Invisible States",
      "body": [
        "A signature field exists in more than one state. An empty (unsigned) field is a reserved placeholder: it appears in the form's field list and on the page but has no /V, signalling a spot that is awaiting a signer. Once signing occurs, the field gains a value that points to a signature dictionary, and an appearance is generated so the field can show a name, date, reason, or graphic.",
        "A field can also be invisible by design, contributing a cryptographic signature with no on-page representation. A single document can contain several signature fields, which is what makes sequential, multi-party signing possible: each signer completes a different field, and each signing is written as an incremental update appended to the file so earlier signatures stay intact."
      ]
    },
    {
      "heading": "Constraining and Locking Signature Fields",
      "body": [
        "Two optional dictionaries shape how a signature field behaves. A seed-value dictionary (/SV) lets the form author constrain the signature that may be applied — for example, suggesting or requiring particular signing parameters — so the signer's tool can guide or restrict the operation. A lock dictionary (/Lock) specifies which fields become read-only once this field is signed, allowing a form to freeze some or all of its contents at signing time.",
        "A related mechanism, a certification (author) signature, can declare which kinds of later changes are permitted without invalidating the signature. These controls live at the field level, but their effects reach across the whole document, which is why signature fields sit at the intersection of the form model and the security model."
      ]
    },
    {
      "heading": "Signature Fields Versus Digital Signatures",
      "body": [
        "Because the two are so closely linked, 'signature field' and 'digital signature' are often used interchangeably, yet they answer different questions. The signature field answers where and how signing is offered: it is form structure — placement, appearance, constraints, and locking. The digital signature answers what was signed and by whom: it is the cryptographic object that binds a signer's identity to a specific byte range of the file so that any later alteration is detectable.",
        "A field can exist with no signature (an empty placeholder), and signing can even occur in ways that create these structures on the fly. Keeping the distinction clear makes it easier to reason about validation, appearances, and long-term verification, each of which is covered on its own page."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Field type",
      "value": "A signature field sets the form field's /FT key to /Sig."
    },
    {
      "label": "Value",
      "value": "A signed field's /V references a signature dictionary; an empty field has no value."
    },
    {
      "label": "On-page role",
      "value": "The field is drawn through a widget annotation; a zero-size rectangle makes it invisible."
    },
    {
      "label": "Availability",
      "value": "Signature fields have been part of PDF's form model since PDF 1.3."
    }
  ],
  "specification": {
    "introduced": "PDF 1.3",
    "iso": "ISO 32000",
    "typicalUsage": "Placeholders that reserve a spot for a digital signature in interactive PDF forms and signing workflows.",
    "relatedStandards": [
      "iso-32000",
      "pades"
    ]
  },
  "misconceptions": [
    {
      "claim": "A document that has a signature field is already signed.",
      "truth": "A signature field is often an empty placeholder with no value; it only holds a signature after one is applied, and it can remain unsigned indefinitely."
    },
    {
      "claim": "The signature field itself stores the cryptographic signature.",
      "truth": "The field is a container. The actual signature — its byte range, certificate chain, and encoded value — lives in a separate signature dictionary that the field's value points to."
    },
    {
      "claim": "A PDF needs a pre-made signature field before anyone can sign it.",
      "truth": "A field placed in advance is a convenience for positioning and workflow; signing tools can create the required structures at signing time, so a blank document can still be signed."
    }
  ],
  "faq": [
    {
      "q": "How is a signature field different from a text or checkbox field?",
      "a": "All three are AcroForm fields, but a signature field's value is a reference to a signature dictionary rather than a string or an on/off name, and filling it triggers hashing over a byte range of the file instead of simply storing input."
    },
    {
      "q": "Can one PDF contain several signature fields?",
      "a": "Yes. Multiple signature fields support multi-party or sequential signing; each signer completes a different field, and each signing is recorded as an incremental update appended to the file so earlier signatures remain intact."
    },
    {
      "q": "Does a signature field have to be visible?",
      "a": "No. A widget rectangle of zero width and height produces an invisible signature field, which signs the document without drawing anything on the page; a visible field instead shows an appearance such as a name, date, or graphic."
    },
    {
      "q": "What is the /SigFlags entry?",
      "a": "/SigFlags is a value in the document's interactive-form dictionary whose bits indicate that signatures exist and whether the file should only be modified by appending, helping viewers warn users before an edit that would break a signature."
    },
    {
      "q": "Is a signature field the same as an image of a handwritten signature?",
      "a": "No. Placing a picture of a signature on a page is just graphics with no cryptographic meaning, whereas a signature field is form structure designed to hold a digital signature that binds an identity to the file's contents."
    }
  ],
  "graph": {
    "parentConcept": "pdf-form-fields",
    "relatedConcepts": [
      "text-form-fields",
      "checkbox-form-fields",
      "choice-fields",
      "form-flattening",
      "appearance-streams",
      "pdf-annotations"
    ],
    "relatedStandards": [
      "pades",
      "cades-in-pdf",
      "ltv-signatures",
      "timestamp-signatures",
      "document-security-store",
      "electronic-vs-digital-signature"
    ],
    "relatedTools": [
      {
        "label": "Sign PDF — Add Electronic Signatures on Phone",
        "path": "/sign-pdf"
      },
      {
        "label": "PDF Forms — Fill, Sign and Manage Fillable PDFs",
        "path": "/pdf-forms"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Sign a PDF on Your Phone",
        "path": "/guides/how-to-sign-pdf-on-phone"
      },
      {
        "label": "How PDF Forms Work — Fields, AcroForms and Flat Scans",
        "path": "/guides/how-pdf-forms-work"
      },
      {
        "label": "How to Use PDF Forms for Contracts (Fields & Signing)",
        "path": "/guides/how-to-use-pdf-forms-for-contracts"
      }
    ]
  },
  "seeAlso": [
    "pdf-form-fields",
    "pdf-digital-signatures",
    "acroform",
    "widget-annotations",
    "signature-appearance",
    "approval-vs-certification-signatures",
    "signature-validation",
    "form-field-flags"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
