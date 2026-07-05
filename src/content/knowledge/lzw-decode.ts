import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "lzw-decode",
  "h1": "LZWDecode Compression",
  "cluster": "images-compression",
  "aliases": [
    "LZW filter",
    "Lempel-Ziv-Welch compression",
    "LZWDecode filter",
    "LZW compression in PDF"
  ],
  "definition": "LZWDecode is a lossless PDF stream filter that reverses Lempel-Ziv-Welch compression, rebuilding the original bytes from variable-width dictionary codes stored in a content or image stream.",
  "description": "LZWDecode is a lossless PDF filter based on the Lempel-Ziv-Welch algorithm. Learn how its dictionary coding works and why FlateDecode largely replaced it.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "LZWDecode is one of the stream filters defined by the PDF format. When a stream's Filter entry names LZWDecode, its bytes have been compressed with the Lempel-Ziv-Welch (LZW) algorithm, and a conforming reader runs the LZWDecode filter to reconstruct the original data before using it. The process is fully lossless: the decoded output is byte-for-byte identical to what was compressed.",
    "LZW is a dictionary-based method from the LZ78 family of algorithms. Rather than storing a separate dictionary, it builds a table of recurring byte sequences on the fly as it reads the data, so the same table can be reconstructed during decoding. The same algorithm underlies compression in the GIF and TIFF image formats, which is part of why PDFs converted from those sources often carry LZWDecode streams.",
    "LZWDecode was present from the earliest versions of PDF, but it is no longer the default choice. FlateDecode, added later, generally compresses better and was unencumbered by the patent that once covered LZW. LZWDecode remains a valid, required-to-support filter, so it still appears in legacy files and in documents built from scanned TIFF sources."
  ],
  "sections": [
    {
      "heading": "How LZW Dictionary Coding Works",
      "body": [
        "LZW compression works by building a table of byte sequences while reading the data. The table starts populated with all 256 single-byte values plus two reserved control codes. Whenever the encoder encounters a sequence it has not seen before, it adds that sequence to the table and assigns it the next available code. The decoder mirrors this exactly: because both sides derive the table from the data stream itself, no dictionary has to be transmitted, and decoding is deterministic.",
        "The codes are variable in width. They begin at 9 bits and widen to 10, 11, and up to a maximum of 12 bits as the table grows, which caps the table at 4096 entries. Two reserved codes steer the stream: code 256 is a clear-table marker that resets the dictionary to its initial state (used when the table fills up), and code 257 is the end-of-data marker that signals the end of the compressed content."
      ]
    },
    {
      "heading": "Filter Parameters and Predictors",
      "body": [
        "Like FlateDecode, LZWDecode accepts optional decode parameters. The EarlyChange parameter controls exactly when the code width increments; its default value increases the width one code early, matching the behavior of TIFF LZW streams so that data from those sources decodes correctly.",
        "LZWDecode also supports the same predictor parameters as FlateDecode — Predictor, Colors, BitsPerComponent, and Columns. A predictor is a reversible transform applied to image sample data before compression: instead of storing raw pixel values, it stores the differences between a pixel and a predicted value, which tends to create longer runs of redundancy that LZW can exploit. TIFF-style horizontal prediction and the PNG predictor set are both available."
      ]
    },
    {
      "heading": "LZWDecode and FlateDecode",
      "body": [
        "LZWDecode and FlateDecode are both lossless, but FlateDecode — based on the DEFLATE/zlib method and introduced in a later PDF version — usually achieves stronger compression on typical document and image data. Just as important historically, DEFLATE was free of patent restrictions, whereas the LZW algorithm was covered by patents held by Unisys.",
        "Those LZW patents expired in the early 2000s, so the algorithm can now be used freely, but by then FlateDecode had already become the practical default in most PDF producers. LZWDecode is not deprecated: conforming readers are still required to support it, and it continues to appear in older documents and in files generated from LZW-compressed TIFF or GIF sources."
      ]
    },
    {
      "heading": "Where You Will Encounter LZWDecode",
      "body": [
        "LZWDecode can be applied to any PDF stream, but it is most commonly seen as the filter for image XObjects and, occasionally, content streams. Filters can be chained, so an LZW-compressed stream may also be wrapped in an ASCII filter such as ASCII85Decode when the data must remain 7-bit safe. In inline images embedded directly in a content stream, LZWDecode is written with the abbreviation LZW.",
        "In practice you are most likely to meet LZWDecode in legacy documents or in PDFs assembled from scanned TIFF images. Optimizers frequently re-encode such streams to FlateDecode to reduce file size, which is one of the transformations a compression tool performs when it rewrites a document."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Algorithm",
      "value": "Lempel-Ziv-Welch (LZW), a lossless dictionary-based method published by Terry Welch in 1984"
    },
    {
      "label": "Code width",
      "value": "Variable, from 9 bits up to a maximum of 12 bits (4096 table entries)"
    },
    {
      "label": "Reserved codes",
      "value": "Code 256 clears the table; code 257 marks end-of-data"
    },
    {
      "label": "Availability",
      "value": "One of the original PDF stream filters, present since PDF 1.0"
    }
  ],
  "specification": {
    "introduced": "PDF 1.0",
    "iso": "ISO 32000",
    "typicalUsage": "Lossless compression of image and other stream data in PDF, especially in legacy files and TIFF-derived documents",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "LZW compression reduces image quality the way JPEG does.",
      "truth": "LZWDecode is fully lossless and reconstructs the exact original bytes. Visible quality loss in PDFs comes from lossy filters such as DCTDecode, not from LZW."
    },
    {
      "claim": "LZWDecode is obsolete and modern readers no longer support it.",
      "truth": "It remains a defined PDF filter that conforming readers are required to support. FlateDecode is simply the more common default for new files."
    },
    {
      "claim": "You still need a Unisys license to use LZW compression.",
      "truth": "The core LZW patents expired in the early 2000s, so the algorithm can now be used freely without licensing."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between LZWDecode and FlateDecode?",
      "a": "Both are lossless PDF filters. LZWDecode uses the Lempel-Ziv-Welch dictionary algorithm, while FlateDecode uses DEFLATE/zlib. FlateDecode generally compresses better and was patent-free, so it became the usual default, though both remain valid."
    },
    {
      "q": "Does LZWDecode work on text and other data, or only images?",
      "a": "It can be applied to any PDF stream, including content streams and embedded data, not just image XObjects. It is most often seen on images because those benefit most from compression."
    },
    {
      "q": "What does the EarlyChange parameter control?",
      "a": "EarlyChange determines exactly when the LZW code width steps up to the next number of bits. Its default increases the width one code early, which keeps LZWDecode compatible with TIFF LZW data."
    },
    {
      "q": "Why do most PDF producers choose FlateDecode over LZWDecode?",
      "a": "FlateDecode typically yields smaller output on document and image data and, historically, avoided the patent that once covered LZW, so it became the standard choice for new files."
    },
    {
      "q": "Can an LZWDecode stream be converted to FlateDecode?",
      "a": "Yes. Because both filters are lossless, a PDF optimizer can decode the LZW stream and re-encode it with FlateDecode without altering the data, which often shrinks the file."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "image-xobjects",
      "inline-images",
      "ascii85-decode",
      "object-stream-compression",
      "indexed-color"
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
        "label": "Best PDF Compression Settings — A Decision Guide",
        "path": "/guides/best-pdf-compression-settings"
      }
    ]
  },
  "seeAlso": [
    "flate-decode",
    "pdf-filters",
    "pdf-compression",
    "predictor-functions",
    "lossy-vs-lossless-pdf-compression",
    "runlength-decode",
    "ccittfax-decode",
    "pdf-stream-objects"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
