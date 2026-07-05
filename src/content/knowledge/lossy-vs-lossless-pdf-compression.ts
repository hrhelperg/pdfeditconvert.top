import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "lossy-vs-lossless-pdf-compression",
  "h1": "Lossy vs Lossless PDF Compression",
  "cluster": "images-compression",
  "aliases": [
    "lossy compression",
    "lossless compression",
    "lossy vs lossless",
    "PDF image compression methods"
  ],
  "definition": "Lossy PDF compression discards image detail to shrink files, while lossless compression repacks data so the original bytes can be restored exactly; most PDFs use both together.",
  "description": "Understand the difference between lossy and lossless compression in PDF, which stream filters use each, and why file size trades off against image fidelity.",
  "searchIntent": "comparison",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Compression is how a PDF stays small enough to email while still holding fonts, vector artwork, and photographs. The format never picks one universal method: it applies a compression filter to each stream of data, and those filters fall into two families. Lossless filters shrink data in a way that can be perfectly reversed, and lossy filters shrink it further by permanently throwing away detail a viewer is unlikely to notice.",
    "The distinction matters because it decides whether \"compressing\" a document is a safe, reversible packing step or a one-way quality decision. Text, line art, and the internal plumbing of a PDF are almost always compressed losslessly, so nothing about their appearance changes. Photographic images are where the lossy option earns its keep, trading a controlled amount of visual quality for a large reduction in bytes.",
    "This page explains what each family does at a technical level, which PDF stream filters belong to which family, and why a single PDF frequently mixes the two. It is a conceptual reference rather than a walkthrough; where you actually need to reduce a file, the linked tools and guides cover the hands-on steps."
  ],
  "sections": [
    {
      "heading": "What \"lossy\" and \"lossless\" actually mean",
      "body": [
        "Lossless compression finds and removes redundancy in a stream without altering the information it represents. A decompressor can rebuild the input byte for byte, so the round trip is exact. General-purpose lossless coding in PDF relies on schemes such as DEFLATE (the algorithm behind FlateDecode) and, historically, LZW, which spot repeated patterns and encode them more compactly. Because the result is identical to the source, lossless compression can be applied and reversed as many times as needed with no cumulative degradation.",
        "Lossy compression goes further by discarding information rather than just repacking it. Image-oriented lossy methods analyze how human vision perceives detail and drop the components that contribute least to the visible result, then encode what remains. The reconstructed image is an approximation of the original, and the discarded data cannot be recovered. This is why lossy compression achieves dramatically smaller sizes on photographs, and also why repeatedly re-encoding the same image can visibly erode it."
      ]
    },
    {
      "heading": "Which PDF stream filters are lossy and which are lossless",
      "body": [
        "PDF describes compression through named stream filters. The lossless filters include FlateDecode (based on DEFLATE and introduced in PDF 1.2), the older LZWDecode, RunLengthDecode for simple run-based data, and CCITTFaxDecode for bilevel (black-and-white) images using Group 3 and Group 4 fax coding. JBIG2, used for bilevel scanned pages, offers both a lossless and a lossy mode. These are the tools PDF uses when the exact data must survive, or when an image has only a few colors and repeated runs.",
        "The clearly lossy path is DCTDecode, which carries JPEG-encoded data and is the usual choice for photographic, continuous-tone images. JPXDecode carries JPEG 2000 data and is unusual in that it supports both lossy and lossless modes, so its family membership depends on how the image was encoded. When people say a PDF was \"compressed and lost quality,\" they almost always mean a photo was stored or re-stored through DCTDecode, or a JPEG 2000 image was written in its lossy mode."
      ]
    },
    {
      "heading": "Why a single PDF usually mixes both",
      "body": [
        "A typical PDF is not one blob of data but many independent streams: content streams describing page drawing, embedded font programs, vector graphics, metadata, and one image object per picture. Each can carry its own filter. Text and vector content are compressed losslessly because approximating them would corrupt characters and shapes rather than merely soften them, so a report full of type and diagrams can shrink substantially with zero visible change.",
        "Images embedded on those same pages are handled separately, and this is where the lossy option is applied selectively. A scanned page might use CCITTFax or JBIG2 for its bilevel layer, while a product photo on the next page uses DCTDecode. The document as a whole therefore has no single \"compression setting\"; it is a collection of per-stream choices, which is why optimizing a PDF is really a set of decisions about which streams to leave untouched and which images to re-encode."
      ]
    },
    {
      "heading": "The trade-off between fidelity and file size",
      "body": [
        "Lossless compression is safe but bounded: it can only remove redundancy that already exists, so a busy photograph has little to give and stays large. Lossy compression is unbounded in the other direction; it can keep shrinking an image by discarding progressively more detail, at the cost of visible artifacts such as blockiness or blurred edges. The practical consequence is that big savings on image-heavy or scanned PDFs almost always come from a lossy step, while text-heavy PDFs benefit mainly from lossless packing.",
        "It also helps to separate compression from resolution. Downsampling, which reduces an image's pixel dimensions, is a distinct lossy operation often paired with re-encoding during optimization; it removes pixels before a filter is even applied. A file can therefore lose quality from downsampling, from lossy re-encoding, or from both, even though the underlying filter names look like a purely technical detail. Because lossy losses are permanent, the fidelity decision is best made once, deliberately, rather than through repeated save cycles."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Lossless filters",
      "value": "FlateDecode, LZWDecode, RunLengthDecode, and CCITTFaxDecode restore data exactly."
    },
    {
      "label": "Lossy filter",
      "value": "DCTDecode carries JPEG data and is the usual choice for photographic images."
    },
    {
      "label": "Dual-mode",
      "value": "JPXDecode (JPEG 2000) and JBIG2 each support both lossless and lossy encoding."
    },
    {
      "label": "Text and vectors",
      "value": "Content streams, fonts, and vector art are compressed losslessly, never with a lossy filter."
    }
  ],
  "misconceptions": [
    {
      "claim": "Compressing a PDF always reduces its visual quality.",
      "truth": "Lossless filters like FlateDecode repack data with no visible change; only lossy image re-encoding or downsampling degrades quality."
    },
    {
      "claim": "JPEG 2000 in a PDF is always lossy.",
      "truth": "JPXDecode supports both a lossy and a lossless mode, so JPEG 2000 images can be stored without any loss."
    },
    {
      "claim": "A PDF has a single compression setting that applies to the whole file.",
      "truth": "Compression is chosen per stream, so one document can combine lossless text and vectors with lossy photos."
    }
  ],
  "faq": [
    {
      "q": "Is FlateDecode lossy or lossless?",
      "a": "FlateDecode is lossless. It is based on the DEFLATE algorithm and reconstructs the original bytes exactly, which is why it is used for text content, fonts, and vector graphics."
    },
    {
      "q": "Can text in a PDF be compressed without losing anything?",
      "a": "Yes. Text lives in content streams that are compressed with lossless filters such as FlateDecode, so the characters and layout are unchanged no matter how many times the stream is packed and unpacked."
    },
    {
      "q": "Why does re-saving a scanned or photo-heavy PDF sometimes look worse?",
      "a": "Scans and photos are usually stored through lossy encoding like DCTDecode and may also be downsampled. Each lossy save can discard more detail, and that loss is cumulative and permanent."
    },
    {
      "q": "Does removing lossy compression restore the lost detail?",
      "a": "No. Once a lossy step has discarded information, it is gone. Switching a filter back to a lossless one preserves whatever data currently remains but cannot recover what was already thrown away."
    },
    {
      "q": "Which family should I expect a mixed document to use?",
      "a": "A document with type, diagrams, and photos typically compresses text and vectors losslessly while applying a lossy filter only to the photographic images, so the two families coexist in one file."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "lzw-decode",
      "ccittfax-decode",
      "runlength-decode",
      "bits-per-component",
      "image-resolution-in-pdf",
      "pdf-file-size-factors",
      "image-soft-masks",
      "object-stream-compression"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "Compress a PDF Without Losing Too Much Quality",
        "path": "/guides/compress-pdf-without-losing-too-much-quality"
      },
      {
        "label": "Best PDF Compression Settings — A Decision Guide",
        "path": "/guides/best-pdf-compression-settings"
      },
      {
        "label": "How to Compress a Scanned PDF (Big Savings)",
        "path": "/guides/how-to-compress-scanned-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-compression",
    "pdf-filters",
    "flate-decode",
    "dct-decode-jpeg",
    "jpx-decode-jpeg2000",
    "jbig2-decode",
    "image-downsampling",
    "pdf-optimization"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
