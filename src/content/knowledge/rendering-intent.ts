import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "rendering-intent",
  "h1": "Rendering Intents in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "Rendering intent",
    "Color rendering intent",
    "ICC rendering intent",
    "Gamut mapping intent"
  ],
  "definition": "A rendering intent is the instruction a PDF carries telling a color management system how to map colors — especially out-of-gamut ones — when converting them to a destination color space or device.",
  "description": "How PDF rendering intents (perceptual, saturation, relative and absolute colorimetric) tell a color engine to map out-of-gamut colors.",
  "searchIntent": "rendering",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a color specified in one color space has to be reproduced on a device whose range of reproducible colors (its gamut) differs from the source, some colors simply cannot be matched exactly. A monitor, a printing press, and a proofing system each reach a different set of colors, and where the source asks for something outside the destination's reach, a choice has to be made. A rendering intent is the piece of information that names which strategy to use when the color engine has to bridge that gap.",
    "In PDF, the rendering intent is part of the graphics state and is stored as a name that selects one of four well-known strategies defined by the International Color Consortium (ICC) color model — the same four intents used across color-managed publishing workflows. PDF does not invent its own gamut-mapping math; it references the ICC intents and leaves the actual color conversion to the viewer's or printer's color management system and the relevant ICC profiles.",
    "Because a rendering intent governs how colors are mapped rather than what colors are stored, it is one of the more subtle parts of PDF color. Its effect shows up mainly at the edges of a device's gamut — highly saturated colors, deep shadows, or brand colors a printer cannot hit — and it is closely tied to ICC-based color, output intents, and print production."
  ],
  "sections": [
    {
      "heading": "What a Rendering Intent Does",
      "body": [
        "Every color-managed conversion moves color values from a source color space, usually described by an ICC profile, to a destination described by another profile or by a device's own behavior. When the source contains colors that fall outside the destination gamut, the color management system must decide how to handle them: clip each one to the nearest reproducible color, compress the whole range so everything fits, or preserve some property such as vividness at the expense of exact hue. The rendering intent names which of these trade-offs to make.",
        "Crucially, this is an instruction to the color engine, not a transformation baked into the page content. The numeric color values in the PDF stay the same; the rendering intent only influences how those numbers are interpreted during a conversion. The same file can therefore look slightly different depending on the destination profile and the intent that is applied to it."
      ]
    },
    {
      "heading": "The Four Rendering Intents",
      "body": [
        "Perceptual compresses the source gamut to fit the destination while trying to preserve the visual relationships between colors, so an image still looks natural even though many individual colors shift; it is commonly chosen for photographs. Saturation favors keeping colors vivid over exact colorimetric accuracy, and is often used for charts, diagrams, and business graphics where punchy color matters more than fidelity.",
        "Relative colorimetric reproduces in-gamut colors accurately and clips out-of-gamut colors to the closest reproducible value, after adjusting for the difference between the source and destination media white points; it is widely used for general conversion and proofing. Absolute colorimetric behaves similarly but does not remap the white point — it reproduces colors relative to a fixed reference white, so it can simulate the paper white of one medium on another, which is mainly useful when a proof needs to emulate a specific output condition. Where two devices share the same gamut, the choice of intent may make no visible difference at all."
      ]
    },
    {
      "heading": "How PDF Records the Rendering Intent",
      "body": [
        "The rendering intent lives in the graphics state and can be set with the ri operator, whose single operand is one of the four intent names written as a PDF name object (Perceptual, Saturation, RelativeColorimetric, or AbsoluteColorimetric). It can also be set through the RI entry of a graphics state parameter dictionary — the ExtGState brought into effect by the gs operator. An image XObject may additionally carry its own Intent entry, which overrides the graphics-state rendering intent for that image alone.",
        "If a reader encounters a rendering intent name it does not recognize, the PDF specification directs it to fall back to RelativeColorimetric. Rendering intent affects reproduction only for color that actually passes through color management — for example ICC-based color, the CIE-based spaces (CalRGB, CalGray, and Lab), or device colors governed by a default color space or an output intent. For raw device color with no color management in play, the intent may have no effect."
      ]
    },
    {
      "heading": "Where Rendering Intent Fits in Color Management",
      "body": [
        "Rendering intent works hand in hand with, but is distinct from, the output intent used in standards such as PDF/X and PDF/A. An output intent identifies the target output condition — the destination ICC profile that describes the intended press or display — while the rendering intent decides how colors are fitted into that destination's gamut. One says where the color is going; the other says how it should be squeezed to fit.",
        "In print production this pairing matters most where a design uses colors outside the press gamut, such as bright RGB imagery destined for CMYK, or where a proof must emulate a specific printing condition. Because the visible result depends on the profiles involved and the capabilities of the rendering pipeline, the effect is workflow-specific. The PDF itself simply records the requested strategy and leaves the exact outcome to the color-managed system that ultimately displays or prints the page."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Four standard intents",
      "value": "Perceptual, Saturation, RelativeColorimetric, AbsoluteColorimetric"
    },
    {
      "label": "Set by",
      "value": "The ri operator, or the RI entry of a graphics state parameter dictionary (ExtGState)"
    },
    {
      "label": "Per-image override",
      "value": "An image XObject can specify its own Intent entry, overriding the graphics-state value for that image"
    },
    {
      "label": "Unknown-name fallback",
      "value": "A reader that does not recognize an intent name uses RelativeColorimetric"
    }
  ],
  "specification": {
    "introduced": "Part of PDF's ICC-based color model since early PDF versions.",
    "iso": "ISO 32000 (PDF)",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Choosing a gamut-mapping strategy for color-managed conversion, especially in print and proofing workflows.",
    "relatedStandards": [
      "pdf-output-intent",
      "icc-profiles-in-pdf",
      "pdf-x",
      "pdf-a"
    ]
  },
  "misconceptions": [
    {
      "claim": "Setting a rendering intent changes the colors stored in the PDF.",
      "truth": "It does not. A rendering intent is an instruction to the color management system about how to map colors during conversion; the color values recorded in the page content stay the same."
    },
    {
      "claim": "A rendering intent and an output intent are the same thing.",
      "truth": "They are related but distinct. An output intent identifies the destination profile or output condition (used in PDF/X and PDF/A), while the rendering intent selects the strategy for fitting colors into that destination's gamut."
    },
    {
      "claim": "The chosen rendering intent always visibly changes how a document looks.",
      "truth": "It only affects colors that pass through color management, and mainly those outside the destination gamut. For in-gamut colors, matching gamuts, or raw device color with no color management, it may produce no visible difference."
    }
  ],
  "faq": [
    {
      "q": "What are the four rendering intents in PDF?",
      "a": "Perceptual, Saturation, Relative Colorimetric, and Absolute Colorimetric. They come from the ICC color model, and PDF stores the selected one as a name object in the graphics state."
    },
    {
      "q": "How is a rendering intent set in a PDF?",
      "a": "It can be set in the content stream with the ri operator, or through the RI entry of a graphics state parameter dictionary applied by the gs operator. An image XObject can also carry an Intent entry that overrides the graphics-state value for that image."
    },
    {
      "q": "What happens if a viewer does not recognize the rendering intent name?",
      "a": "The PDF specification directs a reader that encounters an unrecognized intent name to fall back to RelativeColorimetric."
    },
    {
      "q": "Which intent suits photographs versus charts?",
      "a": "Perceptual is commonly chosen for photographs because it preserves overall visual relationships, while Saturation is often used for charts and business graphics where vivid color matters more than exact fidelity. The suitable choice depends on the source, the destination, and the goal of the conversion."
    },
    {
      "q": "Does rendering intent affect on-screen viewing or only printing?",
      "a": "It applies wherever a color-managed conversion happens, which can include both screen display and print output. Its influence is strongest when the destination gamut differs from the source and colors fall outside what the destination can reproduce."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "overprint",
      "spot-colors",
      "separation-color",
      "calrgb-and-calgray",
      "devicergb",
      "image-xobjects"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-a",
      "pdf-output-intent",
      "pdf-x-4"
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
    "color-management-in-pdf",
    "icc-based-color",
    "icc-profiles-in-pdf",
    "pdf-output-intent",
    "pdf-color",
    "pdf-graphics-state",
    "devicecmyk",
    "lab-color-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
