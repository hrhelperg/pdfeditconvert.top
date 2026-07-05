import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-objects",
  "h1": "PDF Objects",
  "cluster": "foundations",
  "aliases": [
    "PDF object types",
    "basic PDF objects",
    "PDF data objects",
    "COS objects"
  ],
  "definition": "PDF objects are the typed data primitives — booleans, numbers, strings, names, arrays, dictionaries, streams and the null object — from which every element of a PDF file is built.",
  "description": "Every PDF is built from eight basic object types — booleans, numbers, strings, names, arrays, dictionaries, streams and null. Here is how they work.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF file can look like a single sealed picture of a page, but internally it is a structured collection of small, typed values called objects. Almost everything a PDF contains or does — text, fonts, images, form fields, annotations, and the page structure itself — is expressed as one or more of these objects. Learning the object model is the entry point to understanding how a PDF actually stores and organizes its content.",
    "The PDF specification defines a small, fixed vocabulary of object types. Higher-level structures such as pages, the document catalog, and content streams are not separate formats; they are ordinary dictionaries and streams whose keys and values follow conventions the specification describes. Once you know the basic types, the rest of the file is just those types nested inside one another and cross-referenced.",
    "This model dates back to PDF's origins at Adobe in the early 1990s and carried forward in principle through standardization as ISO 32000. The syntax has since been extended — for example with object streams and cross-reference streams — but the underlying object types are the same in PDF 2.0 as they were in the earliest PDF versions."
  ],
  "sections": [
    {
      "heading": "The eight basic object types",
      "body": [
        "The specification defines eight basic object types. Booleans are the keywords true and false. Numbers cover both integers and real numbers. Strings are byte sequences, written either as literals inside parentheses or as hexadecimal inside angle brackets. Names are atomic identifiers written with a leading slash, such as /Type. Arrays are ordered collections written in square brackets. Dictionaries are unordered key-value maps written between << and >>, where every key is a name. Streams are a dictionary followed by an arbitrary sequence of bytes, used for large or binary data. Finally, the null object is the keyword null.",
        "These types divide roughly into simple values (booleans, numbers, names, and null), byte data (strings and streams), and container types (arrays and dictionaries) that hold other objects. Nearly all of a PDF's higher-level meaning comes from dictionaries: a page, a font, an annotation, and the document catalog are each a dictionary whose entries a reader interprets according to a /Type name, and often a /Subtype as well."
      ]
    },
    {
      "heading": "Direct and indirect objects",
      "body": [
        "Any object can appear in one of two ways. A direct object is written inline, in place, as the value of some entry. An indirect object is given a label — an object number and a generation number — and defined on its own, so that other objects can point to it by reference rather than containing a copy. This labeling is what lets many parts of a file share a single object, such as one font or image referenced by many pages, and it is what makes a PDF a graph of objects rather than a strict tree.",
        "Indirect references are the backbone of the file. The cross-reference table, or in newer files a cross-reference stream, records the location of every indirect object so a reader can jump straight to a given object number without scanning the whole document. Stream objects are always indirect, because a stream's length and position need to be resolvable independently of where the stream is used."
      ]
    },
    {
      "heading": "How objects assemble into a document",
      "body": [
        "Objects nest and reference each other to form the whole document. Reading conventionally starts at the trailer, whose /Root entry points to the document catalog dictionary. The catalog points to the page tree, whose leaves are individual page dictionaries. Each page dictionary in turn references its content stream (the drawing instructions), its resources (fonts, images, and color spaces), and any annotations or form fields. Follow the references and you traverse the entire document.",
        "Because containers can hold other objects — arrays of references, dictionaries whose values are more dictionaries — a PDF is best pictured as a directed graph rooted at the catalog. Content streams add a second layer: inside a stream's bytes is a sequence of operators and operands describing what to paint on the page, but that stream is still just one object among many."
      ]
    },
    {
      "heading": "Why the object model matters",
      "body": [
        "Thinking in objects explains several everyday PDF behaviors. Incremental updates work by appending new and replacement objects, with a fresh cross-reference section, to the end of the file without rewriting what came before, which is how signatures and edits can be added while the original bytes are preserved. Object streams and cross-reference streams, introduced in later PDF versions, pack many small objects together and compress them to shrink files. Tools that extract text, repair damaged files, or edit content all operate by parsing, rewriting, and re-linking these objects.",
        "For anyone troubleshooting a PDF, the object model clarifies what is and is not possible. Text you cannot select may be an image object rather than real text; a form field that will not save is a specific dictionary; and flattening removes interactive objects while baking their appearance into the page content. When you need to actually change any of this, an editor manipulates the underlying objects for you."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Basic object types",
      "value": "Eight: booleans, numbers, strings, names, arrays, dictionaries, streams, and null"
    },
    {
      "label": "Indirect object identity",
      "value": "An object number plus a generation number"
    },
    {
      "label": "Streams",
      "value": "Always indirect objects — a dictionary followed by raw bytes"
    },
    {
      "label": "Document root",
      "value": "The catalog, reached from the trailer's /Root entry"
    }
  ],
  "specification": {
    "iso": "ISO 32000 (PDF 1.7 and PDF 2.0)",
    "introduced": "PDF 1.0, Adobe, early 1990s",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "The universal building blocks for all content and structure inside a PDF file.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF is basically a flat image of each page.",
      "truth": "Most PDFs are structured collections of typed objects; text, vector graphics, fonts, and metadata are distinct objects rather than a single flattened picture, though a scanned PDF can wrap a page image inside an image object."
    },
    {
      "claim": "Every object in a PDF is numbered and referenced.",
      "truth": "Only indirect objects carry an object number and generation number; many values are direct objects written inline, with no number of their own."
    },
    {
      "claim": "Streams are separate from the object system.",
      "truth": "A stream is one of the basic object types — a dictionary paired with a sequence of bytes — not something outside the object model."
    }
  ],
  "faq": [
    {
      "q": "What are the eight PDF object types?",
      "a": "Booleans, numbers (integers and real numbers), strings, names, arrays, dictionaries, streams, and the null object. Everything else in a PDF is built by combining these."
    },
    {
      "q": "Are PDF objects stored as text or as binary?",
      "a": "The object syntax is written in ASCII text tokens, but stream objects can hold arbitrary binary data such as compressed images or embedded fonts, so a typical PDF is a mix of readable structure and binary payloads."
    },
    {
      "q": "How does a PDF reader find one specific object?",
      "a": "It uses the cross-reference table or cross-reference stream, which maps each object number to its location in the file, together with indirect references, so the reader can jump directly to an object without reading everything before it."
    },
    {
      "q": "Is a PDF page the same thing as an object?",
      "a": "A page is a single dictionary object, but a document contains many other objects too — the catalog, the page tree, content streams, fonts, and images — all linked together by reference."
    },
    {
      "q": "Can I edit PDF objects by hand?",
      "a": "Simple changes are technically possible in a text or hex editor, but object offsets and the cross-reference table must stay consistent, so in practice an editor or library rewrites and re-links the objects for you."
    }
  ],
  "graph": {
    "parentConcept": "pdf-file-structure",
    "childConcepts": [
      "pdf-indirect-objects",
      "pdf-name-objects",
      "pdf-string-objects",
      "pdf-stream-objects",
      "pdf-dictionary",
      "pdf-array-objects"
    ],
    "relatedConcepts": [
      "pdf-object-streams",
      "pdf-document-catalog",
      "pdf-trailer",
      "pdf-content-streams",
      "pdf-incremental-updates"
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
        "label": "Why Can't I Edit a PDF? The Real Reasons and What Helps",
        "path": "/guides/why-cant-i-edit-a-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-file-structure",
    "pdf-indirect-objects",
    "pdf-dictionary",
    "pdf-array-objects",
    "pdf-stream-objects",
    "pdf-name-objects",
    "pdf-string-objects",
    "pdf-cross-reference-table"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
