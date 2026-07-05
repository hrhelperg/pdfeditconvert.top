import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-2-0",
  "h1": "PDF 2.0",
  "cluster": "foundations",
  "aliases": [
    "ISO 32000-2",
    "PDF version 2.0",
    "PDF 2",
    "ISO 32000-2:2020"
  ],
  "definition": "PDF 2.0 is the ISO 32000-2 revision of the PDF format, first published in 2017 and the first version developed entirely under ISO governance rather than by Adobe.",
  "description": "PDF 2.0 (ISO 32000-2) is the ISO-governed revision of PDF, adding AES-256 encryption, UTF-8 text, richer tagging, and updated digital signatures.",
  "searchIntent": "specification",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF 2.0 is the version of the Portable Document Format defined by ISO 32000-2. It was first published in 2017 and reissued in a corrected, consolidated edition in 2020. Rather than introducing a wholly new file format, it refines the same object model, page model, and file structure that earlier PDF versions used, while modernising areas such as encryption, text encoding, digital signatures, and tagged-document structure.",
    "Its most significant change is not technical but organisational. PDF 1.7 was the last version authored by Adobe, which then donated the specification to ISO where it became ISO 32000-1 in 2008. PDF 2.0 is the first release developed and maintained entirely by an ISO working group, with no single vendor controlling the format. That shift is why the specification is vendor-neutral and why its features aim at interoperability across many implementations.",
    "Because PDF is designed so that readers ignore features they do not understand, PDF 2.0 files remain broadly openable in software built for earlier versions. New 2.0-only capabilities simply degrade gracefully in older viewers. This page explains what PDF 2.0 is, what it changed, and how it relates to the wider family of PDF standards."
  ],
  "sections": [
    {
      "heading": "An ISO-Governed Revision, Not an Adobe Release",
      "body": [
        "The defining characteristic of PDF 2.0 is its governance. When Adobe contributed PDF 1.7 to ISO, the resulting ISO 32000-1 largely mirrored Adobe's own document. PDF 2.0, as ISO 32000-2, was instead drafted by an international committee of implementers, print and archival experts, and accessibility specialists. No one company owns or extends it unilaterally, which is a deliberate contrast with the era when Adobe published proprietary extensions on top of the core format.",
        "This matters for anyone relying on PDF for long-term or cross-vendor workflows. A vendor-neutral base specification gives the subset standards, such as PDF/A for archiving and PDF/UA for accessibility, a stable, openly agreed foundation to build on rather than a moving target defined by one product."
      ]
    },
    {
      "heading": "What PDF 2.0 Adds",
      "body": [
        "Several enhancements modernise the format. AES-256 encryption is defined natively in the standard, where under PDF 1.7 the strongest key length had been available only through an Adobe extension. Text strings may be encoded in UTF-8, broadening Unicode support beyond the older PDFDocEncoding and UTF-16 conventions. The associated-files mechanism lets a document carry related files, such as source data or supplementary content, and describe how each relates to the object it accompanies.",
        "PDF 2.0 also updates digital signatures, aligning more closely with PAdES-style practices and formalising document timestamp signatures used in long-term validation. Print and colour handling gains refinements including page-level output intents, where earlier versions attached output intents only at the document level, plus additional colour-management controls. Tagged-document structure is extended with structure-element namespaces and richer semantics that improve how logical structure and reading order can be expressed."
      ]
    },
    {
      "heading": "What PDF 2.0 Deprecates",
      "body": [
        "A standard revision also prunes older or problematic features. XFA, the XML-based dynamic forms technology layered on top of AcroForm, is deprecated in PDF 2.0; the classic AcroForm field model remains the interoperable way to build interactive forms. Most entries of the legacy Document Information Dictionary are deprecated in favour of XMP metadata, which stores document properties in a structured XML packet that tools can read consistently.",
        "Deprecation in a specification means a feature is discouraged and may be removed in future editions, not that it stops working immediately. Files can still contain deprecated constructs, but authors targeting durability and cross-tool compatibility are steered toward the current mechanisms the standard endorses."
      ]
    },
    {
      "heading": "Backward Compatibility and the File Header",
      "body": [
        "A PDF 2.0 document begins with the header comment %PDF-2.0, signalling the version to which its structure conforms. Because the format was designed so that a reader silently ignores dictionary keys and features it does not recognise, a viewer written for PDF 1.7 can generally open a 2.0 file and render its pages, skipping only the 2.0-specific behaviour it lacks. This graceful degradation is why adopting PDF 2.0 rarely breaks existing pipelines.",
        "Version numbers in PDF describe the feature set a file may use, not a guarantee about the tools that will open it. A file labelled PDF 2.0 does not require every reader to implement every 2.0 feature; conversely, many everyday PDFs continue to use only capabilities present since much earlier versions."
      ]
    },
    {
      "heading": "A Foundation for the Subset Standards",
      "body": [
        "PDF 2.0 is the base that newer conformance standards build upon. PDF/A-4, the archival profile, is defined against ISO 32000-2, and current work on accessibility and print subsets similarly references the 2.0 core. Understanding what belongs to the base format versus a subset standard helps clarify responsibilities: PDF 2.0 supplies the features, while a subset such as PDF/A or PDF/UA constrains how they are used for a specific purpose.",
        "For that reason, conforming to PDF 2.0 does not by itself make a document archivable or accessible. Those properties come from meeting the additional requirements of the relevant subset standard, which restricts and validates the base format rather than replacing it."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "ISO 32000-2"
    },
    {
      "label": "First published",
      "value": "2017 (revised edition 2020)"
    },
    {
      "label": "File header token",
      "value": "%PDF-2.0"
    },
    {
      "label": "Governance",
      "value": "First PDF version developed solely by ISO, not by Adobe"
    }
  ],
  "specification": {
    "iso": "ISO 32000-2",
    "introduced": "2017",
    "latestVersion": "ISO 32000-2:2020",
    "typicalUsage": "The vendor-neutral base specification for the PDF format, underpinning modern subset standards such as PDF/A-4.",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-a-4",
      "pdf-ua-1",
      "pades"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF 2.0 is a new, incompatible file format that older readers cannot open.",
      "truth": "It is an incremental revision of the same format; readers built for earlier versions generally open PDF 2.0 files and simply ignore the features they do not recognise."
    },
    {
      "claim": "PDF 2.0 was created and is controlled by Adobe, like earlier PDF versions.",
      "truth": "It is the first PDF version developed entirely under ISO governance by an international committee, with no single vendor controlling the specification."
    },
    {
      "claim": "Saving a document as PDF 2.0 automatically makes it archival or accessible.",
      "truth": "PDF 2.0 provides features, but archival and accessibility conformance come from subset standards such as PDF/A and PDF/UA, which impose additional requirements."
    }
  ],
  "faq": [
    {
      "q": "What version header does a PDF 2.0 file use?",
      "a": "It begins with the header comment %PDF-2.0, which identifies the version of the specification its structure conforms to."
    },
    {
      "q": "Do I need new software to open a PDF 2.0 document?",
      "a": "Most current PDF software supports it, and older readers can usually open the file too; they simply skip any features introduced only in PDF 2.0."
    },
    {
      "q": "What happened to XFA dynamic forms in PDF 2.0?",
      "a": "XFA is deprecated in PDF 2.0. The classic AcroForm field model remains the interoperable way to build interactive forms in the format."
    },
    {
      "q": "Is PDF 2.0 the same thing as PDF/A-4?",
      "a": "No. PDF 2.0 is the base format defined by ISO 32000-2, while PDF/A-4 is an archival subset standard that constrains and validates how the PDF 2.0 features are used."
    },
    {
      "q": "Why does PDF 2.0 recommend XMP over the Info dictionary?",
      "a": "PDF 2.0 deprecates most Document Information Dictionary entries in favour of XMP, a structured XML metadata packet that tools can read and update consistently."
    }
  ],
  "graph": {
    "parentConcept": "portable-document-format",
    "relatedConcepts": [
      "aes-256-encryption",
      "associated-files-in-pdf",
      "xmp-metadata",
      "tagged-pdf",
      "pdf-standards-overview"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-a-4",
      "pdf-ua-1",
      "pades"
    ],
    "relatedFormats": [
      "pdf-1-7",
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
        "label": "Why PDF Is Still the Default for Documents in 2026",
        "path": "/guides/why-pdf-is-still-popular"
      }
    ]
  },
  "seeAlso": [
    "iso-32000",
    "pdf-1-7",
    "pdf-versions",
    "portable-document-format",
    "history-of-pdf",
    "pdf-a-4",
    "pdf-ua-1",
    "xfa-forms"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
