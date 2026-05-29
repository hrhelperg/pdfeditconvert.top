import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
  description:
    "When a PDF shows the wrong font, boxes instead of characters, or substituted text, it's usually missing an embedded font. How embedding works and what to change at export time.",
  updated: "2026-05-29",
  intro: [
    "When a PDF shows squares instead of characters, or the wrong font everywhere, or strange spacing that wasn't in the original, it's a font problem. PDFs reference fonts by name; the viewer needs to either find that font on the system or have the font embedded inside the file. If neither is true, you see a substitution — at best a close match, at worst boxes.",
    "The right fix is almost always to re-export with embedded fonts. Once a font is embedded, the file carries the glyph data with it and looks correct everywhere. The trade is a slightly larger file, but for most fonts the difference is negligible compared to the document.",
    "This guide explains how font embedding actually works, walks the most common symptoms, and shows the fixes — including when re-export isn't possible and you have to flatten the file to images.",
  ],
  steps: [
    {
      title: "Confirm the file is rendering substituted fonts",
      body: "Open the file in two different viewers. If both show the same wrong font, the fonts aren't embedded. If one viewer is right and the other isn't, the wrong viewer is missing the font and substituting.",
    },
    {
      title: "Re-export with all fonts embedded",
      body: "In Word, Pages, Docs and most design tools, the PDF export settings include 'embed all fonts'. Turning it on adds the font data to the file and makes it render consistently everywhere.",
    },
    {
      title: "Use print-to-PDF as a fallback",
      body: "If you can't toggle font embedding in the source app, open the document in any viewer that displays it correctly and print-to-PDF. The new copy bakes the rendered glyphs as raster — bigger and unsearchable, but reliable.",
    },
    {
      title: "Check for licensed fonts that can't embed",
      body: "Some commercial fonts have embedding restrictions. The source app will warn you. The realistic fix is to swap to a similar font that allows embedding, or to rasterize the affected text into images.",
    },
    {
      title: "Convert to Word, fix text, re-export",
      body: "If the substitution has already mangled the text and you only have the PDF, PDF to Word pulls out what's recoverable. Clean it up, set fonts you have, re-export to a fresh PDF.",
    },
    {
      title: "Flatten to images when nothing else works",
      body: "PDF to Images exports each page as PNG at high resolution. If you reassemble with Image to PDF, the result has no live text — just images — but the font rendering is locked in for every viewer.",
    },
  ],
  tips: [
    "Don't use fonts that aren't embeddable on important documents — the file will always be vulnerable to substitution.",
    "Web fonts and downloaded display fonts are the most common embedding offenders. System fonts (Arial, Times, Helvetica, Calibri) embed cleanly.",
    "Embedding 'subset' fonts (only the characters used) keeps the file small. Most export tools default to subsetting and it's the right choice.",
    "If only one character is wrong (like a fraction or a special symbol), the font lacks that glyph. Swap the source character for an Unicode equivalent.",
    "After flattening to images, expect to lose copy-paste and OCR. Use that path only when render fidelity matters more than searchability.",
  ],
  mobileNote:
    "Phone viewers often have fewer fonts installed than desktops, so files without embedded fonts look worst on mobile. The PDF Editor app shows substituted-font warnings and lets you re-export documents with fonts baked in, which keeps them visually consistent across iOS, Android and desktop viewers.",
  faq: [
    {
      q: "What does 'embed fonts' actually do?",
      a: "It bundles the font's glyph data inside the PDF itself, so any viewer can render the text correctly without needing the font installed locally.",
    },
    {
      q: "Why do I see boxes instead of letters?",
      a: "The font isn't installed on the system and wasn't embedded. The viewer can't substitute because it doesn't know which glyphs to draw, so it shows the missing-character box.",
    },
    {
      q: "Can I add a font to a PDF after export?",
      a: "Not cleanly. Re-exporting from the source is the right path. There are tools that claim to embed after the fact, but most produce buggy files.",
    },
    {
      q: "Why is my exported PDF bigger when I embed fonts?",
      a: "Because the font data is now in the file. The increase is usually small unless you embed many font families. Subsetting (only including the characters used) keeps the size down.",
    },
    {
      q: "Will compression remove embedded fonts?",
      a: "No. PDF compression targets images, not text or fonts. Compressing a font-embedded PDF doesn't break it.",
    },
  ],
  related: [
    { label: "PDF to Word — recover text from substituted fonts", path: "/pdf-to-word" },
    { label: "PDF to Images — flatten as last resort", path: "/pdf-to-images" },
    { label: "How to fix PDF formatting problems", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "How to fix PDF printing problems", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "PDF Converter — Word, JPG, PNG and back", path: "/pdf-converter" },
};

export default content;
