import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "image-resolution-in-pdf",
  "h1": "Image Resolution in PDF",
  "cluster": "images-compression",
  "aliases": [
    "Effective resolution",
    "Effective PPI",
    "Image DPI in PDF",
    "PDF image resolution",
    "Pixels per inch (PPI)"
  ],
  "definition": "Image resolution in PDF is the effective pixel density of a raster image, set not by a stored DPI value but by how many image samples are mapped onto the page area where the image is drawn.",
  "description": "Learn how image resolution in PDF is set by geometry, not a DPI tag: effective PPI comes from an image's pixel count divided by the size it is drawn.",
  "searchIntent": "concept",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Almost every scanned page, photograph or screenshot embedded in a PDF is a raster image: a fixed grid of pixels, called samples in the specification. \"Resolution\" describes how densely those samples are packed into the physical space the image occupies on the page. Unlike a standalone JPEG or TIFF, a PDF does not record a DPI number for the image itself.",
    "Because of this, the resolution you actually see is a by-product of geometry rather than a property you can read from a tag. The very same image can appear crisp or blurry depending purely on how large it is drawn, so \"the resolution of a PDF image\" is really its effective resolution: a value you compute from pixels and page size, not a field stored in the file.",
    "Understanding this one idea explains a lot of everyday PDF behaviour: why compressing and downsampling shrink files, why an image can look fine on screen yet print fuzzy, and why zooming in never sharpens a picture."
  ],
  "sections": [
    {
      "heading": "How PDF Stores Raster Images",
      "body": [
        "Raster images usually live in a PDF as Image XObjects: stream objects referenced from a page's content, though small ones can also appear as inline images embedded directly in a content stream. The image dictionary records the Width and Height in samples (the pixel count across and down), the color space, the bits per component, and the filter used to compress the sample data.",
        "Critically, none of those entries is a DPI or PPI value. The stored pixel grid is fixed and self-contained; nothing in the image says how big it \"should\" be. What varies from one placement to the next is how that grid is scaled onto the page."
      ]
    },
    {
      "heading": "Resolution Comes From Geometry, Not Metadata",
      "body": [
        "When a page is painted, an image is mapped into a unit square — the region from (0,0) to (1,1) in user space — and then positioned and scaled by the current transformation matrix, which is set with the cm operator before the image is drawn with the Do operator. PDF's user space uses a default unit of 1/72 inch, the same size as a typographic point.",
        "So if a 900-pixel-wide image is scaled to span 216 user-space units (3 inches), its effective horizontal resolution is 900 divided by 3, or 300 pixels per inch. Draw the same image at half that width and the effective resolution doubles; draw it larger and it drops, even though not a single pixel was added or removed. Resolution in a PDF is therefore calculated from geometry, not looked up."
      ]
    },
    {
      "heading": "Why Effective Resolution Matters",
      "body": [
        "Effective resolution is the lever behind both sharpness and file size. Below the density a given device can render, images look soft or pixelated; far above it, the surplus pixels are invisible on that device yet still inflate the file. Screens and printers differ greatly in the detail they can reproduce, which is why an image that looks sharp on a phone can print fuzzy, and why a file prepared for high-quality printing is typically much larger than one meant only for on-screen reading.",
        "Optimizing a PDF usually means matching effective resolution to the intended output. Downsampling reduces an image's sample count so its effective PPI lands near a chosen target, which is one of the largest single savings in most image-heavy documents."
      ]
    },
    {
      "heading": "PPI, DPI and Resolution-Independent Graphics",
      "body": [
        "In casual use \"DPI\" and \"PPI\" are treated as the same thing, but they describe different things. PPI (pixels per inch) is the sample density of a digital image, while DPI (dots per inch) properly refers to the ink or toner dots a printer lays down, and a printer may use several dots to reproduce one image pixel. PDF itself measures nothing in dots: its images are counted in samples and its geometry in points.",
        "It is also worth remembering that only raster content has a resolution at all. Vector paths, text and other drawing operators are resolution-independent and render crisply at any zoom or print size, which is why the whole concept of resolution applies specifically to embedded images rather than to a PDF as a whole."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Default user-space unit",
      "value": "1/72 inch (one point), so page geometry maps directly to an image's effective PPI"
    },
    {
      "label": "What the image stores",
      "value": "Width and Height in samples (pixels) plus color and filter data — there is no DPI or PPI field"
    },
    {
      "label": "Effective resolution",
      "value": "Image pixel dimension divided by the physical size at which the image is placed on the page"
    }
  ],
  "misconceptions": [
    {
      "claim": "A PDF stores the DPI of each embedded image, so you can read its resolution straight from the file.",
      "truth": "A PDF image records only its pixel Width and Height. Effective resolution depends on how large the image is drawn, so the same image can be high- or low-resolution in different PDFs."
    },
    {
      "claim": "Zooming in or enlarging the page increases an image's resolution.",
      "truth": "Scaling never adds pixels. Enlarging spreads the same samples over more area, lowering effective resolution and making the image look softer, not sharper."
    }
  ],
  "faq": [
    {
      "q": "How is the effective resolution of a PDF image calculated?",
      "a": "Divide the image's pixel dimension by the size it is drawn on the page. A 1,500-pixel-wide image placed 5 inches wide has an effective resolution of 300 PPI (1,500 divided by 5)."
    },
    {
      "q": "Do vector graphics and text in a PDF have a resolution?",
      "a": "No. Vector paths, fonts and other drawing operators are resolution-independent and stay sharp at any zoom or print size. Only embedded raster images have a pixel-based resolution."
    },
    {
      "q": "Why does the same PDF image look sharp on screen but blurry in print?",
      "a": "Printers reproduce far more detail per inch than a typical screen, so a pixel count that looks fine on a display can fall short of what the printer can render, revealing softness."
    },
    {
      "q": "Can I raise the resolution of an image already inside a PDF?",
      "a": "Not meaningfully. You cannot add detail that was never captured; tools can only interpolate, or invent, pixels. You can downsample to reduce size, but lost sharpness cannot be recovered."
    },
    {
      "q": "How do I lower image resolution to shrink a PDF?",
      "a": "Downsampling reduces the sample count of embedded images toward a target PPI, cutting file size. A compression tool applies this together with re-encoding of the image data."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "pdf-units-and-measurements",
      "image-interpolation",
      "image-color-depth",
      "user-space-and-device-space"
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
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      },
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
    "image-downsampling",
    "image-xobjects",
    "pdf-compression",
    "dct-decode-jpeg",
    "pdf-file-size-factors",
    "bits-per-component",
    "pdf-coordinate-system",
    "pdf-optimization"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
