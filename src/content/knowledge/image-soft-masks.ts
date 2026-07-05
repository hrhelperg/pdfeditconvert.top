import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "image-soft-masks",
  "h1": "Image Soft Masks (SMask)",
  "cluster": "images-compression",
  "aliases": [
    "SMask",
    "soft-mask image",
    "image alpha channel",
    "SMask image",
    "per-image soft mask"
  ],
  "definition": "An image soft mask (SMask) is a grayscale image referenced by a PDF image XObject that supplies per-pixel opacity, giving the base image smooth, variable transparency.",
  "description": "In PDF, an SMask is a DeviceGray image attached to an image XObject that acts as an alpha channel, defining how opaque each pixel of the base image is.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When an image in a PDF needs to fade out, feather softly at its edges, or let the background show through, that behavior is carried by a soft mask. For images specifically, this takes the form of the SMask entry in an image XObject: a second image that functions as a per-pixel alpha channel. It was introduced in PDF 1.4, the version that brought the transparency model to the format.",
    "The mask is an ordinary grayscale image, but its sample values are interpreted as opacity rather than color. Where the mask is light, the corresponding pixels of the base image are drawn fully; where it is dark, they are transparent; intermediate values produce partial transparency. Because opacity can vary continuously from pixel to pixel, edges can be anti-aliased and gradients of transparency become possible, which a purely binary mask cannot express.",
    "This mechanism is how alpha transparency from source formats such as PNG survives being placed into a PDF, and the extra image data it adds is a common talking point in image-compression and file-size discussions. It is also frequently confused with the identically named soft mask in the graphics state and with stencil or color-key masks, which are related ideas that behave differently."
  ],
  "sections": [
    {
      "heading": "What a Soft Mask Adds to an Image",
      "body": [
        "The SMask entry in an image XObject dictionary points to another image XObject that serves as the alpha channel for the parent image. Each sample in the mask defines the opacity of the matching location in the base image: a value of zero is fully transparent, and the maximum value (255 for an 8-bit mask) is fully opaque, with the values in between producing proportional blending against whatever lies underneath. Because the mask holds a full range of values rather than just on and off, it can describe soft edges, drop-shadow falloff, and smooth fades.",
        "This capability arrived with PDF 1.4, the release that added the transparency imaging model to PDF. Before soft masks, an image could only be masked in a hard, all-or-nothing way. The SMask makes transparency a per-pixel, continuous property of the image itself, independent of the current graphics state."
      ]
    },
    {
      "heading": "How the Mask Image Is Defined",
      "body": [
        "The soft-mask image is a normal image XObject with a few constraints. Its color space is DeviceGray, since a single component is all that is needed to express opacity, and it carries its own BitsPerComponent, Width, and Height. The mask's dimensions do not have to match the base image; the mask is mapped onto the same unit square that the base image occupies and scaled to cover it. A soft-mask image may not itself carry an SMask, Mask, or ImageMask entry, so masks do not nest.",
        "An optional Matte entry lets the mask declare a color with which the base image's data has been preblended (premultiplied). Supplying a matte helps a renderer reconstruct clean edge colors and avoid the dark or bright fringing that can appear when a soft-edged image is composited over a new background. Standard image parameters such as the Decode array also apply to the mask, so its stored values can be remapped before being read as opacity."
      ]
    },
    {
      "heading": "Soft Masks Versus Hard Masks",
      "body": [
        "PDF offers several ways to hide part of an image, and the soft mask is the only one that produces partial transparency. A stencil mask (an image with ImageMask true, or the Mask entry pointing to a 1-bit image) is binary: each pixel is either painted or not. Color-key masking, specified as a range of color values in the Mask entry, is likewise all-or-nothing and simply drops any pixel whose color falls in the masked range.",
        "By contrast, an SMask assigns every pixel a continuous opacity, which is what allows anti-aliased outlines, feathered cutouts, and translucency. When you need a crisp knockout of a solid background, a stencil or color-key mask is smaller and sufficient; when you need smooth, variable transparency, only a soft mask can represent it."
      ]
    },
    {
      "heading": "Two Different Things Called SMask",
      "body": [
        "The key name SMask appears in two unrelated places, which is a common source of confusion. In an image XObject, SMask references the alpha-channel image described here. In an extended graphics state (ExtGState), SMask holds either the name None or a soft-mask dictionary that derives a mask from a transparency group using its luminosity or its alpha. The graphics-state form masks whatever is painted while it is active, not a single image.",
        "Both mechanisms were introduced with the PDF 1.4 transparency model and both express soft, continuous masking, but they are configured differently and used for different purposes. The image SMask is the simplest route to giving one specific image a built-in alpha channel."
      ]
    },
    {
      "heading": "Soft Masks, Compression, and File Size",
      "body": [
        "Because the mask is a separate image stream, it is stored and compressed like any other image, using filters such as FlateDecode for lossless alpha data or DCTDecode and JPXDecode where appropriate. That means a single visible picture with transparency actually stores two images: the base color image and its grayscale mask. This extra data is one reason a PDF containing many soft-masked images can grow larger than the same pictures would be without transparency.",
        "There is a special case for images encoded with JPXDecode (JPEG 2000), which can carry opacity data inside the code stream itself. The SMaskInData entry signals whether such embedded soft-mask data is present and how it should be interpreted, in which case a separate SMask image is not required. When you are trying to reduce the size of an image-heavy PDF, the mask streams are part of what a compressor is working with."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "PDF 1.4, with the transparency imaging model"
    },
    {
      "label": "Dictionary key",
      "value": "SMask entry in an image XObject dictionary"
    },
    {
      "label": "Mask color space",
      "value": "DeviceGray, with samples read as opacity, not color"
    },
    {
      "label": "Opacity range",
      "value": "0 = fully transparent, maximum sample value = fully opaque"
    }
  ],
  "specification": {
    "introduced": "PDF 1.4 (2001)",
    "iso": "ISO 32000-1:2008",
    "typicalUsage": "Attaching a per-pixel alpha channel to an image XObject for smooth, variable transparency, including alpha imported from formats such as PNG.",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-4"
    ]
  },
  "misconceptions": [
    {
      "claim": "An SMask and an image mask (stencil mask) do the same job.",
      "truth": "A stencil ImageMask is 1-bit and binary — each pixel is either painted or not — while a soft mask is a grayscale image that assigns continuous, partial opacity, enabling anti-aliased edges and fades."
    },
    {
      "claim": "The SMask in an image dictionary is the same as the SMask in the graphics state.",
      "truth": "They share the key name but are different mechanisms: the image SMask is an alpha-channel image, while the ExtGState SMask builds a mask from a transparency group's luminosity or alpha."
    },
    {
      "claim": "A soft-mask image must have the same width and height as the base image.",
      "truth": "The mask has its own Width and Height and is mapped onto the base image's unit square and scaled to cover it, so the two can differ in resolution."
    }
  ],
  "faq": [
    {
      "q": "What color space does a soft-mask image use?",
      "a": "DeviceGray. It has a single component, and each sample value is interpreted as the opacity of the corresponding pixel in the base image rather than as a color."
    },
    {
      "q": "How is PNG transparency stored inside a PDF?",
      "a": "The color channels typically become the base image XObject, and the PNG's alpha channel is stored as a separate DeviceGray image referenced through the base image's SMask entry."
    },
    {
      "q": "What is the Matte entry for?",
      "a": "Matte records a color that the base image data was preblended (premultiplied) with, so a renderer can composite the soft edges over a new background without color fringing."
    },
    {
      "q": "Does adding an SMask make a PDF larger?",
      "a": "It can, because the mask is a second image that must be stored and compressed alongside the base image. In image-heavy PDFs, those mask streams contribute to overall file size."
    },
    {
      "q": "What sample value means fully transparent?",
      "a": "A mask sample of 0 is fully transparent, and the maximum value for the mask's bit depth — for example 255 at 8 bits — is fully opaque, with intermediate values giving partial transparency."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "bits-per-component",
      "transparency-groups",
      "blend-modes",
      "jpx-decode-jpeg2000",
      "image-color-depth"
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
        "label": "Why Is My PDF So Large? Causes and Fixes",
        "path": "/guides/why-is-my-pdf-so-large"
      },
      {
        "label": "How to Compress a PDF (Without Losing Quality)",
        "path": "/guides/how-to-compress-pdf"
      }
    ]
  },
  "seeAlso": [
    "soft-masks",
    "image-masks",
    "stencil-masks",
    "color-key-masking",
    "image-xobjects",
    "pdf-transparency",
    "devicegray",
    "pdf-1-4"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
