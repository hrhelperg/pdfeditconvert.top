import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "section-508-and-pdf",
  "h1": "Section 508 and PDF",
  "cluster": "accessibility",
  "aliases": [
    "Section 508",
    "508 compliance",
    "Section 508 of the Rehabilitation Act",
    "Section 508 Standards",
    "508 accessibility"
  ],
  "definition": "Section 508 is a U.S. federal accessibility law that, for PDFs, is satisfied by well-tagged documents meeting the WCAG success criteria it incorporates by reference.",
  "description": "Section 508 is the U.S. law requiring accessible federal digital content. See how it applies to PDFs through tagging, structure, and WCAG conformance.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Section 508 is a provision of the United States Rehabilitation Act that concerns the accessibility of information and communication technology (ICT) used by federal agencies. It is a legal and regulatory requirement rather than a file-format feature, so it does not describe how a PDF is built internally. Instead, it sets an expectation that electronic content, including documents distributed as PDF, be usable by people with disabilities, including those who rely on assistive technology such as screen readers.",
    "For PDF specifically, Section 508 does not invent its own list of tag rules. The Section 508 Standards, maintained by the U.S. Access Board, were refreshed in 2017 to incorporate the Web Content Accessibility Guidelines (WCAG) 2.0 at Levels A and AA by reference. That means a PDF is evaluated against WCAG success criteria, and the practical way to satisfy those criteria in a PDF is through Tagged PDF: a logical structure tree, correct reading order, alternative text, and properly marked headings, lists, and tables.",
    "This page explains what Section 508 is, how it relates to a PDF's underlying accessibility features, and how it differs from adjacent standards such as WCAG and PDF/UA. It is a conceptual reference, not legal guidance; it describes what the requirement is and how it connects to PDF technology, not what any particular organization is obligated to do."
  ],
  "sections": [
    {
      "heading": "What Section 508 Is",
      "body": [
        "Section 508 is part of the U.S. Rehabilitation Act of 1973; its modern form comes from a 1998 amendment that added enforcement, and its technical standards were most recently refreshed in 2017. The requirement centers on U.S. federal agencies and the electronic and information technology they develop, procure, maintain, or use. The U.S. Access Board is the body that develops and publishes the Section 508 Standards, while enforcement and guidance involve other federal entities.",
        "The 2017 refresh is significant for documents because it aligned the standards with WCAG 2.0 Levels A and AA, incorporating those guidelines by reference. As a result, evaluating whether a PDF meets Section 508 expectations largely means evaluating it against WCAG success criteria rather than a separate, PDF-only checklist. Because WCAG is written to be technology-neutral, the criteria describe outcomes (such as content having a meaningful text alternative) rather than the specific PDF objects used to achieve them."
      ]
    },
    {
      "heading": "How Section 508 Applies to a PDF",
      "body": [
        "Section 508 does not single out PDF as a format, and it does not add hidden flags to a file. A PDF is treated as electronic content that must satisfy the referenced WCAG criteria, and the mechanism inside the file that makes this possible is Tagged PDF. Tags build a logical structure tree that assistive technology can follow: headings are marked as headings, lists and tables carry their real structure, images and other non-text content carry alternative text, and the document declares its language. The reading order defined by the structure tree is what a screen reader announces, independent of where content happens to sit on the page.",
        "In practice, aligning a PDF with Section 508 draws on the same accessibility building blocks documented throughout this cluster: a complete structure tree, artifacts marked so decorative content is skipped, accessible form fields with labels, and correct table and list tagging. A scanned, image-only PDF with no text layer or tags cannot meet these expectations until it is given recognized text and logical structure, because there is nothing for assistive technology to read."
      ]
    },
    {
      "heading": "Section 508, WCAG, and PDF/UA",
      "body": [
        "These three terms are related but operate at different levels. Section 508 is a U.S. regulatory requirement; it points at WCAG 2.0 Levels A and AA to define what accessible means. WCAG, published by the W3C, is a set of technology-neutral success criteria that apply to web pages, documents, and software alike. PDF/UA (ISO 14289) is a separate technical standard that specifies how a conforming PDF must be constructed to be accessible, describing tagging and structure requirements in PDF-specific terms.",
        "Because of this layering, a PDF can be described as meeting WCAG criteria, conforming to PDF/UA, or aligning with Section 508 expectations, and these statements overlap without being identical. PDF/UA gives concrete, machine-checkable rules for the file's construction; WCAG defines the accessibility outcomes; Section 508 is the regulatory context that references WCAG. A well-tagged PDF built to satisfy WCAG and PDF/UA is generally what people mean when they describe a PDF as compatible with Section 508."
      ]
    },
    {
      "heading": "Evaluating a PDF Against Section 508",
      "body": [
        "Assessing a PDF against Section 508 expectations combines automated checking with manual review, because many WCAG criteria depend on human judgment. Automated accessibility checkers can confirm that tags exist, that a document language is set, that images have some alternative text, and that form fields are labeled. What a tool cannot reliably judge is whether the reading order actually makes sense, whether alternative text conveys the right meaning, or whether a complex table is tagged in a way that keeps its data relationships clear.",
        "For that reason, thorough evaluation usually includes reviewing the structure tree, checking reading order, and testing the document with a screen reader to confirm the experience matches the visual content. See the checking and structure references in this cluster for how those inspections work; this page describes the standard itself rather than prescribing a remediation procedure."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Legal basis",
      "value": "A provision of the U.S. Rehabilitation Act of 1973"
    },
    {
      "label": "Standards body",
      "value": "U.S. Access Board maintains the Section 508 Standards"
    },
    {
      "label": "Referenced guidelines",
      "value": "2017 refresh incorporates WCAG 2.0 Levels A and AA by reference"
    },
    {
      "label": "Scope",
      "value": "Electronic and information technology used by U.S. federal agencies, including documents"
    }
  ],
  "specification": {
    "introduced": "U.S. Rehabilitation Act of 1973; modern form from the 1998 amendment; standards refreshed in 2017",
    "latestVersion": "Section 508 Standards refresh (2017), incorporating WCAG 2.0 A and AA",
    "typicalUsage": "Accessibility requirement for U.S. federal electronic content, met for PDFs via Tagged PDF and WCAG conformance",
    "relatedStandards": [
      "pdf-ua-1",
      "pdf-ua"
    ]
  },
  "misconceptions": [
    {
      "claim": "Section 508 is an export setting or mode you switch on in a PDF.",
      "truth": "It is a U.S. accessibility regulation, not a file flag; conformance comes from proper tagging and meeting the referenced WCAG criteria, verified by testing."
    },
    {
      "claim": "Section 508 and PDF/UA are the same requirement.",
      "truth": "Section 508 is a regulation that references WCAG 2.0 A and AA, while PDF/UA (ISO 14289) is a separate technical standard for how an accessible PDF is constructed; they align but are distinct."
    },
    {
      "claim": "If an automated checker reports no errors, the PDF is fully Section 508 conformant.",
      "truth": "Automated tools cannot judge whether reading order is correct or whether alternative text is meaningful, so manual review remains necessary."
    }
  ],
  "faq": [
    {
      "q": "Is Section 508 a law or a technical standard?",
      "a": "Both aspects apply: it is a provision of U.S. federal law, and the U.S. Access Board publishes the accompanying Section 508 Standards, which since the 2017 refresh incorporate WCAG 2.0 Levels A and AA by reference."
    },
    {
      "q": "Which accessibility guidelines does Section 508 reference for documents?",
      "a": "The refreshed Section 508 Standards incorporate WCAG 2.0 at Levels A and AA, so a PDF is assessed against those success criteria rather than a separate, PDF-only rule list."
    },
    {
      "q": "Does Section 508 apply outside the U.S. federal government?",
      "a": "Its legal scope centers on U.S. federal agencies and their information technology and procurement; other organizations sometimes adopt it voluntarily or reference it, but that is a matter of policy rather than the standard itself."
    },
    {
      "q": "What PDF features are associated with meeting Section 508 expectations?",
      "a": "A logical structure tree of tags, correct reading order, alternative text for images, marked headings, lists and tables, a declared document language, and accessible form fields."
    },
    {
      "q": "How is a PDF tested against Section 508?",
      "a": "Through a combination of automated accessibility checkers and manual review, including inspecting the structure tree and testing the document with a screen reader to confirm the experience matches the content."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "logical-structure",
      "well-tagged-pdf",
      "accessible-pdf-forms",
      "language-specification-in-pdf",
      "role-mapping",
      "standard-structure-types"
    ],
    "relatedStandards": [
      "pdf-ua-1",
      "pdf-a-vs-pdf-ua"
    ]
  },
  "seeAlso": [
    "wcag-and-pdf",
    "pdf-ua",
    "tagged-pdf",
    "pdf-accessibility-checking",
    "pdf-alt-text",
    "reading-order",
    "screen-readers-and-pdf",
    "pdf-structure-tree"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
