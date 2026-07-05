import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "jbig2-decode",
  "h1": "JBIG2 Compression in PDF",
  "cluster": "images-compression",
  "aliases": [
    "JBIG2Decode",
    "JBIG2 filter",
    "JBIG2 image compression",
    "ISO/IEC 14492",
    "ITU-T T.88"
  ],
  "definition": "JBIG2 in PDF is a bilevel one-bit image compression method, invoked by the JBIG2Decode filter, that shrinks scanned pages by storing each repeated shape once and reusing it.",
  "description": "JBIG2Decode is the PDF filter for one-bit scanned pages: it reuses recurring symbols like letters and supports lossless or lossy bilevel compression.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "JBIG2 is a compression standard for bilevel images — pictures made of just black and white pixels, one bit each. In PDF it is applied through the JBIG2Decode filter, and it is aimed squarely at scanned documents, where a page is a large one-bit raster of mostly text and line art. Because such pages contain the same letterforms and marks over and over, JBIG2 can describe them far more compactly than treating every pixel as independent.",
    "The core idea is pattern reuse. Instead of re-encoding every occurrence of the letter 'e' pixel by pixel, JBIG2 collects distinct shapes into a symbol dictionary and then records where each shape appears on the page. Combined with an efficient arithmetic coder, this makes JBIG2 a very space-efficient way to store scanned black-and-white pages inside a PDF, and a common successor to the older CCITT Group 4 fax coding.",
    "JBIG2 supports both lossless and lossy operation, and that distinction matters more than usual: its lossy mode can substitute one symbol for a visually similar one, which — in extreme cases — has been shown to change the actual characters on a scanned page. Understanding how the filter works helps explain both why scanned PDFs can be so small and why some of them must be produced carefully."
  ],
  "sections": [
    {
      "heading": "How JBIG2 Represents a Scanned Page",
      "body": [
        "JBIG2 breaks a bilevel image into regions of different types. The most important for documents is the pairing of a symbol dictionary with one or more text regions. The encoder finds connected marks on the page — typically individual glyphs — stores each distinct shape once in the dictionary, and then encodes a text region as a compact list of instructions meaning 'place symbol N at this position.' Repeated letters, digits, and punctuation therefore cost almost nothing after their first appearance.",
        "Other region types handle content that is not text-like. A generic region codes arbitrary bilevel data — using either a context-based arithmetic coder or the MMR scheme also used by CCITT Group 4 — for line art, borders, and anything that does not decompose into repeated symbols. Halftone regions and pattern dictionaries reconstruct dithered grayscale that has been reduced to black-and-white dots. A refinement region can store the small pixel differences between a dictionary symbol and a specific occurrence, which is the key to exact, lossless output."
      ]
    },
    {
      "heading": "The JBIG2Decode Filter in PDF",
      "body": [
        "PDF adopted JBIG2 in version 1.4 as the JBIG2Decode stream filter. A JBIG2-compressed image is a normal image XObject whose data must be bilevel: DeviceGray color at one bit per component, or an image mask. The filter decodes that stream back into the one-bit raster the viewer paints on the page. Only the embedded stream organization of JBIG2 is used inside PDF; the standalone JBIG2 file format is not part of it.",
        "Because a scanned document repeats many of the same symbols across pages, PDF lets a symbol dictionary be shared. The JBIG2Globals entry in the filter's DecodeParms points to a separate stream holding global segments, so common glyphs can be stored once and referenced by every page image that needs them. Each page is still its own image stream, but they can all draw from the shared globals to avoid duplicating the dictionary in every stream."
      ]
    },
    {
      "heading": "Lossless and Lossy Modes",
      "body": [
        "In lossless mode, JBIG2 reproduces every pixel exactly. It does this by combining symbol matching with refinement: when an occurrence of a symbol does not match the stored shape perfectly, the encoder records the exact differences so the original pixels are restored. Lossless JBIG2 is appropriate whenever the scanned content must be preserved faithfully.",
        "In lossy mode, the encoder allows near-matches: two shapes that look almost identical are collapsed to a single dictionary symbol, and the small differences are discarded. This yields smaller files, but it introduces a genuine risk — if the matching is too aggressive, a shape can be replaced by a different but similar-looking one, so a scanned '6' could be reconstructed from the symbol for '8.' This behavior has been documented in real scanning devices and is the main reason lossy JBIG2 must be used with care on documents where every character matters, such as figures in tables. Picking between the two modes is a lossless-versus-lossy tradeoff like any other image compression decision."
      ]
    },
    {
      "heading": "JBIG2 Compared With Other Bilevel Coding",
      "body": [
        "Before JBIG2, the usual ways to compress one-bit scans in PDF were CCITT Group 3/4 fax coding (the CCITTFaxDecode filter) and, less specifically, general-purpose filters such as Flate or LZW. CCITT Group 4 codes runs of black and white along each scan line and has no concept of repeated symbols, so it cannot exploit the fact that a page is full of identical letters. JBIG2 was designed as the successor to the earlier JBIG (ITU-T T.82) standard and generally compresses text-heavy bilevel pages more tightly than Group 4, especially when a symbol dictionary can be reused.",
        "JBIG2 only applies to bilevel content, so it is not a replacement for the photographic image filters. Continuous-tone color or grayscale scans use DCTDecode (JPEG) or JPXDecode (JPEG 2000) instead, and a color document scan is sometimes split so that a bilevel text layer uses JBIG2 while a lower-resolution background uses a photographic codec. This layered approach is common in scanned-document PDF pipelines that also add an OCR text layer for searchability."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "PDF filter name",
      "value": "JBIG2Decode"
    },
    {
      "label": "Introduced in",
      "value": "PDF 1.4"
    },
    {
      "label": "Image type",
      "value": "Bilevel, 1 bit per component"
    },
    {
      "label": "Underlying standard",
      "value": "ISO/IEC 14492 / ITU-T T.88"
    }
  ],
  "specification": {
    "iso": "ISO/IEC 14492",
    "introduced": "PDF 1.4",
    "typicalUsage": "Compressing bilevel scanned document pages inside image-only or searchable PDFs.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "JBIG2 always reproduces a scanned page exactly.",
      "truth": "JBIG2 has a lossy mode that merges similar-looking shapes into one symbol, which can substitute one character for a visually similar one; only lossless mode (with refinement) guarantees the original pixels."
    },
    {
      "claim": "JBIG2 can compress color or grayscale photographs.",
      "truth": "JBIG2 is strictly bilevel — one bit per pixel. Continuous-tone color and grayscale content uses DCTDecode (JPEG) or JPXDecode (JPEG 2000) instead."
    },
    {
      "claim": "JBIG2 recognizes the text on a page and stores it as characters.",
      "truth": "JBIG2 matches image shapes (symbols), not characters, and produces no searchable text; a searchable layer requires a separate OCR step."
    }
  ],
  "faq": [
    {
      "q": "What does the JBIG2Decode filter do?",
      "a": "It decompresses bilevel (one-bit) image data stored with JBIG2 back into the black-and-white raster a PDF viewer displays. It is used for scanned document pages, and the image must be DeviceGray at one bit per component or an image mask."
    },
    {
      "q": "Is JBIG2 better than CCITTFaxDecode?",
      "a": "JBIG2 was designed to compress bilevel pages more tightly than CCITT Group 4, mainly because it can store each repeated symbol once and reference it, which Group 4 cannot do. Group 4 is simpler and very widely supported, so both remain in use."
    },
    {
      "q": "Why do numbers sometimes change in a scanned PDF?",
      "a": "That is a known hazard of lossy JBIG2. In lossy mode the encoder can merge two similar-looking shapes into one symbol, so a digit may be reconstructed from the wrong glyph. Using lossless JBIG2, or a conservative matching setting, avoids this on documents where exact characters matter."
    },
    {
      "q": "Can JBIG2 compress a color or grayscale scan?",
      "a": "No. JBIG2 is only for bilevel, one-bit-per-pixel images. Color and continuous-tone grayscale content uses DCTDecode (JPEG) or JPXDecode (JPEG 2000); a color scan is sometimes split into a bilevel JBIG2 text layer plus a separate photographic background."
    },
    {
      "q": "What is JBIG2Globals?",
      "a": "It is an entry in the filter's DecodeParms that points to a stream of shared JBIG2 segments — typically a symbol dictionary common to many pages. Storing those symbols once and referencing them from each page image avoids repeating the dictionary in every stream."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "pdf-filters",
      "image-xobjects",
      "image-masks",
      "bits-per-component",
      "text-layer-in-pdf",
      "searchable-pdf",
      "image-color-depth"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      },
      {
        "label": "Scan to PDF — Turn Paper Documents Into Clean PDFs",
        "path": "/scan-to-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Compress a Scanned PDF (Big Savings)",
        "path": "/guides/how-to-compress-scanned-pdf"
      },
      {
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      }
    ]
  },
  "seeAlso": [
    "ccittfax-decode",
    "pdf-compression",
    "lossy-vs-lossless-pdf-compression",
    "dct-decode-jpeg",
    "jpx-decode-jpeg2000",
    "image-only-pdf",
    "pdf-ocr"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
