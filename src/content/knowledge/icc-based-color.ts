import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "icc-based-color",
  "h1": "ICC-Based Color in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "ICCBased color space",
    "ICC-based color space",
    "ICCBased",
    "ICC profile color space in PDF",
    "ICC color space"
  ],
  "definition": "ICC-based color is a PDF CIE-based color space that defines colors through an embedded ICC profile, making the values device-independent and suitable for color management.",
  "description": "An ICCBased color space defines PDF colors through an embedded ICC profile, giving device-independent, color-managed values for text, vector art and images.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF groups its color spaces into three broad families: device spaces such as DeviceRGB and DeviceCMYK, CIE-based spaces such as CalRGB, Lab and ICCBased, and special spaces such as Indexed and Separation. ICC-based color belongs to the CIE-based family. Instead of describing color with a handful of parameters, an ICCBased space carries a complete ICC profile embedded inside the document, and colors are interpreted through that profile.",
    "The point of an ICCBased color space is to remove ambiguity. In a plain device space, a set of numbers like an RGB triple has no fixed meaning on its own — the same values can look different on different monitors or presses. An ICC profile ties those numbers to a device-independent reference, so a color-managed reader knows exactly what color was intended and can reproduce it as faithfully as the output device allows.",
    "Because the profile travels inside the PDF, an ICCBased color space makes a file self-describing with respect to color. This is why ICC profiles sit at the heart of color-managed PDF workflows and of print-oriented standards such as PDF/X and PDF/A, which use ICC profiles to declare a document's intended output condition."
  ],
  "sections": [
    {
      "heading": "How an ICCBased Color Space Is Defined",
      "body": [
        "An ICCBased color space is written as a two-element array whose first element is the name /ICCBased and whose second element references a stream object. The stream's data is the ICC profile itself, embedded directly in the PDF. The stream dictionary carries an /N entry stating how many color components the space has — 1, 3, or 4 — and this must agree with the color space the embedded profile describes.",
        "Two optional entries complete the definition. /Alternate names a device color space to use when a reader cannot process the profile, and /Range bounds the component values. Because the profile is embedded rather than referenced externally, an ICCBased space is self-contained and does not depend on profiles installed on the viewing system, which is part of what makes such PDFs portable across machines."
      ]
    },
    {
      "heading": "The ICC Profile and the Profile Connection Space",
      "body": [
        "The embedded data follows the ICC profile format maintained by the International Color Consortium. A profile characterizes a device or color space: it describes how that space's component values relate to a device-independent reference called the Profile Connection Space, which is expressed in CIE XYZ or CIE L*a*b*. By mapping colors into and out of this common reference, a color-managed reader can interpret an ICCBased color unambiguously instead of treating raw numbers as if they meant the same thing everywhere.",
        "This is the core difference from DeviceRGB, DeviceGray, or DeviceCMYK. Device spaces hand numbers straight to the output device with no formal definition of what color those numbers represent, whereas an ICCBased space carries the definition with it. The number of components declared in /N must match the profile — for example a three-component RGB profile or a four-component CMYK profile."
      ]
    },
    {
      "heading": "Fallback Behavior and Rendering Intents",
      "body": [
        "Not every PDF consumer performs full color management. When a reader cannot use the embedded profile, it falls back to the /Alternate color space, or, if none is supplied, to a default device space chosen from /N: DeviceGray for one component, DeviceRGB for three, and DeviceCMYK for four. The alternate is only a substitute for viewers that skip color management — the embedded profile remains the authoritative definition of the color.",
        "When color is converted between spaces, a rendering intent governs how colors that fall outside the destination gamut are handled. The ICC model defines four intents — perceptual, relative colorimetric, saturation, and absolute colorimetric — and PDF lets a rendering intent be set in the graphics state so it can be carried into the color-management calculation."
      ]
    },
    {
      "heading": "Where ICC-Based Color Is Used",
      "body": [
        "ICCBased color spaces can be applied anywhere a PDF color space is expected: as fill and stroke colors for text and vector graphics, and as the color space of an image XObject. This lets a single, consistent color definition apply across every kind of mark on the page.",
        "ICC profiles also underpin the color standards built on PDF. PDF/X and PDF/A use an ICC profile to declare an output intent — a document-level statement of the intended printing or viewing condition. In print production, embedding ICC-based color is one of the ways a file communicates exactly which RGB or CMYK characterization its numbers were prepared for, reducing guesswork when the document is rendered on a different device."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "PDF 1.3"
    },
    {
      "label": "Syntax",
      "value": "Array: [/ICCBased stream]"
    },
    {
      "label": "Components (/N)",
      "value": "1, 3, or 4"
    },
    {
      "label": "Profile Connection Space",
      "value": "CIE XYZ or CIE L*a*b*"
    }
  ],
  "specification": {
    "introduced": "PDF 1.3",
    "iso": "Part of ISO 32000-1 and ISO 32000-2 (PDF)",
    "typicalUsage": "Device-independent, color-managed color for text, vector art, and images, and the basis for output intents in PDF/X and PDF/A.",
    "relatedStandards": [
      "pdf-x",
      "pdf-a",
      "pdf-output-intent",
      "rendering-intent"
    ]
  },
  "misconceptions": [
    {
      "claim": "ICCBased color is just another name for the CalRGB, CalGray, or Lab color spaces.",
      "truth": "All are CIE-based, but CalRGB, CalGray, and Lab are defined by a few parameters such as white point and gamma, while an ICCBased space carries a full embedded ICC profile that characterizes the color."
    },
    {
      "claim": "Using an ICCBased color space guarantees the color looks identical on every device.",
      "truth": "The profile makes the source color unambiguous, but the final appearance still depends on the output device's own profile and calibration and on the rendering intent used during conversion."
    },
    {
      "claim": "The /Alternate color space is what a reader normally displays.",
      "truth": "The alternate is only a fallback for consumers that cannot process the embedded profile; the ICC profile itself is the authoritative color definition."
    }
  ],
  "faq": [
    {
      "q": "How many color components can an ICCBased color space have?",
      "a": "One, three, or four, set by the /N entry, and the value must match the color space that the embedded ICC profile describes (for example gray, RGB, or CMYK)."
    },
    {
      "q": "Is the ICC profile stored inside the PDF or referenced externally?",
      "a": "It is embedded directly as a stream object, so the color definition travels with the document and does not rely on profiles installed on the viewing system."
    },
    {
      "q": "When did PDF gain ICCBased color spaces?",
      "a": "They were introduced in PDF 1.3 and remain part of the format through ISO 32000-1 and ISO 32000-2 (PDF 2.0)."
    },
    {
      "q": "Can images use an ICCBased color space?",
      "a": "Yes. An image XObject can name an ICCBased space as its color space, so sampled image data is interpreted through the embedded profile just like vector fills and strokes."
    },
    {
      "q": "How is an ICCBased color space different from an output intent?",
      "a": "Both use ICC profiles, but an ICCBased space defines the actual color values of objects, while an output intent is a document-level profile describing the intended printing or viewing condition."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "devicergb",
      "devicegray",
      "separation-color",
      "image-xobjects",
      "pdf-graphics-state"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4",
      "pdf-a",
      "pdf-a-1"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      }
    ]
  },
  "seeAlso": [
    "icc-profiles-in-pdf",
    "color-management-in-pdf",
    "pdf-color",
    "calrgb-and-calgray",
    "lab-color-in-pdf",
    "rendering-intent",
    "pdf-output-intent",
    "devicecmyk"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
