import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "image-color-depth",
  "h1": "Image Color Depth in PDF",
  "cluster": "images-compression",
  "aliases": [
    "bit depth",
    "pixel depth",
    "bits per pixel",
    "image bit depth",
    "color precision"
  ],
  "definition": "Image color depth in PDF is the number of bits used to store each pixel's color, determined by the image's BitsPerComponent value and how many components its color space uses.",
  "description": "How PDF stores image color depth through BitsPerComponent and color spaces, why 1- to 16-bit images differ, and how depth affects file size and quality.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every raster image placed in a PDF is stored as a grid of pixels, and each pixel is a set of numeric samples that describe its color. Color depth is how many bits those samples use per pixel. It is set by two properties recorded in the image: the number of bits allotted to each color component (BitsPerComponent) and how many components the image's color space uses.",
    "Color depth controls how many distinct colors or tones an image can represent. A one-bit image can only be black or white; an eight-bit-per-component RGB image can represent millions of colors. PDF supports a wide range, from compact bilevel scans up to sixteen-bit-per-component images, so the same document can mix a crisp line-art scan and a full-color photograph, each at an appropriate depth.",
    "It helps to keep color depth separate from two things it is often confused with. Resolution is how many pixels an image contains (its spatial detail), while color depth is how much color information each pixel carries. The color space names which color model is used; color depth says how finely each channel of that model is sampled. Both are stored in the image, and both affect how large the image data becomes."
  ],
  "sections": [
    {
      "heading": "How PDF Records Color Depth",
      "body": [
        "A raster image in a PDF is an Image XObject (or an inline image), described by a dictionary of properties. Two of those properties define color depth together. ColorSpace names the color model — for example DeviceGray, DeviceRGB, DeviceCMYK, or an Indexed palette — which in turn fixes how many components each pixel has. BitsPerComponent gives the number of bits used to store each of those components. The total color depth, in bits per pixel, is simply BitsPerComponent multiplied by the number of components.",
        "PDF allows BitsPerComponent values of 1, 2, 4, 8, and 16, with 16-bit-per-component support added in PDF 1.5. The number of distinct levels each component can take is two raised to that power: one bit gives two levels, eight bits give 256 levels, and sixteen bits give 65,536 levels. More levels mean smoother tonal gradation but more data to store before compression."
      ]
    },
    {
      "heading": "Color Depth Across PDF Color Spaces",
      "body": [
        "The component count comes from the color space, so the same BitsPerComponent produces different pixel depths. DeviceGray has one component, so eight bits per component is an eight-bit (256-level) grayscale image. DeviceRGB has three components, so eight bits each is a 24-bit true-color image. DeviceCMYK has four components, giving 32 bits per pixel at eight bits each. ICC-based and calibrated color spaces follow the component count of their underlying model.",
        "Indexed color works differently. Instead of storing full color values per pixel, each pixel holds a small index into a palette (a color lookup table), and the palette entries are expressed in a base color space such as RGB or CMYK. Here BitsPerComponent describes the bit length of the index and is limited to 1, 2, 4, or 8, so an indexed image can reference at most 256 palette colors. This palette approach is well suited to graphics with a limited set of flat colors, much like a palette-based PNG or GIF."
      ]
    },
    {
      "heading": "Special Cases: Masks and Embedded Codecs",
      "body": [
        "A few situations constrain or override the usual depth. A stencil image mask (an image with ImageMask set to true) always uses one bit per component, because each sample only decides whether a pixel is painted or left transparent. Images that carry a separate soft mask keep their own color depth, while the mask stores its own single-channel depth for transparency.",
        "Some encodings define depth inside the compressed data. Images compressed with DCTDecode (JPEG) most often use eight bits per component, and the value declared in the dictionary is expected to match the precision inside the JPEG stream. Images using JPXDecode (JPEG 2000) can define color space and bit depth within the codestream itself, so BitsPerComponent may be omitted or derived from the embedded data rather than the dictionary."
      ]
    },
    {
      "heading": "Color Depth, File Size, and Quality",
      "body": [
        "Because color depth is bits per pixel, it scales the raw size of image data directly: halving the bits per pixel roughly halves the uncompressed data for that image. Reducing depth — for example converting a full-color photo to an indexed palette, or dropping from sixteen to eight bits per component — can shrink a file, but pushing too far causes visible banding or posterization where smooth gradients break into steps. Flat-color graphics tolerate indexed palettes well; continuous-tone photos usually do not.",
        "In practice, color depth is one lever among several. Resolution (pixel count) and the choice of compression filter often matter more for photographic images, where downsampling and lossy compression free up far more space than trimming depth. When you optimize a PDF, tools weigh depth, resolution, and compression together rather than changing depth alone."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Allowed BitsPerComponent",
      "value": "1, 2, 4, 8, and 16 (16-bit support was added in PDF 1.5)"
    },
    {
      "label": "Bits per pixel",
      "value": "BitsPerComponent multiplied by the number of color-space components"
    },
    {
      "label": "Levels per component",
      "value": "2 to the power of BitsPerComponent (e.g., 8 bits = 256 levels)"
    },
    {
      "label": "Image masks",
      "value": "Stencil image masks always use 1 bit per component"
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "introduced": "16-bit per component: PDF 1.5",
    "typicalUsage": "Raster images (Image XObjects and inline images) declare depth via the BitsPerComponent entry alongside their color space.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "Color depth and resolution are the same thing.",
      "truth": "Resolution is how many pixels an image contains, which controls spatial detail; color depth is how many bits each pixel uses for color. They are independent — an image can be high-resolution with low color depth, or the reverse."
    },
    {
      "claim": "Color depth is just another name for the color space.",
      "truth": "The color space (DeviceGray, DeviceRGB, Indexed, and so on) sets which color model is used, while BitsPerComponent sets how finely each component is sampled. Both are stored separately in the image dictionary and together define the depth."
    },
    {
      "claim": "More color depth always looks better.",
      "truth": "Beyond a point extra depth is not visible on typical displays; eight bits per component covers most photographic needs, and higher depths mainly help editing headroom or wide-gamut and print work while enlarging the data."
    }
  ],
  "faq": [
    {
      "q": "What BitsPerComponent values does PDF allow?",
      "a": "PDF permits 1, 2, 4, 8, and 16 bits per component, with 16-bit support added in PDF 1.5. Some contexts restrict this: stencil image masks must be 1 bit, indexed images are limited to 1 to 8 bits for their index, and certain inline-image encodings narrow the choices further."
    },
    {
      "q": "How do I work out an image's color depth?",
      "a": "Multiply BitsPerComponent by the number of components in its color space. Eight-bit DeviceRGB is 24 bits per pixel, eight-bit DeviceGray is 8 bits, and eight-bit DeviceCMYK is 32 bits. Indexed images use the index bit length, since each pixel stores a palette index rather than a full color."
    },
    {
      "q": "Does a JPEG (DCTDecode) image inside a PDF have a fixed color depth?",
      "a": "Baseline JPEG typically uses eight bits per component. The DCTDecode stream carries its own sample precision, and the BitsPerComponent value in the image dictionary is expected to agree with what the JPEG data actually contains."
    },
    {
      "q": "Can reducing color depth make a PDF smaller?",
      "a": "Yes. Fewer bits per pixel means less raw image data, and converting flat-color graphics to an indexed palette can shrink them noticeably. For continuous-tone photos, however, banding can appear, and lowering resolution or using stronger compression usually saves more than trimming depth alone."
    },
    {
      "q": "What is one-bit color depth used for in a PDF?",
      "a": "One bit per component is bilevel black-and-white, used for scanned text and line art, often compressed with CCITTFax or JBIG2. Stencil image masks, which decide only whether each pixel is painted, are also always one bit per component."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "bits-per-component",
      "indexed-color",
      "image-xobjects",
      "devicergb",
      "devicecmyk",
      "devicegray",
      "image-resolution-in-pdf"
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
        "label": "Compress a PDF Without Losing Too Much Quality",
        "path": "/guides/compress-pdf-without-losing-too-much-quality"
      },
      {
        "label": "Best PDF Compression Settings — A Decision Guide",
        "path": "/guides/best-pdf-compression-settings"
      }
    ]
  },
  "seeAlso": [
    "bits-per-component",
    "indexed-color",
    "pdf-color",
    "image-resolution-in-pdf",
    "image-downsampling",
    "pdf-compression",
    "dct-decode-jpeg",
    "image-xobjects"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
