import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a-2",
  "h1": "PDF/A-2",
  "cluster": "standards",
  "aliases": [
    "ISO 19005-2",
    "PDF/A Part 2",
    "PDF/A-2b",
    "PDF/A-2a",
    "PDF/A-2u"
  ],
  "definition": "PDF/A-2 is the second part of ISO 19005, the PDF archiving standard, based on PDF 1.7, that permits transparency, JPEG 2000 compression, and layers, and adds a Unicode (U) conformance level.",
  "description": "PDF/A-2 is the second part of the ISO 19005 archiving standard, built on PDF 1.7. It adds transparency, JPEG 2000, layers, and a Unicode conformance level.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/A-2 is the second generation of the PDF/A family, the ISO standard for long-term archiving of electronic documents. Published as ISO 19005-2 in 2011, it builds on the archiving goals of PDF/A-1 but rebases them on PDF 1.7 (ISO 32000-1) instead of the older PDF 1.4 reference.",
    "The reason PDF/A-2 exists is that PDF/A-1 froze the format at a point that predated several features real-world documents rely on. By moving to PDF 1.7 as its foundation, PDF/A-2 can permit things PDF/A-1 forbade, most notably transparency, JPEG 2000 image compression, and optional content (layers), while still enforcing the core archival rule that a file must be fully self-contained and reproducible without any external dependency.",
    "PDF/A-2 does not replace PDF/A-1. Both remain valid, independent parts of ISO 19005, and a file conforming to one is not automatically conformant to the other. Choosing a part is about which features a document needs and which archival policy an organization follows, not about one version being retired."
  ],
  "sections": [
    {
      "heading": "How PDF/A-2 relates to PDF/A-1 and PDF 1.7",
      "body": [
        "The defining change from PDF/A-1 to PDF/A-2 is the base format. PDF/A-1 constrains PDF 1.4, while PDF/A-2 constrains PDF 1.7, the version that Adobe published as PDF Reference 1.7 and that ISO adopted as ISO 32000-1 in 2008. Because PDF 1.7 accumulated the additions of PDF 1.5 and 1.6, PDF/A-2 inherits a larger toolbox to draw from.",
        "This lineage means the two parts are siblings rather than upgrades of one another. A validator checks a file against the specific part it claims to conform to, and the file's XMP metadata records which part and conformance level it targets. A document that is valid PDF/A-1b will not carry a PDF/A-2 claim unless it is deliberately produced or converted to meet part 2's rules."
      ]
    },
    {
      "heading": "What PDF/A-2 adds over PDF/A-1",
      "body": [
        "The most visible additions are transparency and JPEG 2000. Transparency was introduced in PDF 1.4 but prohibited by PDF/A-1, so blend modes and soft masks previously had to be flattened; PDF/A-2 permits them directly. JPEG 2000 (the JPXDecode filter, introduced in PDF 1.5) becomes an allowed image compression method, alongside the filters already permitted for archival use.",
        "PDF/A-2 also allows optional content groups, commonly called layers, so documents such as maps or engineering drawings can retain toggleable content. Under the hood it permits the compact structures that arrived with PDF 1.5, including object streams and cross-reference streams, which can meaningfully reduce file size compared with the older, more verbose structures PDF/A-1 required. Throughout, the archival constraints carry over: fonts must be embedded, encryption is not allowed, and content must not depend on anything outside the file."
      ]
    },
    {
      "heading": "The three conformance levels: A, B, and U",
      "body": [
        "PDF/A-2 keeps the two conformance levels from PDF/A-1 and introduces a third. Level B (basic) guarantees that the visual appearance of the document can be reliably reproduced over time. Level A (accessible) is the strictest: it additionally requires tagged structure, a defined logical reading order, and Unicode character mappings so the content is both machine-readable and accessible.",
        "The new level is U (Unicode). It sits between B and A: like level B it does not require full tagging, but it adds the requirement that all text have a reliable Unicode equivalent, typically supplied through ToUnicode CMaps. Level U is a practical middle ground for documents where dependable text extraction and search matter, but full structural tagging is not feasible or required."
      ]
    },
    {
      "heading": "Embedded files and PDF collections",
      "body": [
        "PDF/A-2 allows a conforming document to embed other files, but with a strict condition: any embedded PDF must itself be PDF/A conformant. This makes it possible to bundle a set of archival documents, or to build a PDF collection, without breaking the guarantee that everything inside the container is preserved to the same archival standard.",
        "This is a common point of confusion with PDF/A-3, the part that came next. PDF/A-3 relaxed the rule to permit embedding arbitrary source files, such as a spreadsheet or an XML invoice, alongside the archival rendering. If a workflow needs to carry non-PDF/A source data inside the file, that is a PDF/A-3 use case, not something PDF/A-2 permits."
      ]
    },
    {
      "heading": "Validation and where PDF/A-2 fits",
      "body": [
        "Conformance to PDF/A-2 is verified by validation rather than by trusting the producing application. Tools such as veraPDF check a file against the machine-readable requirements for the declared part and level, and they inspect the XMP metadata that must correctly identify the file as PDF/A-2 at level A, B, or U.",
        "In practice PDF/A-2 is a strong default when a document uses features that PDF/A-1 could not express, such as transparency or layered content, and long-term preservation is the goal. For newer files built on PDF 2.0, PDF/A-4 is the corresponding part; PDF/A-1, PDF/A-2, and PDF/A-3 continue to coexist, each suited to different content and policy needs."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "ISO 19005-2 (published 2011)"
    },
    {
      "label": "Base format",
      "value": "PDF 1.7 (ISO 32000-1)"
    },
    {
      "label": "Conformance levels",
      "value": "A (accessible), B (basic), U (Unicode)"
    },
    {
      "label": "Notable additions",
      "value": "Transparency, JPEG 2000, optional content (layers)"
    }
  ],
  "specification": {
    "iso": "ISO 19005-2",
    "introduced": "2011",
    "latestVersion": "ISO 19005-2:2011",
    "typicalUsage": "Long-term archiving of electronic documents that use modern PDF features such as transparency, JPEG 2000, or layers",
    "relatedStandards": [
      "pdf-a-1",
      "pdf-a-3",
      "pdf-a-4",
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF/A-2 replaced PDF/A-1, so older PDF/A-1 files should be re-saved to part 2.",
      "truth": "PDF/A-1 remains a valid, independent part of ISO 19005. A PDF/A-1 file stays conformant, and there is no requirement to migrate it to PDF/A-2."
    },
    {
      "claim": "PDF/A-2 lets you embed any source file inside the archive.",
      "truth": "PDF/A-2 permits embedding only files that are themselves PDF/A conformant. Embedding arbitrary, non-PDF/A source files is the feature introduced by PDF/A-3."
    },
    {
      "claim": "Because PDF/A-2 is newer, its archival rules are looser than PDF/A-1's.",
      "truth": "PDF/A-2 adds features like transparency and JPEG 2000 but keeps the core archival constraints: fonts must be embedded, encryption is not allowed, and nothing may depend on external resources."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between PDF/A-2 and PDF/A-1?",
      "a": "PDF/A-1 is based on PDF 1.4, while PDF/A-2 is based on PDF 1.7. PDF/A-2 permits transparency, JPEG 2000 compression, and layers, and it adds a Unicode (U) conformance level that PDF/A-1 does not have."
    },
    {
      "q": "What does the U in PDF/A-2u mean?",
      "a": "U stands for Unicode. Level U requires that all text has a reliable Unicode mapping, usually via ToUnicode CMaps, so the text can be extracted and searched, but it does not require the full tagged structure that level A does."
    },
    {
      "q": "Is a PDF/A-1 file automatically a valid PDF/A-2 file?",
      "a": "No. The two parts have different base formats and requirements, and a file's metadata declares one specific part and level. Meeting PDF/A-2 requires producing or converting the file so it conforms to part 2, then validating it."
    },
    {
      "q": "Does PDF/A-2 still require fonts to be embedded?",
      "a": "Yes. Full font embedding is a core archival requirement that carries over from PDF/A-1. A PDF/A-2 file cannot rely on fonts that are only available on the reader's system."
    },
    {
      "q": "How do I confirm a file really is PDF/A-2?",
      "a": "Use a validator such as veraPDF, which checks the file against the requirements for the declared part and level and confirms that the XMP metadata correctly identifies it as PDF/A-2 at level A, B, or U."
    }
  ],
  "graph": {
    "parentConcept": "pdf-a",
    "relatedConcepts": [
      "jpx-decode-jpeg2000",
      "pdf-transparency",
      "optional-content-groups",
      "embedded-files-in-pdf",
      "tagged-pdf",
      "xmp-metadata"
    ],
    "relatedStandards": [
      "pdf-a",
      "iso-32000",
      "pdf-standards-overview",
      "pdf-a-vs-pdf-x",
      "pdf-a-vs-pdf-ua"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ]
  },
  "seeAlso": [
    "pdf-a",
    "pdf-a-1",
    "pdf-a-3",
    "pdf-a-4",
    "pdf-a-conformance-levels",
    "pdf-1-7",
    "pdf-transparency",
    "pdf-a-validation"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
