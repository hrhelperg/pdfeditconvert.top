import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "linearized-pdf",
  "h1": "Linearized PDF (Fast Web View)",
  "cluster": "foundations",
  "aliases": [
    "Fast Web View",
    "Web-Optimized PDF",
    "Linearization",
    "Optimized for Fast Web View"
  ],
  "definition": "A linearized PDF is a file whose internal objects are arranged so a viewer can show the first page before the whole document downloads, the layout Adobe Acrobat labels Fast Web View.",
  "description": "Linearized PDF (Fast Web View) reorders a file's objects and adds hint tables so a viewer can show the first page while the rest downloads.",
  "searchIntent": "specification",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Most PDF files store their master cross-reference table — the index that tells a viewer where every object lives — at the very end of the file. To render even the first page, a reader normally has to reach that trailer, which over a slow connection can mean waiting for much of the document to arrive. A linearized PDF rearranges the same content so that everything needed for the first page, along with a small cross-reference section, sits near the front of the file.",
    "Because of that layout, a compatible viewer can display page one almost immediately and then fetch the remaining pages afterward — or, when the file is hosted on a server that supports HTTP byte-range requests, retrieve only the bytes for a specific page on demand. Adobe Acrobat exposes this as the 'Fast Web View' property, which is why linearization and Fast Web View refer to the same thing.",
    "Linearization is optional and fully backward compatible: a linearized file is still an ordinary, valid PDF, and viewers that do not take advantage of the layout simply open it the usual way. The trade-off is that the file must be written in a single pass with its objects in a prescribed order, so the benefit is easily lost the moment the document is edited and saved incrementally."
  ],
  "sections": [
    {
      "heading": "How a Linearized PDF Is Organized",
      "body": [
        "A linearized file follows a strict internal order. Immediately after the file header comes a special linearization parameter dictionary — the first indirect object in the file — that records values such as the total file length, the number of pages, the object number of the first page, and the location of the hint data. A viewer reads this dictionary first to learn how the file is laid out and to confirm that the linearization is intact.",
        "Following that dictionary, the file groups together the objects needed to show the first page, a cross-reference section covering those objects, and one or more hint streams. The remaining pages' objects come next, and the document's main cross-reference table still appears at the end. In effect, a linearized PDF carries two cross-reference sections: a partial one near the beginning for the first page and catalog, and the complete one in its traditional place at the end."
      ]
    },
    {
      "heading": "First-Page Display and Page-at-a-Time Downloading",
      "body": [
        "Linearization is built to support two related behaviors. The first is opening the document quickly: because the first page's objects and their cross-reference entries are near the front, a viewer can paint page one before the rest of the file has transferred. The second is page-at-a-time downloading, where a viewer jumps directly to, say, page 40 of a long document without first pulling pages 2 through 39.",
        "The mechanism behind on-demand page access is the hint table. Hint streams — chiefly a page-offset hint table and a shared-object hint table — record the byte position and length of the objects belonging to each page and of objects shared across pages. Combined with a web server that honors HTTP byte-range requests, this lets a viewer request exactly the bytes it needs for a given page. Without byte-range support the page-at-a-time optimization does not apply, although the first page can still appear early during an ordinary progressive download."
      ]
    },
    {
      "heading": "Why the Cross-Reference Layout Is the Key",
      "body": [
        "The reason linearization exists at all comes down to where a PDF keeps its cross-reference data. In a conventional file the trailer and cross-reference table are the last things written, so a reader effectively works backward from the end of the file. That is efficient for local access but awkward for streaming, because the index arrives last. Linearization solves this by duplicating just enough of that index near the front and ordering the objects so the pieces the viewer needs first are also physically first.",
        "This same design is what makes linearization fragile. Editing a PDF and saving it as an incremental update appends new objects and a new cross-reference section to the end of the file, which changes the file length and object offsets the linearization dictionary promised. A conforming viewer detects the mismatch — for example, the recorded length no longer matching the actual file — and treats the document as an ordinary, non-linearized PDF. Restoring Fast Web View then requires rewriting the whole file rather than appending to it."
      ]
    },
    {
      "heading": "Fast Web View in Practice",
      "body": [
        "Whether linearization helps depends on how a document is delivered. Its advantages are most visible for large PDFs served over the web from a byte-serving-capable host and viewed in the browser; for a file opened from local storage, the difference is usually negligible. Because linearization adds hint tables and a second cross-reference section, a linearized file can be marginally larger than the same content saved normally — it optimizes load order, not size.",
        "Authoring tools typically produce linearized output as a save or export option, often bundled with other cleanup such as compression and removal of unused objects. In Adobe Acrobat the relevant setting is labeled Fast Web View, and a document's properties will report whether Fast Web View is enabled. Because the layout is easily undone by later edits, linearization is most useful when applied as a final step before a PDF is published or distributed."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Also known as",
      "value": "Fast Web View — Adobe Acrobat's name for saving a PDF in linearized form"
    },
    {
      "label": "Server requirement",
      "value": "Page-at-a-time downloading needs a server that supports HTTP byte-range requests"
    },
    {
      "label": "Internal marker",
      "value": "Begins with a linearization parameter dictionary as the file's first object, plus hint tables that locate each page's data"
    },
    {
      "label": "Compatibility",
      "value": "Optional and backward compatible; a linearized file is still a standard, valid PDF"
    }
  ],
  "specification": {
    "iso": "ISO 32000 (documented in an annex to the specification)",
    "typicalUsage": "Serving large PDFs on the web so the first page appears while the rest of the file streams, and enabling page-at-a-time retrieval from a byte-serving server.",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-7",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Linearizing a PDF makes the file smaller.",
      "truth": "Linearization reorganizes objects and adds hint tables and a second cross-reference section, so it can slightly increase size. It changes load order, not compression; size reductions come from separate optimization steps that are often performed at the same time."
    },
    {
      "claim": "A linearized PDF always opens faster.",
      "truth": "The speed-up mainly appears when streaming a large file over a network from a byte-serving server. Opening a file already on your device, or using a viewer that ignores the layout, offers little or no benefit."
    },
    {
      "claim": "Fast Web View is a different feature from linearization.",
      "truth": "They are the same thing. 'Fast Web View' is simply the label Adobe Acrobat uses for a PDF that has been linearized."
    }
  ],
  "faq": [
    {
      "q": "How can I tell whether a PDF is linearized?",
      "a": "In Adobe Acrobat, the document's properties list a 'Fast Web View' field that reads Yes or No. Structurally, a linearized file always begins — right after the header — with a linearization parameter dictionary as its first object, so tools that inspect PDF internals can detect it as well."
    },
    {
      "q": "Does linearization change how a PDF looks or prints?",
      "a": "No. Linearization only affects the order of objects inside the file and adds hint data. The pages, text, images, and everything a reader sees are identical to the non-linearized version."
    },
    {
      "q": "Do I need a special server to benefit from linearization?",
      "a": "To fetch individual pages on demand, yes — the server must support HTTP byte-range requests (byte-serving). Even without that, a linearized file can still show its first page early while the rest downloads normally."
    },
    {
      "q": "Does editing a linearized PDF keep it linearized?",
      "a": "Usually not. Saving edits as an incremental update appends data to the end of the file and invalidates the offsets recorded in the linearization dictionary, so viewers fall back to treating it as a normal PDF. Re-linearizing means rewriting the entire file."
    },
    {
      "q": "Is linearization the same as optimizing a PDF?",
      "a": "Not exactly. Optimization is a broader idea that includes compressing streams, subsetting fonts, and discarding unused objects. Linearization is one specific technique focused on load order for the web, though optimization tools often apply it alongside those other steps."
    }
  ],
  "graph": {
    "parentConcept": "portable-document-format",
    "relatedConcepts": [
      "pdf-document-catalog",
      "pdf-xref-streams",
      "pdf-header",
      "pdf-file-size-factors",
      "iso-32000"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Compress a PDF (Without Losing Quality)",
        "path": "/guides/how-to-compress-pdf"
      },
      {
        "label": "How to Send Large PDF Files (5 Reliable Ways)",
        "path": "/guides/how-to-send-large-pdf-files"
      }
    ]
  },
  "seeAlso": [
    "pdf-file-structure",
    "pdf-cross-reference-table",
    "pdf-incremental-updates",
    "pdf-trailer",
    "pdf-optimization",
    "portable-document-format",
    "pdf-page-tree"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
