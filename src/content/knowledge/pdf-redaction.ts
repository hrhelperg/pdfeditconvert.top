import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-redaction",
  "h1": "PDF Redaction",
  "cluster": "security",
  "aliases": [
    "Redaction",
    "Document redaction",
    "PDF redacting",
    "Blacking out a PDF"
  ],
  "definition": "PDF redaction is the process of permanently removing sensitive text, images, and data from a PDF so the underlying content cannot be recovered or extracted, not merely hidden from view.",
  "description": "How PDF redaction permanently removes sensitive text and images, why a black box drawn on top isn't enough, and how it differs from encryption.",
  "searchIntent": "security",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF redaction is the practice of permanently removing confidential content from a document, such as names, account numbers, or a passage in a contract, so that it is gone rather than simply covered up. The goal is that once a file is redacted and shared, there is no way for a reader to select, copy, search, or otherwise reconstruct the removed content.",
    "In a PDF this is harder than it looks, because a page is not a flat picture. Text is stored as sequences of drawing operators inside content streams, images live in separate objects, and a single file can also carry metadata, attachments, hidden layers, and even earlier versions of its own content. What you see rendered on screen is only part of what the file actually contains, so covering something visually and removing it are two very different operations.",
    "Because of this, redaction is usually a two-stage process: first the regions to remove are marked, then redaction is applied so the underlying content is deleted and the file is rewritten. A thorough redaction also considers the parts of a document that never appear on the visible page."
  ],
  "sections": [
    {
      "heading": "How redaction removes content, not just covers it",
      "body": [
        "True redaction works at the level of the objects that make up a page. For text, that means locating and deleting the text-showing operators and character data inside the page's content stream; for pictures, it means removing the image data itself. After the marked content is deleted, the page's content stream is typically rewritten so the original glyphs and image bytes are no longer present anywhere in the file. What remains is usually a redaction mark, often a filled rectangle, that shows where content used to be.",
        "The PDF specification supports this workflow through a redaction annotation (annotation subtype Redact). A redaction annotation marks a region as content to be removed but does not, on its own, delete anything; a separate apply step performs the actual removal and replaces the marked region with the redaction mark. Keeping marking and applying as distinct steps lets a document be reviewed before the removal becomes permanent."
      ]
    },
    {
      "heading": "Why a black rectangle is not redaction",
      "body": [
        "The most common redaction failure is to draw an opaque black rectangle, or place an image or annotation, on top of sensitive text and then save the file. Visually the words disappear, but the original text operators still sit in the content stream underneath. Because the covering shape only changes what is painted on top, text extraction, copy and paste, and search can still return the hidden words, and removing or reordering the covering object reveals them again.",
        "The same trap applies to images layered over other images and to text that has merely been recolored to match its background. Any approach that leaves the original content in the file, and relies on something being drawn over it or hidden from view, is a cosmetic mask rather than redaction. This distinction is the reason organizations have unintentionally disclosed information in documents that looked, on screen, as though the content had been blacked out."
      ]
    },
    {
      "heading": "Redaction has to reach beyond the visible page",
      "body": [
        "Sensitive data in a PDF is not limited to the rendered page content. It can also live in the document information dictionary and XMP metadata (author, title, keywords, and history), in embedded files and attachments, in optional content groups (layers) that may be turned off and therefore hidden, in form field values, in comments and other annotations, in bookmarks, and in content that is positioned off-page or clipped out of view. Removing a visible passage does nothing to these areas, so sanitizing them is a separate consideration.",
        "The file's revision history matters too. Because PDF supports incremental updates, saving changes can append new objects while leaving earlier versions of objects in place, meaning previously removed content may still exist inside the same file. For this reason a careful redaction rewrites the document so that older, unreferenced content is not retained in earlier revisions rather than saving the change as an incremental addition."
      ]
    },
    {
      "heading": "How redaction differs from encryption and flattening",
      "body": [
        "Redaction is often confused with other operations that also relate to controlling a document, but each does something different. Encryption and password protection govern who can open or use a file; the content stays fully intact for anyone who has access, and permission flags are advisory signals to viewers rather than a way to delete data. Flattening merges annotations and form fields into the page content but likewise does not strip hidden text or metadata.",
        "Redaction differs in intent from all of these: its purpose is to destroy specific content so that it is gone regardless of who opens the file or how they open it. In practice the three approaches are complementary, but only redaction actually removes information from the document. Understanding which problem you are solving, restricting access versus eliminating content, is what determines whether encryption, flattening, or redaction is the right operation."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "What it removes",
      "value": "The underlying text, image, and vector data stored in the page's objects, not just a shape painted on top of them."
    },
    {
      "label": "Two stages",
      "value": "Regions are first marked (for example, with a redaction annotation), then redaction is applied to delete the content and rewrite the page."
    },
    {
      "label": "Not the same as encryption",
      "value": "Redaction deletes content; encryption only restricts who can open or use a document that still contains it in full."
    }
  ],
  "specification": {
    "iso": "ISO 32000 (PDF)",
    "typicalUsage": "Permanently removing confidential text, images, and data from a PDF before the document is shared or published.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Drawing a black box over text redacts it.",
      "truth": "A black rectangle only covers the content visually; the original text remains in the content stream and can still be copied, searched, or exposed by removing the box. Redaction removes the underlying content."
    },
    {
      "claim": "Password-protecting or encrypting a PDF is the same as redacting it.",
      "truth": "Encryption controls who can open or use the file but leaves all content intact for anyone with access. Redaction permanently deletes specific content from the document."
    },
    {
      "claim": "Once the visible text is removed, all sensitive data is gone.",
      "truth": "Metadata, attachments, hidden layers, form values, and earlier revisions retained through incremental updates are stored separately from page content and must be handled on their own."
    }
  ],
  "faq": [
    {
      "q": "Can redacted content be recovered later?",
      "a": "If the content was actually removed from the file's objects and the document was rewritten, it cannot be recovered. If it was only visually covered by a shape or annotation, it can still be extracted."
    },
    {
      "q": "Does redaction remove a document's metadata automatically?",
      "a": "Not necessarily. Metadata in the information dictionary and XMP, along with attachments and hidden layers, is stored separately from the visible page and may need to be sanitized as its own step."
    },
    {
      "q": "Is a redaction mark always a black box?",
      "a": "No. The mark left where content was removed is typically a filled rectangle, but its color and any overlay text are configurable. The essential part is that the underlying content is deleted, not the appearance of the mark."
    },
    {
      "q": "How is redaction different from deleting a page?",
      "a": "Deleting a page removes an entire page from the document. Redaction removes selected content, such as a line of text or part of an image, while keeping the rest of the page in place."
    },
    {
      "q": "Why does how the file is saved matter for redaction?",
      "a": "Because PDF can save changes as incremental updates that append new objects while retaining older ones, a redaction that is not written as a full rewrite may leave earlier versions of the removed content inside the same file."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pdf-content-streams",
      "optional-content-groups",
      "document-information-dictionary",
      "password-vs-encryption"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "PDF Security — Password Protect and Encrypt PDFs",
        "path": "/pdf-security"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      },
      {
        "label": "How to Protect Sensitive PDF Files (Storage, Sharing, Lifecycle)",
        "path": "/guides/how-to-protect-sensitive-pdf-files"
      }
    ]
  },
  "seeAlso": [
    "pdf-security-model",
    "pdf-encryption",
    "pdf-metadata",
    "xmp-metadata",
    "pdf-incremental-updates",
    "pdf-annotations",
    "pdf-text-extraction",
    "form-flattening"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
