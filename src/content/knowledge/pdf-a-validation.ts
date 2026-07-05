import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a-validation",
  "h1": "PDF/A Validation",
  "cluster": "standards",
  "aliases": [
    "PDF/A conformance checking",
    "PDF/A compliance validation",
    "PDF/A verification",
    "validating PDF/A",
    "PDF/A conformance testing"
  ],
  "definition": "PDF/A validation is the process of checking whether a PDF actually meets the requirements of the PDF/A archival standard, such as embedded fonts, device-independent color, and complete metadata.",
  "description": "Learn how PDF/A validation verifies that a file conforms to the ISO 19005 archival standard, what validators like veraPDF check, and why files fail.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/A is the archival family of the PDF format, defined by the ISO 19005 series and designed so that a document renders the same way far into the future. PDF/A validation is the process that answers a simple but important question about a specific file: does it actually meet those archival rules?",
    "Because PDF/A is a constrained subset of ordinary PDF, conformance is never automatic. A normal PDF can violate many PDF/A requirements without any visible symptom. Validation compares a file against the specification's requirements and reports, requirement by requirement, what passes and what fails, always in relation to a particular part and conformance level.",
    "A file can also merely claim to be PDF/A in its metadata without truly conforming. Validation is what distinguishes a genuine claim from a false one, which is why archives and institutions that depend on long-term readability treat it as a checkpoint rather than trusting a label."
  ],
  "sections": [
    {
      "heading": "What a PDF/A Validator Checks",
      "body": [
        "The requirements fall into a few themes: everything needed to display the document must be embedded, nothing may depend on external or system resources, and nothing may behave dynamically. Concretely, a validator checks that all fonts, including subsets, are embedded with the width and encoding information needed to render and, at higher levels, extract text; that color is device-independent, typically requiring an output intent with an embedded ICC profile whenever device color spaces are used; that XMP metadata is present, well-formed, and consistent with the document; and that prohibited features are absent, such as encryption, JavaScript, launch and multimedia actions, references to external content, and, in PDF/A-1, transparency and certain compression filters like LZW.",
        "Beyond these, a validator inspects lower-level structural rules that most users never see, such as whether the cross-reference and trailer data are well-formed and whether a document identifier is present. Rather than returning a single pass or fail, a validator reports the specific requirements that were violated, so a typical report lists the individual rules or clauses that a file did not satisfy."
      ]
    },
    {
      "heading": "Conformance Claims vs. Real Conformance",
      "body": [
        "A PDF declares which PDF/A flavor it targets in its XMP metadata using the pdfaid namespace, which records the part and the conformance level. This declaration is only a claim. It is entirely possible, and common, for a file to carry a PDF/A identifier while failing validation, for example because a font was later stripped, an editor re-saved the file with encryption, or the metadata itself is inconsistent with the document.",
        "This is why the question 'is it PDF/A?' is really two questions: does the file assert conformance, and does it actually conform? Archival workflows generally validate a file on ingest instead of trusting its identifier, because a false claim is arguably worse than no claim at all: it implies a guarantee the file does not meet."
      ]
    },
    {
      "heading": "How Validators Apply the Rules",
      "body": [
        "Because the PDF/A requirements are numerous and precise, modern validators drive their checks from a machine-readable rule set rather than ad hoc code. The open-source veraPDF is widely used as a reference validator; it was developed with the PDF Association and the digital-preservation community and aims to implement the testable requirements of the PDF/A parts and levels. Print-oriented preflight engines can also perform PDF/A checks.",
        "A consequence of rule-driven validation is that results are meant to be reproducible and explainable: each failure is tied to the requirement it violates, which is what makes it possible to correct a file deliberately rather than by trial and error. Validation itself is read-only. It inspects and reports; it does not change the file. Turning a non-conforming file into a conforming one is a separate conversion or remediation step."
      ]
    },
    {
      "heading": "Conformance Levels Change What Is Checked",
      "body": [
        "Validation is always performed against a specific part and level, and the level determines how strict the check is. Level B, for basic conformance, focuses on reliable visual reproduction so the document looks the same everywhere. Level A, for accessible conformance, adds requirements for tagged structure, logical reading order, and Unicode character mapping, so a Level A check includes everything in Level B plus structural and accessibility rules. PDF/A-2 and later parts add Level U, which requires Unicode mapping of text without the full tagging of Level A.",
        "Because of this layering, the same file can pass at one level and fail at another. A visually correct but untagged document may validate as Level B while failing Level A, simply because the accessibility-related requirements are not present in the file. Choosing the target level before validating is therefore part of interpreting the result."
      ]
    },
    {
      "heading": "Why PDF/A Files Commonly Fail",
      "body": [
        "Certain failures recur. Non-embedded or only partially embedded fonts are among the most frequent, since PDF/A forbids relying on fonts installed on the reader's system. Color problems are also common: using RGB or CMYK without an output intent leaves the color device-dependent, which the standard does not allow. Files re-saved by a tool that added encryption, JavaScript, or an unsupported feature will fail, as will files whose XMP metadata is missing, malformed, or inconsistent with the document information dictionary.",
        "Many of these problems come from editing a validated file after the fact. The moment a document is modified and re-saved by software that is not PDF/A-aware, its conformance can be lost even though the metadata still claims it. That is why validation is best treated as a check applied to the final file rather than a permanent property a document keeps once it has been earned."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "PDF/A is defined by the ISO 19005 series (PDF/A-1 through PDF/A-4)"
    },
    {
      "label": "Conformance claim",
      "value": "Declared in XMP metadata via the pdfaid namespace (part plus level A, B, or U)"
    },
    {
      "label": "Reference validator",
      "value": "veraPDF, an open-source validator developed with the PDF Association"
    },
    {
      "label": "Non-destructive",
      "value": "Validation only inspects and reports; it does not modify the file"
    }
  ],
  "specification": {
    "iso": "ISO 19005 (PDF/A)",
    "typicalUsage": "Verifying that a PDF meets a stated PDF/A part and conformance level before archiving or ingest.",
    "relatedStandards": [
      "pdf-a",
      "pdf-a-conformance-levels",
      "verapdf"
    ]
  },
  "misconceptions": [
    {
      "claim": "If a file's properties say PDF/A, it is valid PDF/A.",
      "truth": "The pdfaid metadata is only a claim of conformance. A validator still has to check the file, and files frequently fail despite carrying the PDF/A identifier."
    },
    {
      "claim": "Passing PDF/A validation makes a document accessible.",
      "truth": "Only Level A conformance covers tagging and logical structure. A file can pass Level B or Level U validation while still being inaccessible to screen readers."
    },
    {
      "claim": "Running validation fixes a non-conforming file.",
      "truth": "Validation is read-only. Making a file conform is a separate conversion or remediation step, often handled by a preflight or PDF/A conversion tool."
    }
  ],
  "faq": [
    {
      "q": "What does a PDF/A validator actually check?",
      "a": "It checks the requirements of the PDF/A standard: that all fonts are embedded, that color is device-independent (usually via an output intent with an ICC profile), that XMP metadata is present and consistent, and that prohibited features such as encryption and JavaScript are absent. Higher levels also check tagging and text mapping."
    },
    {
      "q": "What is veraPDF?",
      "a": "veraPDF is an open-source PDF/A validator developed with the PDF Association and the digital-preservation community. It implements the testable requirements of the PDF/A parts and levels and is widely used as a reference validator."
    },
    {
      "q": "Why does my PDF fail PDF/A validation even though it says it is PDF/A?",
      "a": "The PDF/A identifier in the metadata is only a claim. Common reasons for failure include fonts that are not embedded, device color spaces used without an output intent, encryption or JavaScript added by an editor, or metadata that is missing or inconsistent with the document."
    },
    {
      "q": "Can the same file pass one conformance level but fail another?",
      "a": "Yes. Level A adds tagged structure, reading order, and Unicode-mapping requirements on top of Level B, so a visually correct but untagged file can validate as Level B while failing Level A."
    },
    {
      "q": "Does validating a PDF change the file?",
      "a": "No. Validation is read-only: it inspects the file and reports which requirements pass or fail. Turning a non-conforming file into a conforming one is a separate conversion step."
    }
  ],
  "graph": {
    "parentConcept": "pdf-a",
    "childConcepts": [
      "verapdf"
    ],
    "relatedConcepts": [
      "font-embedding",
      "xmp-metadata",
      "icc-based-color",
      "pdf-output-intent",
      "tagged-pdf"
    ],
    "relatedStandards": [
      "pdf-a-1",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-a-4"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      }
    ]
  },
  "seeAlso": [
    "pdf-a",
    "pdf-a-conformance-levels",
    "verapdf",
    "pdf-a-metadata-requirements",
    "pdf-a-font-embedding",
    "pdf-validation",
    "pdf-preflight",
    "pdf-standards-overview"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
