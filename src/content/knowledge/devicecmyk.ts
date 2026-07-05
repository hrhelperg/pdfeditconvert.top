import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "devicecmyk",
  "h1": "DeviceCMYK Color in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "CMYK color space",
    "DeviceCMYK color space",
    "process color (CMYK)",
    "four-color (CMYK) process"
  ],
  "definition": "DeviceCMYK is a device-dependent PDF color space that describes colors as four subtractive ink amounts — cyan, magenta, yellow, and black — each ranging from 0.0 to 1.0.",
  "description": "How the DeviceCMYK color space works in PDF: its four subtractive ink components, the k and K operators, and why it is device-dependent.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "DeviceCMYK is one of PDF's three device color spaces, alongside DeviceRGB and DeviceGray. It models color the way printing presses do — as amounts of cyan, magenta, yellow, and black ink laid down on paper. A color is given as four numbers, one per ink channel, each between 0.0 (no ink) and 1.0 (maximum ink).",
    "The word \"device\" is the important part: DeviceCMYK is device-dependent. The four numbers carry no fixed colorimetric meaning on their own, so the same values can look different from one printer, ink set, or paper stock to the next. This model was inherited from the PostScript imaging heritage that PDF is built on; it is compact and direct, but it is not color-managed by itself.",
    "Inside a page's content stream, DeviceCMYK color is set with the k and K operators or by selecting the space by name and then supplying components. Because it maps straight onto print inks, DeviceCMYK is central to print production and to print-focused standards, where accompanying data such as ICC profiles and output intents supply the characterization the raw numbers lack."
  ],
  "sections": [
    {
      "heading": "How DeviceCMYK Represents Color",
      "body": [
        "DeviceCMYK uses the subtractive color model of physical inks. Each of the four components states how much of one ink to apply, from 0.0 to 1.0. Because inks absorb (subtract) light rather than emit it, more ink means a darker, more saturated result. This is the reverse of an additive screen model such as DeviceRGB, where higher values mean more emitted light.",
        "A practical consequence is that 0 0 0 0 in DeviceCMYK means no ink at all, which shows as the underlying paper — effectively white — while 0 0 0 1 is solid black from the black plate alone. The fourth channel, K (\"key\"), exists because layering cyan, magenta, and yellow to make black is imprecise and ink-heavy; a dedicated black plate gives cleaner text and deep shadows, and lets \"rich black\" combine K with some C, M, and Y."
      ]
    },
    {
      "heading": "Setting DeviceCMYK in a Content Stream",
      "body": [
        "PDF provides shortcut operators for this space. The lowercase k operator sets the nonstroking (fill) color and uppercase K sets the stroking color, each taking four operands in the order cyan, magenta, yellow, black. A single operator both selects DeviceCMYK as the current color space and sets the color, so an instruction like 0.1 0 0.2 0.4 k fills subsequent marks with that ink mixture.",
        "The same result can be reached the longer way by naming the space: selecting DeviceCMYK with the cs (nonstroking) or CS (stroking) operator and then supplying the four components with scn or SCN. Either way, the chosen color becomes part of the graphics state and applies to text, vector fills, and strokes until it is changed."
      ]
    },
    {
      "heading": "Why It Is Device-Dependent",
      "body": [
        "DeviceCMYK has no built-in link to a standard reference like the CIE color model, so the numbers describe ink quantities rather than a measurable appearance. What those quantities actually look like depends on the specific device: the pigments, the paper, dot gain, and how the imaging system interprets the values. This is why DeviceCMYK is called device-dependent and contrasts with colorimetric spaces such as ICC-based color or Lab color, which anchor color to a defined appearance.",
        "So that CMYK content can still be shown on hardware that has no CMYK path, such as an RGB monitor or a grayscale printer, PDF defines a default conversion from DeviceCMYK to the other device spaces. That conversion is only an approximation; an accurate preview or reliable cross-device match requires color management, typically by attaching an ICC profile or, for a whole document, an output intent."
      ]
    },
    {
      "heading": "DeviceCMYK in Print Production",
      "body": [
        "Because presses print with cyan, magenta, yellow, and black inks, DeviceCMYK is the natural way to specify process color for print. Specifying color directly in the ink space avoids an extra conversion at output time, which is one reason print-oriented PDF workflows and standards in the PDF/X family lean on it. To make device-dependent CMYK predictable, those workflows pair it with an output intent that identifies the intended printing condition, effectively supplying the characterization the raw numbers lack.",
        "DeviceCMYK covers the standard four process inks, but not custom or named inks. Extra plates such as varnishes, metallics, or brand spot colors are handled by the Separation and DeviceN color spaces instead. DeviceCMYK also interacts with print features like overprint, which controls whether one ink prints on top of another or knocks it out."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Components",
      "value": "Cyan, magenta, yellow, black — four channels, each from 0.0 to 1.0"
    },
    {
      "label": "Color model",
      "value": "Subtractive; 0 0 0 0 means no ink (paper/white), higher values add ink"
    },
    {
      "label": "Content-stream operators",
      "value": "k sets the nonstroking (fill) color; K sets the stroking color"
    },
    {
      "label": "Color management",
      "value": "Device-dependent — no fixed colorimetric definition without a profile or output intent"
    }
  ],
  "misconceptions": [
    {
      "claim": "In DeviceCMYK, 0 0 0 0 is black, the same as 0 0 0 in RGB.",
      "truth": "It is the opposite: 0 0 0 0 means no ink, so it shows as the paper (white). Solid black is 0 0 0 1, and \"rich black\" adds some cyan, magenta, and yellow under the black."
    },
    {
      "claim": "The same DeviceCMYK values print identically on every device.",
      "truth": "DeviceCMYK is device-dependent. The same numbers shift with the press, ink set, and paper unless the printing condition is characterized by an ICC profile or an output intent."
    },
    {
      "claim": "The K in CMYK is just the last letter of the word \"black\".",
      "truth": "K stands for the key plate — historically the plate the other colors were aligned (keyed) to, which is the black plate."
    }
  ],
  "faq": [
    {
      "q": "How is DeviceCMYK selected inside a PDF content stream?",
      "a": "The k operator sets a nonstroking CMYK color and K sets a stroking one, each taking four operands; both choose DeviceCMYK and set the color at once. Equivalently, you can select the space by name with cs or CS and then set components with scn or SCN."
    },
    {
      "q": "How does an RGB screen display DeviceCMYK color?",
      "a": "The viewer converts the four ink values to RGB for display. PDF defines a default conversion for devices without a CMYK path, but it is approximate; an accurate on-screen match relies on color management and ICC profiles."
    },
    {
      "q": "What is the difference between DeviceCMYK and ICC-based CMYK?",
      "a": "DeviceCMYK has no attached profile, so its numbers are unmanaged ink amounts. ICC-based color binds the same four channels to a characterized profile, giving the values a defined, reproducible appearance."
    },
    {
      "q": "Is DeviceCMYK the same thing as spot colors?",
      "a": "No. DeviceCMYK is process color built from four fixed inks. Spot or named inks — varnishes, metallics, brand colors — are represented with the Separation or DeviceN color spaces instead."
    },
    {
      "q": "Why do print PDFs often use CMYK instead of RGB?",
      "a": "Presses image with cyan, magenta, yellow, and black inks, so specifying color directly in the ink space avoids an extra conversion at output. Because DeviceCMYK is device-dependent, print workflows add an output intent to define the target printing condition."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "devicen-color",
      "lab-color-in-pdf",
      "icc-profiles-in-pdf",
      "rendering-intent",
      "pdf-graphics-state",
      "print-production-with-pdf"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-1a",
      "pdf-output-intent"
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
    "devicergb",
    "devicegray",
    "icc-based-color",
    "separation-color",
    "spot-colors",
    "color-management-in-pdf",
    "overprint"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
