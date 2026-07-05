import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-ua",
  "h1": "PDF/UA",
  "cluster": "standards",
  "aliases": [
    "PDF/UA",
    "PDF/Universal Accessibility",
    "Universal Accessibility",
    "ISO 14289"
  ],
  "definition": "PDF/UA is the ISO 14289 standard that defines how a tagged PDF must be built so its content is reliably accessible to assistive technology such as screen readers.",
  "description": "PDF/UA (ISO 14289) is the technical standard for accessible PDFs, setting tagging, structure and metadata rules screen readers rely on.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/UA, short for PDF/Universal Accessibility, is the branch of the PDF standards family that defines what an accessible PDF file must contain. It is published by ISO as the 14289 series, and it exists so that documents can be read, navigated, and understood by people who use assistive technology such as screen readers, refreshable braille displays, and screen magnifiers.",
    "PDF/UA does not invent a new file format or a new set of tags. Instead, it builds on Tagged PDF and the logical structure facilities that already exist in the base PDF specification, and it spells out precisely how those features must be used. A file that merely contains some tags is not automatically PDF/UA; the standard sets requirements for the structure tree, reading order, alternative text, artifacts, language, text mapping, and document metadata.",
    "Because it is a technical, file-format-level specification, PDF/UA is usually discussed alongside the W3C's Web Content Accessibility Guidelines (WCAG) and policies such as Section 508. Those describe accessibility goals in a technology-neutral way, while PDF/UA describes exactly how to satisfy comparable goals in the PDF container itself."
  ],
  "sections": [
    {
      "heading": "What PDF/UA Specifies",
      "body": [
        "At its core, PDF/UA requires that a document's real content is fully represented in a logical structure tree using standard structure types, so headings, lists, tables, links, and paragraphs carry meaning rather than existing only as marks on a page. Content must be placed in a correct reading order that matches the intended reading sequence, meaningful images and graphics must carry alternative text, and purely decorative or repeating page furniture must be marked as artifacts so it is skipped by assistive technology.",
        "Beyond structure, PDF/UA covers the details that let text actually be spoken or transcoded: all text must map to Unicode so it can be extracted correctly, the document's natural language must be declared, and information must not be conveyed by color or visual formatting alone. It also addresses metadata, including setting a human-readable document title and configuring the viewer so that title is displayed instead of the file name. Importantly, PDF/UA constrains how the existing PDF tagging and structure mechanisms are used rather than adding new object types."
      ]
    },
    {
      "heading": "PDF/UA, WCAG, and Section 508",
      "body": [
        "A common point of confusion is how PDF/UA relates to WCAG. They operate at different layers and are complementary. WCAG is a set of technology-agnostic guidelines from the W3C that describe accessibility outcomes for web content broadly, while PDF/UA is an ISO standard that describes, in concrete PDF terms, how a file must be constructed. Many organizations reference both: WCAG to state the goal and PDF/UA to define conformant PDF construction.",
        "Policies such as Section 508 in the United States point to accessibility requirements for electronic documents and often align with WCAG. PDF/UA is a specification, not a law, so what any given organization or jurisdiction is obliged to do is a matter of the applicable policy rather than the standard itself. The standard's role is to give a precise, testable definition of an accessible PDF that such policies can point to."
      ]
    },
    {
      "heading": "How Conformance Is Declared and Checked",
      "body": [
        "A file signals PDF/UA conformance through XMP metadata using the PDF/UA identification schema, which records the part of the standard the file claims to meet. Unlike PDF/A, which offers multiple conformance levels such as A, B, and U, PDF/UA defines a single conformance target: a file either meets the requirements or it does not.",
        "Verification combines automated and human review. The PDF Association publishes the Matterhorn Protocol, a catalogue of failure conditions that a file must not exhibit, distinguishing checks a machine can perform from those that require human judgment. Automated checkers can confirm machine-verifiable conditions, such as whether images have alternative text present or whether the language is declared, but they cannot decide whether that alternative text is actually meaningful or whether the reading order makes sense to a person. For that reason, meaningful conformance testing pairs tooling with manual inspection."
      ]
    },
    {
      "heading": "PDF/UA-1 and PDF/UA-2",
      "body": [
        "The first part of the standard, PDF/UA-1, is published as ISO 14289-1 and defines accessible use of the PDF 1.7 feature set standardized in ISO 32000-1. It has been the practical reference for accessible PDFs for many years and underpins most existing PDF accessibility tooling and guidance.",
        "A second part, PDF/UA-2, is published as ISO 14289-2 and is aligned with PDF 2.0 (ISO 32000-2). It updates and extends the accessibility model to take advantage of newer structure and tagging capabilities introduced in the PDF 2.0 generation of the format. Which part a file targets is recorded in its PDF/UA identification metadata."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "ISO 14289 (the PDF/UA series)"
    },
    {
      "label": "PDF/UA-1",
      "value": "ISO 14289-1, built on PDF 1.7 (ISO 32000-1)"
    },
    {
      "label": "PDF/UA-2",
      "value": "ISO 14289-2, aligned with PDF 2.0 (ISO 32000-2)"
    },
    {
      "label": "Conformance",
      "value": "Single target declared via XMP PDF/UA identification metadata (no A/B/U levels)"
    }
  ],
  "specification": {
    "iso": "ISO 14289",
    "introduced": "2012 (PDF/UA-1, ISO 14289-1)",
    "latestVersion": "PDF/UA-2 (ISO 14289-2)",
    "typicalUsage": "Accessible documents intended for assistive technology; frequently referenced alongside WCAG in accessibility policies and procurement.",
    "relatedStandards": [
      "pdf-standards-overview",
      "pdf-a",
      "wcag-and-pdf"
    ]
  },
  "misconceptions": [
    {
      "claim": "If a PDF is tagged, it is PDF/UA compliant.",
      "truth": "Tagging is necessary but not sufficient. PDF/UA additionally requires correct reading order, semantically accurate tags, alternative text, artifact marking, language and Unicode mapping, and specific metadata, and those tags must actually reflect the content."
    },
    {
      "claim": "PDF/UA and WCAG are the same thing, and one replaces the other.",
      "truth": "PDF/UA is an ISO file-format standard for PDF, while WCAG is a technology-neutral set of W3C guidelines. They address accessibility at different layers and are commonly used together rather than as substitutes."
    },
    {
      "claim": "If an automated checker reports no errors, the PDF is fully accessible.",
      "truth": "Automated tools only verify machine-checkable conditions. They cannot judge whether alternative text is meaningful or whether the reading order makes sense, so human review remains part of confirming conformance."
    }
  ],
  "faq": [
    {
      "q": "What does the 'UA' in PDF/UA stand for?",
      "a": "It stands for Universal Accessibility. PDF/UA is the accessibility-focused member of the PDF standards family, published by ISO as the 14289 series."
    },
    {
      "q": "Can an existing PDF be made PDF/UA, or does it have to start that way?",
      "a": "An existing PDF can be remediated to meet PDF/UA by adding and correcting its tags, structure, alternative text, and metadata. A scanned, image-only PDF first needs OCR and full tagging before it can be structured for accessibility."
    },
    {
      "q": "Is PDF/UA a legal requirement?",
      "a": "PDF/UA is a technical standard, not a law. Whether it applies depends on the accessibility policies or regulations of a given organization or jurisdiction, many of which reference WCAG; the standard simply provides a precise definition of an accessible PDF those rules can point to."
    },
    {
      "q": "How is PDF/UA conformance recorded inside a file?",
      "a": "Through XMP metadata using the PDF/UA identification schema, which records the part of the standard the file claims. Conforming files also set a meaningful document title and configure the viewer to display that title."
    },
    {
      "q": "What is the Matterhorn Protocol?",
      "a": "It is a catalogue of failure conditions published by the PDF Association to support testing PDF/UA conformance. It separates conditions a machine can check from those needing human judgment, which is why accessibility testing pairs automated tools with manual review."
    }
  ],
  "graph": {
    "parentConcept": "pdf-standards-overview",
    "childConcepts": [
      "pdf-ua-1"
    ],
    "relatedConcepts": [
      "reading-order",
      "role-mapping",
      "artifact-marking",
      "language-specification-in-pdf",
      "well-tagged-pdf",
      "accessible-pdf-forms",
      "screen-readers-and-pdf",
      "standard-structure-types"
    ],
    "relatedStandards": [
      "pdf-standards-overview",
      "pdf-a",
      "iso-32000"
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "pdf-ua-1",
    "pdf-a-vs-pdf-ua",
    "wcag-and-pdf",
    "section-508-and-pdf",
    "pdf-structure-tree",
    "pdf-alt-text",
    "pdf-accessibility-checking"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
