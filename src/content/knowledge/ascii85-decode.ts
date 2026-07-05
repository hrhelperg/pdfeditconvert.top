import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "ascii85-decode",
  "h1": "ASCII85Decode Encoding",
  "cluster": "images-compression",
  "aliases": [
    "ASCII85 filter",
    "Base-85 encoding",
    "ASCII base-85",
    "/A85 abbreviation",
    "ASCII85 encoding"
  ],
  "definition": "ASCII85Decode is a PDF stream filter that reconstructs binary data from a base-85 ASCII representation, where each group of four binary bytes is encoded as five printable ASCII characters.",
  "description": "ASCII85Decode is the PDF filter that turns base-85 ASCII text back into binary, packing every four bytes into five printable characters for safe transport.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "ASCII85Decode is one of the standard stream filters defined by the PDF format. Its job is narrow but specific: take a stream of printable ASCII characters that represents encoded binary data and reconstruct the original bytes. It belongs to the same family of filters that PDF uses to store content streams, images, fonts, and other object data, and it is chosen when binary data needs to survive a text-only channel intact.",
    "Unlike FlateDecode or LZWDecode, ASCII85Decode does not shrink data. It is an encoding scheme, not a compression scheme. Every four bytes of binary input become five printable characters, so an ASCII85-encoded stream is actually about a quarter larger than the raw bytes it represents. The payoff is that the result contains only printable, seven-bit-safe characters that can pass through systems that would corrupt or strip arbitrary binary values.",
    "The technique traces back to PostScript, PDF's ancestor, where ASCII85 was used to embed binary image and font data inside a text-based page description. PDF inherited both the concept and its close relative, ASCIIHexDecode, and ASCII85 remains the more compact of the two ASCII-safe encodings."
  ],
  "sections": [
    {
      "heading": "How base-85 encoding works",
      "body": [
        "ASCII85 treats each group of four input bytes as a single 32-bit unsigned number, then expresses that number in base 85 as five digits. Each digit is offset by 33 so it maps to a printable ASCII character, producing values that span the range from the exclamation mark to the lowercase letter 'u'. Eighty-five symbols are the minimum needed because eighty-four to the fifth power is too small to cover every possible 32-bit value, while eighty-five to the fifth comfortably exceeds it. Decoding simply reverses the process: five characters are read, each has 33 subtracted, the base-85 digits are recombined into a 32-bit number, and that number is split back into four bytes.",
        "Two conventions keep the format compact and forgiving. A group consisting of four zero bytes may be abbreviated with the single character 'z' instead of the five characters that would otherwise be required, and a decoder must reject a 'z' that appears in the middle of a group. Whitespace characters may appear anywhere in the encoded data and are ignored during decoding, which lets encoders wrap long streams onto multiple lines for readability."
      ]
    },
    {
      "heading": "Partial groups and the end-of-data marker",
      "body": [
        "Because real data rarely divides evenly into four-byte groups, ASCII85 has a defined rule for the final, shorter group. When fewer than four bytes remain, the encoder conceptually pads the group with zero bytes up to four, encodes the full group, and then emits only one more character than the number of bytes it actually held. On decoding, the missing characters are treated as the highest base-85 digit before the trailing bytes are discarded, so the exact original length is recovered without ambiguity.",
        "An ASCII85 stream is terminated by the two-character sequence '~>', the end-of-data marker. A decoder stops as soon as it reads this marker, which lets the filter know precisely where the encoded data ends even when it is embedded inside a larger file or followed by other content. Any partial group pending at that point is finalized using the padding rule described above."
      ]
    },
    {
      "heading": "Where ASCII85Decode fits in a filter chain",
      "body": [
        "A PDF stream can name more than one filter, applied in sequence, so binary data is frequently compressed and then wrapped in an ASCII encoding. In such a chain ASCII85Decode is listed first in the Filter array and runs first on read, converting the ASCII text back into the compressed binary bytes, after which a filter such as FlateDecode inflates those bytes to the original data. This layering is why an ASCII85 stream is best understood as a transport wrapper around already-compressed content rather than a size-reduction step in its own right.",
        "Within inline images, which carry their own compact filter names, ASCII85Decode is abbreviated as /A85, mirroring /AHx for ASCIIHexDecode and /Fl for FlateDecode. Modern PDF producers more often store streams as raw binary because a PDF file is itself a binary container, so ASCII85 tends to appear in documents generated from PostScript workflows, in tools that favor human-inspectable streams, or wherever a document must remain purely text-safe."
      ]
    },
    {
      "heading": "ASCII85 compared with ASCIIHexDecode",
      "body": [
        "Both ASCII85Decode and ASCIIHexDecode solve the same problem, representing binary data using only printable characters, but they trade efficiency for simplicity differently. ASCIIHexDecode writes two hexadecimal characters for every single byte, doubling the data size, and is trivial to read and debug because each byte maps to an obvious pair of hex digits. ASCII85Decode packs four bytes into five characters, so its overhead is roughly twenty-five percent, considerably less than the hundred-percent overhead of hex.",
        "Neither filter reduces file size, and choosing between them is a question of density versus legibility rather than compression. When the goal is genuinely smaller streams, the work is done by the compression filters, and an ASCII encoding, if used at all, sits on top of them purely to keep the bytes within a printable range."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Encoding ratio",
      "value": "Four binary bytes become five printable ASCII characters, increasing size by about 25%"
    },
    {
      "label": "Character range",
      "value": "Uses printable ASCII from '!' (33) through 'u' (117)"
    },
    {
      "label": "Zero shortcut",
      "value": "The single character 'z' abbreviates a group of four zero bytes"
    },
    {
      "label": "End marker",
      "value": "Encoded data ends with '~>'; the inline-image abbreviation is /A85"
    }
  ],
  "specification": {
    "typicalUsage": "Making binary stream data ASCII-safe, usually as the outer filter wrapped around a compression filter such as FlateDecode.",
    "iso": "Defined in ISO 32000-1 (PDF 1.7) and carried forward in ISO 32000-2 (PDF 2.0)",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "ASCII85Decode compresses a PDF and makes it smaller.",
      "truth": "It is an encoding, not a compression filter. It expands data by roughly 25%; real size reduction comes from filters like FlateDecode or DCTDecode."
    },
    {
      "claim": "ASCII85 and ASCIIHex are essentially the same, so it does not matter which is used.",
      "truth": "ASCIIHexDecode uses two characters per byte (about 100% overhead) while ASCII85Decode uses five per four bytes (about 25% overhead), so ASCII85 is markedly more compact."
    },
    {
      "claim": "A PDF must ASCII-encode its streams because PDF is a text format.",
      "truth": "A PDF file is a binary container and can store raw binary streams directly. ASCII encoding is optional and used only when data must stay within a printable, seven-bit-safe range."
    }
  ],
  "faq": [
    {
      "q": "Why would a PDF encode binary data as ASCII at all?",
      "a": "To let binary content pass unharmed through channels or tools that only handle printable, seven-bit text. The approach is inherited from PostScript, and it also makes a stream easier to inspect by eye than raw binary."
    },
    {
      "q": "Is ASCII85Decode lossless?",
      "a": "Yes. The mapping is fully reversible, so decoding an ASCII85 stream reproduces the original bytes exactly, including the correct length when the final group is a partial one."
    },
    {
      "q": "What does the '~>' at the end of the data mean?",
      "a": "It is the end-of-data marker. A decoder stops reading as soon as it encounters this two-character sequence, which lets the filter locate the exact end of the encoded stream."
    },
    {
      "q": "Can ASCII85Decode be combined with other filters?",
      "a": "Yes. A stream's Filter entry can list several filters applied in order. A common pattern lists ASCII85Decode first to recover compressed bytes, followed by FlateDecode to inflate them."
    },
    {
      "q": "Why is it base 85 specifically and not some other base?",
      "a": "Eighty-five is the smallest base whose fifth power exceeds every possible 32-bit value, so five base-85 digits can represent any four-byte group while keeping every digit within the printable ASCII range."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "pdf-vs-postscript",
      "pdf-content-streams",
      "pdf-string-objects",
      "object-stream-compression"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ],
    "relatedFormats": [
      "dct-decode-jpeg",
      "ccittfax-decode"
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
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      },
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      }
    ]
  },
  "seeAlso": [
    "asciihex-decode",
    "pdf-filters",
    "flate-decode",
    "pdf-compression",
    "pdf-stream-objects",
    "lzw-decode",
    "runlength-decode",
    "inline-images"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
