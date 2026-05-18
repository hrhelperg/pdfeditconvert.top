// tests/pdfjsWorkerVersion.test.ts
//
// Guards the pdfjs-dist API/worker version-skew bug: PdfToImagesTool loads
// the API via `import("pdfjs-dist")` and points GlobalWorkerOptions.workerSrc
// at the static copy in /public/pdfjs. pdf.js refuses to run if the API and
// worker versions differ ("The API version X does not match the Worker
// version Y"). The postinstall `scripts/copy-pdfjs-worker.mjs` copies the
// worker straight out of the installed package, so the served file MUST be
// byte-identical to the installed pdfjs-dist worker. If a stale lockfile or
// partial install lets them drift, this fails before it ships.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { describe, it, expect } from "vitest";

const require = createRequire(import.meta.url);

describe("pdfjs worker matches installed pdfjs-dist", () => {
  const pkgDir = path.dirname(require.resolve("pdfjs-dist/package.json"));
  const installedWorker = path.join(pkgDir, "build", "pdf.worker.min.mjs");
  const servedWorker = path.resolve(
    __dirname,
    "..",
    "public",
    "pdfjs",
    "pdf.worker.min.mjs",
  );

  const sha = (p: string) =>
    createHash("sha256").update(readFileSync(p)).digest("hex");

  it("the served /public/pdfjs worker is the installed pdfjs-dist worker", () => {
    expect(sha(servedWorker)).toBe(sha(installedWorker));
  });
});
