import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "image-xobjects",
  "h1": "Image XObjects in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "Image XObject",
    "XObject image",
    "external image object",
    "PDF raster image object"
  ],
  "definition": "An Image XObject is a named, reusable PDF stream object that stores a sampled raster image — its pixel data, dimensions, color space and bit depth — and is painted onto a page with the Do operator.",
  "description": "Image XObjects are the PDF stream objects that hold raster images: their pixel data, dimensions, color space and bit depth, drawn onto a page with the Do operator.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Most photographs, screenshots and scanned pages you see inside a PDF are stored as Image XObjects. An XObject (\"external object\") is a self-contained resource that a page's content stream can reference by name rather than embedding inline. PDF defines two XObject types in common use — Image XObjects, which hold sampled raster data, and Form XObjects, which hold reusable arbitrary content such as vector graphics and text.",
    "An Image XObject is a stream object: a dictionary of properties followed by the raw sample bytes. The dictionary declares what the pixels mean — how wide and tall the image is in samples, which color space interprets each sample, how many bits each component uses, and which filters decompress the byte stream. Because the object lives in the page's resource dictionary, the same image can be drawn many times without duplicating its data.",
    "To render the image, a content stream sets up a coordinate mapping and issues the Do operator. This separation of the image data from its placement is central to how PDF handles raster graphics: the file stores pixels once, and each use decides where and how large they appear."
  ],
  "sections": [
    {
      "heading": "Anatomy of an Image XObject",
      "body": [
        "An Image XObject is identified by a dictionary containing /Type /XObject and /Subtype /Image, attached to a stream of sample data. The core entries describe the raster grid: /Width and /Height give the image size in samples (not physical units), /ColorSpace names the color space used to interpret each sample, and /BitsPerComponent states how many bits encode each color component — commonly 1, 2, 4, 8, or 16.",
        "The stream bytes are almost always compressed, and the /Filter entry (with any /DecodeParms) names the decoding chain. Filters such as DCTDecode carry JPEG data, JPXDecode carries JPEG 2000, CCITTFaxDecode and JBIG2Decode handle bilevel scans, while FlateDecode, LZWDecode and RunLengthDecode provide general-purpose compression. Optional entries like /Decode (which remaps sample values), /Interpolate, /Intent, /SMask and /Mask refine how the samples are interpreted and painted."
      ]
    },
    {
      "heading": "How an Image Is Placed on the Page",
      "body": [
        "An Image XObject has no built-in position, size or resolution. When it is drawn, the image is mapped into a unit square whose corners are (0,0) and (1,1) in user space. The current transformation matrix (CTM) — typically set with the cm operator just before drawing — scales, translates and rotates that unit square to wherever the image should appear. A common pattern is to save the graphics state, concatenate a matrix that scales the unit square to the desired width and height, invoke the image, then restore the state.",
        "The image itself is invoked with the Do operator applied to the resource name, for example /Im0 Do, where /Im0 is the key under the /XObject entry of the page's /Resources dictionary. Because the file stores only pixel dimensions, the effective resolution is emergent: it depends on how many samples are packed into the on-page area the CTM produces. Scaling a small image across a large area lowers its effective resolution and can look soft, which is one reason images can appear blurry or bloat a file."
      ]
    },
    {
      "heading": "Color, Bit Depth and Sample Data",
      "body": [
        "The meaning of each sample comes from the image's color space. Device spaces (DeviceGray, DeviceRGB, DeviceCMYK) map samples directly to device colorants, while CIE-based spaces (CalRGB, CalGray, Lab, ICCBased) tie the samples to a defined color appearance for more predictable reproduction. Indexed color spaces store a palette so each sample is a single index into a table of colors, which keeps low-color images compact.",
        "Bit depth interacts with the color space to determine how finely each component is quantized. An 8-bit-per-component RGB image, for instance, stores three bytes per pixel, whereas a 1-bit grayscale image stores a single black-or-white bit per sample. The sample layout in the stream follows directly from /Width, /Height, the number of color components and /BitsPerComponent, so a decoder can reconstruct the pixel grid without any external information."
      ]
    },
    {
      "heading": "Masks and Transparency",
      "body": [
        "Image XObjects support several forms of masking. When /ImageMask is true, the object is a stencil mask: a 1-bit image that carries no color space and instead paints the current fill color through its \"on\" samples, letting the rest show whatever is behind it. Separately, the /Mask entry can reference another stencil image or specify a color-key range so that matching colors become transparent.",
        "For smooth, per-pixel transparency, an Image XObject can reference a soft mask through /SMask — a separate grayscale (DeviceGray) image whose sample values act as alpha values, from fully transparent to fully opaque. Soft masks are how anti-aliased edges, drop shadows and faded imagery are represented in a PDF without baking a background into the picture."
      ]
    },
    {
      "heading": "XObjects, Inline Images and Form XObjects",
      "body": [
        "Not every raster in a PDF is an Image XObject. Very small images can be written directly into a content stream as an inline image, delimited by the BI, ID and EI operators. Inline images avoid the overhead of a named resource but cannot be reused and are impractical for large data, so most real imagery uses XObjects.",
        "It is also easy to confuse Image XObjects with Form XObjects because both are named XObject resources invoked with the Do operator. The difference is what they contain: a Form XObject is a reusable container of arbitrary page content — paths, text, other XObjects — not sampled pixels. Only the Image subtype holds raster sample data. The two are frequently combined, for example when a Form XObject groups an image together with surrounding vector artwork so the whole assembly can be reused."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Object type",
      "value": "A stream with /Type /XObject and /Subtype /Image"
    },
    {
      "label": "Invoked by",
      "value": "The Do operator, referencing a name in the page's /Resources /XObject dictionary"
    },
    {
      "label": "Placement",
      "value": "Mapped into the unit square (0,0)–(1,1) and positioned/sized by the current transformation matrix"
    },
    {
      "label": "Reuse",
      "value": "Stored once as a resource; can be drawn many times without duplicating the pixel data"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1 / ISO 32000-2",
    "typicalUsage": "Embedding photographs, scanned pages and other raster imagery within PDF pages.",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "An Image XObject stores the image's print resolution (DPI).",
      "truth": "The stream stores only pixel dimensions (/Width and /Height in samples). Effective resolution is determined at draw time by how the current transformation matrix scales the unit square onto the page."
    },
    {
      "claim": "Every image in a PDF is an Image XObject.",
      "truth": "Small images may be embedded directly in a content stream as inline images (BI/ID/EI). Image XObjects are the named, reusable form used for most real imagery."
    },
    {
      "claim": "Image XObjects and Form XObjects are just two kinds of image.",
      "truth": "Only the Image subtype holds sampled pixels. A Form XObject is a reusable container of arbitrary content — vector paths, text, other objects — not a raster image."
    }
  ],
  "faq": [
    {
      "q": "How is an Image XObject positioned and sized on a page?",
      "a": "It is drawn with the Do operator, which maps the image into the unit square from (0,0) to (1,1). The current transformation matrix, usually set with the cm operator, scales and translates that square to place the image where it should appear."
    },
    {
      "q": "What color spaces can an Image XObject use?",
      "a": "Any PDF color space — DeviceGray, DeviceRGB, DeviceCMYK, CalRGB, CalGray, Lab, ICCBased, Indexed, Separation or DeviceN. Stencil image masks are the exception: they carry no color space and paint the current fill color instead."
    },
    {
      "q": "How is transparency represented in an Image XObject?",
      "a": "Through a /SMask soft-mask image that supplies per-pixel alpha values, or through a /Mask entry that references a stencil mask image or defines a color-key range of colors to treat as transparent."
    },
    {
      "q": "Why can the same logo appear many times without inflating the file?",
      "a": "An Image XObject is stored once in the resources and referenced by name. Each Do invocation reuses that single stream, so repeating an image adds only a small drawing instruction, not another copy of the pixels."
    },
    {
      "q": "How are the image bytes compressed inside the stream?",
      "a": "By the filters named in /Filter — for example DCTDecode (JPEG), JPXDecode (JPEG 2000), CCITTFaxDecode and JBIG2Decode for bilevel scans, or the general-purpose FlateDecode, LZWDecode and RunLengthDecode."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "indexed-color",
      "icc-based-color",
      "image-resolution-in-pdf",
      "pdf-graphics-state",
      "pdf-coordinate-system",
      "pdf-filters",
      "inline-images",
      "color-key-masking",
      "stencil-masks"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
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
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      }
    ]
  },
  "seeAlso": [
    "form-xobjects",
    "pdf-stream-objects",
    "pdf-content-streams",
    "image-soft-masks",
    "image-masks",
    "dct-decode-jpeg",
    "pdf-color",
    "bits-per-component"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
