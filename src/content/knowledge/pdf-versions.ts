import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-versions",
  "h1": "PDF Versions",
  "cluster": "foundations",
  "aliases": [
    "PDF version history",
    "PDF format versions",
    "PDF specification versions",
    "PDF release versions"
  ],
  "definition": "PDF versions are the numbered releases of the Portable Document Format, from 1.0 to 2.0, each adding features while remaining broadly backward compatible.",
  "description": "How PDF version numbers work, from PDF 1.0 to PDF 2.0: what each release added, where the version is stored, and how ISO took over the format.",
  "searchIntent": "specification",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Like most file formats, PDF has evolved through a series of numbered releases. The first, PDF 1.0, arrived with Adobe Acrobat in 1993; the current release is PDF 2.0. Each version added capabilities, such as new graphics, security, and document features, while the core idea of a fixed, portable page stayed the same.",
    "A PDF records its version in two places: the header line at the very start of the file (for example, %PDF-1.7) and, optionally, a Version entry in the document catalog that can override it. That version number tells software which features the file is allowed to use, not which ones it must use.",
    "For its first decade and a half the format was developed and published by Adobe. In 2008 PDF 1.7 became an international standard, ISO 32000-1, and PDF 2.0 (ISO 32000-2) followed as the first edition produced entirely through the ISO process."
  ],
  "sections": [
    {
      "heading": "How PDF Version Numbers Work",
      "body": [
        "Every PDF begins with a header comment of the form %PDF-M.N, where M.N is the version the file claims to conform to. Historically these ran from 1.0 up to 1.7, after which the numbering jumped to 2.0, so there is no PDF 1.8. The version acts as a kind of contract: it signals the maximum feature set that a conforming reader should expect to encounter.",
        "Since PDF 1.4, the document catalog may also contain a Version key, written as a name object. If it is present and specifies a later version than the header, it takes precedence. This mechanism exists so that an incremental update can raise a file's version without rewriting the original header, which sits at a fixed position near the start of the file."
      ]
    },
    {
      "heading": "A Timeline of PDF Releases",
      "body": [
        "PDF 1.0 launched alongside Adobe Acrobat in 1993. Over the following years, versions 1.1 through 1.3 added features such as encryption, interactive forms, and richer color handling. PDF 1.4 introduced the transparency model, including soft masks, blend modes, and constant opacity, one of the largest graphics expansions in the format's history, and it also brought tagged PDF for logical structure.",
        "PDF 1.5 added object streams and cross-reference streams, which let files pack many objects together and describe their layout more compactly, along with JPEG 2000 image support. PDF 1.6 added AES encryption and OpenType font embedding. PDF 1.7 consolidated the format and, in 2008, was published in substance as ISO 32000-1. PDF 2.0 arrived as ISO 32000-2 in 2017, with a corrected edition in 2020."
      ]
    },
    {
      "heading": "From Adobe to ISO",
      "body": [
        "Adobe created PDF and, for years, published the specification openly so that any developer could build readers and writers without a license. That openness is a large part of why the format spread so widely. The 2008 publication of ISO 32000-1 formalized this by moving the specification under the International Organization for Standardization while keeping it aligned with PDF 1.7.",
        "PDF 2.0 was the first version developed entirely by an ISO committee rather than by Adobe. Alongside new capabilities, it removed or deprecated several older and vendor-specific features, including XFA forms, and resolved long-standing ambiguities in the text, giving independent implementations a clearer target to build against."
      ]
    },
    {
      "heading": "Why the Version Matters in Practice",
      "body": [
        "PDF is built to degrade gracefully. A reader that meets a feature from a newer version it does not understand is generally expected to ignore that feature and render the rest, so an older viewer can usually still open a newer file even if some newer-only content does not appear. This is why the version number rarely stops a document from opening.",
        "The version still matters when features or compliance are on the line. Archival and print-oriented subsets such as PDF/A and PDF/X are defined against particular base versions, so the underlying version sits beneath any conformance claim. When you generate a PDF, the version your tool writes determines which capabilities, from encryption strength to font technologies and transparency, are available."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "First release",
      "value": "PDF 1.0, Adobe, 1993"
    },
    {
      "label": "Where the version lives",
      "value": "Header line, e.g. %PDF-1.7"
    },
    {
      "label": "PDF 1.7 standardized",
      "value": "ISO 32000-1, 2008"
    },
    {
      "label": "Latest version",
      "value": "PDF 2.0 (ISO 32000-2), 2017, revised 2020"
    }
  ],
  "specification": {
    "introduced": "PDF 1.0 by Adobe, 1993",
    "iso": "ISO 32000-1 (from PDF 1.7); ISO 32000-2 (PDF 2.0)",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Declaring and interpreting which PDF feature set a file is allowed to use",
    "relatedStandards": [
      "iso-32000",
      "pdf-standards-overview"
    ]
  },
  "misconceptions": [
    {
      "claim": "A higher PDF version always means a more complex or better file.",
      "truth": "The version only caps which features are permitted. A PDF 2.0 file can be simpler than a PDF 1.4 file; the number bounds the feature set, not the content."
    },
    {
      "claim": "There is a PDF 1.8.",
      "truth": "Version numbers went 1.0 through 1.7, then jumped straight to 2.0 when the format moved fully under ISO. There is no PDF 1.8 or 1.9."
    },
    {
      "claim": "The version in the header is always the version the file really uses.",
      "truth": "Since PDF 1.4, a Version entry in the document catalog can override the header, so the effective version may be higher than the header line suggests."
    }
  ],
  "faq": [
    {
      "q": "How can I tell what version a PDF is?",
      "a": "Check the header at the very start of the file (a %PDF-x.y comment), but be aware that a Version entry in the document catalog can override it. Most PDF viewers report the version in their document properties or file information dialog."
    },
    {
      "q": "What is the newest PDF version?",
      "a": "PDF 2.0, published as ISO 32000-2 in 2017 and reissued as a corrected edition in 2020. It was the first version developed entirely through the ISO process rather than by Adobe."
    },
    {
      "q": "Are newer PDF versions backward compatible?",
      "a": "Broadly yes. The format is designed so readers ignore features they do not understand, so an older viewer can usually still open and display a newer file, though content that relies on newer-only features may not render."
    },
    {
      "q": "Who controls the PDF specification now?",
      "a": "ISO has controlled it since PDF 1.7 became ISO 32000-1 in 2008. Adobe originally created and published the format, and PDF 2.0 (ISO 32000-2) was produced by an ISO committee."
    },
    {
      "q": "Do PDF/A and PDF/X have their own version numbers?",
      "a": "They are separate standards (ISO 19005 and ISO 15930) layered on top of a base PDF version. They add constraints rather than replace the version number, so a PDF/A file still has an underlying PDF version beneath the conformance claim."
    }
  ],
  "graph": {
    "parentConcept": "portable-document-format",
    "relatedConcepts": [
      "pdf-1-5",
      "pdf-1-6",
      "why-standardize-pdf",
      "pdf-standards-overview",
      "pdf-incremental-updates",
      "pdf-file-structure"
    ],
    "relatedStandards": [
      "pdf-standards-overview",
      "pdf-a",
      "pdf-x"
    ],
    "relatedFormats": [
      "pdf-a",
      "pdf-x",
      "pdf-ua"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      },
      {
        "label": "Why PDF Is Still the Default for Documents in 2026",
        "path": "/guides/why-pdf-is-still-popular"
      }
    ]
  },
  "seeAlso": [
    "portable-document-format",
    "history-of-pdf",
    "iso-32000",
    "pdf-1-7",
    "pdf-2-0",
    "pdf-header",
    "pdf-1-4",
    "pdf-document-catalog"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
