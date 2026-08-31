// tests/WatermarkPdfTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WatermarkPdfTool } from "@/components/tools/WatermarkPdfTool";
import { toolProps } from "./helpers/toolProps";

describe("WatermarkPdfTool", () => {
  it("renders the 3-step indicator", () => {
    render(<WatermarkPdfTool {...toolProps("add-watermark-to-pdf")} />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("Add watermark button is disabled until a file is added", () => {
    render(<WatermarkPdfTool {...toolProps("add-watermark-to-pdf")} />);
    expect(screen.getByRole("button", { name: /Add watermark/i })).toBeDisabled();
  });

  it("starts with watermark text 'CONFIDENTIAL' visible in the input", () => {
    render(<WatermarkPdfTool {...toolProps("add-watermark-to-pdf")} />);
    expect(screen.getByDisplayValue("CONFIDENTIAL")).toBeInTheDocument();
  });
});
