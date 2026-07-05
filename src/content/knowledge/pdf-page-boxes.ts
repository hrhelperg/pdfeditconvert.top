import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-page-boxes",
  "h1": "PDF Page Boxes",
  "cluster": "print-geometry",
  "aliases": [
    "Page boundary boxes",
    "PDF boundary boxes",
    "Page boxes",
    "Boundary boxes",
    "Page geometry boxes"
  ],
  "definition": "PDF page boxes are the five rectangles — MediaBox, CropBox, BleedBox, TrimBox and ArtBox — a page object uses to define its physical, visible and print-production boundaries.",
  "description": "The five PDF page boxes — MediaBox, CropBox, BleedBox, TrimBox and ArtBox — define a page's physical size, visible area and print-production boundaries.",
  "searchIntent": "printing",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every page in a PDF carries a small set of rectangles, called page boxes, that describe where the page's edges are for different purposes. They answer questions a viewer or printer needs to resolve before it can lay ink or pixels down: how big is the sheet, how much of it should be shown, and where does the finished page get cut. The boxes are stored as simple coordinate arrays in the page object, so they add almost nothing to file size while carrying precise geometric intent.",
    "The PDF specification defines five of these boxes — MediaBox, CropBox, BleedBox, TrimBox and ArtBox. They form a loose nesting, from the full physical medium down to the trimmed, finished page and the meaningful artwork inside it. Only the MediaBox is required; the other four fall back to sensible defaults when they are absent, which is why many everyday documents define just one or two boxes and still open correctly.",
    "The distinction between the boxes matters most at the two ends of a PDF's life: on screen, where the CropBox controls what a reader actually sees, and in prepress, where the BleedBox, TrimBox and ArtBox tell professional printing equipment where to allow bleed and where to cut. Understanding which box governs which stage explains a lot of otherwise puzzling behavior, such as a page that looks cropped on screen but still contains hidden content past its visible edge."
  ],
  "sections": [
    {
      "heading": "The five page boxes and what each one means",
      "body": [
        "The MediaBox defines the boundaries of the physical medium on which the page is intended to be displayed or printed — think of it as the full sheet of paper or the largest extent of the page. It is the only mandatory box, and every other box is understood relative to it. The CropBox defines the region to which the page's contents are clipped when the page is displayed or printed; it is the rectangle a viewer treats as the page's visible area. Anything on the page outside the CropBox is simply not shown, even though it still exists in the file.",
        "The remaining three boxes describe intent for print production. The BleedBox defines the region to which contents are clipped in a production environment, allowing for the bleed area where ink runs past the final edge. The TrimBox gives the intended dimensions of the finished page after it has been trimmed or cut. The ArtBox marks the extent of the page's meaningful content, sometimes including surrounding white space, as the page's creator defined it. Together these let a prepress workflow know where the paper will be cut and how much bleed to expect."
      ]
    },
    {
      "heading": "How a page box is written in the file",
      "body": [
        "Each box is an entry in the page object's dictionary — MediaBox, CropBox, BleedBox, TrimBox or ArtBox — whose value is a rectangle: an array of four numbers giving the coordinates of a pair of diagonally opposite corners, conventionally the lower-left and upper-right points. The numbers are measured in default user space, whose unit is the point, equal to 1/72 of an inch. A US Letter MediaBox, for example, is written as [0 0 612 792], because 8.5 inches is 612 points and 11 inches is 792 points.",
        "The coordinates are expressed in the page's unrotated default user space, so a page's Rotate value does not change the box arrays; rotation is applied afterward for viewing. MediaBox and CropBox are inheritable attributes, meaning they can be specified once on a parent node of the page tree and apply to all descendant pages that do not override them. BleedBox, TrimBox and ArtBox are not inheritable and are set on the individual page when they are needed."
      ]
    },
    {
      "heading": "Defaults and how the boxes nest",
      "body": [
        "Because only the MediaBox is required, the specification defines fallbacks for the others. If a page has no CropBox, its effective CropBox is the MediaBox. If the BleedBox, TrimBox or ArtBox is absent, each one defaults to the CropBox. This chain of defaults is why a plain document that declares only a MediaBox behaves as though all five boxes coincide with the sheet.",
        "The boxes are expected to nest from largest to smallest: the CropBox should lie within the MediaBox, and the BleedBox, TrimBox and ArtBox should lie within the CropBox, with the trim and art areas normally sitting inside the bleed area. When a CropBox is set larger than the MediaBox, a conforming reader effectively intersects the two, so content never displays beyond the physical medium. Keeping the boxes properly nested is one of the things preflight tools check before a file goes to press."
      ]
    },
    {
      "heading": "Why page boxes matter in print production",
      "body": [
        "In commercial printing, artwork that reaches the edge of a page is deliberately extended past the final cut so that slight trimming inaccuracies do not leave a white sliver. The BleedBox and TrimBox encode exactly this: the TrimBox is where the blade is meant to fall, and the BleedBox surrounds it with the extra bleed margin. Imposition and trimming equipment read these boxes to position pages and place crop marks, rather than guessing from the visible content.",
        "The PDF/X family of print-exchange standards builds directly on these boxes. A PDF/X file is generally required to declare a TrimBox or an ArtBox on every page so that a printer knows the finished size unambiguously, with the BleedBox used to describe any bleed allowance. If you are assembling a file for a professional printer, the accuracy of these boxes — not just the appearance of the page on screen — is what determines where the paper is cut."
      ]
    },
    {
      "heading": "Page boxes versus what you see on screen",
      "body": [
        "On screen the CropBox is the box that matters: viewers show the CropBox region and clip everything outside it. This makes cropping a PDF page a non-destructive operation. Narrowing the CropBox hides content and shrinks the apparent page, but the underlying objects and the original MediaBox remain in the file, so the crop can be widened again later to reveal what was tucked outside the visible edge.",
        "This separation between the visible box and the physical box is easy to overlook and occasionally surprising. A page can look neatly trimmed in a reader yet still carry off-page notes, registration marks or earlier artwork between its CropBox and MediaBox. If a document needs to be genuinely stripped of hidden material rather than merely cropped, that content has to be removed from the page, not just excluded by a smaller box."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Required box",
      "value": "MediaBox is the only mandatory page box; the other four default to it or to the CropBox when absent."
    },
    {
      "label": "How they are stored",
      "value": "Each box is a rectangle of four numbers in default user space, where one point equals 1/72 inch."
    },
    {
      "label": "Inheritance",
      "value": "MediaBox and CropBox can be inherited through the page tree; BleedBox, TrimBox and ArtBox are set per page."
    },
    {
      "label": "Production boxes",
      "value": "BleedBox, TrimBox and ArtBox were introduced in PDF 1.3 to support print production."
    }
  ],
  "specification": {
    "iso": "ISO 32000-1 / ISO 32000-2",
    "introduced": "MediaBox and CropBox date from early PDF; BleedBox, TrimBox and ArtBox were added in PDF 1.3.",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Declared in the page object dictionary; used by viewers for display cropping and by print and prepress tools for bleed, trim and finished-size handling.",
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4",
      "pdf-x-1a",
      "pdf-output-intent"
    ]
  },
  "misconceptions": [
    {
      "claim": "Cropping a PDF page permanently deletes the content outside the new edge.",
      "truth": "Narrowing the CropBox only clips what is displayed and printed; the underlying objects and the original MediaBox stay in the file, so the crop is reversible and does not remove hidden material."
    },
    {
      "claim": "The CropBox and the TrimBox are the same thing.",
      "truth": "The CropBox controls the visible, displayed region in viewers, while the TrimBox describes the finished page size after cutting in production; they serve different stages and can hold different values."
    },
    {
      "claim": "Every PDF page contains all five boxes.",
      "truth": "Only the MediaBox is required. When the others are absent they default to the CropBox or MediaBox, and many ordinary documents define only a MediaBox and perhaps a CropBox."
    }
  ],
  "faq": [
    {
      "q": "What units are page box coordinates measured in?",
      "a": "They are given in default user space, whose unit is the point, equal to 1/72 of an inch. Each box is an array of four numbers marking two diagonally opposite corners of a rectangle."
    },
    {
      "q": "Which box does a PDF viewer use to display a page?",
      "a": "The CropBox. A viewer clips the page to the CropBox and shows that region. If no CropBox is present, the CropBox defaults to the MediaBox, so the whole sheet is shown."
    },
    {
      "q": "Are page boxes inherited through the page tree?",
      "a": "MediaBox and CropBox are inheritable, so they can be set once on an ancestor node and apply to descendant pages. BleedBox, TrimBox and ArtBox are not inheritable and are specified on the individual page."
    },
    {
      "q": "What is the difference between the BleedBox and the TrimBox?",
      "a": "The TrimBox marks where the finished page is meant to be cut, while the BleedBox is a larger rectangle around it that includes the bleed allowance where ink runs past the trim edge."
    },
    {
      "q": "Does rotating a page change its page boxes?",
      "a": "No. A page's Rotate value is applied separately for viewing and printing; the box coordinate arrays stay expressed in the page's unrotated default user space."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "childConcepts": [
      "mediabox",
      "cropbox",
      "bleedbox",
      "trimbox",
      "artbox"
    ],
    "relatedConcepts": [
      "pdf-page-size",
      "pdf-page-rotation",
      "user-space-and-device-space",
      "pdf-units-and-measurements",
      "pdf-preflight",
      "press-ready-pdf"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4",
      "pdf-x-1a",
      "pdf-output-intent"
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
    "pdf-page-geometry",
    "mediabox",
    "cropbox",
    "bleedbox",
    "trimbox",
    "artbox",
    "pdf-coordinate-system",
    "bleed-and-crop-marks"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
