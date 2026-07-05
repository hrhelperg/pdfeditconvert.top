import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a-1",
  "h1": "PDF/A-1",
  "cluster": "standards",
  "aliases": [
    "PDF/A-1a",
    "PDF/A-1b",
    "ISO 19005-1",
    "PDF/A Part 1"
  ],
  "definition": "PDF/A-1 is the first part of the ISO 19005 archiving standard, defining a self-contained, device-independent PDF profile (based on PDF 1.4) built for reliable long-term preservation.",
  "description": "PDF/A-1 is ISO 19005-1, the original archival PDF format based on PDF 1.4. Learn its rules, its A and B conformance levels, and why it matters.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/A-1 is the original profile in the PDF/A family, a set of standards that adapt ordinary PDF for long-term archiving. Its goal is simple to state and demanding to meet: a file should look and read the same decades from now as it does today, on software that has not been written yet, without depending on anything outside the file itself.",
    "To achieve that, PDF/A-1 takes a normal PDF and restricts it. Everything needed to reproduce the page — fonts, color definitions, and metadata — must live inside the document, and features that could break faithful reproduction or lock a reader out, such as encryption, external references, and embedded programs, are forbidden. The result is a conservative, self-contained subset of PDF rather than a new file format.",
    "PDF/A-1 was defined against the PDF 1.4 feature set, so it predates several later PDF capabilities. That heritage shapes what it can and cannot contain, and it is the reason newer parts of the standard (PDF/A-2 and beyond) exist to relax specific limits without abandoning the archival principle."
  ],
  "sections": [
    {
      "heading": "What PDF/A-1 Requires",
      "body": [
        "The core idea behind PDF/A-1 is self-containment. Every font used on the page must be embedded, including the standard 14 fonts that a normal PDF can assume the viewer already has, so text never falls back to a substitute that might reflow or render differently. Color must be reproducible without guessing at a device: colors are either specified in a device-independent way or the file carries an output intent with an ICC profile that names the intended color space. The document also must include XMP metadata, and any values duplicated in the older document information dictionary have to stay consistent with it.",
        "Just as important is what PDF/A-1 forbids. Encryption and password protection are not allowed, because a reader must be able to open the file without external keys. Embedded JavaScript, launch actions, and other executable content are excluded, as are audio, video, and other multimedia. The file cannot rely on external content or references. LZW compression is prohibited, and — despite PDF/A-1 tracing back to PDF 1.4 — transparency is not permitted. Interactive elements are constrained too: form fields and annotations must carry their own appearance streams so their look is fixed rather than generated on the fly."
      ]
    },
    {
      "heading": "Conformance Levels: A and B",
      "body": [
        "PDF/A-1 defines two conformance levels. Level B (\"basic\") is the lower bar: it guarantees that the visual appearance of the document can be reliably reproduced over the long term. A Level B file meets all the self-containment and reproduction rules above, but makes no promise about the underlying meaning or structure of the content.",
        "Level A (\"accessible\") includes everything in Level B and adds requirements aimed at preserving the document's logical structure and making its text reusable. A Level A file must be a tagged PDF with a defined structure tree and a natural reading order, and its text must map to Unicode (via ToUnicode information) so it can be searched, extracted, and read by assistive technology. Because Level A is a strict superset of Level B, every conforming Level A file is also a valid Level B file; the files are commonly written as PDF/A-1a and PDF/A-1b."
      ]
    },
    {
      "heading": "Built on PDF 1.4",
      "body": [
        "PDF/A-1 was specified against the PDF 1.4 feature set rather than the later ISO 32000 baseline. That choice keeps the profile conservative and well understood, but it also means several capabilities that arrived in newer PDF versions are simply out of scope. Transparency, JPEG 2000 image compression, optional-content layers, and embedded file attachments are not part of PDF/A-1.",
        "Those omissions are the main reason the standard grew additional parts. PDF/A-2, built on the ISO 32000-1 (PDF 1.7) baseline, permits transparency, JPEG 2000, layers, and the embedding of other PDF/A files, while PDF/A-3 further allows attaching files of arbitrary formats. None of this deprecates PDF/A-1 — a PDF/A-1 file remains valid — but it explains why a modern archiving workflow might target a later part when it needs features PDF/A-1 cannot express."
      ]
    },
    {
      "heading": "Why PDF/A-1 Matters for Archiving",
      "body": [
        "Archiving is about reproducibility over long spans of time, and PDF/A-1 codifies the properties that make reproducibility possible: nothing essential lives outside the file, nothing depends on a particular machine's fonts or color setup, and nothing can silently block access. For institutions that must keep records readable for years or decades — records offices, libraries, courts, and businesses with retention obligations — that predictability is the whole point.",
        "Because the requirements are precise, conformance can be checked mechanically. Validators such as veraPDF test a file against the ISO 19005-1 rules and report specifically where it falls short, for example an un-embedded font or a missing output intent. That makes PDF/A-1 not just a target to author toward but a claim that can be independently verified, which is what gives an archival label its value."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "ISO 19005-1, first published in 2005"
    },
    {
      "label": "Based on",
      "value": "The PDF 1.4 feature set"
    },
    {
      "label": "Conformance levels",
      "value": "Level A (accessible) and Level B (basic)"
    },
    {
      "label": "Fonts",
      "value": "All fonts must be embedded, including the standard 14"
    }
  ],
  "specification": {
    "iso": "ISO 19005-1",
    "introduced": "2005",
    "typicalUsage": "Long-term archiving and preservation of electronic documents where faithful, self-contained reproduction is required.",
    "relatedStandards": [
      "pdf-a-2",
      "pdf-a-3",
      "pdf-a-4",
      "pdf-standards-overview"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF/A-1 files can't contain images.",
      "truth": "Images are allowed. The restrictions target things like encryption, external references, LZW compression, transparency, and un-embedded fonts, not raster or vector graphics themselves."
    },
    {
      "claim": "Saving a file as PDF/A automatically makes it Level A.",
      "truth": "There are two levels. Level B only guarantees reliable visual reproduction; Level A additionally requires tagged structure, Unicode text mapping, and a defined reading order."
    },
    {
      "claim": "You can attach other files inside a PDF/A-1 document for safekeeping.",
      "truth": "PDF/A-1 does not permit embedded file attachments. That capability came later — PDF/A-2 allows embedding other PDF/A files, and PDF/A-3 allows arbitrary file types."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between PDF/A-1a and PDF/A-1b?",
      "a": "PDF/A-1b (Level B) ensures the document's visual appearance can be reliably reproduced. PDF/A-1a (Level A) includes everything in 1b and adds tagged structure, Unicode text mapping, and a defined reading order for accessibility and content reuse."
    },
    {
      "q": "Is transparency allowed in PDF/A-1?",
      "a": "No. Even though PDF/A-1 is rooted in the PDF 1.4 era, the standard prohibits transparency. Support for transparency was introduced later in PDF/A-2."
    },
    {
      "q": "Does PDF/A-1 require fonts to be embedded?",
      "a": "Yes. Every font used, including the standard 14, must be embedded so text renders identically without relying on fonts installed on the viewer's system."
    },
    {
      "q": "Can a PDF/A-1 file be encrypted or password protected?",
      "a": "No. Encryption is not permitted, because a conforming file must be openable without any external key or password."
    },
    {
      "q": "How do I check whether a file conforms to PDF/A-1?",
      "a": "Run it through a validator such as veraPDF, which tests the document against the ISO 19005-1 rules and reports exactly which requirements, if any, are not met."
    }
  ],
  "graph": {
    "parentConcept": "pdf-a",
    "relatedConcepts": [
      "tagged-pdf",
      "font-embedding",
      "xmp-metadata",
      "pdf-output-intent",
      "icc-based-color",
      "verapdf"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-a-4",
      "pdf-standards-overview",
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
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      }
    ]
  },
  "seeAlso": [
    "pdf-a",
    "pdf-a-2",
    "pdf-a-conformance-levels",
    "pdf-a-font-embedding",
    "pdf-a-metadata-requirements",
    "pdf-a-validation",
    "pdf-1-4",
    "tagged-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
