import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-1-6",
  "h1": "PDF 1.6",
  "cluster": "foundations",
  "aliases": [
    "PDF 1.6",
    "Adobe PDF 1.6",
    "PDF version 1.6",
    "Acrobat 7 PDF"
  ],
  "definition": "PDF 1.6 is the version of Adobe's PDF specification released in 2005 with Acrobat 7, adding AES-128 encryption, OpenType font embedding, and embedded 3D content.",
  "description": "PDF 1.6 is the Adobe Acrobat 7 era PDF specification (2005). Learn what it added: AES-128 encryption, OpenType fonts, and embedded 3D artwork.",
  "searchIntent": "specification",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF 1.6 is one release in the sequence of PDF specifications that Adobe published before the format was handed to the International Organization for Standardization. It arrived in 2005 alongside Adobe Acrobat 7 and built directly on the structural changes introduced in PDF 1.5, such as object streams and cross-reference streams, rather than replacing them.",
    "Each PDF version adds new object types, dictionary keys, and capabilities while remaining backward compatible: a reader that understands PDF 1.6 can still open older files, and newer readers can still open PDF 1.6 documents. The version number in a file's header signals the highest set of features a producing application may have used, which helps readers decide how to interpret the content.",
    "The headline additions in PDF 1.6 cluster around three areas: stronger encryption through AES, richer font handling through direct OpenType embedding, and support for interactive 3D artwork. These changes reflect the format's evolution from a print-oriented page description language toward a container for a wider range of document features."
  ],
  "sections": [
    {
      "heading": "Where PDF 1.6 Sits in the Version Timeline",
      "body": [
        "PDF 1.6 falls between PDF 1.5, which introduced object streams and cross-reference streams to shrink file size and speed up parsing, and PDF 1.7, which became the basis for the first international standard. Because the PDF specification is additive, PDF 1.6 inherited everything from earlier versions and layered new features on top; understanding it means understanding what it changed relative to PDF 1.5, not treating it as a fresh format.",
        "It is important to note that PDF 1.6 was still an Adobe-published specification, not an ISO standard. The format was later standardized as ISO 32000-1 in 2008, derived from PDF 1.7, and PDF 2.0 followed as ISO 32000-2. So a PDF 1.6 file predates the ISO era, even though the concepts it defines carried forward into the standardized specifications."
      ]
    },
    {
      "heading": "AES-128 Encryption",
      "body": [
        "The most consequential security change in PDF 1.6 was support for the Advanced Encryption Standard (AES) at a 128-bit key length. Earlier PDF encryption relied on the RC4 stream cipher through the standard security handler; PDF 1.6 added an AES-based crypt filter, giving producers a stronger, block-cipher option for protecting document contents. The choice of algorithm is recorded in the encryption dictionary so that a reader knows how to decrypt streams and strings.",
        "This did not remove password-based access control or the distinction between a user password and an owner password, which continued to work as before. It changed the underlying cipher available to the standard security handler. AES at a longer 256-bit key length arrived after PDF 1.6: Adobe introduced it in Acrobat 9 (2008) through PDF 1.7 Adobe Extension Level 3, and it was later standardized in PDF 2.0 (ISO 32000-2). PDF 1.6 should therefore not be assumed to imply 256-bit encryption."
      ]
    },
    {
      "heading": "OpenType Font Embedding",
      "body": [
        "PDF 1.6 allowed OpenType font programs to be embedded directly into a document as an embedded font program, referenced through the font descriptor. Previously, producers typically embedded the underlying Type 1 or TrueType outlines; direct OpenType embedding meant the original font container, which can carry either outline flavor plus advanced typographic tables, could be preserved as a single stream.",
        "Embedding fonts is what lets a PDF display and print with the intended typefaces on machines that do not have those fonts installed, avoiding font substitution. OpenType support broadened the range of fonts that could be carried faithfully, which matters for documents that rely on specific type designs or on scripts and features that OpenType handles well."
      ]
    },
    {
      "heading": "3D Content and Other Additions",
      "body": [
        "PDF 1.6 introduced support for embedding interactive 3D artwork, using the Universal 3D (U3D) representation, presented through a 3D annotation. This let a PDF carry a rotatable, viewable 3D model as part of the page rather than as a flat image, a feature aimed at engineering, manufacturing, and technical documentation workflows. Later specifications expanded 3D support with additional representations.",
        "The release also refined color handling for print production, including NChannel colorant attributes that extend DeviceN color spaces to describe additional colorant relationships. As with most version bumps, PDF 1.6 folded in a range of smaller dictionary and feature refinements alongside the marquee additions, all layered onto the existing PDF object and file structure."
      ]
    },
    {
      "heading": "How PDF 1.6 Is Identified and Its Compatibility",
      "body": [
        "A PDF file declares its version in the header comment on the first line, written as %PDF-1.6. A Version entry in the document catalog can override the header value, which lets a later incremental update raise the effective version without rewriting the header. Because the header reflects the highest feature set a producer may have used, a file marked 1.6 does not necessarily exercise every 1.6 feature.",
        "Backward and forward compatibility are practical strengths of the PDF family. A PDF 1.6 document opens in readers built for newer versions, and a reader that supports PDF 1.6 can still open documents authored to earlier versions. If a viewer encounters a newer feature it does not recognize, well-behaved readers are expected to ignore what they cannot interpret rather than fail outright."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Released",
      "value": "2005, alongside Adobe Acrobat 7"
    },
    {
      "label": "Publisher",
      "value": "Adobe Systems (pre-ISO specification)"
    },
    {
      "label": "Key additions",
      "value": "AES-128 encryption, OpenType font embedding, 3D (U3D) content"
    },
    {
      "label": "Superseded by",
      "value": "PDF 1.7, later standardized as ISO 32000-1"
    }
  ],
  "specification": {
    "introduced": "2005 (Adobe Acrobat 7)",
    "typicalUsage": "Documents that use AES-128 encryption, directly embedded OpenType fonts, or embedded 3D artwork",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF 1.6 is an ISO standard.",
      "truth": "PDF was first standardized as ISO 32000-1 in 2008, based on PDF 1.7. PDF 1.6 was an Adobe-published specification that predates the ISO era."
    },
    {
      "claim": "PDF 1.6 introduced object streams and cross-reference streams.",
      "truth": "Those compression and structure features were introduced in PDF 1.5. PDF 1.6 built on top of them rather than introducing them."
    },
    {
      "claim": "A PDF 1.6 file uses AES-256 encryption.",
      "truth": "PDF 1.6 added AES at a 128-bit key length. AES-256 came later: Adobe introduced it in Acrobat 9 (2008) through PDF 1.7 Adobe Extension Level 3, and it was subsequently standardized in PDF 2.0 (ISO 32000-2)."
    }
  ],
  "faq": [
    {
      "q": "When was PDF 1.6 released?",
      "a": "PDF 1.6 was published by Adobe in 2005 and shipped with Adobe Acrobat 7."
    },
    {
      "q": "What PDF version came after PDF 1.6?",
      "a": "PDF 1.7 followed. PDF 1.7 later became the basis for the first international standard, ISO 32000-1, in 2008."
    },
    {
      "q": "Can newer PDF readers open a PDF 1.6 file?",
      "a": "Yes. The PDF format is backward compatible, so readers built for later versions open PDF 1.6 documents, and readers that support 1.6 open older files too."
    },
    {
      "q": "How do I tell which PDF version a file uses?",
      "a": "The version appears in the header on the first line, written as %PDF-1.6. A Version entry in the document catalog can override the header value."
    },
    {
      "q": "Does PDF 1.6 support embedded 3D models?",
      "a": "Yes. PDF 1.6 added support for embedding interactive 3D artwork using the U3D representation, shown through a 3D annotation on the page."
    }
  ],
  "graph": {
    "parentConcept": "portable-document-format",
    "relatedConcepts": [
      "pdf-1-4",
      "pdf-encryption",
      "standard-security-handler",
      "embedded-font-programs",
      "devicen-color",
      "pdf-header"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "PDF Security — Password Protect and Encrypt PDFs",
        "path": "/pdf-security"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Password Protect a PDF File",
        "path": "/guides/how-to-protect-pdf-file"
      },
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-1-5",
    "pdf-1-7",
    "pdf-versions",
    "portable-document-format",
    "aes-128-encryption",
    "opentype-fonts-in-pdf",
    "iso-32000",
    "history-of-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
