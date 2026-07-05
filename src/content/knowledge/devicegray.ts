import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "devicegray",
  "h1": "DeviceGray Color in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "DeviceGray color space",
    "Gray color space",
    "grayscale color space in PDF",
    "single-component gray"
  ],
  "definition": "DeviceGray is a device-dependent PDF color space that describes each color with a single value from 0.0 (black) to 1.0 (white), used for grayscale images, black text, and monochrome graphics.",
  "description": "DeviceGray is PDF's single-component grayscale color space. Learn how its 0-to-1 values, the g and G operators, and its device dependence work.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "DeviceGray is the simplest color space defined in the PDF format. Instead of describing color with several channels, it uses just one number per color: a gray level that runs from black to white. That single value is enough to represent grayscale photographs, scanned documents, line art, and ordinary black text, which is why DeviceGray shows up in almost every PDF that contains monochrome content.",
    "It belongs to the family of device color spaces, alongside DeviceRGB and DeviceCMYK. The word device signals its defining trait: the color is interpreted relative to whatever screen or printer renders the page, with no built-in calibration. This makes DeviceGray compact and universally understood, but also means the exact shade of a given value can vary from one output device to another.",
    "Understanding DeviceGray helps explain how PDFs store grayscale efficiently, how black text is drawn, and when you might reach for a calibrated alternative such as CalGray or an ICC-based gray space when consistent tone actually matters."
  ],
  "sections": [
    {
      "heading": "How DeviceGray represents color",
      "body": [
        "DeviceGray describes every color it can express with a single numeric component. That value ranges from 0.0 to 1.0, where 0.0 is black, 1.0 is white, and everything in between is a progressively lighter shade of gray. Because only one number is required per color, DeviceGray is the most compact color space in PDF and maps naturally onto grayscale photographs, black text, and monochrome vector artwork.",
        "When DeviceGray is used for a raster image, the number of distinct gray levels available depends on the image's bits per component. A single bit yields a bilevel (pure black-or-white) image, eight bits yield 256 gray levels, and so on. In every case the samples are interpreted on the same scale, with the smallest value meaning black and the largest meaning white."
      ]
    },
    {
      "heading": "Setting DeviceGray in content streams",
      "body": [
        "Inside a page's content stream, two operators select DeviceGray and set a tone in one step: the lowercase g operator sets the gray level for nonstroking (fill) operations, and the uppercase G operator sets it for stroking (outline) operations. Each takes a single operand between 0 and 1. When a content stream begins, the graphics state is initialized to DeviceGray black for both stroking and nonstroking color, which is why unstyled text and paths render as solid black by default.",
        "For images, an image XObject can name /DeviceGray as its ColorSpace and then carries exactly one sample per pixel. The same space appears in inline images (the BI...ID...EI construct), where it is written using the abbreviated name /G. Because DeviceGray needs only one channel, storing grayscale content this way avoids the redundancy of encoding three identical RGB channels."
      ]
    },
    {
      "heading": "Device dependence and color management",
      "body": [
        "The Device prefix indicates that DeviceGray is uncalibrated: its values are passed to the output device without a characterization of what a given gray should actually look like. As a result, the same 0.5 value can appear as slightly different tones on different monitors or printers. For many documents this is perfectly acceptable, but it is a poor fit when precise, repeatable gray is required.",
        "When consistency matters, PDF offers calibrated alternatives. CalGray describes gray with a device-independent model, and a one-component ICC-based color space ties gray to an ICC profile. Print-oriented standards such as PDF/X connect device colors to an output intent so their appearance is defined, and a reader can also remap DeviceGray through a default color space (DefaultGray) entry. These are the color-managed paths that DeviceGray itself deliberately leaves open."
      ]
    },
    {
      "heading": "DeviceGray among the device color spaces",
      "body": [
        "DeviceGray is one of three device color spaces in PDF, sitting alongside DeviceRGB, which uses three components, and DeviceCMYK, which uses four. All three share the same uncalibrated character; they differ only in how many channels they carry and which imaging model they suit.",
        "The specification defines simple conversions between them. A DeviceGray value maps to DeviceRGB by copying the gray into all three channels, and to DeviceCMYK as zero cyan, magenta, and yellow with the black channel set to one minus the gray. Converting grayscale content into DeviceRGB therefore triples the per-pixel data with no visual benefit, which is a practical reason to keep genuinely gray content in DeviceGray."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Components",
      "value": "1 (a single grayscale value)"
    },
    {
      "label": "Value range",
      "value": "0.0 = black to 1.0 = white"
    },
    {
      "label": "Content operators",
      "value": "g (fill / nonstroking), G (stroke)"
    },
    {
      "label": "Inline image abbreviation",
      "value": "/G"
    }
  ],
  "specification": {
    "introduced": "PDF 1.0",
    "iso": "ISO 32000",
    "typicalUsage": "Grayscale images, black text, and monochrome vector graphics",
    "relatedStandards": [
      "pdf-x",
      "pdf-a"
    ]
  },
  "misconceptions": [
    {
      "claim": "In DeviceGray, 0 means white and 1 means black, like ink coverage.",
      "truth": "It is the reverse: 0.0 is black and 1.0 is white, following an intensity convention where higher values are lighter, unlike a single-ink coverage channel such as CMYK's K."
    },
    {
      "claim": "DeviceGray is calibrated, so a given gray looks identical everywhere.",
      "truth": "DeviceGray is device-dependent and uncalibrated. For consistent tone you use a calibrated space such as CalGray or a one-component ICC-based gray, or tie output to an output intent."
    },
    {
      "claim": "All grayscale images in a PDF must use DeviceGray.",
      "truth": "Single-channel gray content can also be encoded with CalGray, a one-component ICC-based space, or an Indexed space. DeviceGray is simply the uncalibrated default."
    }
  ],
  "faq": [
    {
      "q": "Does 0 mean black or white in DeviceGray?",
      "a": "0.0 means black and 1.0 means white, with intermediate values forming progressively lighter shades of gray. Higher numbers are always lighter."
    },
    {
      "q": "Which operators set a DeviceGray color in a content stream?",
      "a": "The lowercase g operator sets the fill (nonstroking) gray level and the uppercase G operator sets the stroke gray level. Each takes one operand between 0 and 1."
    },
    {
      "q": "How much data does a DeviceGray image use per pixel?",
      "a": "One sample per pixel, sized by the image's bits per component. At 8 bits per component that is a single byte per pixel, roughly a third of the data an equivalent DeviceRGB image would need."
    },
    {
      "q": "Is DeviceGray the same as the black K channel in CMYK?",
      "a": "No. DeviceGray is a full one-channel color space where the value is a lightness from black to white, whereas K in DeviceCMYK is one of four ink-coverage channels. They also run in opposite directions."
    },
    {
      "q": "When should I choose a calibrated gray space instead of DeviceGray?",
      "a": "When you need the same gray tone to reproduce predictably across devices, such as in color-managed print workflows. CalGray or a one-component ICC-based space provides that device independence."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "indexed-color",
      "image-xobjects",
      "pdf-graphics-state",
      "separation-color",
      "devicen-color"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-output-intent"
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
      }
    ]
  },
  "seeAlso": [
    "pdf-color",
    "devicergb",
    "devicecmyk",
    "calrgb-and-calgray",
    "icc-based-color",
    "color-management-in-pdf",
    "bits-per-component",
    "image-color-depth"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
