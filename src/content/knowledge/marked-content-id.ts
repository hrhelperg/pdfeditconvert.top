import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "marked-content-id",
  "h1": "Marked Content IDs (MCID)",
  "cluster": "accessibility",
  "aliases": [
    "MCID",
    "marked content identifier",
    "marked-content ID",
    "MCID entry"
  ],
  "definition": "A Marked Content ID (MCID) is a non-negative integer that labels a marked-content sequence in a PDF content stream so it can be linked to a node in the document's logical structure tree.",
  "description": "How MCIDs tie runs of text and images on a PDF page to structure elements, giving tagged PDFs their reading order and accessibility.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "In a tagged PDF, the visible marks on a page — the runs of text, the images, the drawn shapes — live in a content stream that describes only how to paint them, not what they mean. A Marked Content ID, or MCID, is the small integer that bridges that gap: it labels a sequence of painting operators so that a separate logical structure tree can claim it as the content of a heading, a paragraph, a table cell, or a figure.",
    "MCIDs are the anchor points of the two-way relationship between what a PDF looks like and what it means. Without them, a structure element would have no way to point at the exact glyphs it represents, and a viewer would have no way to walk backward from a piece of content to the element that gives it meaning and its place in the reading order.",
    "Because MCIDs sit at the seam between the content stream and the structure tree, understanding them is essential to understanding how tagged PDF, accessibility tooling, and reliable text extraction actually work. They are defined as part of the marked-content facility in the PDF specification and are what standards such as PDF/UA depend on when they call for content to be properly associated with structure."
  ],
  "sections": [
    {
      "heading": "How an MCID appears in a content stream",
      "body": [
        "Marked content is delimited by operators inside the content stream. A BDC operator (\"begin marked content with property list\") takes a tag name and a property list, and a matching EMC operator (\"end marked content\") closes the sequence. When the property list carries an /MCID entry whose value is an integer, that entire run of painting operators becomes an addressable marked-content sequence. The simpler BMC operator takes only a tag and no property list, so it cannot carry an MCID.",
        "The MCID value is a non-negative integer that is unique within a single content stream — a page's content, a form XObject, and an annotation's appearance stream each number their own MCIDs independently. In practice a producer assigns them sequentially from 0 as it walks the content, because the numbers double as array indices when the reverse lookup is built. The tag on the BDC operator is a separate thing from the MCID and does not, by itself, define the content's semantic role."
      ]
    },
    {
      "heading": "Linking content to the logical structure tree",
      "body": [
        "The structure tree describes meaning, and the MCID is how each structure element points at the content that carries that meaning. A structure element lists its children in a /K (kids) array, and an entry there can be a plain integer — interpreted as an MCID within the content stream of the page named by the element's /Pg entry — or a marked-content reference dictionary that spells out the page, stream, and MCID explicitly. That is the forward direction: from an element to its marks.",
        "The reverse direction uses a parent tree. The structure tree root holds a /ParentTree (a number tree), and every page with tagged content has a /StructParents key into it. Looking that key up yields an array, and the MCID indexes into the array to find the structure element that owns the sequence. Single content items such as annotations or form XObjects instead carry a /StructParent key that resolves to their owning element directly. Together these let a tool answer both \"what content belongs to this element?\" and \"what element does this glyph belong to?\""
      ]
    },
    {
      "heading": "Why MCIDs matter for accessibility, reflow, and extraction",
      "body": [
        "Assistive technology does not read a PDF in the order marks happen to appear in the content stream; it follows the logical structure tree. MCIDs are what make that possible, because they let a screen reader map each element, in reading order, back to the exact text and images on the page. The same association drives reflow on small screens and makes properties attached to structure — alternate text for figures, expansions of abbreviations, language changes — line up with the right content.",
        "This is why accessibility-focused standards lean on the mechanism. PDF/UA (ISO 14289) describes conforming files in which real content is tagged and associated with structure, while artifacts — purely decorative or repeating page furniture — are marked as such so they are excluded. MCIDs are the connective tissue underneath those requirements: they turn a flat sequence of painting instructions into content that a machine can navigate by meaning."
      ]
    },
    {
      "heading": "Scope, uniqueness, and where MCIDs stop",
      "body": [
        "The most important caveat is scope. An MCID identifies a sequence only within one content stream, so the same integer legitimately reappears on other pages and inside other XObjects. Resolving an MCID therefore always requires knowing its stream as well — usually the page, via the structure element's /Pg entry or a marked-content reference's /Stm. This is also why MCID numbering restarts at 0 for each stream.",
        "It is equally important to know what an MCID does not do. It carries no semantics of its own; it is only an identity label. The heading-ness of a heading or the cell-ness of a table cell comes from the structure element and its (possibly role-mapped) type, not from the MCID or even the BDC tag beside it. And associating content with structure is just one ingredient of a usable tagged PDF: correct reading order, meaningful element types, alternate text, and artifact marking all have to be right as well."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Data type",
      "value": "Non-negative integer, unique within a single content stream"
    },
    {
      "label": "Written with",
      "value": "A BDC operator carrying an /MCID property-list entry, closed by EMC"
    },
    {
      "label": "Defined in",
      "value": "ISO 32000 (PDF); relied on by PDF/UA, ISO 14289"
    },
    {
      "label": "Introduced",
      "value": "Marked content in PDF 1.2; used for tagged PDF from PDF 1.4"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1 / ISO 32000-2",
    "introduced": "PDF 1.2 (marked content); PDF 1.4 (tagged PDF)",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Associating text, images, and other page content with nodes in a PDF's logical structure tree for accessibility, reflow, and reliable extraction.",
    "relatedStandards": [
      "iso-32000",
      "pdf-ua"
    ]
  },
  "misconceptions": [
    {
      "claim": "An MCID is a global identifier that is unique across the whole PDF.",
      "truth": "MCIDs are unique only within a single content stream; the same number recurs on other pages and in other XObjects, so resolving one requires knowing its stream or page as well."
    },
    {
      "claim": "The tag written next to an MCID in the BDC operator determines the content's role, such as heading or list.",
      "truth": "The semantic role comes from the structure element in the structure tree and its role-mapped type; the marked-content tag is not required to match it and does not define meaning on its own."
    },
    {
      "claim": "Adding MCIDs to a page is enough to make a PDF accessible.",
      "truth": "MCIDs only link content to structure. Accessibility also depends on a correct structure tree, sensible reading order, alternate text, artifact marking, and other tagging being present."
    }
  ],
  "faq": [
    {
      "q": "What does MCID stand for?",
      "a": "It stands for Marked Content Identifier. It is the integer value of the /MCID entry that labels a marked-content sequence inside a PDF content stream."
    },
    {
      "q": "Where exactly is the MCID stored?",
      "a": "In the content stream itself, as an /MCID key in the property list of a BDC operator (for example, /P <</MCID 0>> BDC ... EMC). It is not stored in the structure tree, although the structure tree points at it."
    },
    {
      "q": "How does a viewer find the structure element for a piece of content?",
      "a": "It reads the page's /StructParents key, looks that key up in the structure tree root's parent tree to get an array, and uses the MCID as the index into that array to reach the owning structure element."
    },
    {
      "q": "Do images and annotations use MCIDs?",
      "a": "An image or shape painted on the page can sit inside a marked-content sequence and so be tied to a Figure element by MCID. Annotations are usually linked through an object reference (OBJR) and a /StructParent key rather than an MCID, and a form XObject numbers its own MCIDs internally."
    },
    {
      "q": "Can you edit MCIDs by hand?",
      "a": "They live in the raw content stream and the parent tree, and the two must stay consistent, so they are normally managed by tagging and accessibility tools rather than edited directly."
    }
  ],
  "graph": {
    "parentConcept": "marked-content",
    "relatedConcepts": [
      "role-mapping",
      "pdf-alt-text",
      "well-tagged-pdf",
      "screen-readers-and-pdf",
      "pdf-text-extraction",
      "form-xobjects"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1",
      "iso-32000"
    ]
  },
  "seeAlso": [
    "marked-content",
    "tagged-pdf",
    "pdf-structure-tree",
    "structure-elements",
    "logical-structure",
    "reading-order",
    "artifact-marking",
    "pdf-content-streams"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
