import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "runlength-decode",
  "h1": "RunLengthDecode Compression",
  "cluster": "images-compression",
  "aliases": [
    "RunLengthDecode filter",
    "RLE in PDF",
    "run-length encoding filter",
    "RL filter"
  ],
  "definition": "RunLengthDecode is a PDF stream filter that reverses a simple, lossless byte-oriented run-length encoding, expanding runs of repeated bytes back into the original stream data.",
  "description": "How PDF's RunLengthDecode filter encodes and decodes runs of repeated bytes, why it is lossless, and where FlateDecode is usually chosen instead.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "RunLengthDecode is one of the standard filters PDF uses to encode the bytes inside a stream object. It implements run-length encoding (RLE): instead of storing a long sequence of identical bytes one after another, the data records how many times a byte repeats. Decoding simply plays those runs back out, reconstructing the exact original bytes.",
    "Like every PDF stream filter, RunLengthDecode is named in the stream dictionary and applied when a reader accesses the stream's data. It is fully lossless, takes no decode parameters, and has been part of the format since the earliest versions of PDF. Its logic is deliberately simple, which makes decoders small and easy to verify.",
    "In modern PDFs it is rarely the filter of choice. FlateDecode compresses a far wider range of content more tightly, so RunLengthDecode mostly survives as a lightweight, dependency-free option and for compatibility with data that already uses this scheme."
  ],
  "sections": [
    {
      "heading": "How RunLengthDecode Reads the Encoded Stream",
      "body": [
        "The encoded data is a series of packets, each beginning with a single length byte that decides how the bytes after it are treated. A length byte from 0 to 127 introduces a literal run: the next (length + 1) bytes — anywhere from 1 to 128 of them — are copied to the output unchanged. A length byte from 129 to 255 introduces a repeat run: the single byte that follows is written (257 - length) times, producing between 2 and 128 identical copies.",
        "The length byte value 128 is reserved as an end-of-data marker; a decoder stops as soon as it reads it. Because every run carries its own length prefix, the filter is self-describing — the decoder never needs external parameters to know where one run ends and the next begins."
      ]
    },
    {
      "heading": "A Lossless Filter That Only Helps on Repetition",
      "body": [
        "RunLengthDecode is lossless: decoding reproduces the source bytes exactly, with nothing approximated or discarded. How much it saves depends entirely on how repetitive the input is. Data with long stretches of identical bytes — the flat background regions of simple raster images or synthetic graphics, for example — collapses into short repeat runs and can shrink substantially.",
        "Data that rarely repeats gains little and can even grow slightly. Each literal run of up to 128 bytes carries a one-byte length prefix, and the stream ends with the marker byte, so worst-case output is a little larger than the input. That overhead is small, but it means run-length encoding is not a general-purpose compressor the way a dictionary or entropy coder is."
      ]
    },
    {
      "heading": "Where It Sits Among PDF's Stream Filters",
      "body": [
        "A PDF stream declares its filter or filters in the Filter entry of its stream dictionary, and RunLengthDecode is one of the standard values. It can also be one link in a chain: when Filter is an array, filters are applied in sequence, so RunLengthDecode might follow an ASCII encoding stage, for instance. Inside inline images in a content stream, the same filter may be written using the abbreviated name RL.",
        "RunLengthDecode takes no decode parameters, which keeps it simple but also limits it. For most stream data — including compressed object streams and typical image data — FlateDecode is chosen instead because it compresses more content more tightly, and photographic images generally use DCTDecode. RunLengthDecode remains defined and supported, but it is seldom the default."
      ]
    },
    {
      "heading": "Relationship to PackBits",
      "body": [
        "The method RunLengthDecode implements is the same byte-oriented run-length scheme popularized by Apple's PackBits and widely used in TIFF. It is often described with a signed length byte, where positive values mean a literal run, negative values mean a repeat run, and a specific value acts as a no-op or end marker — an interpretation equivalent to PDF's unsigned 0-127 / 129-255 / 128 ranges.",
        "That shared lineage explains why implementations are so compact: the packet structure is trivial to parse, and encoders and decoders are easy to write and validate. This simplicity made run-length encoding attractive early on, before more capable filters became universally available in PDF readers."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Filter name",
      "value": "RunLengthDecode (inline-image abbreviation: RL)"
    },
    {
      "label": "Compression type",
      "value": "Lossless, byte-oriented run-length encoding"
    },
    {
      "label": "Decode parameters",
      "value": "None (no DecodeParms entry)"
    },
    {
      "label": "Run size",
      "value": "Literal or repeat runs of up to 128 bytes each"
    }
  ],
  "specification": {
    "introduced": "PDF 1.0",
    "typicalUsage": "Encoding a PDF stream's data — historically simple image data and graphics — declared via the stream's Filter entry.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "RunLengthDecode compresses about as well as FlateDecode.",
      "truth": "It only shrinks data that contains long runs of identical bytes. On most content FlateDecode produces smaller output, which is why it is the common default filter."
    },
    {
      "claim": "Run-length encoding in PDF is lossy.",
      "truth": "RunLengthDecode is fully lossless. Decoding reconstructs the original bytes exactly, with nothing approximated or thrown away."
    },
    {
      "claim": "RunLengthDecode has been removed from modern PDF.",
      "truth": "It is still a defined, supported filter in current PDF, including ISO 32000-2 (PDF 2.0). It is simply chosen less often because other filters compress better."
    }
  ],
  "faq": [
    {
      "q": "What does the byte value 128 mean in RunLengthDecode data?",
      "a": "It is the end-of-data marker. A decoder stops reading the encoded stream as soon as it encounters a length byte of 128."
    },
    {
      "q": "Does RunLengthDecode need decode parameters?",
      "a": "No. It takes no DecodeParms entry because each run is self-describing from its own length byte, so the decoder needs no extra configuration."
    },
    {
      "q": "Can RunLengthDecode be combined with other filters?",
      "a": "Yes. When a stream's Filter entry is an array, RunLengthDecode can be one stage in a chain — for example applied after an ASCII encoding filter — and the filters run in sequence."
    },
    {
      "q": "What is the RL abbreviation?",
      "a": "RL is the short filter name that may be used for RunLengthDecode inside inline images within a content stream, where compact abbreviations are allowed."
    },
    {
      "q": "Can run-length encoding ever make data larger?",
      "a": "Yes. Data with few repeated bytes can grow slightly, because each literal run of up to 128 bytes carries a one-byte length prefix and the stream ends with a marker byte."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "inline-images",
      "image-xobjects",
      "ccittfax-decode",
      "asciihex-decode",
      "object-stream-compression"
    ],
    "relatedStandards": [
      "iso-32000",
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
      }
    ]
  },
  "seeAlso": [
    "pdf-filters",
    "pdf-compression",
    "flate-decode",
    "lzw-decode",
    "lossy-vs-lossless-pdf-compression",
    "ascii85-decode",
    "pdf-stream-objects"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
