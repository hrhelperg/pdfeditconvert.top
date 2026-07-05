import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "devicergb",
  "h1": "DeviceRGB Color in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "DeviceRGB color space",
    "RGB color space in PDF",
    "device-dependent RGB",
    "additive RGB color"
  ],
  "definition": "DeviceRGB is PDF's additive, device-dependent color space that sets colors as red, green, and blue values from 0 to 1, reproduced directly by the output device with no color management.",
  "description": "Learn how DeviceRGB defines red, green, and blue color values in PDF, why it is device-dependent, and how it compares to DeviceCMYK and ICC-based color.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "DeviceRGB is one of the three device color spaces built into the PDF imaging model, alongside DeviceGray and DeviceCMYK. It describes a color using three additive components — red, green, and blue — each expressed as a real number from 0.0 to 1.0. Because these three primaries are added together as light, (0, 0, 0) produces black and (1, 1, 1) produces white, which mirrors how displays emit color.",
    "The word \"Device\" signals the defining trait of this space: it is device-dependent and carries no calibration data. PDF does not attach an ICC profile or white point to DeviceRGB values, so a viewer or printer interprets them directly using whatever the output hardware happens to do. The same red-green-blue triple can therefore look noticeably different from one screen or printer to the next, because the numbers are not tied to any absolute, measurable color.",
    "In a content stream, DeviceRGB is used through short painting operators or the general color-space operators. It applies to any drawing operation where a color is chosen — vector fills and strokes, text, and images — which makes it one of the most commonly encountered color spaces in everyday PDFs, especially those created for on-screen reading."
  ],
  "sections": [
    {
      "heading": "How DeviceRGB Represents Color",
      "body": [
        "DeviceRGB is an additive model: red, green, and blue components combine like colored light rather than like mixed inks. Each component is a number in the range 0.0 to 1.0, so mid-gray is roughly (0.5, 0.5, 0.5), pure red is (1, 0, 0), and yellow is red plus green, (1, 1, 0). This is a common source of confusion for people used to web or image tools, where RGB is written as 0–255 integers; in a PDF content stream the operator values are real numbers from 0 to 1.",
        "Two shorthand operators cover the most frequent cases: rg sets the fill (nonstroking) color and RG sets the stroke color, each taking three operands. DeviceRGB can also be selected explicitly with the cs (nonstroking) or CS (stroking) operators using the name DeviceRGB, after which sc/scn or SC/SCN supply the component values. In image data the same additive interpretation applies, but stored samples are integers whose size is set by the bits-per-component value and are decoded onto the 0-to-1 range."
      ]
    },
    {
      "heading": "Why DeviceRGB Is Device-Dependent",
      "body": [
        "Because DeviceRGB values carry no profile, PDF treats them as instructions to the output device rather than as absolute colors. A monitor with a wide gamut and a phone screen with a narrower one will both accept (1, 0, 0) and each will display the most saturated red it can — but those two reds are not the same physical color. This is the practical meaning of \"device-dependent\": the appearance is defined by the hardware, not by the file.",
        "PDF does provide an optional path to color management for these values. A resource dictionary can include a ColorSpace subdictionary with a DefaultRGB entry that substitutes a CIE-based space — such as CalRGB or an ICC-based space — in place of DeviceRGB. When present, a color-managed consumer uses that calibrated substitute so the colors become reproducible. Without such a substitution, DeviceRGB remains uncalibrated and its rendering is left to the viewer and device."
      ]
    },
    {
      "heading": "DeviceRGB Compared With Other PDF Color Spaces",
      "body": [
        "Within the device family, DeviceGray uses a single component and DeviceCMYK uses four subtractive components (cyan, magenta, yellow, and black) intended for ink on paper. DeviceRGB sits between them as the natural choice for anything viewed as emitted light. All three are uncalibrated; if reproducible color matters, the CIE-based spaces — CalRGB, Lab, and ICC-based color — describe color in device-independent terms instead.",
        "A useful way to frame the choice is by destination. DeviceRGB fits screen-oriented documents, web-destined files, and general office PDFs where the audience reads on a display. DeviceCMYK and calibrated workflows fit commercial print, where separations and ink limits matter. DeviceRGB is not a lower-quality option — it is simply anchored to additive, screen-style output rather than to a measured color reference."
      ]
    },
    {
      "heading": "DeviceRGB, Print Workflows, and PDF Standards",
      "body": [
        "Because DeviceRGB is uncalibrated, several PDF sub-standards constrain how it may appear. PDF/X, aimed at reliable print exchange, generally expects color to be either process ink (such as CMYK) or accompanied by an output intent that pins down how device values should be interpreted; the strictest PDF/X profiles are CMYK-centered and do not accommodate uncalibrated RGB. PDF/A, aimed at long-term archiving, similarly expects device-dependent color to be paired with the color-management information needed to reproduce it consistently over time.",
        "This does not make DeviceRGB \"wrong\" for those standards so much as incomplete on its own. Conforming files typically pin the color down — through an output intent, a DefaultRGB substitution, or by converting to a calibrated space — so that a future reader interprets the numbers the same way the author did. For screen-only distribution outside those standards, plain DeviceRGB is ordinary and widely supported."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Components",
      "value": "Three — red, green, and blue, each a value from 0.0 to 1.0"
    },
    {
      "label": "Color model",
      "value": "Additive: (0, 0, 0) is black and (1, 1, 1) is white"
    },
    {
      "label": "Content operators",
      "value": "rg (fill) and RG (stroke), or the general cs/scn form with the name DeviceRGB"
    },
    {
      "label": "Availability",
      "value": "A built-in device color space usable without a resource-dictionary entry"
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "typicalUsage": "Screen-oriented and general-purpose PDFs whose colors are viewed on displays rather than sent through color-managed print output",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The same DeviceRGB values look identical on every screen and printer.",
      "truth": "DeviceRGB is device-dependent and carries no profile, so identical values can render differently across displays and printers; consistent output requires a calibrated or ICC-based color space."
    },
    {
      "claim": "DeviceRGB must be declared in a resource dictionary before it can be used.",
      "truth": "DeviceRGB is one of the built-in device color spaces and can be selected directly in a content stream — for example with rg, RG, or cs — without any resource entry."
    },
    {
      "claim": "DeviceRGB applies only to images.",
      "truth": "It governs any painting operation, including vector fills and strokes and text, anywhere a color is chosen — not just raster image data."
    }
  ],
  "faq": [
    {
      "q": "What operators set DeviceRGB color in a PDF?",
      "a": "The shorthand operators rg (fill) and RG (stroke) each take three values. You can also select the space explicitly with cs or CS using the name DeviceRGB, then supply components with sc/scn or SC/SCN."
    },
    {
      "q": "What number range do DeviceRGB values use?",
      "a": "In a content stream each component is a real number from 0.0 to 1.0, not a 0–255 integer. Image samples are stored as integers whose size depends on bits-per-component and are decoded onto that 0-to-1 range."
    },
    {
      "q": "Can DeviceRGB be color-managed?",
      "a": "Indirectly. A resource dictionary can include a DefaultRGB entry in its ColorSpace subdictionary that substitutes a CIE-based space, such as CalRGB or an ICC-based space, so color-managed viewers interpret the values consistently. Without it, DeviceRGB stays uncalibrated."
    },
    {
      "q": "How does DeviceRGB differ from DeviceCMYK?",
      "a": "DeviceRGB is additive with three components (red, green, blue) suited to emitted light on screens; DeviceCMYK is subtractive with four components (cyan, magenta, yellow, black) suited to ink on paper. Both are uncalibrated device color spaces."
    },
    {
      "q": "Is DeviceRGB a good fit for commercial printing?",
      "a": "Print exchange workflows generally rely on CMYK or on calibrated color pinned down by an output intent. DeviceRGB is oriented to screen viewing, so print-focused standards such as PDF/X constrain or convert uncalibrated RGB rather than passing it through directly."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "indexed-color",
      "image-color-depth",
      "bits-per-component",
      "image-xobjects",
      "pdf-content-streams"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-a",
      "pdf-x"
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
    "pdf-color",
    "devicecmyk",
    "devicegray",
    "calrgb-and-calgray",
    "icc-based-color",
    "color-management-in-pdf",
    "rendering-intent",
    "pdf-graphics-state"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
