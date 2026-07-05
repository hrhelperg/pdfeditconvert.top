import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-output-intent",
  "h1": "PDF Output Intents",
  "cluster": "standards",
  "aliases": [
    "Output intent",
    "OutputIntents",
    "PDF/X output intent",
    "PDF/A output intent",
    "destination profile"
  ],
  "definition": "A PDF output intent is embedded information — usually an ICC profile — that identifies the destination color space or printing condition a file was prepared to be reproduced on.",
  "description": "An output intent embeds an ICC profile so PDF/X and PDF/A files carry the color condition they were built for. Learn how it works and where it lives.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF output intent is a small package of information, embedded in the file, that names the specific output condition a document was prepared for — most importantly by carrying an ICC profile for the destination color space. In effect, it is the document stating, 'assume I will be reproduced here.'",
    "That statement matters because device color values in a PDF are ambiguous on their own. The same DeviceCMYK ink percentages produce different results on different presses, papers, and proofing systems. By pinning the file to a defined printing or display condition, the output intent gives downstream software a fixed reference for interpreting those colors and for previewing the final result.",
    "Output intents are optional in ordinary PDFs but central to the print and archival standards. PDF/X requires one to describe the target press condition, and PDF/A uses one to keep device colors unambiguous for the long term. A common misunderstanding is that an output intent converts the document's colors; it does not — it characterizes intent, while any real color conversion happens elsewhere."
  ],
  "sections": [
    {
      "heading": "Where an output intent lives",
      "body": [
        "The document catalog carries an optional OutputIntents entry whose value is an array. Each element is a dictionary with Type set to OutputIntent and a subtype key, S, that names the standard it serves. Alongside S, the dictionary records a machine-readable OutputConditionIdentifier, an optional human-readable OutputCondition, a RegistryName (typically a URL for a public registry of standard conditions), and an Info string.",
        "The most important entry is DestOutputProfile, a stream that embeds an ICC profile for the destination color space. When the identifier names a condition that is registered in a public registry — for example the ICC characterization data registry at color.org — the embedded profile may be omitted and looked up externally. Standards designed for blind exchange, such as PDF/X, instead require the profile to be embedded so the file is fully self-contained."
      ]
    },
    {
      "heading": "What the destination profile does — and doesn't do",
      "body": [
        "The output intent characterizes the intended reproduction environment; it does not convert the page's colors. Objects that use device color spaces (DeviceGray, DeviceRGB, DeviceCMYK) are, by themselves, ambiguous: the same values render differently on different devices. The output intent supplies the missing reference so a RIP or viewer can interpret those device values against a defined condition, and so soft-proofing tools can simulate the final result on screen.",
        "Colors that already carry their own characterization — ICCBased color spaces, or Lab — keep their own profiles and are unaffected by the output intent. It functions as an assumed profile for otherwise-uncharacterized device color and as a statement of intent for the whole document. Nothing in the file is re-encoded; a preflight or export step is what would actually transform colors into the destination space."
      ]
    },
    {
      "heading": "Output intents in PDF/X and PDF/A",
      "body": [
        "Output intents were popularized by PDF/X, the print-exchange family (ISO 15930). A PDF/X file must contain exactly one output intent with the subtype GTS_PDFX, and that intent must embed a DestOutputProfile representing the printing condition — for example a FOGRA-based condition common in European offset, or GRACoL and SWOP conditions used in North America. This lets a printer receive a PDF/X file and know precisely which paper-and-press behavior the separations were built for.",
        "PDF/A, the archival family (ISO 19005), uses an output intent (historically with the subtype GTS_PDFA1) to pin down the meaning of device colors so an archived file reproduces consistently far into the future. The exact conditions under which an output intent is required differ between PDF/A parts and conformance levels, but the underlying purpose is the same: remove ambiguity from device-dependent color. A single file can even carry more than one intent — for instance, to be valid as both PDF/A and PDF/X."
      ]
    },
    {
      "heading": "Output intent versus rendering intent",
      "body": [
        "These two similarly named concepts are routinely confused. A rendering intent — perceptual, relative colorimetric, saturation, or absolute colorimetric — is a per-object or graphics-state setting that chooses how colors are mapped when they fall outside the destination gamut during a conversion. An output intent, by contrast, is a document-level description of the destination itself.",
        "In practice they work together: the output intent says where the file is going, and a rendering intent says how to squeeze out-of-gamut colors into that destination when a conversion actually happens. One characterizes the target; the other governs the mapping."
      ]
    },
    {
      "heading": "Multiple intents and PDF 2.0",
      "body": [
        "The OutputIntents value is an array precisely because a document can declare more than one intended condition — commonly when the same file needs to satisfy two standards at once. PDF/X constrains this by permitting only a single PDF/X-subtype intent, so tools can identify the print condition unambiguously.",
        "PDF 2.0 (ISO 32000-2) extended the model, including the ability to associate output intents with individual pages rather than only the whole document. That helps composite jobs, such as variable-data printing, where different pages are destined for different output conditions. The document-level array remains the common case for everyday print and archival files."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Location",
      "value": "Stored in the document catalog as the OutputIntents array; each entry is an OutputIntent dictionary."
    },
    {
      "label": "Destination profile",
      "value": "The DestOutputProfile stream embeds an ICC output profile describing the target color space."
    },
    {
      "label": "Subtype (S)",
      "value": "GTS_PDFX marks a PDF/X intent; GTS_PDFA1 marks a PDF/A intent."
    },
    {
      "label": "Introduced",
      "value": "Output intents were added to core PDF in PDF 1.4."
    }
  ],
  "specification": {
    "introduced": "PDF 1.4",
    "iso": "Part of ISO 32000 (PDF); mandated by ISO 15930 (PDF/X) and ISO 19005 (PDF/A)",
    "latestVersion": "Extended in PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Declaring the destination color condition for print exchange (PDF/X) and archiving (PDF/A).",
    "relatedStandards": [
      "pdf-x",
      "pdf-a",
      "iso-32000",
      "pdf-x-4",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "An output intent converts every color in the PDF to the target profile.",
      "truth": "It changes no colors. It characterizes the intended output and provides an assumed reference for device colors; actual conversion happens only during preflight or export."
    },
    {
      "claim": "Output intent and rendering intent are two names for the same setting.",
      "truth": "They are different: an output intent describes the destination condition for the whole document, while a rendering intent is a per-object choice about how to map out-of-gamut colors during a conversion."
    },
    {
      "claim": "Every PDF contains an output intent.",
      "truth": "It is optional in general PDF. It is required by print and archival standards such as PDF/X and (conditionally) PDF/A, but ordinary PDFs often have none."
    }
  ],
  "faq": [
    {
      "q": "Where is the output intent stored in a PDF file?",
      "a": "In the document catalog, under an OutputIntents array. Each entry is an OutputIntent dictionary that can embed an ICC destination profile in its DestOutputProfile stream."
    },
    {
      "q": "Does a PDF/X file have to include an output intent?",
      "a": "Yes. A PDF/X file must carry exactly one output intent with the GTS_PDFX subtype, and it must embed the destination ICC profile so the printing condition travels with the file."
    },
    {
      "q": "Can a PDF have more than one output intent?",
      "a": "Yes — the OutputIntents value is an array, so a file can declare several conditions, for example to be valid as both PDF/A and PDF/X. PDF/X still permits only one PDF/X-subtype intent."
    },
    {
      "q": "When can the embedded profile be left out?",
      "a": "In general PDF, DestOutputProfile may be omitted when OutputConditionIdentifier names a condition registered in a public registry that a reader can look up. Self-contained standards like PDF/X require the profile to be embedded."
    },
    {
      "q": "What does OutputConditionIdentifier contain?",
      "a": "A short string naming the intended condition — often a registered name such as a FOGRA, GRACoL, or SWOP characterization — paired with a RegistryName URL pointing at the registry where that name is defined."
    }
  ],
  "graph": {
    "parentConcept": "pdf-x",
    "relatedConcepts": [
      "rendering-intent",
      "icc-based-color",
      "devicecmyk",
      "spot-colors",
      "pdf-preflight",
      "press-ready-pdf"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-a",
      "pdf-x-1a",
      "pdf-x-3",
      "pdf-x-4",
      "iso-32000"
    ]
  },
  "seeAlso": [
    "pdf-x",
    "pdf-a",
    "icc-profiles-in-pdf",
    "icc-based-color",
    "rendering-intent",
    "color-management-in-pdf",
    "print-production-with-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
