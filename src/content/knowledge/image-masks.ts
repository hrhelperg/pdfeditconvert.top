import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "image-masks",
  "h1": "Image Masks in PDF",
  "cluster": "images-compression",
  "aliases": [
    "image masking",
    "PDF image masking",
    "Mask and SMask entries",
    "raster image masking"
  ],
  "definition": "In PDF, image masks make chosen parts of a raster image transparent — using a 1-bit stencil, a color range, or a separate grayscale alpha channel — so underlying content shows through.",
  "description": "How PDF images become transparent: stencil (ImageMask) masks, explicit masks, color key masking, and soft masks (SMask) that supply per-pixel alpha.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF's imaging model paints images as opaque rectangles by default. An image mask is how a producer carves transparency into a raster image so that the page content behind it remains visible. This is distinct from a clipping path, which restricts painting to a vector region and can apply to any content; masks operate per pixel and are specific to images.",
    "PDF actually offers several related masking mechanisms. A stencil mask (an image with the ImageMask flag) is a 1-bit shape that paints the current color through its unmasked samples. A normal colored image can instead carry a Mask entry, which takes one of two forms: a reference to a separate stencil image (explicit masking) or an array of color ranges (color key masking). Finally, a soft mask, supplied through the SMask entry, provides continuous per-pixel opacity. The first three are hard-edged, on-or-off decisions; the soft mask is what makes gradual, anti-aliased transparency possible.",
    "Masking matters well beyond visual effects. Because JPEG (DCTDecode) has no alpha channel, PDF frequently pairs a JPEG color image with a separate soft mask to achieve soft-edged photos. And because a 1-bit stencil compresses extremely well, knocking out a background with a stencil mask can cost very little, which is why masks are a recurring consideration in PDF optimization."
  ],
  "sections": [
    {
      "heading": "Stencil Masks and the ImageMask Flag",
      "body": [
        "An image XObject whose dictionary sets ImageMask to true is a stencil mask. It stores exactly one bit per sample and has no color space of its own; instead of carrying color data, it describes a shape. Where its samples are unmasked, the current fill color from the graphics state is painted onto the page; where they are masked, nothing is painted and existing content shows through.",
        "The Decode array selects which sample value marks the painted region. With the default Decode of [0 1], samples of 0 are painted and samples of 1 are masked out; a Decode of [1 0] inverts that relationship. Because a stencil stores only a monochrome shape, it is compact and is commonly used for logos, symbols, and applying a single flat color through an arbitrary outline."
      ]
    },
    {
      "heading": "Explicit Masking and Color Key Masking",
      "body": [
        "A normal colored image can reference a mask through its Mask entry, which takes one of two forms. As a stream, Mask points to a separate stencil image mask — this is explicit masking. The mask's unmasked samples reveal the base image and its masked samples become transparent, and the mask may be a different resolution than the base image, in which case it is scaled to align with it.",
        "As an array, Mask specifies color key masking: it lists a minimum and maximum value for each color component, and any pixel of the base image whose components all fall inside those ranges is treated as transparent. Color key masking adds no extra pixel data at all — only the small range array — which makes it an inexpensive way to knock out a solid background color, at the cost of producing hard, aliased edges. Both explicit masking and color key masking were added in the PDF 1.3 timeframe."
      ]
    },
    {
      "heading": "Soft Masks (SMask) and Alpha Transparency",
      "body": [
        "Introduced with the transparency imaging model in PDF 1.4, a soft mask is supplied through an image's SMask entry as a separate DeviceGray image whose sample values act as per-pixel alpha. Under the default interpretation, the darkest value is fully transparent and the brightest fully opaque, with everything in between giving partial opacity.",
        "Unlike the strictly on-or-off behavior of stencil and color key masks, a soft mask can express gradients and fractional coverage, which is what makes anti-aliased edges, feathering, and vignette-style fades possible. An optional Matte entry can record a background color that the base image's color was pre-blended against, so a renderer can un-blend cleanly at the edges rather than picking up a halo."
      ]
    },
    {
      "heading": "Why Masks Matter for File Size and Rendering",
      "body": [
        "Masks are central both to keeping images small and to expressing transparency in codecs that lack it. DCTDecode (JPEG) images carry no alpha channel, so a widespread pattern is a JPEG-compressed color image paired with a separate SMask that holds the opacity — delivering soft-edged photographs without an alpha-capable image format.",
        "The compression cost of masking varies sharply by mechanism. A 1-bit stencil mask is highly compressible with bilevel filters such as CCITTFax or JBIG2, or with Flate, so masking out a background this way can add very little. Color key masking adds essentially nothing, since it is only a range array. A soft mask, by contrast, is an entire additional grayscale image stream, so optimizers weigh whether smooth transparency is worth the extra bytes."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Stencil masks",
      "value": "Store 1 bit per sample and carry no color; they paint the current fill color through unmasked areas."
    },
    {
      "label": "Soft masks (SMask)",
      "value": "A separate DeviceGray image supplies per-pixel alpha, enabling gradual, anti-aliased transparency."
    },
    {
      "label": "Color key masking",
      "value": "Makes pixels within specified color ranges transparent, adding only a range array — no extra image data."
    },
    {
      "label": "Soft mask origin",
      "value": "Introduced with the transparency imaging model in PDF 1.4."
    }
  ],
  "specification": {
    "introduced": "Stencil (ImageMask) masks date to early PDF; explicit masking and color key masking were added with PDF 1.3; soft masks (SMask) arrived with the PDF 1.4 transparency model.",
    "iso": "ISO 32000",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Transparency, cutouts and knockouts, and applying a flat color through a shape in raster images.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "Image masks and clipping paths are the same thing.",
      "truth": "A clipping path restricts painting to a vector region for any content; an image mask works per pixel on a raster image via a stencil, a color range, or an alpha channel."
    },
    {
      "claim": "A stencil image mask contains the picture's colors.",
      "truth": "An ImageMask holds only a 1-bit shape and no color data; it paints the current fill color through its unmasked samples."
    },
    {
      "claim": "PDF can't have soft-edged JPEG photos because JPEG has no alpha channel.",
      "truth": "DCTDecode images carry no alpha, but PDF can attach a separate SMask grayscale image to supply per-pixel opacity around a JPEG."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a hard mask and a soft mask?",
      "a": "Hard masks — stencil and color key masking — make a binary, on-or-off decision for each pixel. A soft mask (SMask) provides continuous alpha values, so it can produce partial opacity and smooth, anti-aliased edges."
    },
    {
      "q": "Can one image use more than one mask at a time?",
      "a": "In practice an image applies one masking mechanism: a base image references either a Mask (a stencil stream or a color-key array) or an SMask soft mask, rather than combining them."
    },
    {
      "q": "Why would a PDF use color key masking?",
      "a": "It removes pixels within a specified color range while adding only a small range array and no extra image data, which makes it a cheap way to knock out a flat background color — though it produces hard edges."
    },
    {
      "q": "Do image masks change the file size?",
      "a": "A 1-bit stencil mask is very compact and compresses well with CCITTFax, JBIG2, or Flate. Color key masking adds almost nothing. A soft mask, however, is a whole additional grayscale stream and increases size."
    },
    {
      "q": "Is 'image mask' the same as the ImageMask entry?",
      "a": "The ImageMask flag marks one specific kind of mask — a 1-bit stencil image. Used broadly, image masking also covers explicit masking, color key masking, and soft masks."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "devicegray",
      "ccittfax-decode",
      "jbig2-decode",
      "dct-decode-jpeg",
      "transparency-groups",
      "blend-modes",
      "indexed-color",
      "bits-per-component"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-4"
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
    "stencil-masks",
    "color-key-masking",
    "image-soft-masks",
    "image-xobjects",
    "soft-masks",
    "pdf-transparency",
    "clipping-paths"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
