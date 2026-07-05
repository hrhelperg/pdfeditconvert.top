import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "cropbox",
  "h1": "CropBox in PDF",
  "cluster": "print-geometry",
  "aliases": [
    "Crop box",
    "/CropBox",
    "PDF crop box",
    "CropBox entry"
  ],
  "definition": "The CropBox is a PDF page's optional rectangle that defines the visible region to which the page's contents are clipped when the page is displayed or printed.",
  "description": "The CropBox is the rectangle a PDF viewer treats as the visible page, clipping anything outside it without deleting it. Here is how it actually works.",
  "searchIntent": "printing",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF page carries a set of rectangles, called page boxes, that describe its geometry. The CropBox is the one that most directly controls what a reader actually sees. It marks the region to which the page's content is clipped on screen and on paper, so it usually behaves as the page's effective, visible boundary even though the page's full medium may be larger.",
    "Mechanically the CropBox is just an entry named /CropBox in the page dictionary, holding an array of four numbers that mark the corners of a rectangle in the page's coordinate system. It changes nothing about the underlying drawing instructions; it only decides how much of them is shown. Content that falls outside the CropBox stays in the file untouched and simply is not rendered within the crop.",
    "Because it sits between the full page medium (the MediaBox) and the finer print-production boxes (BleedBox, TrimBox, ArtBox), the CropBox is a frequent source of confusion. Understanding what it does, and what it deliberately does not do, explains behaviors like a PDF appearing a different size than the paper it was built for, or 'cropped' content reappearing later."
  ],
  "sections": [
    {
      "heading": "What the CropBox Defines",
      "body": [
        "The CropBox is stored in the page object as the /CropBox key, whose value is an array of four numbers written as [llx lly urx ury]: the coordinates of the lower-left and upper-right corners of a rectangle. Those coordinates are given in default user space units, where one unit equals 1/72 inch (a point), measured from the page's origin at the bottom-left corner. Reversing the usual expectation, larger y values are higher up the page.",
        "Functionally, the CropBox imposes a clip: the PDF processor restricts the rendered page content to this rectangle, and anything drawn outside it is not painted. The specification is explicit that, unlike the print-production boxes, the CropBox has no inherent meaning about physical media or intended use. It is purely a clipping and positioning boundary, and in the absence of other information it also determines how the page is positioned on the output medium."
      ]
    },
    {
      "heading": "CropBox and the Other Page Boxes",
      "body": [
        "A page can define up to five boxes: MediaBox, CropBox, BleedBox, TrimBox, and ArtBox. The MediaBox is the only mandatory one and describes the full physical medium. The CropBox is optional, and when it is absent its value defaults to the MediaBox, meaning the whole medium is visible. In turn, the BleedBox, TrimBox, and ArtBox each default to the CropBox when they are not specified, and in normal use they are expected to lie within it.",
        "Like the MediaBox, the CropBox is an inheritable attribute: it can be set on an intermediate node of the page tree and inherited by the pages beneath it, rather than repeated on every page. This nesting and inheritance is why the CropBox is often described as a 'view' into the MediaBox, sitting one level in from the full medium and framing the smaller production boxes."
      ]
    },
    {
      "heading": "How Viewers and Printers Use the CropBox",
      "body": [
        "Most PDF viewers treat the CropBox as the page. The dimensions a reader sees reported as the page size, the area that fills the window, and the region sent to a printer are typically driven by the CropBox rather than the MediaBox. If a document's CropBox is smaller than its MediaBox, the page will look smaller than the underlying sheet, and margins or registration marks that live outside the crop will not appear.",
        "The specification indicates that a processor effectively uses the intersection of the CropBox with the MediaBox, so a CropBox specified larger than the medium does not reveal more than the MediaBox contains. This is also why 'fixing' a page that displays at the wrong size is often a matter of adjusting the CropBox back toward the MediaBox rather than editing any page content."
      ]
    },
    {
      "heading": "Cropping a PDF Is Non-Destructive",
      "body": [
        "Changing the CropBox does not delete anything. The page's content streams are unchanged; the processor simply stops painting outside the new rectangle. That makes cropping fast and reversible, but it also means hidden content still lives in the file and can be exposed again by enlarging or resetting the box. Cropping is therefore not a substitute for removing sensitive material, which requires genuine redaction that alters the underlying data.",
        "If your goal is to change how a page looks or trims rather than to permanently erase data, an editor that adjusts page boundaries is the right tool. Where the aim is to truly remove content, treat cropping and redaction as separate operations with different guarantees."
      ]
    },
    {
      "heading": "The CropBox in Print Production",
      "body": [
        "In print workflows the CropBox is the framing box, but it is not the box that describes finished-piece geometry. The TrimBox marks where the paper is cut, the BleedBox marks how far artwork extends past the trim, and the ArtBox marks meaningful content extent. Preflight tools and print standards inspect those boxes, not the CropBox, to decide trim, bleed, and imposition.",
        "Because the CropBox merely clips, relying on it alone to convey trim size can cause errors: a press expects a distinct TrimBox, and if only a CropBox is set, downstream tools fall back to defaults. A press-ready file generally defines the production boxes explicitly and keeps them nested within a CropBox that is itself within the MediaBox."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Dictionary key",
      "value": "/CropBox — an array [llx lly urx ury] in user-space units (points, 1/72 inch)"
    },
    {
      "label": "Default value",
      "value": "Equal to the page's MediaBox when /CropBox is not present"
    },
    {
      "label": "Inheritable",
      "value": "Can be set on a page-tree node and inherited by descendant pages"
    },
    {
      "label": "Non-destructive",
      "value": "Clips the visible region only; content outside remains in the file"
    }
  ],
  "specification": {
    "typicalUsage": "Defines the visible clipping region of a PDF page; consumed by viewers to size and frame the page and by print workflows as the framing box around the production boxes.",
    "relatedStandards": [
      "iso-32000",
      "pdf-x"
    ]
  },
  "misconceptions": [
    {
      "claim": "Cropping a PDF (changing the CropBox) removes the hidden content from the file.",
      "truth": "It only clips the view. The content outside the CropBox stays in the file and can reappear if the box is enlarged or reset; permanent removal requires redaction."
    },
    {
      "claim": "The CropBox sets the physical paper or page size.",
      "truth": "The MediaBox defines the full medium. The CropBox only limits the visible region, and the TrimBox and BleedBox carry the print-production geometry."
    },
    {
      "claim": "Every PDF page must contain a CropBox.",
      "truth": "The CropBox is optional. Only the MediaBox is required; when the CropBox is absent it defaults to the MediaBox."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between the CropBox and the MediaBox?",
      "a": "The MediaBox is the mandatory rectangle describing the full page medium. The CropBox is an optional, usually smaller rectangle that clips which part of that medium is displayed or printed. When no CropBox is given, it defaults to the MediaBox."
    },
    {
      "q": "Does the CropBox affect what gets printed?",
      "a": "Yes. Many viewers and printers use the CropBox as the effective page, so content outside it is clipped from both the screen view and print output, even though that content is still stored in the file."
    },
    {
      "q": "Can the CropBox be larger than the MediaBox?",
      "a": "You can specify a larger rectangle, but a processor effectively uses the intersection of the CropBox and MediaBox, so nothing beyond the MediaBox becomes visible."
    },
    {
      "q": "How do the BleedBox, TrimBox, and ArtBox relate to the CropBox?",
      "a": "Each of those three boxes defaults to the CropBox when not specified and is normally expected to lie within it. They add print-production meaning (bleed, trim, and art extent) that the CropBox itself does not carry."
    },
    {
      "q": "Why does my PDF display at a different size than the paper it was designed for?",
      "a": "A CropBox smaller than the MediaBox is likely being shown. The viewer reports the crop as the page size; resetting the CropBox toward the MediaBox restores the full sheet."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-boxes",
    "relatedConcepts": [
      "user-space-and-device-space",
      "pdf-page-size",
      "clipping-paths",
      "pdf-preflight",
      "pdf-units-and-measurements"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4"
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
    "mediabox",
    "bleedbox",
    "trimbox",
    "artbox",
    "pdf-page-geometry",
    "pdf-coordinate-system",
    "bleed-and-crop-marks"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
