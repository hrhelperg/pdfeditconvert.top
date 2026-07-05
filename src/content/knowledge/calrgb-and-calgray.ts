import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "calrgb-and-calgray",
  "h1": "CalRGB and CalGray Color",
  "cluster": "graphics-color",
  "aliases": [
    "CalRGB color space",
    "CalGray color space",
    "Calibrated RGB and Gray in PDF",
    "CIE-based Cal color spaces"
  ],
  "definition": "CalRGB and CalGray are PDF's CIE-based, device-independent color spaces that describe calibrated RGB and grayscale by mapping component values to absolute CIE 1931 XYZ colour.",
  "description": "CalRGB and CalGray are CIE-based, device-independent PDF color spaces that anchor calibrated gray and RGB to absolute CIE 1931 XYZ values.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "CalGray and CalRGB are two of the CIE-based color spaces in the PDF imaging model. Unlike the device color spaces DeviceGray and DeviceRGB, they are device-independent: each color value is tied to a fixed, measurable point in the CIE 1931 XYZ color system rather than being left to whatever monitor or printer happens to render the file. CalGray describes a single calibrated gray channel, while CalRGB describes three calibrated channels for red, green, and blue.",
    "The difference from the device spaces is a small dictionary of calibration parameters. Where DeviceRGB simply hands raw component numbers to the output device, a Cal color space attaches a white point, an optional black point, a gamma, and — for CalRGB — a 3x3 matrix. Together these tell a color-managed viewer exactly which physical color a given set of numbers is meant to represent, so the same file can be reproduced consistently across displays and print devices.",
    "These spaces trace back to the CIE-based color model that PDF inherited from PostScript. In modern files, ICC-based color spaces (added in PDF 1.3) are the more common way to carry calibrated color, but CalGray and CalRGB remain valid, compact alternatives and are still defined in current PDF standards."
  ],
  "sections": [
    {
      "heading": "How CalGray and CalRGB Define Color",
      "body": [
        "Each space is written as a color space array whose second element is a parameter dictionary. CalGray takes a required WhitePoint (the reference white expressed as CIE XYZ, with its Y component equal to 1.0), an optional BlackPoint that defaults to [0 0 0], and an optional Gamma number that defaults to 1.0. To convert a single gray value in the range 0 to 1, that value is raised to the power of Gamma and then scaled toward the white point to yield CIE XYZ tristimulus values. The gamma parameter therefore lets the space model a non-linear tone response instead of a plain linear ramp.",
        "CalRGB uses the same WhitePoint and BlackPoint but adds two more parameters: Gamma is an array of three numbers (defaulting to [1 1 1]), one per channel, and Matrix is a nine-number 3x3 matrix (defaulting to the identity) that linearly combines the three decoded channels into CIE XYZ. Decoding raises each of the R, G, and B inputs to its own gamma, then applies the matrix to produce X, Y, and Z. Because the matrix columns effectively describe the chromaticities of the red, green, and blue primaries, CalRGB can characterise a specific RGB gamut rather than an unspecified device one."
      ]
    },
    {
      "heading": "Why Device Independence Matters",
      "body": [
        "A DeviceGray or DeviceRGB value has no fixed colorimetric meaning on its own — the same numbers can look different on every screen and printer because each device interprets them in its own way. CalGray and CalRGB remove that ambiguity by anchoring their values to CIE 1931 XYZ, a perceptual reference that does not depend on any device. That anchoring is what makes the color 'calibrated': a color management system can map the XYZ result onto any output device's own color space and reproduce the intended appearance.",
        "This is the same goal that Lab and ICC-based color spaces serve in PDF. All of them are CIE-based, meaning their values ultimately correspond to defined positions in a device-independent color model. CalGray and CalRGB are the lightweight members of that family: they express calibration with a handful of numbers instead of an embedded profile, which keeps the color space definition small at the cost of the richer tables and rendering behaviour an ICC profile can carry."
      ]
    },
    {
      "heading": "Origins and the Move to ICC-Based Color",
      "body": [
        "The CIE-based color model in PDF is derived from PostScript, which offered single-component and three-component CIE-based color spaces. PDF simplified those into the more constrained CalGray and CalRGB forms while keeping the essential idea: describe color by its relationship to CIE XYZ. They were part of PDF's device-independent color support well before ICC profiles were adopted.",
        "PDF 1.3 introduced ICC-based color spaces, which reference a full ICC profile and can express color characteristics that a white-point-and-matrix description cannot. In practice, most authoring tools now emit ICC-based spaces (or rely on a document output intent) rather than CalGray or CalRGB. The Cal spaces have not been removed, though — they remain defined CIE-based color spaces in the PDF standard, so conforming readers must still interpret them, and they can be a deliberately compact choice when a simple calibrated gray ramp or RGB gamut is all that is needed."
      ]
    },
    {
      "heading": "How They Appear Inside a PDF",
      "body": [
        "In a content stream a color space is either a name (for the device and pattern spaces) or an array (for the more structured spaces). CalGray and CalRGB are always arrays, for example [/CalGray << /WhitePoint [0.9505 1.0 1.089] /Gamma 2.2 >>] or [/CalRGB << /WhitePoint [0.9505 1.0 1.089] /Gamma [2.2 2.2 2.2] /Matrix [...] >>], where the sample white point shown corresponds roughly to D65. The array is normally registered under a name in a page's Resources /ColorSpace dictionary.",
        "Once registered, a content stream selects the space with the cs operator for non-stroking color or CS for stroking color, then sets component values with scn/SCN (or sc/SC). Because CalGray carries one component and CalRGB three, the operands after those operators match the channel count. Image XObjects can also reference a Cal color space as their ColorSpace entry so that sample data is interpreted colorimetrically."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Components",
      "value": "CalGray has one channel; CalRGB has three (R, G, B)."
    },
    {
      "label": "Colour model",
      "value": "CIE-based and device-independent, anchored to CIE 1931 XYZ."
    },
    {
      "label": "Required parameter",
      "value": "WhitePoint; BlackPoint, Gamma, and CalRGB's Matrix are optional with defaults."
    },
    {
      "label": "Syntax",
      "value": "Written as an array such as [/CalRGB << ... >>], never a bare name."
    }
  ],
  "specification": {
    "iso": "Defined within ISO 32000 (the PDF specification)",
    "introduced": "Part of PDF's CIE-based colour model since its early versions",
    "latestVersion": "Retained in ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Expressing calibrated, device-independent grayscale (CalGray) and RGB (CalRGB) in the PDF imaging model.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "CalRGB is just another name for sRGB.",
      "truth": "CalRGB is a general calibrated-RGB family defined by a white point, per-channel gamma, and a matrix. It can be tuned to approximate a space like sRGB, but it is not sRGB itself, which is typically carried as an ICC profile."
    },
    {
      "claim": "CalRGB and CalGray are device color spaces like DeviceRGB and DeviceGray.",
      "truth": "They are the opposite: CIE-based, device-independent spaces whose values map to absolute CIE XYZ, so their color meaning does not depend on the rendering device."
    },
    {
      "claim": "You must use CalRGB or CalGray to get color management in a PDF.",
      "truth": "Calibrated color is more often achieved through ICC-based color spaces or a document output intent. The Cal spaces are one valid option, not a requirement."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between CalGray and CalRGB?",
      "a": "CalGray defines a single calibrated gray channel, while CalRGB defines three calibrated channels for red, green, and blue. CalRGB additionally uses a per-channel gamma array and a 3x3 matrix, whereas CalGray uses a single gamma number."
    },
    {
      "q": "What does the WhitePoint parameter do?",
      "a": "WhitePoint gives the reference white as CIE XYZ coordinates, with its Y component set to 1.0. It is the anchor against which the other component values are interpreted, so it effectively sets the colorimetric reference for the whole space."
    },
    {
      "q": "Are CalRGB and CalGray still part of PDF 2.0?",
      "a": "Yes. They remain defined CIE-based color spaces in the current PDF standard, alongside Lab and ICC-based color, and conforming readers are expected to interpret them."
    },
    {
      "q": "Why do most PDFs use ICC-based color instead of CalRGB or CalGray?",
      "a": "ICC-based color spaces, added in PDF 1.3, reference full ICC profiles that can express color behaviour a white-point-and-matrix description cannot, and most tools emit them by default. Cal spaces are simpler and more compact but are less commonly generated."
    },
    {
      "q": "How is a CalRGB color space written in a PDF?",
      "a": "As a color space array, for example [/CalRGB << ...parameters... >>], usually registered under a name in a page's Resources /ColorSpace dictionary and then selected in the content stream with the cs or CS operator."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "devicecmyk",
      "pdf-graphics-state",
      "pdf-content-streams"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ]
  },
  "seeAlso": [
    "pdf-color",
    "devicergb",
    "devicegray",
    "lab-color-in-pdf",
    "icc-based-color",
    "color-management-in-pdf",
    "rendering-intent",
    "icc-profiles-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
