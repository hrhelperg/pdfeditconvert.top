import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-e",
  "h1": "PDF/E",
  "cluster": "standards",
  "aliases": [
    "PDF for Engineering",
    "Engineering PDF",
    "PDF/E-1",
    "ISO 24517"
  ],
  "definition": "PDF/E is an ISO-standardized subset of PDF (ISO 24517) tailored for creating and exchanging engineering and technical documents, such as CAD-derived drawings and technical specifications.",
  "description": "PDF/E (ISO 24517) is a PDF profile for engineering and technical documents, supporting optional content layers, large-format drawings, and reliable, self-contained drawing exchange.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/E is a member of the PDF standards family aimed specifically at engineering and technical documentation. The \"E\" stands for Engineering, and the standard defines a constrained, well-behaved profile of ordinary PDF that is suited to the way engineering teams create, review, and hand off documents such as CAD-derived drawings, geospatial plans, and manufacturing specifications.",
    "The first part of the standard, commonly called PDF/E-1, was published by ISO in 2008 as ISO 24517-1 and is based on PDF 1.6. Like other PDF profiles, PDF/E does not invent a new file format; it takes the underlying PDF specification and adds rules and requirements so that a conforming file is more predictable and self-contained than an arbitrary PDF.",
    "What distinguishes PDF/E from print- or archive-oriented profiles is its focus on the exchange of engineering content rather than a fixed final-form page image alone. PDF/E is designed to carry things engineering teams rely on, including optional content (layers) and large-format technical drawings, in a single portable file that colleagues, clients, and downstream systems can open with standard PDF tools."
  ],
  "sections": [
    {
      "heading": "What PDF/E Is Designed For",
      "body": [
        "PDF/E targets the reliable creation and exchange of engineering documents across organizations and tools. In fields such as architecture, construction, manufacturing, and geospatial work, a drawing or technical document often has to travel between different CAD systems, review chains, and archives without losing fidelity. PDF/E provides a common, vendor-neutral container so that the visual content of a drawing renders the same for everyone, regardless of which application produced it.",
        "Because it is a profile of standard PDF, a PDF/E file is still an ordinary PDF at its core. It opens in mainstream PDF viewers, prints like any other PDF, and can be handled by generic PDF tooling. The value of the profile is the added discipline: a file that conforms to PDF/E has been produced under a defined set of rules intended to make engineering exchange dependable."
      ]
    },
    {
      "heading": "How PDF/E Constrains and Extends PDF",
      "body": [
        "PDF/E-1 is built on PDF 1.6 and applies a set of requirements and restrictions on top of it. The general goal, shared with profiles like PDF/A and PDF/X, is that a conforming document should be self-contained and render consistently. In practice this means fonts and other resources needed to display the document are meant to travel inside the file, so the reader does not depend on whatever happens to be installed on their machine.",
        "At the same time, PDF/E deliberately keeps the features that engineering work depends on. It supports optional content groups, better known as layers, which let a drawing separate dimensions, annotations, or trade-specific views that a reader can turn on and off. It also accommodates the large page geometries typical of technical drawings. The profile is therefore less about stripping capability out of PDF and more about specifying how that capability should be used for engineering documents."
      ]
    },
    {
      "heading": "PDF/E, 3D, and Dynamic Content",
      "body": [
        "A common point of confusion is whether PDF/E-1 standardizes interactive 3D content. It does not. Although PDF 1.6, on which PDF/E-1 is based, introduced the ability to embed 3D artwork (using the U3D representation) as a 3D annotation, the published PDF/E-1 profile does not address 3D, video, or other dynamic content. Handling of that content was deferred to a planned later part of the standard that was never published.",
        "The engineering path for rich 3D and dynamic content later moved elsewhere in the PDF family. It was folded into PDF/A-4e, a conformance level of PDF/A-4 (ISO 19005-4:2020) that is based on PDF 2.0, rather than into a new part of ISO 24517. For a PDF/E-1 file itself, the profile's contribution is a disciplined, self-contained container for 2D drawings and layered technical documents, not a standardized way to embed interactive 3D."
      ]
    },
    {
      "heading": "PDF/E in the PDF Standards Family",
      "body": [
        "PDF/E sits alongside the other ISO PDF profiles, each of which optimizes PDF for a different purpose. PDF/A (ISO 19005) is built for long-term archiving and preservation, PDF/X (ISO 15930) for reliable print production, PDF/UA (ISO 14289) for accessibility, and PDF/VT (ISO 16612-2) for high-volume variable and transactional printing. PDF/E is the profile whose focus is engineering and technical document exchange.",
        "Because these profiles address different needs, they are not interchangeable and a document is not automatically valid against more than one. Choosing PDF/E signals that the priority is faithful, self-contained exchange of engineering content, including layered technical drawings, rather than the archival guarantees of PDF/A or the press-oriented controls of PDF/X. A PDF 2.0-based engineering path was not issued as a new part of ISO 24517; instead it was folded into PDF/A-4e, a conformance level of PDF/A-4 (ISO 19005-4:2020)."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "ISO 24517 (\"PDF/E\")"
    },
    {
      "label": "First part",
      "value": "PDF/E-1, published 2008, based on PDF 1.6"
    },
    {
      "label": "Primary focus",
      "value": "Engineering and technical document exchange"
    },
    {
      "label": "Notable capability",
      "value": "Optional content layers and large-format technical drawings"
    }
  ],
  "specification": {
    "iso": "ISO 24517",
    "introduced": "PDF/E-1 (ISO 24517-1) in 2008",
    "typicalUsage": "Exchange of engineering, construction, and manufacturing documents such as CAD-derived drawings and technical documentation.",
    "relatedStandards": [
      "pdf-x",
      "pdf-a",
      "pdf-a-4",
      "pdf-ua",
      "pdf-vt",
      "iso-32000",
      "pdf-1-6"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF/E is an archival format like PDF/A.",
      "truth": "PDF/E is aimed at engineering document exchange, not long-term preservation. It keeps engineering-oriented features such as optional content layers, whereas PDF/A is the profile designed for archiving."
    },
    {
      "claim": "PDF/E flattens documents down to a static image so they contain no layers or interactivity.",
      "truth": "PDF/E-1 is not a flattening profile. It supports optional content groups (layers) and remains an ordinary PDF at its core. It does not, however, standardize embedded 3D or other dynamic content, which was deferred to a later part of the standard that was never published."
    },
    {
      "claim": "A PDF/E file needs special software just to open.",
      "truth": "A PDF/E file is a valid PDF and opens in standard readers. Only specialized features, such as toggling optional content layers, require a viewer that implements them."
    }
  ],
  "faq": [
    {
      "q": "What does the \"E\" in PDF/E stand for?",
      "a": "It stands for Engineering. PDF/E is the ISO PDF profile intended for engineering and technical documents."
    },
    {
      "q": "What is the ISO number for PDF/E?",
      "a": "PDF/E is standardized as ISO 24517. Its first part, PDF/E-1, was published in 2008 and is based on PDF 1.6."
    },
    {
      "q": "Can a PDF/E file contain 3D models?",
      "a": "The published PDF/E-1 standard (based on PDF 1.6) does not define support for embedded 3D content. 3D and other dynamic content were deferred to a planned later part of ISO 24517 that was never issued. The engineering path for rich 3D content later moved to PDF/A-4e, a conformance level of PDF/A-4 (ISO 19005-4:2020) based on PDF 2.0."
    },
    {
      "q": "How is PDF/E different from PDF/X?",
      "a": "PDF/X (ISO 15930) is built for reliable print production, while PDF/E is built for engineering and technical document exchange. They optimize PDF for different goals and are not interchangeable."
    },
    {
      "q": "Do I need Adobe software to view a PDF/E file?",
      "a": "No. Any standards-compliant PDF viewer can open it. Some features, such as showing or hiding optional content layers, need a reader that supports them, but the static content displays anywhere."
    }
  ],
  "graph": {
    "parentConcept": "pdf-standards-overview",
    "relatedConcepts": [
      "optional-content-groups",
      "pdf-layers",
      "pdf-annotations",
      "pdf-1-6"
    ],
    "relatedStandards": [
      "pdf-standards-overview",
      "pdf-x",
      "pdf-a",
      "pdf-a-4",
      "pdf-ua",
      "pdf-vt",
      "pdf-conformance-levels"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      }
    ]
  },
  "seeAlso": [
    "pdf-standards-overview",
    "pdf-x",
    "pdf-a",
    "pdf-ua",
    "pdf-vt",
    "pdf-1-6",
    "pdf-2-0",
    "pdf-layers"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
