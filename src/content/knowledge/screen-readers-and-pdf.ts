import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "screen-readers-and-pdf",
  "h1": "Screen Readers and PDF",
  "cluster": "accessibility",
  "aliases": [
    "Screen reader accessibility for PDF",
    "Assistive technology and PDF",
    "Reading PDFs with a screen reader",
    "PDF screen reader support"
  ],
  "definition": "A screen reader is assistive software that turns a PDF's content into speech or braille, relying on the file's tag structure to convey reading order, headings, and image descriptions.",
  "description": "How screen readers turn a PDF into speech or braille — why tags, reading order, and alt text matter, and what happens when a PDF is untagged.",
  "searchIntent": "accessibility",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A screen reader is a category of assistive technology that presents on-screen content to people who are blind or have low vision, usually as synthesized speech or output on a refreshable braille display. Common examples include JAWS, NVDA, Narrator, VoiceOver, and TalkBack. When a screen reader opens a PDF, it does not look at the pixels the way a sighted reader looks at a page; instead it works from a structured, text-based description of the document that the PDF viewer builds and exposes.",
    "This is where PDF becomes interesting. PDF was designed as a visual, print-oriented format whose primary job is to place marks at fixed coordinates on a page. That layout information alone tells a screen reader almost nothing about meaning: it cannot tell a heading from body text, a caption from a data cell, or a decorative line from a paragraph. The bridge between the visual page and an accessible experience is Tagged PDF — a layer of logical structure, introduced in PDF 1.4, that labels content and records the order in which it should be read.",
    "How well a screen reader conveys a PDF therefore depends less on how the document looks and more on how it is built underneath: whether text is real text, whether tags exist and match the content, whether images carry text alternatives, and whether the reading order in the structure reflects the intended reading order. The rest of this entry explains what a screen reader consumes, why tags matter, and how standards such as PDF/UA and WCAG relate to that experience."
  ],
  "sections": [
    {
      "heading": "What a Screen Reader Actually Reads",
      "body": [
        "A screen reader does not interpret the graphical page directly. The PDF viewer parses the document and presents its contents to the operating system's accessibility layer or to the assistive technology as an ordered tree of elements — headings, paragraphs, lists, tables, links, and figures — together with the underlying characters of any text. The screen reader then walks that tree, announcing each element and letting the user navigate by structure, for example jumping heading to heading or reading a table cell by cell.",
        "For this to work, the characters a reader speaks must actually be recoverable from the file. That depends on real text content and on mappings such as a ToUnicode CMap that tie the glyphs drawn on the page back to Unicode characters. A scanned, image-only PDF has no text layer at all, so a screen reader has nothing to speak until optical character recognition (OCR) adds recognizable text and that text is tagged."
      ]
    },
    {
      "heading": "Why Tags and Reading Order Matter",
      "body": [
        "The single most important input for a screen reader is the document's logical structure, held in the PDF structure tree. The order of elements in that tree — not their position on the page — defines the reading order the screen reader follows. A well-tagged document reads in the sequence the author intended: title, then introduction, then each section in turn, with sidebars and footnotes placed sensibly.",
        "An untagged PDF has no such tree. Faced with one, a viewer must infer an order from the geometry of the content stream, which can produce results that jump between columns, read a footer in the middle of a sentence, or interleave unrelated blocks. Tags also carry semantics beyond order: they mark which text is a heading level, which cells belong to which table row, and which runs form a list, so a user can understand and navigate the document rather than hearing an undifferentiated stream of words."
      ]
    },
    {
      "heading": "Images, Alt Text, and Non-Text Content",
      "body": [
        "Because a screen reader cannot see a picture, non-text content needs a text equivalent. In a tagged PDF this is supplied through an alternate-text (Alt) entry attached to a figure, so the reader can announce a short description in place of the image. Content that carries no meaning — background rules, decorative flourishes, repeated page furniture — should instead be marked as an artifact so the screen reader can skip it rather than reading noise.",
        "Some content needs an exact spoken form that differs from its glyphs, such as a mathematical expression, a ligature, or a logo rendered as letters. PDF allows an ActualText value for these cases, giving the assistive technology the characters to speak. Together, alt text, artifact marking, and actual text let a document distinguish what should be described, what should be ignored, and what should be spoken verbatim."
      ]
    },
    {
      "heading": "How PDF/UA and WCAG Relate to Screen Reading",
      "body": [
        "Two frameworks are frequently mentioned alongside accessible PDFs. WCAG (the Web Content Accessibility Guidelines) is a broad set of accessibility guidelines originally aimed at web content but widely applied to documents, describing outcomes such as providing text alternatives and a meaningful sequence. PDF/UA, standardized as ISO 14289, is specific to PDF: it defines technical requirements for how tags, structure, and metadata must be applied so that assistive technology can interpret a file predictably.",
        "Neither framework is itself a screen reader, and a PDF does not have to carry a formal PDF/UA conformance claim to be readable — many tagged documents work well without one. What these standards contribute is consistency: when a file follows them, different screen readers and viewers are far more likely to expose the same structure, alt text, and reading order, reducing the guesswork that untagged or loosely tagged documents force on the software."
      ]
    },
    {
      "heading": "Why Results Vary Across Readers and Viewers",
      "body": [
        "The experience of reading a given PDF is a product of two moving parts: the assistive technology and the application displaying the document. Different screen readers and viewers parse the same tags and text with their own logic, so the same file can be announced somewhat differently in one combination than in another, especially where tagging is incomplete or ambiguous.",
        "This is why automated accessibility checks and manual testing serve different purposes. Software can flag machine-detectable problems — missing tags, images without an Alt entry, absent document language — but it cannot judge whether alt text is meaningful or whether the reading order makes sense to a listener. Confirming that a document is genuinely usable generally involves navigating it with an actual screen reader."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Structure introduced in",
      "value": "Tagged PDF, the structure screen readers rely on, arrived in PDF 1.4"
    },
    {
      "label": "Accessibility standard",
      "value": "PDF/UA is standardized as ISO 14289"
    },
    {
      "label": "Common screen readers",
      "value": "JAWS, NVDA, Narrator, VoiceOver, and TalkBack"
    },
    {
      "label": "Output forms",
      "value": "Synthesized speech or a refreshable braille display"
    }
  ],
  "misconceptions": [
    {
      "claim": "If I can select and copy the text in a PDF, a screen reader can read it properly.",
      "truth": "A selectable text layer is necessary but not sufficient. Without tags there is no reliable reading order or structure, so a screen reader may read content out of sequence, miss headings, or garble tables."
    },
    {
      "claim": "Passing an automated accessibility checker guarantees the PDF works with a screen reader.",
      "truth": "Automated tools catch machine-detectable issues like missing tags or absent alt entries, but they cannot verify that alt text is meaningful or that the reading order makes sense. That requires testing with an actual screen reader."
    },
    {
      "claim": "Every screen reader reads a PDF the same way.",
      "truth": "The result depends on the combination of assistive technology and viewer. Different readers and applications interpret tags and expose content with their own logic, especially when tagging is incomplete."
    }
  ],
  "faq": [
    {
      "q": "What information does a screen reader get from a tagged PDF?",
      "a": "It gets the reading order, the document's headings, lists, and table structure, alternate text for images, links, form-field labels, and the document language — everything needed to navigate and speak the content, drawn from the structure tree rather than the visual layout."
    },
    {
      "q": "Can a screen reader read a scanned, image-only PDF?",
      "a": "Not meaningfully. An image-only PDF is a picture of a page with no underlying text, so there is nothing to speak until OCR adds a recognizable text layer and that text is tagged. Until then a screen reader can only report that a graphic is present."
    },
    {
      "q": "Does a PDF have to conform to PDF/UA for a screen reader to read it?",
      "a": "No. Many well-tagged PDFs are readable without any formal PDF/UA conformance claim. PDF/UA defines the technical requirements that make a document behave predictably across different assistive technologies, but conformance is not a prerequisite for a screen reader to work."
    },
    {
      "q": "How does a screen reader decide the order in which to read a page?",
      "a": "It follows the order of elements in the PDF's structure tree, not their position on the page. If the document is untagged, the viewer must instead infer an order from the geometry of the content, which can produce out-of-sequence reading."
    },
    {
      "q": "How do screen readers handle PDF forms?",
      "a": "Interactive form fields need accessible names so the reader can announce what each control is — for example, a label supplied through the field's tooltip or tag. Without those, a screen reader may announce a field only by type, such as 'edit' or 'checkbox,' leaving the user unsure what to enter."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "logical-structure",
      "role-mapping",
      "language-specification-in-pdf",
      "well-tagged-pdf",
      "accessible-pdf-forms",
      "tounicode-cmap",
      "image-only-pdf",
      "artifact-marking"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1",
      "section-508-and-pdf"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "pdf-ua",
    "reading-order",
    "pdf-alt-text",
    "wcag-and-pdf",
    "pdf-structure-tree",
    "untagged-pdf",
    "pdf-accessibility-checking"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
