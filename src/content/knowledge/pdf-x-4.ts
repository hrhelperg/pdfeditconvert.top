import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-x-4",
  "h1": "PDF/X-4",
  "cluster": "standards",
  "aliases": [
    "PDF/X-4:2010",
    "PDF/X-4:2008",
    "ISO 15930-7",
    "PDF/X-4p"
  ],
  "definition": "PDF/X-4 is an ISO PDF/X print-exchange standard based on PDF 1.6 that preserves live transparency and layers while requiring embedded fonts and a defined output intent.",
  "description": "PDF/X-4 is a PDF/X print-exchange standard based on PDF 1.6 that supports live transparency and layers, with embedded fonts and a required output intent.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/X-4 is one of the standards in the PDF/X family (ISO 15930), a set of tightly constrained PDF profiles designed for reliable file exchange in graphic arts and commercial printing. What sets PDF/X-4 apart from the earlier PDF/X-1a and PDF/X-3 profiles is that it is built on PDF 1.6 and can preserve live transparency and layered (optional) content, rather than requiring everything to be flattened before the file leaves the design application.",
    "This matters because flattening transparency early - the norm for PDF/X-1a and PDF/X-3 - can introduce visible seams, unexpected rasterization, or color shifts. By keeping transparency live, PDF/X-4 lets the output device or RIP perform any flattening at final resolution, which generally preserves fidelity from modern layout tools that lean heavily on transparency.",
    "Like the rest of the family, PDF/X-4 still enforces the discipline that makes PDF/X dependable for print: every font must be embedded, the file must be self-contained, color is anchored to a declared output intent, and encryption is not permitted. It trades some of full PDF's flexibility for predictable, repeatable output."
  ],
  "sections": [
    {
      "heading": "How PDF/X-4 differs from PDF/X-1a and PDF/X-3",
      "body": [
        "Every PDF/X part narrows full PDF down to what a print workflow can reliably reproduce, but the parts differ in how much modern rendering they permit. PDF/X-1a is the most restrictive: it is a blind-exchange format that requires each color to already be in a final device space (CMYK, spot, or gray) with no color management, and it requires all transparency to be flattened. PDF/X-3 added support for color-managed and device-independent color (ICC-based, RGB, Lab) governed by an output intent, but it still required transparency to be flattened.",
        "PDF/X-4 keeps PDF/X-3's color model and goes a step further. Because it is built on PDF 1.6, it can carry live transparency and optional content (layers) without flattening them into opaque artwork first. In practice this makes PDF/X-4 the profile chosen when a workflow wants PDF/X reliability alongside native transparency."
      ]
    },
    {
      "heading": "Live transparency and layers",
      "body": [
        "The headline feature of PDF/X-4 is that transparency effects - blend modes, soft masks, and transparency groups - can remain live in the file instead of being pre-flattened. Flattening is the process of converting overlapping transparent objects into a single opaque result; performing it early, inside the authoring tool, can create stitching lines, rasterized patches, or subtle color shifts. PDF/X-4 defers that step to the output device or RIP, which can flatten (if needed) at the final resolution and in the target color space.",
        "PDF/X-4 also permits optional content groups, the PDF mechanism behind layers. This lets a single file carry, for example, a varnish or die-cut layer alongside the printable artwork, provided the document still satisfies the standard's other requirements."
      ]
    },
    {
      "heading": "Output intents and color",
      "body": [
        "Like every PDF/X file, a PDF/X-4 document must contain a PDF/X output intent - an entry that names the intended printing condition and usually embeds an ICC profile describing it, such as a characterized CMYK condition. The output intent tells downstream systems how the device-dependent color values in the file are meant to be interpreted, so color prepared for one press condition is not silently misread against another.",
        "Because PDF/X-4 inherits PDF/X-3's color model, artwork is not limited to CMYK. ICC-based, RGB, Lab, spot (Separation), and DeviceN colors are all allowed, with the output intent and embedded profiles supplying the color-management context. That makes PDF/X-4 well suited to workflows that keep images in a device-independent space until the moment of output."
      ]
    },
    {
      "heading": "What a PDF/X-4 file must and must not contain",
      "body": [
        "PDF/X-4 imposes the core PDF/X constraints. All fonts used must be embedded, so nothing depends on fonts installed at the print site; the file must be self-contained, with referenced content living inside the document; and the file must declare its conformance through a version identifier in its metadata. Each page must also define the boxes that specify finished size - a MediaBox together with a TrimBox or ArtBox, and a BleedBox where bleed is present.",
        "The standard forbids elements that would make a file unreliable in prepress. Encryption and password protection are not allowed, and features aimed at interactive on-screen use rather than printing are restricted. These rules exist so that a prepress operator can open, inspect, and process the file deterministically."
      ]
    },
    {
      "heading": "PDF/X-4p, PDF/X-5, and where PDF/X-4 fits",
      "body": [
        "A conformance variant, PDF/X-4p, is identical to PDF/X-4 except that the output intent's ICC profile is referenced from an external source rather than embedded in the file, which assumes both parties already share that profile. The related PDF/X-5 standard extends PDF/X-4 to allow external graphics (referenced pages) and external output-intent profiles for more advanced production setups. Standard PDF/X-4, by contrast, keeps everything self-contained, which is usually the safer default for handing a file to another party."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "Part of the ISO 15930 PDF/X family; PDF/X-4 is ISO 15930-7"
    },
    {
      "label": "Based on",
      "value": "PDF 1.6"
    },
    {
      "label": "Transparency",
      "value": "Live transparency preserved; not required to be flattened before export"
    },
    {
      "label": "Requires",
      "value": "Embedded fonts and a PDF/X output intent; encryption is not allowed"
    }
  ],
  "specification": {
    "iso": "ISO 15930-7",
    "introduced": "2008",
    "latestVersion": "PDF/X-4:2010",
    "typicalUsage": "Graphic-arts and print-production file exchange with live transparency and color management",
    "relatedStandards": [
      "pdf-x",
      "pdf-x-1a",
      "pdf-x-3",
      "pdf-standards-overview"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF/X-4 requires transparency to be flattened, like older PDF/X versions.",
      "truth": "PDF/X-4 preserves live transparency. Any flattening is deferred to the output device or RIP, which can do it at final resolution instead of in the authoring tool."
    },
    {
      "claim": "PDF/X-4 files must be CMYK-only.",
      "truth": "PDF/X-4 inherits PDF/X-3's color model and supports color-managed workflows, including ICC-based, RGB, and Lab color alongside CMYK and spot colors, interpreted through the output intent. PDF/X-1a is the profile that is limited to device CMYK, spot, and gray."
    },
    {
      "claim": "PDF/X-4 and PDF/A are interchangeable.",
      "truth": "They serve different goals. PDF/A is for long-term archiving and self-contained reproducibility over time, while PDF/X is for reliable print exchange. Their constraints overlap but are not the same."
    }
  ],
  "faq": [
    {
      "q": "What is the main advantage of PDF/X-4 over PDF/X-1a?",
      "a": "PDF/X-4 is based on PDF 1.6 and preserves live transparency and layers, so files from modern layout tools do not have to be flattened before export. PDF/X-1a requires all transparency to be flattened and all color to be in a final device space."
    },
    {
      "q": "Does a PDF/X-4 file need an output intent?",
      "a": "Yes. Every PDF/X file, including PDF/X-4, must contain a PDF/X output intent that describes the intended printing condition (typically via an embedded ICC profile), which is used to interpret device-dependent color."
    },
    {
      "q": "What is PDF/X-4p?",
      "a": "PDF/X-4p is a variant of PDF/X-4 in which the output intent's ICC profile is referenced externally rather than embedded in the file. It assumes both sides already have that profile; standard PDF/X-4 embeds it."
    },
    {
      "q": "Can a PDF/X-4 file be encrypted or password-protected?",
      "a": "No. PDF/X prohibits encryption so that prepress systems can open and process the file without needing a password."
    },
    {
      "q": "Is PDF/X-4 based on PDF 2.0?",
      "a": "No. PDF/X-4 is based on PDF 1.6. The PDF/X-4 standard predates PDF 2.0."
    }
  ],
  "graph": {
    "parentConcept": "pdf-x",
    "relatedConcepts": [
      "optional-content-groups",
      "spot-colors",
      "icc-based-color",
      "overprint",
      "trimbox",
      "bleedbox"
    ],
    "relatedStandards": [
      "pdf-x-1a",
      "pdf-x-3",
      "pdf-x",
      "pdf-standards-overview",
      "pdf-a-vs-pdf-x",
      "pdf-vt"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      },
      {
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-x",
    "pdf-x-1a",
    "pdf-x-3",
    "pdf-output-intent",
    "pdf-transparency",
    "pdf-1-6",
    "pdf-preflight",
    "color-management-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
