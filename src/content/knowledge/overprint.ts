import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "overprint",
  "h1": "Overprint in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "Overprinting",
    "Overprint control",
    "OP and op (overprint parameters)",
    "Overprint mode (OPM)"
  ],
  "definition": "Overprint is a PDF print-production setting that makes a colored object print on top of the content beneath it instead of knocking out (removing) the underlying colorants.",
  "description": "Overprint tells a PDF to lay ink over the colors beneath it instead of knocking them out — a print-production control set deep in the graphics state.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a PDF paints one colored shape on top of another, the usual behavior is knockout: the press does not lay down ink for the covered area of the lower object, so the top object sits on bare paper for the colorants it does not itself use. Overprint reverses that choice for selected objects — instead of removing the ink underneath, the object's colorants are added on top of whatever is already there.",
    "Overprint is fundamentally a print-production concept tied to how a PDF is separated into individual colorants such as cyan, magenta, yellow, black, and named spot colors. It has little effect on ordinary additive RGB screen viewing, which is why a file can look identical on a monitor yet separate and print very differently once overprint is honored.",
    "Because the setting lives deep in the graphics state and is ignored by many viewers unless a special preview is turned on, overprint is a frequent source of surprises in prepress. This page explains what overprint is and how it works in the PDF imaging model, rather than walking through how to apply it in a specific tool."
  ],
  "sections": [
    {
      "heading": "Overprint versus knockout",
      "body": [
        "Knockout is the default compositing rule for opaque painting in PDF. Where a top object covers a lower one, the imaging model treats the top object's colorants as replacing the area beneath: any colorant the top object does not use is knocked out to zero in that region, so on a separated plate the covered area is left blank. This keeps colors from muddying together and is what most people expect from stacking one shape over another.",
        "Overprint changes that rule per object and per colorant. When overprinting is enabled, the object no longer clears the underlying colorants it does not use; those separations pass through unchanged, and the object simply adds its own colorants on top. The visible result on press is closer to two inks physically overlapping — for example, a magenta shape overprinted on a yellow background can read as red where they overlap, because both inks remain present."
      ]
    },
    {
      "heading": "The overprint parameters: OP, op, and OPM",
      "body": [
        "Overprint is carried in the PDF graphics state and is typically set through an extended graphics state (ExtGState) dictionary. Two related parameters control it: OP governs overprinting for stroking operations, and op (lowercase) governs overprinting for non-stroking operations such as fills; when op is absent, the value of OP applies to both. Both default to off, which is why fresh content knocks out unless something deliberately turns overprint on.",
        "A third parameter, the overprint mode (OPM), was added in PDF 1.3 along with the separate non-stroking op parameter. OPM changes how a zero color component is interpreted while overprinting is active. In the default mode (0), a zero component still knocks out that colorant; in the nonzero overprint mode (1), a component value of zero in a DeviceCMYK color — or in a Separation or DeviceN color built on it — means 'leave this colorant unchanged' rather than clearing it. This distinction is central to how much of the underlying content survives beneath an overprinting object."
      ]
    },
    {
      "heading": "Why overprint exists: registration and trapping",
      "body": [
        "Presses lay down each colorant on a separate impression, and the plates can shift slightly relative to one another — misregistration. If a knocked-out element and its background are even a fraction of a millimeter out of alignment, a thin unprinted sliver of paper can appear along the edge. A classic use of overprint is small black text set to overprint the color beneath it, so any registration error is hidden by the overlapping ink instead of showing as a white gap.",
        "Trapping builds on the same mechanism. A trap is a small region along a color boundary where adjacent colors are made to overlap, and that overlap is produced by overprinting the trap area so both inks print there. Spot-color workflows — varnishes, die lines, and special inks on their own separations — also rely on overprint to control whether those colorants sit on top of, or replace, the process colors underneath."
      ]
    },
    {
      "heading": "Overprint preview and where it goes wrong",
      "body": [
        "Many viewers render knockout by default and only simulate overprinting when an overprint-preview mode is enabled, so a document can look correct on screen while its separated or printed output differs. This gap between screen and press is why prepfor-print review usually involves turning on overprint preview and inspecting separations, and why preflight checks commonly report which objects overprint and in what mode.",
        "A well-known pitfall is white or light content set to overprint. Because white in CMYK is all-zero and there is no white ink on a standard process press, an overprinting white object may contribute nothing and effectively vanish, letting the background show straight through where the designer expected a reversed-out shape. Overprint is also distinct from the PDF transparency model: blend modes such as Multiply can look similar on screen, but overprint operates at the level of device colorants and separations rather than through transparency compositing."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Default behavior",
      "value": "Overprinting is off by default, so objects knock out the colorants beneath them."
    },
    {
      "label": "Graphics-state controls",
      "value": "Set through the graphics state (ExtGState): OP for stroking, op for non-stroking, and OPM for overprint mode."
    },
    {
      "label": "Color model",
      "value": "Meaningful for DeviceCMYK, Separation, and DeviceN colorants and spot colors, not additive RGB screen color."
    },
    {
      "label": "Overprint mode",
      "value": "OPM 1 (added in PDF 1.3) treats a zero CMYK component as 'leave that colorant unchanged' instead of knocking it out."
    }
  ],
  "specification": {
    "introduced": "The op (non-stroking overprint) parameter and OPM (overprint mode) were added in PDF 1.3.",
    "iso": "Defined within ISO 32000 (the PDF specification).",
    "typicalUsage": "Print production, trapping, black-text overprinting, and spot-color separation workflows.",
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4",
      "pdf-x-trapping"
    ]
  },
  "misconceptions": [
    {
      "claim": "Overprint only changes how a PDF looks on screen.",
      "truth": "Most viewers render knockout by default and ignore overprint unless an overprint-preview mode is on; the setting primarily affects separated and printed output."
    },
    {
      "claim": "Setting white text to overprint is a safe way to reverse it out of a background.",
      "truth": "White is all-zero in CMYK and there is no white process ink, so overprinting white often makes the object contribute nothing and the background shows through."
    },
    {
      "claim": "Overprint is just the Multiply blend mode under another name.",
      "truth": "They can look similar, but overprint acts on device colorants and separations in the print pipeline, while blend modes belong to the PDF transparency model."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between overprint and knockout?",
      "a": "Knockout removes the underlying colorants where a top object sits, so it prints on bare paper. Overprint leaves those colorants in place and adds the new ink on top, so the inks overlap."
    },
    {
      "q": "Why does an overprinted PDF look fine on screen but print differently?",
      "a": "Many viewers default to a knockout preview and ignore overprint. Turning on an overprint-preview mode and viewing separations shows how the file will actually reproduce."
    },
    {
      "q": "What does overprint mode (OPM) do?",
      "a": "OPM controls how a zero color component is treated while overprinting. In mode 0 a zero still knocks out; in mode 1 a zero DeviceCMYK component leaves that colorant unchanged instead of clearing it."
    },
    {
      "q": "Does overprint apply to RGB color?",
      "a": "Overprint is meaningful for DeviceCMYK, Separation, and DeviceN colorants and spot colors. It generally has no useful effect on additive RGB screen color, which does not separate into ink plates."
    },
    {
      "q": "How is overprint related to trapping?",
      "a": "Trapping creates small overlaps along color edges to hide press misregistration, and those overlaps are produced by overprinting the trap regions so both inks print there."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "devicen-color",
      "rendering-intent",
      "blend-modes",
      "pdf-transparency",
      "color-management-in-pdf",
      "pdf-preflight",
      "press-ready-pdf"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4",
      "pdf-x-trapping"
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-color",
    "spot-colors",
    "separation-color",
    "devicecmyk",
    "trapping",
    "pdf-x-trapping",
    "pdf-graphics-state",
    "print-production-with-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
