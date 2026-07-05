import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "xmp-metadata",
  "h1": "XMP Metadata in PDF",
  "cluster": "metadata-tooling",
  "aliases": [
    "Extensible Metadata Platform",
    "XMP",
    "XMP packet",
    "PDF metadata stream",
    "XML metadata in PDF"
  ],
  "definition": "XMP (Extensible Metadata Platform) metadata in a PDF is an embedded XML stream that records document properties in a standardized, extensible format, referenced from the document catalog.",
  "description": "XMP metadata is an embedded XML packet in a PDF that stores document properties in an extensible, standards-based format alongside the older Info dictionary.",
  "searchIntent": "metadata",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "XMP, the Extensible Metadata Platform, is a way of describing a document that lives inside the PDF as a block of XML. Where the older document information dictionary offers a small, fixed set of fields, XMP stores metadata as structured properties drawn from named schemas, so it can carry everything from a title and author to color-management details, rights information, and custom fields defined by an application.",
    "In a PDF, XMP is not scattered through the file. It sits in a dedicated metadata stream that is attached to the document catalog, and the same mechanism can attach metadata to individual objects such as pages or images. Because the stream is usually left uncompressed and wrapped in packet markers, the XML can be read and even edited in place without decoding the rest of the document.",
    "XMP was introduced to PDF alongside metadata streams in PDF 1.4 and is standardized in its own right as ISO 16684-1. It is the metadata mechanism the newer PDF standards lean on, and understanding how it is stored, what it can describe, and how it relates to the legacy Info dictionary is central to working with PDF metadata reliably."
  ],
  "sections": [
    {
      "heading": "How XMP Is Stored Inside a PDF",
      "body": [
        "Document-level XMP lives in a stream object whose dictionary marks it as metadata of the XML subtype. The document catalog references this stream through its metadata entry, which is how a reader locates the packet. The content itself is XML built on a subset of RDF (the Resource Description Framework), so every piece of metadata is expressed as a property with a namespace, a name, and a value rather than as a positional field.",
        "The XML is normally wrapped in packet markers (a begin and end processing instruction) and padded with whitespace, and the stream is typically stored without compression. That design lets a tool find, read, and rewrite the metadata by scanning the raw bytes, without having to parse or rebuild the whole PDF. The same kind of metadata stream can also be attached to lower-level objects, so a single file can carry document-wide metadata plus separate metadata for an embedded image or an individual page."
      ]
    },
    {
      "heading": "What XMP Can Describe: Schemas and Namespaces",
      "body": [
        "XMP organizes properties into schemas, each identified by an XML namespace. Common ones include the Dublin Core schema for descriptive fields such as title, creator, and subject; an XMP basic schema for values like creation and modification dates; and a PDF-specific schema for producer and keyword information. Rights, camera, and application-specific schemas can appear alongside these in the same packet.",
        "The defining trait of XMP is extensibility. Because properties are namespaced XML rather than a closed list of keys, an application can define its own schema and record custom metadata without breaking readers that do not recognize it. This is a fundamental contrast with the document information dictionary, whose meaningful fields are essentially a fixed set. When custom properties are used in a conformance context such as PDF/A, the standard expects an extension schema description so the meaning of those properties is documented within the file."
      ]
    },
    {
      "heading": "XMP and the Document Information Dictionary",
      "body": [
        "For much of PDF's history two metadata mechanisms have coexisted: the older document information dictionary, holding a handful of entries like Title, Author, Subject, Keywords, Creator, Producer, and the creation and modification dates; and XMP, the richer XML-based store. A viewer's document properties panel may draw on either, and the two are not automatically kept in agreement, so a title changed in one place can differ from the value held in the other unless a tool deliberately synchronizes them.",
        "The direction of travel in the standards is toward XMP as the primary store. PDF 2.0 deprecates most of the information dictionary in favor of embedded XMP, with date fields being the main practical carryover. Treating XMP as the source of truth, and synchronizing the legacy entries where older readers still consult them, is the pattern most modern tooling follows."
      ]
    },
    {
      "heading": "XMP in the PDF Standards Family",
      "body": [
        "The archival and production standards rely on XMP heavily. PDF/A requires a conforming XMP metadata packet and, crucially, a PDF/A identification schema that records the part and conformance level so a validator and a long-term reader can tell exactly which flavor of the standard the file claims. Any properties outside the recognized standard schemas are expected to be accompanied by an extension schema description within the metadata itself.",
        "Other members of the family use XMP as well: PDF/X and PDF/UA files carry XMP that identifies their conformance, and print and color workflows use XMP to convey production intent. Because the metadata is self-describing XML, it travels with the file and can be validated independently of the visual content, which is part of why the standards treat it as the authoritative record of what a document is and how it should be handled."
      ]
    },
    {
      "heading": "Encryption, Privacy, and Residual Metadata",
      "body": [
        "When a PDF is encrypted, whether the metadata stream is also encrypted is governed by a dedicated flag in the encryption setup (commonly referred to as EncryptMetadata). Leaving the metadata unencrypted allows search and indexing systems to read document properties even when the page content is protected, at the cost of exposing that metadata; encrypting it keeps the properties confidential along with the rest of the file.",
        "The dual-store nature of PDF metadata has a privacy implication worth understanding. Because XMP packets can persist at the document level and on individual objects, clearing the visible fields in a viewer's properties panel does not guarantee that every trace of metadata is gone. Metadata attached to images or left over from an authoring application can survive a superficial cleanup, which is why thorough handling of sensitive documents treats embedded XMP as something to inspect explicitly rather than assume is empty."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "XMP is standardized as ISO 16684-1 (Extensible Metadata Platform)"
    },
    {
      "label": "Introduced to PDF",
      "value": "Metadata streams were added in PDF 1.4 (2001)"
    },
    {
      "label": "Encoding",
      "value": "RDF/XML text stored in a stream referenced by the catalog's Metadata entry"
    },
    {
      "label": "Encryption control",
      "value": "The EncryptMetadata flag decides whether the metadata stream is encrypted"
    }
  ],
  "specification": {
    "iso": "ISO 16684-1",
    "introduced": "PDF 1.4 (2001)",
    "typicalUsage": "Document-level and object-level metadata embedded in PDF and other formats as an XML packet",
    "relatedStandards": [
      "pdf-a-metadata-requirements",
      "pdf-metadata-standards",
      "pdf-a"
    ]
  },
  "misconceptions": [
    {
      "claim": "XMP and the document information dictionary always hold the same values.",
      "truth": "They are separate stores that can drift out of sync; unless a tool deliberately synchronizes them, a title or author in one may differ from the other."
    },
    {
      "claim": "Clearing the document properties in a viewer removes all embedded metadata.",
      "truth": "XMP packets, including metadata attached to images or individual pages, can persist after the visible Info fields are cleared, so metadata may survive a superficial cleanup."
    },
    {
      "claim": "XMP is a binary blob that needs special software to read.",
      "truth": "XMP is XML text and is normally stored uncompressed, so the packet can be viewed in an ordinary text editor."
    }
  ],
  "faq": [
    {
      "q": "Where is XMP metadata stored in a PDF?",
      "a": "In a stream object marked as XML metadata, referenced from the document catalog's metadata entry. The same mechanism can also attach separate metadata streams to pages, images, and other objects."
    },
    {
      "q": "Does PDF/A require XMP metadata?",
      "a": "Yes. PDF/A requires a conforming XMP packet that includes a PDF/A identification schema recording the part and conformance level, and expects extension schema descriptions for any non-standard properties."
    },
    {
      "q": "Can XMP hold custom fields the standard schemas don't define?",
      "a": "Yes. Because properties are namespaced XML, an application can define its own schema and store custom metadata. In conformance contexts like PDF/A, custom properties should be accompanied by an extension schema description in the file."
    },
    {
      "q": "Is XMP metadata encrypted with the rest of the PDF?",
      "a": "It depends on the EncryptMetadata flag. Leaving it unencrypted lets indexing systems read document properties on a protected file; encrypting it keeps the metadata confidential along with the content."
    },
    {
      "q": "Which takes priority, XMP or the Info dictionary?",
      "a": "Modern practice and the newer standards treat XMP as the primary store, with PDF 2.0 deprecating most Info dictionary entries. Tools typically synchronize the legacy fields where older readers still consult them."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-stream-objects",
      "pdf-document-catalog",
      "pdf-2-0",
      "encryption-dictionary"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-a-metadata-requirements"
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
    "pdf-metadata",
    "document-information-dictionary",
    "xmp-vs-info-dictionary",
    "custom-metadata-in-pdf",
    "pdf-metadata-standards",
    "pdf-a-metadata-requirements",
    "pdf-file-identifiers"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
