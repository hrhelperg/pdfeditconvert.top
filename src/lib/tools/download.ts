export function downloadBlob(data: Uint8Array | Blob, filename: string, mime = "application/octet-stream") {
  // Cast required because TS 5.7+ tightened Uint8Array generics and pdf-lib's save() returns Uint8Array<ArrayBufferLike>.
  const blob = data instanceof Blob ? data : new Blob([data as Uint8Array<ArrayBuffer>], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
