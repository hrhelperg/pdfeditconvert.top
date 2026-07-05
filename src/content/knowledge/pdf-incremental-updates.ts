import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-incremental-updates",
  "h1": "Incremental Updates in PDF",
  "cluster": "foundations",
  "aliases": [
    "Incremental update",
    "Incremental save",
    "Appended update",
    "Incremental saving"
  ],
  "definition": "Incremental updates save changes to a PDF by appending new and modified objects, a new cross-reference section, and a trailer to the end of the file, leaving the original bytes unchanged.",
  "description": "Incremental updates save PDF changes by appending new objects, a cross-reference section, and a trailer without altering the original file.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "An incremental update is the mechanism PDF uses to change a document without rewriting it from scratch. Instead of producing a brand-new file, a writer appends the new and modified objects to the end of the existing file, adds a small cross-reference section that records where those objects live, and writes a new trailer. Everything that was already in the file stays exactly where it was, byte for byte.",
    "Because a PDF is read from the end forward — a reader locates the last cross-reference section and then works backward — appended data naturally takes precedence over anything it supersedes. This lets an editor record a set of changes as a compact addition rather than regenerating every unchanged page, and it is the reason a signed PDF can accept later edits without breaking the signature.",
    "The trade-off is that the file only ever grows. Superseded and deleted objects remain physically present in the bytes, so an incremental update is not a way to shrink a document or to erase content. Those goals require a full rewrite, which produces a fresh file with a single cross-reference section."
  ],
  "sections": [
    {
      "heading": "How an Incremental Update Is Written",
      "body": [
        "When a PDF is saved incrementally, the writer leaves the original bytes untouched and appends four things after the existing %%EOF marker: the new or changed indirect objects, a new cross-reference section (either a classic xref table or a cross-reference stream), an updated trailer, and a new startxref value pointing at the byte offset of that cross-reference section. Each object keeps its object number, so a revised version of object 5 is written again as '5 0 obj' and the new cross-reference entry records its new offset.",
        "The updated trailer carries a /Prev entry whose value is the byte offset of the previous cross-reference section. This chains the sections together: the newest section points back to the one before it, which may in turn point back to an earlier one. Deleting an object does not remove its bytes; instead the new cross-reference section marks that object number as free. A document that has been edited many times can therefore contain a long chain of cross-reference sections and trailers, one per save."
      ]
    },
    {
      "heading": "How a Reader Resolves the Current Version",
      "body": [
        "A conforming reader starts at the end of the file. It reads the final startxref to find the most recent cross-reference section, loads that section and its trailer, then follows the /Prev pointer backward to load each earlier section in turn. As it builds its master table of object offsets, later sections win: if object 5 is defined in both the original file and a later increment, the reader uses the later definition.",
        "This 'last write wins' behaviour is what makes appended edits act like real changes. A free entry introduced by a later section hides an object that an earlier section defined, so an object can effectively disappear from the visible document even though its bytes remain in the file. Cross-reference streams chain the same way using their own /Prev key, and hybrid-reference files combine a classic table with a stream so that both older and newer readers can navigate the increments."
      ]
    },
    {
      "heading": "Incremental Updates and Digital Signatures",
      "body": [
        "Incremental updates are central to how signed PDFs work. A digital signature covers a specific byte range of the file — in practice, everything up to the point at which it was applied. If a later change rewrote or reflowed those bytes, the signature would no longer match and would report as invalid. By appending changes instead, a writer can add a second signature, fill a form field, or attach an annotation while leaving every signed byte intact, so the earlier signature still validates.",
        "The same appending behaviour supports long-term validation. Revocation data and certificates used for Long-Term Validation (LTV) are added in a Document Security Store through an incremental update, and certification signatures can specify which kinds of later incremental changes are permitted without invalidating them. Because each increment is a distinct, self-consistent state of the document, validation tools can also reconstruct and inspect the earlier revisions that led to the current file."
      ]
    },
    {
      "heading": "What Incremental Updates Leave Behind",
      "body": [
        "An incremental update never reclaims space. Old versions of edited objects, objects that were later freed, and the content of every intermediate revision all remain in the file, which is why heavily edited PDFs grow larger than their visible content would suggest. It also has a privacy dimension: text or images that appear to have been removed or hidden can still be present in the underlying bytes, so covering content with a filled rectangle and saving does not delete it.",
        "To produce a compact file with no residual history, the document must be fully rewritten — often described as saving a copy, optimizing, or performing a full (non-incremental) save. A full rewrite emits a single cross-reference section and drops unreferenced objects, but it also rewrites the bytes, which invalidates any existing digital signatures. Choosing between an incremental update and a full rewrite is therefore a trade-off between preserving signatures and revision history on one side and minimizing size and residual data on the other."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "What gets appended",
      "value": "New or changed objects, a cross-reference section, and a trailer, added after the existing %%EOF marker."
    },
    {
      "label": "Chaining key",
      "value": "The trailer's /Prev entry holds the byte offset of the previous cross-reference section."
    },
    {
      "label": "File size",
      "value": "Always grows; superseded and freed objects stay physically in the file."
    },
    {
      "label": "Signature preservation",
      "value": "Signed byte ranges stay intact, so appended edits do not invalidate earlier signatures."
    }
  ],
  "misconceptions": [
    {
      "claim": "An incremental update makes the PDF smaller because it only saves the changes.",
      "truth": "It only writes the changes, but it appends them, so the file always gets larger, never smaller. Reducing size requires a full rewrite."
    },
    {
      "claim": "Deleting an object, or covering content and saving, removes that data from the file.",
      "truth": "A later cross-reference section can free or hide an object, but the original bytes remain in the file until it is fully rewritten, so the data can still be recovered."
    },
    {
      "claim": "Any edit to a signed PDF breaks its signature.",
      "truth": "Edits appended as incremental updates leave the signed byte range untouched, so a valid earlier signature stays valid. Only changes that alter the signed bytes break it."
    }
  ],
  "faq": [
    {
      "q": "Why do signed PDFs rely on incremental updates?",
      "a": "A signature covers the file's bytes up to where it was applied. Appending later changes keeps those bytes unchanged, so the signature still matches and stays valid; rewriting the file would break it."
    },
    {
      "q": "How does a reader know which version of an object to use?",
      "a": "It reads the most recent cross-reference section first and follows the /Prev chain backward. When the same object number appears more than once, the entry from the latest section wins."
    },
    {
      "q": "How do I remove the extra bulk left by many incremental saves?",
      "a": "Perform a full, non-incremental save — sometimes called optimizing or saving a copy. That writes a fresh file with one cross-reference section and drops unreferenced objects, though it invalidates existing signatures."
    },
    {
      "q": "Can earlier versions of a PDF be recovered from its increments?",
      "a": "Often yes. Each increment is a complete prior state of the document, so tools can reconstruct and inspect earlier revisions that remain in the file."
    },
    {
      "q": "Do cross-reference streams support incremental updates too?",
      "a": "Yes. A cross-reference stream carries its own /Prev key and chains just like a classic xref table; hybrid-reference files include both so older and newer readers can follow the increments."
    }
  ],
  "graph": {
    "parentConcept": "pdf-file-structure",
    "relatedConcepts": [
      "pdf-indirect-objects",
      "pdf-objects",
      "linearized-pdf",
      "pdf-optimization",
      "pdf-repair",
      "tamper-evidence-in-pdf"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "Sign PDF — Add Electronic Signatures on Phone",
        "path": "/sign-pdf"
      },
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Sign a PDF on Your Phone",
        "path": "/guides/how-to-sign-pdf-on-phone"
      },
      {
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      },
      {
        "label": "How to Compress a PDF (Without Losing Quality)",
        "path": "/guides/how-to-compress-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-file-structure",
    "pdf-cross-reference-table",
    "pdf-trailer",
    "pdf-xref-streams",
    "pdf-digital-signatures",
    "ltv-signatures",
    "document-security-store",
    "pdf-redaction"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
