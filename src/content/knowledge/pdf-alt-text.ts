import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-alt-text",
  "h1": "Alternative Text in PDF",
  "cluster": "accessibility",
  "aliases": [
    "alt text",
    "alternate text",
    "alternate description",
    "Alt entry",
    "image description"
  ],
  "definition": "Alternative text in PDF is a short description stored in the /Alt entry of a tagged structure element, letting assistive technology convey the meaning of images and other non-text content.",
  "description": "How alternative (alt) text works in a tagged PDF: the /Alt entry, how it differs from ActualText and expansion text, and why screen readers depend on it.",
  "searchIntent": "accessibility",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Alternative text is the human-readable description a PDF carries for content that a screen reader cannot interpret on its own, most commonly images, charts, logos, and other figures. It answers the question a sighted reader answers at a glance: what is this picture, and what does it mean here? Without it, assistive technology has nothing to announce for the element beyond, at best, a generic label.",
    "In PDF, alternative text is not painted on the page. It lives in the document's logical structure, the same tagged tree that also defines reading order and marks up headings, lists, and tables. A description is attached to a structure element (typically a Figure) through an entry named /Alt. Because it sits in the structure tree rather than the visible content stream, alt text is invisible on screen and in print, yet available to software that walks the tree.",
    "Alt text is one of a small family of textual alternatives the format defines, alongside replacement text (ActualText) and expansion text. Understanding which one applies to a given situation is central to producing content that reads correctly aloud, and it is why accessibility standards such as WCAG and PDF/UA give non-text content its own explicit expectations."
  ],
  "sections": [
    {
      "heading": "How alt text is stored in a tagged PDF",
      "body": [
        "Alternative text is supplied through the /Alt entry of a structure element in the logical structure tree. When an author marks an image as a Figure, the Figure element can hold an /Alt string describing what the image conveys. The description is a text string associated with the element, so it travels with the document's structure rather than with the drawing operators that render the picture. This separation is deliberate: the visible content stream tells a viewer how to paint pixels, while the structure tree tells assistive technology what the content means.",
        "Because alt text depends on the structure tree, it only exists in a tagged PDF. An untagged document has no structure elements and therefore nowhere to record a description, which is one reason tagging is the prerequisite for meaningful accessibility. Alt text is also distinct from anything printed on the page: a visible caption below a figure is ordinary page content and does not automatically populate /Alt. The description has to be authored into the element itself, whether that happens during export from a source application or in a later remediation pass."
      ]
    },
    {
      "heading": "Alt text, ActualText, and expansion text",
      "body": [
        "PDF defines three related textual attributes that are easy to confuse. Alternative text (/Alt) describes content for a reader who cannot perceive it, and it is what assistive technology announces in place of an image. Replacement text (/ActualText) is different: it provides an exact, character-for-character substitute for content that is really text but rendered in a way software cannot read directly, such as a word drawn as a graphic or a ligature. ActualText is used during text extraction, copying, and reflow, so the underlying text comes through cleanly rather than as a description.",
        "Expansion text (the /E entry) handles abbreviations and acronyms, supplying the expanded form so it can be spoken correctly. A rule of thumb: use /Alt to explain what something means when it is not text, use /ActualText to say what the exact text is when the visual is standing in for characters, and use /E to spell out shortened terms. Choosing the wrong one changes what a screen reader says. A logo that spells a company name, for example, is often better served by ActualText than by a descriptive /Alt string, because the intended output is the literal name."
      ]
    },
    {
      "heading": "How assistive technology uses alternative text",
      "body": [
        "A screen reader navigates a tagged PDF by following its structure tree in reading order. When it reaches a Figure or another element that carries alt text, it announces the /Alt description instead of attempting to interpret the raster or vector data, which it cannot meaningfully do. The quality of the experience therefore rides on the quality of the description: a precise, purposeful sentence conveys the image's role, while an empty or auto-generated placeholder leaves the reader with a gap.",
        "Not every image should carry alt text. Decorative graphics, background flourishes, and repeated rules that add no information are better marked as artifacts, which signals assistive technology to skip them entirely rather than announce a meaningless description. Deciding what is informative versus decorative is an authoring judgment, and it is a large part of what separates a document that merely contains tags from one that actually reads well. Alt text also interacts with language settings, since the description is spoken using the document or element language."
      ]
    },
    {
      "heading": "Alternative text in accessibility standards",
      "body": [
        "Alternative text is where several accessibility frameworks intersect with the PDF format. In the Web Content Accessibility Guidelines, the success criterion for non-text content (1.1.1) addresses exactly this need: providing a text alternative that serves an equivalent purpose. PDF/UA, the standard specifically for accessible PDF, expects meaningful non-text content to have appropriate alternative descriptions and expects purely decorative content to be treated as artifacts rather than described.",
        "These standards describe what an accessible alternative looks like; they do not, on their own, dictate any particular organization's legal obligations, which vary by jurisdiction and context. Automated accessibility checkers can flag figures that lack an /Alt entry, but they cannot judge whether an existing description is accurate or useful, so a passing check is a floor rather than a guarantee. That human-review gap is inherent to alternative text: only a person can confirm that the words match what the image communicates."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Spec entry",
      "value": "/Alt on a structure element in the tagged structure tree"
    },
    {
      "label": "Introduced",
      "value": "Part of Tagged PDF, added in PDF 1.4"
    },
    {
      "label": "Related attributes",
      "value": "ActualText (/ActualText) and expansion text (/E)"
    },
    {
      "label": "Relevant guidance",
      "value": "WCAG 1.1.1 Non-text Content; expected under PDF/UA"
    }
  ],
  "specification": {
    "iso": "ISO 32000 (logical structure)",
    "introduced": "PDF 1.4 (Tagged PDF)",
    "typicalUsage": "Describing images and other non-text content so assistive technology can convey their meaning",
    "relatedStandards": [
      "pdf-ua-1",
      "wcag-and-pdf"
    ]
  },
  "misconceptions": [
    {
      "claim": "Alt text is the caption printed under the image, or the image's file name.",
      "truth": "Alt text is a separate string stored in the structure tree via /Alt; a visible caption is ordinary page content and does not populate it unless authored there."
    },
    {
      "claim": "Every image in a PDF needs alternative text.",
      "truth": "Decorative images should be marked as artifacts so assistive technology skips them; only meaningful non-text content needs an alternate description."
    },
    {
      "claim": "Alt text and ActualText are just two names for the same thing.",
      "truth": "Alt describes non-text content for assistive technology, while ActualText supplies an exact character-for-character replacement used during text extraction and reflow."
    }
  ],
  "faq": [
    {
      "q": "Where is alt text stored in a PDF file?",
      "a": "In the /Alt entry of a structure element, usually a Figure, within the tagged logical structure tree, not in the visible page content stream."
    },
    {
      "q": "What is the difference between alt text and ActualText?",
      "a": "Alt text is a description announced by assistive technology in place of non-text content, while ActualText is an exact textual substitute used when text is drawn as a graphic, applied during extraction and copying."
    },
    {
      "q": "Does a PDF need to be tagged to have alt text?",
      "a": "Yes. Alt text lives on structure elements in the tagged structure tree, so an untagged PDF has no place to store it and cannot carry alternative descriptions."
    },
    {
      "q": "How do screen readers use alt text in a PDF?",
      "a": "Following the document's reading order, a screen reader announces the /Alt string when it reaches an element that has one, instead of trying to interpret the underlying image data."
    },
    {
      "q": "What is expansion text and how does it relate to alt text?",
      "a": "Expansion text, the /E entry, supplies the expanded form of an abbreviation or acronym so it is spoken correctly; it complements alt text but addresses shortened terms rather than non-text content."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "image-xobjects",
      "marked-content",
      "well-tagged-pdf",
      "pdf-accessibility-checking",
      "accessible-pdf-forms"
    ],
    "relatedStandards": [
      "pdf-ua-1",
      "wcag-and-pdf",
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
    "pdf-structure-tree",
    "structure-elements",
    "screen-readers-and-pdf",
    "artifact-marking",
    "role-mapping",
    "wcag-and-pdf",
    "pdf-ua"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
