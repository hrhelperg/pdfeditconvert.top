import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const src = resolve(root, "node_modules/pdfjs-dist/build/pdf.worker.min.mjs");
const destDir = resolve(root, "public/pdfjs");
const dest = resolve(destDir, "pdf.worker.min.mjs");

await mkdir(destDir, { recursive: true });
await copyFile(src, dest);
console.log(`[copy-pdfjs-worker] ${src} → ${dest}`);
