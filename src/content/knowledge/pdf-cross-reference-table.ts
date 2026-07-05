import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-cross-reference-table",
  "h1": "The PDF Cross-Reference Table",
  "cluster": "foundations",
  "aliases": [
    "xref table",
    "cross-reference table",
    "PDF xref",
    "cross-reference section"
  ],
  "definition": "The PDF cross-reference table is an index near the end of a PDF that records the byte offset of every indirect object, letting a reader jump directly to any object without scanning the whole file.",
  "description": "How the PDF cross-reference table maps object numbers to byte offsets, how its 20-byte entries and free list work, and why xref damage breaks PDFs.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF file body is a loose collection of numbered indirect objects stored in no particular order. To draw a single page, a reader has to find the exact object that describes it, and often several more that it references. The cross-reference table is the index that makes this fast: for every object number, it records the precise byte position in the file where that object begins.",
    "Because of this index, a PDF is effectively read from the end forward. The reader seeks to the tail of the file, reads the trailer and its startxref pointer, jumps to the cross-reference table, and from there locates the document catalog, the page tree, and any individual object on demand. Without the table, a program would have to scan the entire file to discover where each object lives.",
    "There are two physical forms of this index. The classic form described here is human-readable text that begins with the keyword xref. PDF 1.5 introduced a compressed binary alternative, the cross-reference stream, which does the same job and is covered on its own page. Understanding the classic table is the foundation for both."
  ],
  "sections": [
    {
      "heading": "How the table is laid out",
      "body": [
        "A classic cross-reference table starts with the keyword xref on its own line, followed by one or more subsections. Each subsection begins with a header line of two integers: the object number of the first entry in that subsection and the number of entries that follow. This lets the table describe contiguous runs of object numbers, and describe several runs when object numbers are not contiguous.",
        "Every entry is a fixed-width record of exactly 20 bytes: a 10-digit number, a 5-digit number, a single keyword character (n or f), and a two-character end-of-line. For an in-use entry (n), the 10-digit field is the byte offset of that object measured from the very first byte of the file, and the 5-digit field is its generation number. Because every entry is the same length, a reader can compute the file position of any entry arithmetically instead of parsing line by line."
      ]
    },
    {
      "heading": "Free entries, object 0, and generation numbers",
      "body": [
        "Not every entry points to a live object. Entries marked f are free, meaning that object number is currently unused. Free entries are linked together into a chain: in a free entry the 10-digit field is not a byte offset but the object number of the next free entry, and the 5-digit field is the generation number that a future object should take if that number is reused. Object 0 is always the head of this free list and always carries generation number 65535, the maximum value; the last free entry in the chain points back to object 0.",
        "Generation numbers exist because object numbers can be recycled over a file's editing history. When an object is deleted its entry becomes free and its generation is bumped, so a later object that reuses the same number is distinguishable from the old one. In practice the overwhelming majority of in-use objects carry generation 0, and a reference such as 12 0 R names object 12, generation 0."
      ]
    },
    {
      "heading": "Finding an object with startxref and the trailer",
      "body": [
        "The cross-reference table does not stand alone. Immediately after it comes the trailer, a small dictionary that names the document root (Root), states the total entry count (Size), and other file-level information. After the trailer, the keyword startxref gives the byte offset of the cross-reference table itself. Together the table and the trailer form what the specification calls a cross-reference section.",
        "This arrangement is what gives PDF random access. A reader opens the file at the end, follows startxref to the table, reads Root to reach the document catalog, and then walks the page tree, loading only the objects it actually needs. A viewer can render page 500 of a long document without parsing the preceding pages, and features such as linearized (fast web view) PDFs build on exactly this ability to fetch objects by offset."
      ]
    },
    {
      "heading": "Incremental updates and chained sections",
      "body": [
        "When a PDF is edited without rewriting the whole file, the new and changed objects are appended to the end, followed by a fresh cross-reference section that describes only those objects. Each new trailer carries a Prev entry giving the byte offset of the previous cross-reference section, forming a chain a reader follows backward to assemble the complete, current view of every object.",
        "This is how incremental updates preserve earlier states of a document rather than overwriting them, which is significant for signed PDFs: the bytes of a previously signed revision remain intact, and later changes are layered on top. A single file can therefore contain several cross-reference sections, each valid for the revision that produced it."
      ]
    },
    {
      "heading": "When the table is wrong",
      "body": [
        "Because the cross-reference table is a table of exact byte positions, it is fragile. If a file is truncated, edited by hand, or produced by a tool that miscounts bytes, the recorded offsets stop matching where the objects actually sit. A reader that trusts a bad offset will fail to find the object it expected, which commonly surfaces as a document that won't open, renders blank, or reports damage.",
        "Many readers respond by rebuilding the index: they scan the whole file for object markers of the form number number obj, note where each one really begins, and reconstruct a correct table in memory. That recovery is the mechanism behind much PDF repair, and it is also why a file with a broken xref can sometimes still be opened while a file missing its objects cannot."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Entry size",
      "value": "Each classic cross-reference entry is exactly 20 bytes, including its end-of-line marker."
    },
    {
      "label": "Offset origin",
      "value": "In-use byte offsets are measured from the very first byte of the file."
    },
    {
      "label": "Free-list head",
      "value": "Object 0 is always a free entry and always has generation number 65535."
    },
    {
      "label": "Locator",
      "value": "The trailer's startxref value gives the byte offset of the cross-reference table."
    }
  ],
  "specification": {
    "introduced": "PDF 1.0 (original format)",
    "typicalUsage": "Locating indirect objects by number so a reader can access any object directly when reading or updating a PDF.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "The cross-reference table stores the PDF's objects.",
      "truth": "It stores only pointers, the byte offsets where objects begin. The objects themselves live in the file body ahead of the table."
    },
    {
      "claim": "Every PDF has a text table that starts with the keyword xref.",
      "truth": "Since PDF 1.5 a file can use a compressed cross-reference stream instead, and PDFs that pack objects into object streams require one."
    },
    {
      "claim": "The offsets are counted from the trailer or the start of the body.",
      "truth": "In-use offsets are counted from the first byte of the whole file, byte 0."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between the cross-reference table and the trailer?",
      "a": "The table is the index of object offsets; the trailer is the short dictionary right after it that names the document root, states the total object count, and points to the table via startxref. Together they make up one cross-reference section."
    },
    {
      "q": "Why is a PDF read from the end?",
      "a": "The trailer and its startxref pointer sit at the end of the file and tell the reader where the cross-reference table is. From the table the reader can locate any object directly, so it never has to scan the file front to back."
    },
    {
      "q": "What are generation numbers for?",
      "a": "They distinguish object numbers that have been reused over a file's edit history. When a number is freed its generation is incremented, so a later object reusing that number is distinct. Most live objects have generation 0."
    },
    {
      "q": "What happens when the cross-reference table is corrupt?",
      "a": "If offsets are wrong or the table is missing, a reader can't reliably find objects and may show an error, a blank page, or a damage warning. Many viewers then rebuild the table by scanning the file for object markers."
    },
    {
      "q": "How does a classic xref table differ from a cross-reference stream?",
      "a": "They do the same job, mapping object numbers to their locations. The stream form is a compressed binary object that also supports object streams and is standard in newer PDFs, while the classic table is plain text beginning with xref."
    }
  ],
  "graph": {
    "parentConcept": "pdf-file-structure",
    "childConcepts": [
      "pdf-xref-streams"
    ],
    "relatedConcepts": [
      "pdf-object-streams",
      "pdf-document-catalog",
      "pdf-header",
      "pdf-page-tree"
    ],
    "relatedStandards": [
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
        "label": "How to Fix a Corrupted PDF File (What Actually Works)",
        "path": "/guides/how-to-fix-a-corrupted-pdf"
      },
      {
        "label": "Why Won't My PDF Open? Causes and Practical Fixes",
        "path": "/guides/why-wont-my-pdf-open"
      }
    ]
  },
  "seeAlso": [
    "pdf-file-structure",
    "pdf-trailer",
    "pdf-xref-streams",
    "pdf-indirect-objects",
    "pdf-incremental-updates",
    "linearized-pdf",
    "pdf-objects",
    "pdf-repair"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
