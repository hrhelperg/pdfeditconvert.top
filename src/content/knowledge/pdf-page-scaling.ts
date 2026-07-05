import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-page-scaling",
  "h1": "PDF Page Scaling When Printing",
  "cluster": "print-geometry",
  "aliases": [
    "Fit to page",
    "Shrink to fit",
    "Print scaling",
    "Scale to fit",
    "Fit to printable area",
    "Actual size printing"
  ],
  "definition": "PDF page scaling when printing is how a viewer or print driver resizes a page's fixed geometry to fit the chosen paper, using options such as Actual Size, Fit, or a custom percentage.",
  "description": "How PDF viewers scale a page to fit paper at print time — Actual Size, Fit, Shrink to Fit and custom percentages, and why the file's own page size never changes.",
  "searchIntent": "printing",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF page has a fixed size that is defined inside the file, expressed in the document's own coordinate units rather than in inches or millimetres. Page scaling when printing is the step that decides how that fixed page is mapped onto a physical sheet of paper. When the page and the paper are the same size, the mapping can be one-to-one; when they differ, the viewer or print driver applies a scale factor to make the page fit.",
    "The important thing to understand is that this scaling happens at the very end of the process, inside the print dialog and the print pipeline. It does not rewrite the page inside the PDF. The page boxes that describe the page's dimensions stay exactly as the author saved them; the scaling only affects the copy that is sent to the printer for this particular print job.",
    "Scaling matters because paper sizes, printer margins, and page dimensions rarely line up perfectly. An A4 page sent to a US Letter printer, a large drawing sent to a desktop printer, or a form that must be reproduced at exact size all depend on choosing the right scaling option — and on knowing what each option actually does to the result on paper."
  ],
  "sections": [
    {
      "heading": "How Print Scaling Works",
      "body": [
        "A PDF page is described in user-space units, where the default unit is 1/72 of an inch — one point. The page's visible dimensions come from its page boxes (most directly the MediaBox and, when present, the CropBox). When you print, the viewer compares that page size against the target paper size and the printer's usable area, then chooses a single scale factor to map the page onto the sheet.",
        "Scaling is normally uniform: the same factor is applied horizontally and vertically so the page keeps its proportions and nothing is stretched. A factor of 100% (Actual Size) maps one point directly to 1/72 of an inch on paper, reproducing the document at its true dimensions. A factor below 100% shrinks the page; above 100% enlarges it. The print driver then rasterises the scaled page to the printer's resolution, which is why vector text and lines stay crisp even when the scale changes."
      ]
    },
    {
      "heading": "Common Scaling Options",
      "body": [
        "Most viewers expose a small set of choices. Actual Size (also called 100% or None) prints without resizing. Fit scales the page up or down so it fills the printable area. Shrink oversized pages only reduces pages that are too big and leaves smaller pages untouched — a common default that quietly prevents clipping. Custom Scale lets you type an exact percentage, which is useful when you need a known reduction or enlargement.",
        "Two related options change placement rather than just size. Fit to printable area scales the page to sit inside the printer's non-printable margins, and Auto-rotate and Center repositions the page and turns it to match the paper's orientation. For pages larger than the sheet, Tile or Poster printing splits a single page across several sheets at a chosen scale so the pieces can be assembled afterward."
      ]
    },
    {
      "heading": "Scaling Lives in the Print Pipeline, Not the File",
      "body": [
        "Because scaling is applied when the page is handed to the printer, two people printing the same PDF on different printers can get different results without either file being edited. The page geometry inside the PDF is unchanged; only the transient print job differs. This is why re-saving or re-sending the same file does not 'fix' a scaling problem — the fix is choosing a different option in the print dialog.",
        "The PDF format does allow an author to record a preference. A document's ViewerPreferences can include a PrintScaling entry, whose value can request no automatic scaling (None) or leave the reader's default behaviour in place (AppDefault). This entry was added in PDF 1.6. It is only a hint: it nudges a conforming viewer toward printing at actual size, but the person at the print dialog can still override it, so it is best treated as guidance rather than a guarantee."
      ]
    },
    {
      "heading": "Why Scaling Changes What You See on Paper",
      "body": [
        "Printers cannot put ink right to the edge of a sheet, so they reserve a non-printable margin. When a page is exactly the same size as the paper, Actual Size printing pushes the outer edge of the page into that margin, and anything there is clipped. Fit to printable area avoids the clipping by shrinking the page slightly, which is why a full-page PDF often prints a touch smaller than expected, surrounded by a thin white border.",
        "Scale choice also affects measurement. Documents where physical size carries meaning — scale drawings, architectural plans, forms with fixed field positions, or anything printed to align with a physical template — only reproduce correctly at Actual Size. Fit and Shrink options keep proportions but change the real dimensions, so a ruler or a to-scale drawing printed with them will not measure true. When exact size matters, Actual Size (100%) is the option that preserves it."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Default unit",
      "value": "1 PDF point equals 1/72 inch; Actual Size maps one point to 1/72 inch on paper"
    },
    {
      "label": "Applied at print time",
      "value": "Scaling is chosen in the print dialog and driver, not written into the page content"
    },
    {
      "label": "Format hint",
      "value": "A PDF's ViewerPreferences can request PrintScaling of None (no auto-scaling), added in PDF 1.6"
    },
    {
      "label": "Printable area",
      "value": "Printers reserve non-printable margins; Fit to printable area shrinks the page to stay inside them"
    }
  ],
  "misconceptions": [
    {
      "claim": "Scaling a PDF for printing changes the page size saved in the file.",
      "truth": "It does not. The page geometry defined by the MediaBox and CropBox stays fixed; the viewer only resizes the copy it sends to the printer for that job."
    },
    {
      "claim": "Printing at 100% always makes the whole page fit the paper.",
      "truth": "Actual Size maps one point to 1/72 inch regardless of paper. If the page is larger than the printable area, the edges are clipped rather than shrunk to fit."
    },
    {
      "claim": "Fit-to-page distorts a document by stretching it.",
      "truth": "Fit and Shrink scale uniformly and keep the aspect ratio. They change the overall size, not the proportions, so nothing is stretched out of shape."
    }
  ],
  "faq": [
    {
      "q": "Why does my PDF print smaller than the page, with a white border?",
      "a": "Printers reserve a non-printable margin at the edges. Many viewers default to fitting the page inside that usable area, so a full-size page is scaled down slightly and framed by a thin blank border."
    },
    {
      "q": "What is the difference between Actual Size and Fit?",
      "a": "Actual Size prints at 100%, mapping one PDF point to 1/72 inch so the document keeps its true dimensions. Fit scales the page up or down to fill the printable area, so the size on paper depends on the paper rather than the document."
    },
    {
      "q": "Can I force a PDF to print without any automatic scaling?",
      "a": "Choose Actual Size or 100% in the print dialog. An author can also set the ViewerPreferences PrintScaling hint to None to request this, but it is only a hint and the print dialog can still override it."
    },
    {
      "q": "Does scaling affect measurements or form layout in the PDF?",
      "a": "Only Actual Size reproduces true physical dimensions. Fit and Shrink change the real size, so scale drawings, rulers, and forms meant to line up with a physical template will not measure or align correctly."
    },
    {
      "q": "What is tile or poster printing?",
      "a": "It is a scaling mode for pages larger than the sheet. The viewer splits one oversized page across several sheets at a chosen scale, so the printed pieces can be trimmed and assembled into the full page."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "relatedConcepts": [
      "pdf-page-orientation",
      "pdf-page-rotation",
      "pdf-imposition",
      "press-ready-pdf",
      "bleed-and-crop-marks"
    ],
    "relatedStandards": [
      "iso-32000"
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
        "label": "How to Fix Sideways or Upside-Down PDF Pages",
        "path": "/guides/how-to-fix-sideways-pdf-pages"
      }
    ]
  },
  "seeAlso": [
    "pdf-page-geometry",
    "pdf-page-boxes",
    "mediabox",
    "cropbox",
    "pdf-page-size",
    "pdf-units-and-measurements",
    "user-space-and-device-space",
    "pdf-printing-pipeline"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
