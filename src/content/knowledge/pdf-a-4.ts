import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a-4",
  "h1": "PDF/A-4",
  "cluster": "standards",
  "aliases": [
    "PDF/A-4",
    "ISO 19005-4",
    "PDF/A Part 4"
  ],
  "definition": "PDF/A-4 is the fourth part of the ISO 19005 (PDF/A) standard for long-term document archiving, and the first part built on PDF 2.0 instead of an earlier PDF version.",
  "description": "PDF/A-4 is Part 4 of the ISO 19005 archiving standard and the first built on PDF 2.0. It retires the a/b/u levels and adds the e and f flavors.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/A is the ISO family of formats designed to keep documents readable and visually faithful for the long term. PDF/A-4 is its newest part, and its defining trait is the base it sits on: where every earlier part referenced an older revision of PDF, PDF/A-4 is the first to be built on PDF 2.0 (ISO 32000-2).",
    "The most noticeable change for anyone who has worked with earlier parts is that PDF/A-4 retires the familiar a, b, and u conformance levels. In their place is a single baseline conformance plus two optional flavors, e and f, that add specific capabilities without loosening the core preservation rules.",
    "Despite the modernized base and the simpler conformance model, the underlying promise is unchanged: a PDF/A-4 file is meant to be self-contained and device-independent, so it renders the same way years from now as it does today, without relying on anything outside the file."
  ],
  "sections": [
    {
      "heading": "The first PDF/A built on PDF 2.0",
      "body": [
        "Every earlier part of PDF/A was tied to an older revision of PDF: PDF/A-1 to PDF 1.4, and both PDF/A-2 and PDF/A-3 to PDF 1.7 (ISO 32000-1). PDF/A-4, published as Part 4 of ISO 19005 in 2020, is the first to reference PDF 2.0 (ISO 32000-2) as its base. That lets archival files use features standardized in PDF 2.0 while still meeting the constraints that make a document safe to preserve.",
        "Sitting on the newer base also lets the standard shed some ambiguities inherited from the older PDF specification. Importantly, PDF/A-4 does not replace PDF/A-2 or PDF/A-3; those parts remain valid standards for documents built on PDF 1.7. PDF/A-4 is the modern option when a file is authored against PDF 2.0."
      ]
    },
    {
      "heading": "Conformance simplified: baseline, e, and f",
      "body": [
        "The most visible change is the retirement of the a/b/u conformance levels. PDF/A-1 (ISO 19005-1:2005) defined only two levels: Level B (basic visual reproduction) and Level A (accessible, fully tagged). PDF/A-2 (ISO 19005-2:2011) added Level U (basic plus reliable Unicode text), so PDF/A-2 and PDF/A-3 each offered Levels A, B, and U. PDF/A-4 collapses that grid into a single baseline conformance, simply called PDF/A-4, which already requires dependable Unicode text mapping, so a separate U level is no longer needed.",
        "On top of the baseline, PDF/A-4 defines two optional flavors. PDF/A-4f permits embedding files of any type as attachments, continuing the container idea introduced by PDF/A-3. PDF/A-4e (the e stands for engineering) adds support for embedded 3D model data such as U3D and PRC, along with rich media, addressing the engineering-document use cases the separate PDF/E standard was created for."
      ]
    },
    {
      "heading": "What PDF/A-4 keeps from the PDF/A idea",
      "body": [
        "The modernization does not change what PDF/A is for. A conforming file must be self-contained and device-independent: all fonts embedded, color defined through ICC profiles and output intents rather than device defaults, and no dependence on external resources to render correctly. Encryption and password protection are prohibited, and features that behave unpredictably over time, such as JavaScript, most executable actions, and audio or video in the baseline, are disallowed so the document behaves the same decades from now.",
        "Identification still happens through XMP metadata: a conforming file declares itself as PDF/A with the part set to 4, and any XMP extension schemas it uses must be described inside the file. Validators such as veraPDF read this identification and then check the document against the rules for the declared part and flavor."
      ]
    },
    {
      "heading": "Accessibility and tagging under PDF/A-4",
      "body": [
        "Because the Level A conformance letter is gone, accessibility is handled differently in PDF/A-4. Tagged, logically structured content is still fully supported and encouraged, but conformance no longer bundles it into a distinct letter. The recommended route to an accessible archival document is to combine well-tagged PDF content with the separate PDF/UA standard, which is dedicated to accessibility. A single file can therefore identify as PDF/A-4 for preservation and as PDF/UA for accessibility at the same time."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "ISO 19005-4 — Part 4 of the PDF/A family, published 2020"
    },
    {
      "label": "Base PDF version",
      "value": "PDF 2.0 (ISO 32000-2), the first PDF/A part to use it"
    },
    {
      "label": "Conformance flavors",
      "value": "Baseline PDF/A-4, plus PDF/A-4e (engineering) and PDF/A-4f (embedded files)"
    },
    {
      "label": "Conformance levels",
      "value": "The earlier A / B / U level scheme is removed"
    }
  ],
  "specification": {
    "iso": "ISO 19005-4",
    "introduced": "2020",
    "typicalUsage": "Long-term archiving of documents authored against PDF 2.0, with optional flavors for embedded files (f) and engineering 3D/rich media (e).",
    "relatedStandards": [
      "pdf-a",
      "pdf-2-0",
      "iso-32000",
      "pdf-a-3",
      "pdf-e"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF/A-4 still has an accessibility level, like PDF/A-2a.",
      "truth": "PDF/A-4 removed the a/b/u conformance levels. Accessibility is addressed by combining well-tagged content with the separate PDF/UA standard rather than by a distinct conformance letter."
    },
    {
      "claim": "PDF/A-4 replaces and deprecates the earlier PDF/A parts.",
      "truth": "PDF/A-1, PDF/A-2, and PDF/A-3 remain valid standards for files based on older PDF versions. PDF/A-4 is an additional part for documents built on PDF 2.0, not a retirement of the others."
    },
    {
      "claim": "PDF/A-4e is just another name for PDF/E.",
      "truth": "PDF/A-4e is a PDF/A conformance flavor that adds 3D and rich media while keeping archival constraints. PDF/E is a separate ISO standard; PDF/A-4e covers many of the same engineering use cases within the PDF/A framework."
    }
  ],
  "faq": [
    {
      "q": "Is PDF/A-4 based on PDF 2.0?",
      "a": "Yes. PDF/A-4 is the first part of the PDF/A family to use PDF 2.0 (ISO 32000-2) as its base. Earlier parts referenced PDF 1.4 (PDF/A-1) or PDF 1.7 (PDF/A-2 and PDF/A-3)."
    },
    {
      "q": "What are PDF/A-4e and PDF/A-4f?",
      "a": "They are the two optional flavors defined on top of the PDF/A-4 baseline. PDF/A-4f permits embedding files of any type as attachments, and PDF/A-4e adds embedded 3D model data (such as U3D and PRC) and rich media for engineering documents."
    },
    {
      "q": "What happened to the a, b, and u conformance levels?",
      "a": "PDF/A-4 removed them. There is now one baseline conformance that already requires reliable Unicode text mapping, so the separate U level is unnecessary, and the accessibility-focused A level is handled through PDF/UA instead."
    },
    {
      "q": "Does the baseline PDF/A-4 allow embedded files and 3D content?",
      "a": "Arbitrary embedded attachments belong to the PDF/A-4f flavor, and embedded 3D and rich media belong to PDF/A-4e. A plain baseline PDF/A-4 file is not the place for those; you would declare the corresponding flavor."
    },
    {
      "q": "Can a PDF/A-4 file also be accessible?",
      "a": "Yes. Tagged, logically structured content is fully supported. The usual approach is to produce a well-tagged file that claims both PDF/A-4 for preservation and PDF/UA for accessibility."
    }
  ],
  "graph": {
    "parentConcept": "pdf-a",
    "relatedConcepts": [
      "pdf-a-metadata-requirements",
      "pdf-a-font-embedding",
      "xmp-metadata",
      "pdf-output-intent",
      "tagged-pdf",
      "pdf-ua",
      "associated-files-in-pdf",
      "verapdf"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-a-1",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-2-0",
      "iso-32000",
      "pdf-e",
      "pdf-ua"
    ],
    "relatedTools": [
      {
        "label": "PDF Converter — Convert PDFs to Word, JPG, PNG and More",
        "path": "/pdf-converter"
      }
    ]
  },
  "seeAlso": [
    "pdf-a",
    "pdf-a-3",
    "pdf-a-2",
    "pdf-2-0",
    "pdf-a-conformance-levels",
    "pdf-e",
    "pdf-a-validation",
    "pdf-standards-overview"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
