import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-x",
  "h1": "PDF/X",
  "cluster": "standards",
  "aliases": [
    "PDF/X",
    "PDF for eXchange",
    "ISO 15930",
    "PDF/X print standard"
  ],
  "definition": "PDF/X is a family of ISO-standardized PDF subsets (ISO 15930) that constrain a file for reliable, predictable graphic-arts and prepress exchange.",
  "description": "PDF/X is the ISO 15930 subset of PDF for print production, enforcing embedded fonts, defined color, and an output intent for reliable prepress exchange.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/X is a constrained profile of PDF designed for the graphic-arts and printing industries, where a file handed from a designer to a print provider must reproduce the same way no matter which application or device processes it. Rather than adding new features, PDF/X removes ambiguity: it forbids the parts of PDF that behave unpredictably in a print workflow and requires the pieces a printer needs to render color and layout faithfully.",
    "The standard is published by ISO as the 15930 series, and it exists as several named conformance profiles — most commonly PDF/X-1a, PDF/X-3, and PDF/X-4 — each built on a particular base version of PDF and each allowing a different range of color and rendering features. All of them share the same core goal: a self-contained, deterministic file for blind exchange, meaning the sender and receiver do not need to exchange extra instructions for the job to print correctly.",
    "Because PDF/X is a subset rather than a separate format, a PDF/X file is still an ordinary PDF that any viewer can open. The difference is what it guarantees: fonts are embedded, the intended printing condition is described, and features that could cause a job to print differently — or fail on a RIP — are disallowed."
  ],
  "sections": [
    {
      "heading": "What PDF/X constrains and requires",
      "body": [
        "The central idea of PDF/X is to eliminate the variables that make print output unpredictable. Every font used must be embedded in the file, so the printer never substitutes a different typeface. Color must be fully specified rather than left device-dependent in ambiguous ways, and the file must declare an output intent — a description of the intended printing condition, typically referencing an ICC profile such as a specific press or paper standard — so that colors are interpreted against a known target. Page geometry must be unambiguous, which in practice means boxes like the TrimBox (and often BleedBox) are defined so the finished trim size is explicit.",
        "PDF/X also removes elements that have no place in reliable print exchange or that behave inconsistently across processors. Interactive and dynamic content — such as embedded JavaScript, form actions, audio, video, and most annotations that would print — is disallowed or must sit outside the printable area. Encryption that would block a workflow is not permitted. The result is a file whose visual, printable content is locked down and self-describing."
      ]
    },
    {
      "heading": "The main conformance profiles",
      "body": [
        "The best-known profiles differ mainly in the color they permit and the PDF features they inherit. PDF/X-1a is the most restrictive: it requires all color to be CMYK or spot (separation) color, with no RGB or device-independent color allowed, and it does not permit live transparency. It targets workflows that want a fully pre-separated, unambiguous file. PDF/X-3 relaxes the color rule by allowing color-managed RGB and other ICC-based color alongside CMYK and spot color, leaving the conversion to the output condition later in the workflow.",
        "PDF/X-4 is built on a more modern base version of PDF and is significant because it permits live transparency and PDF layers (optional content) to be retained rather than flattened, while still enforcing embedded fonts, defined color, and an output intent. Other profiles in the 15930 series, such as PDF/X-5, extend the model further, for example allowing certain external references. Because each profile has different capabilities, a print provider usually specifies which one they accept."
      ]
    },
    {
      "heading": "How PDF/X fits into a print workflow",
      "body": [
        "In practice a PDF/X file is produced at export time — from a page-layout or design application, or by a distiller or conversion tool — by choosing the target profile and an output intent that matches the intended press. The exported file records that it claims a given PDF/X conformance level in its metadata. Downstream, a preflight step checks whether the file actually satisfies the rules of the claimed profile, catching problems like missing fonts, unexpected color spaces, or an absent output intent before the job reaches the press.",
        "This is why PDF/X is described as enabling “blind exchange”: when a file conforms, the receiver has everything needed to reproduce it — the fonts, the color definitions, the intended printing condition, and the trim geometry — without a phone call or a separate set of instructions. It reduces the back-and-forth and the surprises that used to make sending files to a printer error-prone."
      ]
    },
    {
      "heading": "PDF/X versus other PDF standards",
      "body": [
        "PDF/X sits alongside other ISO-standardized PDF subsets that each optimize for a different purpose. PDF/A targets long-term archiving and self-containment for preservation; PDF/UA targets accessibility through tagged structure; PDF/E targets engineering documents; and PDF/VT builds on PDF/X for high-volume variable and transactional printing. They are not mutually exclusive in spirit, but they optimize for different goals, so a file is typically produced against the standard that matches its intended use.",
        "It is common to confuse PDF/X with PDF/A because both are “constrained PDF” and both require embedded fonts. The distinction is intent: PDF/X is about faithful, predictable print reproduction and therefore cares deeply about color, output intent, and trim geometry, while PDF/A is about a document remaining reliably viewable and self-contained far into the future. A file can even be built to satisfy both where their rules are compatible."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "Published as the ISO 15930 series"
    },
    {
      "label": "Purpose",
      "value": "Reliable graphic-arts and prepress exchange"
    },
    {
      "label": "Core requirements",
      "value": "Embedded fonts, defined color, and an output intent"
    },
    {
      "label": "Common profiles",
      "value": "PDF/X-1a, PDF/X-3, and PDF/X-4"
    }
  ],
  "specification": {
    "iso": "ISO 15930",
    "typicalUsage": "Constraining a PDF for reliable, predictable print production and blind file exchange between designers and print providers.",
    "relatedStandards": [
      "pdf-a",
      "pdf-ua",
      "pdf-e",
      "pdf-vt"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF/X is a different file format from PDF that needs special software to open.",
      "truth": "A PDF/X file is an ordinary PDF that any viewer can open; PDF/X is a constrained subset of PDF, not a separate format."
    },
    {
      "claim": "PDF/X and PDF/A are basically the same thing.",
      "truth": "They are distinct ISO standards with different goals — PDF/X targets predictable print reproduction (color, output intent, trim geometry), while PDF/A targets long-term archiving and self-containment."
    },
    {
      "claim": "All PDF/X files must be CMYK only.",
      "truth": "Only PDF/X-1a restricts color to CMYK and spot color; PDF/X-3 and PDF/X-4 allow color-managed (ICC-based) color such as RGB alongside CMYK."
    }
  ],
  "faq": [
    {
      "q": "What does the \"X\" in PDF/X stand for?",
      "a": "The X refers to \"eXchange.\" The standard is designed so files can be exchanged between content creators and print providers with predictable, reproducible results."
    },
    {
      "q": "Do I need PDF/X to print a document?",
      "a": "No. Any PDF can be printed. PDF/X matters for professional graphic-arts and prepress workflows where predictable color and reliable reproduction across different systems are important."
    },
    {
      "q": "How do I know which PDF/X profile to use?",
      "a": "The print provider usually specifies it. PDF/X-1a is the most restrictive (CMYK and spot color, no live transparency), PDF/X-3 adds color-managed color, and PDF/X-4 additionally preserves live transparency and layers."
    },
    {
      "q": "What is an output intent in PDF/X?",
      "a": "An output intent describes the intended printing condition, typically by referencing an ICC profile for a specific press or paper standard, so a processor knows the target against which colors should be interpreted."
    },
    {
      "q": "Can a file be both PDF/X and PDF/A?",
      "a": "It can, where the two standards' rules are compatible. Both require embedded fonts and self-containment, but they enforce different additional constraints, so producing a file that claims both requires satisfying each standard's requirements."
    }
  ],
  "graph": {
    "parentConcept": "pdf-standards-overview",
    "childConcepts": [
      "pdf-x-1a",
      "pdf-x-3",
      "pdf-x-4",
      "pdf-output-intent",
      "pdf-x-trapping"
    ],
    "relatedConcepts": [
      "pdf-preflight",
      "press-ready-pdf",
      "print-production-with-pdf",
      "trimbox",
      "bleedbox",
      "font-embedding",
      "spot-colors",
      "devicecmyk",
      "icc-profiles-in-pdf"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-ua",
      "pdf-e",
      "pdf-vt",
      "pdf-standards-overview",
      "pdf-conformance-levels",
      "pdf-a-vs-pdf-x"
    ],
    "relatedFormats": [
      "pdf-x-1a",
      "pdf-x-3",
      "pdf-x-4"
    ],
    "relatedTools": [
      {
        "label": "PDF Converter — Convert PDFs to Word, JPG, PNG and More",
        "path": "/pdf-converter"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      },
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      }
    ]
  },
  "seeAlso": [
    "pdf-x-1a",
    "pdf-x-3",
    "pdf-x-4",
    "pdf-output-intent",
    "pdf-standards-overview",
    "pdf-a-vs-pdf-x",
    "pdf-preflight",
    "pdf-x-trapping"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
