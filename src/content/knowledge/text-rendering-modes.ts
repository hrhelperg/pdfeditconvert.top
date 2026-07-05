import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "text-rendering-modes",
  "h1": "PDF Text Rendering Modes",
  "cluster": "text-fonts",
  "aliases": [
    "text rendering mode",
    "Tr operator",
    "text render mode",
    "Tmode (text rendering mode)",
    "glyph rendering mode"
  ],
  "definition": "A PDF text rendering mode is a text-state setting, chosen with the Tr operator, that controls whether glyphs are filled, stroked, added to the clipping path, or left invisible.",
  "description": "How PDF text rendering modes work: the eight Tr modes for filling, stroking, clipping, and invisible OCR text, and what each one does.",
  "searchIntent": "rendering",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a PDF draws text, it does not simply stamp letters onto the page. Each glyph is an outline, and the viewer has to decide what to do with that outline: paint its interior, trace its edge, use its shape as a stencil, or skip painting entirely. The text rendering mode is the switch that makes that decision. It is one of several parameters that live in the PDF text state, alongside things like font, size, and character spacing.",
    "A content stream selects a mode with the Tr operator, which takes a single integer operand between 0 and 7. That value stays in effect for all text shown afterward until another Tr operator changes it, so a single mode typically governs a run of text rather than an individual character. Because it is part of the graphics and text state rather than baked into the font, the same glyphs can be rendered differently depending on when and where they appear.",
    "Understanding rendering modes explains several things that look mysterious from the outside: why text in a scanned PDF can be selected even though the letters you see are part of an image, how designers make a photo show through the shape of a headline, and why a document can carry text that never appears on screen. All of these come down to which of the eight modes was chosen."
  ],
  "sections": [
    {
      "heading": "The eight rendering modes",
      "body": [
        "PDF defines eight text rendering modes, numbered 0 through 7, and the Tr operator selects one by number. Mode 0 fills each glyph, which is the ordinary way text appears and the default when no mode is set. Mode 1 strokes the glyph outlines instead of filling them, producing outlined letters. Mode 2 does both, filling and then stroking, which is how a text outline in a contrasting color is usually drawn. Mode 3 neither fills nor strokes, so the glyphs are not painted at all — this is the invisible mode.",
        "The remaining four modes add clipping behavior. Mode 4 fills the text and also adds the glyph outlines to the current clipping path; mode 5 strokes and clips; mode 6 fills, strokes, and clips; and mode 7 only adds the outlines to the clipping path without painting anything. In every case the number can be read as a combination of three independent choices: fill, stroke, and clip. The fill uses the current nonstroking color, while the stroke uses the current stroking color and line width from the graphics state, so the same mode can look different depending on those settings."
      ]
    },
    {
      "heading": "Where the mode lives in the text state",
      "body": [
        "The rendering mode is a text-state parameter, sometimes written as Tmode, and it is manipulated only through the Tr operator. Like other text-state values it persists: once set, it applies to every text-showing operation that follows until it is changed again or the graphics state is restored. That is why a producer that wants both visible and invisible text on the same page must issue Tr more than once, switching modes between the runs.",
        "Because the mode is separate from the font and the color, it does not by itself decide what color the text is. A glyph drawn in mode 0 takes its appearance from the current nonstroking color; a stroked glyph takes its edge from the stroking color and line settings. This separation is deliberate: it lets the same font and text be reused across fills, outlines, and clips without changing the character data at all."
      ]
    },
    {
      "heading": "Clipping modes and how they combine",
      "body": [
        "Modes 4 through 7 do not clip immediately as each glyph is drawn. Instead, the glyph outlines accumulate as the text object runs, and the resulting shape is intersected with the current clipping path only when the text object ends at the ET operator. From that point on, subsequent painting is confined to the area inside the letter shapes. This is the mechanism behind effects where an image, gradient, or pattern appears to fill the interior of large display text: the text is drawn in a clipping mode, and then the image is painted through the letter-shaped mask.",
        "Because these modes rely on true glyph outlines, they are most meaningful for fonts whose glyphs are described by outlines. Type 3 fonts, whose glyphs are defined by arbitrary graphics content rather than a single outline, do not interact with stroking and clipping in the same straightforward way, so those aspects of the modes have limited effect for them."
      ]
    },
    {
      "heading": "Invisible text and the searchable layer",
      "body": [
        "Mode 3 is the reason a scanned document can still be searched and copied. When a page is scanned it is really a raster image, so the visible letters are pixels, not text. An OCR step recognizes the words and places them back onto the page as real text glyphs positioned over the image — but drawn in mode 3 so they are never painted and never obscure the picture underneath. The text still advances the cursor and still carries character codes, so selection, search, and extraction all work against an image the eye perceives as a photograph of a page.",
        "It is worth being clear about what invisible text is not: it is not a security feature. Mode 3 only suppresses painting; the underlying characters remain fully present in the content stream and can be selected, copied, or pulled out by text-extraction tools. Anyone relying on invisibility to hide sensitive words is mistaken — genuinely removing content requires redaction, not a rendering mode."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Set by",
      "value": "The Tr operator in the PDF text state"
    },
    {
      "label": "Number of modes",
      "value": "Eight, numbered 0 through 7"
    },
    {
      "label": "Default",
      "value": "Mode 0 — fill glyphs"
    },
    {
      "label": "Invisible text",
      "value": "Mode 3 — neither filled nor stroked"
    }
  ],
  "specification": {
    "typicalUsage": "Choosing how glyphs are painted in a content stream — fill, stroke, clip, or invisible.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "Invisible text (mode 3) removes the words from the file or hides them securely.",
      "truth": "It only stops the glyphs from being painted. The characters stay in the content stream and can still be selected, copied, and extracted, which is why redaction, not invisibility, is needed to remove sensitive text."
    },
    {
      "claim": "The rendering mode sets the text color.",
      "truth": "Color comes from the graphics state — the nonstroking color for fills and the stroking color for strokes. The mode only decides whether a glyph is filled, stroked, clipped, or left unpainted."
    },
    {
      "claim": "Clipping modes clip each glyph as it is drawn.",
      "truth": "Glyph outlines accumulate through the text object and the clip is applied only at the end of the text object (ET), where it intersects the current clipping path."
    }
  ],
  "faq": [
    {
      "q": "Which operator sets the text rendering mode?",
      "a": "The Tr operator. It takes one integer operand from 0 to 7 and stays in effect for the text that follows until it is changed again."
    },
    {
      "q": "How many text rendering modes are there?",
      "a": "Eight, numbered 0 through 7. Each number is a combination of three independent choices: fill, stroke, and add-to-clip."
    },
    {
      "q": "Which mode makes text invisible?",
      "a": "Mode 3, which neither fills nor strokes the glyphs. The text still occupies space and advances the cursor, so it remains selectable and searchable."
    },
    {
      "q": "Can a glyph be both filled and stroked?",
      "a": "Yes. Mode 2 fills and then strokes each glyph, and mode 6 does the same while also adding the outlines to the clipping path."
    },
    {
      "q": "How is text made to appear filled with an image?",
      "a": "The text is drawn in a clipping mode (such as 4 or 7) so its outlines become a mask, and then an image or gradient is painted after the text object ends, showing through the letter shapes."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "pdf-operators",
      "searchable-pdf",
      "pdf-ocr",
      "image-only-pdf",
      "type-3-fonts"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "text-showing-operators",
    "pdf-graphics-state",
    "glyph",
    "clipping-paths",
    "pdf-text-extraction",
    "pdf-fonts",
    "pdf-content-streams",
    "text-layer-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
