import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "trimbox",
  "h1": "TrimBox in PDF",
  "cluster": "print-geometry",
  "aliases": [
    "trim box",
    "/TrimBox",
    "trim size box",
    "finished-page box"
  ],
  "definition": "TrimBox is the PDF page box that specifies a page's intended finished dimensions after it has been trimmed to its final size in print production.",
  "description": "TrimBox is the PDF page box that marks a page's final trimmed size. Learn how it defines the cut line and guides imposition and PDF/X preflight.",
  "searchIntent": "printing",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "The TrimBox is one of the five page boundary boxes that a PDF page object can carry, alongside the MediaBox, CropBox, BleedBox, and ArtBox. It records the size of the page as it is meant to exist once the printed sheet has been cut down to its finished dimensions. In other words, it is the rectangle that says where the paper is intended to be trimmed.",
    "Unlike the MediaBox, which describes the full physical medium, or the CropBox, which controls the region a viewer displays, the TrimBox carries no meaning for on-screen reading. It is production metadata: a promise about the finished piece that prepress software, imposition tools, and preflight checks rely on. A brochure designed to end up at A4 will have a TrimBox that is A4-sized, even though the sheet it was printed on and the file's MediaBox may be larger to accommodate bleed and marks.",
    "Because it defines the cut line, the TrimBox sits at the heart of how a page is positioned on press. It is the reference the other production boxes are described against, and several print standards treat its presence as mandatory. Understanding it is essential to reasoning about bleed, crop marks, imposition, and whether a file is ready for a commercial printer."
  ],
  "sections": [
    {
      "heading": "How the TrimBox is defined",
      "body": [
        "The TrimBox is stored in the page object dictionary under the key /TrimBox, whose value is an array of four numbers written as [llx lly urx ury]. Those numbers are the coordinates of the lower-left and upper-right corners of the rectangle, expressed in default user space units, where one unit equals 1/72 inch (one point). The rectangle is therefore defined in the same coordinate system as the rest of the page's geometry, which lets prepress software relate the trim line to the actual marks and content on the page.",
        "The entry is optional. When a page has no explicit TrimBox, its value is taken to be the same as the page's CropBox. The TrimBox was added to the format in PDF 1.3, at the same time as the BleedBox and ArtBox, precisely to give print production a standardized way to describe finishing geometry rather than inferring it from the visible page."
      ]
    },
    {
      "heading": "TrimBox versus the other page boxes",
      "body": [
        "The page boxes form a nested set of intentions. The MediaBox is the outermost boundary describing the physical medium; the BleedBox marks how far artwork should extend past the cut so that no white slivers appear after trimming; and the TrimBox sits inside the BleedBox, marking the exact finished edge. Conceptually the BleedBox should enclose the TrimBox, and the MediaBox should enclose them all. Content that extends beyond the MediaBox is effectively bounded by it.",
        "The distinction from the CropBox is the one most worth internalizing. The CropBox governs what a viewer clips and displays and what most tools treat as the visible page; it has display consequences. The TrimBox has none: change it and a normal reader shows the page identically. The ArtBox, meanwhile, describes the extent of meaningful content and is an alternative production box that some workflows use instead of the TrimBox."
      ]
    },
    {
      "heading": "Why it matters in print production",
      "body": [
        "When pages are placed onto a press sheet during imposition, the TrimBox is the anchor the software positions against. It tells the workflow where each finished page begins and ends, which is what makes it possible to gang multiple pages onto one sheet, add gutters, and lay out signatures correctly. Crop marks and trim marks are generated at the corners of the TrimBox, so an incorrect or missing TrimBox leads to marks and cuts in the wrong place.",
        "The TrimBox also defines the relationship to bleed. Because the physical guillotine cannot cut perfectly, artwork is extended into the bleed region beyond the TrimBox; the difference between the BleedBox and the TrimBox is the bleed allowance. A press-ready file is one where these boxes agree with the printer's expectations, which is why preflight tools inspect the TrimBox closely before a job goes to plate."
      ]
    },
    {
      "heading": "TrimBox in PDF/X and preflight",
      "body": [
        "The PDF/X family of print-exchange standards treats finishing geometry as required information. In broad terms, PDF/X expects every page to carry either a TrimBox or an ArtBox, but not both, so that the intended finished size is never ambiguous. A file that relies on the implicit CropBox fallback will typically be flagged during PDF/X validation, because the standard wants the trim intent stated explicitly.",
        "In everyday preflight, checks around the TrimBox include whether it is present, whether it lies within the MediaBox, and whether adequate bleed exists between it and the BleedBox. These checks catch common problems long before ink hits paper, which is why prepress operators pay attention to the TrimBox even though it is invisible to ordinary readers."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Dictionary key",
      "value": "/TrimBox — an array [llx lly urx ury] in the page object"
    },
    {
      "label": "Units",
      "value": "Default user space; 1 unit = 1/72 inch (one point)"
    },
    {
      "label": "Default value",
      "value": "Equal to the page's CropBox when not explicitly present"
    },
    {
      "label": "Introduced",
      "value": "Added to the format in PDF 1.3 (with BleedBox and ArtBox)"
    }
  ],
  "specification": {
    "introduced": "PDF 1.3",
    "iso": "ISO 32000 (core PDF page object); referenced by ISO 15930 (PDF/X)",
    "typicalUsage": "Defines the finished trim size for print production, imposition, and PDF/X preflight",
    "relatedStandards": [
      "pdf-x",
      "pdf-x-1a",
      "pdf-x-4"
    ]
  },
  "misconceptions": [
    {
      "claim": "The TrimBox changes how a page looks on screen.",
      "truth": "Standard viewers display the CropBox; the TrimBox is production metadata and has no effect on ordinary viewing."
    },
    {
      "claim": "TrimBox and BleedBox describe the same rectangle.",
      "truth": "The BleedBox is the larger area into which artwork bleeds; the TrimBox is the finished cut line that sits inside it."
    },
    {
      "claim": "Setting a TrimBox physically crops or deletes content outside it.",
      "truth": "It only records the intended finished size; the actual cut happens on a physical trimmer, and content outside remains in the file until removed."
    }
  ],
  "faq": [
    {
      "q": "Where is the TrimBox stored in a PDF?",
      "a": "In each page object dictionary as the /TrimBox entry, whose value is an array of four numbers giving the lower-left and upper-right corners in default user space."
    },
    {
      "q": "What happens if a PDF page has no TrimBox?",
      "a": "Its value defaults to the CropBox. Many commercial print workflows and PDF/X preflight checks will flag the missing TrimBox because the trim intent is not stated explicitly."
    },
    {
      "q": "Do normal PDF viewers use the TrimBox?",
      "a": "No. Ordinary viewers render the CropBox. The TrimBox is consumed by prepress, imposition, and preflight software rather than by on-screen readers."
    },
    {
      "q": "Can the TrimBox be larger than the MediaBox?",
      "a": "It is not meant to be. The TrimBox should sit within the BleedBox and MediaBox; content is effectively bounded by the MediaBox regardless."
    },
    {
      "q": "Is the TrimBox the same as the page size?",
      "a": "Not necessarily. The visible page size is driven by the CropBox or MediaBox, while the TrimBox is the finished size after trimming, which is often smaller because the sheet includes bleed and marks."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-boxes",
    "relatedConcepts": [
      "pdf-page-geometry",
      "pdf-preflight",
      "print-production-with-pdf",
      "pdf-imposition",
      "pdf-units-and-measurements",
      "pdf-coordinate-system"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4",
      "pdf-x-1a"
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
      }
    ]
  },
  "seeAlso": [
    "pdf-page-boxes",
    "bleedbox",
    "artbox",
    "cropbox",
    "mediabox",
    "bleed-and-crop-marks",
    "pdf-x",
    "press-ready-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
