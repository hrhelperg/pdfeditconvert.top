// Smoke + UX coverage for the three new converter tools. The actual
// conversions need canvas/pdfjs/docx (not available in jsdom), so these
// assert the interactive shell: action button present + disabled until a
// file is added, and the 3-step indicator. End-to-end conversion is
// covered by the production-build browser verification.
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CompressPdfTool } from "@/components/tools/CompressPdfTool";
import { PdfToWordTool } from "@/components/tools/PdfToWordTool";
import { WordToPdfTool } from "@/components/tools/WordToPdfTool";
import { ReorderPdfPagesTool } from "@/components/tools/ReorderPdfPagesTool";
import { ExtractPdfPagesTool } from "@/components/tools/ExtractPdfPagesTool";

const CASES = [
  { name: "CompressPdfTool", el: <CompressPdfTool />, btn: /Compress PDF/i, steps: ["Upload", "Adjust", "Download"] },
  { name: "PdfToWordTool", el: <PdfToWordTool />, btn: /Convert to Word/i, steps: ["Upload", "Convert", "Download"] },
  { name: "WordToPdfTool", el: <WordToPdfTool />, btn: /Convert to PDF/i, steps: ["Upload", "Convert", "Download"] },
  { name: "ReorderPdfPagesTool", el: <ReorderPdfPagesTool />, btn: /Reorder PDF/i, steps: ["Upload", "Reorder", "Download"] },
  { name: "ExtractPdfPagesTool", el: <ExtractPdfPagesTool />, btn: /Extract pages/i, steps: ["Upload", "Select", "Download"] },
];

describe("new converter tools", () => {
  for (const c of CASES) {
    it(`${c.name}: action button present and disabled until a file is added`, () => {
      render(c.el);
      const btn = screen.getByRole("button", { name: c.btn });
      expect(btn).toBeInTheDocument();
      expect(btn).toBeDisabled();
    });

    it(`${c.name}: shows the 3-step indicator and an upload zone`, () => {
      const { container } = render(c.el);
      for (const s of c.steps) expect(screen.getByText(s)).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }
});
