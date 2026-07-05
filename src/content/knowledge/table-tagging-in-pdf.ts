import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "table-tagging-in-pdf",
  "h1": "Table Tagging in PDF",
  "cluster": "accessibility",
  "aliases": [
    "Tagged tables in PDF",
    "PDF table structure elements",
    "Accessible PDF tables",
    "Table structure tagging"
  ],
  "definition": "Table tagging in PDF marks a table's rows, header cells, and data cells as logical-structure elements so its row and column relationships are exposed to assistive technology, not just drawn visually.",
  "description": "How PDF tables are marked with Table, TR, TH and TD structure elements — plus header associations and spanning attributes — so assistive technology can read them.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A table on a PDF page is, by default, only visual output: text placed at coordinates, with lines drawn to suggest a grid. Nothing in that arrangement tells software that a given number belongs to a particular row and column, or which cells are headers. Table tagging supplies the missing meaning by adding a parallel tree of logical-structure elements that describe the table as a table.",
    "These elements live in the PDF's structure tree — the tagged-PDF logical structure — and closely mirror the way tables are described in markup languages such as HTML. A Table element contains rows, rows contain header and data cells, and attributes record how cells span and which headers govern which data. Assistive technology walks this tree instead of trying to guess relationships from the visual layout.",
    "Because complex tables carry relationships that cannot be inferred from position alone, table tagging is one of the more demanding parts of producing a well-tagged PDF. It matters most for screen reader users, who rely on the tags to hear, for any given cell, the headers that give that value its context."
  ],
  "sections": [
    {
      "heading": "The structure elements that build a table",
      "body": [
        "The core of a tagged table is a Table structure element. Inside it, rows are marked with TR (table row) elements, and each row contains cells: TH for a header cell and TD for a data cell. Optional row-group elements — THead, TBody, and TFoot — group the header, body, and footer rows, and a Caption element can carry the table's title or description. These standard structure types correspond closely to the equivalent elements in HTML, which is deliberate: it lets tools and role mapping translate table meaning consistently between formats.",
        "The nesting has to be well formed. A conformant table places TR elements — directly or within row groups — under the Table element, and TH or TD cells under each TR, in reading order. Cells hold the actual content, which can be text, images, or even nested tables. Software that reads the table depends on this hierarchy being correct; a grid that merely looks right on the page but has flat or mis-nested tags will not be navigable as a table."
      ]
    },
    {
      "heading": "Linking header cells to data cells",
      "body": [
        "Identifying which cells are headers is only half the job; assistive technology also needs to know which headers apply to which data cell. For straightforward tables, the Scope attribute on a TH cell states whether that header governs its Row, its Column, or Both. A screen reader can then announce the relevant row and column headers as the user moves across the body of the table.",
        "More complex tables — those with multiple levels of headers, or headers that do not sit neatly along the top or left edge — use explicit associations. Each header cell is given an ID, and data cells carry a Headers attribute listing the IDs of the header cells that describe them. This mirrors the id/headers mechanism in HTML tables and removes ambiguity about header-to-data relationships that a simple Scope value cannot express on its own."
      ]
    },
    {
      "heading": "Spanning and irregular cells",
      "body": [
        "Real tables rarely form a perfect grid. When a cell spans several columns or rows, the ColSpan and RowSpan attributes record how many columns or rows it covers, so the underlying logical grid can be reconstructed even though the visible cell is merged. Without these attributes, a merged heading can throw off the alignment between headers and data, which may lead assistive technology to associate values with the wrong column or row."
      ]
    },
    {
      "heading": "How the tags connect to what is drawn",
      "body": [
        "The structure tree describes the table abstractly, while the visible cell contents live in the page's content stream. The two are joined through marked content: runs of content-stream operators are tagged with a marked-content identifier (MCID), and the corresponding structure element references that identifier. By following these links, a reader can move from a TD element to the exact text drawn on the page, and back again.",
        "Parts of a table that carry no information — background fills, ruling lines, or decorative shading — are marked as artifacts so they are excluded from the logical structure and are not announced. Keeping genuine content in the structure tree and decorative graphics out of it is part of what makes a tagged table read cleanly."
      ]
    },
    {
      "heading": "Table tagging and accessibility standards",
      "body": [
        "Table tagging is central to what accessibility standards expect from a PDF. PDF/UA, the standard for universally accessible PDF, treats correct table structure — genuine header cells and clear header associations — as part of making tables usable by assistive technology, and general accessibility guidance such as WCAG addresses the same header-and-data relationships at the content level.",
        "A related pitfall is using table structure for content that is only arranged in a grid for appearance. Forcing non-tabular content into a Table element can cause a screen reader to announce row and column relationships that carry no real meaning, so table tags are best reserved for genuine tabular data rather than for visual layout."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Core structure types",
      "value": "Table, TR (row), TH (header cell), TD (data cell)"
    },
    {
      "label": "Row groups and caption",
      "value": "THead, TBody, TFoot, plus an optional Caption"
    },
    {
      "label": "Spanning cells",
      "value": "ColSpan and RowSpan attributes reconstruct the logical grid"
    },
    {
      "label": "Header association",
      "value": "Scope on TH cells; a Headers array referencing header cell IDs"
    }
  ],
  "specification": {
    "introduced": "Tagged PDF logical structure, PDF 1.4",
    "iso": "ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Marking a data table's rows, header cells, data cells, and header associations so its structure is available to assistive technology.",
    "relatedStandards": [
      "pdf-ua-1",
      "pdf-ua"
    ]
  },
  "misconceptions": [
    {
      "claim": "If a table looks like a table on the page, a screen reader will read it as a table.",
      "truth": "Visual rows and columns are just positioned text and drawn lines; without Table, TR, TH and TD structure elements the table is effectively invisible to assistive technology."
    },
    {
      "claim": "Wrapping the content in a Table tag is all that a table needs.",
      "truth": "Cells still need header cells marked as TH and, for anything beyond a simple grid, explicit header associations through Scope or the Headers attribute so each data cell can be tied to its headers."
    },
    {
      "claim": "Content laid out in a grid only for appearance should also be tagged as a table.",
      "truth": "Tagging layout-only grids as data tables can make assistive technology announce row and column relationships that have no meaning; table structure is intended for genuine tabular data."
    }
  ],
  "faq": [
    {
      "q": "Which structure elements make up a tagged table?",
      "a": "A Table element contains rows (TR), and each row contains header cells (TH) and data cells (TD). Rows may be grouped with THead, TBody and TFoot, and a Caption element can hold the table's title or description."
    },
    {
      "q": "How are header cells linked to the data cells they describe?",
      "a": "For simple tables, the Scope attribute on a TH cell indicates whether it applies to its row, its column, or both. For complex tables, each header is given an ID and each data cell carries a Headers attribute listing the IDs of its header cells."
    },
    {
      "q": "How are merged cells that span rows or columns represented?",
      "a": "The ColSpan and RowSpan attributes record how many columns or rows a cell covers, allowing the underlying logical grid to be reconstructed even though the cell appears merged on the page."
    },
    {
      "q": "How do the tags connect to the text actually drawn in each cell?",
      "a": "Cell contents in the content stream are wrapped in marked content and given a marked-content identifier (MCID); the matching structure element references that identifier, linking each TH or TD to the exact text on the page."
    },
    {
      "q": "What do accessibility standards expect from tagged tables?",
      "a": "PDF/UA and general guidance such as WCAG describe tables as needing correct structure with identified header cells and clear header-to-data associations, so that assistive technology can convey the meaning of each cell rather than just its position."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "marked-content-id",
      "reading-order",
      "screen-readers-and-pdf",
      "pdf-alt-text",
      "artifact-marking",
      "pdf-accessibility-checking",
      "wcag-and-pdf"
    ],
    "relatedStandards": [
      "pdf-ua-1",
      "pdf-ua"
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "pdf-structure-tree",
    "standard-structure-types",
    "structure-elements",
    "role-mapping",
    "well-tagged-pdf",
    "list-tagging-in-pdf",
    "pdf-ua"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
