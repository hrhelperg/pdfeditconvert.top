import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a-vs-pdf-ua",
  "h1": "PDF/A vs PDF/UA",
  "cluster": "standards",
  "aliases": [
    "PDF/A and PDF/UA",
    "archival PDF vs accessible PDF",
    "ISO 19005 vs ISO 14289",
    "PDF accessibility vs archiving standards"
  ],
  "definition": "PDF/A (ISO 19005) is a standard for long-term archiving that keeps files self-contained and reproducible, while PDF/UA (ISO 14289) is a standard for accessibility that ensures documents work with assistive technology.",
  "description": "Compare PDF/A and PDF/UA: one targets long-term archiving and reproducibility, the other targets accessibility and assistive technology. How they differ and overlap.",
  "searchIntent": "comparison",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/A and PDF/UA are both ISO standards built on top of ordinary PDF, but they solve different problems. PDF/A exists so a document will still open and render the same way many years from now, regardless of the software or fonts available at the time. PDF/UA exists so a document's content can be understood and navigated by people using screen readers and other assistive technology. They are often confused because both add constraints to a normal PDF and both are sometimes required in the same institutional or governmental context.",
    "The clearest way to keep them apart is to think about who or what each one protects. PDF/A protects the future reader: it is concerned with fidelity over time. PDF/UA protects the reader who does not consume the page visually: it is concerned with how the underlying content is structured and exposed to software. A file can conform to one, the other, both, or neither, because their requirements sit in largely separate parts of the PDF.",
    "This page explains what each standard governs, where their requirements overlap, and why a document intended for both archiving and accessibility has to satisfy two independent sets of rules at once."
  ],
  "sections": [
    {
      "heading": "What each standard is for",
      "body": [
        "PDF/A, defined by the ISO 19005 family, is an archival profile. Its core idea is that a document must be self-contained and device-independent so it renders faithfully far into the future. To achieve that, PDF/A requires fonts to be embedded, prohibits features that depend on external resources or external software behavior, restricts encryption, and requires color to be described in a way that is unambiguous rather than dependent on a particular device. The goal is reproducibility: open the file in ten or thirty years and it should look and read the same.",
        "PDF/UA, defined by ISO 14289, is an accessibility profile. It builds on the tagging mechanism of Tagged PDF and specifies how a document's logical structure, reading order, alternative text, and semantics must be expressed so that assistive technology can present the content correctly. PDF/UA is not concerned with how long the file survives or whether it renders identically over time; it is concerned with whether the meaning of the content is available to software that does not simply paint pixels on a screen."
      ]
    },
    {
      "heading": "Where the requirements differ",
      "body": [
        "The two standards operate on largely different layers of a PDF. Much of PDF/A is about the visible rendering pipeline and the file's independence from its environment: embedded fonts, an output intent describing the intended color interpretation, and the exclusion of things that could behave unpredictably. Most PDF/A conformance can be evaluated by examining the file's resources and structure without any judgment about what the content means.",
        "PDF/UA, by contrast, is largely about the logical structure tree and the correctness of semantic markup: headings marked as headings, tables marked as tables, images carrying alternative text, artifacts distinguished from real content, and a defined reading order. Some of this can be checked mechanically, but a portion depends on human judgment, because software can confirm that an image has alternative text but cannot confirm that the text actually describes the image. This is a fundamental difference in how each standard is verified."
      ]
    },
    {
      "heading": "Where they overlap",
      "body": [
        "Although the standards target different goals, they are not fully independent. Both value a document being a genuine electronic document rather than a flat scan, and both benefit from well-formed structure. In particular, some later PDF/A conformance levels explicitly incorporate accessibility-oriented requirements by mandating that the document be tagged, which is also a foundation of PDF/UA. Tagging is therefore a point where the two families meet.",
        "That overlap is why a well-tagged, accessible archival document is a realistic goal: the tagging that PDF/UA relies on can coexist with the embedding and reproducibility rules that PDF/A relies on. However, satisfying a PDF/A tagging requirement is not the same as satisfying PDF/UA in full, because PDF/UA imposes additional, more specific rules about how that structure must be built. Conforming to one does not automatically confer conformance to the other."
      ]
    },
    {
      "heading": "Choosing or combining them",
      "body": [
        "The choice depends on the document's purpose. If the priority is that a file remain openable and visually faithful over the long term, such as records intended for retention, PDF/A addresses that. If the priority is that a document be usable by people relying on assistive technology, such as public-facing forms and publications, PDF/UA addresses that. Many institutional documents genuinely need both properties, which is why the two are frequently discussed together.",
        "When both are required, the practical approach is to produce a document that is tagged for accessibility and also embeds its fonts and declares its color intent for archiving, then validate it against each standard separately. Because the standards are checked with different criteria, a document has to be evaluated twice: once for archival conformance and once for accessibility conformance. Treating them as a single checkbox is the most common source of confusion."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "PDF/A standard",
      "value": "ISO 19005 family"
    },
    {
      "label": "PDF/UA standard",
      "value": "ISO 14289 family"
    },
    {
      "label": "PDF/A goal",
      "value": "Long-term archiving and faithful reproduction"
    },
    {
      "label": "PDF/UA goal",
      "value": "Accessibility for assistive technology"
    }
  ],
  "specification": {
    "iso": "ISO 19005 (PDF/A); ISO 14289 (PDF/UA)",
    "typicalUsage": "PDF/A for long-term archival records; PDF/UA for accessible, assistive-technology-friendly documents",
    "relatedStandards": [
      "pdf-a",
      "pdf-ua",
      "pdf-standards-overview",
      "tagged-pdf"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF/A file is automatically accessible.",
      "truth": "PDF/A focuses on archiving and reproducibility. Some PDF/A levels require tagging, but that alone does not satisfy the more specific accessibility rules of PDF/UA."
    },
    {
      "claim": "PDF/UA and PDF/A are two names for the same accessibility standard.",
      "truth": "They are separate ISO standards with different goals: PDF/A (ISO 19005) is for archiving, PDF/UA (ISO 14289) is for accessibility."
    },
    {
      "claim": "You must choose one standard because a file can only conform to a single profile.",
      "truth": "A single PDF can conform to both PDF/A and PDF/UA at once, since their requirements sit in largely different parts of the file; it just has to be validated against each separately."
    }
  ],
  "faq": [
    {
      "q": "Can a single PDF conform to both PDF/A and PDF/UA?",
      "a": "Yes. Their requirements sit in largely separate layers of the file, so a document can embed its fonts and declare color intent for archiving while also being properly tagged for accessibility. It must be validated against each standard on its own."
    },
    {
      "q": "Does PDF/A require tagging like PDF/UA does?",
      "a": "Some later PDF/A conformance levels require the document to be tagged, which overlaps with PDF/UA's foundation. However, PDF/A tagging requirements are less detailed than PDF/UA's full set of accessibility rules."
    },
    {
      "q": "Which standard should a public-facing document use?",
      "a": "If the concern is usability with assistive technology, PDF/UA is the relevant accessibility standard. If the document also needs to be preserved unchanged over the long term, PDF/A applies too, and both can be targeted together."
    },
    {
      "q": "How is conformance to each standard checked?",
      "a": "PDF/A conformance can largely be evaluated by inspecting the file's structure and resources. PDF/UA conformance is partly mechanical but also depends on human judgment, since software cannot confirm whether alternative text meaningfully describes an image."
    },
    {
      "q": "Is PDF/UA the same thing as WCAG?",
      "a": "No. PDF/UA is an ISO standard specific to how accessibility is expressed inside PDF files, while WCAG is a broader set of web content accessibility guidelines. They are related in intent but are distinct documents."
    }
  ],
  "graph": {
    "parentConcept": "pdf-standards-overview",
    "relatedConcepts": [
      "tagged-pdf",
      "pdf-structure-tree",
      "reading-order",
      "pdf-alt-text",
      "font-embedding",
      "pdf-output-intent"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-ua",
      "pdf-a-1",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-ua-1",
      "pdf-standards-overview"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      }
    ]
  },
  "seeAlso": [
    "pdf-a",
    "pdf-ua",
    "pdf-standards-overview",
    "pdf-a-vs-pdf-x",
    "tagged-pdf",
    "pdf-a-conformance-levels",
    "wcag-and-pdf",
    "pdf-ua-1"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
