import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "wcag-and-pdf",
  "h1": "WCAG and PDF",
  "cluster": "accessibility",
  "aliases": [
    "WCAG for PDF",
    "Web Content Accessibility Guidelines for PDF",
    "PDF WCAG conformance",
    "WCAG-compliant PDF"
  ],
  "definition": "WCAG is the W3C's technology-neutral set of web accessibility guidelines whose success criteria are applied to PDF documents through a supporting collection of documented PDF techniques.",
  "description": "How the W3C's Web Content Accessibility Guidelines apply to PDF — tags, reading order, alt text, language and contrast — and how WCAG relates to PDF/UA.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "The Web Content Accessibility Guidelines (WCAG) describe what accessible content should achieve so that people with disabilities can perceive, operate, and understand it. WCAG was written by the World Wide Web Consortium (W3C) primarily around web content, but it is routinely applied to PDF documents as well. Because a PDF is not HTML, WCAG reaches the format indirectly — through a supporting set of PDF-specific techniques rather than through rules baked into the PDF specification itself.",
    "The bridge between WCAG's outcome-focused criteria and an actual PDF file is tagged PDF: the logical structure that exposes headings, lists, tables, reading order, and alternative text to assistive technology. WCAG says what a result should be; the PDF format supplies the mechanisms — structure tags, an /Alt entry here, a /Lang entry there — that make that result possible.",
    "This page explains what WCAG is and how its principles and success criteria map onto PDF features. It sits alongside the format-level accessibility standard, PDF/UA, and the tools used to check a document, so the goal here is definitional: understand the relationship, then follow the cross-links to the specific tagging concepts and to accessibility checking."
  ],
  "sections": [
    {
      "heading": "Where WCAG Comes From and How It Reaches PDF",
      "body": [
        "WCAG is published by the W3C through its Web Accessibility Initiative (WAI). It is deliberately technology-neutral and is organized under four high-level principles — Perceivable, Operable, Understandable, and Robust (often abbreviated POUR). Under those principles sit testable success criteria, each assigned to one of three conformance levels: A, AA, and AAA. Because the guidelines were framed around web content in general, they do not name PDF constructs directly.",
        "To connect those general criteria to a concrete file format, the W3C supplements WCAG with format-specific techniques. Its \"PDF Techniques for WCAG\" material shows how particular PDF features — structure tags, alternative text, a document language, correct reading order — can satisfy specific success criteria. These techniques are informative: they document sufficient ways to meet a criterion, not additional requirements layered on top of WCAG."
      ]
    },
    {
      "heading": "The PDF Features WCAG Relies On",
      "body": [
        "Most of what WCAG asks for in a document maps to a concrete PDF mechanism. A criterion about text alternatives for non-text content corresponds to an /Alt value on the relevant structure element; criteria about information and relationships correspond to a correct tag tree that marks headings, lists, and tables; a criterion about meaningful sequence corresponds to the reading order encoded in that tag tree; a language criterion corresponds to the document's /Lang entry; and a document-title expectation corresponds to a title in the metadata surfaced through the DisplayDocTitle setting. Interactive forms add field labels and tooltips, and links call for meaningful link text.",
        "Not every criterion is about structure, though. Color contrast, not relying on color alone to convey meaning, and clear link wording are authoring decisions that correct tags cannot supply. A WCAG-oriented PDF is therefore a combination of accurate tagging and sound content choices — which is why tagging a document is a necessary step but never, by itself, the whole story."
      ]
    },
    {
      "heading": "WCAG and PDF/UA: Complementary, Not Identical",
      "body": [
        "PDF/UA (ISO 14289) is a file-format standard: it specifies the technical requirements a tagged PDF has to satisfy at the level of the file itself — which structures must be present, how they must be formed, and what may not appear. WCAG, by contrast, is technology-neutral and outcome-focused, describing results across many kinds of content. The two come from different bodies (ISO and the W3C) with different scope, yet they overlap heavily in practice.",
        "A single document can be built to address both at once: PDF/UA provides precise, machine-testable rules about how the file is constructed, while WCAG frames the human outcomes those rules are meant to produce. The PDF Association's Matterhorn Protocol enumerates checkpoints used to verify PDF/UA conformance, and much of what it checks also supports the corresponding WCAG success criteria. Treating them as the same standard, or assuming one replaces the other, misreads the relationship."
      ]
    },
    {
      "heading": "Conformance Levels and the Limits of Automated Checking",
      "body": [
        "WCAG's three conformance levels build on one another — Level A covers the most essential criteria, Level AA adds criteria that remove major barriers, and Level AAA is the most demanding. Level AA is the tier most often referenced by accessibility policies; for example, the refreshed United States Section 508 standards incorporate WCAG 2.0 Levels A and AA by reference for electronic content, including PDF. That is a description of how a policy references WCAG, not guidance on any obligation.",
        "Automated checkers are useful but partial. They can confirm machine-detectable conditions — that structure tags exist, that a document language is set, that images carry an alt attribute — but they cannot judge whether alt text actually conveys the image's meaning or whether the reading order is logical for a human. A meaningful WCAG evaluation of a PDF therefore combines tool checks with human review, which is why accessibility checking is treated as its own topic."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Published by",
      "value": "W3C Web Accessibility Initiative (WAI)"
    },
    {
      "label": "Four principles",
      "value": "Perceivable, Operable, Understandable, Robust"
    },
    {
      "label": "Conformance levels",
      "value": "A, AA, AAA"
    },
    {
      "label": "PDF-specific guidance",
      "value": "W3C \"PDF Techniques for WCAG\" (informative)"
    }
  ],
  "specification": {
    "iso": "ISO/IEC 40500:2012 (adoption of WCAG 2.0)",
    "introduced": "WCAG 2.0 — W3C Recommendation, 2008",
    "latestVersion": "WCAG 2.2 (2023)",
    "typicalUsage": "Defining and evaluating accessibility outcomes for PDF documents",
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF meets WCAG as soon as it has tags.",
      "truth": "Tagging is necessary but not sufficient. Meaningful alt text, a logical reading order, correct table and heading structure, and adequate color contrast all factor into WCAG success criteria, and much of that requires human judgment a tag alone cannot supply."
    },
    {
      "claim": "WCAG and PDF/UA are the same standard.",
      "truth": "They come from different bodies with different scope: WCAG (W3C) is technology-neutral and outcome-focused, while PDF/UA (ISO 14289) specifies format-level technical requirements for the PDF file itself. A document can be built to target both, but they are not interchangeable."
    },
    {
      "claim": "WCAG only applies to websites, not PDF files.",
      "truth": "WCAG is written for web content in general, and the W3C publishes PDF-specific techniques showing how its success criteria apply to PDF documents. Many accessibility policies apply WCAG to PDFs as well as to web pages."
    }
  ],
  "faq": [
    {
      "q": "Does WCAG contain rules written specifically for PDF?",
      "a": "WCAG itself is technology-neutral, so it does not name PDF constructs. The PDF-specific guidance lives in the W3C's supporting \"PDF Techniques\" material, which shows how PDF features satisfy particular success criteria. Those techniques are informative examples, not extra requirements."
    },
    {
      "q": "Which WCAG conformance level is usually referenced for documents?",
      "a": "WCAG defines three levels — A, AA, and AAA. Level AA is the tier most commonly referenced by accessibility policies for electronic documents. This describes common practice rather than advising any specific obligation."
    },
    {
      "q": "Can an automated checker confirm a PDF meets WCAG?",
      "a": "Automated tools catch machine-detectable issues such as missing tags, an unset document language, or images without an alt attribute. They cannot judge whether alt text is meaningful or whether reading order is logical, so human review is part of any real WCAG evaluation."
    },
    {
      "q": "How does WCAG relate to the four accessibility principles?",
      "a": "WCAG groups all of its success criteria under Perceivable, Operable, Understandable, and Robust (POUR). Each thing a PDF addresses — alt text, reading order, contrast, robust tagging — maps to one of these four principles."
    },
    {
      "q": "Is WCAG a law?",
      "a": "WCAG is a technical specification published by the W3C, not legislation. Various regulations and organizational policies reference it, but WCAG on its own is a set of guidelines rather than a legal requirement."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "logical-structure",
      "reading-order",
      "pdf-alt-text",
      "heading-structure-in-pdf",
      "language-specification-in-pdf",
      "accessible-pdf-forms"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1",
      "pdf-a-vs-pdf-ua"
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "pdf-ua",
    "section-508-and-pdf",
    "pdf-accessibility-checking",
    "pdf-alt-text",
    "reading-order",
    "well-tagged-pdf",
    "screen-readers-and-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
