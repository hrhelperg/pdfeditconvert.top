import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "inline-images",
  "h1": "Inline Images in PDF",
  "cluster": "images-compression",
  "aliases": [
    "inline image",
    "in-line image",
    "BI/ID/EI image",
    "embedded content-stream image"
  ],
  "definition": "An inline image is a small raster image whose data is embedded directly inside a PDF content stream between the BI, ID and EI operators, rather than stored as a separate Image XObject.",
  "description": "How PDF inline images embed small raster data directly in a content stream with the BI, ID and EI operators and abbreviated keys.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "An inline image is a raster image whose pixel data is written directly into a PDF content stream, at the same place where the image is drawn on the page. It is the counterpart to the Image XObject, which stores image data as a separate, named stream object that the content stream references. Both ultimately paint the same kind of sampled image, but they differ in where the data lives and how it can be reused.",
    "An inline image is bracketed by three content-stream operators: BI begins the image and is followed by a set of key/value pairs describing it, ID marks the start of the raw image data, and EI ends the image. To keep content streams compact, inline images use abbreviated names for their dictionary keys and for several filter and colour-space values, so a regular image's Width becomes W, BitsPerComponent becomes BPC, and so on.",
    "Inline images exist to avoid the overhead of defining a separate object and resource entry for a tiny, one-off image. That convenience comes with trade-offs: an inline image cannot be shared across the document, its data must be re-embedded everywhere it appears, and a reader has to scan the stream to find where the image data ends. For these reasons the format treats inline images as a tool for small images and steers larger or repeated images toward Image XObjects."
  ],
  "sections": [
    {
      "heading": "The BI, ID and EI Operators",
      "body": [
        "These three operators appear only inside a content stream. BI (begin image) introduces the inline image and is followed by the image's parameters written as key/value pairs, much like a dictionary but without the surrounding delimiters. ID (image data) signals that the bytes immediately after it are the raw, possibly filtered, image samples, with a single whitespace character separating ID from the first data byte. EI (end image) terminates the data.",
        "Like an Image XObject, an inline image is painted into the unit square of user space and is then positioned, scaled and rotated by the current transformation matrix. In practice a cm operator is used just before BI to place and size the image on the page, so the image dictionary itself carries no coordinates."
      ]
    },
    {
      "heading": "Abbreviated Keys and Filter Names",
      "body": [
        "To save space, inline images replace the long key names of an image dictionary with short forms: Width is W, Height is H, BitsPerComponent is BPC, ColorSpace is CS, Filter is F, DecodeParms is DP, Decode is D, ImageMask is IM and Interpolate is I. Filter values are abbreviated too, so FlateDecode is Fl, LZWDecode is LZW, RunLengthDecode is RL, ASCIIHexDecode is AHx, ASCII85Decode is A85, CCITTFaxDecode is CCF and DCTDecode is DCT. Colour-space names follow the same pattern, with DeviceGray, DeviceRGB and DeviceCMYK shortened to G, RGB and CMYK and Indexed to I. The full names are also accepted, but the short forms are what most writers emit.",
        "Because the image data can be passed through the same filters as any other stream, an inline image can be compressed, for example with FlateDecode for lossless data or DCTDecode for embedded JPEG data. The colour space, however, is constrained: the device colour spaces and Indexed may be named directly, but any other colour space, such as an ICC-based or Separation space, must be defined as a named resource in the ColorSpace subdictionary of the current resource dictionary and referenced by that name."
      ]
    },
    {
      "heading": "Inline Images vs Image XObjects",
      "body": [
        "The practical difference is reuse. An Image XObject is a named object that a content stream invokes with the Do operator, so the same image can be drawn many times while its data is stored only once. An inline image has no name and no separate object; its data is embedded at the point of use, so if the same picture appears on several pages it is duplicated each time. That makes inline images efficient for a small graphic that appears once, and wasteful for anything repeated. XObjects also keep the content stream small and easier to parse, which matters for large or complex images.",
        "This is why inline images are not, in themselves, a compression feature, even though they can carry compressed data. Converting repeated inline images into a single shared Image XObject is a common optimisation, and tools that shrink PDFs often do exactly that alongside downsampling and re-encoding the underlying image data."
      ]
    },
    {
      "heading": "Size Limits and Parsing Considerations",
      "body": [
        "Finding the end of an inline image is the awkward part of the design. Because the raw data sits in the middle of the content stream, a reader must locate the EI marker to know where the image stops, yet the binary data can, by chance, contain the bytes that spell EI. Readers therefore look for an EI that is preceded by whitespace and cross-check it against the expected data length computed from the width, height, bits per component and colour space. To make this unambiguous, PDF 2.0 added a length entry (abbreviated L) that states exactly how many bytes of image data follow ID.",
        "For the same reason, the specification recommends that inline images be used only for small images and that larger images be stored as Image XObjects. Keeping inline images small limits how much binary data a parser must scan and avoids bloating the content stream. The mechanism is optimised for brevity, not for carrying large photographs."
      ]
    },
    {
      "heading": "Image Masks and Stencils Inline",
      "body": [
        "An inline image can also be a stencil mask rather than a full-colour image. Setting IM (ImageMask) to true makes it a 1-bit mask in which sample values select which areas of the page are painted with the current fill colour and which are left untouched, letting a shape or monochrome stamp be applied cheaply. In that mode the colour space and bits-per-component entries are not used, and the Decode array controls which bit value marks the painted region. This makes small inline stencil masks a lightweight way to place simple monochrome marks directly in the content stream."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Operators",
      "value": "Delimited by BI (begin image), ID (image data) and EI (end image)."
    },
    {
      "label": "Abbreviated keys",
      "value": "Uses short keys such as W, H, BPC, CS, F and IM instead of full names."
    },
    {
      "label": "No reuse",
      "value": "Has no name; unlike an Image XObject it is re-embedded wherever it appears."
    },
    {
      "label": "Intended scale",
      "value": "The specification recommends inline images only for small images."
    }
  ],
  "specification": {
    "introduced": "PDF 1.0 (early 1990s)",
    "iso": "ISO 32000",
    "latestVersion": "ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Small raster images embedded directly in a page's content stream.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Inline images are a compression technique that makes PDFs smaller.",
      "truth": "They only control where image data lives, not how well it compresses. Because they cannot be shared, repeating an inline image actually enlarges the file compared with a single referenced Image XObject."
    },
    {
      "claim": "You can put any image, including large photos, into an inline image.",
      "truth": "There is no hard size ceiling in the format, but the specification intends inline images for small images. Large or high-resolution images belong in Image XObjects, which parse more efficiently."
    },
    {
      "claim": "An inline image dictionary uses the same key names as a regular image.",
      "truth": "It uses abbreviated keys and filter names, such as W for Width, BPC for BitsPerComponent, CS for ColorSpace and Fl for FlateDecode, though the full names are also permitted."
    }
  ],
  "faq": [
    {
      "q": "Which operators define an inline image?",
      "a": "Three: BI begins the image and precedes its parameters, ID marks the start of the raw image data, and EI ends it. All three appear inside a content stream."
    },
    {
      "q": "Can an inline image be compressed?",
      "a": "Yes. Its data can pass through the same stream filters as any other image, named with abbreviated values such as Fl for FlateDecode or DCT for DCTDecode (embedded JPEG)."
    },
    {
      "q": "How is an inline image positioned and scaled on the page?",
      "a": "Like an Image XObject, it is painted into the unit square of user space and transformed by the current transformation matrix, so a cm operator before BI sets its position, size and rotation."
    },
    {
      "q": "Why can inline images be hard for parsers to read?",
      "a": "The image data sits inside the content stream, so a reader must find the EI marker even though the binary data may contain those bytes by chance. PDF 2.0 added a length entry (L) to state the exact data size."
    },
    {
      "q": "When is an Image XObject the better choice?",
      "a": "Whenever an image is large or appears more than once. An XObject stores the data once and lets the content stream reference it by name with the Do operator, avoiding duplication."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "form-xobjects",
      "pdf-color",
      "dct-decode-jpeg",
      "ccittfax-decode",
      "flate-decode",
      "image-resolution-in-pdf"
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
      }
    ]
  },
  "seeAlso": [
    "image-xobjects",
    "pdf-content-streams",
    "pdf-operators",
    "pdf-filters",
    "image-masks",
    "stencil-masks",
    "bits-per-component",
    "pdf-compression"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
