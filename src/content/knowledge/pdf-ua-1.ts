import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-ua-1",
  "h1": "PDF/UA-1",
  "cluster": "standards",
  "aliases": [
    "ISO 14289-1",
    "PDF/UA Part 1",
    "PDF/UA:2012",
    "Universal Accessibility 1"
  ],
  "definition": "PDF/UA-1 is the first part of ISO 14289, the standard that specifies how a PDF must be tagged and structured so its content is accessible to assistive technology.",
  "description": "PDF/UA-1 (ISO 14289-1) sets the technical rules for tagging, structure, and reading order that make a PDF usable with screen readers and assistive tech.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/UA-1 is the first edition of PDF/UA (\"PDF/Universal Accessibility\"), the ISO standard that specifies exactly how a PDF file must be constructed so its content can be reliably interpreted by assistive technology such as screen readers and braille displays. Published as Part 1 of ISO 14289, it builds directly on the PDF 1.7 specification (ISO 32000-1) and turns many of that format's optional accessibility features into firm requirements.",
    "Where the broader PDF specification merely permits tagging and logical structure, PDF/UA-1 mandates them. A conforming file must carry a complete, correct structure tree that expresses the document's real reading order and semantics — headings, lists, tables, figures — independently of how the content happens to be laid out visually. That machine-readable structure is what lets assistive technology present a PDF as something other than an undifferentiated stream of glyphs.",
    "PDF/UA-1 is deliberately scoped to the technical, format-level layer. It does not restate the user-facing outcomes found in guidelines like WCAG; instead it defines the PDF mechanisms through which those outcomes are achieved, and it also sets expectations for conforming readers and assistive technology, not only for the file itself."
  ],
  "sections": [
    {
      "heading": "What a PDF/UA-1 file must contain",
      "body": [
        "PDF/UA-1 requires that a file be a Tagged PDF whose entire meaningful content is represented in a logical structure tree rooted at the document catalog. Every piece of real content must be tagged with an appropriate standard structure type, and everything that is not content — decorative rules, background images, running headers — must be explicitly marked as an artifact so assistive technology can ignore it. The order of the tags must reflect the intended reading order rather than the order in which content happens to be drawn on the page.",
        "Beyond structure, the standard calls for a natural language to be specified for the document (and for any passages that differ from it), text alternatives for meaningful non-text content such as images, and correctly encoded text so that characters map to Unicode. It also requires that security settings never prevent assistive technology from reaching the content: a document may be encrypted, but not in a way that blocks its content from being extracted for accessibility purposes."
      ]
    },
    {
      "heading": "How it builds on ISO 32000-1 and Tagged PDF",
      "body": [
        "PDF/UA-1 does not invent a new file format. It is a conformance profile layered on top of ISO 32000-1 (PDF 1.7), reusing the same Tagged PDF machinery — marked content, structure elements, role mapping, and the ToUnicode mechanism — that the base specification already defines. What PDF/UA-1 adds is discipline: it removes ambiguity by stating which of those optional or loosely specified features are obligatory and how they must be used.",
        "A file that is simply well tagged under ISO 32000-1 is a strong starting point, but only one that satisfies PDF/UA-1's specific requirements can claim conformance. PDF/UA-2 (Part 2 of ISO 14289) applies the same approach on top of PDF 2.0 (ISO 32000-2), so PDF/UA-1 specifically denotes the profile tied to PDF 1.7."
      ]
    },
    {
      "heading": "PDF/UA-1 and WCAG",
      "body": [
        "PDF/UA-1 and the Web Content Accessibility Guidelines pursue the same goal from different directions. WCAG is technology-agnostic and expressed as outcome-based success criteria that apply to many kinds of content, while PDF/UA-1 is PDF-specific and expressed as concrete requirements on the file format's own structures. The two are complementary rather than competing: meeting PDF/UA-1 provides the technical foundation — tags, reading order, text alternatives — needed to satisfy many WCAG criteria within a PDF.",
        "To make PDF/UA requirements testable, the PDF Association publishes the Matterhorn Protocol, which breaks them down into checkpoints and failure conditions. Some of those conditions correspond to WCAG success criteria, while others are purely format-level concerns unique to how PDF represents content."
      ]
    },
    {
      "heading": "Conformance and how it is checked",
      "body": [
        "Unlike PDF/A, which offers several conformance levels (such as its accessibility-focused \"a\" level versus the lighter \"b\"), PDF/UA-1 defines a single conformance level: a file either meets the requirements or it does not. There are no tiers to choose between.",
        "Verification combines automated and human review. Validators such as veraPDF and dedicated PDF accessibility checkers can test the machine-verifiable requirements — the presence of a structure tree, tagged content, language entries, artifact marking — but they cannot judge whether the reading order actually makes sense or whether a text alternative meaningfully describes its image. Those judgments require a person, which is why PDF/UA conformance is understood as a combination of programmatic checks and manual evaluation."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "ISO standard",
      "value": "ISO 14289-1 (Part 1 of the PDF/UA family)"
    },
    {
      "label": "Base specification",
      "value": "PDF 1.7 / ISO 32000-1"
    },
    {
      "label": "First published",
      "value": "2012"
    },
    {
      "label": "Conformance levels",
      "value": "Single level (no A/B tiers like PDF/A)"
    }
  ],
  "specification": {
    "iso": "ISO 14289-1",
    "introduced": "2012",
    "typicalUsage": "Making PDF documents accessible to assistive technology; often combined with PDF/A for accessible archiving.",
    "relatedStandards": [
      "pdf-ua",
      "pdf-1-7",
      "iso-32000",
      "pdf-a"
    ]
  },
  "misconceptions": [
    {
      "claim": "If a PDF passes an automated PDF/UA checker, it is guaranteed to be accessible.",
      "truth": "Automated tools only verify the machine-checkable requirements. A person still has to confirm that the reading order is logical and that text alternatives actually describe their content."
    },
    {
      "claim": "PDF/UA and WCAG are competing standards, so you pick one.",
      "truth": "They are complementary. PDF/UA-1 defines the PDF-specific technical means, while WCAG defines format-agnostic outcomes; the Matterhorn Protocol relates the two."
    },
    {
      "claim": "PDF/UA-1 has conformance levels like PDF/A's A and B.",
      "truth": "PDF/UA-1 defines a single conformance level. A file either conforms or it does not."
    }
  ],
  "faq": [
    {
      "q": "Is PDF/UA-1 the same thing as PDF/UA?",
      "a": "PDF/UA is the standard family (ISO 14289). PDF/UA-1 is Part 1, tied to PDF 1.7, and PDF/UA-2 is Part 2, tied to PDF 2.0. When people say \"PDF/UA\" without a number they often mean PDF/UA-1."
    },
    {
      "q": "Does a file have to be tagged to meet PDF/UA-1?",
      "a": "Yes. A complete, correct Tagged PDF structure tree is fundamental — it is how the document's reading order and semantics are made available to assistive technology."
    },
    {
      "q": "Can a PDF be both PDF/A and PDF/UA at the same time?",
      "a": "Yes. The two profiles address different goals and can be combined in one file, so a document intended for long-term archiving can also carry the structure PDF/UA-1 requires."
    },
    {
      "q": "Does PDF/UA-1 require alt text on every image?",
      "a": "Meaningful non-text content needs a text alternative, but purely decorative graphics should instead be marked as artifacts so assistive technology skips them rather than describing them."
    },
    {
      "q": "Does PDF/UA-1 apply only to the file?",
      "a": "No. It also states requirements for conforming readers and assistive technology, so the standard covers how the content is presented as well as how it is authored."
    }
  ],
  "graph": {
    "parentConcept": "pdf-ua",
    "relatedConcepts": [
      "tagged-pdf",
      "pdf-alt-text",
      "reading-order",
      "logical-structure",
      "role-mapping",
      "well-tagged-pdf",
      "section-508-and-pdf",
      "screen-readers-and-pdf",
      "standard-structure-types"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-1-7",
      "iso-32000",
      "pdf-a",
      "pdf-a-vs-pdf-ua"
    ]
  },
  "seeAlso": [
    "pdf-ua",
    "tagged-pdf",
    "pdf-structure-tree",
    "wcag-and-pdf",
    "pdf-a-vs-pdf-ua",
    "pdf-1-7",
    "pdf-accessibility-checking",
    "reading-order"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
