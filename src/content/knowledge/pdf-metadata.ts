import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-metadata",
  "h1": "PDF Metadata",
  "cluster": "metadata-tooling",
  "aliases": [
    "document metadata",
    "PDF document properties",
    "PDF file metadata",
    "document properties"
  ],
  "definition": "PDF metadata is structured information about a document — such as its title, author, dates, and originating software — stored separately from the page content.",
  "description": "PDF metadata is descriptive data about a document — its title, author, dates and creating software — held in the document information dictionary and XMP.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF can carry information about itself — who made it, when, with what software, and what it is about — kept apart from the words and images on its pages. That descriptive layer is the document's metadata.",
    "PDF records this in two overlapping systems: a compact set of key–value entries called the document information dictionary, and a richer, XML-based framework called XMP. Knowing about both explains why the same property can appear twice in a file, and why “clearing” metadata is not always as complete as it looks.",
    "This page explains what PDF metadata is, where it is stored, the fields you will commonly encounter, and why it matters for search, archiving, accessibility, and privacy."
  ],
  "sections": [
    {
      "heading": "Where PDF metadata lives",
      "body": [
        "A PDF keeps document-level metadata in up to two places. The older mechanism is the document information dictionary — often just called the “Info dictionary” — an object referenced from the file trailer whose entries are simple text strings and dates. The second is XMP (the Extensible Metadata Platform), an XML document embedded as a metadata stream and attached to the document catalog through a Metadata entry. Both can be present in the same file, which is why the same title or author may be recorded in two spots.",
        "Metadata is not limited to the whole document. Because XMP is a stream, it can also be attached to individual components — an image, a page, or an embedded file — to describe just that part. A separate mechanism, the file identifier array in the trailer, holds a pair of byte strings that identify the file and help tools tell one version from another; it is related to metadata but serves identification rather than description."
      ]
    },
    {
      "heading": "The classic Info dictionary fields",
      "body": [
        "The document information dictionary defines a small, well-known set of entries. Title, Author, Subject, and Keywords describe the document; Creator records the application that produced the original (say, a word processor); and Producer records the software or library that generated the PDF itself. Two date entries, CreationDate and ModDate, use PDF's date-string format, which begins with “D:” followed by the year, month, day, time, and an optional time-zone offset.",
        "These fields are plain and easy to read, but they are also easy to misread. Because Creator and Producer name software rather than people, and Author is free text that any tool can set or leave empty, the Info dictionary is a description supplied by whatever made the file — not a verified record. Tools can also add their own custom keys here, although custom properties are more commonly expressed in XMP."
      ]
    },
    {
      "heading": "XMP: extensible, XML-based metadata",
      "body": [
        "XMP was introduced by Adobe to carry metadata consistently across file formats, and it was later standardized as ISO 16684-1. Inside a PDF it lives as an XML stream written in RDF, organized into namespaces: Dublin Core (dc:) for general properties such as title and creator, an xmp: namespace for dates and the tool that created the file, xmpMM: for media-management identifiers, and a pdf: namespace for PDF-specific values such as Producer and Keywords.",
        "The advantage of XMP is extensibility. Vendors and standards can define their own schemas and add custom properties without breaking readers that do not understand them, and because XMP is self-describing XML, a program can read it without fully parsing the PDF. This is why modern workflows — and the PDF sub-standards that depend on reliable metadata — lean on XMP rather than the fixed Info dictionary."
      ]
    },
    {
      "heading": "Why metadata matters — and where it leaks",
      "body": [
        "Metadata does quiet but useful work. Document-management systems index it for search; the Title can drive what a viewer shows in its window and what assistive technology announces (helped by a viewer preference that tells readers to display the title instead of the filename); and provenance fields record how a file came to be. When metadata is accurate and consistent, documents are easier to find, sort, and trust.",
        "The same fields are also a privacy consideration. Author names, the software and versions used, and creation or modification timestamps travel with the file, and simply editing the visible content does not remove them. Because a property can exist in both the Info dictionary and XMP — and because incremental updates can leave earlier values behind in the file — thorough removal means running a dedicated sanitize or “remove hidden information” step rather than blanking one set of fields. Redacting visible content and cleaning up metadata are separate tasks."
      ]
    },
    {
      "heading": "Metadata in the PDF standards",
      "body": [
        "Several PDF sub-standards treat metadata as mandatory rather than optional. PDF/A, the archiving family, requires XMP metadata and expects certain properties to be present and kept consistent with the Info dictionary; it also defines an extension-schema mechanism so archives can record custom properties in a documented way. The accessibility-focused PDF/UA relies on a meaningful document title being set and actually shown to the reader.",
        "The direction of travel is toward XMP. In PDF 2.0 the document information dictionary is largely deprecated in favour of XMP for descriptive properties, apart from the creation and modification dates. Files will keep an Info dictionary for backward compatibility for a long time, but new metadata is increasingly expected to be written — and read — as XMP."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Two storage mechanisms",
      "value": "The document information dictionary and XMP metadata streams"
    },
    {
      "label": "Common Info dictionary fields",
      "value": "Title, Author, Subject, Keywords, Creator, Producer, CreationDate, ModDate"
    },
    {
      "label": "XMP format",
      "value": "XML/RDF-based, standardized as ISO 16684-1 (originally from Adobe)"
    },
    {
      "label": "PDF 2.0 direction",
      "value": "Largely deprecates the Info dictionary in favour of XMP for descriptive properties"
    }
  ],
  "misconceptions": [
    {
      "claim": "Clearing the fields in Document Properties strips all metadata from a PDF.",
      "truth": "The same information can live in two places (the Info dictionary and an XMP stream) and even at the object level, and earlier values can survive as incremental-update history. Thorough removal needs a sanitize step, not just blanking the visible fields."
    },
    {
      "claim": "The Author or Producer field tells you who wrote the document.",
      "truth": "Producer and Creator record software, not people, and Author is free text that any tool can set or leave blank — so none of them is reliable proof of authorship."
    },
    {
      "claim": "Metadata is part of the page content.",
      "truth": "Metadata describes the document and is stored separately from the content streams that draw the pages; changing metadata does not change what is printed."
    }
  ],
  "faq": [
    {
      "q": "Where is metadata stored in a PDF file?",
      "a": "In the document information dictionary (referenced from the file trailer) and/or an XMP metadata stream attached to the document catalog. Many files include both."
    },
    {
      "q": "What is the difference between the Creator and Producer fields?",
      "a": "Creator names the application that produced the original document (for example a word processor), while Producer names the tool or library that generated the actual PDF."
    },
    {
      "q": "Does metadata affect how a PDF looks or its file size?",
      "a": "No. Metadata is not drawn on the page, and it is usually tiny compared with fonts and images, so it has little effect on rendering or size."
    },
    {
      "q": "Can PDF metadata contain private information?",
      "a": "Yes. Fields such as author, the software and version used, and creation or modification timestamps are common, and they travel with the file unless they are removed."
    },
    {
      "q": "Is PDF metadata the same as page labels or bookmarks?",
      "a": "No. Page labels and bookmarks are navigational structures, whereas metadata is descriptive information about the document as a whole."
    }
  ],
  "graph": {
    "childConcepts": [
      "document-information-dictionary",
      "xmp-metadata",
      "xmp-vs-info-dictionary",
      "custom-metadata-in-pdf",
      "pdf-page-labels",
      "searchable-pdf",
      "image-only-pdf",
      "pdf-ocr",
      "text-layer-in-pdf",
      "pdf-thumbnails",
      "embedded-files-in-pdf",
      "pdf-portfolios",
      "associated-files-in-pdf",
      "pdf-validation",
      "pdf-repair",
      "pdf-comparison",
      "document-properties",
      "pdf-file-identifiers",
      "pdf-magic-number",
      "pdf-mime-type",
      "pdf-metadata-standards"
    ],
    "relatedConcepts": [
      "pdf-document-catalog",
      "pdf-trailer",
      "pdf-redaction",
      "language-specification-in-pdf"
    ],
    "relatedStandards": [
      "pdf-a",
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
      },
      {
        "label": "Common PDF Mistakes to Avoid",
        "path": "/guides/common-pdf-mistakes-to-avoid"
      }
    ]
  },
  "seeAlso": [
    "document-information-dictionary",
    "xmp-metadata",
    "xmp-vs-info-dictionary",
    "custom-metadata-in-pdf",
    "pdf-metadata-standards",
    "pdf-file-identifiers",
    "document-properties",
    "pdf-a-metadata-requirements"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
