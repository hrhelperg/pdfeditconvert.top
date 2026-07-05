import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-accessibility-checking",
  "h1": "Checking PDF Accessibility",
  "cluster": "accessibility",
  "aliases": [
    "PDF accessibility testing",
    "PDF accessibility validation",
    "PDF/UA checking",
    "accessibility audit for PDF",
    "PDF accessibility check"
  ],
  "definition": "Checking PDF accessibility is the process of evaluating a document's tags, logical structure, and metadata against standards such as PDF/UA and WCAG to confirm assistive technology can interpret it.",
  "description": "How PDF accessibility checking works: automated validators and manual review test tags, reading order, alt text, and language against PDF/UA and WCAG.",
  "searchIntent": "accessibility",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF, by default, describes how a page should look, not what its content means. The information a screen reader needs, reading order, the role of each element, and text alternatives for images, only exists if it was added as a Tagged PDF layer. Checking PDF accessibility is the process of confirming that this layer is present and sound, so that assistive technology can present the document in a way that matches its visual and logical intent.",
    "Accessibility checking comes in two complementary forms. Automated validators parse the document's structure and flag problems a machine can detect, such as a missing tag tree, an unset document language, or a figure with no alternative text. Manual review covers the judgments no algorithm can make reliably, such as whether alternative text is actually meaningful or whether the reading order is logical. A realistic accessibility check combines both; neither alone tells the whole story.",
    "These checks are measured against published standards and rule sets, chiefly PDF/UA and WCAG, plus the PDF Association's Matterhorn Protocol, which is where the word 'accessible' acquires a concrete, testable definition. This page explains what accessibility checking inspects and how the tooling works, rather than how to remediate a specific file."
  ],
  "sections": [
    {
      "heading": "What Accessibility Checking Inspects",
      "body": [
        "The core object of inspection is the logical structure tree, the hierarchy of tags that identifies content as headings, paragraphs, lists, tables, figures, and so on. A check first confirms this tree exists at all, since an untagged PDF gives assistive technology almost nothing to work with. It then examines whether structure elements carry the right roles, whether custom element types are mapped to standard structure types, and whether decorative or repeating content, such as page backgrounds and running headers, is marked as an artifact so it is not read aloud.",
        "Beyond the tree itself, checking looks at document-level and element-level metadata. Typical targets include a declared natural language for the document (and for passages in other languages), a human-readable document title that viewers can show instead of the filename, alternative text on meaningful images, header cells and associations in tables, correct list structure, and a heading hierarchy that is present and consistently nested. The reading order encoded in the tag tree is also examined, because that order, not the visual position on the page, determines the sequence a screen reader follows."
      ]
    },
    {
      "heading": "Automated Checks Versus Human Judgment",
      "body": [
        "The single most important idea in accessibility checking is the line between what a machine can verify and what a person must confirm. Software can reliably detect the presence or absence of things: whether a tag tree exists, whether a figure has an alternative-text attribute, whether the document language is set, whether a title is defined, whether tables declare header cells, and whether any content is left untagged. These are structural facts a validator can read directly from the file.",
        "What software cannot judge is meaning. A tool can confirm that alternative text exists, but not that it accurately describes the image; it can confirm that a reading order is defined, but not that the order makes sense; it can see that a heading tag is used, but not that it sits at the correct level in the outline. For this reason a clean automated report is necessary but not sufficient. Many rule sets explicitly categorize their checks as machine-verifiable or requiring human confirmation, and a document is only meaningfully accessible once both kinds have passed."
      ]
    },
    {
      "heading": "Standards and Rule Sets Used as the Benchmark",
      "body": [
        "Accessibility checking is only meaningful relative to a defined target. PDF/UA (ISO 14289) is the PDF-specific technical standard: it sets requirements for how a conforming file must use tags, structure, and metadata. WCAG, the Web Content Accessibility Guidelines published by the W3C, is format-agnostic and is applied to PDF through a set of documented techniques; it describes outcomes such as perceivability and operability rather than PDF syntax. In the United States, Section 508 references WCAG as its measuring stick, which is why the two are often cited together.",
        "Bridging the abstract requirements and concrete testing is the Matterhorn Protocol, published by the PDF Association. It restates PDF/UA's requirements as a catalog of specific, testable failure conditions and, crucially, labels which of those conditions can be checked by software and which require a human. That labeling is what makes the automated-versus-manual split actionable, and it is the conceptual backbone behind most serious PDF accessibility tooling."
      ]
    },
    {
      "heading": "How Checking Tools Work",
      "body": [
        "Accessibility checkers fall into two broad categories. Dedicated accessibility tools, such as the accessibility checker built into Adobe Acrobat and the free PDF Accessibility Checker (PAC), parse the tag tree and structure, run a rule set derived from PDF/UA and WCAG, and produce a report that groups issues by category and severity, typically separating items that passed automatically from those flagged for manual review. Standards validators, such as veraPDF, focus on formal conformance and can machine-check the testable requirements of PDF/UA-1 against the file.",
        "Mechanically, all of these tools read the document catalog to find the structure tree root, walk the structure elements, and cross-reference them with the page content through marked-content identifiers. They inspect attributes like alternative text, table scope, and language, and check document properties such as the title flag and the viewer preference that tells a reader to display the title. Because different tools implement different subsets of the rules and interpret edge cases differently, passing one checker does not automatically mean a file conforms to a specific named standard; the report is a guide to where to look, not a legal certification."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Reference standard",
      "value": "PDF/UA (ISO 14289) defines the technical requirements a conforming accessible PDF must meet."
    },
    {
      "label": "Two-part process",
      "value": "Automated validation detects machine-checkable issues; manual review covers judgments like meaningful alt text and logical reading order."
    },
    {
      "label": "Rule catalog",
      "value": "The PDF Association's Matterhorn Protocol enumerates PDF/UA failure conditions and marks which require human checking."
    },
    {
      "label": "WCAG source",
      "value": "WCAG is authored by the W3C and applied to PDF through documented techniques, and is referenced by Section 508 in the US."
    }
  ],
  "misconceptions": [
    {
      "claim": "If an automated checker reports no errors, the PDF is fully accessible.",
      "truth": "Automated tools only detect machine-verifiable problems. Whether alt text is meaningful, whether the reading order is logical, and whether headings sit at the correct level still require human review."
    },
    {
      "claim": "Accessibility checking is mainly about adding alternative text to images.",
      "truth": "Alt text is one item among many. A check also covers the whole tag tree, reading order, headings, lists, table structure, artifact marking, document language, and the document title."
    },
    {
      "claim": "Passing Acrobat's checker means the file conforms to PDF/UA.",
      "truth": "Different tools implement different subsets of the rules. A clean report in one checker is a strong signal but not a formal guarantee of conformance to a specific named standard."
    }
  ],
  "faq": [
    {
      "q": "What does an automated PDF accessibility checker actually test?",
      "a": "It reads the document's structure and metadata and confirms machine-detectable facts: that a tag tree exists, that content is tagged, that figures carry alternative-text attributes, that a document language and title are set, and that tables declare header cells. It cannot judge whether that information is correct or meaningful."
    },
    {
      "q": "Can a PDF be checked for accessibility if it has no tags?",
      "a": "Yes, and it will fail early. An untagged PDF has no logical structure for assistive technology to follow, so checkers flag the absence of a tag tree as a fundamental problem before evaluating anything more detailed."
    },
    {
      "q": "Is checking the same as fixing (remediation)?",
      "a": "No. Checking identifies and reports problems; remediation is the separate work of correcting them, such as adding tags, writing alternative text, setting the language, or reordering the tag tree. A check tells you where to work, not how to change the file."
    },
    {
      "q": "How is checking against PDF/UA different from checking against WCAG?",
      "a": "PDF/UA is a PDF-specific technical standard describing how tags and structure must be used. WCAG is format-agnostic and applied to PDF through techniques, describing outcomes rather than PDF syntax. Many tools report against both, so their results overlap but are not identical."
    },
    {
      "q": "Do checkers confirm the reading order is correct?",
      "a": "Only partially. A tool can confirm that a reading order is defined in the tag tree and can surface it for inspection, but confirming that the order is logical and matches the intended flow generally requires a person to review the sequence."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "pdf-structure-tree",
      "untagged-pdf",
      "screen-readers-and-pdf",
      "logical-structure",
      "role-mapping",
      "artifact-marking",
      "table-tagging-in-pdf",
      "language-specification-in-pdf",
      "heading-structure-in-pdf",
      "pdf-validation"
    ],
    "relatedStandards": [
      "pdf-ua-1",
      "verapdf"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      }
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "pdf-ua",
    "wcag-and-pdf",
    "reading-order",
    "pdf-alt-text",
    "well-tagged-pdf",
    "section-508-and-pdf",
    "verapdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
