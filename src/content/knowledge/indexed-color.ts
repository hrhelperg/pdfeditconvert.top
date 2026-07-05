import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "indexed-color",
  "h1": "Indexed Color in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "palette-based color",
    "indexed color space",
    "color lookup table (CLUT)",
    "/Indexed color space",
    "palette color"
  ],
  "definition": "Indexed color in PDF is a palette-based color space in which each sample or fill stores a small integer that selects a color from a lookup table defined over a base color space.",
  "description": "How PDF's indexed color spaces store a compact palette and map each image sample to a color through a lookup table, and why it shrinks file size.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Indexed color, also called palette-based color, is a special color space in the PDF imaging model where colors are not written out component by component. Instead, each pixel or fill stores a small integer index, and the actual color for that index lives once in a lookup table. It is the same idea used by palette-based image formats such as GIF and 8-bit PNG.",
    "PDF supports indexed color because a great deal of content uses only a limited set of distinct colors: screenshots, diagrams, logos, and scanned line art. For that kind of artwork, storing one small index per pixel plus a compact palette is far more economical than storing full color components for every pixel.",
    "An indexed color space is always built on top of a base color space, which is where the palette entries are actually expressed. That base can be a device space like DeviceRGB or DeviceCMYK, a CIE-based space such as Lab or ICCBased, or in later revisions a Separation or DeviceN space, so the palette itself can live in whatever gamut the artwork needs."
  ],
  "sections": [
    {
      "heading": "How an Indexed Color Space Is Defined",
      "body": [
        "In PDF an indexed color space is written as a four-element array: [ /Indexed base hival lookup ]. The base entry is another color space, such as DeviceRGB, DeviceGray, DeviceCMYK, or a CIE-based space like ICCBased or Lab, in which the actual palette colors are expressed. hival is the largest index that will ever be used, so a value of hival implies a palette of hival + 1 entries numbered from 0. The final lookup entry is the color table itself, supplied either as a byte string or as a stream, holding the component values for every palette entry back to back.",
        "Because the palette is fully described by this array, an indexed color space is self-contained: a viewer needs only the array and the base space it references to resolve any index to a concrete color. In content streams the space is usually named in the page's resource dictionary and selected with the cs or CS operators, after which a single index value chosen with sc or scn sets the current color."
      ]
    },
    {
      "heading": "Turning an Index Into a Color",
      "body": [
        "Each palette entry is stored as one byte per component of the base color space, so if the base space has m components, the lookup table is m x (hival + 1) bytes long. To find a color, a consumer multiplies the index by m to locate that entry's bytes, then interprets each byte, a value from 0 to 255, by scaling it into the corresponding component range of the base space. For DeviceRGB that means three bytes mapped to the 0 to 1 range of red, green, and blue; for Lab or an ICC-based space the same bytes are scaled into that space's defined component ranges.",
        "This indirection is the whole point: the image or graphic stores only compact indices, while the richer per-color data lives once in the table. Index values that fall outside the range 0 to hival are clamped to the nearest valid value rather than causing a failure."
      ]
    },
    {
      "heading": "Indexed Color in Images",
      "body": [
        "Indexed color is most often used as the color space of an image XObject. When an image declares an indexed space, each stored sample is an index rather than a color component, and BitsPerComponent states how many bits each index occupies, commonly 1, 2, 4, or 8, chosen to be just large enough to represent hival. An 8-bit indexed image is the direct PDF analogue of a palette-based GIF or an 8-bit PNG.",
        "One subtlety is the image's Decode array. For most color spaces Decode maps samples into a 0 to 1 range, but for an indexed space the default Decode is [0, 2^BitsPerComponent - 1], which passes the stored sample straight through as an index. This is why indexed images behave differently from continuous-tone images even though they share the same image dictionary structure. Color key masking, which makes chosen colors transparent, operates on these index values for indexed images."
      ]
    },
    {
      "heading": "Base Color Spaces and the 256-Entry Limit",
      "body": [
        "The base space may be any device color space or CIE-based space, and since PDF 1.3 it may also be a Separation or DeviceN space, which lets a palette be built from spot colorants. It may not be a Pattern space or another Indexed space, so palettes cannot be nested. Choosing the base space determines how the stored bytes are interpreted and therefore what gamut the palette can cover.",
        "The palette is bounded in size: hival cannot exceed 255, so an indexed space holds at most 256 distinct colors. That ceiling is what makes indexed color a good fit for graphics with a small, well-defined set of colors and a poor fit for photographs, whose thousands of subtle tones cannot be represented without visible banding or dithering."
      ]
    },
    {
      "heading": "Why Indexed Color Matters for File Size",
      "body": [
        "For content that genuinely uses few colors, such as screenshots, diagrams, logos, and scanned line art, indexed color can cut the amount of image data substantially, because each pixel is one small index instead of a full set of color components. That saving is separate from stream compression: an indexed image is still typically wrapped in a filter such as FlateDecode, and the two techniques stack. Reducing colors first and compressing second is a common optimization path.",
        "The trade-off is fidelity. Forcing a continuous-tone photograph into 256 palette colors introduces banding, and any edit that needs a color outside the palette is impossible without redefining the table. For that reason indexed color is a deliberate choice for suitable artwork rather than a general-purpose setting, and tools that shrink PDFs weigh it against keeping images in a full device or ICC-based space."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Definition syntax",
      "value": "An array [ /Indexed base hival lookup ]: base color space, highest index, and a color table."
    },
    {
      "label": "Palette size limit",
      "value": "hival must be 255 or less, so a palette holds at most 256 colors (indices 0 through hival)."
    },
    {
      "label": "Lookup table size",
      "value": "m x (hival + 1) bytes, where m is the number of components in the base color space."
    },
    {
      "label": "Allowed base spaces",
      "value": "Any device or CIE-based space; Separation and DeviceN allowed since PDF 1.3; not Pattern or another Indexed space."
    }
  ],
  "specification": {
    "iso": "ISO 32000-1 / ISO 32000-2 (PDF)",
    "introduced": "Part of PDF's color model since its early versions; Separation and DeviceN base spaces added in PDF 1.3",
    "typicalUsage": "Palette-based image data and limited-color graphics such as screenshots, logos, and line art",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "Indexed color is a form of image compression.",
      "truth": "It is a color space, not a compression filter. Storing indices instead of full color values can reduce data, but the stream is still compressed separately by a filter such as FlateDecode."
    },
    {
      "claim": "An indexed palette is always defined in RGB.",
      "truth": "The palette is defined over a base color space, which may be DeviceGray, DeviceCMYK, Lab, ICC-based, or, since PDF 1.3, Separation or DeviceN, not just DeviceRGB."
    },
    {
      "claim": "An indexed color space can hold any number of colors.",
      "truth": "It is capped at 256 entries, because hival cannot exceed 255."
    }
  ],
  "faq": [
    {
      "q": "How many colors can a PDF indexed color space contain?",
      "a": "At most 256. The hival value is the highest index and cannot exceed 255, and indices start at 0, so the palette holds hival + 1 entries up to a maximum of 256."
    },
    {
      "q": "Where are the actual colors stored?",
      "a": "In the lookup table, the fourth element of the /Indexed array. It holds one byte per base-space component for each palette entry, and those bytes are scaled into the base space's ranges to produce the final color."
    },
    {
      "q": "Can an indexed palette use CMYK or spot colors?",
      "a": "Yes. The base color space can be DeviceCMYK or a CIE-based space, and since PDF 1.3 it can be a Separation or DeviceN space, allowing palettes built from spot colorants. Only a Pattern space or another Indexed space are disallowed as the base."
    },
    {
      "q": "How does an image store indexed samples?",
      "a": "Each sample is an index, and BitsPerComponent (typically 1, 2, 4, or 8) sets how many bits each index uses. The default Decode array passes samples through as indices rather than scaling them to a 0 to 1 range."
    },
    {
      "q": "When should indexed color be avoided?",
      "a": "For photographs and other continuous-tone images. Limiting them to 256 colors causes banding, so those images are usually better kept in a full device or ICC-based color space."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "devicegray",
      "devicecmyk",
      "lab-color-in-pdf",
      "color-key-masking",
      "image-masks",
      "pdf-filters"
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
        "label": "PDF to Images — Export PDF Pages as PNG or JPG",
        "path": "/pdf-to-images"
      }
    ],
    "relatedGuides": [
      {
        "label": "Why Is My PDF So Large? Causes and Fixes",
        "path": "/guides/why-is-my-pdf-so-large"
      },
      {
        "label": "Compress a PDF Without Losing Too Much Quality",
        "path": "/guides/compress-pdf-without-losing-too-much-quality"
      }
    ]
  },
  "seeAlso": [
    "pdf-color",
    "image-color-depth",
    "bits-per-component",
    "image-xobjects",
    "devicergb",
    "icc-based-color",
    "separation-color",
    "pdf-file-size-factors"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
