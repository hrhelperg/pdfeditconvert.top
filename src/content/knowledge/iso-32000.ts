import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "iso-32000",
  "h1": "ISO 32000",
  "cluster": "foundations",
  "aliases": [
    "ISO 32000-1",
    "ISO 32000-2",
    "the PDF specification",
    "ISO PDF standard",
    "PDF 1.7 / PDF 2.0 standard"
  ],
  "definition": "ISO 32000 is the international standard that defines the Portable Document Format (PDF), specifying the file structure, objects, and imaging model that PDF software reads and writes.",
  "description": "ISO 32000 is the ISO standard that defines PDF. See how ISO 32000-1 (PDF 1.7) and ISO 32000-2 (PDF 2.0) formalized the format Adobe created.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When people describe PDF as an \"open standard,\" ISO 32000 is the document they are pointing to. It is the formal specification, published by the International Organization for Standardization (ISO), that states exactly how a PDF file is built and how conforming software should interpret it.",
    "PDF began as a proprietary format created by Adobe in the early 1990s and described in a series of documents Adobe called the PDF Reference. In 2008 that reference was handed to ISO and published as ISO 32000-1, turning PDF into a vendor-neutral international standard that anyone can implement.",
    "ISO 32000 comes in two parts. Part 1 corresponds to PDF 1.7, and Part 2 (ISO 32000-2) defines PDF 2.0. Together they form the base specification that the more specialized PDF standards — such as PDF/A for archiving or PDF/X for print — build on top of."
  ],
  "sections": [
    {
      "heading": "From Adobe's PDF Reference to an ISO standard",
      "body": [
        "Adobe created PDF in the early 1990s and, for roughly its first fifteen years, controlled the format directly by publishing the PDF Reference — a specification Adobe wrote, versioned, and revised on its own schedule. Software from other vendors could read and write PDFs, but they were implementing Adobe's document rather than an independent standard. In 2008 Adobe contributed the PDF Reference for version 1.7 to ISO, which published it as ISO 32000-1. From that point the authoritative definition of PDF lived with ISO, developed through its committee for document management applications (ISO/TC 171), rather than with a single company.",
        "This shift mattered because it decoupled the format from any one vendor's business decisions. An international standard is maintained through a consensus process, remains available for independent implementation, and is far less likely to change unpredictably or be withdrawn — qualities that make PDF dependable for long-term document storage."
      ]
    },
    {
      "heading": "What ISO 32000 specifies",
      "body": [
        "ISO 32000 describes two things at once: how a PDF file is physically organized, and how its contents should be rendered. The structural half covers the file header, the body of numbered objects, the cross-reference table that locates them, and the trailer that ties everything together. The imaging half defines PDF's page model — how text, vector graphics, and images are placed on a page using a coordinate system, graphics state, and content-stream operators, along with fonts, color spaces, and transparency.",
        "The specification also defines the higher-level features people associate with PDF: interactive forms, annotations, digital signatures, encryption, logical structure for accessibility, and metadata. Because all of these are described in one place, independent programs can produce and consume PDFs that behave consistently across different readers — which is the entire purpose of having a standard."
      ]
    },
    {
      "heading": "ISO 32000-1 and ISO 32000-2",
      "body": [
        "ISO 32000 is published in parts. ISO 32000-1, released in 2008, standardized the feature set of Adobe's PDF 1.7. ISO 32000-2 defines PDF 2.0; it was first published in 2017 and reissued in a revised edition in 2020. PDF 2.0 is notable as the first version of PDF developed entirely within ISO rather than authored by Adobe, reflecting the format's full transition to community stewardship.",
        "PDF 2.0 refined the format in both directions. It added capabilities such as AES-256 encryption, richer digital-signature and document-timestamp handling, associated files, and page-level output intents, while deprecating older mechanisms — for example, the XFA form technology is deprecated in PDF 2.0. It also simplified version numbering: there is no PDF 1.8, and continued development proceeds under the ISO 32000 series."
      ]
    },
    {
      "heading": "How ISO 32000 relates to PDF/A, PDF/X and the rest",
      "body": [
        "ISO 32000 is the base layer, not the whole story. The specialized PDF standards — PDF/A for long-term archiving, PDF/X for print production, PDF/UA for accessibility, PDF/E for engineering, and PDF/VT for variable-data printing — are separate ISO standards that reference ISO 32000 and then add restrictions or requirements for their particular use case. A PDF/A file, for instance, is still a valid PDF under ISO 32000; it simply forbids features, such as non-embedded fonts, that would threaten its long-term readability.",
        "Understanding this relationship clears up a common point of confusion: these subset standards are not competing formats but profiles of the same underlying format. Whatever a reader or writer does with PDF/A or PDF/X ultimately rests on the object model and imaging rules that ISO 32000 defines."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "First ISO edition",
      "value": "ISO 32000-1 (2008), based on Adobe's PDF 1.7"
    },
    {
      "label": "Current edition",
      "value": "ISO 32000-2 (PDF 2.0), published 2017, revised 2020"
    },
    {
      "label": "Origin",
      "value": "PDF was created by Adobe in the early 1990s"
    },
    {
      "label": "Scope",
      "value": "Defines the core PDF format; subset standards like PDF/A and PDF/X build on it"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1 (PDF 1.7); ISO 32000-2 (PDF 2.0)",
    "introduced": "2008 (ISO 32000-1)",
    "latestVersion": "ISO 32000-2 (PDF 2.0), 2017, revised 2020",
    "typicalUsage": "The base specification implemented by software that reads or writes PDF files, and the foundation the specialized PDF standards constrain.",
    "relatedStandards": [
      "pdf-a",
      "pdf-x",
      "pdf-ua",
      "pdf-e",
      "pdf-vt"
    ]
  },
  "misconceptions": [
    {
      "claim": "ISO 32000 is a special kind of PDF, like PDF/A.",
      "truth": "ISO 32000 is the base PDF specification itself. PDF/A, PDF/X, PDF/UA and others are separate ISO standards that restrict or extend it for specific purposes."
    },
    {
      "claim": "Adobe still owns and controls the PDF standard.",
      "truth": "PDF became an open ISO standard in 2008, and PDF 2.0 (ISO 32000-2) was developed within ISO. Adobe contributed the original technology but no longer solely controls the specification."
    },
    {
      "claim": "ISO 32000-2 is just a minor update to ISO 32000-1.",
      "truth": "Part 2 defines a new major version, PDF 2.0, with structural additions and deprecations — it is a distinct edition, not a corrigendum to Part 1."
    }
  ],
  "faq": [
    {
      "q": "Is ISO 32000 the same thing as PDF?",
      "a": "ISO 32000 is the standards document that defines the PDF format; \"PDF\" is the format itself. When PDF is called an open standard, ISO 32000 is the specification being referred to."
    },
    {
      "q": "What is the difference between ISO 32000-1 and ISO 32000-2?",
      "a": "ISO 32000-1 (2008) standardized PDF 1.7. ISO 32000-2 defines PDF 2.0, first published in 2017 and revised in 2020, adding new features and deprecating some older ones."
    },
    {
      "q": "Where can I read ISO 32000?",
      "a": "ISO sells the official standards through its catalog. Separately, the PDF Association has made the text of PDF 2.0 (ISO 32000-2) available for free download."
    },
    {
      "q": "Do I need to understand ISO 32000 to use PDFs?",
      "a": "No. It is written for developers building PDF software. Everyday users creating, editing, or reading PDFs never interact with the specification directly."
    },
    {
      "q": "Did ISO 32000 replace Adobe's PDF Reference?",
      "a": "Yes. ISO 32000-1 became the authoritative specification in place of Adobe's PDF Reference, and PDF 2.0 was developed by ISO rather than authored by Adobe."
    }
  ],
  "graph": {
    "parentConcept": "portable-document-format",
    "childConcepts": [
      "pdf-standards-overview"
    ],
    "relatedConcepts": [
      "pdf-file-structure",
      "pdf-objects",
      "pdf-document-catalog"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-x",
      "pdf-ua",
      "pdf-e",
      "pdf-vt"
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
    "portable-document-format",
    "pdf-1-7",
    "pdf-2-0",
    "pdf-versions",
    "history-of-pdf",
    "why-standardize-pdf",
    "pdf-standards-overview",
    "pdf-vs-postscript"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
