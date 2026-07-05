import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a",
  "h1": "PDF/A",
  "cluster": "standards",
  "aliases": [
    "PDF for Archiving",
    "Archival PDF",
    "ISO 19005",
    "PDF/Archive"
  ],
  "definition": "PDF/A is an ISO-standardized version of PDF (ISO 19005) built for long-term archiving, requiring a document to embed everything needed to reproduce its appearance.",
  "description": "PDF/A (ISO 19005) is the archival subset of PDF: fonts, color and everything needed to display a document are embedded so it stays readable for decades.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/A is the version of PDF designed for archiving. Standardized by ISO as ISO 19005, it takes the familiar PDF format and tightens its rules so that a document will still open, look correct, and be readable far into the future — long after the fonts, software, and systems used to create it may have disappeared.",
    "The guiding idea is that an archival file must be self-contained and device-independent. Everything needed to render the page — fonts, color definitions, and other resources — has to live inside the file, and anything that could make the document depend on the outside world or behave unpredictably, such as encryption, external links, or embedded scripts, is restricted or forbidden.",
    "PDF/A is not a different file type with its own extension; a PDF/A file is still a .pdf. What distinguishes it is a set of constraints plus metadata that declares which part of the standard and which conformance level the file targets. Over time the standard has grown into a small family of parts and levels, each balancing preservation guarantees against the modern PDF features it allows."
  ],
  "sections": [
    {
      "heading": "What Makes a PDF a PDF/A",
      "body": [
        "PDF/A is not a separate file format but a constrained profile of ordinary PDF. Its central rule is self-containment: a conforming file must carry, inside itself, everything a viewer needs to display the page exactly as intended, without reaching out to the operating system, the network, or whatever software happens to be installed. In practice this means fonts must be embedded (and embeddable under their licensing), so a viewer never has to substitute a look-alike typeface, and text is expected to map cleanly to the characters it represents.",
        "Color must also be reproducible in a device-independent way. A PDF/A file that uses device color such as DeviceRGB or DeviceCMYK is expected to include an output intent with an embedded ICC profile that defines how those colors should look. On top of these positive requirements, PDF/A forbids features that undermine long-term reliability: encryption is not allowed, external references to outside content are restricted, and constructs such as embedded audio and video, JavaScript, and launch actions are prohibited. Each conforming file also carries XMP metadata declaring which part and conformance level it targets."
      ]
    },
    {
      "heading": "The Parts of PDF/A",
      "body": [
        "PDF/A is published in numbered parts under ISO 19005, and newer parts do not retire older ones — a given file is produced to a specific part. PDF/A-1 (2005) is the original and strictest profile, built on PDF 1.4, and it prohibits features such as transparency and LZW compression. PDF/A-2 (2011) is based on PDF 1.7, the same technology later standardized as ISO 32000-1, and relaxes several restrictions, permitting transparency, optional-content layers, JPEG 2000 image compression, and the embedding of other PDF/A files.",
        "PDF/A-3 (2012) is very close to PDF/A-2 but adds one significant capability: it allows arbitrary files of any type to be embedded as associated files, which is what makes hybrid documents such as machine-readable invoices possible. PDF/A-4 (2020) is the newest part and is based on PDF 2.0 (ISO 32000-2); it modernizes the profile and reworks how conformance is expressed, replacing the older level letters with a base conformance plus dedicated variants for documents that embed files or that carry engineering data."
      ]
    },
    {
      "heading": "Conformance Levels: A, B and U",
      "body": [
        "Within the earlier parts, a file also states a conformance level that describes how much it guarantees. Level B (basic) guarantees faithful visual reproduction — the document will look the same — but says nothing about the underlying text or structure. Level A (accessible) is stricter: it additionally requires a tagged logical structure and reliable Unicode mapping, so the content can be searched, extracted, reflowed, and read by assistive technology in the correct order.",
        "PDF/A-2 introduced a middle level, U (Unicode), which requires that all text be mapped to Unicode without demanding the full tagged structure that Level A needs. PDF/A-4 changes this scheme: it drops the A, B, and U letters and instead defines a single base conformance alongside variants for embedded files and for engineering content. Because the levels describe different guarantees rather than quality tiers, the appropriate choice depends on whether text extraction and accessibility matter for a given archive."
      ]
    },
    {
      "heading": "Declaring and Validating Conformance",
      "body": [
        "A PDF/A file announces its status through an identification schema in its XMP metadata, recording the part number and conformance level. That declaration is a claim of intent, not proof — a file can carry the metadata and still violate the rules. Actual conformance is determined by validating the file's bytes against the specification, which is why preservation workflows treat validation as a distinct step rather than trusting the label.",
        "veraPDF is the open-source reference validator most closely associated with the standard; preflight features in professional PDF software perform similar checks and can often repair common problems, such as embedding missing fonts or adding an output intent. Because editing a PDF/A can silently break its conformance, files are usually re-validated after any change."
      ]
    },
    {
      "heading": "Where PDF/A Is Used",
      "body": [
        "PDF/A exists because organizations need documents to remain legible and trustworthy long after the software that created them is gone. National archives, libraries, courts, government agencies, and businesses commonly specify PDF/A for records that must be retained for years or decades, and many electronic filing and deposit systems request or accept it for exactly this reason.",
        "The standard does not by itself carry any legal force; it is a technical specification for how a file should be built. Whether a particular institution requires PDF/A, and which part or level, is a policy decision made by that institution rather than something the format dictates."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "ISO 19005 (\"PDF/A\")"
    },
    {
      "label": "First published",
      "value": "PDF/A-1 in 2005, based on PDF 1.4"
    },
    {
      "label": "Key rule",
      "value": "Fonts, color data and other resources must be embedded; encryption is not allowed"
    },
    {
      "label": "Conformance levels",
      "value": "Level B (visual), Level A (accessible) and Level U (Unicode)"
    }
  ],
  "specification": {
    "iso": "ISO 19005",
    "introduced": "2005 (PDF/A-1)",
    "latestVersion": "PDF/A-4 (ISO 19005-4:2020), based on PDF 2.0",
    "typicalUsage": "Long-term archiving and preservation of electronic documents",
    "relatedStandards": [
      "pdf-x",
      "pdf-ua",
      "pdf-standards-overview",
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "Any PDF is already a PDF/A, or saving as PDF/A always works.",
      "truth": "PDF/A is a strict subset. A normal PDF must be converted to it, and conversion can fail if fonts are not embedded, the file is encrypted, or it uses features PDF/A prohibits."
    },
    {
      "claim": "A PDF/A file is locked or read-only and cannot be changed.",
      "truth": "PDF/A does not lock or encrypt a document; it only constrains features for preservation. A PDF/A can still be edited, but editing may break its conformance, so it should be re-validated afterward."
    },
    {
      "claim": "If the metadata says PDF/A, the file is guaranteed to be valid.",
      "truth": "The identification metadata only declares which part and level a file targets. Real conformance must be confirmed by validating the file's contents against the specification."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between PDF/A-1, PDF/A-2 and PDF/A-3?",
      "a": "Each part builds on a newer PDF base and adjusts what is allowed. PDF/A-1 (PDF 1.4) is the strictest and, for example, does not permit transparency. PDF/A-2 (PDF 1.7) adds transparency, layers, JPEG 2000 and embedding of other PDF/A files. PDF/A-3 additionally allows embedding arbitrary files of any type."
    },
    {
      "q": "Does PDF/A allow transparency?",
      "a": "Not in PDF/A-1, which is based on PDF 1.4 and prohibits it. PDF/A-2 and later parts permit transparency, which is one of the main reasons those newer parts exist."
    },
    {
      "q": "Can I embed another file, such as an XML invoice, inside a PDF/A?",
      "a": "PDF/A-3 (and the file-embedding variant of PDF/A-4) allow arbitrary files to be attached as associated files, which is what enables hybrid invoice formats. PDF/A-1 and PDF/A-2 restrict what may be embedded."
    },
    {
      "q": "Is a PDF/A automatically an accessible, tagged PDF?",
      "a": "Only the A (accessible) conformance level requires a tagged logical structure. Level B and Level U do not. PDF/A and PDF/UA are separate standards that address different goals and can be satisfied together."
    },
    {
      "q": "How can I tell whether a file really conforms to PDF/A?",
      "a": "Run it through a validator such as veraPDF or a preflight tool. The file's metadata states which part and level it claims, but only validation against the specification confirms that the actual contents comply."
    }
  ],
  "graph": {
    "parentConcept": "pdf-standards-overview",
    "childConcepts": [
      "pdf-a-1",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-a-4",
      "pdf-a-conformance-levels",
      "pdf-a-validation",
      "pdf-a-metadata-requirements",
      "pdf-a-font-embedding"
    ],
    "relatedConcepts": [
      "pdf-a-vs-pdf-x",
      "pdf-a-vs-pdf-ua",
      "tagged-pdf",
      "pdf-output-intent",
      "xmp-metadata",
      "font-embedding"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-ua",
      "pdf-e",
      "iso-32000",
      "pdf-standards-overview"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "PDF Converter — Convert PDFs to Word, JPG, PNG and More",
        "path": "/pdf-converter"
      }
    ],
    "relatedGuides": [
      {
        "label": "Why PDF Is Still the Default for Documents in 2026",
        "path": "/guides/why-pdf-is-still-popular"
      }
    ]
  },
  "seeAlso": [
    "pdf-a-1",
    "pdf-a-2",
    "pdf-a-3",
    "pdf-a-4",
    "pdf-a-conformance-levels",
    "pdf-a-validation",
    "verapdf",
    "pdf-standards-overview"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
