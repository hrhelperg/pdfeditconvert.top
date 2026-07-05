import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-standards-overview",
  "h1": "The PDF Standards Family",
  "cluster": "standards",
  "aliases": [
    "PDF ISO standards",
    "PDF subset standards",
    "PDF specification family",
    "PDF/A, PDF/X and PDF/UA standards"
  ],
  "definition": "The PDF standards family is the set of ISO specifications built around PDF — the base format (ISO 32000) plus purpose-specific subsets like PDF/A, PDF/X, PDF/UA, PDF/E and PDF/VT.",
  "description": "How the PDF standards fit together: the base ISO 32000 format and the specialized subsets — PDF/A, PDF/X, PDF/UA, PDF/E and PDF/VT — that constrain it.",
  "searchIntent": "concept",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF is not a single specification but a family of related standards. At the centre is the base format — the general definition of what a PDF file is and how a reader should interpret it — which has been an international standard, ISO 32000, since 2008. Surrounding that core are several specialized standards, each of which takes the full format and narrows it for a particular job.",
    "These specialized standards are best understood as profiles or subsets rather than new formats. A PDF/A file, a PDF/X file and a PDF/UA file are all ordinary PDFs; what makes them special is that they satisfy an extra set of rules layered on top of the base specification. Those rules require certain things to be present and forbid features that would work against the standard's purpose.",
    "Understanding the family matters because the right subset depends entirely on what a document needs to do. A file meant to stay readable for decades has different requirements from one heading to a commercial printer or one that must work with a screen reader — and PDF has a dedicated standard for each of those goals."
  ],
  "sections": [
    {
      "heading": "One base format, many specialized standards",
      "body": [
        "The foundation of the family is ISO 32000, which defines PDF itself: the file structure, objects, page content, fonts, colour, and everything a viewer needs to render a page consistently on any device. This base standard grew directly out of Adobe's own PDF specifications — PDF 1.7 was adopted as ISO 32000-1 in 2008 — and the format's current edition, PDF 2.0, is published as ISO 32000-2 (2017, with a revision in 2020). Every other member of the family builds on this document.",
        "Because the base format is deliberately broad, it allows many features that are useful in some situations and harmful in others. External font references can keep files small but may make them unreadable years later; transparency and colour effects look right on screen but can complicate print reproduction. The specialized standards exist to resolve these tensions by defining a well-behaved subset for each use case."
      ]
    },
    {
      "heading": "How a subset standard works",
      "body": [
        "A subset standard does not invent a new file format; it profiles the existing one. In practice this means three kinds of rules: things that are required (for example, embedding every font a document uses), things that are forbidden (for example, reliance on external files), and things that are restricted to a safe range. A file that follows all of the rules for a given standard is said to conform to it, and that conformance claim is normally recorded inside the file's XMP metadata so that software can recognize it.",
        "Because conformance is a matter of following precise rules, it can be checked automatically. Validation tools read a file, compare it against the requirements of the target standard, and report any violations. This is why the family is closely tied to the ideas of conformance levels and validators — a standard is only useful if a file's claim to follow it can actually be verified."
      ]
    },
    {
      "heading": "The main members of the family",
      "body": [
        "Several subsets have become widely used. PDF/A (the ISO 19005 series) is designed for long-term archiving: it requires self-contained files so a document will still render correctly far into the future. PDF/X (the ISO 15930 series) targets reliable print production and prepress exchange, tightening the rules around colour, fonts and output conditions. PDF/UA (ISO 14289) focuses on accessibility, specifying how a document's structure must be tagged so that assistive technology can read it in a sensible order.",
        "Two further standards round out the family for particular industries. PDF/E (ISO 24517) addresses engineering and technical documents, and PDF/VT (ISO 16612-2) supports variable and transactional printing, where each printed piece is personalized. All of them share the same DNA — they are constrained versions of the format defined in ISO 32000 — but each is optimized for a different outcome."
      ]
    },
    {
      "heading": "Who develops the standards",
      "body": [
        "The PDF standards are maintained through ISO rather than by any single company, which is part of why the format is stable and vendor-neutral. Different subsets are developed by the ISO committees whose expertise matches their purpose: the print-focused standards come from the graphic-technology community, while the archiving and accessibility standards come from the document-management community.",
        "Adobe originally created PDF and still contributes to this work, but since the base format became ISO 32000-1 in 2008 it no longer controls the specification. The base standard and its subsets are revised over time to keep them aligned as the format evolves toward newer editions such as PDF 2.0."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Base standard",
      "value": "PDF became ISO 32000-1 in 2008, adopted from Adobe's PDF 1.7; the current edition is PDF 2.0 (ISO 32000-2, 2017, revised 2020)."
    },
    {
      "label": "Purpose-built subsets",
      "value": "PDF/A (ISO 19005) for archiving, PDF/X (ISO 15930) for print, PDF/UA (ISO 14289) for accessibility, PDF/E (ISO 24517) for engineering, PDF/VT (ISO 16612-2) for variable-data print."
    },
    {
      "label": "Subsets constrain, not extend",
      "value": "Each specialized standard restricts the base format — requiring some features and forbidding others — so a conforming file is still an ordinary PDF."
    }
  ],
  "specification": {
    "iso": "ISO 32000 (base format); subset standards include ISO 19005 (PDF/A), ISO 15930 (PDF/X), ISO 14289 (PDF/UA), ISO 24517 (PDF/E) and ISO 16612-2 (PDF/VT).",
    "introduced": "PDF introduced by Adobe in the early 1990s; the base format became ISO 32000-1 in 2008.",
    "latestVersion": "PDF 2.0 (ISO 32000-2), published 2017 and revised 2020",
    "typicalUsage": "Selecting the appropriate PDF profile — archiving, print production, accessibility, engineering or variable-data printing.",
    "relatedStandards": [
      "iso-32000",
      "pdf-a",
      "pdf-x",
      "pdf-ua",
      "pdf-e",
      "pdf-vt"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF/A, PDF/X and PDF/UA are separate file formats.",
      "truth": "They are profiles of the same PDF format defined in ISO 32000. A conforming file is still an ordinary PDF that any reader can open — it simply meets an extra set of rules."
    },
    {
      "claim": "The subset standards add new features to PDF.",
      "truth": "They mostly restrict it — requiring some things (such as embedded fonts) and forbidding others — in order to guarantee a property like long-term readability or reliable printing."
    },
    {
      "claim": "A single PDF can only follow one of these standards.",
      "truth": "A file can conform to more than one at once (for example, a PDF that is both PDF/A and PDF/UA), as long as it satisfies every rule that applies."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between ISO 32000 and PDF/A?",
      "a": "ISO 32000 defines PDF in general — what the format is and how to render it. PDF/A is a constrained subset of that format aimed at long-term archiving, so it adds rules (like requiring self-contained files) that ordinary PDFs do not have to follow."
    },
    {
      "q": "Which PDF standard should I use?",
      "a": "It depends on the goal: PDF/A for archiving, PDF/X for commercial print production, PDF/UA for accessibility, PDF/E for engineering documents, and PDF/VT for variable or transactional printing. If none of those apply, an ordinary ISO 32000 PDF is enough."
    },
    {
      "q": "Are these standards still being maintained?",
      "a": "Yes. They are ISO standards that are revised over time. PDF 2.0 (ISO 32000-2) is the current base edition, and newer editions of the subset standards are updated to stay aligned with it."
    },
    {
      "q": "How can I tell which standard a PDF claims to follow?",
      "a": "A conformance claim is normally recorded in the file's XMP metadata. Validation tools read that claim and check whether the file actually meets every requirement of the named standard."
    },
    {
      "q": "Do the subset standards change how a PDF looks?",
      "a": "Not by themselves. They govern how a file is built — fonts, colour handling, structure and metadata — rather than the visual design. A conforming file should look the same to a reader as any other PDF of the same document."
    }
  ],
  "graph": {
    "parentConcept": "iso-32000",
    "childConcepts": [
      "pdf-a",
      "pdf-x",
      "pdf-ua",
      "pdf-e",
      "pdf-vt",
      "pdf-conformance-levels",
      "pdf-a-vs-pdf-x",
      "pdf-a-vs-pdf-ua",
      "why-standardize-pdf"
    ],
    "relatedConcepts": [
      "portable-document-format",
      "pdf-versions",
      "pdf-2-0",
      "history-of-pdf"
    ],
    "relatedStandards": [
      "pdf-a-vs-pdf-x",
      "pdf-a-vs-pdf-ua",
      "pdf-conformance-levels",
      "verapdf",
      "pdf-output-intent"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "Free PDF Tools — Browser-Based, No Upload Needed",
        "path": "/pdf-tools"
      }
    ],
    "relatedGuides": [
      {
        "label": "Why PDF Is Still the Default for Documents in 2026",
        "path": "/guides/why-pdf-is-still-popular"
      }
    ]
  },
  "seeAlso": [
    "iso-32000",
    "pdf-a",
    "pdf-x",
    "pdf-ua",
    "pdf-e",
    "pdf-vt",
    "pdf-conformance-levels",
    "why-standardize-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
