import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "blend-modes",
  "h1": "Blend Modes in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "blending modes",
    "PDF blend modes",
    "BM entry",
    "transparency blend modes",
    "compositing modes"
  ],
  "definition": "In PDF, a blend mode is a formula that decides how the colors of an object being painted combine with the colors already on the page beneath it.",
  "description": "Blend modes tell PDF how a shape's colors combine with the backdrop beneath — Multiply, Screen, Overlay and more, set through the graphics state.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A blend mode controls the color math that happens where a new object overlaps whatever is already on the page. Without any blending, a painted object simply covers what is below it. With a blend mode set, the viewer instead computes each resulting color from two inputs: the backdrop color already present and the source color being applied. The same shape can therefore darken, lighten, tint, or invert the artwork underneath depending on which mode is active.",
    "Blend modes are part of the PDF transparency imaging model, which was introduced in PDF 1.4 and later carried into ISO 32000. They sit alongside the other transparency controls — constant alpha (opacity), soft masks, and transparency groups — and are independent of them. Opacity governs how much of an object shows through; the blend mode governs how its colors mix. The two are combined during compositing rather than being alternatives to each other.",
    "Because blending is a compositing operation rather than a stored pixel effect, the result depends on the order objects are painted, the color space they are blended in, and the group they belong to. Understanding blend modes therefore means understanding not just the list of named modes but where in the graphics state they are set and how the surrounding transparency model feeds them."
  ],
  "sections": [
    {
      "heading": "Where Blend Modes Fit in the Transparency Model",
      "body": [
        "Blend modes are one component of PDF's transparency model. When an object is composited onto the backdrop, the viewer combines three things: the blend mode's color formula, the object's alpha (opacity, which can come from a constant value or a soft mask), and the color values themselves. The blend function determines the mixed color, and the alpha values determine how strongly that mixed color replaces the backdrop. A fully opaque object with a Multiply blend mode still darkens the backdrop everywhere it is painted; the same object at reduced opacity blends more gently.",
        "This separation is why a blend mode alone does not make an object see-through, and reducing opacity alone does not change the color relationship. The mode and the alpha are applied together during compositing. Blend modes also interact with transparency groups: objects grouped together can be blended among themselves in isolation and then blended as a unit onto the page, which changes the outcome compared to blending each object directly against the page."
      ]
    },
    {
      "heading": "Separable Blend Modes",
      "body": [
        "Most of the named modes are separable, meaning the formula is applied to each color component independently — the red channel is blended with the red channel, and so on. This group includes Normal, Multiply, Screen, Overlay, Darken, Lighten, ColorDodge, ColorBurn, HardLight, SoftLight, Difference, and Exclusion. Normal simply paints the source color over the backdrop with no interaction, and Compatible is a legacy name treated as equivalent to Normal.",
        "Each separable mode has a defined arithmetic relationship between the backdrop value and the source value. Multiply multiplies the two values, which always produces a result at least as dark as either input, so it is often used for shadows and tints. Screen does the inverse and always lightens. Overlay chooses between multiplying and screening based on the backdrop color, so it darkens dark areas and lightens light ones; HardLight makes that same choice based on the source color instead (it is effectively Overlay with the source and backdrop roles swapped), while SoftLight darkens or lightens according to the source color for a gentler effect. Difference and Exclusion subtract values to create inverted or muted effects. Because these operate per channel, applying them in an RGB blending space can give different numeric results than applying them in a CMYK space."
      ]
    },
    {
      "heading": "Non-Separable Blend Modes",
      "body": [
        "Four modes — Hue, Saturation, Color, and Luminosity — are non-separable, because they cannot be computed one channel at a time. They are defined using functions that look at the whole color at once, such as its overall luminosity and its saturation. For example, the Color mode takes the hue and saturation of the source color but the luminosity of the backdrop, which is why it is useful for tinting a grayscale image while preserving its tonal detail. Luminosity does the reverse.",
        "Because these modes reason about a color as a single unit rather than three separate numbers, they are conceptually defined in terms of an RGB-style color and require the blending to happen in an appropriate color space. This makes them behave less predictably when the underlying artwork is defined in CMYK or spot colors, and it is one reason print workflows treat non-separable modes with caution."
      ]
    },
    {
      "heading": "How a Blend Mode Is Specified",
      "body": [
        "A blend mode is not attached directly to an object. It is set in the graphics state through the BM entry of a graphics state parameter dictionary (an ExtGState). A content stream references that dictionary with the gs operator, after which every object painted continues to use that blend mode until the state is changed or restored. The BM value is a name such as /Multiply or /Screen, and it may also be given as an array of names so a viewer can fall back to a supported mode; if none is recognized, the viewer uses Normal.",
        "This graphics-state placement means blend modes are a live, editable property of how content is drawn, not a baked-in image. Editing tools can add, change, or remove them, and flattening the transparency — for example when preparing certain print files — replaces the live blending with rendered artwork that reproduces the same visual result without carrying the blend instructions forward."
      ]
    },
    {
      "heading": "Color Space, Print, and Compatibility",
      "body": [
        "The outcome of a blend depends on the color space in which blending occurs, which is determined by the enclosing transparency group's blending space. The same two colors blended in RGB versus CMYK can produce visibly different results, so predictable output requires attention to the group and document color setup rather than the mode name alone. This is closely tied to broader color management in PDF.",
        "Blend modes rely on the transparency model introduced in PDF 1.4, so very old viewers or renderers that predate it cannot honor them. Some print-oriented standards also restrict live transparency: PDF/X-1a, for instance, does not allow live blending, so files targeting it must have transparency flattened. When in doubt, flattening produces a stable appearance across renderers at the cost of no longer being able to edit the blend as a live property."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "PDF 1.4, as part of the transparency model"
    },
    {
      "label": "Stored as",
      "value": "The BM entry in a graphics state (ExtGState) dictionary"
    },
    {
      "label": "Two categories",
      "value": "12 separable modes plus 4 non-separable modes (Hue, Saturation, Color, Luminosity)"
    },
    {
      "label": "Default",
      "value": "Normal (paint over backdrop with no color interaction)"
    }
  ],
  "specification": {
    "introduced": "PDF 1.4 (transparency model)",
    "iso": "ISO 32000 (PDF 1.7 and PDF 2.0)",
    "typicalUsage": "Compositing overlapping artwork — shadows, tints, highlights, and graphic effects",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-4",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A blend mode is just another way of setting opacity.",
      "truth": "Opacity (alpha) controls how much of an object shows through the backdrop, while the blend mode controls the color formula used where they overlap. They are independent parts of the transparency model and are combined during compositing."
    },
    {
      "claim": "The Multiply blend mode is the same thing as overprint.",
      "truth": "They can look similar but are separate mechanisms. Multiply is a compositing operation in the transparency model applied at render time, whereas overprint is a colorant-level control used mainly in print production. They are specified differently and behave differently across color spaces."
    },
    {
      "claim": "Blend modes work identically in every PDF and every viewer.",
      "truth": "Blend modes depend on the PDF 1.4 transparency model, so pre-transparency renderers cannot honor them, and standards such as PDF/X-1a disallow live blending and require flattening."
    }
  ],
  "faq": [
    {
      "q": "Which blend modes does PDF define?",
      "a": "The separable modes are Normal, Multiply, Screen, Overlay, Darken, Lighten, ColorDodge, ColorBurn, HardLight, SoftLight, Difference, and Exclusion. The non-separable modes are Hue, Saturation, Color, and Luminosity. Compatible is treated as an alias for Normal."
    },
    {
      "q": "How is a blend mode stored inside a PDF file?",
      "a": "It is stored as the BM entry of a graphics state parameter dictionary (ExtGState). A content stream activates it with the gs operator, and it applies to subsequent painting until the graphics state changes."
    },
    {
      "q": "What is the difference between separable and non-separable blend modes?",
      "a": "Separable modes apply their formula to each color component independently, so they can be computed one channel at a time. Non-separable modes (Hue, Saturation, Color, Luminosity) reason about the whole color at once using functions like luminosity and saturation, so they cannot be applied channel by channel."
    },
    {
      "q": "Why does the same blend mode look different in two files?",
      "a": "Blending happens in a specific color space determined by the transparency group, and painting order matters. The same two colors blended in an RGB space versus a CMYK space can produce different results, so the surrounding color setup affects the outcome."
    },
    {
      "q": "What happens to blend modes when a PDF is flattened?",
      "a": "Flattening replaces the live blend instructions with rendered artwork that reproduces the same appearance. The visual result is preserved, but the blend mode is no longer present as an editable property, which is why some print standards require flattening."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "pdf-transparency",
      "transparency-groups",
      "soft-masks",
      "pdf-graphics-state",
      "devicergb",
      "devicecmyk",
      "icc-based-color",
      "overprint"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-4",
      "pdf-2-0",
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
    "pdf-transparency",
    "transparency-groups",
    "soft-masks",
    "pdf-graphics-state",
    "pdf-color",
    "overprint",
    "color-management-in-pdf",
    "form-xobjects"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
