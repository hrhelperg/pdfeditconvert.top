import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-portfolios",
  "h1": "PDF Portfolios",
  "cluster": "metadata-tooling",
  "aliases": [
    "PDF Package",
    "PDF Collection",
    "Portfolio PDF"
  ],
  "definition": "A PDF Portfolio is a single PDF that acts as a container, holding multiple embedded files of different formats that each keep their own identity and are presented together as a navigable collection.",
  "description": "A PDF Portfolio wraps multiple files of any type inside one PDF as embedded files, presented as a browsable set through a collection dictionary.",
  "searchIntent": "metadata",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF Portfolio is a PDF whose main job is not to display pages of its own but to act as a wrapper around a set of other files. Those files can be ordinary PDFs, but they can also be word-processor documents, spreadsheets, images, or other formats, and each one is stored intact rather than being converted or flattened into the outer document. A supporting reader shows them as a collection you can browse, sort, and open individually.",
    "Adobe introduced this idea in the late-2000s Acrobat era, first as \"PDF Packages\" and then, more prominently, as \"PDF Portfolios\" in Acrobat 9. Under the surface it reuses two long-standing PDF features: embedded files and a collection layer described in the document catalog. That combination lets an organization hand out one file that behaves like a small folder, with a cover page, consistent metadata columns, and a single point of distribution.",
    "It helps to separate two things a portfolio is often confused with. Merging combines several documents into one continuous page stream, so the originals lose their boundaries. A portfolio does the opposite: it keeps every file whole and separate, and simply adds a presentation and navigation layer on top so the set can travel together."
  ],
  "sections": [
    {
      "heading": "How a PDF Portfolio is structured",
      "body": [
        "A PDF Portfolio is built from two mechanisms that already exist in the PDF format. The individual files are stored as embedded file streams, referenced through the EmbeddedFiles name tree that hangs off the Names entry in the document catalog. Each embedded file is described by a file specification dictionary, so the reader knows its original name, and often its size and modification dates, without unpacking anything.",
        "What turns a plain PDF with attachments into a portfolio is a Collection dictionary placed in the document catalog. When a conforming reader sees that entry, it stops treating the file as an ordinary page-based document and instead presents the embedded files as a managed collection. Because the files are embedded rather than merged, the portfolio's own byte size is roughly the sum of everything it carries plus a small amount of structural overhead."
      ]
    },
    {
      "heading": "The collection presentation layer",
      "body": [
        "The Collection dictionary carries the settings that control how the set is shown. A collection schema defines the columns, or fields, that describe each item, such as name, size, and dates, along with their order and visibility, while sort and initial-view settings decide how the list first appears and whether it opens in a details, tile, or custom layout. Per-item metadata for those columns is attached to each embedded file, so the same field can be populated differently for every document in the collection.",
        "Early portfolios could also point to a custom navigator, a Flash-based (SWF) interface that gave the collection a bespoke layout and branding. After Flash reached end of life, those custom navigators stopped working in modern viewers, which now fall back to their own built-in layouts. The underlying embedded files are unaffected by this, since the navigator only governs presentation, not storage."
      ]
    },
    {
      "heading": "Compatibility and the cover sheet",
      "body": [
        "A portfolio container normally still has at least one visible page, often called a cover sheet or welcome page. Readers that understand collections may hide it behind the collection UI, but readers that ignore the Collection dictionary simply render that page like any other PDF. This is why an unsupported viewer often shows a short message inviting the reader to open the file in a collection-aware application.",
        "Even without full portfolio support, most PDF readers can still reach the contents, because the embedded files live in a standard attachments structure. A basic viewer can typically list and extract those attachments through its attachments or file panel; what it cannot reproduce is the richer sorting, columns, and layout that the collection layer describes."
      ]
    },
    {
      "heading": "Portfolios, attachments, and merged PDFs",
      "body": [
        "It is worth distinguishing three related outcomes. A merged PDF concatenates documents into one continuous sequence of pages, so the boundaries between the originals dissolve and the result reads as a single document. Plain attachments embed extra files inside an otherwise normal PDF, reachable through an attachments panel but without any organizing presentation. A portfolio sits on top of that attachment mechanism and adds the collection layer, so the embedded files are meant to be browsed as a first-class set rather than as side attachments.",
        "The practical trade-off is fidelity versus simplicity. A portfolio preserves each source file exactly, including non-PDF formats, which is useful when recipients need the originals. Merging produces one flat, universally readable document that any PDF reader can page through, which is often preferable when the goal is a single deliverable rather than a bundle of separate files."
      ]
    },
    {
      "heading": "Metadata and archival considerations",
      "body": [
        "Because a portfolio is metadata-heavy, it interacts with the broader PDF metadata model. The container has its own document-level metadata, while each embedded file can carry both its own internal metadata and the per-item field values that populate the collection's columns. This makes portfolios a natural fit for the metadata-tooling side of PDF, where the structure that describes and organizes files matters as much as the file content itself.",
        "Archival and exchange standards treat embedded files carefully. Some conformance levels permit embedding other files under defined conditions, and PDF 2.0 also formalizes associated files, which attach a file to a PDF with an explicit stated relationship. Whether a given portfolio satisfies a particular archival profile depends on the conformance level being targeted and on the nature of the embedded files, so the collection presentation itself is not a guarantee of conformance."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Container mechanism",
      "value": "Built on PDF embedded files plus a Collection dictionary in the document catalog"
    },
    {
      "label": "File types",
      "value": "Can hold heterogeneous formats — PDFs, office documents, images, and more, stored intact"
    },
    {
      "label": "Origin",
      "value": "Popularized by Adobe Acrobat 9, evolving from earlier PDF Packages"
    },
    {
      "label": "Fallback",
      "value": "Includes a cover page shown by readers that do not support collections"
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "typicalUsage": "Bundling a set of related files into one navigable PDF container while keeping each file intact",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-a-3"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF Portfolio is just several PDFs merged into one document.",
      "truth": "Merging flattens documents into one continuous page stream; a portfolio keeps every file separate and whole, adding only a presentation and navigation layer on top."
    },
    {
      "claim": "You need Adobe Acrobat to open a PDF Portfolio at all.",
      "truth": "Any PDF reader can open the container. Readers without collection support show the cover page and can usually still extract the embedded files; only the rich collection UI requires a supporting viewer."
    },
    {
      "claim": "A portfolio can only contain PDF files.",
      "truth": "It can embed many file types, including office documents, images, and other formats, each stored as its own embedded file within the collection."
    }
  ],
  "faq": [
    {
      "q": "How is a PDF Portfolio different from ordinary PDF attachments?",
      "a": "Both rely on the same embedded-files mechanism, but a portfolio adds a Collection dictionary that defines columns, sorting, and a layout, so the files are browsed as a first-class set rather than reached through a secondary attachments panel."
    },
    {
      "q": "What happened to Flash-based portfolio navigators?",
      "a": "Early portfolios could use a custom SWF navigator for bespoke layouts. After Flash reached end of life, those custom navigators no longer work, and modern viewers fall back to their own built-in layouts while the embedded files remain intact."
    },
    {
      "q": "Are the documents inside a portfolio searchable?",
      "a": "A collection-aware reader can index and search across the embedded documents, but whether text is found still depends on each embedded file containing an actual text layer rather than only scanned images."
    },
    {
      "q": "Where is the portfolio structure stored inside the file?",
      "a": "The presentation settings live in a Collection dictionary in the document catalog, while the actual files are held as embedded file streams in the EmbeddedFiles name tree."
    },
    {
      "q": "Can a PDF Portfolio be used as an archival PDF?",
      "a": "Some archival conformance levels permit embedded files under defined conditions, but the collection presentation is not itself part of what those standards guarantee, so conformance depends on the target level and the embedded files."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "embedded-files-in-pdf",
      "associated-files-in-pdf",
      "pdf-document-catalog",
      "document-information-dictionary"
    ],
    "relatedStandards": [
      "pdf-2-0",
      "pdf-a-3",
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "Merge PDF — Combine PDFs in Your Browser (Free, No Upload)",
        "path": "/merge-pdf"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Merge PDF Files on Phone or Desktop",
        "path": "/guides/how-to-merge-pdf-files"
      },
      {
        "label": "How to Organize PDF Files — A Practical Workflow",
        "path": "/guides/how-to-organize-pdf-files"
      }
    ]
  },
  "seeAlso": [
    "embedded-files-in-pdf",
    "associated-files-in-pdf",
    "pdf-document-catalog",
    "pdf-metadata",
    "pdf-2-0",
    "pdf-a-3",
    "pdf-file-structure"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
