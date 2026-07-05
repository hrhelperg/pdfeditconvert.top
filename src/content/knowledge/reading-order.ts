import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "reading-order",
  "h1": "Reading Order in PDF",
  "cluster": "accessibility",
  "aliases": [
    "logical reading order",
    "content order",
    "tag order",
    "reading sequence"
  ],
  "definition": "Reading order is the sequence in which a tagged PDF's content is exposed to assistive technology and text extraction, set by the order of elements in the structure tree rather than by visual layout.",
  "description": "Reading order is the sequence assistive technology follows through a PDF. Learn how the structure tree defines it and why it differs from visual layout.",
  "searchIntent": "accessibility",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Reading order is the sequence in which the pieces of a PDF page — its headings, paragraphs, list items, table cells, and figures — are meant to be consumed, one after another. It is the difference between a document that a screen reader narrates coherently and one that jumps from a footer to a headline to the middle of a sidebar. Reading order is about meaning and sequence, not about where things happen to sit on the page.",
    "PDF keeps this logical sequence separate from how a page is painted. The visible layout is produced by drawing operations that can run in any order, so the sequence in which glyphs are placed on the page says nothing reliable about how they should be read. In a tagged PDF, the intended order lives in a separate logical structure — the structure tree — which a producer builds to reflect the human reading sequence.",
    "Because of this separation, two PDFs can look identical yet behave completely differently for anyone not reading the page visually. Reading order underpins screen-reader narration, content reflow on small screens, and dependable text extraction, and it is a central concern of PDF accessibility. This page explains where reading order comes from, why it can diverge from the visible layout, and what depends on getting it right."
  ],
  "sections": [
    {
      "heading": "Where Reading Order Comes From",
      "body": [
        "In a tagged PDF, content is organized into a hierarchy of structure elements — headings, paragraphs, lists, tables, and figures — held in the document's structure tree, which is rooted at the structure tree root in the document catalog. Reading the tree depth-first, element by element, yields the document's logical reading order. Each structure element points to the marked content it describes on the page through marked-content identifiers (MCIDs), so the abstract sequence in the tree stays tied to the concrete glyphs, images, and other objects on the page.",
        "Because the sequence lives in the structure tree rather than in the page's drawing instructions, a producer can present content to be read in an order that makes sense to a person even when the visual painting sequence does not. This is the mechanism that lets a well-authored PDF read correctly regardless of how its layout was assembled."
      ]
    },
    {
      "heading": "Why Drawing Order and Reading Order Differ",
      "body": [
        "A page's appearance is produced by a content stream: a list of drawing operations executed in sequence. That sequence is chosen for rendering convenience, not for meaning. A two-column article might draw the tops of both columns first, a heading might be painted after the body it introduces, and footnotes or running headers can appear anywhere in the stream. Nothing about the drawing order guarantees it matches how a human would read the page.",
        "Tagged PDF separates the two concerns. The content stream still controls what is painted and where, while the structure tree carries the intended reading order as a distinct logical layer. Consumers that understand tags follow the structure; consumers that do not fall back to the raw stream order or to positional guesses, which is precisely where reading problems creep in."
      ]
    },
    {
      "heading": "Reading Order in Tagged vs. Untagged PDFs",
      "body": [
        "When a PDF is untagged, there is no structure tree to consult, so the reading order a screen reader or extraction tool produces is inferred from the geometry of the content — where each run of text and each object sits on the page. These heuristics work reasonably for simple single-column pages but frequently misorder multi-column layouts, tables, sidebars, captions, and text that wraps around images.",
        "A tagged PDF removes that guesswork by stating the order explicitly. This is why tagging is the foundation of PDF accessibility, and why a document can look identical on screen yet behave very differently for assistive technology depending on whether it is tagged and how carefully its structure tree was ordered."
      ]
    },
    {
      "heading": "Why Reading Order Matters",
      "body": [
        "Reading order shapes the experience of anyone who does not consume the page purely visually. Screen readers announce content in reading order, so an incorrect order can make a document confusing or unusable even when every other tag is present and correct. Reflow — rearranging content to fit a small screen or a high zoom level — also follows the structure, as does reliable text selection, copying, and extraction.",
        "Standards build on this foundation. PDF/UA, the accessibility-focused member of the PDF standards family, is concerned with the logical reading order reflecting the intended reading order, and accessibility guidance such as WCAG treats a meaningful content sequence as a core consideration. Getting reading order right is therefore less about any single tag and more about the overall ordering of the structure tree."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Source of truth",
      "value": "Reading order comes from the structure tree, not the page's visual layout or the content stream's drawing order."
    },
    {
      "label": "Untagged PDFs",
      "value": "Reading order is inferred by the consuming software from geometry, which can misorder columns, tables, and sidebars."
    },
    {
      "label": "Link to content",
      "value": "Marked-content identifiers (MCIDs) tie each structure element to the actual glyphs and objects it describes."
    },
    {
      "label": "Standards",
      "value": "PDF/UA is concerned with the logical reading order matching the document's intended reading order."
    }
  ],
  "specification": {
    "introduced": "Logical structure appeared in PDF 1.3; Tagged PDF, which formalizes reading order, in PDF 1.4",
    "iso": "ISO 32000 (PDF); ISO 14289 (PDF/UA)",
    "typicalUsage": "Defining the sequence in which content is exposed to assistive technology, text reflow, and text extraction",
    "relatedStandards": [
      "pdf-ua-1",
      "wcag-and-pdf",
      "section-508-and-pdf"
    ]
  },
  "misconceptions": [
    {
      "claim": "If a PDF looks right on screen, its reading order must be correct.",
      "truth": "Visual appearance is produced by drawing operations and positioning, which are independent of the logical structure. A perfectly laid-out page can still expose its content in a jumbled order to a screen reader."
    },
    {
      "claim": "Reading order follows the order text appears in the content stream.",
      "truth": "The content stream lists drawing operations, which can place glyphs in any sequence. Reading order is defined separately by the order of elements in the structure tree."
    },
    {
      "claim": "Rearranging the pages fixes a reading-order problem.",
      "truth": "Page order and reading order are different things. Reading order concerns the sequence of content within the tag tree on each page, not the order of the pages themselves."
    }
  ],
  "faq": [
    {
      "q": "What decides the reading order in a tagged PDF?",
      "a": "The order of elements in the document's structure tree. Reading the tree depth-first gives the sequence, and each element is linked to its on-page content through marked-content identifiers, so the logical order and the actual glyphs stay connected."
    },
    {
      "q": "How is reading order determined when a PDF has no tags?",
      "a": "The software consuming the file guesses, using the position of text and objects on the page. These heuristics handle simple single-column pages but often misorder columns, tables, sidebars, and captions, which is why untagged PDFs can read unpredictably."
    },
    {
      "q": "Is reading order the same as tab order?",
      "a": "No. Tab order controls how keyboard focus moves through annotations and form fields, and is governed by a page's tab-order setting, which can be told to follow the structure. Reading order is the sequence of the document's content itself. They can be made to align but are separate mechanisms."
    },
    {
      "q": "Does reading order affect copied or extracted text?",
      "a": "It can. Extraction tools may follow the structure tree when tags are present or fall back to geometry when they are not, so a well-ordered tag tree tends to produce cleaner, more predictable extracted text."
    },
    {
      "q": "How can reading order be checked?",
      "a": "Accessibility checkers can flag some ordering problems, but reading order usually needs human review — following the tag sequence and confirming it matches how the page is meant to be read, since automated tools cannot judge intended meaning."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "marked-content-id",
      "structure-elements",
      "untagged-pdf",
      "pdf-text-extraction",
      "role-mapping",
      "heading-structure-in-pdf",
      "artifact-marking"
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
    "logical-structure",
    "marked-content",
    "standard-structure-types",
    "pdf-ua",
    "screen-readers-and-pdf",
    "well-tagged-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
