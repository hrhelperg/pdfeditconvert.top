import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "color-key-masking",
  "h1": "Color Key Masking in PDF",
  "cluster": "images-compression",
  "aliases": [
    "Chroma key masking",
    "Color-keyed masking",
    "Color range masking",
    "/Mask color array"
  ],
  "definition": "Color key masking is a PDF image feature that makes every pixel whose colour falls inside a specified range transparent, letting the page behind the image show through.",
  "description": "How PDF color key masking uses a /Mask colour range to make matching image pixels transparent, and how it differs from stencil masks and soft masks.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Color key masking is a way for a PDF image to declare that certain colours should not be painted at all. Instead of carrying a separate mask, the image XObject lists a range of colour values in its /Mask entry; any pixel whose components all fall within that range is skipped when the image is drawn, so whatever is already on the page shows through. The idea is conceptually similar to a green-screen or chroma-key effect, where one colour is treated as \"see-through.\"",
    "It is one of three masking mechanisms available to a PDF image. A stencil mask uses a separate one-bit image to say which pixels are opaque; a soft mask (SMask) supplies a full grayscale alpha channel for smooth, partial transparency; and color key masking picks out transparency directly from the image's own colour values. All three can attach to an image XObject, but color key masking is unique in needing no extra image data at all.",
    "Because the match is based on exact colour values, color key masking produces hard, all-or-nothing edges and is sensitive to how the image is compressed. That makes it a compact, precise tool for flat-colour backgrounds, but a poor fit for photographs or anything encoded with a lossy filter that shifts pixel values."
  ],
  "sections": [
    {
      "heading": "How color key masking works",
      "body": [
        "Color key masking is triggered when the /Mask entry of an image XObject is an array rather than a stream. The array holds 2 × n integers arranged as pairs, one minimum and one maximum for each of the n colour components in the image's colour space. For an RGB image (three components) the array therefore has six values; for a grayscale or indexed image it has two.",
        "When the image is rendered, each pixel's raw sample components are compared against these ranges. If every component of a pixel falls within its corresponding minimum/maximum pair, that pixel is masked out and not painted, allowing the existing background to remain visible; pixels that fall outside the range are drawn normally. The range values are ordinary integers in the image's sample space (0 to 2^BitsPerComponent − 1), so the mask is defined in the same units as the pixel data itself."
      ]
    },
    {
      "heading": "The dual role of the /Mask entry",
      "body": [
        "The same /Mask key in an image dictionary can take two very different forms. When it is a stream, it points to a separate one-bit image mask (stencil masking) that spells out opacity pixel by pixel. When it is an array of integers, it invokes color key masking and the transparency is derived from the colours already stored in the base image. A single image uses one form or the other, never both at once.",
        "The number of colour components the mask array must describe follows the image's colour space. A DeviceGray image needs one pair, DeviceRGB needs three, and an indexed image needs a single pair interpreted over index values rather than over final colours. Because indexed images map each sample to one entry in a palette, color key masking pairs naturally with them: a range of index values can be turned transparent cleanly, which is a common reason indexed images and color key masks appear together."
      ]
    },
    {
      "heading": "Why compression choice matters",
      "body": [
        "Color key masking depends on pixel values matching the declared range exactly. Lossless filters such as FlateDecode and LZWDecode preserve every sample unchanged, so a background painted with a single flat colour keys out reliably. Lossy encodings behave differently: DCTDecode (JPEG) and JPXDecode (JPEG 2000) approximate the image, nudging pixel values up and down, especially near sharp colour boundaries.",
        "That drift is why color key masking and lossy compression rarely mix well. Pixels that were meant to be the key colour may end up just outside the range and stay painted, while nearby pixels shift into the range unexpectedly, producing ragged edges or a coloured fringe around the masked region. For this reason color key masking is generally applied to losslessly compressed or indexed images, and it sits alongside broader decisions about lossy versus lossless PDF compression."
      ]
    },
    {
      "heading": "Color key masking versus soft and stencil masks",
      "body": [
        "The defining limitation of color key masking is that it is binary: a pixel is either fully painted or fully transparent, with nothing in between. There is no anti-aliasing and no partial opacity, so curved or diagonal edges can look jagged. When smooth, feathered transparency is needed, an image soft mask (SMask) is the appropriate mechanism because it stores a continuous alpha value per pixel.",
        "Stencil masking sits between the two in spirit: like color key masking it gives hard edges, but it separates the mask from the colour data by using an explicit one-bit image, which lets the mask and the base image differ in resolution and shape. Choosing among the three is a trade-off between file size, edge quality, and how the transparency is authored — color key masking is the most compact because it invents no new image, only a short array of numbers."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "PDF 1.3 (the array form of the /Mask entry)"
    },
    {
      "label": "Encoding",
      "value": "An array of 2 × n integers: a min/max pair per colour component"
    },
    {
      "label": "Transparency type",
      "value": "Binary — pixels are fully painted or fully transparent, no partial alpha"
    },
    {
      "label": "Compression fit",
      "value": "Relies on exact sample values, so it pairs with lossless (Flate/LZW) or indexed images"
    }
  ],
  "specification": {
    "introduced": "PDF 1.3",
    "iso": "ISO 32000",
    "typicalUsage": "Knocking a flat background colour out of an image so surrounding page content shows through, without adding a separate mask image.",
    "relatedStandards": [
      "pdf-versions"
    ]
  },
  "misconceptions": [
    {
      "claim": "Color key masking gives smooth, anti-aliased edges like a soft mask.",
      "truth": "It is all-or-nothing: each pixel is either fully painted or fully transparent. Smooth, partial transparency requires an image soft mask (SMask), not a colour range."
    },
    {
      "claim": "It works on JPEG images just like on lossless ones.",
      "truth": "Lossy DCTDecode/JPXDecode compression shifts pixel values, so pixels that should match the key colour may fall outside the range, leaving halos or fringing. Lossless or indexed images are far more predictable."
    },
    {
      "claim": "The /Mask entry of an image always points to another mask image.",
      "truth": "The /Mask entry can be a stream (an explicit stencil mask) or an array of integers (color key masking); the array form derives transparency straight from the image's own colours."
    }
  ],
  "faq": [
    {
      "q": "What does the /Mask colour array look like?",
      "a": "It is 2 × n integers, giving a minimum and maximum for each of the image's n colour components. A pixel is masked out only when every one of its components falls inside its own min/max pair."
    },
    {
      "q": "Which colour spaces can color key masking be used with?",
      "a": "It applies per component in the image's colour space, so a grayscale image needs one range, an RGB image three ranges, and an indexed image a single range interpreted over palette index values rather than final colours."
    },
    {
      "q": "Does color key masking make the file larger?",
      "a": "Barely — it adds only a small array of numbers to the image dictionary. That is a key difference from a soft mask, which is a full extra grayscale image and adds meaningfully more data."
    },
    {
      "q": "What is shown where pixels are masked out?",
      "a": "Nothing is painted in those areas; the mask does not set a colour of its own. Whatever page content already lies beneath the image simply remains visible through the transparent pixels."
    },
    {
      "q": "Is it the same as chroma keying in video?",
      "a": "The idea is the same — a chosen colour range becomes transparent — but color key masking uses exact integer-range matching on raw sample values rather than the tolerance-based keying used in video compositing."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "image-xobjects",
      "indexed-color",
      "dct-decode-jpeg",
      "soft-masks",
      "lossy-vs-lossless-pdf-compression"
    ],
    "relatedStandards": [
      "pdf-versions"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
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
    "image-masks",
    "stencil-masks",
    "image-soft-masks",
    "image-xobjects",
    "indexed-color",
    "pdf-transparency",
    "bits-per-component"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
