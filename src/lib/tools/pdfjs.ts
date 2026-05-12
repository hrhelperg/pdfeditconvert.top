let configured = false;

export async function loadPdfJs() {
  const pdfjs = await import("pdfjs-dist");
  if (!configured) {
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";
    configured = true;
  }
  return pdfjs;
}
