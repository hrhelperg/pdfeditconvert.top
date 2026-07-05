import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-1-4",
  "h1": "PDF 1.4",
  "cluster": "foundations",
  "aliases": [
    "PDF 1.4",
    "PDF Reference 1.4",
    "PDF Reference third edition",
    "Acrobat 5 PDF",
    "PDF version 1.4"
  ],
  "definition": "PDF 1.4 is the 2001 release of the PDF format, shipped with Adobe Acrobat 5, best known for adding the transparency imaging model, Tagged PDF, and 128-bit encryption.",
  "description": "PDF 1.4, released in 2001 with Adobe Acrobat 5, added transparency, blend modes, soft masks, Tagged PDF and 128-bit encryption to the PDF format.",
  "searchIntent": "specification",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF 1.4 is the version of the Portable Document Format that Adobe published in 2001 alongside Acrobat 5. At the time, PDF was still an Adobe-controlled specification documented in the PDF Reference rather than an international standard, so each new version number corresponded to a new release of Acrobat and a new edition of that reference.",
    "Its headline addition was a full transparency imaging model. Earlier PDF versions inherited PostScript's opaque painting model, in which every mark completely covered whatever lay beneath it. PDF 1.4 changed that by letting objects be partially transparent and blended with their backdrop, which is why it is often called simply 'the transparency release.'",
    "PDF 1.4 also matters for reasons that outlived Acrobat 5. It introduced Tagged PDF, strengthened encryption, and — years later — became the technical baseline chosen for the first PDF/A archiving standard, PDF/A-1. That makes 1.4 one of the most consequential versions in the format's history."
  ],
  "sections": [
    {
      "heading": "The Transparency Imaging Model",
      "body": [
        "The defining feature of PDF 1.4 is its transparency model. It introduced constant alpha (a single opacity value applied to an object), soft masks (a grayscale image that varies opacity across an object), and blend modes such as Multiply, Screen, Overlay, Darken, and Lighten that control how an object's colors combine with the backdrop. Objects can also be collected into transparency groups that are composited as a unit before being blended into the page.",
        "This was a significant departure from PDF's PostScript roots, because PostScript has no notion of transparency. Supporting it required new graphics-state parameters and new rules for how a page is rendered. It also created a lasting compatibility consideration: viewers and print workflows built for pre-1.4 PDF cannot reproduce transparency, so tools sometimes 'flatten' transparent artwork into opaque shapes when targeting older consumers."
      ]
    },
    {
      "heading": "Tagged PDF and Logical Structure",
      "body": [
        "PDF 1.4 introduced Tagged PDF, building on the logical structure tree that had been added in PDF 1.3. A tagged file marks its content with a hierarchy of structure elements — headings, paragraphs, lists, tables, figures — and associates that hierarchy with the actual marks on the page through marked content. This gives a PDF a machine-readable description of its reading order and semantics, which is the foundation for accessibility and for reliable text extraction and reflow.",
        "Tagging is optional: a PDF 1.4 file can be completely untagged and still render identically on screen. What tagging adds is a separate structural layer that assistive technology, such as a screen reader, can follow. Later accessibility standards, including PDF/UA, formalized how this structure should be built, but the underlying mechanism traces back to PDF 1.4."
      ]
    },
    {
      "heading": "Encryption, Compression, and Metadata",
      "body": [
        "Beyond graphics and structure, PDF 1.4 broadened several supporting subsystems. Its standard security handler added support for encryption keys longer than the previous 40-bit limit, up to 128-bit RC4, giving password-protected documents a stronger cipher. It also added the JBIG2 compression filter, which is highly effective for the bi-level (black-and-white) images produced by document scanners.",
        "PDF 1.4 introduced metadata streams as well, letting a document carry XMP (Extensible Metadata Platform) metadata as an XML stream in addition to the older document information dictionary. XMP became the format's extensible, standards-based way to record authorship, rights, and application-specific properties, and it remains central to later PDF standards."
      ]
    },
    {
      "heading": "Why PDF 1.4 Still Matters",
      "body": [
        "PDF 1.4 occupies an unusual position in the format's history. Because it predates the denser structures added in PDF 1.5 — object streams and cross-reference streams — a 1.4 file uses only the classic, largely human-readable file structure. Many tools still emit PDF 1.4 by default when broad compatibility matters more than the newest features.",
        "Its most durable legacy is archival. When ISO published the first part of the PDF/A standard, PDF/A-1 (ISO 19005-1), it chose PDF 1.4 as its technical baseline. PDF/A-1 does not simply equal PDF 1.4, though: it removes features that threaten long-term reliability, notably prohibiting transparency, encryption, and external dependencies. So transparency — the feature that debuted in 1.4 — is explicitly disallowed in the archival profile built on top of it."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Released",
      "value": "2001, with Adobe Acrobat 5.0"
    },
    {
      "label": "Documentation",
      "value": "Adobe PDF Reference, third edition"
    },
    {
      "label": "Flagship feature",
      "value": "The transparency imaging model"
    },
    {
      "label": "Archival baseline",
      "value": "Basis of PDF/A-1 (ISO 19005-1)"
    }
  ],
  "specification": {
    "introduced": "2001 (Adobe Acrobat 5.0)",
    "typicalUsage": "A widely supported baseline for general-purpose documents and the technical basis of the PDF/A-1 archival standard.",
    "relatedStandards": [
      "pdf-a-1",
      "pdf-a"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF 1.4 is when PDF became an ISO standard.",
      "truth": "PDF only became an international standard in 2008 as ISO 32000-1, which was based on PDF 1.7. When PDF 1.4 was published in 2001 it was still an Adobe-controlled specification in the PDF Reference."
    },
    {
      "claim": "Because PDF/A-1 is based on PDF 1.4, PDF/A-1 files can use transparency.",
      "truth": "PDF/A-1 uses PDF 1.4 as its baseline but explicitly prohibits transparency. Transparency in an archival file requires PDF/A-2, which is based on the later PDF 1.7 / ISO 32000-1."
    },
    {
      "claim": "PDF 1.4 introduced layers (optional content).",
      "truth": "Optional content groups, commonly called PDF layers, were introduced in PDF 1.5, not 1.4. PDF 1.4's structural additions centered on transparency and Tagged PDF."
    }
  ],
  "faq": [
    {
      "q": "When was PDF 1.4 released?",
      "a": "PDF 1.4 was published by Adobe in 2001, alongside Adobe Acrobat 5.0, and documented in the third edition of the Adobe PDF Reference."
    },
    {
      "q": "What is the most important new feature in PDF 1.4?",
      "a": "The transparency imaging model. It let objects be partially transparent and blended with the backdrop using constant alpha, soft masks, and blend modes — something earlier, PostScript-derived PDF versions could not express."
    },
    {
      "q": "How can I tell which PDF version a file uses?",
      "a": "The version normally appears in the file header as a marker like %PDF-1.4 at the start of the file. A document can also override this with a Version entry in its catalog, so the effective version is the later of the two."
    },
    {
      "q": "Is PDF 1.4 still used today?",
      "a": "Yes. Many applications still write PDF 1.4 by default because it maximizes compatibility with older viewers, and archival PDF/A-1 files are built on the PDF 1.4 baseline."
    },
    {
      "q": "Does a higher PDF version number mean a better file?",
      "a": "No. The version number only indicates which feature set a file may use. A newer number is not inherently better; a plain document that targets PDF 1.4 can be more broadly compatible than one that relies on features from a later version."
    }
  ],
  "graph": {
    "parentConcept": "portable-document-format",
    "relatedConcepts": [
      "pdf-transparency",
      "transparency-groups",
      "soft-masks",
      "blend-modes",
      "tagged-pdf",
      "xmp-metadata",
      "jbig2-decode",
      "history-of-pdf"
    ],
    "relatedStandards": [
      "pdf-a-1",
      "pdf-a"
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
    "pdf-transparency",
    "tagged-pdf",
    "pdf-versions",
    "pdf-1-5",
    "pdf-1-7",
    "pdf-a-1",
    "portable-document-format",
    "blend-modes"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
