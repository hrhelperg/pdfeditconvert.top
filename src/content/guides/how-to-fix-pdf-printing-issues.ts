import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
  description:
    "When a PDF prints cropped, scaled wrong, or with missing text, the fix depends on the symptom. A short matrix matching each print problem to the right setting or pre-print fix.",
  updated: "2026-05-29",
  intro: [
    "PDFs were created so a document would look the same everywhere — including on paper. So when one prints badly, it's almost always the print job, not the file. The page is bigger than the paper, the printer is scaling down, a font isn't embedded, a security flag is blocking the print, or the document was sized for a region you're not in.",
    "Each of those produces a different symptom: cropped edges, tiny text, blank pages, error dialogs, or weird substitution fonts. Treating them all as 'the printer is broken' wastes a lot of paper. Treating them as specific problems with specific fixes saves time.",
    "This guide is a short matrix: what you see versus the most likely cause and the right fix. Most of the fixes are settings in the print dialog or a quick pre-print step.",
  ],
  steps: [
    {
      title: "If edges are getting cropped, set 'Fit to printable area'",
      body: "Many PDFs are sized to the paper's full bleed; printers can't print to the edge. In the print dialog choose 'Fit' or 'Shrink to printable area' rather than 'Actual size'. The page will scale down very slightly and stop losing edges.",
    },
    {
      title: "If text is tiny, check the paper size mismatch",
      body: "A document built for A3 printing onto Letter will shrink to fit. Re-export the source at the target paper size, or split the spread into two pages with Extract PDF Pages before reprinting.",
    },
    {
      title: "For pages that print as blanks or missing text, embed fonts",
      body: "Documents using fonts your printer doesn't have can render missing characters. Re-export with 'embed all fonts' enabled in the source application, or use print-to-PDF first to flatten everything into rasterized pixels.",
    },
    {
      title: "For 'document is secured' errors, check edit permissions",
      body: "Some PDFs are exported with print-blocking flags. Only the author can remove them. If it's your file, re-export without the print restriction. If not, request a print-allowed copy.",
    },
    {
      title: "Rotate pages before printing if orientation is wrong",
      body: "If pages are sideways or upside down, fix them before sending to the printer with Rotate PDF. Printer-side rotation often introduces its own scaling issues — fixing in the file is cleaner.",
    },
    {
      title: "Print a test page from a single-page extract",
      body: "Don't waste a 50-page document discovering a print problem. Extract PDF Pages can save one page as a standalone PDF; print that, confirm settings, then run the full job.",
    },
  ],
  tips: [
    "Always check the paper size selected in the print dialog matches the PDF page size — Letter vs A4 mismatches cause most of the 'too small' symptoms.",
    "Print-to-PDF first if the file is misbehaving. The flattened copy often prints cleanly when the original doesn't.",
    "Booklet and saddle-stitch settings cause more print problems than they solve — print straight pages first, then re-arrange physically if needed.",
    "Color profiles from design software can produce dark or muddy prints on home printers. Re-exporting in sRGB usually fixes it.",
    "If a printer driver is old, a re-export through Print-to-PDF can hide features the driver can't handle.",
  ],
  mobileNote:
    "Printing from a phone usually goes through AirPrint, Google Print or a vendor app, and each handles PDF a little differently. The PDF Editor app lets you size, rotate and trim pages before sending — fixing the PDF rather than fighting the print dialog tends to work better on mobile.",
  faq: [
    {
      q: "Why does my PDF print smaller than the screen?",
      a: "Almost always because the document size doesn't match the paper size. The printer scales down to fit. Re-export at the target paper size or use 'Actual size' with matching paper.",
    },
    {
      q: "Why are some characters missing on print?",
      a: "The fonts weren't embedded and your printer doesn't have them. Re-export with embedded fonts, or print-to-PDF first to flatten everything.",
    },
    {
      q: "Why does the print dialog say my PDF is secured?",
      a: "It has a permission flag that blocks printing. Only the author can lift it. There's no recipient-side bypass that's safe.",
    },
    {
      q: "Should I rotate pages in the printer or in the file?",
      a: "In the file. Printer rotation can introduce scaling, while Rotate PDF bakes the orientation into the document itself.",
    },
    {
      q: "How do I avoid wasting paper diagnosing print problems?",
      a: "Extract a single page first, print that, confirm the settings, then run the full job. Extract PDF Pages does this in your browser.",
    },
  ],
  related: [
    { label: "Rotate PDF — fix orientation before printing", path: "/rotate-pdf" },
    { label: "Extract PDF Pages — test-print one page first", path: "/extract-pdf-pages" },
    { label: "How to fix PDF formatting problems", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "How to fix PDF font issues", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
