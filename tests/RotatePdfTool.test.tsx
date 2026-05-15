// tests/RotatePdfTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RotatePdfTool } from "@/components/tools/RotatePdfTool";

describe("RotatePdfTool", () => {
  it("renders the 3-step indicator", () => {
    render(<RotatePdfTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("Rotate button is disabled until a file is added", () => {
    render(<RotatePdfTool />);
    expect(screen.getByRole("button", { name: /Rotate PDF/i })).toBeDisabled();
  });
});
