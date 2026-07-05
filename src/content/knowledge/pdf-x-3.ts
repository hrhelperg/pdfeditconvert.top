import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-x-3",
  "h1": "PDF/X-3",
  "cluster": "standards",
  "aliases": [
    "PDF/X-3:2002",
    "PDF/X-3:2003",
    "ISO 15930-3",
    "ISO 15930-6"
  ],
  "definition": "PDF/X-3 is a PDF/X print-exchange standard that permits color-managed, device-independent color (via ICC profiles and an output intent) in addition to CMYK, grayscale, and spot colors.",
  "description": "PDF/X-3 is an ISO 15930 print-exchange PDF profile that allows ICC-based, device-independent color alongside CMYK and spot colors, backed by a required output intent.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/X-3 is one of the conformance profiles in the PDF/X family, a group of PDF subsets designed for reliable graphic-arts and prepress exchange. Like the rest of the family, it constrains a normal PDF so that a file handed from a designer to a printer contains everything needed to reproduce the pages predictably, with no missing fonts, no external image links, and no ambiguous settings that could shift between systems.",
    "What sets PDF/X-3 apart within the family is its treatment of color. Where the stricter PDF/X-1a profile insists that every color already be expressed in the final device colors (CMYK, grayscale, or named spot colors), PDF/X-3 also allows device-independent, color-managed color: ICC-based colors, calibrated RGB, and CIELAB values. It relies on embedded ICC profiles together with a declared output intent so that this color can be converted to the target printing condition in a controlled way rather than guessed at.",
    "PDF/X-3 belongs to the ISO 15930 series and sits alongside PDF/X-1a as a same-generation sibling rather than a later replacement. The profile that superseded this generation for modern workflows is PDF/X-4, which added native (live) transparency and layer support that PDF/X-3 does not permit."
  ],
  "sections": [
    {
      "heading": "How PDF/X-3 handles color",
      "body": [
        "The central idea of PDF/X-3 is a color-managed exchange. A file may carry color in device spaces such as DeviceCMYK, DeviceGray, and named separations (spot colors), and it may also carry device-independent color: ICC-based color, calibrated RGB, and CIELAB. Because a raw RGB or Lab value has no fixed meaning on press by itself, PDF/X-3 requires that such color be accompanied by the information needed to interpret it. Embedded ICC profiles describe the source color, and the file's output intent describes the intended printing condition.",
        "The output intent is what makes this workable. It identifies the characterized printing condition the file was prepared for, typically by referencing an ICC output profile or a registered characterization name. A receiving system can then convert device-independent color into the final output space consistently, instead of each application applying its own assumptions. This is why PDF/X-3 is often described as suited to color-managed print workflows, in contrast to the fully pre-converted, blind-exchange approach of PDF/X-1a."
      ]
    },
    {
      "heading": "What a PDF/X-3 file requires",
      "body": [
        "Beyond its color rules, PDF/X-3 imposes the same kind of completeness constraints that define the PDF/X family. All fonts used in the document must be embedded, so text cannot fall back to substituted glyphs on another machine. The high-resolution content must be present in the file itself rather than referenced externally, making the exchange self-contained. A defined output intent is mandatory, and the finished-page geometry must be described using page boxes such as the TrimBox (or ArtBox) so the trimmed page size is unambiguous.",
        "The profile also forbids features that would undermine a predictable print. Encryption is not allowed, since a locked file cannot be reliably processed downstream, and interactive elements such as forms, JavaScript, and certain annotations are excluded or must sit outside the printable area. Transparency must be flattened: PDF/X-3 does not support live transparency, so any blending or soft-masking has to be resolved into opaque page content before the file conforms."
      ]
    },
    {
      "heading": "PDF/X-3 compared with PDF/X-1a",
      "body": [
        "The clearest way to understand PDF/X-3 is against its sibling PDF/X-1a. Both share the same goals of embedded fonts, self-contained content, a required output intent, and no encryption. The difference is the color model. PDF/X-1a is a blind exchange: everything must already be in CMYK, grayscale, or spot color, so the appearance is fully determined by the file and there is nothing left to color-manage. PDF/X-3 is a superset that keeps those options but additionally permits color-managed, device-independent color.",
        "That distinction drives when each is chosen. A workflow that wants complete, deterministic control and no reliance on downstream color conversion may prefer the tighter constraints of PDF/X-1a. A workflow that benefits from ICC-based color management, where the same file can be converted to a characterized printing condition, fits the PDF/X-3 model. Neither is a strict upgrade of the other; they express two different philosophies of print exchange from the same era of the standard."
      ]
    },
    {
      "heading": "Where PDF/X-3 fits in the standards family",
      "body": [
        "PDF/X-3 is defined within the ISO 15930 series that standardizes the PDF/X profiles, and it was published in the early 2000s. Its editions were built on the PDF imaging model of their time, and later work in the family moved on rather than revising PDF/X-3 itself. In particular, PDF/X-4 introduced support for live transparency and optional-content layers, capabilities deliberately absent from PDF/X-3.",
        "For that reason PDF/X-3 is best understood as a recognized, still-referenced print-exchange target from the color-managed generation of PDF/X, while newer print workflows frequently standardize on PDF/X-4. Understanding PDF/X-3 also clarifies the broader family: the output intent, embedded fonts, and completeness rules it shares with the others are the recurring building blocks of every PDF/X profile."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard family",
      "value": "Part of the PDF/X print-exchange family, standardized under ISO 15930"
    },
    {
      "label": "Defining feature",
      "value": "Permits color-managed, device-independent color (ICC-based, calibrated RGB, CIELAB) as well as CMYK, grayscale, and spot"
    },
    {
      "label": "Fonts",
      "value": "All fonts used must be embedded"
    },
    {
      "label": "Output intent",
      "value": "A defined output intent describing the printing condition is required"
    }
  ],
  "specification": {
    "iso": "ISO 15930-3 (PDF/X-3:2002); later ISO 15930-6 (PDF/X-3:2003)",
    "introduced": "Early 2000s",
    "latestVersion": "PDF/X-3:2003",
    "typicalUsage": "Color-managed prepress exchange for offset and digital print production",
    "relatedStandards": [
      "pdf-x",
      "pdf-x-1a",
      "pdf-x-4",
      "pdf-output-intent"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF/X-3 lets you send plain RGB and it will print correctly anywhere.",
      "truth": "It permits device-independent color only when paired with ICC profiles and a declared output intent so color can be converted predictably to the target printing condition; it is not a free pass for uncontrolled RGB."
    },
    {
      "claim": "PDF/X-3 is simply a newer version of PDF/X-1a.",
      "truth": "They are same-generation siblings, not a sequence. PDF/X-3 is a superset that adds color-managed color; the later generation is PDF/X-4."
    },
    {
      "claim": "PDF/X-3 supports live transparency.",
      "truth": "No. PDF/X-3 requires transparency to be flattened; native transparency and layers were introduced with PDF/X-4."
    }
  ],
  "faq": [
    {
      "q": "What is the main difference between PDF/X-3 and PDF/X-1a?",
      "a": "The color model. PDF/X-1a requires everything to be in final device colors (CMYK, grayscale, or spot), while PDF/X-3 also allows color-managed, device-independent color such as ICC-based color, calibrated RGB, and CIELAB."
    },
    {
      "q": "Does PDF/X-3 require an output intent?",
      "a": "Yes. A defined output intent that identifies the intended printing condition is mandatory, and it is what allows device-independent color to be converted consistently to the output space."
    },
    {
      "q": "Can a PDF/X-3 file use spot colors?",
      "a": "Yes. Named spot (separation) colors are allowed, along with CMYK and grayscale, in addition to the device-independent color that distinguishes PDF/X-3 from PDF/X-1a."
    },
    {
      "q": "Does PDF/X-3 allow encryption or interactive forms?",
      "a": "No. Like the rest of the PDF/X family it is a print-exchange profile: encryption is disallowed and most interactive features such as forms and JavaScript are excluded so the file processes predictably in production."
    },
    {
      "q": "Is PDF/X-3 still used today?",
      "a": "It remains a recognized print-exchange target, though many modern color-managed workflows have moved toward PDF/X-4, which adds live transparency and layer support that PDF/X-3 does not permit."
    }
  ],
  "graph": {
    "parentConcept": "pdf-x",
    "relatedConcepts": [
      "icc-based-color",
      "icc-profiles-in-pdf",
      "color-management-in-pdf",
      "devicecmyk",
      "spot-colors",
      "font-embedding",
      "trimbox",
      "pdf-preflight",
      "overprint"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-1a",
      "pdf-x-4",
      "pdf-output-intent",
      "pdf-a-vs-pdf-x",
      "pdf-standards-overview"
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
    "pdf-x",
    "pdf-x-1a",
    "pdf-x-4",
    "pdf-output-intent",
    "icc-based-color",
    "icc-profiles-in-pdf",
    "press-ready-pdf",
    "pdf-standards-overview"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
