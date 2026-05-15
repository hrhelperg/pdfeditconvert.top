// tests/PdfToImagesTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PdfToImagesTool } from "@/components/tools/PdfToImagesTool";

describe("PdfToImagesTool", () => {
  it("renders the 3-step indicator", () => {
    render(<PdfToImagesTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("Export images is disabled until a file is added", () => {
    render(<PdfToImagesTool />);
    expect(screen.getByRole("button", { name: /Export images/i })).toBeDisabled();
  });
});
