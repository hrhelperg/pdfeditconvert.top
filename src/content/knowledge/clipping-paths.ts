import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "clipping-paths",
  "h1": "Clipping Paths in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "Clip path",
    "PDF clipping region",
    "Clipping boundary",
    "W operator clipping"
  ],
  "definition": "A clipping path in PDF is a graphics-state boundary that restricts where subsequent marks appear, so any painting outside the defined region is discarded rather than rendered.",
  "description": "How clipping paths work in PDF: the W and W* operators, the clip in the graphics state, and how the paintable region is confined.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A clipping path is one of the parameters carried in a PDF's graphics state. It defines the region of the page inside which drawing is allowed: any part of a fill, stroke, image, or shading that falls outside the current clip is simply not painted. In effect the clipping path acts like a stencil or mask through which everything drawn afterward must pass.",
    "Clipping is what lets a PDF crop an image to a non-rectangular outline, confine a gradient to the shape of a letter, or trim vector artwork to a frame. Because it operates at the level of the imaging model rather than by editing the underlying objects, the original content is unchanged; the viewer just refuses to render marks beyond the boundary.",
    "Clipping paths are defined in a content stream and are governed by the same save/restore mechanism as the rest of the graphics state, which makes them local and reversible. Understanding how they are set and how they combine is central to reading how vector graphics, images, and color are placed on a PDF page."
  ],
  "sections": [
    {
      "heading": "How a clipping path is set",
      "body": [
        "A clipping path is established by constructing a path with the normal path-construction operators, then invoking one of two clipping operators before the path is painted. The W operator selects the current path as the clip using the nonzero winding number rule, while W* uses the even-odd rule to decide what counts as inside. These operators do not immediately change the clip; instead they mark the path so that, after the next path-painting operator finishes, the described region becomes the new clipping boundary.",
        "In practice the clipping operator is usually followed by the n operator, a path-painting operator that ends the path without filling or stroking it. This is how a PDF says \"use this shape only as a clip, do not draw its outline.\" The same path can also be filled or stroked and used as a clip at once, in which case the paint happens first and the clip takes effect for whatever is drawn later."
      ]
    },
    {
      "heading": "The clip lives in the graphics state",
      "body": [
        "The current clipping path is a parameter of the graphics state, alongside the current color, transformation matrix, line width, and similar settings. Because of this, it is pushed and popped by the q and Q operators that save and restore the graphics state. Setting a clip inside a q ... Q block confines its effect to that block: once Q restores the earlier state, the previous, wider clip is back in force.",
        "This scoping is what makes clipping composable. A page can restrict drawing to a frame, then within that frame restrict further to a shape, draw content, and unwind each restriction cleanly. The clip is intrinsically tied to the imaging model rather than to any single object, so it affects every subsequent painting operation, whether that is a vector fill, a stroked line, an image XObject, or a shading, until the state is restored."
      ]
    },
    {
      "heading": "Intersection, never expansion",
      "body": [
        "A newly set clipping path does not replace the existing one; it is intersected with it. The resulting clip is the overlap of the old region and the new path, which means clipping can only ever shrink the paintable area, never enlarge it. There is no operator that widens the clip back out short of restoring an earlier graphics state with Q.",
        "This intersection behavior has practical consequences. Nesting clips progressively narrows what can be drawn, and if a clip is set too small, later content simply vanishes with no error. When content unexpectedly disappears in a region of a page, a leftover or overly tight clipping path is a common cause, because the marks are being generated correctly but discarded at paint time."
      ]
    },
    {
      "heading": "Text as a clipping path",
      "body": [
        "Clipping is not limited to geometric paths. Text can also contribute to the clip through the text rendering mode, a graphics-state parameter set by the Tr operator. Rendering modes that add text to the clip cause the glyph outlines of the shown text to be accumulated into a clipping path, which takes effect once the text object ends.",
        "This is the mechanism behind effects such as an image or gradient showing through the shapes of letters. The text itself may be invisible as ink while its outlines serve purely as a mask. Because glyph outlines are true vector shapes, text clipping integrates with the same intersection and save/restore rules that govern path clipping."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Clipping operators",
      "value": "W (nonzero winding rule) and W* (even-odd rule)"
    },
    {
      "label": "Typical follow-up",
      "value": "The n operator ends the path and applies the clip without painting it"
    },
    {
      "label": "Combination rule",
      "value": "A new clip is intersected with the current one, so it can only reduce the visible area"
    },
    {
      "label": "Scope",
      "value": "Stored in the graphics state; saved and restored by q and Q"
    }
  ],
  "misconceptions": [
    {
      "claim": "A clipping path deletes or crops the content outside it.",
      "truth": "The underlying objects are unchanged. Clipping only prevents marks outside the region from being rendered; the data is still present in the file."
    },
    {
      "claim": "Setting a new clip replaces the previous clipping region.",
      "truth": "A new clip is intersected with the existing one. Clipping regions accumulate and can only get smaller until the graphics state is restored."
    },
    {
      "claim": "The W operator applies the clip immediately.",
      "truth": "W (or W*) only flags the current path as the clip. The clip takes effect after the following path-painting operator, commonly n, completes."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between W and W*?",
      "a": "Both designate the current path as a clip, but they differ in how they decide which points are inside. W uses the nonzero winding number rule and W* uses the even-odd rule. For self-intersecting or nested paths the two rules can produce different interior regions."
    },
    {
      "q": "Why does the clip operator not paint the path?",
      "a": "W and W* only set the clip; the path still needs a painting operator to end it. Using n as that operator ends the path without filling or stroking, so the shape serves purely as a clipping boundary and its outline is not drawn."
    },
    {
      "q": "How do I undo a clipping path?",
      "a": "There is no operator to widen an existing clip. The usual approach is to set the clip inside a q ... Q pair, so that the Q graphics-state restore returns the clip to whatever it was before, effectively removing the narrower region."
    },
    {
      "q": "Can images and gradients be clipped, not just vector shapes?",
      "a": "Yes. The clip is part of the graphics state and applies to every subsequent painting operation, including image XObjects and shadings. This is how a photo or gradient can be trimmed to a non-rectangular outline or to the shape of text."
    },
    {
      "q": "Is a PDF clipping path the same as an image mask?",
      "a": "They are related but distinct. A clipping path is a vector boundary in the graphics state that limits painting, while image masks and soft masks operate per-pixel on a specific image. A clip affects everything drawn afterward, not just one image."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "pdf-graphics-state",
      "pdf-vector-graphics",
      "pdf-patterns",
      "pdf-shadings",
      "form-xobjects",
      "image-xobjects",
      "pdf-coordinate-system"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      }
    ]
  },
  "seeAlso": [
    "pdf-graphics-state",
    "pdf-vector-graphics",
    "pdf-content-streams",
    "pdf-operators",
    "soft-masks",
    "image-masks",
    "pdf-transparency",
    "text-rendering-modes"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
