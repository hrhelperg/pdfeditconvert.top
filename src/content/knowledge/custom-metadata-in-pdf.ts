import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "custom-metadata-in-pdf",
  "h1": "Custom Metadata in PDF",
  "cluster": "metadata-tooling",
  "aliases": [
    "Custom document properties",
    "Private Info dictionary keys",
    "Custom XMP properties",
    "User-defined PDF metadata",
    "Extended metadata"
  ],
  "definition": "Custom metadata in PDF is any user-defined field added beyond the standard properties, stored as private keys in the information dictionary or as properties in a custom XMP schema.",
  "description": "How PDFs carry user-defined metadata beyond Title and Author — private keys in the information dictionary and custom XMP schemas.",
  "searchIntent": "metadata",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF can describe itself with metadata. A standard set of fields covers the obvious things — Title, Author, Subject, Keywords, the producing application, and creation and modification dates. Custom metadata is everything beyond that set: fields you define for your own purposes, such as a matter number, a campaign code, a document classification, or an internal revision identifier.",
    "PDF offers two independent places to keep this information. One is the document information dictionary, the older, flat key-value structure referenced from the file trailer. The other is XMP, an XML metadata packet stored as a stream and referenced from the document catalog. Both can hold custom entries, but they differ sharply in structure, extensibility, and how modern tools treat them.",
    "Because custom metadata is embedded in the file rather than shown on the page, it travels with the document wherever it goes. That makes it valuable for automation and asset management, and it is also something to be aware of when sharing files outside an organization."
  ],
  "sections": [
    {
      "heading": "Two Homes for Custom Metadata",
      "body": [
        "The document information dictionary is an ordinary PDF dictionary referenced by the Info key in the file trailer. It defines a handful of standard keys, but the format also permits additional, application-defined keys whose values are text strings. XMP, by contrast, is a self-contained metadata document written in a subset of RDF/XML and stored in a stream object — marked as type Metadata with an XML subtype — that the document catalog points to through its Metadata entry. XMP is itself an ISO-standardized framework (ISO 16684-1), designed so different applications can add their own vocabularies without colliding.",
        "The two stores overlap for common properties: a Title or Author can exist in both, and well-behaved software keeps those synchronized. Custom entries, however, live in only one place unless a tool deliberately writes them to both. There is no automatic mirroring between a private Info-dictionary key and an XMP property, so where you put custom metadata determines which tools will find it."
      ]
    },
    {
      "heading": "Custom Keys in the Information Dictionary",
      "body": [
        "Adding custom metadata to the Info dictionary is mechanically simple: a producer writes an extra key, such as DocumentClass or MatterNumber, with a text-string value. This is the oldest way to attach private data to a PDF and is still common because it is easy to read and write. That simplicity is also its limitation — Info values are flat, untyped strings with no namespaces, so two vendors can choose the same key name for different purposes, and there is no structured way to record typed dates, lists, or language alternatives.",
        "The Info dictionary is being phased out for general metadata. PDF 2.0 (ISO 32000-2) deprecates most of its entries in favor of XMP, keeping only the creation and modification dates as non-deprecated. Workflows that need durable, well-defined custom metadata are therefore steered toward XMP, although the Info dictionary remains readable for backward compatibility with older files and tools."
      ]
    },
    {
      "heading": "Custom Schemas in XMP",
      "body": [
        "XMP is built for extensibility. Each property belongs to a namespace identified by a URI and abbreviated with a prefix, so an organization can define its own schema — for example a namespace for internal editorial fields — and add properties that will not clash with Adobe's or anyone else's. Properties can be simple values, ordered or unordered arrays, structured records, or language alternatives, which makes XMP far more expressive than flat Info keys.",
        "XMP is also not limited to the document as a whole. Because any stream or object can carry its own Metadata entry, custom metadata can be attached to individual pages, images, or embedded files, letting an asset describe itself independently. This object-level capability is what allows asset-management and print-production workflows to track provenance and handling instructions at fine granularity rather than only at the file level."
      ]
    },
    {
      "heading": "Custom Metadata and PDF/A",
      "body": [
        "Archival formats add a constraint. PDF/A (ISO 19005) is designed for long-term readability, which requires a file to be self-describing. Any XMP property that is not part of a recognized standard schema must be accompanied by an embedded extension schema that documents the namespace, the property names, and their value types. Without that description a validator cannot know what the custom fields mean, and the file fails PDF/A conformance.",
        "In practice this means custom metadata is fully allowed in PDF/A, but it cannot be added casually. The extension-schema mechanism forces producers to declare their vocabulary inside the file so that a reader years later can interpret the custom properties without any external documentation. It is a clear illustration of why XMP, rather than the Info dictionary, is the vehicle for custom metadata in standards-driven workflows."
      ]
    },
    {
      "heading": "How Custom Metadata Behaves in Practice",
      "body": [
        "Because custom metadata is embedded, it persists through copying, emailing, and uploading unless a tool explicitly removes it. That persistence is the point in automated pipelines — a classification tag or workflow identifier stays attached to the file — but it also means internal codes or notes can leave an organization unnoticed. Reviewing and clearing document properties before distribution is the usual safeguard.",
        "Support for custom metadata also varies by tool. Some viewers surface only the standard Info fields in their properties panel, so custom Info keys and custom XMP properties may be invisible in everyday software even though they are present in the file's bytes. Round-tripping a PDF through a converter or optimizer can drop or rewrite metadata as well, so custom fields that matter should be verified after any processing step."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Two storage locations",
      "value": "The document information dictionary and an XMP metadata stream"
    },
    {
      "label": "XMP standard",
      "value": "XMP is an ISO-standardized metadata framework (ISO 16684-1)"
    },
    {
      "label": "PDF/A requirement",
      "value": "Custom XMP properties must be declared via an embedded extension schema"
    },
    {
      "label": "PDF 2.0",
      "value": "Deprecates most information-dictionary entries in favor of XMP"
    }
  ],
  "misconceptions": [
    {
      "claim": "Adding a custom field to the Info dictionary automatically appears in the XMP metadata too.",
      "truth": "The two stores are independent. Tools may synchronize a few standard properties, but a custom Info key is not mirrored into XMP unless a tool writes it there explicitly."
    },
    {
      "claim": "Custom metadata is hidden and gets stripped whenever you share a PDF.",
      "truth": "It is embedded in the file and travels with it. It stays present until a tool deliberately removes it, and anyone with the file can read it."
    },
    {
      "claim": "You can add any custom metadata you like to a PDF/A file.",
      "truth": "PDF/A allows custom metadata, but any non-standard XMP property must be described by an embedded extension schema, or the file fails validation."
    }
  ],
  "faq": [
    {
      "q": "Where is custom metadata stored inside a PDF?",
      "a": "In one of two places: as extra, application-defined keys in the document information dictionary, or as properties in a custom namespace within the XMP metadata stream referenced by the document catalog."
    },
    {
      "q": "What is the difference between a custom Info key and a custom XMP property?",
      "a": "An Info key is a flat, untyped text string with no namespace. An XMP property lives in a named namespace and can be typed and structured, so it avoids naming collisions and can express dates, arrays, and language alternatives."
    },
    {
      "q": "Can custom metadata be attached to a single page or image rather than the whole document?",
      "a": "Yes. Any object that supports a Metadata entry — such as a page, an image, or an embedded file — can carry its own XMP stream, so custom metadata can describe individual objects independently."
    },
    {
      "q": "Does custom metadata change how a PDF looks or prints?",
      "a": "No. Metadata is descriptive information about the document; it does not appear on the page and does not affect rendering, layout, or printing."
    },
    {
      "q": "Why do some viewers not show custom metadata that I know is in the file?",
      "a": "Many viewers display only the standard information-dictionary fields in their properties panel. Custom Info keys and custom XMP properties can be present in the file yet not surfaced by everyday software."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-dictionary",
      "pdf-stream-objects",
      "pdf-string-objects",
      "pdf-trailer",
      "pdf-file-identifiers",
      "associated-files-in-pdf"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-2-0",
      "iso-32000"
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
    "document-information-dictionary",
    "xmp-metadata",
    "xmp-vs-info-dictionary",
    "pdf-metadata-standards",
    "pdf-a-metadata-requirements",
    "document-properties",
    "pdf-document-catalog"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
