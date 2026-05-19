// Pure-ish page-level PDF helpers shared by the Reorder and Extract tools.
// pd-lib is isomorphic, so buildReorderedPdf / buildPdfFromPages are unit
// tested in Node. Thumbnail rendering (pdfjs + canvas) stays in the client
// component since it's browser-only.

/** Swap the item at `index` with its neighbour. `dir` -1 moves it earlier,
 *  +1 later. Out-of-bounds moves are no-ops (returns a new array regardless
 *  so callers can setState unconditionally). */
export function moveInOrder<T>(arr: readonly T[], index: number, dir: -1 | 1): T[] {
  const next = arr.slice();
  const target = index + dir;
  if (index < 0 || index >= next.length || target < 0 || target >= next.length) {
    return next;
  }
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

async function loadPdf() {
  return (await import("pdf-lib")).PDFDocument;
}

/** Build a new PDF whose pages follow `order` (0-based source indices, any
 *  permutation/selection). Throws if the source can't be parsed. */
export async function buildReorderedPdf(
  srcBytes: Uint8Array,
  order: readonly number[],
): Promise<Uint8Array> {
  const PDFDocument = await loadPdf();
  const src = await PDFDocument.load(srcBytes, { ignoreEncryption: false }).catch(
    () => {
      throw new Error(
        "Could not read this PDF. It may be corrupted or password-protected.",
      );
    },
  );
  const total = src.getPageCount();
  const indices = order.filter((i) => Number.isInteger(i) && i >= 0 && i < total);
  if (indices.length === 0) {
    throw new Error("No valid pages to write.");
  }
  const out = await PDFDocument.create();
  const copied = await out.copyPages(src, indices);
  for (const p of copied) out.addPage(p);
  return out.save();
}

/** Build a new PDF containing only `pages` (1-based, in the given order;
 *  duplicates are allowed and produce repeated pages). */
export async function buildPdfFromPages(
  srcBytes: Uint8Array,
  pages: readonly number[],
): Promise<Uint8Array> {
  return buildReorderedPdf(
    srcBytes,
    pages.map((p) => p - 1),
  );
}
