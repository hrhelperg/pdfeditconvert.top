import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a-conformance-levels",
  "h1": "PDF/A Conformance Levels",
  "cluster": "standards",
  "aliases": [
    "PDF/A levels",
    "Level A / Level B / Level U",
    "PDF/A-1a vs PDF/A-1b",
    "PDF/A compliance levels",
    "conformance level"
  ],
  "definition": "PDF/A conformance levels are nested tiers of the PDF/A archiving standard — such as Level B, Level U and Level A — that set how strictly a file must preserve appearance, text and structure.",
  "description": "PDF/A conformance levels grade how strictly a file preserves appearance, searchable Unicode text and accessibility tagging — Level B, Level U and Level A.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Two PDF files can both claim to follow PDF/A, the ISO standard for long-term archiving, and still promise very different things. That is because PDF/A does not have a single pass or fail bar: it defines conformance levels — historically Level B, Level U and Level A — that layer progressively stricter requirements on top of one another. The level tells you not how good the file looks, but how much of the document's meaning, beyond its appearance, has been captured in a durable, machine-readable way.",
    "The lowest level, B (basic), guarantees that the page will look the same years from now: fonts are embedded, colour is specified in a device-independent way, and nothing depends on external resources or is locked behind encryption. Higher levels keep every one of those guarantees and add more. Level U also requires that all visible text carries Unicode mappings, so it stays searchable and copyable. Level A goes further still, requiring the logical structure (tagging) that lets assistive technology and reflowing viewers understand headings, reading order and figures.",
    "Because the levels are nested, a Level A file is automatically a valid Level B file, and the label attached to a specific PDF/A part — as in PDF/A-1a versus PDF/A-1b — combines the part number with its conformance level. PDF/A-4, the version aligned with PDF 2.0, retired the A/B/U letters and replaced them with a different set of conformance designations, which is covered below."
  ],
  "sections": [
    {
      "heading": "Level B — preserving the way a document looks",
      "body": [
        "Level B, short for basic, sets the floor for PDF/A. Its single goal is the reliable, unambiguous reproduction of a document's visual appearance over the long term. To achieve that, a Level B file must embed all fonts it uses so rendering never depends on whatever fonts happen to be installed later; it must define colour in a self-contained, device-independent way (for example through an output intent that carries an ICC profile); and it must avoid features that undermine durability, such as encryption, JavaScript, audio or references to external files.",
        "What Level B deliberately does not require is any information about what the content means. The text does not have to be mapped to Unicode, and the document does not have to be tagged. A visually faithful scan with no accurate text layer can still meet Level B, which is why a Level B claim tells you the pixels are trustworthy but says nothing about whether the text can be searched or read aloud."
      ]
    },
    {
      "heading": "Level A — appearance plus accessible, reusable structure",
      "body": [
        "Level A, for accessible, is the most demanding of the classic levels. It requires everything Level B requires and then adds two things: complete Unicode character mapping for all text, and a tagged logical structure that records the document's hierarchy — headings, paragraphs, lists, tables, figures and their intended reading order. Those additions make the file's content available to screen readers, to tools that reflow text onto small screens, and to reliable text extraction and search.",
        "It is worth stressing that Level A is not visually superior to Level B; the pages render identically. The difference is entirely in the machine-readable meaning carried alongside the pixels. That extra structure is also what makes Level A files more work to produce, since the tagging has to be present and correct rather than merely visually plausible."
      ]
    },
    {
      "heading": "Level U — searchable text without full tagging",
      "body": [
        "Level U, for Unicode, sits between B and A and was introduced with PDF/A-2. It keeps all of Level B's appearance guarantees and adds the requirement that every character of visible text map to a Unicode value, so the document can be searched and its text copied accurately. What it leaves out is the full tagged structure that Level A demands.",
        "Level U therefore suits documents where reliable text extraction matters but building complete accessibility tagging is impractical. A scanned report paired with an accurate text layer, for instance, can reach Level U far more easily than Level A, because it needs correct character-to-Unicode mapping but not a hand-verified structure tree describing every heading and table."
      ]
    },
    {
      "heading": "How levels pair with the PDF/A parts",
      "body": [
        "A PDF/A claim always combines a part with a level. The part — PDF/A-1, PDF/A-2 or PDF/A-3 — determines which PDF features are permitted, because each part is based on a different generation of PDF: PDF/A-1 on PDF 1.4, and PDF/A-2 and PDF/A-3 on ISO 32000-1 (PDF 1.7). The level then sets how much structure and text information is required, which is why you see names like PDF/A-1b (part 1 at Level B) or PDF/A-2a (part 2 at Level A).",
        "PDF/A-1 (ISO 19005-1, published 2005) offered only Levels A and B. PDF/A-2 (ISO 19005-2, 2011) and PDF/A-3 (ISO 19005-3, 2012) added Level U, giving the familiar trio of b, u and a suffixes. PDF/A-3 shares those three levels and additionally allows arbitrary files to be embedded inside the archived document."
      ]
    },
    {
      "heading": "PDF/A-4 and the end of the A/B/U scheme",
      "body": [
        "PDF/A-4 (ISO 19005-4, published 2020) is built on PDF 2.0 (ISO 32000-2) and takes a different approach to conformance. It drops the Level A, B and U letters entirely. Instead there is a single base conformance, written simply as PDF/A-4, together with two additional variants: PDF/A-4f, which permits embedded files in the spirit of PDF/A-3, and PDF/A-4e, an engineering-oriented variant that allows embedded 3D and rich-media content.",
        "Because the letter model no longer applies, comparing a PDF/A-4 file with an older PDF/A-2 file means checking the part first before interpreting any suffix. Unicode text handling and accessibility are addressed through the underlying PDF 2.0 feature set and related standards rather than through a separate accessible level."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Levels are nested",
      "value": "A Level A file also satisfies every Level B requirement; Level A adds Unicode mapping and tagging on top of Level B."
    },
    {
      "label": "What the letters mean",
      "value": "A stands for accessible, B for basic, U for Unicode."
    },
    {
      "label": "Level U's origin",
      "value": "Level U first appeared in PDF/A-2 (ISO 19005-2); PDF/A-1 offered only Levels A and B."
    },
    {
      "label": "PDF/A-4 changed the model",
      "value": "ISO 19005-4 (PDF/A-4, 2020) dropped the A/B/U levels in favour of PDF/A-4, PDF/A-4e and PDF/A-4f."
    }
  ],
  "specification": {
    "iso": "ISO 19005 (PDF/A)",
    "introduced": "2005, with PDF/A-1 (ISO 19005-1)",
    "latestVersion": "PDF/A-4 (ISO 19005-4:2020), which replaced the A/B/U levels",
    "typicalUsage": "Long-term archiving of documents that must stay openable and faithful for years, with the level chosen for how much text and structure must be recoverable.",
    "relatedStandards": [
      "pdf-a-1",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-a-4",
      "pdf-conformance-levels"
    ]
  },
  "misconceptions": [
    {
      "claim": "Level A is just a stricter, higher-quality version of Level B for the same job.",
      "truth": "Both levels preserve appearance to the same standard; Level A is not visually better. It simply carries extra machine-readable information — Unicode text mapping and structural tagging — that Level B does not."
    },
    {
      "claim": "Every PDF/A part offers Levels A, B and U.",
      "truth": "PDF/A-1 offers only A and B. Level U was added in PDF/A-2 and continues in PDF/A-3, and PDF/A-4 removed the A/B/U scheme entirely."
    },
    {
      "claim": "Choosing Level A guarantees the document is accessible to screen readers.",
      "truth": "Level A requires tagging and Unicode mapping, which support accessibility, but real accessibility depends on the tags and reading order being correct. PDF/UA is the standard focused specifically on accessibility conformance."
    }
  ],
  "faq": [
    {
      "q": "What does the letter in a name like PDF/A-1b mean?",
      "a": "The number identifies the PDF/A part (here, part 1), and the trailing letter is the conformance level: b for basic, u for Unicode, a for accessible. So PDF/A-1b is part 1 at Level B, and PDF/A-2a is part 2 at Level A."
    },
    {
      "q": "Which level does archiving usually call for?",
      "a": "It depends on the purpose. A requirement that only needs a faithful visual record points toward Level B, while one that also needs searchable text or accessibility points toward Level U or Level A. The standard itself does not mandate one level for all archives — the choice reflects what has to be recoverable from the file later."
    },
    {
      "q": "What is the practical difference between Level U and Level A?",
      "a": "Both guarantee searchable, Unicode-mapped text on top of Level B's appearance requirements. Level A additionally requires a tagged logical structure describing headings, reading order and other elements; Level U does not, which makes it easier to reach for documents that are hard to tag fully."
    },
    {
      "q": "Can one file satisfy more than one level at once?",
      "a": "Yes, because the levels are nested. Any file that conforms to Level A necessarily meets Level U and Level B as well, and a Level U file also meets Level B. Validation tools generally report the highest level a file satisfies."
    },
    {
      "q": "Where does font embedding fit among the levels?",
      "a": "Font embedding is required at every PDF/A level, including Level B, because it is fundamental to reproducing appearance rather than an accessibility extra. The levels differ in the text and structure requirements layered on top of that shared baseline."
    }
  ],
  "graph": {
    "parentConcept": "pdf-a",
    "relatedConcepts": [
      "tagged-pdf",
      "tounicode-cmap",
      "pdf-a-metadata-requirements",
      "pdf-a-font-embedding",
      "pdf-structure-tree",
      "reading-order"
    ],
    "relatedStandards": [
      "pdf-conformance-levels",
      "pdf-a-vs-pdf-ua",
      "pdf-ua",
      "pdf-standards-overview",
      "verapdf"
    ],
    "relatedFormats": [
      "pdf-2-0",
      "pdf-1-7",
      "pdf-1-4"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      },
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-a",
    "pdf-a-1",
    "pdf-a-2",
    "pdf-a-4",
    "pdf-a-validation",
    "tagged-pdf",
    "pdf-conformance-levels",
    "pdf-a-vs-pdf-ua"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
