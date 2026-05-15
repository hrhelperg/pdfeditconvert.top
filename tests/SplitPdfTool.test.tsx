// tests/SplitPdfTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SplitPdfTool } from "@/components/tools/SplitPdfTool";

describe("SplitPdfTool", () => {
  it("Extract pages button is disabled with no file", () => {
    render(<SplitPdfTool />);
    expect(screen.getByRole("button", { name: /Extract pages/i })).toBeDisabled();
  });

  it("renders the 3-step indicator", () => {
    render(<SplitPdfTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("explains the page-range syntax in helper text", () => {
    render(<SplitPdfTool />);
    expect(screen.getByText(/1-3 or 2,4,6/)).toBeInTheDocument();
  });
});
