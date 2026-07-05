import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "image-only-pdf",
  "h1": "Image-Only PDF",
  "cluster": "metadata-tooling",
  "aliases": [
    "Image-based PDF",
    "Non-searchable PDF",
    "Raster-only PDF",
    "Scanned image PDF"
  ],
  "definition": "An image-only PDF is a PDF whose pages hold only a raster image of the content, usually a scan, with no underlying text layer, so nothing can be selected or searched.",
  "description": "An image-only PDF stores each page as a raster image with no text layer, so its words can't be searched, selected, or read aloud until OCR adds text.",
  "searchIntent": "concept",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "An image-only PDF looks like an ordinary document on screen, but under the hood each page is essentially a single picture. Instead of storing the words as characters with fonts, the page simply paints a raster image — the kind of scan, fax, or photo you would get from a copier or a phone camera pointed at a sheet of paper. The letters you see are pixels, not text.",
    "That distinction is invisible until you try to do something with the words. Because there is no machine-readable text on the page, you cannot select or copy a sentence, a text search finds nothing, and a screen reader has nothing to announce. Many people first discover a PDF is image-only when Ctrl+F comes up empty or a highlight refuses to snap to a line of type.",
    "The usual remedy is optical character recognition (OCR), which reads the picture and adds a matching but invisible text layer over the image. That turns an image-only PDF into a searchable PDF without changing how the page looks. Understanding the difference explains a lot of everyday PDF frustration — from files that won't let you copy text to scans that balloon in size."
  ],
  "sections": [
    {
      "heading": "How an Image-Only PDF Is Built",
      "body": [
        "Every PDF page is drawn by a content stream — a short program of operators that place text, vectors, and images on the page. In an image-only PDF, that program does essentially one thing: it paints a raster image that fills the page. The picture is usually stored as an Image XObject (an external image object the page references and draws with a single operator) or, less commonly, as an inline image embedded directly in the stream. Crucially, the content stream carries no font resources and no text-showing operators, because there is no text to show.",
        "The image data itself is compressed with one of PDF's image filters, chosen to match the content. Black-and-white scans are often encoded with CCITTFaxDecode (Group 4 fax coding) or JBIG2, while color and grayscale scans typically use DCTDecode (JPEG) or JPXDecode (JPEG 2000). The result is a faithful photograph of the page — but from the PDF's point of view it is a picture, not a document made of words."
      ]
    },
    {
      "heading": "Why the Text Can't Be Selected or Searched",
      "body": [
        "Software that searches, copies, or extracts text works from the character codes and font information a PDF stores when text is drawn with text operators. An image-only PDF contains none of that: the words exist only as arrangements of pixels inside the image. There is nothing for a text-extraction routine to read, so search returns no matches, selection has nothing to grab, and copy-and-paste produces empty results.",
        "The same gap affects accessibility. Assistive technology such as a screen reader relies on real text and, ideally, structure tags to convey a page. An untagged image-only PDF offers neither, so the content is effectively inaccessible to anyone who cannot see the image. This is a core reason image-only files are considered a poor fit for documents that need to be searched, reused, or read by everyone."
      ]
    },
    {
      "heading": "Where Image-Only PDFs Come From",
      "body": [
        "Image-only PDFs are most often the product of digitizing paper. A flatbed or sheet-fed scanner, a multifunction copier, or a fax-to-PDF gateway captures each page as an image and wraps it in a PDF. Photographing a document with a phone and saving it as a PDF does the same thing. In each case the device records how the page looks, not what it says.",
        "Not every scanned PDF is image-only, though. Many modern scanners and scanning apps run OCR automatically and save a searchable result, so a scan can already contain a hidden text layer. The reliable way to tell them apart is behavior rather than origin: if you cannot select or find any text and the page acts like one flat picture, you are almost certainly looking at an image-only PDF."
      ]
    },
    {
      "heading": "Turning an Image-Only PDF Into a Searchable One",
      "body": [
        "OCR is the standard way to make an image-only PDF usable. The software analyzes the page image, recognizes the shapes as characters, and writes a text layer that sits in the same positions as the printed words. That text is typically drawn with an invisible text rendering mode so it never obscures the original image — the page still displays the scan, but search, copy, and extraction now work against the recognized text. The combination of a visible image plus a hidden text layer is what most tools mean by a 'searchable' or 'sandwich' scanned PDF.",
        "OCR adds searchability, but it is separate from accessibility and from print quality. Recognition can misread faint or skewed text, so a text layer may not be perfect, and adding tags or fixing reading order is a further step beyond OCR. It is also worth remembering that the visible content of the page is still a raster image: its sharpness, color depth, and resolution determine both how clean it looks and how large the file becomes."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Page content",
      "value": "A raster image per page, painted from an Image XObject or inline image — no fonts and no text-showing operators."
    },
    {
      "label": "Searchable",
      "value": "No. With no text layer, search, copy, and text extraction return nothing."
    },
    {
      "label": "Typical source",
      "value": "Scanners, copiers, fax-to-PDF, and phone photos of paper documents."
    },
    {
      "label": "Making it searchable",
      "value": "OCR adds an invisible text layer aligned to the image, producing a searchable PDF."
    }
  ],
  "misconceptions": [
    {
      "claim": "If I can read the words on the page, the PDF must contain text.",
      "truth": "The words you see may be pixels in a scanned image. An image-only PDF can be perfectly legible yet hold no machine-readable text at all."
    },
    {
      "claim": "Running OCR replaces the picture with real text.",
      "truth": "Typical OCR keeps the original image and adds a hidden text layer over it. The page still displays the scan; the recognized text just makes it searchable."
    },
    {
      "claim": "Image-only PDFs are always low resolution or low quality.",
      "truth": "Quality depends on the scan settings. A high-resolution scan is still image-only if it has no text layer — resolution and searchability are unrelated."
    }
  ],
  "faq": [
    {
      "q": "How can I tell if a PDF is image-only?",
      "a": "Try to select a line of text and run a search for a word you can clearly see. If nothing highlights and the search finds no matches, and the page behaves like one flat picture, the PDF is almost certainly image-only."
    },
    {
      "q": "Can an image-only PDF be made searchable?",
      "a": "Yes. OCR reads the page image and adds an invisible text layer positioned over the words, converting it into a searchable PDF. The scan you see does not change; only the hidden, machine-readable text is added."
    },
    {
      "q": "Are image-only PDFs accessible to screen readers?",
      "a": "Not on their own. With no real text and no structure tags, assistive technology has nothing to read. Making such a file accessible generally requires OCR to add text and further work to add tags and reading order."
    },
    {
      "q": "Why is my image-only PDF so large?",
      "a": "Each page is stored as a full raster image, so file size is driven by scan resolution, color depth, and the image filter used. Bilevel scans compress with fax or JBIG2 coding, while color scans usually rely on JPEG, which can be much larger."
    },
    {
      "q": "Does every scanned PDF lack text?",
      "a": "No. Many scanners and scanning apps run OCR automatically and save a searchable scan. A scanned PDF is only image-only when no text layer was ever added, which is why testing search and selection is the surest check."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-content-streams",
      "inline-images",
      "image-color-depth",
      "screen-readers-and-pdf",
      "well-tagged-pdf"
    ],
    "relatedStandards": [
      "pdf-ua"
    ],
    "relatedTools": [
      {
        "label": "Scan to PDF — Turn Paper Documents Into Clean PDFs",
        "path": "/scan-to-pdf"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Convert Scanned Documents to PDF",
        "path": "/guides/how-to-convert-scanned-documents-to-pdf"
      },
      {
        "label": "When to Use a Scanned PDF (and When Not To)",
        "path": "/guides/when-to-use-scanned-pdf"
      },
      {
        "label": "How to Fix Scanned PDF Quality (Sharpen, Straighten, Recolor)",
        "path": "/guides/how-to-fix-scanned-pdf-quality"
      },
      {
        "label": "How to Compress a Scanned PDF (Big Savings)",
        "path": "/guides/how-to-compress-scanned-pdf"
      }
    ]
  },
  "seeAlso": [
    "searchable-pdf",
    "pdf-ocr",
    "text-layer-in-pdf",
    "pdf-text-extraction",
    "image-xobjects",
    "untagged-pdf",
    "jbig2-decode",
    "image-resolution-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
