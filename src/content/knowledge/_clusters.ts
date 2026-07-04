import type { KnowledgeCluster } from "@/types/content";

export const CLUSTERS: Record<
  KnowledgeCluster,
  { title: string; blurb: string; order: number }
> = {
  foundations: {
    title: "Format foundations & file structure",
    blurb:
      "What a PDF is made of — objects, the cross-reference table, versions and the document catalog.",
    order: 1,
  },
  standards: {
    title: "ISO standards & subsets",
    blurb:
      "The PDF/A, PDF/X, PDF/UA, PDF/E and PDF/VT families and how conformance works.",
    order: 2,
  },
  "text-fonts": {
    title: "Text, fonts & encoding",
    blurb:
      "How PDFs store type — embedding, subsetting, CID fonts, encoding and text extraction.",
    order: 3,
  },
  "graphics-color": {
    title: "Graphics, color & rendering",
    blurb:
      "Color spaces, ICC profiles, transparency and how a PDF is drawn to the screen or press.",
    order: 4,
  },
  "images-compression": {
    title: "Images & compression",
    blurb:
      "The filters that shrink PDFs — Flate, JPEG, JBIG2, CCITT — and how optimization works.",
    order: 5,
  },
  interactivity: {
    title: "Interactivity: forms, annotations & links",
    blurb:
      "AcroForms, XFA, annotation types, bookmarks, actions and appearance streams.",
    order: 6,
  },
  security: {
    title: "Security, signatures & permissions",
    blurb:
      "Encryption, passwords, permission flags, redaction and digital signatures.",
    order: 7,
  },
  accessibility: {
    title: "Accessibility & structure",
    blurb:
      "Tagged PDF, the structure tree, reading order and what makes a PDF usable with assistive tech.",
    order: 8,
  },
  "metadata-tooling": {
    title: "Metadata, extraction & tooling concepts",
    blurb:
      "Document metadata, XMP, searchable PDF, OCR concepts and validation.",
    order: 9,
  },
  "print-geometry": {
    title: "Page geometry & print production",
    blurb:
      "Page boxes, sizes, rotation, optional-content layers, preflight and print-ready PDF.",
    order: 10,
  },
};

export const CLUSTER_ORDER = (
  Object.keys(CLUSTERS) as KnowledgeCluster[]
).sort((a, b) => CLUSTERS[a].order - CLUSTERS[b].order);
