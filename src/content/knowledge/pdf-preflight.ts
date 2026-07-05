import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-preflight",
  "h1": "PDF Preflight",
  "cluster": "print-geometry",
  "aliases": [
    "preflighting",
    "PDF preflight check",
    "print preflight",
    "prepress preflight",
    "preflight profile"
  ],
  "definition": "PDF preflight is the automated inspection of a PDF against a defined ruleset to catch problems—such as missing fonts, wrong color spaces, or low-resolution images—before it is printed or published.",
  "description": "Preflight inspects a PDF against a profile of rules to flag print issues—unembedded fonts, RGB color, low-res images, missing bleed—and often fix them.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF preflight is the step where a file is checked against a defined set of rules before it is sent to print or published, to catch problems while they are still cheap to fix. The name is borrowed from aviation, where pilots run a pre-flight checklist before takeoff: the idea is to verify everything is in order before the point of no return — here, before plates are made or the job goes to press.",
    "A preflight run does not render the page for a person to judge by eye. Instead an engine inspects the PDF's fonts, colors, images, and page geometry against a profile of rules and reports each item as passing, a warning, or an error. Many tools can also apply fixups that correct common problems automatically, though some issues can only be flagged, not repaired.",
    "Preflight sits at the boundary between design and production. It is most associated with commercial printing and the PDF/X exchange standards, but the same concept — measuring a PDF against an explicit ruleset — also underlies conformance checking for archiving and accessibility."
  ],
  "sections": [
    {
      "heading": "How a Preflight Profile Works",
      "body": [
        "Preflight is driven by a profile — a named, reusable collection of individual check rules. Each rule tests one condition in the file (for example, that every font is embedded, or that no image falls below a target resolution at its placed size) and reports the result. Rules are usually assigned a severity, so the same finding can be treated as informational, a warning, or a blocking error depending on how strict the workflow needs to be. Running the profile produces a report that lists what passed, what failed, and often where in the document each problem occurs.",
        "Because the profile is separate from the file, the same rules can be applied consistently to every job, and different profiles can encode the requirements of different destinations — a newspaper, a commercial sheet-fed press, or a digital archive each expect different things. A preflight engine walks the PDF's objects, content streams, resources, and page boxes, evaluating them against the active profile rather than relying on a human to spot trouble on screen."
      ]
    },
    {
      "heading": "What Preflight Typically Checks",
      "body": [
        "The exact checks depend on the profile, but print-oriented preflight commonly inspects font embedding and subsetting, color spaces (flagging RGB where CMYK or spot color is expected, or confirming that ICC profiles are present), and image resolution measured against the size each image is actually placed at. It also examines page geometry — whether a TrimBox and BleedBox are defined, and whether artwork extends far enough past the trim to provide adequate bleed.",
        "Beyond those basics, a profile may test overprint settings, transparency and whether it needs flattening, the presence and type of an output intent, hairline stroke widths that could disappear on press, total ink coverage, and objects that stray outside the intended page boxes. Each of these is something that can look correct in an on-screen viewer yet fail on an imagesetter, plate, or press."
      ]
    },
    {
      "heading": "Fixups: Correcting Problems Automatically",
      "body": [
        "Many preflight tools pair checks with fixups — actions that correct a detected issue automatically. Typical fixups convert RGB objects to a target CMYK profile, embed or subset missing fonts where the font data is available, flatten transparency, set or adjust page boxes, or remove content outside the trim. A profile can be configured to report only, or to report and then apply a defined sequence of corrections.",
        "Fixups have limits, and this distinction matters: preflight can flag a problem it cannot solve. If a placed image simply does not contain enough pixels for the output resolution, or a font is not embedded and its source is unavailable, the tool can warn you but cannot invent the missing data. Reliable results come from fixing the source file, not only patching the PDF after the fact."
      ]
    },
    {
      "heading": "Preflight and the PDF/X Family",
      "body": [
        "Preflight is closely tied to the PDF/X exchange standards (ISO 15930), which define what a print-ready PDF must contain. PDF/X requires that fonts be embedded and that the file declare an output intent describing the intended printing condition. PDF/X-1a restricts color to CMYK and spot and requires transparency to be flattened, while later parts such as PDF/X-4 permit color-managed content and live transparency. A preflight profile can test every one of these requirements and report any the file fails to meet.",
        "Industry groups build on this. The Ghent Workgroup (GWG) publishes standardized preflight specifications and downloadable profiles for common print segments, so a printer and a designer can agree on the same ruleset. Adobe Acrobat Pro ships a built-in Preflight tool, and third-party products such as Enfocus PitStop provide preflight and editing for prepress; all of them work by evaluating a file against a profile in the same general way."
      ]
    },
    {
      "heading": "Preflight vs Validation",
      "body": [
        "Preflight and standards validation overlap but are not identical. Validation asks whether a file conforms to a formal specification — for example, PDF/A conformance for archiving, which a tool such as veraPDF checks clause by clause. Print preflight asks a broader, production-focused question: will this file reproduce correctly on the intended device? That includes concerns a pure conformance check may not weigh, such as whether an image has enough resolution or whether the bleed is sufficient.",
        "In practice the two blur together, because a preflight profile can include standards-conformance rules alongside production rules. A useful mental model is that validation measures a file against a published rulebook, while preflight measures it against the requirements of a specific destination — and those requirements often reference a standard as their starting point."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Origin of the term",
      "value": "Adapted from the aviation pre-flight checklist run before takeoff"
    },
    {
      "label": "Driven by",
      "value": "A profile — a named, reusable set of check rules, each with its own severity"
    },
    {
      "label": "Common tooling",
      "value": "Adobe Acrobat Pro's built-in Preflight, Enfocus PitStop, and Ghent Workgroup profiles"
    },
    {
      "label": "Closely related standard",
      "value": "PDF/X print exchange (ISO 15930)"
    }
  ],
  "misconceptions": [
    {
      "claim": "Preflight fixes my file automatically.",
      "truth": "Preflight primarily inspects and reports. Fixups can correct many issues automatically, but some problems — like a genuinely low-resolution source image or an unavailable font — can only be flagged, not repaired."
    },
    {
      "claim": "If a PDF looks fine on screen, it will print fine.",
      "truth": "On-screen viewers substitute missing fonts, display RGB directly, and ignore bleed and overprint. Preflight checks the production conditions a viewer hides, which is exactly where files fail on press."
    },
    {
      "claim": "Preflight and PDF/A validation are the same thing.",
      "truth": "PDF/A validation checks conformance to an archiving standard, while print preflight checks print-readiness such as color, resolution, and bleed. The goals overlap but are not the same."
    }
  ],
  "faq": [
    {
      "q": "When does preflight happen in a workflow?",
      "a": "Usually just before a PDF leaves for print or publication, and often more than once — a designer may preflight on export, and the print provider typically runs an incoming preflight to confirm the received file meets its requirements before committing it to production."
    },
    {
      "q": "What exactly is a preflight profile?",
      "a": "It is a saved, named collection of individual check rules, each with a severity such as info, warning, or error. Because it is stored separately from any file, the same profile can be reused across every job, and profiles are often based on a standard like PDF/X or on published Ghent Workgroup specifications."
    },
    {
      "q": "Does preflight modify my PDF?",
      "a": "Checking on its own only inspects and reports; it does not change the file. Modification happens only when you run fixups, which apply defined corrections such as color conversion or font embedding. Whether the file is altered is controlled by the profile you run."
    },
    {
      "q": "Can preflight enforce a specific standard such as PDF/X-4?",
      "a": "Yes. A profile can encode a standard's requirements — embedded fonts, an output intent, permitted color spaces, transparency handling — and report each requirement the file does not satisfy, so preflight is commonly used both to verify and to help produce standard-conformant files."
    },
    {
      "q": "Is preflight only useful for commercial printing?",
      "a": "It is most strongly associated with prepress, but the underlying idea — measuring a PDF against an explicit ruleset before use — applies anywhere expectations are strict, including archiving and accessibility checking, where similar tools verify conformance instead of print-readiness."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "relatedConcepts": [
      "press-ready-pdf",
      "print-production-with-pdf",
      "pdf-page-boxes",
      "font-embedding",
      "overprint",
      "image-resolution-in-pdf",
      "spot-colors",
      "pdf-transparency"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-1a",
      "pdf-x-4",
      "pdf-output-intent",
      "pdf-a-validation"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      },
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "press-ready-pdf",
    "print-production-with-pdf",
    "pdf-x",
    "pdf-output-intent",
    "font-embedding",
    "pdf-page-boxes",
    "bleed-and-crop-marks",
    "pdf-a-validation"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
