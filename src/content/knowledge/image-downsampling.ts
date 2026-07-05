import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "image-downsampling",
  "h1": "Image Downsampling in PDF",
  "cluster": "images-compression",
  "aliases": [
    "Image resampling",
    "Downsampling",
    "Image subsampling",
    "Resolution reduction",
    "Bitmap downscaling"
  ],
  "definition": "Image downsampling reduces the pixel count, or resolution, of raster images inside a PDF, discarding samples to shrink file size while each picture keeps the same physical size on the page.",
  "description": "How image downsampling lowers image resolution inside a PDF to shrink file size, and how the subsampling, average, and bicubic methods differ.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Raster images inside a PDF are stored as grids of pixels, called samples. Image downsampling is the process of reducing how many samples an image contains, so that a picture that once held many pixels is rebuilt from fewer. Because images are frequently the largest contributor to a PDF's size, lowering their resolution is one of the most effective ways to make the file smaller.",
    "Downsampling does not change the rectangle the image occupies on the page. The picture still prints or displays at the same physical dimensions; it simply has fewer pixels packed into that space, which lowers its effective resolution (pixels per inch). The trade-off is quality: fewer samples mean less fine detail, and once the samples are gone they cannot be recovered.",
    "It is worth being precise about where downsampling lives. The PDF file format stores the finished image as an Image XObject with a pixel width and height, but it does not define how those pixels should be reduced. Downsampling is a decision made by the software that produces or optimizes the PDF, not a feature of the format itself."
  ],
  "sections": [
    {
      "heading": "How Downsampling Works",
      "body": [
        "An image's effective resolution in a PDF is its pixel dimensions divided by the size it is displayed at on the page. A photo that is 2000 pixels wide placed in a two-inch-wide slot has an effective resolution of about 1000 pixels per inch, far more than a screen or most printers can use. Downsampling removes this excess by resampling the pixel grid down to a smaller one, so the same slot is filled with fewer, larger samples.",
        "To do this, the software divides the original image into a grid of sample areas and produces one output pixel for each area. How it decides that output pixel's value is what separates the different methods. The result is written back into the PDF as a smaller Image XObject: the stored width and height in samples shrink, while the position and size of the image on the page stay the same."
      ]
    },
    {
      "heading": "Downsampling Methods: Subsampling, Average, and Bicubic",
      "body": [
        "Producers typically offer a few resampling strategies that trade speed against smoothness. Subsampling (sometimes called nearest-neighbor) simply picks one existing pixel from each sample area and discards the rest. It is the fastest option but can look coarse, because it ignores most of the surrounding detail. Average downsampling instead averages all the pixels in each sample area to produce the output pixel, which usually looks smoother than subsampling.",
        "Bicubic downsampling uses a weighted calculation across a wider neighborhood of pixels, generally producing the smoothest results at the cost of more processing. The naming here follows the conventions used by tools such as Adobe Acrobat Distiller. None of these algorithms is defined by the PDF specification; they are image-processing choices applied before the image is embedded, so the same source can yield different-looking results depending on the method used."
      ]
    },
    {
      "heading": "Downsampling Versus Compression",
      "body": [
        "Downsampling is often confused with compression, but they act on different things. Downsampling changes how many pixels an image has, physically reducing its dimensions. Compression, by contrast, encodes the existing pixels into fewer bytes without necessarily removing any of them, using stream filters such as FlateDecode or DCTDecode (JPEG). The two are complementary and are frequently applied together during optimization.",
        "This distinction matters because they have different consequences. Lossless compression can shrink a file with no change to the image, whereas downsampling always throws pixels away and is therefore inherently lossy. A workflow might first downsample a high-resolution scan to a sensible target resolution, then apply a compression filter to the reduced image, combining a large size reduction from fewer pixels with a further reduction from encoding."
      ]
    },
    {
      "heading": "Choosing a Target Resolution",
      "body": [
        "Most optimizers let you set a threshold and a target: images whose effective resolution exceeds the threshold are downsampled to the target, while images already at or below it are left untouched. This avoids degrading pictures that were never oversized. The right target depends entirely on how the PDF will be used. On-screen viewing needs far fewer pixels per inch than commercial printing, where a resolution around 300 ppi is a common convention for photographic images.",
        "Because downsampling is irreversible, over-aggressive settings are a frequent cause of blurry or pixelated output, especially when a PDF built for the screen is later sent to print. In print production, targets are chosen to keep enough resolution for the press, and preflight checks are often used to flag images that fall below a required minimum. When in doubt, keeping a higher-resolution master and downsampling copies for specific outputs preserves the option to start over."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Lossy and irreversible",
      "value": "Downsampling permanently discards image samples; upscaling later only interpolates and cannot restore lost detail."
    },
    {
      "label": "Common methods",
      "value": "Subsampling (nearest-neighbor), average downsampling, and bicubic downsampling, in roughly increasing order of smoothness and cost."
    },
    {
      "label": "Not a format feature",
      "value": "The PDF spec stores the resulting Image XObject dimensions but does not define the resampling algorithm; it is a producer-side choice."
    },
    {
      "label": "Distinct from compression",
      "value": "Downsampling reduces pixel count; compression re-encodes existing pixels into fewer bytes. They are often combined."
    }
  ],
  "misconceptions": [
    {
      "claim": "Downsampling and compression are the same thing.",
      "truth": "Downsampling removes pixels and changes an image's dimensions, while compression re-encodes existing pixels into fewer bytes. You can apply either or both."
    },
    {
      "claim": "You can downsample now and restore full resolution later.",
      "truth": "Downsampling permanently discards samples. Enlarging the image afterward only interpolates new pixels and cannot recover the original detail."
    },
    {
      "claim": "A higher-resolution image always looks better in the PDF.",
      "truth": "Beyond what the screen or printer can reproduce, extra pixels add file size without visible benefit, which is exactly the excess downsampling is meant to remove."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between downsampling and subsampling?",
      "a": "Downsampling is the general term for reducing an image's resolution. Subsampling is one specific, fast method that picks a single pixel from each sample area, so it is a subset of downsampling rather than a synonym, even though the words are sometimes used interchangeably."
    },
    {
      "q": "Does downsampling change how large an image looks on the page?",
      "a": "No. The image keeps the same rectangle and physical size on the page. Only its pixel density, or effective resolution in pixels per inch, drops because the same area is now filled with fewer samples."
    },
    {
      "q": "Why did my images get blurry after I compressed a PDF?",
      "a": "Many optimizers downsample images as part of reducing size. If the target resolution is set below what the display or printer needs, the reduced pixel count shows up as blur or blockiness, since the discarded detail cannot be brought back."
    },
    {
      "q": "Are all images in a PDF downsampled equally?",
      "a": "Usually not. Optimizers commonly apply a threshold and only reduce images whose effective resolution exceeds the target, leaving smaller or already low-resolution images untouched so they are not degraded further."
    },
    {
      "q": "Should I downsample a PDF meant for printing?",
      "a": "It depends on the output. Print work generally needs more resolution than screen viewing, so print-bound PDFs are downsampled to higher targets, if at all, and preflight checks are often used to catch images that end up below the resolution the press requires."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "bits-per-component",
      "image-color-depth",
      "pdf-filters",
      "pdf-preflight",
      "jpx-decode-jpeg2000"
    ],
    "relatedStandards": [
      "pdf-x"
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
        "label": "Compress a PDF Without Losing Too Much Quality",
        "path": "/guides/compress-pdf-without-losing-too-much-quality"
      },
      {
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      },
      {
        "label": "Best PDF Compression Settings — A Decision Guide",
        "path": "/guides/best-pdf-compression-settings"
      }
    ]
  },
  "seeAlso": [
    "image-resolution-in-pdf",
    "pdf-compression",
    "pdf-optimization",
    "image-xobjects",
    "lossy-vs-lossless-pdf-compression",
    "dct-decode-jpeg",
    "pdf-file-size-factors",
    "image-interpolation"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
