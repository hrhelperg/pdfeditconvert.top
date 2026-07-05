import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "dct-decode-jpeg",
  "h1": "DCTDecode (JPEG in PDF)",
  "cluster": "images-compression",
  "aliases": [
    "DCTDecode filter",
    "DCT filter",
    "JPEG in PDF",
    "/DCTDecode",
    "DCT-encoded images"
  ],
  "definition": "DCTDecode is the PDF stream filter that stores images with JPEG's lossy DCT compression, letting photographs be embedded compactly inside a PDF file.",
  "description": "DCTDecode is the PDF filter that holds JPEG-compressed images. See how it works, why it is lossy, and when it beats lossless filters like FlateDecode.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "DCTDecode is the PDF stream filter responsible for JPEG-compressed images. When a PDF contains a photograph, the underlying image bytes are almost always a JPEG datastream, and the filter's role is to tell a reader that those bytes must be decoded with a JPEG decompressor before they can be drawn on the page.",
    "The \"DCT\" in the name stands for Discrete Cosine Transform, the mathematical step at the heart of the JPEG algorithm. Because DCTDecode reuses JPEG rather than inventing a new scheme, it inherits both JPEG's main strength (very compact continuous-tone images) and its main weakness (visible, permanent loss of detail when compression is pushed hard).",
    "It is one of PDF's original stream filters and sits alongside choices such as FlateDecode, CCITTFaxDecode, and the later JPXDecode. A well-built PDF chooses a filter per image, matching the compression method to the kind of picture being stored rather than applying one method to everything."
  ],
  "sections": [
    {
      "heading": "How DCTDecode Works",
      "body": [
        "A DCTDecode stream does not hold raw pixels. It holds a JPEG datastream: the image is divided into small blocks (JPEG uses 8x8 pixel blocks), each block is run through the Discrete Cosine Transform to separate coarse tones from fine detail, the transformed values are quantized (rounded, which is where information is discarded), and the results are packed with entropy coding. The PDF filter machinery simply hands these bytes to a JPEG decoder and receives pixels back.",
        "Because the stored bytes are essentially a JPEG file, DCTDecode is unusual among PDF filters: the compressed data is self-describing enough that a viewer can often lift it straight out of the PDF and save it as a .jpg without re-encoding. The image XObject dictionary around the stream still supplies PDF-level context such as Width, Height, ColorSpace, and BitsPerComponent, which the reader uses together with the decoded samples to place the picture correctly."
      ]
    },
    {
      "heading": "Why DCTDecode Suits Photographic Images",
      "body": [
        "JPEG, and therefore DCTDecode, is designed for continuous-tone content: photographs, scanned artwork, and other images where color and brightness change gradually across the frame. On that kind of material the DCT concentrates most of the visual energy into a few values per block, so aggressive quantization removes detail the eye barely notices while shrinking the data dramatically.",
        "The same design makes DCTDecode a poor fit for sharp-edged content such as screenshots, line art, logos, or text rendered as an image. Hard edges spread energy across many DCT coefficients, so quantization produces the familiar blocking and ringing (\"mosquito\") artifacts around the edges. For that kind of image a lossless filter like FlateDecode, or a bilevel filter like CCITTFaxDecode or JBIG2, usually gives cleaner results and often a smaller file."
      ]
    },
    {
      "heading": "Color, Components, and the ColorTransform Parameter",
      "body": [
        "DCTDecode images carry one, three, or four color components, matching a grayscale (DeviceGray), RGB (DeviceRGB), or CMYK (DeviceCMYK) color space, and the samples are typically eight bits per component. The ColorSpace named in the image dictionary must agree with the number of components the JPEG data actually contains, or the picture decodes with wrong or swapped colors.",
        "The filter accepts an optional ColorTransform parameter that controls whether an internal transform between RGB (or CMYK) and a luminance/chrominance representation is applied during decoding. A well-known source of trouble is CMYK JPEGs produced by Adobe software, which may store the data inverted and signal that inversion with an embedded marker; a decoder that ignores the marker renders such images with reversed colors. These are properties of the JPEG data itself rather than of PDF, which is why the same quirks appear when the image is extracted."
      ]
    },
    {
      "heading": "DCTDecode Compared With Other Image Filters",
      "body": [
        "DCTDecode is lossy by nature, so it is the opposite of lossless filters like FlateDecode and LZWDecode, which reproduce every original sample exactly but cannot match JPEG's compactness on photographs. Because loss accumulates, re-decoding and re-encoding a DCTDecode image repeatedly causes generation loss, degrading quality with each round trip even if nothing else about the image changes.",
        "It should not be confused with JPXDecode, the later filter that carries JPEG 2000 (a wavelet-based method) rather than classic DCT-based JPEG; the two are distinct filters with distinct data formats. For bilevel scans of text or drawings, CCITTFaxDecode and JBIG2Decode are the specialized alternatives. Choosing among these is essentially the lossy-versus-lossless decision applied per image."
      ]
    },
    {
      "heading": "Transparency, Extraction, and Practical Notes",
      "body": [
        "JPEG has no alpha channel, so a DCTDecode image cannot carry transparency on its own. When a JPEG-compressed image needs soft edges or partial transparency in a PDF, the transparency is supplied separately through a soft mask (SMask): a second image stream, referenced from the main image, that stores the opacity values. The mask can use a different filter from the color image it accompanies.",
        "Because the stored bytes are a JPEG datastream, exporting a DCTDecode image generally returns the original compressed data untouched rather than a freshly re-compressed copy, which is why extraction does not add loss. Reducing the size of a JPEG image already inside a PDF, however, does mean re-encoding at a higher compression setting or a lower resolution, which is a lossy step. Tools that shrink PDFs typically combine downsampling with DCTDecode re-encoding for exactly this reason."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Filter name",
      "value": "DCTDecode (DCT = Discrete Cosine Transform)"
    },
    {
      "label": "Compression type",
      "value": "Lossy"
    },
    {
      "label": "Underlying method",
      "value": "JPEG (DCT-based, per ISO/IEC 10918)"
    },
    {
      "label": "Best-fit content",
      "value": "Continuous-tone photographs (1, 3, or 4 color components)"
    }
  ],
  "specification": {
    "introduced": "Among PDF's original stream filters",
    "iso": "Defined within ISO 32000 (PDF); wraps JPEG defined by ISO/IEC 10918",
    "typicalUsage": "Embedding JPEG-compressed continuous-tone images in PDF image XObjects and inline images",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "DCTDecode compresses the whole PDF.",
      "truth": "It applies to individual image streams. Text, vector graphics, and general document data are compressed by other filters such as FlateDecode; DCTDecode only carries JPEG image data."
    },
    {
      "claim": "DCTDecode and JPXDecode are just two names for the same thing.",
      "truth": "DCTDecode carries classic DCT-based JPEG, while JPXDecode carries JPEG 2000, a separate wavelet-based format. They are different filters with different data."
    },
    {
      "claim": "Extracting a DCTDecode image re-compresses it and loses quality.",
      "truth": "The stream already holds a JPEG datastream, so a viewer can usually copy it out as a .jpg without re-encoding. Loss only occurs if the image is deliberately re-compressed."
    }
  ],
  "faq": [
    {
      "q": "How can I tell whether a PDF image uses DCTDecode?",
      "a": "The image XObject's dictionary lists the filter in its Filter entry. If it names DCTDecode, the image bytes are a JPEG datastream and will decode through a JPEG decoder."
    },
    {
      "q": "Does DCTDecode support transparency?",
      "a": "Not by itself, because JPEG has no alpha channel. Transparency for a JPEG-compressed image is stored separately in a soft mask (SMask), which is its own image stream referenced by the main image."
    },
    {
      "q": "Can DCTDecode store CMYK images?",
      "a": "Yes. Four-component DeviceCMYK JPEGs are supported. Some CMYK JPEGs from Adobe software store inverted data flagged by an embedded marker, which a decoder must honor to render correct colors."
    },
    {
      "q": "Is DCTDecode a good choice for screenshots or text images?",
      "a": "Usually not. Sharp edges create blocking and ringing artifacts under JPEG. Lossless FlateDecode, or CCITTFaxDecode/JBIG2 for bilevel scans, tends to look cleaner and can be smaller for that content."
    },
    {
      "q": "Why did my PDF get blurry after compression?",
      "a": "Shrinking a JPEG image inside a PDF re-encodes it at higher compression and often lower resolution through DCTDecode, which is a lossy step. More aggressive settings trade visible sharpness for a smaller file."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "image-resolution-in-pdf",
      "image-downsampling",
      "image-color-depth",
      "devicergb",
      "devicecmyk",
      "ccittfax-decode",
      "jbig2-decode",
      "inline-images"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      },
      {
        "label": "PDF to Images — Export PDF Pages as PNG or JPG",
        "path": "/pdf-to-images"
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
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      },
      {
        "label": "Compress a PDF Without Losing Too Much Quality",
        "path": "/guides/compress-pdf-without-losing-too-much-quality"
      }
    ]
  },
  "seeAlso": [
    "pdf-compression",
    "pdf-filters",
    "flate-decode",
    "jpx-decode-jpeg2000",
    "lossy-vs-lossless-pdf-compression",
    "image-xobjects",
    "bits-per-component",
    "image-soft-masks"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
