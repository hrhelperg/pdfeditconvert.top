import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "soft-masks",
  "h1": "Soft Masks in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "SMask",
    "soft mask dictionary",
    "luminosity mask",
    "alpha mask",
    "ExtGState soft mask"
  ],
  "definition": "A soft mask in PDF is a graphics-state feature that supplies a smoothly varying opacity value across the page — taken from a transparency group's luminosity or alpha — to control compositing.",
  "description": "A soft mask in PDF sets spatially varying opacity from a transparency group's luminosity or alpha — the basis for feathered edges and gradients.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF's original imaging model was opaque: every mark either fully covered what lay beneath it or was clipped away at a hard boundary. The transparency model added in PDF 1.4 changed that, letting objects blend with their backdrop through blend modes, constant alpha, and soft masks. A soft mask is the piece that makes opacity vary smoothly from point to point across the page rather than being a single value for a whole object.",
    "Instead of describing opacity with one number, a soft mask supplies a continuous field of mask values — think of a grayscale stencil where white means fully visible, black means fully hidden, and the shades in between produce partial transparency. That field is not painted directly; it is computed from a separate transparency group and then applied to everything drawn while the mask is active. This is what allows effects like feathered edges, vignettes, gradient fades, and the soft penumbra of a drop shadow.",
    "PDF defines two flavors of soft mask that differ only in where the mask values come from: a luminosity mask reads the brightness of the group's rendered color, while an alpha mask reads the group's own coverage. Both live in the graphics state, so a soft mask behaves like other state settings — it stays in effect until it is reset or the state is restored."
  ],
  "sections": [
    {
      "heading": "How a Soft Mask Is Defined",
      "body": [
        "A soft mask is not a content-stream operator of its own. It is set through the SMask entry of an extended graphics state (ExtGState) dictionary, which is activated in a content stream with the gs operator. The value of SMask is either the name None — meaning no masking, the opaque default — or a soft-mask dictionary that describes how to build the mask.",
        "The soft-mask dictionary points, through its G entry, to a transparency group: a form XObject that carries a Group subdictionary of subtype Transparency. That group is rendered on its own and its result becomes the source of the mask values. Two optional entries fine-tune the process: BC gives a backdrop color to composite the group against before the mask is measured, and TR is a transfer function that remaps the raw mask values (for example, to invert or reshape the opacity curve). Once set, the mask applies to all subsequent painting until a later gs sets SMask back to None or a Q operator restores an earlier graphics state."
      ]
    },
    {
      "heading": "Luminosity vs Alpha Soft Masks",
      "body": [
        "The dictionary's S (subtype) entry selects one of two ways to derive the mask. With the Luminosity subtype, the group is composited against the backdrop color and the luminosity — the perceived brightness — of the resulting color at each point becomes the mask value. Bright areas are treated as opaque and dark areas as transparent, so a white-to-black gradient in the group produces a smooth fade. This is the common choice for vignettes, gradient masks, and feathered edges, and it is why designers often build such masks as grayscale artwork.",
        "With the Alpha subtype, color is ignored and the mask value comes from the group's own alpha (its accumulated coverage) at each point. This is useful when the shape of the group, rather than its brightness, should drive the masking. Because the two subtypes read completely different channels, the same group can yield very different masks depending on which one is chosen — a frequent source of confusion when inspecting or editing transparency."
      ]
    },
    {
      "heading": "How the Mask Shapes Compositing",
      "body": [
        "When a soft mask is active, its mask value at each point is combined with the object's own shape and with the constant alpha set in the graphics state. The net effect is that opacity is modulated spatially: a mark that would otherwise be fully opaque can fade to nothing across its extent, following the mask exactly. This is what separates a soft mask from a clipping path, which only decides whether a point is inside or outside a hard boundary.",
        "Because the mask is a continuous field, it can express anti-aliased edges and gradients that the opaque model could never produce. It works alongside — not instead of — blend modes and constant alpha: blend modes decide how source and backdrop colors combine, constant alpha applies one uniform opacity, and the soft mask supplies the per-point variation on top of that."
      ]
    },
    {
      "heading": "Soft Masks vs Other PDF Masks",
      "body": [
        "PDF uses the word mask for several distinct mechanisms, and they are easy to conflate. The graphics-state soft mask described here is generated from a transparency group and affects everything painted while it is active. An image XObject can also carry an entry named SMask, but that is a per-image grayscale alpha channel that applies only to that one image — a different feature that happens to share the name. Stencil masks (image masks) and color-key masking, by contrast, produce hard, one-bit in-or-out results with no partial opacity.",
        "The practical distinction is continuity. Soft masks — both the graphics-state kind and the image kind — give smoothly varying, anti-aliased transparency, whereas stencil and color-key masks give sharp cutoffs. Choosing between them is really a choice between a feathered result and a crisp silhouette."
      ]
    },
    {
      "heading": "Rendering, Flattening, and Print Implications",
      "body": [
        "Soft masks are part of live transparency, which not every consumer of a PDF handles the same way. Some print and prepress workflows expect artwork with no live transparency; a PDF/X-1a file, for instance, must have its transparency flattened into equivalent opaque objects and rasterized regions, while PDF/X-4 can carry soft masks and other transparency live. Flattening preserves the appearance but changes the underlying objects, and it can convert vector regions into images.",
        "Rendering a soft mask means rendering a whole transparency group and then applying its result per point, which is more work than painting an opaque object. That cost, and the rasterization that flattening can introduce, are common reasons a transparency-heavy PDF becomes larger or slower to display or print than its visual complexity would suggest."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "PDF 1.4 (2001), as part of the transparency imaging model"
    },
    {
      "label": "Defined by",
      "value": "The SMask entry of an ExtGState dictionary, activated with the gs operator"
    },
    {
      "label": "Subtypes",
      "value": "Luminosity (brightness-derived) and Alpha (coverage-derived)"
    },
    {
      "label": "Mask source",
      "value": "A transparency group (a form XObject with a Transparency Group subdictionary)"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1, ISO 32000-2",
    "introduced": "PDF 1.4 (2001)",
    "typicalUsage": "Feathered edges, vignettes, gradient transparency, and drop-shadow penumbras — any spatially varying opacity effect",
    "relatedStandards": [
      "pdf-x-4",
      "pdf-x-1a"
    ]
  },
  "misconceptions": [
    {
      "claim": "A soft mask is the same thing as the SMask on an image.",
      "truth": "The graphics-state soft mask (an ExtGState SMask) is built from a transparency group and affects everything painted while it is active; an image XObject's SMask is a per-image grayscale alpha channel for that single image. They share a name but are different mechanisms."
    },
    {
      "claim": "A soft mask is just another way to describe a clipping path.",
      "truth": "A clipping path gives a hard inside/outside boundary, whereas a soft mask supplies continuously varying opacity — feathered edges and gradients — derived from the luminosity or alpha of a transparency group."
    },
    {
      "claim": "A luminosity soft mask uses the group's transparency to build the mask.",
      "truth": "The Luminosity subtype ignores the group's alpha and instead measures the brightness of the group's composited color; it is the Alpha subtype that reads the group's own coverage."
    }
  ],
  "faq": [
    {
      "q": "Where in a PDF is a soft mask stored?",
      "a": "In an extended graphics state (ExtGState) dictionary, as the SMask entry. A content stream activates it with the gs operator, and the mask dictionary's G entry points to the transparency group whose rendered result supplies the mask values."
    },
    {
      "q": "How is a soft mask turned off or cleared?",
      "a": "A later ExtGState can set SMask to the name None, which restores fully opaque painting. Because the mask lives in the graphics state, it also disappears when a Q operator restores a graphics state saved before the mask was set."
    },
    {
      "q": "Do soft masks affect printing and prepress?",
      "a": "They are part of live transparency. Workflows that do not accept live transparency, such as PDF/X-1a, require the file to be flattened, which reproduces the appearance with opaque and rasterized artwork; PDF/X-4 can keep soft masks live."
    },
    {
      "q": "Why can soft masks make a PDF larger or slower to render?",
      "a": "Each soft mask is computed by rendering an entire transparency group and applying its result per point, and flattening a masked region can turn vector artwork into an image. Both add data and processing beyond what the visible result suggests."
    },
    {
      "q": "How does a soft mask differ from the constant alpha in the graphics state?",
      "a": "Constant alpha (the ca and CA settings) applies one uniform opacity to everything drawn, while a soft mask supplies opacity that varies from point to point. They combine: the mask modulates opacity spatially on top of any constant alpha."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "pdf-transparency",
      "transparency-groups",
      "blend-modes",
      "pdf-graphics-state",
      "clipping-paths",
      "form-xobjects",
      "image-soft-masks"
    ],
    "relatedStandards": [
      "pdf-x-4",
      "pdf-x-1a"
    ],
    "relatedFormats": [
      "pdf-1-4",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "Why Is My PDF So Large? Causes and Fixes",
        "path": "/guides/why-is-my-pdf-so-large"
      },
      {
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      }
    ]
  },
  "seeAlso": [
    "pdf-transparency",
    "transparency-groups",
    "blend-modes",
    "image-soft-masks",
    "pdf-graphics-state",
    "form-xobjects",
    "image-masks",
    "stencil-masks"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
