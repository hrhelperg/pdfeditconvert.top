import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "language-specification-in-pdf",
  "h1": "Language Specification in PDF",
  "cluster": "accessibility",
  "aliases": [
    "Natural Language Specification in PDF",
    "The /Lang Entry",
    "Document Language in PDF",
    "Language Identifier in PDF"
  ],
  "definition": "Language specification in PDF is the declaration of the natural language of a document or of individual passages, using a /Lang language tag so assistive technology can process the text correctly.",
  "description": "How PDF declares the natural language of a document and its parts through the /Lang entry, and why it matters for screen readers and accessibility.",
  "searchIntent": "accessibility",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF is fundamentally a visual container: it records the shapes of glyphs and where they sit on a page, but nothing about those glyphs tells software whether the word \"chat\" is meant to be English or French. Language specification fills that gap by attaching an explicit, machine-readable statement of the natural language of the text.",
    "PDF supports language at two scopes: a default language for the whole document, and finer-grained overrides for individual passages that are written in a different language. This information lives in the document catalog and in the logical structure tree, so it is part of the same accessibility infrastructure as tagging and reading order.",
    "The primary consumer of this metadata is assistive technology, especially screen readers, though language information can also help hyphenation, text-to-speech, and search. The ability to declare a document language was added to PDF in version 1.4."
  ],
  "sections": [
    {
      "heading": "How PDF Records the Document Language",
      "body": [
        "The default natural language of a PDF is declared by the /Lang entry in the document catalog, the root dictionary of the file. This optional entry, introduced in PDF 1.4, holds a text string containing a language tag such as \"en-US\". When present, it applies to all text in the document except where a more specific declaration overrides it. When the entry is absent, consumers treat the document's language as unknown.",
        "Because /Lang lives in the catalog, a document-wide language can be set even for a PDF that has no structure tree. That makes it a lightweight, high-value accessibility hint that authoring tools often expose as a simple \"document language\" setting. It costs almost nothing to add and immediately improves how the file is spoken aloud."
      ]
    },
    {
      "heading": "Overriding Language for Individual Passages",
      "body": [
        "Real documents mix languages: an English report that quotes a French sentence, or a German book that includes Latin phrases. PDF supports this with a /Lang entry on individual structure elements in the logical structure tree, and with a /Lang property on marked-content sequences. A structure element that has no /Lang of its own inherits the language of its nearest ancestor that does, ultimately falling back to the catalog's default.",
        "This inheritance model means you only mark language where it actually changes, rather than annotating every element in the document. An empty-string value is understood to mean that the language at that point is unknown, which resets the inherited value rather than passing it down. Correctly marking language changes lets a screen reader switch pronunciation partway through a document."
      ]
    },
    {
      "heading": "Why Language Specification Helps Screen Readers",
      "body": [
        "Assistive technologies map a language tag to a speech engine's pronunciation rules and to a matching voice. With the right tag, an English paragraph and an embedded French quotation are each spoken naturally. With a missing or incorrect tag, a screen reader may voice foreign text using its default language's phonetics, producing speech that is difficult or impossible to understand.",
        "Beyond speech, language information can support correct hyphenation, help software handle characters that are shared across languages, and aid search and indexing. Importantly, this is metadata about meaning, not appearance: setting a language never changes how the page looks, which font is used, or how the text is laid out."
      ]
    },
    {
      "heading": "Language Tags: Format and Fallback",
      "body": [
        "The value of a /Lang entry is a language identifier that follows the same IETF conventions used by HTML's lang attribute and XML's xml:lang. That means a primary language subtag such as \"en\", \"fr\", or \"de\", optionally followed by a region subtag, giving tags like \"en-US\" or \"pt-BR\". By convention the language subtag is written in lowercase and the region subtag in uppercase, and a malformed or unrecognized tag may simply be ignored by a consumer.",
        "Resolution flows from most specific to least specific: a marked-content or structure-element language, then an inherited ancestor language, then the catalog default. Where no language is specified at any level, software treats the language as unknown and falls back to its own default behavior."
      ]
    },
    {
      "heading": "Relationship to WCAG and PDF/UA",
      "body": [
        "Accessibility frameworks treat language as a core piece of information. WCAG includes success criteria for the language of the whole page and for language changes within content, describing how the default language and in-content language shifts should be identified. PDF/UA, the accessibility-focused member of the PDF standards family, calls for the default natural language to be specified and for language changes to be marked. These describe expectations for accessible documents rather than legal obligations.",
        "In practice, language specification pairs with the rest of tagged-PDF infrastructure. A well-tagged document declares its language, exposes a logical reading order, and marks its structure. Language on its own does not make a PDF accessible, but a PDF is difficult for assistive technology to present well without it."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "PDF 1.4"
    },
    {
      "label": "Document-level location",
      "value": "The /Lang entry in the document catalog"
    },
    {
      "label": "Value format",
      "value": "An IETF-style language tag, e.g. en-US"
    },
    {
      "label": "Can be overridden per",
      "value": "Structure element or marked-content sequence"
    }
  ],
  "specification": {
    "introduced": "PDF 1.4 (document-level /Lang entry in the catalog)",
    "typicalUsage": "Declaring a document's default natural language and marking passages written in other languages, so assistive technology applies correct pronunciation and voice.",
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1"
    ]
  },
  "misconceptions": [
    {
      "claim": "Setting a document language makes a PDF accessible.",
      "truth": "Language is only one part of accessibility; a document still needs correct tagging, a logical reading order, and alternative text for images."
    },
    {
      "claim": "A language tag changes how the text is displayed or which font is used.",
      "truth": "It does not affect rendering at all; it is metadata that informs assistive technology and processing, such as pronunciation and voice selection."
    },
    {
      "claim": "Every element needs its own language entry.",
      "truth": "Language is inherited from ancestor elements and the catalog default, so you only mark language where it actually changes."
    }
  ],
  "faq": [
    {
      "q": "Where is a PDF's document language stored?",
      "a": "In the /Lang entry of the document catalog, the file's root dictionary. It sets the default natural language for all text unless a more specific entry overrides it."
    },
    {
      "q": "What format does the language identifier use?",
      "a": "An IETF-style language tag, such as en, en-US, fr, or de-DE, matching the same conventions used by HTML's lang attribute. A region subtag is optional."
    },
    {
      "q": "Can different parts of a document use different languages?",
      "a": "Yes. Individual structure elements and marked-content sequences can carry their own /Lang value, which overrides the inherited document default for that passage."
    },
    {
      "q": "Does an untagged PDF support language specification?",
      "a": "A document-level language can still be set via the catalog's /Lang entry, but marking language changes for specific passages relies on the structure tree or marked content."
    },
    {
      "q": "Why does language matter for screen readers?",
      "a": "It lets the screen reader choose the correct voice and pronunciation rules. A missing or wrong language tag can make spoken output garbled or unintelligible."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "logical-structure",
      "marked-content",
      "reading-order",
      "role-mapping",
      "well-tagged-pdf",
      "section-508-and-pdf",
      "pdf-metadata"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1"
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
    "pdf-document-catalog",
    "structure-elements",
    "pdf-structure-tree",
    "screen-readers-and-pdf",
    "wcag-and-pdf",
    "pdf-ua",
    "pdf-alt-text"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
