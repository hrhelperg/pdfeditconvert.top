import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "list-tagging-in-pdf",
  "h1": "List Tagging in PDF",
  "cluster": "accessibility",
  "aliases": [
    "PDF list structure elements",
    "L LI Lbl LBody tags",
    "Tagging lists in PDF",
    "Accessible PDF lists",
    "PDF list structure"
  ],
  "definition": "List tagging marks ordered and unordered lists in a tagged PDF with L, LI, Lbl and LBody structure elements so their grouping, order and item markers become machine-readable.",
  "description": "How tagged PDF encodes bulleted and numbered lists with L, LI, Lbl and LBody structure elements, and why that structure matters for assistive technology.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "On a PDF page, the bullets, numbers and indentation that make a list look like a list carry no meaning on their own — they are just glyphs and spacing painted at fixed coordinates. Nothing in the page's drawing instructions says \"these five paragraphs belong together as a list\" or \"this dash is a marker rather than body text.\" List tagging supplies that missing meaning by describing the list in the document's logical structure tree, separately from how it happens to be drawn.",
    "The work is done by a small family of standard structure elements: an L element that wraps the whole list, an LI element for each item, and — inside each item — an optional Lbl element for the marker (the bullet, number or letter) and an LBody element for the item's actual content. Together these say what the list is, where its items begin and end, and which part is the label versus the substance.",
    "Because this structure is independent of the visual layout, it survives operations that discard appearance — a screen reader reading top to bottom, a reflow engine narrowing the text to a phone screen, or an export that turns the PDF into another tagged format. Getting the list tags right is a core part of what separates a genuinely well-tagged PDF from one that merely looks organized."
  ],
  "sections": [
    {
      "heading": "The four list structure elements",
      "body": [
        "A tagged list is built from four standard structure types. The L (List) element is the container for the entire list. Inside it, each entry is an LI (List Item). Within a list item, the Lbl (Label) element holds the item's marker — the bullet character, the arabic numeral, the roman numeral or letter — while the LBody (List Body) element holds the content the marker points to. Separating Lbl from LBody is what lets software treat \"3.\" as a label announcing the third item rather than as body text that begins with the digit three.",
        "Not every list needs all four. A minimal list can be an L containing LI elements whose content sits directly inside, and purely decorative markers are sometimes handled differently. But the Lbl/LBody split is the normal, expressive form, because it keeps the marker and the content as distinct, separately addressable pieces of structure. These types live in the standard structure namespace, so a processor that understands tagged PDF recognizes them regardless of which application produced the file."
      ]
    },
    {
      "heading": "Numbering, markers and nested lists",
      "body": [
        "Whether a list is ordered or unordered, and what kind of marker it uses, is recorded not by the glyphs on the page but by a List attribute named ListNumbering attached to the L element. Its value names the scheme — for example None, Disc, Circle or Square for unordered lists, and Decimal, UpperRoman, LowerRoman, UpperAlpha or LowerAlpha for ordered ones. This lets assistive technology describe the list's style even when the marker itself is drawn as an image or generated automatically.",
        "Sub-lists are expressed by nesting: a complete L element is placed inside the LBody of the list item it belongs under, so the structure tree mirrors the outline's depth. That nesting is how a screen reader can announce moving from a top-level item into a second-level list and back out again. PDF 2.0 refined the list model further, including ways to indicate that one list continues an earlier one that was interrupted, which helps when a single logical list is split across other content or across a page break."
      ]
    },
    {
      "heading": "Why list tagging matters for assistive technology",
      "body": [
        "When a list is properly tagged, a screen reader can announce that a list is present, convey how many items it contains, let the user jump from item to item, and signal nesting depth as the user moves through sub-lists. The Lbl/LBody separation means the tool can present or suppress the marker sensibly instead of reading a stray bullet symbol in the middle of a sentence. Reading order follows the structure tree, so items are encountered in their intended sequence rather than in the essentially arbitrary order the glyphs were painted.",
        "When list content is instead built from ordinary paragraphs that merely start with a dash or a number, none of this is available: the grouping is invisible, there is no item-to-item navigation, nesting is lost, and the markers are read as literal characters. This is why converting a visually formatted document into an accessible one so often comes down to replacing look-alike lists with real L, LI, Lbl and LBody structure."
      ]
    },
    {
      "heading": "How standards constrain list structure",
      "body": [
        "Accessibility standards care about how these elements nest, not just that they exist. PDF/UA, the standard specifically about accessible PDF, places rules on list structure — for example expecting Lbl and LBody to appear as children of an LI, and LI elements to appear within an L — so that a validator can flag lists that are assembled incorrectly. WCAG's guidance for PDF and programs such as Section 508 lean on the same underlying structure, treating a correctly tagged list as the way list relationships are conveyed programmatically.",
        "Documents do not have to use the literal tag names L, LI, Lbl and LBody in their own markup. A file may define custom element names and connect them to the standard list types through role mapping, so that a tool encountering an unfamiliar tag still knows to treat it as a list, an item, a label or a body. Either way, the goal is the same: the list's meaning is carried by structure that any conforming reader can interpret, independent of the page's visual design."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Core elements",
      "value": "L (list), LI (list item), Lbl (label/marker) and LBody (list body)"
    },
    {
      "label": "Marker scheme",
      "value": "Recorded by the ListNumbering attribute on L (e.g. Decimal, UpperRoman, Disc, Square)"
    },
    {
      "label": "Nesting",
      "value": "A sub-list is an L element placed inside the LBody of its parent item"
    },
    {
      "label": "Namespace",
      "value": "List types belong to the standard structure namespace; custom tags reach them via role mapping"
    }
  ],
  "specification": {
    "introduced": "Tagged PDF (logical structure), introduced with PDF 1.4",
    "iso": "ISO 32000 (standard structure types L, LI, Lbl, LBody); ISO 14289 (PDF/UA)",
    "latestVersion": "PDF 2.0 (ISO 32000-2), which refined the list model",
    "typicalUsage": "Encoding bulleted, numbered and nested lists in the structure tree of a tagged PDF so their semantics survive independent of visual layout",
    "relatedStandards": [
      "iso-32000",
      "pdf-ua",
      "tagged-pdf"
    ]
  },
  "misconceptions": [
    {
      "claim": "Adding a bullet character and indenting the text makes a list in a PDF.",
      "truth": "Bullets and indentation are only glyphs and spacing on the page. Without L, LI, Lbl and LBody structure elements, the content is not a list to assistive technology or to reflow."
    },
    {
      "claim": "List tagging is the same feature as the list boxes and combo boxes in PDF forms.",
      "truth": "Content list tags (L, LI, Lbl, LBody) describe body text in the structure tree. Form 'choice fields' are interactive widgets — an unrelated interactive feature."
    },
    {
      "claim": "You only ever need the L and LI elements.",
      "truth": "Lbl and LBody separate the marker from the item's content, and standards such as PDF/UA place specific rules on how these elements nest inside a list item."
    }
  ],
  "faq": [
    {
      "q": "What are the four list structure elements in a tagged PDF?",
      "a": "L wraps the whole list, LI marks each item, Lbl holds an item's marker (bullet, number or letter), and LBody holds the item's content. Lbl and LBody sit inside an LI, which sits inside an L."
    },
    {
      "q": "How does a tagged PDF tell a bulleted list from a numbered list?",
      "a": "By the ListNumbering attribute on the L element, not by the glyphs drawn on the page. Values such as Disc, Circle or Square describe unordered markers, while Decimal, UpperRoman or LowerAlpha describe ordered ones."
    },
    {
      "q": "How are multi-level (nested) lists represented?",
      "a": "A complete L element is placed inside the LBody of the list item it belongs under, so the structure tree mirrors the outline depth. This lets a screen reader convey moving into and out of sub-lists."
    },
    {
      "q": "What happens when a list is not tagged correctly?",
      "a": "Assistive technology sees ordinary paragraphs rather than a list: the grouping is invisible, item-to-item navigation is unavailable, nesting is lost, and markers may be read aloud as literal characters."
    },
    {
      "q": "Can a PDF use custom tag names for lists?",
      "a": "Yes. A document may define its own element names and connect them to the standard L, LI, Lbl and LBody types through role mapping, so a conforming reader still interprets them as list structure."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "logical-structure",
      "marked-content",
      "well-tagged-pdf",
      "heading-structure-in-pdf",
      "artifact-marking",
      "pdf-alt-text"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1",
      "wcag-and-pdf",
      "section-508-and-pdf",
      "iso-32000"
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
    "tagged-pdf",
    "table-tagging-in-pdf",
    "standard-structure-types",
    "structure-elements",
    "pdf-structure-tree",
    "role-mapping",
    "reading-order",
    "pdf-ua"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
