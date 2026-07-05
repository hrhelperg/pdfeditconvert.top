import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "document-information-dictionary",
  "h1": "The Document Information Dictionary",
  "cluster": "metadata-tooling",
  "aliases": [
    "Info dictionary",
    "Info dict",
    "PDF Info dictionary",
    "/Info dictionary",
    "document info dictionary"
  ],
  "definition": "The document information dictionary is a PDF object, referenced from the trailer's /Info entry, that stores document-level metadata such as the title, author, dates and producing application.",
  "description": "How the PDF Info dictionary stores document metadata such as title, author, dates and producer, how it is referenced, and how it relates to XMP.",
  "searchIntent": "metadata",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "The document information dictionary — usually just called the Info dictionary — is the original mechanism PDF used to carry descriptive metadata about a file: what it is called, who wrote it, when it was made, and which software produced it. It predates the XML-based metadata that later PDF versions introduced, and it remains widely present because almost every PDF-producing tool writes it.",
    "Structurally it is an ordinary PDF dictionary object referenced by the /Info key in the file trailer. Its entries are simple key/value pairs — most of them text strings, plus two date strings and one name value. Because the reference sits in the trailer, a reader can locate document-level metadata without parsing page content or walking the page tree.",
    "Modern PDF has shifted metadata toward XMP streams, and PDF 2.0 deprecates most Info dictionary entries. Understanding the Info dictionary still matters because the two systems coexist in real files, can disagree, and both may need attention when you inspect, clean up, or compare documents."
  ],
  "sections": [
    {
      "heading": "How the Info Dictionary Is Referenced",
      "body": [
        "The Info dictionary is not stored inline in the trailer itself. Instead, the trailer's /Info entry holds an indirect reference to a separate dictionary object elsewhere in the file. The trailer is the small structure at the end of a PDF that tells a reader where the cross-reference data and the document catalog (/Root) live, and /Info is an optional companion entry alongside them.",
        "Because it is an ordinary indirect object, the Info dictionary can be updated through incremental updates like any other object, and a file that has been edited repeatedly may carry more than one version of it in its revision history. Tools that report a document's properties typically read the object pointed to by the most recent trailer's /Info entry."
      ]
    },
    {
      "heading": "The Standard Entries",
      "body": [
        "The specification defines a set of well-known keys. Title, Author, Subject and Keywords describe the content: the document's title, the name of its author, its subject, and associated keywords. Creator and Producer describe the software chain — Creator names the application that produced the original document (for example a word processor), while Producer names the software that converted or wrote that document out as PDF. CreationDate and ModDate record when the document was created and last modified. Trapped indicates whether trapping (a print-production adjustment) has been applied.",
        "All of these entries are optional, so a valid PDF may have an Info dictionary with only a few of them, or omit the dictionary entirely. The values are informational; a reader generally displays them but does not depend on them to render pages, which is why metadata and visible content can drift apart over a file's life."
      ]
    },
    {
      "heading": "Value Types and the PDF Date Format",
      "body": [
        "Most entries are text strings, so they can carry Unicode via the usual PDF text-string conventions. Trapped is the exception among the descriptive keys: it is a name object whose value is True, False, or Unknown rather than free text.",
        "CreationDate and ModDate use PDF's date string syntax, which begins with the prefix D: followed by year, month, day, hour, minute and second digits, optionally ending with a signed offset from UTC. This is the same date format used elsewhere in PDF, and its fixed layout is what lets tools parse and compare document timestamps reliably rather than guessing at locale-specific formats."
      ]
    },
    {
      "heading": "The Info Dictionary and XMP Metadata",
      "body": [
        "PDF 1.4 introduced an alternative, extensible way to carry metadata: an XMP packet stored as a metadata stream attached to the document catalog. XMP is XML-based and can express far richer, namespaced metadata than the flat Info dictionary. For a period both mechanisms were expected to describe the same document, which created a synchronization problem — the Info dictionary and the XMP packet can hold different values if a tool updates one but not the other.",
        "PDF 2.0 resolves the ambiguity by deprecating the Info dictionary's entries with the exception of CreationDate and ModDate, directing descriptive metadata to XMP instead. In practice, files produced today often still contain both, so inspecting or cleaning a PDF's metadata usually means looking at the Info dictionary and the XMP stream together rather than treating either as authoritative on its own."
      ]
    },
    {
      "heading": "Custom Entries and Practical Implications",
      "body": [
        "Beyond the standard keys, the Info dictionary permits additional, application-defined entries, so producers sometimes stash their own fields there. Support for such custom keys varies between viewers, and the modern, better-defined home for custom metadata is a dedicated XMP namespace.",
        "The practical takeaway is that document metadata is a real part of a file's payload, not a UI-only label. When preparing a document for distribution, comparing two revisions, or checking why a viewer shows an unexpected author or producer, the Info dictionary is one of the first places to look — and, because XMP may hold parallel values, it is rarely the only place."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Trailer reference",
      "value": "Located via the optional /Info entry in the PDF trailer"
    },
    {
      "label": "Standard keys",
      "value": "Title, Author, Subject, Keywords, Creator, Producer, CreationDate, ModDate, Trapped"
    },
    {
      "label": "PDF 2.0 status",
      "value": "All entries except CreationDate and ModDate are deprecated in favor of XMP"
    },
    {
      "label": "Value types",
      "value": "Mostly text strings, with two PDF date strings and the Trapped name value"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1; ISO 32000-2 (PDF 2.0)",
    "introduced": "Present since early PDF (1.x)",
    "typicalUsage": "Document-level metadata: title, author, subject, keywords, creator/producer, dates",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The Info dictionary is the only place PDF stores metadata.",
      "truth": "Since PDF 1.4, an XMP metadata stream can also describe the document, and PDF 2.0 favors XMP over the Info dictionary."
    },
    {
      "claim": "Creator and Producer mean the same thing.",
      "truth": "Creator names the application that made the original document, while Producer names the software that converted or wrote it out as PDF."
    },
    {
      "claim": "Editing a document's properties always updates the Info dictionary.",
      "truth": "Depending on the tool, changes may be written to XMP, to the Info dictionary, or to both, so the two can diverge."
    }
  ],
  "faq": [
    {
      "q": "Where is the document information dictionary stored in a PDF?",
      "a": "It is a separate dictionary object referenced by the /Info entry in the file trailer, which sits near the end of the PDF alongside the pointer to the document catalog."
    },
    {
      "q": "Is the Info dictionary deprecated?",
      "a": "In PDF 2.0 (ISO 32000-2), all of its entries except CreationDate and ModDate are deprecated in favor of XMP metadata, though many tools still write the full dictionary."
    },
    {
      "q": "Can I add custom fields to the Info dictionary?",
      "a": "Yes, the format allows additional application-defined keys, but viewer support for them varies, and XMP is the better-defined place for custom metadata."
    },
    {
      "q": "How are the dates formatted?",
      "a": "CreationDate and ModDate use PDF's date syntax, which starts with D: followed by year, month, day and time digits and an optional signed UTC offset."
    },
    {
      "q": "Does removing the Info dictionary clear all of a PDF's metadata?",
      "a": "Not necessarily — a document may also carry an XMP metadata stream, so a thorough cleanup checks both the Info dictionary and XMP."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-trailer",
      "pdf-dictionary",
      "pdf-string-objects",
      "pdf-name-objects",
      "pdf-document-catalog"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
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
    "pdf-metadata",
    "xmp-metadata",
    "xmp-vs-info-dictionary",
    "custom-metadata-in-pdf",
    "document-properties",
    "pdf-trailer",
    "pdf-file-identifiers",
    "pdf-metadata-standards"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
