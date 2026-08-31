// tests/PdfToImagesTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PdfToImagesTool } from "@/components/tools/PdfToImagesTool";
import { toolProps } from "./helpers/toolProps";

describe("PdfToImagesTool", () => {
  it("renders the 3-step indicator", () => {
    render(<PdfToImagesTool {...toolProps("pdf-to-images")} />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("Convert to images is disabled until a file is added", () => {
    render(<PdfToImagesTool {...toolProps("pdf-to-images")} />);
    expect(screen.getByRole("button", { name: /Convert to images/i })).toBeDisabled();
  });
});
