import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "bits-per-component",
  "h1": "Bits Per Component in PDF Images",
  "cluster": "images-compression",
  "aliases": [
    "BitsPerComponent",
    "BPC",
    "bit depth per component",
    "sample bit depth",
    "component bit depth"
  ],
  "definition": "Bits per component is the PDF image attribute that specifies how many bits encode each color component of every sample, setting the tonal precision of the image.",
  "description": "How the BitsPerComponent entry sets the bit depth of each color component in a PDF image, which values PDF allows, and how it affects file size.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every raster image in a PDF is a rectangular grid of samples. Each sample holds one value per color component, and the BitsPerComponent entry declares how many bits are used to store each of those component values. A single setting applies to the whole image, so all components share the same bit depth.",
    "The value lives in the image XObject dictionary under the key /BitsPerComponent (abbreviated /BPC inside inline images). It works together with the image's color space, which decides how many components each sample has, and with the Decode array, which maps the raw sample numbers onto actual color values.",
    "Bit depth governs how finely each component can be quantized. One bit gives only two levels per component; eight bits gives 256; sixteen gives 65,536. Because it multiplies with the number of components and the pixel count, this one number has a direct effect on how much raw data the image carries before any compression filter is applied."
  ],
  "sections": [
    {
      "heading": "How Bits Per Component Encodes Image Samples",
      "body": [
        "A sample is one pixel's worth of data. The color space tells the reader how many components make up that sample: DeviceGray has one, DeviceRGB and Lab have three, DeviceCMYK has four, and an Indexed color space has a single component that acts as a lookup index into a palette. BitsPerComponent then fixes the width of each of those components, so an n-bit component can represent values from 0 to 2^n minus 1.",
        "Those raw integers are not the final colors. The Decode array (with a per-color-space default, usually 0 to 1 for each component) linearly maps the stored sample range onto the color component's real range. This separation is why the same 8-bit sample can mean a gray level, one channel of an RGB triple, or a palette index, depending entirely on the color space attached to the image."
      ]
    },
    {
      "heading": "Permitted Values and When Each Applies",
      "body": [
        "PDF allows BitsPerComponent to be 1, 2, 4, 8, or 16, and only a single value is permitted for the whole image. The 16-bit option was introduced in PDF 1.5; earlier documents were limited to 8 bits and below. Eight bits per component is the everyday choice for photographic and full-color artwork, while 1 bit is used for pure black-and-white (bilevel) content such as scanned line art and fax-style pages.",
        "The entry is required for image XObjects, with two exceptions: image masks and images compressed with the JPXDecode (JPEG 2000) filter. For an image mask the value, if present, must be 1, because a mask is a stencil of on/off samples. With an Indexed color space the bit depth caps how many palette entries can be addressed, so 8 bits permits up to 256 colors in the lookup table."
      ]
    },
    {
      "heading": "Interaction With Filters and Color Spaces",
      "body": [
        "Some stream filters constrain or supply the bit depth. CCITTFaxDecode and JBIG2Decode operate only on bilevel data, so images using them are effectively 1 bit per component. JPEG data decoded by DCTDecode carries its own sample precision within the codestream, most often 8 bits. For JPXDecode, the bit depth is determined by the JPEG 2000 codestream itself, which is why BitsPerComponent is not required for those images.",
        "Because the number of components comes from the color space and the width of each component comes from BitsPerComponent, the two must be described consistently with the actual encoded data. A mismatch between the declared bit depth, the color space, and the bytes produced by the filter is a common cause of images that render as noise, wrong colors, or misaligned rows."
      ]
    },
    {
      "heading": "Bit Depth, Color Depth, and File Size",
      "body": [
        "The total bits per pixel, often called the image's color depth, is BitsPerComponent multiplied by the number of components. A 24-bit RGB image is simply three 8-bit components; a 1-bit bilevel scan is one component at one bit. Reducing bit depth, converting to grayscale, or moving to an indexed palette lowers the amount of raw data an image contributes before compression, which is one lever in shrinking a PDF.",
        "In practice, bit depth is only one factor. For most on-screen and print work, 8 bits per component already exceeds what the eye can distinguish, so raising it to 16 mainly enlarges the file. Meaningful size reductions usually come from combining an appropriate bit depth with the right filter and sensible resolution rather than from bit depth alone."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Permitted values",
      "value": "1, 2, 4, 8, or 16 bits (16-bit samples added in PDF 1.5)"
    },
    {
      "label": "Dictionary key",
      "value": "/BitsPerComponent in image XObjects; abbreviated /BPC in inline images"
    },
    {
      "label": "Required?",
      "value": "Required except for image masks and images using the JPXDecode filter"
    },
    {
      "label": "Image masks",
      "value": "Must be 1 bit per sample when specified"
    }
  ],
  "specification": {
    "introduced": "Present since early PDF; 16-bit values added in PDF 1.5",
    "iso": "ISO 32000 (image dictionary entry)",
    "typicalUsage": "Image XObject and inline image dictionaries, alongside color space and Decode",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-5"
    ]
  },
  "misconceptions": [
    {
      "claim": "Bits per component is the same as bits per pixel.",
      "truth": "Bits per pixel equals bits per component multiplied by the number of color components; a 24-bit RGB image is 8 bits per component across three components."
    },
    {
      "claim": "You can set any bit depth, such as 10 or 12 bits.",
      "truth": "PDF only permits 1, 2, 4, 8, or 16. Formats like JPEG 2000 may carry other precisions internally, but that value comes from the codestream, not from BitsPerComponent."
    },
    {
      "claim": "More bits per component always makes a PDF look better.",
      "truth": "For typical documents 8 bits is already beyond what the eye can distinguish, so going higher mainly increases file size without a visible gain."
    }
  ],
  "faq": [
    {
      "q": "What is the most common bits per component value?",
      "a": "Eight bits per component is the usual choice for color and grayscale photographs, giving 256 levels per component, while 1 bit is standard for black-and-white scans."
    },
    {
      "q": "Does bits per component control image resolution?",
      "a": "No. Resolution is the pixel dimensions relative to the displayed size. Bits per component controls tonal or color precision within each pixel, which is a separate dimension of quality."
    },
    {
      "q": "Why do some images not declare bits per component?",
      "a": "Image masks and images compressed with JPXDecode (JPEG 2000) are the exceptions. A mask implies single-bit samples, and JPEG 2000 carries its own bit depth inside the codestream."
    },
    {
      "q": "What bit depth do fax-style or scanned line-art pages use?",
      "a": "One bit per component, i.e. bilevel, typically paired with the CCITTFaxDecode or JBIG2Decode filter, which are designed for two-tone data."
    },
    {
      "q": "Can lowering bits per component reduce a PDF's size?",
      "a": "It can help, since fewer bits per sample means less raw data before compression, but downsampling resolution and choosing the right filter usually have a larger effect."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "jpx-decode-jpeg2000",
      "ccittfax-decode",
      "jbig2-decode",
      "devicegray",
      "devicergb",
      "lossy-vs-lossless-pdf-compression",
      "pdf-optimization"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-5"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "Compress a PDF Without Losing Too Much Quality",
        "path": "/guides/compress-pdf-without-losing-too-much-quality"
      },
      {
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      }
    ]
  },
  "seeAlso": [
    "image-color-depth",
    "image-xobjects",
    "pdf-color",
    "indexed-color",
    "image-masks",
    "dct-decode-jpeg",
    "image-resolution-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
