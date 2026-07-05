import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-compression",
  "h1": "How PDF Compression Works",
  "cluster": "images-compression",
  "aliases": [
    "PDF file compression",
    "PDF stream compression",
    "PDF size reduction",
    "compressed PDF"
  ],
  "definition": "PDF compression is the set of stream filters and structural techniques a PDF uses to store text, graphics, images, and objects with fewer bytes while preserving how the page displays.",
  "description": "Learn how PDF compression works, from stream filters like FlateDecode and DCTDecode to image downsampling and object streams that shrink file size.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF stores a page as a mix of text, vector drawing instructions, embedded fonts, and images, and each of those can take up very different amounts of space. PDF compression is the collection of techniques the format uses to store that content in fewer bytes, so a file transfers and stores more efficiently while still rendering the same page.",
    "Unlike a ZIP archive, a PDF is not wrapped in one outer compressed container. Instead, compression is applied inside the file to individual data streams — the blocks of bytes that hold content, fonts, and images — using named filters recorded in each stream's dictionary. A viewer reads the filter, decodes the stream as it renders, and draws the result, which is why a compressed PDF opens directly without a separate unzip step.",
    "Because different kinds of data compress in different ways, a single PDF often uses several filters at once: a lossless method for text and line art, and image-specific methods for photographs or scans. Understanding which filter is doing what explains why some PDFs shrink dramatically while others barely move."
  ],
  "sections": [
    {
      "heading": "Compression Happens Stream by Stream",
      "body": [
        "The unit of compression in a PDF is the stream object: a dictionary followed by a block of raw bytes. Content streams (the drawing instructions for a page), embedded font programs, image data, and even the file's own structural tables are all stored as streams. Each stream's dictionary carries a Filter entry naming the decoder needed to read it, plus optional parameters in DecodeParms. When a viewer encounters the stream it applies the named filter in reverse to recover the original bytes before using them.",
        "Filters can also be chained. The Filter value may be an array, in which case the filters are applied in sequence — for example, a binary stream might be compressed and then encoded as ASCII for safe transmission. This per-stream design means one PDF can mix many compression strategies, and it is why removing or re-encoding a single large stream, such as an oversized image, can change file size far more than a blanket compress pass."
      ]
    },
    {
      "heading": "Lossless Filters for Text, Vectors, and Structure",
      "body": [
        "Text and vector graphics must reproduce exactly, so they are stored with lossless filters that reconstruct the original bytes perfectly. The most common is FlateDecode, based on the deflate algorithm (the same family used by zlib and PNG), which was added in PDF 1.2 and is now the usual choice for content streams and font data. Older files may use LZWDecode, the original PDF stream compressor, and simple runs of repeated bytes can use RunLengthDecode.",
        "Compression of this kind is often helped by predictor functions — a preprocessing step using PNG- or TIFF-style predictors that transforms the data so repeated patterns line up better before Flate or LZW runs, improving the ratio without any loss. Structural data compresses too: since PDF 1.5, many small indirect objects can be packed together into object streams, and the cross-reference table can be stored as a compressed cross-reference stream, both of which reduce the overhead of a file that contains many objects."
      ]
    },
    {
      "heading": "Image Filters and the Lossy Question",
      "body": [
        "Images are usually the largest part of a PDF, and they have their own filters. DCTDecode stores JPEG-compressed data and is lossy: it discards detail the eye is less likely to notice in exchange for much smaller files, which suits photographs. JPXDecode carries JPEG 2000 data and can operate losslessly or lossily. For black-and-white content such as scanned text, CCITTFaxDecode (the Group 3 and Group 4 fax encodings) and JBIG2Decode are far more efficient than general-purpose filters, and JBIG2 can run in either a lossless or a lossy mode.",
        "Choosing between lossless and lossy is the central trade-off in image compression. Lossless filters keep every pixel but shrink less; lossy filters shrink more but permanently alter the image. Because the right answer depends on the picture — a line drawing, a colour photo, or a page of scanned text each behave differently — a well-optimised PDF typically applies different image filters to different images rather than one setting to all."
      ]
    },
    {
      "heading": "Beyond Filters: Downsampling and Optimization",
      "body": [
        "Swapping filters is only part of reducing size. If an image contains far more pixels than the page can display or print, downsampling — reducing its resolution to a sensible target — removes data before any filter even runs, and this is often where the biggest savings come from. Fonts contribute too: subsetting keeps only the glyphs actually used and discards the rest of the typeface.",
        "The broader process of trimming a PDF is usually called optimization, and stream compression is one tool within it. Optimization also removes unused or duplicate objects, discards redundant metadata, consolidates shared resources, and packs the file's structure into object streams. This is why two files with visually identical pages can differ greatly in size: one may carry full-resolution images, fully embedded fonts, and uncompressed structure, while the other has been downsampled, subsetted, and packed."
      ]
    },
    {
      "heading": "Why Some PDFs Barely Shrink",
      "body": [
        "A PDF that is already well compressed has little left to give. If its text streams are Flate-encoded, its photos are already JPEG, and its images sit at a reasonable resolution, running another compression pass reclaims very little — the data is close to its practical minimum. Forcing it smaller then generally means accepting lossy image settings and visible quality loss.",
        "Conversely, a file that looks modest on screen can still be huge because of one heavy component: a single ultra-high-resolution scan, an unsubsetted CJK font, or embedded attachments. Diagnosing size is therefore less about a universal compress button and more about finding which streams dominate the file and treating those directly."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Unit of compression",
      "value": "PDF compresses individual stream objects, not the whole file as one archive; each stream names its decoder in a Filter entry."
    },
    {
      "label": "Common text filter",
      "value": "FlateDecode, a lossless deflate-based filter added in PDF 1.2, is the usual choice for content streams and embedded fonts."
    },
    {
      "label": "Structure compression",
      "value": "Since PDF 1.5, object streams and cross-reference streams let many small objects and the xref table be compressed together."
    },
    {
      "label": "Encoders vs compressors",
      "value": "ASCIIHexDecode and ASCII85Decode make binary data 7-bit safe but increase size; they are encodings, not compression."
    }
  ],
  "specification": {
    "introduced": "Stream filters have existed since PDF 1.0; FlateDecode was added in PDF 1.2",
    "iso": "ISO 32000 (stream filters are defined in the PDF specification)",
    "typicalUsage": "Storing stream data — content, fonts, images, and file structure — with fewer bytes",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "Compressing a PDF always lowers quality.",
      "truth": "Many PDF filters are lossless — FlateDecode, LZWDecode, RunLengthDecode, and CCITTFaxDecode — and reconstruct the bytes exactly. Only lossy image filters such as DCTDecode (JPEG) or lossy JPEG 2000, and aggressive downsampling, discard detail."
    },
    {
      "claim": "A PDF is compressed as a single archive, like a ZIP file.",
      "truth": "A PDF applies compression inside the file to individual streams (and optionally groups of objects), with no single outer compressed wrapper. That is why it opens without a separate decompression step."
    },
    {
      "claim": "Re-running a compressor keeps shrinking a PDF further.",
      "truth": "Once streams are Flate-compressed and images are at a reasonable resolution, extra passes reclaim little. Most real savings come from downsampling images and subsetting fonts, not from re-running a general compressor."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between PDF compression and PDF optimization?",
      "a": "Compression shrinks the bytes of individual streams using filters. Optimization is the broader cleanup — downsampling images, subsetting fonts, removing unused objects, and packing structure into object streams — of which stream compression is one part."
    },
    {
      "q": "Which filter compresses the text in a PDF?",
      "a": "Text and vector drawing instructions live in content streams that are usually compressed with FlateDecode, a lossless deflate-based filter, so the characters are stored compactly without any loss of fidelity."
    },
    {
      "q": "Why did my scanned PDF stay large after compression?",
      "a": "Scanned pages are images, so the biggest savings come from downsampling their resolution and choosing an appropriate image filter — JBIG2 or CCITTFax for black-and-white, DCTDecode for photos — rather than from generic stream compression."
    },
    {
      "q": "Can compression change how a PDF looks?",
      "a": "Lossless filters do not change appearance at all. Only lossy image filters and aggressive downsampling can soften images, so the look changes only where lossy settings are actually applied."
    },
    {
      "q": "Do all PDF viewers support every compression filter?",
      "a": "The standard filters are defined in the PDF specification and are widely supported. Some newer image filters, such as JBIG2 or JPEG 2000, can be handled unevenly by older or lightweight viewers."
    }
  ],
  "graph": {
    "childConcepts": [
      "pdf-filters",
      "flate-decode",
      "lzw-decode",
      "ascii85-decode",
      "asciihex-decode",
      "runlength-decode",
      "dct-decode-jpeg",
      "jpx-decode-jpeg2000",
      "ccittfax-decode",
      "jbig2-decode",
      "image-downsampling",
      "image-resolution-in-pdf",
      "bits-per-component",
      "image-color-depth",
      "lossy-vs-lossless-pdf-compression",
      "pdf-optimization",
      "pdf-file-size-factors",
      "object-stream-compression",
      "image-interpolation",
      "image-masks",
      "stencil-masks",
      "color-key-masking",
      "inline-images",
      "image-soft-masks",
      "predictor-functions"
    ],
    "relatedConcepts": [
      "pdf-stream-objects",
      "font-subsetting"
    ],
    "relatedStandards": [
      "iso-32000"
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
      },
      {
        "label": "Why Is My PDF So Large? Causes and Fixes",
        "path": "/guides/why-is-my-pdf-so-large"
      },
      {
        "label": "Best PDF Compression Settings — A Decision Guide",
        "path": "/guides/best-pdf-compression-settings"
      }
    ]
  },
  "seeAlso": [
    "pdf-filters",
    "flate-decode",
    "lossy-vs-lossless-pdf-compression",
    "pdf-optimization",
    "pdf-file-size-factors",
    "object-stream-compression",
    "dct-decode-jpeg",
    "image-downsampling"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
