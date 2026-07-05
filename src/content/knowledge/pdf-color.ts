import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-color",
  "h1": "Color Spaces in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "PDF color spaces",
    "color models in PDF",
    "PDF color model",
    "color space families in PDF"
  ],
  "definition": "A color space in PDF is the model that tells a viewer how to interpret a color's numeric components — as gray, RGB, CMYK, or device-independent CIE color.",
  "description": "PDF describes color through color spaces — device spaces like DeviceRGB and DeviceCMYK, CIE-based spaces, and special spaces such as Indexed and Separation.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every colored mark in a PDF — a line of text, a filled shape, a photograph — is stored as one or more numbers. On their own those numbers are ambiguous: is 1, 0, 0 pure red, the cyan channel of a print color, or an index into a palette? A color space is the piece of information that resolves the ambiguity. It tells a PDF viewer how many components a color has and what model to use when turning those components into the color you actually see.",
    "PDF inherits its color model from PostScript and organizes color spaces into a few families. Device color spaces (DeviceGray, DeviceRGB, DeviceCMYK) describe color directly in the terms an output device understands. CIE-based color spaces (CalGray, CalRGB, Lab, and ICC-based) describe color in a device-independent way anchored to human vision. Special color spaces (Indexed, Separation, DeviceN, and Pattern) build on the others to handle palettes, printing inks, and repeating fills.",
    "Because color spaces are declared explicitly, a single document can mix them freely — RGB graphics for the screen, grayscale body text, and CMYK images destined for a printing press can all coexist in one file. Understanding which space an object uses is the starting point for everything else in PDF color, from color management and rendering intents to overprint and transparency."
  ],
  "sections": [
    {
      "heading": "The three families of PDF color spaces",
      "body": [
        "PDF groups color spaces into device, CIE-based, and special families. The device family — DeviceGray, DeviceRGB, and DeviceCMYK — specifies color as one, three, or four numbers that map directly to a device's gray level, red/green/blue components, or cyan/magenta/yellow/black inks. These spaces are simple and compact, but their appearance depends on whatever device renders them.",
        "The CIE-based family — CalGray, CalRGB, Lab, and ICC-based color — describes color independently of any single device, using models rooted in the CIE standard for human color perception. ICC-based color is the most widely used of these: it attaches an ICC profile that characterizes precisely what the numbers mean. The special family — Indexed, Separation, DeviceN, and Pattern — is built on top of a base space to express palettes, named printing colorants, and tiling or shading fills."
      ]
    },
    {
      "heading": "How a color space is declared and selected",
      "body": [
        "Simple device spaces can be named directly in a content stream, while more elaborate spaces (ICC-based, Indexed, Separation, and so on) are written as array objects and registered in the ColorSpace subdictionary of a page's or XObject's resource dictionary. Content then refers to them by name.",
        "Inside a content stream, dedicated operators load a color space and its values into the graphics state. The operators cs and CS select the nonstroking and stroking color space; sc/SC and scn/SCN set color values within it. Convenience operators combine both steps for the common device spaces: g/G for DeviceGray, rg/RG for DeviceRGB, and k/K for DeviceCMYK. Component values are usually written as decimals, most often from 0.0 to 1.0."
      ]
    },
    {
      "heading": "Device-dependent versus device-independent color",
      "body": [
        "The practical difference between the families is predictability. A DeviceRGB triple such as 1, 0, 0 tells the output device to paint full red, but the exact red depends on that device's characteristics, so the same PDF can look different on two monitors or two printers. Device spaces are efficient and universally supported, which is why they dominate everyday documents.",
        "CIE-based spaces trade a little size and complexity for consistency. By anchoring numbers to a model of human vision — and, for ICC-based color, to a specific embedded profile — they let a color be reproduced faithfully across devices that honor the profile. This is the foundation of color management in PDF, and it matters most in print production and archiving, where color accuracy is part of the deliverable."
      ]
    },
    {
      "heading": "Special color spaces for palettes and print",
      "body": [
        "Indexed color spaces store a small palette in a lookup table and reference entries by integer index, which can dramatically shrink images that use only a few distinct colors. Separation and DeviceN spaces represent one or several named colorants — the mechanism behind spot colors and custom inks — rather than process channels, so a PDF can carry, for example, a specific brand ink alongside CMYK.",
        "The Pattern color space is different again: instead of a flat color it paints with a repeating tile or a smooth shading. Together these special spaces let PDF express color that plain device numbers cannot, which is why print-oriented standards such as PDF/X pay close attention to how they are used."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Device spaces",
      "value": "DeviceGray, DeviceRGB, DeviceCMYK"
    },
    {
      "label": "CIE-based spaces",
      "value": "CalGray, CalRGB, Lab, ICC-based"
    },
    {
      "label": "Special spaces",
      "value": "Indexed, Separation, DeviceN, Pattern"
    },
    {
      "label": "Typical value range",
      "value": "Decimal components, most often 0.0 to 1.0"
    }
  ],
  "specification": {
    "introduced": "Inherited from PostScript; part of PDF since its earliest versions",
    "typicalUsage": "Color spaces underpin every colored mark in a PDF; print and archival workflows rely on ICC-based, Separation, and DeviceN spaces for predictable, device-independent color.",
    "relatedStandards": [
      "pdf-x",
      "pdf-a"
    ]
  },
  "misconceptions": [
    {
      "claim": "RGB and CMYK are the only color options in a PDF.",
      "truth": "PDF also supports grayscale, device-independent CIE-based spaces (CalGray, CalRGB, Lab, ICC-based), and special spaces such as Indexed, Separation, DeviceN, and Pattern."
    },
    {
      "claim": "The same DeviceRGB values look identical on every screen and printer.",
      "truth": "Device color spaces are interpreted relative to the output device, so identical numbers can render differently unless color management through ICC-based color is applied."
    },
    {
      "claim": "A color space and a color profile are the same thing.",
      "truth": "A color space defines the model and number of components; an ICC profile characterizes a specific device's behavior, and PDF ties the two together through ICC-based color."
    }
  ],
  "faq": [
    {
      "q": "How does a PDF know which color space a color uses?",
      "a": "The space is either named directly (like DeviceRGB) or listed in the page's or XObject's ColorSpace resource subdictionary, and content-stream operators select it before any colors are painted."
    },
    {
      "q": "Can one PDF mix several color spaces?",
      "a": "Yes. Different objects, images, and pages can each use a different space, so one document commonly combines RGB screen graphics, grayscale text, and CMYK print images."
    },
    {
      "q": "What numeric range do PDF color values use?",
      "a": "Components are generally decimal numbers, most often from 0.0 to 1.0, though Indexed spaces use integer indices into a palette and Lab uses its own component ranges."
    },
    {
      "q": "Which color space suits print work?",
      "a": "Print production typically relies on CMYK, ICC-based, or Separation color so output matches press conditions, while screen-only documents often stay in RGB."
    },
    {
      "q": "Do color spaces affect file size?",
      "a": "They can. An Indexed space with a small palette can shrink image data, while embedding ICC profiles adds some overhead in exchange for device-independent accuracy."
    }
  ],
  "graph": {
    "childConcepts": [
      "devicergb",
      "devicecmyk",
      "devicegray",
      "calrgb-and-calgray",
      "lab-color-in-pdf",
      "icc-based-color",
      "icc-profiles-in-pdf",
      "indexed-color",
      "separation-color",
      "devicen-color",
      "spot-colors",
      "color-management-in-pdf",
      "rendering-intent",
      "overprint",
      "pdf-transparency",
      "transparency-groups",
      "blend-modes",
      "soft-masks",
      "pdf-graphics-state",
      "pdf-vector-graphics",
      "clipping-paths",
      "pdf-shadings",
      "pdf-patterns",
      "image-xobjects",
      "form-xobjects"
    ],
    "relatedConcepts": [
      "image-color-depth"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-a"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ]
  },
  "seeAlso": [
    "devicergb",
    "devicecmyk",
    "devicegray",
    "icc-based-color",
    "indexed-color",
    "separation-color",
    "color-management-in-pdf",
    "rendering-intent"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
