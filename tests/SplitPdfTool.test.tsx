// tests/SplitPdfTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SplitPdfTool } from "@/components/tools/SplitPdfTool";
import { toolProps } from "./helpers/toolProps";

describe("SplitPdfTool", () => {
  it("Split PDF button is disabled with no file", () => {
    render(<SplitPdfTool {...toolProps("split-pdf")} />);
    expect(screen.getByRole("button", { name: /Split PDF/i })).toBeDisabled();
  });

  it("renders the 3-step indicator", () => {
    render(<SplitPdfTool {...toolProps("split-pdf")} />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("explains the page-range syntax in helper text", () => {
    render(<SplitPdfTool {...toolProps("split-pdf")} />);
    expect(screen.getByText(/1-3 or 2,4,6/)).toBeInTheDocument();
  });
});
