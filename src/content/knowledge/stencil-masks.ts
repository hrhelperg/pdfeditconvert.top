import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "stencil-masks",
  "h1": "Stencil Masks in PDF",
  "cluster": "images-compression",
  "aliases": [
    "Stencil masking",
    "1-bit image mask",
    "ImageMask",
    "Monochrome stencil"
  ],
  "definition": "A stencil mask is a 1-bit monochrome image (ImageMask true) whose samples act as a stencil, painting the current fill colour through marked pixels and leaving other areas untouched.",
  "description": "How PDF stencil masks work: a 1-bit ImageMask paints the current fill colour through its marked samples, leaving other areas of the page untouched.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A stencil mask is a special kind of image in a PDF. Instead of carrying its own colours, it is a one-bit-per-sample bitmap that decides, pixel by pixel, where paint should land. Where a sample is \"marked,\" the region is filled with the current colour from the graphics state; everywhere else the page is left exactly as it was. The technique is called stencil masking because the bitmap behaves like a physical stencil laid over the page.",
    "The object that does this is an image XObject (or inline image) with the entry ImageMask set to true. Because a stencil mask never chooses a colour of its own, it has no ColorSpace and always uses one bit per component. That makes it fundamentally different from an ordinary image, which stores actual colour or greyscale values. A stencil mask stores only shape.",
    "Stencil masks sit inside PDF's broader family of masking and transparency features, alongside colour key masking and soft masks. They matter for file size as much as for appearance: a shape rendered as a 1-bit mask plus a single fill colour is far smaller than the same shape stored as a full-colour image, and the same bi-level compression filters used for scanned pages apply directly to stencil masks."
  ],
  "sections": [
    {
      "heading": "What Makes an Image a Stencil Mask",
      "body": [
        "An image becomes a stencil mask when its image dictionary sets ImageMask to true. That single flag changes how the whole object is interpreted. The image no longer describes colour; it describes a two-state pattern of marked and unmarked samples. Consequently a stencil mask must use one bit per component, and it must not specify a ColorSpace, because it is not producing colours of its own. Attempting to attach a colour space to an image mask is invalid.",
        "Aside from ImageMask, a stencil mask carries the usual geometry keys such as Width and Height, an optional Decode array, and stream data holding the packed 1-bit samples. Like every image in PDF, it is defined in a unit square and scaled and positioned by the current transformation matrix when it is drawn, so the same small bitmap can be stretched to any size on the page."
      ]
    },
    {
      "heading": "How Painting Through the Mask Works",
      "body": [
        "When a stencil mask is drawn, the viewer walks its samples and paints the marked ones with the current nonstroking (fill) colour taken from the graphics state at that moment. Unmarked samples produce no paint at all, so whatever was previously on the page shows through unchanged. This is why the same mask can appear in any colour: change the fill colour before drawing it and the shape is rendered in that colour instead.",
        "The polarity of \"marked\" versus \"unmarked\" is governed by the Decode array. With the default of [0 1], samples with value 0 are painted and samples with value 1 are left untouched. Supplying [1 0] reverses this, so the roles of the two sample values swap. Because every sample is strictly one of two states, edges are hard: a stencil mask cannot express partial coverage, anti-aliasing, or graduated transparency."
      ]
    },
    {
      "heading": "Stencil Masks Versus Other PDF Masking",
      "body": [
        "Stencil masking is one of several masking techniques in PDF, and confusing them is common. A soft mask (the SMask entry, introduced with PDF's transparency model) supplies continuous alpha or luminosity values and can fade an image smoothly; a stencil mask offers only on or off. Colour key masking makes specified colour ranges within an ordinary image transparent, which is a completely different mechanism from painting a single colour through a shape.",
        "The same 1-bit image mask object can also be reused in a related role. When an ordinary base image references an image mask through its Mask entry, the mask designates which parts of that base image are painted and which are knocked out — sometimes called explicit masking. The distinction is in how the mask is applied: stencil masking paints the current fill colour through the mask directly, whereas an explicit mask filters another image."
      ]
    },
    {
      "heading": "Compression and Typical Uses",
      "body": [
        "Because a stencil mask is bi-level, it compresses with the same filters used for black-and-white scanned pages: CCITTFaxDecode and JBIG2Decode are well suited to it, and RunLengthDecode or FlateDecode can also be applied. Storing a logo, a shape, or a scanned bi-level region as a 1-bit mask plus one fill colour is far more compact than an equivalent colour image, which is one reason the technique appears throughout compression-conscious PDFs.",
        "Stencil masks show up in several everyday places. Type 3 font glyphs are frequently defined as image masks so a single glyph bitmap can be painted in whatever text colour is current. Image masks also commonly appear as inline images embedded directly in a content stream, where abbreviated keys are used. In each case the underlying idea is the same: separate the shape from the colour, keep the shape as cheap 1-bit data, and let the graphics state supply the colour at draw time."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Defining flag",
      "value": "ImageMask true, with exactly 1 bit per component and no ColorSpace"
    },
    {
      "label": "Colour source",
      "value": "Marked samples are painted with the current nonstroking (fill) colour"
    },
    {
      "label": "Polarity control",
      "value": "Decode [0 1] paints where samples are 0; [1 0] reverses it"
    },
    {
      "label": "Compression",
      "value": "Bi-level data compresses with CCITTFax, JBIG2, RunLength, or Flate"
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "introduced": "PDF 1.0",
    "typicalUsage": "Painting a single colour through a 1-bit shape, rendering Type 3 font glyphs, and masking bi-level scanned regions.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "A stencil mask is just another name for a soft mask.",
      "truth": "A stencil mask is hard-edged and 1-bit — each sample either paints or does not. A soft mask (SMask) supplies continuous alpha or luminosity values for smooth, partial transparency."
    },
    {
      "claim": "A stencil mask stores the colours it paints.",
      "truth": "It stores only shape. The colour comes from the current fill colour in the graphics state when the mask is drawn, so the same mask can render in any colour."
    },
    {
      "claim": "\"Image mask\" and \"stencil mask\" are unrelated features.",
      "truth": "A stencil mask is an image mask being used to paint the current colour; stencil masking is the operation, and the image mask is the object it operates on."
    }
  ],
  "faq": [
    {
      "q": "How is a stencil mask different from colour key masking?",
      "a": "Colour key masking makes specified colour ranges inside a normal, full-colour image transparent. A stencil mask is a standalone 1-bit bitmap that paints the current fill colour through its marked samples — it carries no colour of its own."
    },
    {
      "q": "Can a stencil mask be an inline image?",
      "a": "Yes. Image masks may appear as inline images embedded in a content stream (between the BI and EI operators), not only as image XObjects. Abbreviated dictionary keys are used in that context, such as IM for ImageMask."
    },
    {
      "q": "Why do Type 3 font glyphs often use image masks?",
      "a": "Rendering a glyph as an image mask lets a single bitmap take on whatever text colour is current at draw time, so one glyph shape works in every colour without storing separate coloured copies."
    },
    {
      "q": "Does a stencil mask support anti-aliasing or partial transparency?",
      "a": "No. Every sample is one of two states, so edges are hard and coverage is all-or-nothing. For smooth edges or graduated transparency you need a soft mask (SMask) instead."
    },
    {
      "q": "What compression is typically used for stencil masks?",
      "a": "Because the data is bi-level, stencil masks commonly use CCITTFaxDecode or JBIG2Decode, and RunLengthDecode or FlateDecode can also be applied — the same filters that suit black-and-white scans."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "clipping-paths",
      "type-3-fonts",
      "ccittfax-decode",
      "devicegray",
      "pdf-transparency"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Compress a Scanned PDF (Big Savings)",
        "path": "/guides/how-to-compress-scanned-pdf"
      }
    ]
  },
  "seeAlso": [
    "image-masks",
    "color-key-masking",
    "image-soft-masks",
    "soft-masks",
    "image-xobjects",
    "bits-per-component",
    "inline-images",
    "jbig2-decode"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
