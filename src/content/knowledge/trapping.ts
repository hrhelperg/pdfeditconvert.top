import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "trapping",
  "h1": "Trapping in Print Production",
  "cluster": "print-geometry",
  "aliases": [
    "Spread and choke",
    "Prepress trapping",
    "Color trapping",
    "Trap (prepress)"
  ],
  "definition": "Trapping is a prepress technique that slightly overlaps adjacent printed colors so tiny gaps do not show if the press's color plates shift out of register.",
  "description": "Learn how print trapping works: spreads and chokes overlap abutting inks to hide misregistration gaps, and how PDF records a document's trapped state.",
  "searchIntent": "printing",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Trapping is a prepress technique used when a document will be reproduced on a multi-color printing press. Its job is to hide the thin gaps that appear when the press's separate color plates do not line up perfectly, a condition called misregistration. By deliberately overlapping the edges of adjacent colors by a small amount, trapping keeps a stray line of unprinted paper from showing through where two inks are supposed to meet.",
    "The overlap is created in one of two directions, known as a spread or a choke, and is usually applied so that the lighter of two colors extends into the darker one. Traps are kept as narrow as possible: wide enough to survive the movement a given press and paper are expected to introduce, but small enough that the overlap itself does not read as a visible third color along the seam.",
    "PDF does not perform trapping, but it does carry information about it. A PDF's document information dictionary can declare whether the file has been trapped, and the format defines a dedicated annotation type for storing precomputed traps. Print-focused standards such as PDF/X go further and require that a file state its trapped condition, so the print provider knows whether traps still need to be added."
  ],
  "sections": [
    {
      "heading": "Why Misregistration Creates Gaps",
      "body": [
        "On a multi-color press, each ink is laid down from a separate plate or print unit. For process color that means cyan, magenta, yellow, and black, plus any spot inks a job uses. Ideally every plate aligns exactly so colored shapes meet cleanly at their edges. In practice, paper stretch, mechanical tolerances, and web movement cause plates to shift slightly relative to one another, which is called misregistration.",
        "The problem becomes visible wherever one colored object is knocked out of the background, meaning the background ink is removed everywhere the foreground object sits so the two inks do not mix. If the plates then shift, a thin sliver appears along the edge where neither ink prints, revealing the paper white as a gap or halo. Trapping exists to keep that sliver from showing."
      ]
    },
    {
      "heading": "Spreads and Chokes: How a Trap Is Built",
      "body": [
        "Trapping closes those potential gaps by making abutting colors overlap by a tiny amount along their shared edge. The overlap is built in one of two directions. A spread expands the lighter of the two colors outward so it laps slightly under the darker one. A choke shrinks the knockout of the darker area so the lighter color extends into it.",
        "The guiding principle is that the lighter color moves into the darker color, because the darker ink dominates visually and preserves the object's apparent shape and size. The width of the trap is deliberately small, just enough to survive the misregistration a given press and stock are expected to produce, without creating a visible band of a third color where the two inks now overlap."
      ]
    },
    {
      "heading": "Trapping, Overprint, and Knockout",
      "body": [
        "Trapping is closely tied to two other prepress concepts: knockout and overprint. By default, an upper object knocks out the artwork beneath it so the inks do not combine. Overprinting turns that behavior off for a chosen object, letting its ink print directly on top of the underlying ink instead of removing it.",
        "Overprint is one mechanism used to achieve trapping. Small black text, for example, is frequently set to overprint so it needs no trap at all, since it simply prints over whatever lies beneath it. Full trapping, by contrast, is usually generated automatically by prepress software or the raster image processor, which examines color edges and inserts spreads and chokes only where a visible gap could actually occur."
      ]
    },
    {
      "heading": "How PDF Represents Trapping",
      "body": [
        "A PDF file can record whether trapping has already been applied. The document information dictionary includes an optional Trapped entry whose value is a name: True, False, or Unknown. It declares the document's trapping state, and Unknown is the assumed value when nothing is asserted. This entry is metadata; it does not create traps.",
        "PDF also defines trap network annotations, a specialized annotation type that stores precomputed trapping as page content, so a document can carry its own traps rather than relying on the output device to generate them. Print-oriented standards build on this foundation: the PDF/X family (ISO 15930) requires the trapped state to be stated explicitly as True or False rather than left Unknown, so a print provider can tell at a glance whether the file still needs trapping."
      ]
    },
    {
      "heading": "When Trapping Is (and Isn't) Needed",
      "body": [
        "Trapping matters most on multi-unit offset and flexographic presses printing solid areas, spot inks, or high-contrast edges, where even slight misregistration is noticeable. It is far less relevant for digital presses that lay all colors in a single pass with tight registration, and it is generally unnecessary for continuous-tone images whose process tints already blend across their edges.",
        "Applying too much trap, or trapping where it is not needed, can introduce its own visible fringe of a third color. For that reason, trapping decisions are usually left to prepress specialists or to automated systems tuned to a specific press and paper stock, rather than applied indiscriminately by the person who created the artwork."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Purpose",
      "value": "Compensates for plate misregistration by overlapping adjacent colors so paper-white gaps do not show"
    },
    {
      "label": "Two directions",
      "value": "Spread expands the lighter color; choke shrinks the darker area's knockout"
    },
    {
      "label": "PDF Trapped key",
      "value": "A document info dictionary name value of True, False, or Unknown"
    },
    {
      "label": "PDF/X requirement",
      "value": "The trapped state must be stated as True or False, not left Unknown"
    }
  ],
  "misconceptions": [
    {
      "claim": "Trapping fixes or prevents misregistration on the press.",
      "truth": "It does not move plates or improve registration. It only hides the thin paper-white gaps that small misregistration would otherwise reveal at color edges."
    },
    {
      "claim": "Trapping and overprinting are the same thing.",
      "truth": "Overprinting is one mechanism, printing ink on top instead of knocking out. Trapping is the broader technique of overlapping edges, which may or may not use overprint."
    },
    {
      "claim": "Every print job needs trapping, and more is always better.",
      "truth": "Digital presses and continuous-tone images often need none, and excessive trap width can create a visible fringe of a third color along the seam."
    }
  ],
  "faq": [
    {
      "q": "What is misregistration?",
      "a": "It is when a press lays down its separate color plates slightly out of alignment, so shapes that should meet exactly instead leave overlaps or thin gaps at their edges."
    },
    {
      "q": "What is the difference between a spread and a choke?",
      "a": "A spread enlarges the lighter color into the darker one, while a choke shrinks the darker area's knockout so the lighter color fills in. In both cases the lighter color moves so the darker shape keeps its size."
    },
    {
      "q": "Does the PDF Trapped flag actually create traps?",
      "a": "No. The Trapped entry only declares whether trapping has already been done; it is metadata, not a trapping operation. The actual traps live in the page content or in trap network annotations."
    },
    {
      "q": "Who usually performs trapping?",
      "a": "It is most often generated automatically by prepress software or the raster image processor at the print provider, tuned to the specific press and paper, rather than by the person who designed the file."
    },
    {
      "q": "Does digital printing need trapping?",
      "a": "Usually far less, because digital presses register all colors in a single pass. Trapping is mainly a concern for offset, flexographic, and spot-color work on multi-unit presses."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "relatedConcepts": [
      "devicecmyk",
      "pdf-printing-pipeline",
      "bleed-and-crop-marks",
      "color-management-in-pdf",
      "rendering-intent"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-1a",
      "pdf-output-intent"
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-x-trapping",
    "overprint",
    "print-production-with-pdf",
    "press-ready-pdf",
    "spot-colors",
    "separation-color",
    "pdf-preflight",
    "pdf-x"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
