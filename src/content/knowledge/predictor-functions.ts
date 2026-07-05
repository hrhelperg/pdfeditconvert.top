import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "predictor-functions",
  "h1": "Predictor Functions in PDF Compression",
  "cluster": "images-compression",
  "aliases": [
    "PNG predictors",
    "TIFF Predictor 2",
    "prediction filters",
    "Predictor parameter",
    "Flate/LZW predictors"
  ],
  "definition": "Predictor functions are a reversible preprocessing step used with FlateDecode or LZWDecode that turns samples into differences from neighboring values so the data compresses more efficiently.",
  "description": "How PDF's Predictor parameter reshapes image and stream data before Flate or LZW compression to shrink files, plus the TIFF and PNG predictor types.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "In PDF, a predictor function is an optional preprocessing step that runs before a stream is compressed with FlateDecode or LZWDecode. Rather than compressing the sample values directly, the encoder first replaces each value with a small number describing how it differs from a neighboring value — the sample to its left, the one directly above it, or a blend of nearby samples. The general-purpose compressor then encodes this transformed 'residual' data instead of the originals.",
    "The point of the transform is that real image data and other row-oriented byte streams tend to change gradually: neighboring pixels or rows are often nearly identical. Storing differences turns those near-duplicates into long runs of zeros and small values, which an entropy coder like Flate can pack far more tightly than the raw samples. Prediction adds no compression of its own — it simply reshapes the data so the filter that follows works harder.",
    "Prediction is fully reversible, so nothing is lost: on decoding, the viewer adds each residual back to its predicted value to reconstruct the exact original bytes. Predictors are selected through the Predictor entry in a stream's DecodeParms dictionary, alongside parameters describing the row layout. They are defined only for the LZW and Flate filters, and they appear not just in images but in the cross-reference and object streams that hold a modern PDF together."
  ],
  "sections": [
    {
      "heading": "Where Predictors Fit in the Compression Pipeline",
      "body": [
        "A predictor is not a filter of its own; it is configured on an existing LZWDecode or FlateDecode filter through that stream's DecodeParms (decode parameters) dictionary. The Predictor entry is an integer that selects which prediction algorithm applies. When it is absent or set to 1, no prediction happens and the bytes pass straight through to the compressor.",
        "Because prediction operates across samples and rows rather than raw bytes, the decoder has to know how the data is laid out. Three companion parameters supply that geometry: Colors (the number of color components per sample), BitsPerComponent (the bit depth of each component), and Columns (the number of samples in a row), with defaults of 1, 8, and 1 respectively. The predictor is applied one row at a time using these dimensions, and the same parameters let the decoder reverse it exactly."
      ]
    },
    {
      "heading": "TIFF and PNG Predictor Types",
      "body": [
        "PDF recognizes two families of predictors, distinguished by the Predictor value. A value of 2 selects TIFF Predictor 2, a horizontal differencing scheme borrowed from the TIFF specification in which each component is replaced by its difference from the same component of the previous pixel in the row. Values of 10 through 15 select the PNG predictors — None (10), Sub (11), Up (12), Average (13), Paeth (14), and an 'optimum' choice (15) — which are the same per-row line filters defined by the PNG image format.",
        "A key structural difference: PNG-predicted data prefixes every row with a one-byte filter-type marker, so the encoder is free to switch predictors from row to row and the decoder always knows how to undo each one. TIFF Predictor 2 has no such per-row byte and applies its single scheme uniformly. In both cases the transform is lossless, so the specific predictor chosen affects only the compressed size, never the decoded result."
      ]
    },
    {
      "heading": "Why Prediction Improves Compression",
      "body": [
        "FlateDecode and LZWDecode are lossless, general-purpose compressors that thrive on repetition and low-entropy input. Differencing exposes exactly that structure: a smooth gradient collapses into a near-constant, and a flat region becomes a run of zeros. The Up predictor (12), for example, subtracts the byte directly above the current one, which is powerful whenever successive rows resemble each other.",
        "Matching the predictor to the data's structure can meaningfully reduce the compressed stream, which is why encoders sometimes try several predictors (or use the PNG 'optimum' mode) and keep the smallest result. Because prediction is only a reshaping step, none of this changes what the reader ultimately sees — it changes only how compactly those exact bytes are stored."
      ]
    },
    {
      "heading": "Predictors Beyond Images",
      "body": [
        "Predictors are most associated with image XObjects, but PDF writers routinely apply them to cross-reference streams and object streams as well. A cross-reference stream stores table-like rows of nearly identical, steadily changing values; the PNG Up predictor turns those columns into small, repetitive residuals that Flate squeezes efficiently, which is why Predictor 12 is a common sight in the DecodeParms of xref streams.",
        "This is a useful reminder that prediction is a general byte-stream technique rather than an image-only trick. Any Flate or LZW stream whose data has row-to-row or sample-to-sample regularity can benefit, which is one reason predictors show up throughout the plumbing of a well-optimized PDF."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Used with",
      "value": "FlateDecode and LZWDecode filters only"
    },
    {
      "label": "Configured by",
      "value": "The Predictor entry in a stream's DecodeParms dictionary"
    },
    {
      "label": "Predictor values",
      "value": "1 = none (default), 2 = TIFF Predictor 2, 10–15 = PNG predictors"
    },
    {
      "label": "Reversibility",
      "value": "Lossless — prediction is fully reversible and discards no data"
    }
  ],
  "specification": {
    "typicalUsage": "A preprocessing step for FlateDecode and LZWDecode streams, selected via the Predictor entry in DecodeParms and applied per row; widely used on image XObjects and cross-reference streams.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "Predictor functions compress the data by themselves.",
      "truth": "Prediction does not reduce size on its own; it rearranges data into a more compressible form that the following Flate or LZW filter then actually encodes."
    },
    {
      "claim": "Predictors are a lossy image technique like JPEG.",
      "truth": "Prediction is lossless and fully reversible. Any lossy step in a PDF image comes from a different filter, such as DCTDecode (JPEG), not from predictors."
    },
    {
      "claim": "Predictors apply only to images.",
      "truth": "They work on any Flate or LZW stream and are routinely used on cross-reference and object streams as well as image XObjects."
    }
  ],
  "faq": [
    {
      "q": "What does the Predictor value in DecodeParms mean?",
      "a": "It is an integer that selects the prediction algorithm: 1 for none (the default), 2 for TIFF Predictor 2, and 10 through 15 for the PNG predictor variants (None, Sub, Up, Average, Paeth, and optimum)."
    },
    {
      "q": "Why are Colors, BitsPerComponent, and Columns needed?",
      "a": "They describe the row layout — how many color components each sample has, the bit depth, and how many samples make up a row — so the decoder can apply and reverse the predictor across the correct boundaries."
    },
    {
      "q": "Do PNG predictors add anything to each row of data?",
      "a": "Yes. PNG-predicted data begins every row with a one-byte filter-type marker indicating which predictor was applied to that row, which lets the predictor vary per row and lets the decoder undo it precisely."
    },
    {
      "q": "Why do cross-reference streams often use predictors?",
      "a": "Cross-reference data is highly columnar and changes in small, regular steps, so the Up predictor converts it into runs of small or zero bytes that FlateDecode compresses very effectively — which is why Predictor 12 is common there."
    },
    {
      "q": "Can predictors be used with DCTDecode or CCITTFaxDecode?",
      "a": "No. Predictors are defined only for the LZWDecode and FlateDecode filters; other filters such as DCTDecode, JPXDecode, and CCITTFaxDecode do not use the Predictor parameter."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "object-stream-compression",
      "pdf-stream-objects",
      "dct-decode-jpeg",
      "pdf-optimization",
      "image-color-depth"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Compress a PDF (Without Losing Quality)",
        "path": "/guides/how-to-compress-pdf"
      }
    ]
  },
  "seeAlso": [
    "flate-decode",
    "lzw-decode",
    "pdf-filters",
    "pdf-compression",
    "pdf-xref-streams",
    "image-xobjects",
    "lossy-vs-lossless-pdf-compression",
    "bits-per-component"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
