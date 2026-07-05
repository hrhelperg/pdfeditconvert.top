import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-array-objects",
  "h1": "PDF Array Objects",
  "cluster": "foundations",
  "aliases": [
    "Array object",
    "PDF array",
    "Array"
  ],
  "definition": "A PDF array object is an ordered, one-dimensional collection of values of any object type, written as a whitespace-separated sequence enclosed in square brackets.",
  "description": "In PDF, an array object is an ordered list of values written in square brackets. See how PDF arrays are structured, nested and used across a file.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF file is not really a document in the way a word processor thinks of one — internally it is a collection of small typed values called objects, wired together by references. The array is one of the basic object types PDF provides, and it does exactly what the name suggests: it holds an ordered list of other values. Wherever the format needs a fixed, meaningful sequence — the four corners of a page, the six numbers of a coordinate transform, the child pages hanging off a node — it reaches for an array.",
    "What makes arrays distinctive among PDF's object types is that position, not name, carries the meaning. The first slot means one thing, the second means another, and the specification defines what each slot is for in a given context. That is a deliberate contrast with the dictionary object, PDF's other main container, where values are looked up by name and order is irrelevant. Understanding when the format uses an array versus a dictionary is a large part of being able to read a PDF's raw structure.",
    "Arrays have been part of PDF since its first version and are defined in ISO 32000, the standard that specifies the format. They appear constantly once you look inside a file, so a clear mental model of how they are written and what they can contain pays off across almost every other PDF internals topic."
  ],
  "sections": [
    {
      "heading": "How a PDF Array Is Written",
      "body": [
        "An array is written as a sequence of objects enclosed in square brackets, for example [ 549 3.14 false (Ralph) /SomeName ]. The elements are separated by whitespace — spaces, tabs or line breaks — and never by commas, which sets PDF apart from JSON or most programming languages. Because whitespace is the only separator, an array can be laid out on a single line or spread across many lines with no change in meaning; the line breaks are just more whitespace.",
        "A PDF array is heterogeneous: a single array can freely mix numbers, booleans, strings, names, dictionaries and even other arrays, in any combination. Nesting is allowed to any depth, and an empty array, written as [], is perfectly valid. Each element can be a direct value written in place, or an indirect reference to an object stored elsewhere in the file, written in the form 12 0 R."
      ]
    },
    {
      "heading": "Order Carries the Meaning",
      "body": [
        "In an array, the position of each element is significant, and the specification assigns a role to each slot for a given use. A rectangle, for instance, is stored as an array of four numbers interpreted as lower-left x, lower-left y, upper-right x and upper-right y — swap two of them and you have described a different box. This positional convention is efficient precisely because the names are implied by context rather than written out.",
        "That is the key difference from the dictionary object, which is an unordered set of name/value pairs where you retrieve a value by its key. The format chooses an array when a fixed, ordered sequence of related values is needed and the count and order are well defined, and a dictionary when entries need to be identified by name and may appear in any order. Neither is a general-purpose substitute for the other."
      ]
    },
    {
      "heading": "Where Arrays Show Up in a PDF",
      "body": [
        "Once you know the syntax, arrays are visible everywhere in a real file. Page boundaries such as the MediaBox and CropBox are four-number rectangle arrays — a US Letter page, for example, is commonly [0 0 612 792] in points. Coordinate and text transformations are six-number arrays of the form [a b c d e f]. A page's /Contents entry may be a single stream or an array of streams to be concatenated, and a simple font's character widths are stored in a Widths array.",
        "Structural machinery relies on arrays too. The Kids entry in the page tree is an array of indirect references to child page and page-tree nodes; the file identifier in the trailer is an array of two byte strings; line dashing uses a dash array; and cross-reference streams describe their field layout with a W array and an optional Index array. Named destinations that a link jumps to are themselves arrays combining a page reference with a view specification."
      ]
    },
    {
      "heading": "Direct Values and Indirect References Inside Arrays",
      "body": [
        "Because an array element can be either an inline value or an indirect reference, a single array often mixes both. A Kids array is a good example: it holds indirect references so that each child object lives independently in the file and can be shared, updated or reached without duplicating its contents. When a viewer walks such an array, it resolves each reference on demand rather than reading everything up front.",
        "This indirection is what lets arrays participate in PDF's larger design goals. Referenced objects can be reused by more than one array, replaced through incremental updates without rewriting the surrounding structure, and streamed to a reader in a useful order. The array itself stays small — it is just the ordered list of pointers and values — while the heavy data sits in the objects it points to."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Delimiters",
      "value": "Square brackets [ and ] enclose the array; elements are separated by whitespace, never by commas."
    },
    {
      "label": "Element types",
      "value": "A single array may mix any basic PDF object type, including nested arrays and dictionaries."
    },
    {
      "label": "Ordering",
      "value": "Position is significant — each element's role is defined by the array's context in the specification."
    },
    {
      "label": "Object model",
      "value": "The array is one of PDF's eight basic object types, defined in ISO 32000."
    }
  ],
  "specification": {
    "iso": "ISO 32000 (PDF)",
    "introduced": "PDF 1.0",
    "typicalUsage": "Holding fixed, ordered sequences such as rectangles, transformation matrices, page-tree Kids lists and font width tables.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF arrays separate their elements with commas, like JSON or JavaScript.",
      "truth": "PDF uses whitespace to separate array elements; a comma is not a separator and would be treated as part of the data."
    },
    {
      "claim": "An array can only hold one type of value at a time.",
      "truth": "A PDF array is heterogeneous — one array may contain numbers, strings, names, dictionaries and even other arrays together."
    },
    {
      "claim": "Arrays and dictionaries are interchangeable ways to group data.",
      "truth": "Arrays are ordered and positional, while dictionaries are unordered name/value maps; the format picks one based on whether order or naming carries the meaning."
    }
  ],
  "faq": [
    {
      "q": "Can a PDF array hold references to other objects?",
      "a": "Yes. Alongside inline values, an array can contain indirect references written as, for example, 12 0 R. The Kids arrays in the page tree are made almost entirely of such references."
    },
    {
      "q": "What does a PDF array look like in real content?",
      "a": "A page's MediaBox such as [0 0 612 792] is a four-number rectangle; a transformation is a six-number array; and a simple font's Widths entry is a list of numbers."
    },
    {
      "q": "Is there a maximum number of elements an array can hold?",
      "a": "The format itself allows very large arrays. Some older viewer implementations documented practical limits, and PDF 2.0 relaxed many of those historical implementation limits."
    },
    {
      "q": "How does an array differ from a stream object?",
      "a": "An array is an ordered list of values. A stream is a dictionary followed by a block of (usually compressed) bytes, so it carries payload data rather than a plain sequence of values."
    },
    {
      "q": "Does a PDF array have to be on a single line?",
      "a": "No. Because elements are separated by whitespace, an array can span several lines; newlines are just whitespace and do not change its meaning."
    }
  ],
  "graph": {
    "parentConcept": "pdf-objects",
    "relatedConcepts": [
      "pdf-page-tree",
      "pdf-trailer",
      "pdf-coordinate-system",
      "iso-32000",
      "pdf-versions"
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
    "pdf-dictionary",
    "pdf-indirect-objects",
    "pdf-name-objects",
    "pdf-string-objects",
    "pdf-stream-objects",
    "pdf-file-structure",
    "mediabox"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
