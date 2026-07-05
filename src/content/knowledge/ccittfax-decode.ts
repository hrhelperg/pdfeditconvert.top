import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "ccittfax-decode",
  "h1": "CCITTFaxDecode Compression",
  "cluster": "images-compression",
  "aliases": [
    "CCITT Group 3 and Group 4 compression",
    "CCITTFax filter",
    "CCF (inline image filter)",
    "Fax compression in PDF",
    "Group 4 compression"
  ],
  "definition": "CCITTFaxDecode is a PDF stream filter that losslessly compresses and decompresses bilevel (1-bit black-and-white) images using the ITU-T Group 3 and Group 4 fax coding algorithms.",
  "description": "CCITTFaxDecode is the PDF filter that losslessly compresses 1-bit scanned and fax images using the ITU-T Group 3 and Group 4 coding algorithms.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "CCITTFaxDecode is one of the original PDF stream filters, designed for the kind of imagery produced by fax machines and document scanners: pages that are purely black and white, with no shades of gray. It applies the compression schemes standardized by the ITU-T (formerly the CCITT) for Group 3 and Group 4 facsimile transmission, which condense long runs of same-colored pixels into compact codes. Because a scanned text page is mostly white space broken by thin black strokes, this approach can shrink such an image substantially while preserving every pixel exactly.",
    "The filter only works on bilevel images — exactly one bit per pixel, where each pixel is either fully black or fully white. That constraint is what makes the coding so efficient, but it also means CCITTFaxDecode is unsuitable for photographs or anything with continuous tone; those rely on DCTDecode or JPXDecode instead. A PDF reader recognizes the filter from the Filter entry of an image XObject (or the abbreviation CCF inside an inline image) and uses the accompanying decode parameters to reconstruct the pixel grid.",
    "Understanding CCITTFaxDecode matters most when you are dealing with scanned documents, image-only PDFs, or stencil-style image masks, where it is often the reason a black-and-white scan stays small. Its behavior is governed by a handful of parameters — chiefly the K value that selects the coding scheme — and small mismatches in those parameters are a classic cause of images that decode inverted or sheared."
  ],
  "sections": [
    {
      "heading": "Run-length coding of black and white runs",
      "body": [
        "CCITT fax coding treats each scan line as a sequence of alternating runs — a run of white pixels, then a run of black, and so on. Instead of storing every pixel, the encoder records the length of each run using variable-length codes: short, frequently occurring run lengths get the shortest codes, following tables defined in the ITU-T fax standards. This is why a mostly white page compresses so well, and why a line that is entirely white can be expressed as a single long run.",
        "Two-dimensional variants go further by encoding each line relative to the line above it. Because consecutive scan lines of printed text are highly similar, describing where the black-and-white transitions move compared with the previous line is usually cheaper than describing the line from scratch. This vertical referencing is what gives Group 4 coding its strong compression on typical document pages."
      ]
    },
    {
      "heading": "The K parameter: Group 3 versus Group 4",
      "body": [
        "The single most important decode parameter is K, which selects among the three CCITT coding modes. When K is 0, the data uses pure one-dimensional (Group 3, \"Modified Huffman\") coding, where every line is coded independently. When K is greater than 0, the data uses mixed one- and two-dimensional Group 3 coding, in which a one-dimensional line is periodically followed by two-dimensional lines. When K is negative, the data uses pure two-dimensional Group 4 coding, which references only the previous line and carries no per-line synchronization.",
        "Group 4 (K less than 0) is the mode most commonly seen in scanned PDFs because it typically produces the smallest output for clean document images. The Group 3 modes exist largely because they mirror how data was transmitted over analog phone lines, where per-line end-of-line codes helped a receiver recover from transmission errors — a concern that rarely applies inside a self-contained PDF file."
      ]
    },
    {
      "heading": "Decode parameters that shape the output",
      "body": [
        "Besides K, several entries in the filter's parameter dictionary tell the decoder how to interpret the stream. Columns gives the pixel width of each scan line and defaults to 1728, the historical width of a standard fax line; if the real image is a different width, Columns must be set correctly or the decoded image will shear. Rows optionally states the number of scan lines, EncodedByteAlign indicates whether each line is padded to start on a byte boundary, and EndOfLine indicates whether explicit end-of-line codes are present.",
        "BlackIs1 controls pixel polarity and is a frequent source of confusion. By default it is false, meaning a 0 bit represents a black pixel and a 1 bit represents white — the opposite of the intuition many people bring from other imaging conventions. If the flag does not match how the data was encoded, the decoded image appears as a photographic negative. Parameters such as DamagedRowsBeforeError and EndOfBlock govern how tolerant the decoder is of malformed or truncated data."
      ]
    },
    {
      "heading": "Where CCITTFaxDecode fits among PDF image filters",
      "body": [
        "Within PDF, CCITTFaxDecode occupies the niche of lossless bilevel compression. It sits alongside DCTDecode and JPXDecode, which handle continuous-tone color and grayscale, and alongside general-purpose filters like FlateDecode that can compress any stream but rarely beat fax coding on black-and-white scans. It is also commonly used to encode stencil (image) masks, where a 1-bit map decides which pixels of a page are painted.",
        "The closest relative is JBIG2Decode, a later filter also aimed at bilevel images. Choosing between them trades compression for compatibility: CCITTFaxDecode is always lossless and near-universally supported, while JBIG2 can compress bilevel content further — partly by matching repeated symbols such as letters — and additionally offers a lossy mode, at the cost of greater complexity and less uniform support."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Compression",
      "value": "Lossless"
    },
    {
      "label": "Image type",
      "value": "Bilevel, 1 bit per pixel"
    },
    {
      "label": "Based on",
      "value": "ITU-T (CCITT) Group 3 and Group 4 fax coding"
    },
    {
      "label": "Default line width (Columns)",
      "value": "1728 pixels"
    }
  ],
  "specification": {
    "introduced": "PDF 1.0",
    "typicalUsage": "Lossless compression of bilevel scanned pages, fax images, and stencil image masks in PDF."
  },
  "misconceptions": [
    {
      "claim": "CCITTFaxDecode can compress grayscale or color images.",
      "truth": "It only handles bilevel 1-bit-per-pixel images; grayscale and color images use filters such as DCTDecode or JPXDecode."
    },
    {
      "claim": "Like JPEG, CCITTFaxDecode throws away detail to save space.",
      "truth": "CCITT fax coding is lossless — the decoded pixels match the original bilevel image exactly."
    },
    {
      "claim": "A 0 bit in the data always represents a white pixel.",
      "truth": "By default (BlackIs1 false) a 0 bit represents black; the BlackIs1 parameter can invert this, and a mismatch produces a negative-looking image."
    }
  ],
  "faq": [
    {
      "q": "What kinds of images typically use CCITTFaxDecode?",
      "a": "Bilevel content such as scanned text pages, faxes, and line art — anything that is purely black and white with no intermediate tones."
    },
    {
      "q": "Is CCITTFaxDecode still relevant now that JBIG2 exists?",
      "a": "Yes. JBIG2 usually compresses bilevel images more, but CCITTFaxDecode is simpler, very widely supported, and remains common in scanned and faxed PDFs."
    },
    {
      "q": "What does the K value in the decode parameters mean?",
      "a": "It selects the coding scheme: K=0 is one-dimensional Group 3, K greater than 0 is mixed one- and two-dimensional Group 3, and K less than 0 is two-dimensional Group 4."
    },
    {
      "q": "Why would a CCITTFax-encoded image appear inverted?",
      "a": "Usually because the BlackIs1 parameter does not match how the data was encoded, so black and white pixels are swapped."
    },
    {
      "q": "Can CCITTFaxDecode be combined with other filters?",
      "a": "Yes. PDF lets a stream pass through a chain of filters, so CCITT-coded image data can, for example, also be wrapped in an ASCII encoding for transport."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "image-masks",
      "image-only-pdf",
      "pdf-ocr",
      "devicegray",
      "inline-images"
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
        "label": "How to Scan Documents to PDF with Your Phone",
        "path": "/guides/how-to-scan-documents-to-pdf"
      }
    ]
  },
  "seeAlso": [
    "jbig2-decode",
    "pdf-filters",
    "pdf-compression",
    "dct-decode-jpeg",
    "lossy-vs-lossless-pdf-compression",
    "stencil-masks",
    "bits-per-component",
    "runlength-decode"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
