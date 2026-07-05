import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-conformance-levels",
  "h1": "What Conformance Levels Mean in PDF",
  "cluster": "standards",
  "aliases": [
    "conformance classes",
    "conformance profiles",
    "compliance levels",
    "PDF conformance",
    "conformance targets"
  ],
  "definition": "In the PDF standards, a conformance level is a named profile of requirements — such as PDF/A Level A or B — that a file must satisfy to be certified as conforming to a specific part of that standard.",
  "description": "How PDF conformance levels work: the requirement profiles, like PDF/A Level A, B and U, that define what a file must contain to pass validation.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF is a broad, general-purpose format, but many industries need tighter guarantees than \"it opens and looks right.\" The ISO PDF standards family answers that by layering focused, purpose-built rule sets — for archiving, print production, accessibility, and engineering — on top of the base format. Within most of those sub-standards, a single set of rules is not one-size-fits-all, so the standard defines two or more conformance levels.",
    "A conformance level is a documented profile: a specific list of features a file must include and a list it must avoid. Meeting every requirement of a level is exactly what earns a file the right to be labelled with that level's name, such as PDF/A-2b or PDF/A-2a. Conformance is a pass/fail property, not a quality score — a file either meets the whole profile or it does not.",
    "Conformance levels are easy to confuse with PDF version numbers and with the standards themselves. This page explains what a level actually defines, how it differs from a standard's part or version, how the levels differ across the main PDF standards, and how a level is declared in a file and then verified."
  ],
  "sections": [
    {
      "heading": "What a conformance level defines",
      "body": [
        "A conformance level sits on top of the base PDF format and does two complementary jobs. It mandates certain things — for example, that every font be embedded, that a color definition or output intent be present, and that document metadata be included — and it forbids others, such as encryption, unembedded fonts, or references to external resources. The exact combination is what distinguishes one level from another.",
        "Because a file must satisfy every requirement of a level, conformance is binary rather than graded: there is no \"90% conforming.\" A stricter level typically layers additional requirements on top of a looser one instead of replacing it, so the stricter level is a superset of the looser one's rules. The letters are not an alphabetical ranking — in PDF/A, for instance, the strictness order is B (basic), then U, then A, so Level A is the most demanding even though it is the lowest letter. That superset relationship is why a file can be reworked to move from a looser level up to a stricter one, but only by adding whatever the stricter level demands."
      ]
    },
    {
      "heading": "Levels versus parts and versions",
      "body": [
        "Three ideas are routinely blurred together. The base PDF version is the underlying file format everything is built on; PDF 1.7 was standardized as ISO 32000-1 and PDF 2.0 as ISO 32000-2, while earlier versions such as PDF 1.4 were Adobe specifications published before ISO standardization. A part is a numbered edition of a sub-standard, such as PDF/A-1, PDF/A-2, PDF/A-3, and PDF/A-4, each typically tied to a particular base PDF version. A conformance level (sometimes called a conformance class) is a variant within a part that tunes how strict the requirements are.",
        "Choosing a compliance target therefore means picking both a part and a level. A name like \"PDF/A-2u\" reads as part 2, level U; \"PDF/A-1b\" reads as part 1, level B. The part tells you which edition of the standard and which base feature set apply, while the level tells you which requirement profile within that edition the file must meet."
      ]
    },
    {
      "heading": "How the levels differ across the standards",
      "body": [
        "PDF/A (ISO 19005) is the clearest example. It historically defines Level B (basic, requiring reliable visual reproduction), Level U (which adds Unicode text mapping so text can be reliably extracted and searched), and Level A (which further adds a tagged logical structure for accessibility and reflow). PDF/A-1 defined only Levels A and B; PDF/A-2 and PDF/A-3 added Level U. PDF/A-4, which is based on PDF 2.0, restructured this: it drops the A/B/U letters and instead defines a base PDF/A-4 plus optional conformances such as PDF/A-4e for engineering content and PDF/A-4f for embedded files.",
        "Other standards structure the idea differently. PDF/X (ISO 15930) uses distinct flavors rather than letter levels — for instance PDF/X-1a, which restricts a file to CMYK and spot color with no ICC-managed color or live transparency; PDF/X-3, which permits device-independent, color-managed workflows; and PDF/X-4, which allows live transparency and layers. PDF/UA (ISO 14289) takes yet another approach, with PDF/UA-1 defining a single conformance target instead of several levels. The PDF/A breakdown is covered in depth on the dedicated PDF/A conformance levels page."
      ]
    },
    {
      "heading": "Conformance is not only about the file",
      "body": [
        "Several of these standards define conformance for software as well as for documents, not only for the file itself. PDF/A, for example, distinguishes conforming files from conforming readers: a conforming PDF/A reader is expected to render a document using its embedded fonts and output intent and to ignore embedded scripting. Some standards and parts also describe expectations for the tools that produce files, though a formally named \"conforming writer\" category is not defined uniformly across every standard in the family.",
        "This matters because a document's conformance can be undermined by the tool that opens or edits it. A file can be perfectly conforming, yet a non-conforming editor might strip metadata, drop embedded fonts, or add prohibited content when it saves. Treating conformance as a property of the whole workflow — the producing tool, the file, and the consuming tool — is closer to how the standards actually frame it."
      ]
    },
    {
      "heading": "Declaring a level and verifying it",
      "body": [
        "A file records the standard, part, and level it claims to meet in its XMP metadata. For PDF/A this lives in the pdfaid namespace, which carries a part value (such as 1, 2, 3, or 4) and a conformance value (such as A, B, or U); other standards use their own metadata keys. Reading that metadata tells you what a file claims to be.",
        "A claim, however, is not proof. Actual conformance is established by validating the file against the requirements of the standard, and a document can carry a PDF/A-2b claim in its metadata while still failing validation. Validators such as veraPDF check a file against the standard's machine-readable profile — a defined set of rules derived from the specification's clauses — and report a pass or fail along with the specific clauses that were violated, which is why the claimed level and the verified level are kept conceptually separate."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "PDF/A-1 levels",
      "value": "Defines two conformance levels: Level A (accessible) and Level B (basic)."
    },
    {
      "label": "Added in PDF/A-2 and PDF/A-3",
      "value": "A third level, Level U, adds Unicode text mapping on top of Level B."
    },
    {
      "label": "PDF/A-4 restructuring",
      "value": "Based on PDF 2.0, it drops the A/B/U letters in favor of a base level plus conformances such as PDF/A-4e and PDF/A-4f."
    },
    {
      "label": "Claimed vs verified",
      "value": "A level is recorded in XMP metadata but must be independently validated to confirm real conformance."
    }
  ],
  "specification": {
    "typicalUsage": "Selecting a compliance target (a part plus a level) for archiving, print, or accessibility, and validating that a file actually meets it.",
    "relatedStandards": [
      "pdf-a-conformance-levels",
      "pdf-a",
      "pdf-x",
      "pdf-ua"
    ]
  },
  "misconceptions": [
    {
      "claim": "A higher conformance level means a newer or better-quality PDF.",
      "truth": "Levels describe different requirement profiles, not a quality ranking. PDF/A Level A adds structure and accessibility requirements over Level B, but Level B is a legitimate target when full tagging is not feasible."
    },
    {
      "claim": "A conformance level and the PDF version number are the same thing.",
      "truth": "The PDF version (1.7, 2.0) is the underlying file format. A conformance level is a requirement profile inside a sub-standard that is built on top of a PDF version, so they describe different layers."
    },
    {
      "claim": "If a file's metadata says PDF/A, it is guaranteed to conform at that level.",
      "truth": "The level stored in metadata is only a claim. Conformance has to be verified with a validator, and a file can claim a level it does not actually meet."
    }
  ],
  "faq": [
    {
      "q": "Is 'conformance level' the same as 'conformance class'?",
      "a": "The terms are used largely interchangeably. PDF/A has traditionally spoken of Levels A, B, and U, while some standards and tools use the word class or conformance. In all cases the idea is the same: a named requirement profile a file must fully satisfy."
    },
    {
      "q": "Do all PDF standards have multiple conformance levels?",
      "a": "No. PDF/A and PDF/X define several levels or flavors, but PDF/UA-1 defines a single conformance target. So whether you must choose a level depends on which standard you are targeting."
    },
    {
      "q": "Where is a PDF's conformance level recorded?",
      "a": "In the file's XMP metadata. For PDF/A this is the pdfaid namespace, which stores the part and the conformance letter. That entry states the level the file claims, which a validator can then confirm or refute."
    },
    {
      "q": "Can one PDF conform to more than one standard at the same time?",
      "a": "Yes. A file can, for example, meet both PDF/A and PDF/UA requirements at once, because those standards are complementary — one focuses on long-term archiving and the other on accessibility. The file simply has to satisfy both requirement sets and declare both claims."
    },
    {
      "q": "Does the conformance level change how a PDF looks?",
      "a": "Generally not for the same content. Levels mostly govern internal requirements — embedded fonts, defined color, tagged structure — rather than visible appearance, though targeting a stricter level may require adding structure or embedding resources the original file lacked."
    }
  ],
  "graph": {
    "parentConcept": "pdf-standards-overview",
    "relatedConcepts": [
      "pdf-versions",
      "iso-32000",
      "pdf-2-0",
      "tagged-pdf",
      "xmp-metadata"
    ],
    "relatedStandards": [
      "pdf-a-1",
      "pdf-a-4",
      "pdf-x-1a",
      "pdf-x-4",
      "pdf-ua-1"
    ],
    "relatedFormats": [
      "pdf-a",
      "pdf-x",
      "pdf-ua"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ]
  },
  "seeAlso": [
    "pdf-standards-overview",
    "pdf-a-conformance-levels",
    "pdf-a",
    "pdf-x",
    "pdf-ua",
    "pdf-a-validation",
    "verapdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
