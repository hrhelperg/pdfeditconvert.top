import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-dictionary",
  "h1": "PDF Dictionary Objects",
  "cluster": "foundations",
  "aliases": [
    "Dictionary object",
    "PDF dictionary",
    "PDF dict",
    "Key-value object",
    "Associative table"
  ],
  "definition": "A PDF dictionary object is a collection of key–value pairs written between << and >>, where each key is a name object and each value can be any PDF object.",
  "description": "How PDF dictionary objects pair name keys with values between << and >>, and why they form the backbone of catalogs, pages, fonts, and streams.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "If PDF objects are the vocabulary of the file format, the dictionary is its grammar. A dictionary object pairs names with values, and almost every meaningful structure in a PDF — from the top-level document catalog down to a single font — is expressed as one. Learning how dictionaries work is the key to reading how a PDF is actually assembled.",
    "A dictionary is one of the basic object types defined by the PDF specification, alongside booleans, numbers, strings, names, arrays, streams, and the null object. What sets it apart is that it is keyed: instead of a bare value or a positional list, it holds labelled entries that a reader looks up by name.",
    "Because a dictionary's values can themselves be dictionaries, arrays, or references to other objects, dictionaries link together into the larger tree that a viewer walks when it opens a file. Understanding this one construct explains most of what you see when you inspect the raw bytes of a PDF."
  ],
  "sections": [
    {
      "heading": "Syntax: name keys, any values, wrapped in << >>",
      "body": [
        "A dictionary object is written as a sequence of key–value pairs enclosed between the double angle-bracket tokens << and >>. Each key must be a name object — a token that begins with a slash, such as /Type or /MediaBox — and each value may be any of PDF's object types: a boolean, a number, a string, a name, an array, another dictionary, a stream, the null object, or an indirect reference to one of these. A given key should appear at most once within a single dictionary.",
        "The order in which entries are written carries no meaning; a reader locates a value by its key, not by its position. Whitespace between the key, its value, and the next pair is flexible, so a producer may lay a dictionary out on one line or spread it across many. A page object, for example, might read: << /Type /Page /MediaBox [0 0 612 792] /Parent 4 0 R >>, mixing a name value, an array value, and an indirect reference in a single dictionary."
      ]
    },
    {
      "heading": "Self-describing objects: the /Type and /Subtype keys",
      "body": [
        "Many dictionaries carry a /Type entry whose value is a name identifying what kind of object the dictionary represents — /Catalog, /Page, /Font, /Annot, and so on. A companion key, usually /Subtype (or /S in some dictionaries), narrows that classification further: a font dictionary's /Subtype might be /Type1 or /TrueType, and an annotation's might be /Link or /Widget. Not every dictionary includes /Type — it is required only where the specification calls for it — but where present it lets a processor recognise an object's role without having to infer it purely from context."
      ]
    },
    {
      "heading": "The backbone of PDF file structure",
      "body": [
        "Dictionaries structure almost everything in a PDF. The document catalog, each node of the page tree, individual page objects, font and font-descriptor objects, annotations, form fields, the encryption dictionary, and the file trailer are all dictionaries. Because a value can itself be a dictionary or an array of references, dictionaries nest into the tree- and graph-shaped structures that make up a document: the catalog points to the page tree, which points to page dictionaries, which point to resource dictionaries, and so on down.",
        "This uniform key–value model is a large part of why PDF's internal organisation is both extensible and navigable. New keys can be added to a dictionary without breaking readers that do not understand them, and a processor can always walk the structure by following names and references rather than parsing bespoke syntax for each kind of object."
      ]
    },
    {
      "heading": "Dictionaries and streams",
      "body": [
        "A stream object is a dictionary followed by a block of bytes bracketed by the keywords stream and endstream. That leading dictionary — the stream dictionary — records the information a reader needs to interpret the bytes, most importantly the /Length of the data and any /Filter used to compress or encode it. In effect, every stream begins as a dictionary, and the raw data is an extension of it rather than a wholly separate kind of object. This is why content streams, embedded font programs, and image XObjects all present a dictionary of metadata ahead of their payload."
      ]
    },
    {
      "heading": "Direct, indirect, and null entries",
      "body": [
        "A dictionary may sit directly inside another object, or it may be an indirect object with its own object number that others reference by an indirect reference such as 4 0 R. Large or shared dictionaries — pages, fonts, resources — are typically indirect so they can be pointed to from several places and updated independently, which also underpins features like incremental updates. Separately, an entry whose value is the null object is defined to be equivalent to the entry being absent, giving a producer an explicit way to clear an inherited or default value rather than leaving it unspecified."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Delimiters",
      "value": "Entries are enclosed between << and >>"
    },
    {
      "label": "Keys",
      "value": "Every key is a name object, e.g. /Type"
    },
    {
      "label": "Values",
      "value": "Any PDF object — including another dictionary, array, or stream"
    },
    {
      "label": "Null entries",
      "value": "A value of null is equivalent to the entry being absent"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1, ISO 32000-2",
    "introduced": "PDF 1.0",
    "typicalUsage": "Structuring almost every object in a PDF — catalog, pages, fonts, annotations, and stream headers",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "The entries in a dictionary are stored and read in the order they appear.",
      "truth": "Entry order is not significant; a reader looks values up by their key, so a dictionary is effectively unordered."
    },
    {
      "claim": "A dictionary and a stream are two unrelated kinds of object.",
      "truth": "Every stream object begins with a dictionary that describes it — a stream is a dictionary plus a block of data, not a separate structure."
    },
    {
      "claim": "A dictionary key can be any string of text.",
      "truth": "Keys must be name objects (tokens starting with a slash, such as /Type); string objects are only valid as values, not keys."
    }
  ],
  "faq": [
    {
      "q": "What delimiters mark a PDF dictionary?",
      "a": "A dictionary is written between the double angle-bracket tokens << and >>, with name-object keys each followed by their value."
    },
    {
      "q": "Can a dictionary value be another dictionary?",
      "a": "Yes. A value can be any PDF object, so nesting dictionaries inside dictionaries is common and is how PDF builds hierarchical structures like the page tree."
    },
    {
      "q": "What does the /Type key do?",
      "a": "Where present, /Type names the kind of object a dictionary represents — such as /Catalog, /Page, or /Font — so a processor can recognise its role. Some dictionaries also add /Subtype to refine it."
    },
    {
      "q": "How is a dictionary different from an array?",
      "a": "An array is an ordered list whose elements are reached by position, while a dictionary is keyed: its entries are reached by name and their order is not meaningful."
    },
    {
      "q": "Do all dictionaries have to be indirect objects?",
      "a": "No. A dictionary can be written directly inside another object or defined as an indirect object with its own number; large or shared dictionaries are usually indirect so they can be referenced and updated independently."
    }
  ],
  "graph": {
    "parentConcept": "pdf-objects",
    "relatedConcepts": [
      "pdf-file-structure",
      "pdf-page-tree",
      "font-descriptor",
      "document-information-dictionary",
      "encryption-dictionary"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ]
  },
  "seeAlso": [
    "pdf-objects",
    "pdf-name-objects",
    "pdf-array-objects",
    "pdf-stream-objects",
    "pdf-indirect-objects",
    "pdf-document-catalog",
    "pdf-trailer"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
