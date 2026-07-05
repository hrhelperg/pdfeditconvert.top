import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "separation-color",
  "h1": "Separation Color in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "Separation color space",
    "Separation colour space",
    "single-colorant color space",
    "PDF spot colorant space"
  ],
  "definition": "A Separation color space in PDF represents a single named colorant using one tint value, with an alternate color space and tint-transform function for fallback rendering.",
  "description": "In PDF, a Separation color space addresses one named colorant, such as a spot ink, through a tint value and an alternate-space fallback for on-screen display.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A Separation color space is one of the special color spaces defined in the PDF imaging model, alongside Indexed, Pattern, and DeviceN. Rather than mixing red, green, and blue or the four process inks, it lets a PDF address a single named colorant directly. When a Separation space is the current color space, a painting operation supplies just one number, a tint, that controls how much of that one colorant is applied.",
    "The space is written as an array with four parts: the keyword Separation, the colorant name, an alternate color space, and a tint-transform function. The colorant name identifies what the tint controls (for example, a specific spot ink). The alternate space and the function together tell a viewer or a device that lacks the colorant how to approximate the color, by converting each tint value into coordinates the alternate space can display.",
    "Separation color spaces are most closely associated with spot colors in print production, where a job carries an extra named ink beyond cyan, magenta, yellow, and black. They also underpin special behaviors such as marks that must appear on every plate. Understanding how the tint, the colorant name, and the fallback interact is central to predicting how a color-managed or print pipeline will reproduce the document."
  ],
  "sections": [
    {
      "heading": "How a Separation color space is defined",
      "body": [
        "A Separation color space is specified as an array of the form [/Separation name alternateSpace tintTransform]. The name is a PDF name object identifying the colorant the space stands for. The alternateSpace is any device or CIE-based color space, and tintTransform is a function that maps a tint value to color-component values in that alternate space. Because the definition is self-contained, a document can carry named colorants that a particular device may or may not have.",
        "When this space is active, color is a one-component value called a tint, ranging from 0.0 to 1.0. The convention is subtractive: 0.0 means none of the colorant is applied (typically the lightest result), while 1.0 requests the maximum concentration. This single-channel design is what distinguishes Separation from the multi-component device spaces such as DeviceRGB or DeviceCMYK."
      ]
    },
    {
      "heading": "The tint transform and the alternate space",
      "body": [
        "The tint-transform function exists so that a Separation color has a defined appearance even where the named colorant is unavailable. A processor evaluates the function on the current tint to produce values in the alternate space, which might be DeviceCMYK, DeviceRGB, or an ICC-based or Lab space. On a screen, in a proofing workflow, or on any device that does not carry the physical ink, this converted color is what gets shown.",
        "It is important to read the alternate space as a fallback rather than the definitive output. On a device that actually has the named colorant, that colorant is applied directly according to the tint, and the alternate representation is not used for imaging. This split between a device-independent approximation and the real colorant is what lets one PDF serve both an on-screen viewer and a press equipped with the spot ink."
      ]
    },
    {
      "heading": "Reserved colorant names: All and None",
      "body": [
        "Two colorant names carry special meaning. The name All refers collectively to every colorant available on the output device, including the standard process colorants. Painting in a Separation space whose colorant is All applies the tint to all colorants at once, which is how content that must print on every plate, such as registration marks, is expressed.",
        "The name None indicates that painting operations produce no visible marks on the page at all. It provides a way to place content that is effectively invisible in output while still existing as an object in the content stream. Both reserved names are part of the color-space mechanism itself, separate from the arbitrary colorant names used for spot inks."
      ]
    },
    {
      "heading": "Separation, DeviceN, and spot colors",
      "body": [
        "Separation handles exactly one colorant. Its generalization, DeviceN, describes a color space with several named colorants controlled together, so a Separation space can be viewed as the single-colorant case of the same family. Both share the pattern of naming colorants and supplying an alternate space with a tint-transform function for fallback rendering.",
        "In practice, a spot color in a PDF is most often carried as a Separation color space: the colorant name records the ink's identity, and the tint controls its strength, from a light tint to a solid. Whether that colorant ultimately prints as a distinct ink or is converted to process colors depends on the output device and the production settings, not on the color space alone."
      ]
    },
    {
      "heading": "Why it matters in print production",
      "body": [
        "Separation color spaces are a building block of professional print output. Because they preserve a colorant's identity rather than flattening it to a process mixture, they let prepress software decide later whether an ink stays as its own plate or is converted. They also interact with features such as overprint, where a spot color is intended to print on top of, rather than knock out, the colors beneath it.",
        "This is why Separation spaces feature prominently in print-oriented PDF workflows and standards. Preserving named colorants, their tints, and predictable fallbacks is exactly what a reliable press-ready file needs, and it is one of the details preflight tools examine when checking how a document's colors will reproduce."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Components",
      "value": "One value, a tint from 0.0 (no colorant) to 1.0 (maximum)"
    },
    {
      "label": "Definition",
      "value": "Array: [/Separation name alternateSpace tintTransform]"
    },
    {
      "label": "Reserved names",
      "value": "All (every colorant) and None (no visible marks)"
    },
    {
      "label": "Space family",
      "value": "A special color space, with Indexed, Pattern, and DeviceN"
    }
  ],
  "specification": {
    "iso": "ISO 32000 (PDF)",
    "typicalUsage": "Representing spot colors and isolating individual colorants in print-oriented PDFs.",
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4"
    ]
  },
  "misconceptions": [
    {
      "claim": "A Separation color space performs the CMYK color separation that splits artwork into printing plates.",
      "truth": "It names a single colorant and controls it with a tint; it is not the prepress operation that separates artwork into process plates, even though both concern separated inks."
    },
    {
      "claim": "The alternate color space is what actually prints.",
      "truth": "The alternate space and tint transform are a fallback for display or for devices lacking the colorant; a device that has the named colorant applies it directly from the tint."
    },
    {
      "claim": "Separation color and spot color mean exactly the same thing.",
      "truth": "Spot colors are the common use of Separation spaces, but Separation is the general PDF mechanism and can also isolate a process colorant or use the reserved names All and None."
    }
  ],
  "faq": [
    {
      "q": "What does the tint value in a Separation color space represent?",
      "a": "It is a single number from 0.0 to 1.0. The scale is subtractive, so 0.0 applies none of the colorant (the lightest result) and 1.0 requests its maximum concentration."
    },
    {
      "q": "How is a Separation color space different from DeviceN?",
      "a": "A Separation space controls exactly one named colorant. DeviceN generalizes the same idea to several named colorants managed together in one space, so Separation is effectively its single-colorant case."
    },
    {
      "q": "What is the alternate color space used for?",
      "a": "It provides a viewable approximation. A processor runs the tint through the tint-transform function to get color values in the alternate space whenever the device does not carry the named colorant."
    },
    {
      "q": "Does a Separation color always print as a separate ink?",
      "a": "Not necessarily. Whether the named colorant stays as its own plate or is converted to process colors depends on the output device and the production settings, not on the color space by itself."
    },
    {
      "q": "Why would a colorant be named All or None?",
      "a": "The reserved name All applies the tint to every colorant at once, which suits marks that must appear on all plates. None produces no visible output, giving a way to place content that does not mark the page."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "devicen-color",
      "spot-colors",
      "indexed-color",
      "pdf-patterns",
      "overprint"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4"
    ]
  },
  "seeAlso": [
    "spot-colors",
    "devicen-color",
    "pdf-color",
    "overprint",
    "devicecmyk",
    "color-management-in-pdf",
    "rendering-intent",
    "print-production-with-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
