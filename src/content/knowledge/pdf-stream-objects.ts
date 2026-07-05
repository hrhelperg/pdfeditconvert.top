import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-stream-objects",
  "h1": "PDF Stream Objects",
  "cluster": "foundations",
  "aliases": [
    "stream object",
    "PDF stream",
    "stream",
    "stream dictionary"
  ],
  "definition": "A PDF stream object is a dictionary paired with a sequence of bytes held between the stream and endstream keywords, used to carry large or encoded data such as page content, images, and embedded fonts.",
  "description": "Stream objects pair a PDF dictionary with a block of bytes to hold content, images, fonts, and other data, and are the place where PDF applies compression filters.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF is built from a small set of basic object types, and the stream object is the one designed to carry an arbitrary, potentially large, block of raw bytes. Structurally it is a hybrid: an ordinary PDF dictionary that describes the data, immediately followed by the byte sequence itself, wrapped between the keywords stream and endstream. The dictionary holds metadata about the bytes (how long they are, how they are encoded, what they represent) while the bytes hold the actual payload.",
    "Streams matter because almost everything substantial inside a PDF is one. The drawing instructions for each page, embedded raster images, embedded font programs, ICC color profiles, XMP metadata, attached files, and even parts of the file's own internal plumbing are all stream objects. When you want to understand where a PDF's size and content actually live, you are almost always looking at streams.",
    "Streams are also where PDF performs compression and encoding. Because the byte payload can be passed through one or more filters, the same object type that stores a page's text and an embedded photograph is also the mechanism that shrinks them. This makes the stream object central to both what a PDF contains and how large it ends up being."
  ],
  "sections": [
    {
      "heading": "Anatomy of a Stream Object",
      "body": [
        "A stream object begins with a dictionary, written with the usual double-angle-bracket syntax, followed by the keyword stream, then the byte data, then the keyword endstream. The keyword stream is followed by an end-of-line marker (a carriage return and line feed, or a single line feed) before the data begins, and the data ends just before endstream. Everything between those two keywords is treated as raw bytes and is not parsed as PDF syntax.",
        "Two rules distinguish a stream from an ordinary dictionary. First, the stream dictionary must include a Length entry giving the number of bytes of stream data, and that value may itself be given as an indirect reference. Second, a stream must be defined as an indirect object; it cannot appear inline as the value of another object the way a string or array can. Beyond Length, the dictionary is a normal PDF dictionary and may carry any additional keys the stream's role requires."
      ]
    },
    {
      "heading": "Filters and Encoded Data",
      "body": [
        "The bytes stored in a stream can be encoded, and the optional Filter entry names the encoding or encodings applied to them. Filter may be a single name or an array of names, and when it is an array the filters form a pipeline: to recover the original data a reader applies the decoders in order. A companion DecodeParms entry supplies parameters for filters that need them, such as predictor settings. The data physically present between stream and endstream is the encoded form; the decoded form is what a consumer reconstructs after running the filters.",
        "Standard filters include FlateDecode (zlib/deflate compression), LZWDecode, ASCIIHexDecode and ASCII85Decode (ASCII-safe encodings), RunLengthDecode, and the image-oriented CCITTFaxDecode, DCTDecode (JPEG), JBIG2Decode, and JPXDecode (JPEG 2000). Because the Filter entry is optional, a stream may also be stored with no filter at all, holding plain uncompressed bytes. This is why the stream object is the natural home for PDF compression: choosing and configuring filters is how a file is made smaller."
      ]
    },
    {
      "heading": "What Streams Represent in a PDF",
      "body": [
        "The same object type is reused for many different jobs. Page content streams hold the operators that draw text and graphics. Image XObjects and form XObjects hold reusable image and vector content. Embedded font programs, ICC profiles, and document-level XMP metadata are all streams, as are embedded and associated files. Later versions of PDF even moved parts of the file's structure into streams: object streams bundle many compressed indirect objects together, and cross-reference streams store the cross-reference data itself in stream form.",
        "Because the descriptive dictionary is attached to the bytes, each stream can be self-describing. An image stream, for example, carries width, height, color space, and bits-per-component alongside its pixel data, while a content stream needs little more than a Length and an optional Filter. This pairing of typed metadata with a raw payload is what lets a single mechanism serve such a wide range of content."
      ]
    },
    {
      "heading": "Streams Compared to Dictionaries and Object Streams",
      "body": [
        "A stream is closely related to a plain dictionary but is not the same thing. A dictionary is only a set of key-value pairs; a stream is a dictionary that additionally owns a block of bytes, must state their length, and must be an indirect object. If an object has no attached byte payload, it is a dictionary rather than a stream. This distinction is worth keeping clear because the stream dictionary is often discussed on its own, even though it cannot exist without the bytes that follow it.",
        "A common point of confusion is the phrase object stream. An object stream is not a synonym for stream object; it is one specific kind of stream object whose byte payload happens to be a collection of other, compressed indirect objects packed together. Every object stream is a stream object, but the vast majority of stream objects are ordinary content, images, fonts, and metadata rather than object streams."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Structure",
      "value": "A dictionary followed by raw bytes between the stream and endstream keywords."
    },
    {
      "label": "Required entry",
      "value": "The stream dictionary must include a Length entry giving the byte count of the raw data."
    },
    {
      "label": "Indirect only",
      "value": "Streams must be defined as indirect objects, not written inline inside other objects."
    },
    {
      "label": "Optional encoding",
      "value": "The Filter and DecodeParms entries specify one or more encodings applied to the data."
    }
  ],
  "specification": {
    "iso": "ISO 32000-1, ISO 32000-2",
    "introduced": "Present since the earliest PDF (PDF 1.0, early 1990s)",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Storing content streams, images, embedded fonts, ICC profiles, metadata, embedded files, object streams, and cross-reference streams, usually with compression filters applied.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A stream object and an object stream are the same thing.",
      "truth": "An object stream is one particular kind of stream object whose bytes are a bundle of other compressed indirect objects; stream object is the general category, and most streams are not object streams."
    },
    {
      "claim": "Every PDF stream is compressed.",
      "truth": "The Filter entry is optional, so a stream may hold plain uncompressed bytes; compression happens only when a filter such as FlateDecode is applied."
    },
    {
      "claim": "A stream can be written inline as the value of a dictionary key.",
      "truth": "Streams must be defined as indirect objects; unlike strings or arrays they cannot appear directly as another object's value."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a stream and a dictionary in PDF?",
      "a": "A dictionary is only a set of key-value pairs. A stream is a dictionary that also owns a block of bytes, must include a Length entry stating how many bytes there are, and must be defined as an indirect object."
    },
    {
      "q": "Are all PDF streams compressed?",
      "a": "No. The Filter entry that specifies compression is optional, so a stream can store plain uncompressed bytes. In practice many streams are compressed with FlateDecode, but that is a choice, not a requirement."
    },
    {
      "q": "Can a single stream use more than one filter?",
      "a": "Yes. The Filter entry can be an array of filter names, and they form a pipeline. For example a stream might be encoded with ASCII85Decode over FlateDecode, and a reader applies the decoders in order to recover the data."
    },
    {
      "q": "Where do the raw stream bytes begin and end?",
      "a": "They begin right after the stream keyword and its end-of-line marker, and end just before the endstream keyword. The Length entry in the dictionary states exactly how many bytes lie between them."
    },
    {
      "q": "Why must a stream be an indirect object?",
      "a": "The specification requires it. Defining streams as indirect objects lets them be referenced from many places, allows the Length to be given as an indirect reference, and keeps large binary payloads out of the middle of other objects."
    }
  ],
  "graph": {
    "parentConcept": "pdf-objects",
    "relatedConcepts": [
      "image-xobjects",
      "embedded-font-programs",
      "xmp-metadata",
      "pdf-compression",
      "appearance-streams"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-5",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Compress a PDF (Without Losing Quality)",
        "path": "/guides/how-to-compress-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-objects",
    "pdf-dictionary",
    "pdf-indirect-objects",
    "pdf-content-streams",
    "pdf-filters",
    "pdf-object-streams",
    "pdf-xref-streams",
    "flate-decode"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
