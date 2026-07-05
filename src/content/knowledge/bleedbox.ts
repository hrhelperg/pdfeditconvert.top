import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "bleedbox",
  "h1": "BleedBox in PDF",
  "cluster": "print-geometry",
  "aliases": [
    "Bleed box",
    "/BleedBox",
    "PDF bleed boundary",
    "bleed area box"
  ],
  "definition": "In PDF, the BleedBox is the page boundary rectangle to which a page's content is clipped during print production, covering the finished trim size plus any bleed that runs off the cut edge.",
  "description": "The BleedBox is the PDF page box marking the print-production clip area — the trim size plus bleed that runs past the finished cut edge.",
  "searchIntent": "printing",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "The BleedBox is one of the five page boundary rectangles that a PDF page object can define, alongside the MediaBox, CropBox, TrimBox, and ArtBox. It describes the region to which a page's content should be clipped when the page is output in a print-production environment. In practice, that region covers the finished page plus a small margin of artwork that intentionally extends beyond where the paper will be cut.",
    "This extra margin is called bleed. Because industrial cutting, folding, and trimming equipment cannot position a blade with perfect accuracy, designers push background colors and images slightly past the intended trim line so that a tiny cutting error never leaves an unprinted white sliver at the edge. The BleedBox encloses that extended artwork, so it is typically a little larger than the TrimBox that marks the finished page size.",
    "The BleedBox is meaningful mainly to prepress, imposition, and raster image processor (RIP) software. General-purpose PDF viewers ignore it and display the CropBox instead, which is why a page can carry bleed that never appears on screen during ordinary reading. Understanding the BleedBox is part of understanding how a single PDF page can describe several different rectangles for different stages of the workflow."
  ],
  "sections": [
    {
      "heading": "How the BleedBox Is Defined in a Page Object",
      "body": [
        "The BleedBox is stored as the /BleedBox entry in a page's dictionary. Like the other page boxes, its value is an array of four numbers, [llx lly urx ury], giving the lower-left and upper-right corners of a rectangle in default user-space units — points, where 72 points equal one inch. If a page has no /BleedBox entry, its default value is the page's CropBox, which itself defaults to the MediaBox, so an undefined bleed area simply collapses back to the crop or media region.",
        "The page boxes are expected to nest: the ArtBox and TrimBox sit inside the BleedBox, which sits inside the CropBox and MediaBox. Unlike the MediaBox and CropBox, however, the BleedBox is not inherited through the page tree — it must be specified directly on each page object that needs one, along with the TrimBox and ArtBox."
      ]
    },
    {
      "heading": "Bleed: Why Content Extends Past the Trim Edge",
      "body": [
        "Bleed exists to hide the physical imprecision of cutting. When a design has a background color or photo that is meant to reach the very edge of the finished page, the artwork is extended a few millimeters beyond the trim line. After the sheet is cut, any small drift in the blade still lands on printed material rather than on bare paper, so the color appears to run cleanly off the edge. The BleedBox is the rectangle that encloses this over-extended content.",
        "This is why the BleedBox and the TrimBox describe different things. The TrimBox marks the finished size of the page after cutting, while the BleedBox is generally larger and includes the surrounding bleed. The PDF format does not dictate how wide the bleed should be; print shops commonly request a few millimeters (around 3 mm, roughly 1/8 inch), but the exact amount is a workflow convention set by the printer, not a rule of the file format."
      ]
    },
    {
      "heading": "The BleedBox in Print Production and PDF/X",
      "body": [
        "In a production pipeline, the BleedBox tells the output device how much of the page to keep. Content that falls outside the BleedBox may be clipped away, so the box has to be drawn wide enough to include all intended bleed. Because it governs clipping rather than on-screen appearance, its value only becomes visible when the page is rendered for plates, film, or a press proof.",
        "The BleedBox plays a supporting role in the PDF/X family of print-exchange standards (ISO 15930). PDF/X requires a page to carry a TrimBox or ArtBox to declare the finished size, and while a BleedBox is optional, when it is present it is expected to fully contain the TrimBox or ArtBox. Preflight tools check these relationships so that the declared bleed genuinely surrounds the finished page and no required box is missing or inconsistent."
      ]
    },
    {
      "heading": "How Software Treats the BleedBox",
      "body": [
        "Everyday PDF readers do not use the BleedBox at all; they present the CropBox region, so a reader typically never sees the bleed. Prepress, imposition, and RIP software, on the other hand, read the BleedBox to decide how much artwork to carry through and where to place printer's marks. Crop and trim marks are positioned outside the BleedBox, in the area between it and the MediaBox, so that they survive cutting without overlapping the bleed.",
        "The practical implication is that the BleedBox is easy to overlook because it is invisible during normal viewing, yet it materially affects a printed result. A missing or too-small BleedBox can cause a RIP to drop the bleed and reintroduce the white-edge problem it was meant to prevent, which is why prepress checks inspect it directly rather than trusting the on-screen view."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Page dictionary key",
      "value": "/BleedBox"
    },
    {
      "label": "Value",
      "value": "Rectangle array [llx lly urx ury] in default user-space units (points, 1/72 inch)"
    },
    {
      "label": "Default value",
      "value": "The page's CropBox (which itself defaults to the MediaBox)"
    },
    {
      "label": "Inheritance",
      "value": "Not inheritable through the page tree, unlike MediaBox and CropBox"
    }
  ],
  "specification": {
    "introduced": "PDF 1.3",
    "iso": "ISO 32000",
    "typicalUsage": "Defines the production clipping region (trim size plus bleed) for prepress and PDF/X print workflows",
    "relatedStandards": [
      "iso-32000",
      "pdf-x"
    ]
  },
  "misconceptions": [
    {
      "claim": "The BleedBox represents the final trimmed page size.",
      "truth": "The TrimBox marks the finished size after cutting; the BleedBox is generally larger because it adds the bleed area outside the trim edge."
    },
    {
      "claim": "Setting a BleedBox changes what readers see on screen.",
      "truth": "On-screen display follows the CropBox. The BleedBox only guides print-production output and is ignored by ordinary viewers."
    },
    {
      "claim": "Crop and trim marks are printed inside the bleed area.",
      "truth": "Printer's marks sit outside the BleedBox, in the region between the BleedBox and the MediaBox, so they are not trimmed off with the page."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between the BleedBox and the TrimBox?",
      "a": "The TrimBox is the finished page size after cutting. The BleedBox is usually larger and includes the bleed margin where ink runs off the edge, so no white sliver appears if the blade drifts slightly during trimming."
    },
    {
      "q": "What units and format does the BleedBox use?",
      "a": "Like the other page boxes, it is a rectangle written as four numbers [llx lly urx ury] in default user-space units — points, where 72 points equal one inch."
    },
    {
      "q": "Do PDF viewers use the BleedBox when displaying a page?",
      "a": "No. General-purpose viewers display the CropBox region. The BleedBox is read by prepress, imposition, and RIP software during print production."
    },
    {
      "q": "How much bleed is typical?",
      "a": "The PDF format does not mandate a bleed amount. Print shops commonly ask for a few millimeters (around 3 mm, roughly 1/8 inch), but the exact figure is a workflow convention set by the printer."
    },
    {
      "q": "Is a BleedBox required in a PDF?",
      "a": "No, it is optional. When absent it defaults to the CropBox, so a page without a defined bleed area simply clips to the crop or display region in production."
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
      "trapping"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-x",
      "pdf-x-1a",
      "pdf-x-4"
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
    "trimbox",
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
