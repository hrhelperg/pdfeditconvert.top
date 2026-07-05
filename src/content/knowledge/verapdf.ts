import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "verapdf",
  "h1": "veraPDF",
  "cluster": "standards",
  "aliases": [
    "vera PDF",
    "veraPDF validator",
    "veraPDF validation library",
    "veraPDF PDF/A validator"
  ],
  "definition": "veraPDF is an open-source, industry-supported validator that checks whether a PDF conforms to the PDF/A archival and PDF/UA accessibility standards.",
  "description": "veraPDF is an open-source, industry-supported validator that checks PDF files against the PDF/A archival and PDF/UA accessibility standards.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "veraPDF is an open-source software project whose job is to answer one question precisely: does a given PDF file actually meet the rules of a PDF conformance standard? It focuses on the archival family PDF/A (standardized as ISO 19005) and the accessibility standard PDF/UA (ISO 14289), covering their different parts and conformance levels. Rather than opening a document and rendering it, veraPDF inspects the file's internal structure against a detailed, machine-readable set of requirements and reports every place the file falls short.",
    "The project exists because 'conformance' has to mean the same thing to everyone. A PDF/A file that one program accepts and another rejects is not much use for long-term archiving, so the standards community set out to build a shared, transparent reference implementation of the checks. veraPDF was created for exactly that purpose and is governed openly by the organizations behind PDF preservation and standardization, which is why it is often described as 'industry-supported' validation.",
    "For anyone producing archival or accessible PDFs, veraPDF is the reference point that turns an abstract standard into a concrete pass-or-fail result with itemized reasons. It is a validator and reporting tool, not a converter: it tells you whether a file conforms and, if not, what specifically is wrong, so the fixes can be made upstream in whatever tool created the document."
  ],
  "sections": [
    {
      "heading": "What veraPDF checks",
      "body": [
        "veraPDF validates files against the PDF/A and PDF/UA standards across their multiple parts and conformance levels. For PDF/A that includes the archival requirements defined in the ISO 19005 series, spanning the older parts through PDF/A-4 (ISO 19005-4), and their conformance levels such as the 'a', 'b', 'u', and later 'e' and 'f' variants. For PDF/UA it checks the machine-verifiable structural requirements that make a tagged PDF usable by assistive technology. In each case the tool applies the specific rules that belong to the chosen standard and level.",
        "A validation run produces a structured report: an overall verdict of conformant or non-conformant, plus a list of the individual rules that failed and where in the file they failed. This makes veraPDF useful not just as a gatekeeper but as a diagnostic tool, because the failures point back to concrete problems such as a font that is not embedded, missing metadata, or disallowed features that the standard forbids."
      ]
    },
    {
      "heading": "How validation works: rules, flavours and profiles",
      "body": [
        "Each standard and conformance level is expressed as a validation profile, sometimes called a 'flavour' in veraPDF terminology. A profile is a machine-readable collection of individual rules, and each rule encodes a specific clause of the standard as a testable condition on the objects inside a PDF. Because the profiles are explicit and open, the interpretation of the standard is transparent: anyone can see exactly which requirement a given check corresponds to, which is central to the goal of a shared, reproducible definition of conformance.",
        "To evaluate those rules, veraPDF reads the file with its own PDF parser and exposes the document's structure through a validation model. The rules are written against that model, so the same rule engine can be pointed at different profiles to validate a file as PDF/A-1, PDF/A-2, PDF/A-4, PDF/UA, and so on. This separation of the parser, the model, and the rule sets is what lets the project add or refine checks as the standards and their interpretations evolve."
      ]
    },
    {
      "heading": "Governance and industry support",
      "body": [
        "veraPDF was developed to be a neutral, community-owned reference implementation rather than a single vendor's product. It originated through a European Union funded procurement programme aimed at digital preservation, and its development was overseen by the PDF Association's technical working group responsible for PDF validation. That working group also plays an ongoing role in resolving ambiguities that surface when the standard meets real-world files.",
        "Since 2017 the project has been maintained by the Open Preservation Foundation, working alongside the PDF Association and with input from the wider digital-preservation community. Because it is open source, veraPDF is free to download, use, and modify, and its checks can be inspected and challenged in the open. This governance model is why archives, libraries, and PDF software vendors treat its results as an authoritative interpretation of what PDF/A and PDF/UA conformance requires."
      ]
    },
    {
      "heading": "Policy checking and metadata fixing",
      "body": [
        "Beyond core standard validation, veraPDF includes a policy checker that lets an organization test a file against its own additional constraints, expressed as machine-readable rules over the same validation model. This is useful when an archive or workflow wants to enforce requirements that go beyond, or narrow down, what the base standard mandates, for example insisting on particular metadata fields or rejecting features that are technically allowed but locally unwanted.",
        "The project also provides a metadata fixer that can correct certain well-defined metadata problems, such as reconciling the XMP metadata that PDF/A requires. This is a targeted repair capability, not a general conversion feature: it does not turn an arbitrary PDF into a conforming PDF/A file. Producing a conformant file in the first place is the job of the authoring or preflight tool; veraPDF's role is to verify the result and flag what still needs attention."
      ]
    },
    {
      "heading": "How veraPDF is used",
      "body": [
        "veraPDF is written in Java and ships in several forms so it can fit different workflows. It offers a graphical desktop application for interactive, one-off checks; a command-line interface for scripting and batch processing many files; a Java library so its validation engine can be embedded directly into other software; and REST web services for calling validation from server-based systems. The same underlying rules and profiles drive all of these interfaces.",
        "In practice it sits at the verification stage of a document pipeline. Archival systems run it to confirm that ingested documents really are valid PDF/A before they are preserved for the long term, and accessibility and print-production workflows use it to confirm PDF/UA or PDF/A conformance after a file is generated. Where the goal is to create or repair a conforming file rather than just check one, veraPDF is paired with a converter or preflight tool that does the transformation, with veraPDF providing the final pass-or-fail confirmation."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Type",
      "value": "Open-source, industry-supported PDF/A and PDF/UA validator (written in Java)"
    },
    {
      "label": "Standards covered",
      "value": "PDF/A (ISO 19005 family) and PDF/UA (ISO 14289), across their parts and conformance levels"
    },
    {
      "label": "Governance",
      "value": "Maintained by the Open Preservation Foundation with the PDF Association; open source and free to use"
    },
    {
      "label": "Interfaces",
      "value": "Desktop GUI, command-line tool, embeddable Java library, and REST web services"
    }
  ],
  "misconceptions": [
    {
      "claim": "veraPDF converts ordinary PDFs into PDF/A files.",
      "truth": "veraPDF is a validator, not a converter. It reports whether a file already conforms and what is wrong; producing a conforming PDF/A file is the job of an authoring or preflight/conversion tool. Its metadata fixer only repairs specific, well-defined metadata issues."
    },
    {
      "claim": "If a file passes veraPDF, it is guaranteed to be fully accessible or completely correct.",
      "truth": "Validation confirms the machine-checkable requirements of the standard. Some qualities, especially in PDF/UA, such as whether alternative text is meaningful or whether the reading order makes sense, require human judgement and cannot be fully verified automatically."
    },
    {
      "claim": "veraPDF is an official ISO product or the only way conformance is defined.",
      "truth": "ISO publishes the PDF/A and PDF/UA standards, not a validator. veraPDF is an independent, open-source, industry-supported reference implementation of the checks; it is widely trusted but is a community project rather than part of the ISO standard itself."
    }
  ],
  "faq": [
    {
      "q": "Is veraPDF free to use?",
      "a": "Yes. veraPDF is open source and free to download, use, and modify. Because the code and its validation rules are public, the checks it applies can be inspected by anyone."
    },
    {
      "q": "Which standards can veraPDF validate?",
      "a": "It validates PDF/A (the ISO 19005 archival family) and PDF/UA (ISO 14289 accessibility), covering their different parts and conformance levels. You choose the specific standard and level, called a profile or flavour, for each run."
    },
    {
      "q": "How do you run veraPDF?",
      "a": "It is a Java application available as a desktop GUI for interactive checks, a command-line tool for batch and scripted validation, an embeddable Java library, and REST web services for server integration. All share the same validation engine."
    },
    {
      "q": "Who develops and maintains veraPDF?",
      "a": "It began under a European Union funded digital-preservation programme and was overseen by the PDF Association's PDF validation working group. Since 2017 it has been maintained by the Open Preservation Foundation."
    },
    {
      "q": "What is a validation profile or flavour in veraPDF?",
      "a": "A profile is a machine-readable set of rules representing one standard and conformance level, for example PDF/A-2b or PDF/UA-1. Each rule maps to a specific requirement in the standard, so the report says exactly which requirements a file met or missed."
    }
  ],
  "graph": {
    "parentConcept": "pdf-a-validation",
    "relatedConcepts": [
      "pdf-validation",
      "pdf-preflight",
      "pdf-accessibility-checking"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-a-1",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-a-4",
      "pdf-ua-1",
      "pdf-standards-overview"
    ],
    "relatedTools": [
      {
        "label": "Free PDF Tools — Browser-Based, No Upload Needed",
        "path": "/pdf-tools"
      },
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
    "pdf-a-validation",
    "pdf-a",
    "pdf-a-conformance-levels",
    "pdf-a-4",
    "pdf-ua-1",
    "pdf-preflight",
    "pdf-validation",
    "pdf-a-metadata-requirements"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
