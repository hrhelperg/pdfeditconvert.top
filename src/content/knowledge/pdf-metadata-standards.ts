import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-metadata-standards",
  "h1": "Metadata Standards Used in PDF",
  "cluster": "metadata-tooling",
  "aliases": [
    "PDF metadata formats",
    "PDF metadata schemas",
    "XMP and the Info dictionary",
    "document metadata standards in PDF"
  ],
  "definition": "The metadata standards used in PDF are the mechanisms for embedding descriptive data about a document, chiefly the legacy Info dictionary and XMP, which carries vocabularies such as Dublin Core.",
  "description": "How PDF stores document metadata: the legacy Info dictionary and XMP metadata streams built on RDF, carrying independent vocabularies like Dublin Core.",
  "searchIntent": "standard",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF was designed as a container that carries descriptive data about the file itself alongside the page content. Rather than inventing a single metadata language, the format supports more than one mechanism, and the more capable of these acts as a wrapper around widely used, independently standardized vocabularies.",
    "Two mechanisms operate at the document level. The Document Information Dictionary is the original approach: a small dictionary of predefined keys. XMP, the Extensible Metadata Platform, is the newer and richer one: an XML document embedded in the file that can express arbitrary, structured properties drawn from many namespaces.",
    "Because XMP is standardized independently of PDF and reuses established schemas, the phrase 'metadata standards used in PDF' really names a small stack: the PDF-native carrier, the XMP data model layered on top, and the external vocabularies XMP transports. This page explains each layer and how conformance standards such as PDF/A constrain them."
  ],
  "sections": [
    {
      "heading": "Two native carriers: the Info dictionary and XMP",
      "body": [
        "The Document Information Dictionary, referenced from the file trailer, is the oldest metadata mechanism in PDF. It holds a fixed set of simple text and date entries, commonly Title, Author, Subject, Keywords, Creator, Producer, CreationDate and ModDate, as plain key/value pairs. It is easy to write and read, but it cannot be extended in a structured way and has no formal schema, so different producers use its free-text fields inconsistently.",
        "XMP addresses those limits. It is a self-contained metadata document, expressed in XML using a subset of the W3C Resource Description Framework (RDF), that is embedded in the PDF as a metadata stream. Because RDF is a general model for making statements about resources, XMP can carry structured, typed, and repeatable properties, and it can be extended with new namespaces without changing the PDF specification itself. The same XMP model is used in other file types, so tools that understand XMP can read PDF metadata with the same code they use for images."
      ]
    },
    {
      "heading": "The vocabularies XMP carries",
      "body": [
        "XMP on its own defines a container and a handful of core namespaces, such as the XMP Basic schema and a PDF-specific schema, but much of its value comes from transporting established metadata vocabularies. The most common is Dublin Core, a compact, general-purpose element set (title, creator, subject, description, and so on) that is itself an independent standard rather than something PDF invented. Other domains bring their own namespaces for rights management, media management, and industry-specific description, and each appears in the XMP packet under its own namespace prefix.",
        "This layering is why a single XMP packet can describe a document in several vocabularies at once. A property such as the document title may appear as dc:title (Dublin Core) inside XMP while also existing as the Title key in the Info dictionary. XMP's data model, its serialization, and its core properties are standardized as ISO 16684-1, which is what lets independent applications agree on how to read and write these packets."
      ]
    },
    {
      "heading": "How standards constrain PDF metadata: PDF/A and PDF 2.0",
      "body": [
        "Conformance standards built on PDF add rules about metadata rather than inventing new formats. PDF/A, the archival subset, requires XMP metadata to be present, requires that properties duplicated in both XMP and the Info dictionary stay consistent, and mandates an identification schema in the XMP that records which PDF/A part and conformance level the file claims. That identification is what lets a validator confirm, years later, that a file both declares and meets a specific archival profile.",
        "The base format is also shifting toward XMP as the authoritative store. PDF 2.0 deprecates most of the Document Information Dictionary in favour of XMP, retaining the creation and modification dates, reflecting a long move away from the free-text Info fields toward the structured, schema-based model. In practice many files still carry both for backward compatibility, so reconciling the two remains a real concern."
      ]
    },
    {
      "heading": "Where the metadata lives and how it is located",
      "body": [
        "Document-level XMP is stored in a stream referenced from the document catalog through its Metadata entry, and that stream is marked as XML metadata so processors can find it without parsing page content. XMP packets are wrapped in processing-instruction markers containing a fixed identifier, which lets external tools locate and even rewrite the packet in place. Metadata is not limited to the whole document either: XMP can be attached to individual components such as images or embedded files, which is how per-object provenance travels with a PDF.",
        "Encryption interacts with where metadata sits. The encryption dictionary carries a flag that can leave the document metadata stream unencrypted even when the rest of the file is encrypted, so search and indexing tools can still read basic descriptive data. Because these locations and flags are defined by the PDF specification, metadata written according to the standards is portable across conforming readers."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "XMP standard",
      "value": "An RDF/XML metadata model standardized as ISO 16684-1, embedded in a PDF as a metadata stream."
    },
    {
      "label": "Info dictionary",
      "value": "PDF's original metadata mechanism: simple keys such as Title, Author, Subject and CreationDate, referenced from the trailer."
    },
    {
      "label": "Storage location",
      "value": "Document-level XMP is referenced from the document catalog's Metadata entry; components can carry their own XMP."
    },
    {
      "label": "PDF/A rule",
      "value": "Requires XMP metadata plus an identification schema recording the claimed part and conformance level."
    }
  ],
  "specification": {
    "introduced": "XMP metadata stream support added in PDF 1.4",
    "iso": "ISO 16684-1 (XMP data model)",
    "typicalUsage": "Embedding descriptive, rights, and provenance metadata in PDF documents and their components",
    "relatedStandards": [
      "iso-32000",
      "pdf-a",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF has a single, standard metadata format.",
      "truth": "PDF supports at least two document-level mechanisms, the legacy Info dictionary and XMP, and XMP itself carries several independently standardized vocabularies such as Dublin Core."
    },
    {
      "claim": "The Title and Author a viewer shows always come from one place in the file.",
      "truth": "They may come from either the Info dictionary or the XMP packet; when both are present the values can differ, and viewers vary in which they display, which is why the two are meant to be kept in sync."
    },
    {
      "claim": "XMP is a PDF-only format.",
      "truth": "XMP is a general metadata standard (ISO 16684) used across many formats, including image types, so PDF is only one of the carriers that embed it."
    }
  ],
  "faq": [
    {
      "q": "What metadata standards does a PDF actually use?",
      "a": "The format natively supports two document-level mechanisms, the Document Information Dictionary and XMP. XMP in turn transports independent vocabularies such as Dublin Core, and its own data model is standardized as ISO 16684-1."
    },
    {
      "q": "Is XMP metadata required in every PDF?",
      "a": "No. In an ordinary PDF both the Info dictionary and XMP are optional. Some conformance standards change this: PDF/A, for example, requires XMP metadata to be present and to identify the file's conformance level."
    },
    {
      "q": "Where is XMP metadata stored inside the file?",
      "a": "Document-level XMP lives in a metadata stream referenced from the document catalog's Metadata entry. XMP can also be attached to individual components such as images or embedded files."
    },
    {
      "q": "Does PDF 2.0 change how metadata is stored?",
      "a": "Yes. PDF 2.0 deprecates most of the Document Information Dictionary in favour of XMP, continuing the format's shift toward a single, schema-based metadata store, though many files still include both for compatibility."
    },
    {
      "q": "How do the standards ensure metadata is readable by other tools?",
      "a": "The PDF specification fixes where metadata is stored and how XMP packets are delimited, and XMP's ISO standardization defines the data model, so conforming readers can find and interpret the same metadata consistently."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "xmp-metadata",
      "document-information-dictionary",
      "custom-metadata-in-pdf"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-a-metadata-requirements",
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
    "document-information-dictionary",
    "xmp-vs-info-dictionary",
    "custom-metadata-in-pdf",
    "pdf-a-metadata-requirements",
    "pdf-file-identifiers",
    "pdf-document-catalog"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
