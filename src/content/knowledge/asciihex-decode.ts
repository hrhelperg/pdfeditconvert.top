import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "asciihex-decode",
  "h1": "ASCIIHexDecode Encoding",
  "cluster": "images-compression",
  "aliases": [
    "ASCIIHex filter",
    "AHx",
    "ASCII hexadecimal encoding",
    "hex stream filter"
  ],
  "definition": "ASCIIHexDecode is a PDF stream filter that reconstructs binary data from a text form in which every byte is written as two hexadecimal digits, ending at a > marker.",
  "description": "How the ASCIIHexDecode filter represents PDF stream data as hexadecimal text, why it expands rather than shrinks data, and where it sits among PDF's ASCII filters.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "ASCIIHexDecode is one of the standard stream filters defined for PDF, and it belongs to a small group whose job is not to make data smaller but to make it safe to move through channels that only handle printable, 7-bit text. It takes a stream in which each byte of the original data is written as two hexadecimal digits and turns that text back into the raw bytes the document actually needs.",
    "Because it maps every input byte to two ASCII characters, ASCIIHexDecode is the most human-readable of the PDF filters: you can open an ASCIIHex-encoded stream in a text editor and read the hex directly. That transparency is exactly what makes it useful for debugging, for teaching how PDF streams work, and historically for emailing or otherwise transmitting PDF data over systems that could corrupt raw binary bytes.",
    "The trade-off is size. ASCIIHexDecode is an encoding filter, not a compression filter, and the encoded form is always larger than the original. In modern PDFs it is rarely the whole story; when it appears it is usually paired with a real compression filter or used for small, inspection-friendly streams and inline images."
  ],
  "sections": [
    {
      "heading": "How the filter reads hexadecimal text",
      "body": [
        "When a PDF reader decodes an ASCIIHex stream, it walks through the text collecting hexadecimal digits (0-9 and A-F, in either upper or lower case) and pairs them up: the first two digits form one byte, the next two form the following byte, and so on. Any whitespace between digits — spaces, tabs, line feeds, carriage returns — is simply skipped, which lets encoders wrap the hex into tidy fixed-width lines without changing the result.",
        "The end of the data is marked by a greater-than sign (>), known as the EOD (end-of-data) marker. If an odd number of hexadecimal digits appears before that marker, the filter behaves as though a single 0 digit followed the last one, so the final incomplete pair still produces a whole byte. The filter itself takes no decode parameters, which makes it one of the simplest filters to reason about."
      ]
    },
    {
      "heading": "Encoding, not compression",
      "body": [
        "The defining property of ASCIIHexDecode is that it expands data. Each original byte becomes two hexadecimal characters, so the encoded payload is at least twice the size of the input before you even count the whitespace an encoder may add for readability and the trailing EOD marker. Applying it to reduce a file's size does the opposite of what you want.",
        "Its value lies elsewhere: turning arbitrary binary into a stream that survives transport and inspection unharmed. Every character in the encoded output is a printable ASCII character, so nothing can be mangled by software that treats certain byte values specially or that assumes 7-bit text. That robustness, and the fact that the content is trivially readable, is why the filter still exists even though its size cost rules it out for general use."
      ]
    },
    {
      "heading": "Filter chains and where it appears",
      "body": [
        "A PDF stream can name more than one filter, applied in sequence. A common pattern places an ASCII filter on the outside and a compression filter underneath, for example compressing data first and then hex-encoding the compressed result so the whole thing stays 7-bit safe. On decoding, the filters run in the order listed, so ASCIIHexDecode is applied first to recover the compressed bytes, which the next filter then decompresses.",
        "ASCIIHexDecode also has a shorthand name, AHx, used in the abbreviated filter syntax allowed for inline images inside content streams. Whether written in full or abbreviated, the behaviour is identical; the short form simply keeps small inline image dictionaries compact."
      ]
    },
    {
      "heading": "ASCIIHexDecode compared with ASCII85Decode",
      "body": [
        "PDF defines two ASCII-safe encoding filters, and they solve the same problem with different efficiency. ASCIIHexDecode is the simpler and the more wasteful: two characters per byte, a fixed 2:1 expansion. ASCII85Decode packs four input bytes into five ASCII characters, so it expands data far less while still keeping everything printable.",
        "Given that difference, ASCII85 is generally preferred when ASCII-safe transport is actually required, and ASCIIHex is chosen mainly when human readability matters more than size — for inspection, learning, or hand-editing a stream. Neither should be confused with the compression filters that shrink data; both ASCII filters make data larger by design."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Category",
      "value": "ASCII encoding filter (expands data; not a compression filter)"
    },
    {
      "label": "Encoding ratio",
      "value": "Two hexadecimal characters per input byte (at least 2:1 expansion)"
    },
    {
      "label": "End-of-data marker",
      "value": "A greater-than sign (>)"
    },
    {
      "label": "Inline-image abbreviation",
      "value": "AHx"
    }
  ],
  "specification": {
    "introduced": "Part of PDF since its earliest versions",
    "iso": "ISO 32000",
    "typicalUsage": "Making binary stream data safe for 7-bit ASCII transport, and producing human-readable or hand-editable streams; often chained beneath a compression filter.",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "ASCIIHexDecode compresses PDF data.",
      "truth": "It is an encoding filter, not compression. It roughly doubles the data size; its purpose is to make binary bytes safe as printable ASCII, not to shrink them."
    },
    {
      "claim": "Hex-encoded streams must use uppercase A-F.",
      "truth": "The filter accepts hexadecimal digits in either case, and whitespace between digits is ignored, so upper- and lowercase produce identical results."
    },
    {
      "claim": "An odd number of hex digits corrupts the stream.",
      "truth": "If the digit count is odd before the > marker, the filter treats the missing final digit as 0, so the last byte is still decoded cleanly."
    }
  ],
  "faq": [
    {
      "q": "Does ASCIIHexDecode make a PDF smaller?",
      "a": "No. It expands data, using two characters for every original byte. To reduce size you want a compression filter such as FlateDecode, not an ASCII encoding filter."
    },
    {
      "q": "Why would a PDF use ASCIIHexDecode at all?",
      "a": "To keep stream data as printable 7-bit ASCII so it survives transport untouched, and to make streams easy to read or hand-edit during debugging. Readability, not efficiency, is the reason to choose it."
    },
    {
      "q": "What tells the reader where the encoded data ends?",
      "a": "A greater-than sign (>), the end-of-data marker. Everything up to that point is treated as hexadecimal digits, with whitespace between them ignored."
    },
    {
      "q": "Can ASCIIHexDecode be combined with other filters?",
      "a": "Yes. A stream can list several filters applied in sequence, for example data that is compressed first and then hex-encoded. On decoding, ASCIIHexDecode runs first to recover the bytes the next filter expects."
    },
    {
      "q": "How is it different from ASCII85Decode?",
      "a": "Both keep data as printable ASCII, but ASCII85 is more compact, encoding four bytes into five characters, while ASCIIHex uses two characters per byte. ASCIIHex trades size for maximum readability."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "pdf-string-objects",
      "lossy-vs-lossless-pdf-compression"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Compress a PDF (Without Losing Quality)",
        "path": "/guides/how-to-compress-pdf"
      },
      {
        "label": "Why Is My PDF So Large? Causes and Fixes",
        "path": "/guides/why-is-my-pdf-so-large"
      }
    ]
  },
  "seeAlso": [
    "ascii85-decode",
    "pdf-filters",
    "flate-decode",
    "lzw-decode",
    "runlength-decode",
    "pdf-stream-objects",
    "inline-images"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
