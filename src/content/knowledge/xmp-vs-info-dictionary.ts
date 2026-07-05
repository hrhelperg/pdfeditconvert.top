import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "xmp-vs-info-dictionary",
  "h1": "XMP vs the Info Dictionary",
  "cluster": "metadata-tooling",
  "aliases": [
    "XMP vs Document Information Dictionary",
    "Info dictionary vs XMP metadata",
    "PDF Info dict vs metadata stream",
    "document metadata: Info dictionary vs XMP packet"
  ],
  "definition": "The Info dictionary is PDF's original flat key-value metadata store reached from the trailer, while XMP is an XML/RDF metadata stream on the document catalog that can describe the same document more richly.",
  "description": "How PDF stores document metadata in two places — the legacy Info dictionary and the XML-based XMP stream — how their fields map, why they differ, and how they drift.",
  "searchIntent": "comparison",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF can carry document-level metadata — things like title, author, subject, keywords, and creation and modification dates — in two parallel structures. One is the Document Information Dictionary, usually just called the Info dictionary. The other is an XMP (Extensible Metadata Platform) packet stored as a metadata stream. Because both can describe the same document, they are frequently compared, and a well-built PDF often contains both.",
    "The Info dictionary is the older, simpler mechanism: a plain dictionary of string values reached from the file's trailer through the /Info entry. XMP, introduced by Adobe in the early 2000s and later standardized, is an XML framework built on RDF that attaches to the document catalog through a /Metadata entry. Where the Info dictionary offers a fixed handful of predefined keys, XMP is namespaced and extensible.",
    "Understanding how the two differ — in location, data model, extensibility, standardization, and how they can fall out of sync — matters for anyone building tooling, preparing archival PDF/A files, or cleaning metadata before a document is shared."
  ],
  "sections": [
    {
      "heading": "Two places, two data models",
      "body": [
        "The Info dictionary is a PDF dictionary object referenced from the trailer by the /Info key. Its entries are a small, predefined set: Title, Author, Subject, Keywords, Creator (the authoring application), Producer (the library that wrote the PDF), CreationDate, ModDate, and Trapped. Most values are PDF string objects; the two date fields use PDF's date-string format (D:YYYYMMDDHHmmSS with an optional UTC offset). It is deliberately flat — there is no nesting, no typing beyond PDF's own object types, and no room for arbitrary new fields beyond adding non-standard keys.",
        "XMP takes a different approach. It is a metadata stream — a stream object typically marked /Type /Metadata and /Subtype /XML — reached from the document catalog through the /Metadata entry. Inside is an XMP packet: XML serialized as RDF, organized into namespaces such as Dublin Core (dc:), the XMP core schema (xmp:), and a PDF-specific schema (pdf:). Because it is XML text, an XMP packet is commonly stored as readable UTF-8 so external indexers can parse it without fully decoding the PDF, and the metadata stream can be exempted from a document's encryption."
      ]
    },
    {
      "heading": "How the fields map between them",
      "body": [
        "Most Info dictionary keys have a natural XMP counterpart, which is why the two are so often kept in parallel. Title corresponds to dc:title, Author to dc:creator, Subject to dc:description, Keywords to pdf:Keywords, Creator to xmp:CreatorTool, Producer to pdf:Producer, CreationDate to xmp:CreateDate, and ModDate to xmp:ModifyDate. XMP dates use ISO 8601 formatting rather than PDF's own date strings, so a producer writing both must format the same instant two different ways.",
        "Historically, PDF-writing software synchronized the overlapping fields so that a change in one place was mirrored in the other. That synchronization is a convention, not a guarantee built into the format. Nothing in the file structure forces the Info dictionary and XMP to agree, which is exactly why they can diverge in practice."
      ]
    },
    {
      "heading": "Why PDF is moving toward XMP",
      "body": [
        "XMP is the direction the format has taken. Its namespaced, RDF-based model lets a document carry structured, extensible metadata — including domain-specific schemas and custom properties — rather than a fixed list of string keys. It is standardized in its own right (the XMP data model and core properties are published as ISO 16684-1) and is reused across many file formats beyond PDF, not just PDF alone.",
        "This preference is visible in the PDF specification itself. PDF 2.0 (ISO 32000-2) deprecates the Info dictionary, retaining only CreationDate and ModDate and directing other document metadata to XMP. The archival family reinforces this: PDF/A requires an XMP metadata stream, and where a property appears in both the Info dictionary and XMP, the two values are expected to be consistent. In those workflows XMP is treated as the authoritative record."
      ]
    },
    {
      "heading": "When they disagree",
      "body": [
        "Because the same document can describe itself twice, the values can drift apart. An editor might update the visible document properties by writing new XMP while leaving stale strings in the Info dictionary, or vice versa. Different viewers also apply different precedence: some prefer XMP when a metadata stream is present and fall back to the Info dictionary otherwise, so two applications can display different titles or authors for the same file.",
        "This has practical consequences for privacy and cleanup. Clearing document properties in one structure does not necessarily touch the other, and custom or embedded metadata may persist beyond the obvious fields. Anyone auditing what a PDF reveals — an author name, an originating application, a revision timestamp — has to account for both the Info dictionary and any XMP packet rather than assuming a single source of truth."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where they live",
      "value": "Info dictionary: referenced from the trailer via /Info. XMP: a metadata stream referenced from the document catalog via /Metadata."
    },
    {
      "label": "Data model",
      "value": "Info dictionary holds flat key-value string pairs; XMP is namespaced XML built on RDF."
    },
    {
      "label": "PDF 2.0 status",
      "value": "ISO 32000-2 deprecates the Info dictionary except for CreationDate and ModDate, directing metadata to XMP."
    },
    {
      "label": "PDF/A",
      "value": "Requires an XMP metadata stream; values shared with the Info dictionary are expected to be consistent."
    }
  ],
  "specification": {
    "iso": "XMP: ISO 16684-1; PDF: ISO 32000-1 / ISO 32000-2",
    "introduced": "Info dictionary dates to early PDF; XMP was introduced by Adobe in the early 2000s and later standardized.",
    "typicalUsage": "Document-level descriptive metadata: title, author, subject, keywords, creation and modification dates, and producing application.",
    "relatedStandards": [
      "pdf-2-0",
      "pdf-a",
      "pdf-metadata-standards"
    ]
  },
  "misconceptions": [
    {
      "claim": "XMP replaced the Info dictionary, so modern PDFs only contain XMP.",
      "truth": "Many PDFs still carry both. PDF 2.0 deprecates most Info keys but retains CreationDate and ModDate, and producers commonly still write the Info dictionary for compatibility."
    },
    {
      "claim": "Editing a file's document properties updates all of its metadata at once.",
      "truth": "The Info dictionary and XMP are separate structures. A tool may rewrite one and leave the other stale, so the two can hold different values for the same field."
    },
    {
      "claim": "Deleting the visible document properties scrubs a PDF's metadata.",
      "truth": "Metadata can live in both the Info dictionary and an XMP packet, plus custom entries. Clearing one location may leave the other intact."
    }
  ],
  "faq": [
    {
      "q": "Which one does a PDF viewer show in its Document Properties panel?",
      "a": "It depends on the application. Some viewers prefer the XMP metadata stream when one is present and fall back to the Info dictionary otherwise, so different tools can display different values for the same file."
    },
    {
      "q": "Can the Info dictionary and XMP hold different values for the same document?",
      "a": "Yes. Nothing in the file structure forces them to agree. Synchronization is a convention followed by many producers, not a guarantee, so the two can drift out of sync after editing."
    },
    {
      "q": "Is the XMP metadata compressed inside the PDF?",
      "a": "As a stream it can be filtered, but XMP is often stored as plain UTF-8 XML so external indexers can read it without fully parsing the PDF. The metadata stream can also be left out of a document's encryption."
    },
    {
      "q": "Does PDF/A require XMP?",
      "a": "PDF/A requires an XMP metadata stream. Where a property also appears in the Info dictionary, the archival rules expect the two values to be consistent."
    },
    {
      "q": "What happens to the Info dictionary in PDF 2.0?",
      "a": "PDF 2.0 (ISO 32000-2) deprecates the Info dictionary, keeping only CreationDate and ModDate, and points other document metadata to XMP."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-stream-objects",
      "pdf-string-objects",
      "pdf-dictionary",
      "pdf-2-0",
      "pdf-file-identifiers",
      "pdf-a-validation"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-a-1",
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
    "document-information-dictionary",
    "xmp-metadata",
    "pdf-metadata",
    "pdf-metadata-standards",
    "custom-metadata-in-pdf",
    "pdf-a-metadata-requirements",
    "pdf-document-catalog",
    "pdf-trailer"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
