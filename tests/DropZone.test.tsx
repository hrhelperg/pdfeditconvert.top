import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropZone } from "@/components/tools/primitives/DropZone";

describe("DropZone", () => {
  it("renders label, hint, and a privacy line in the upload area", () => {
    render(
      <DropZone
        accept="application/pdf"
        onFiles={() => {}}
        label="Drop files here or click to browse"
        hint="PDF · up to 100 MB"
      />,
    );
    expect(screen.getByText("Drop files here or click to browse")).toBeInTheDocument();
    expect(screen.getByText("PDF · up to 100 MB")).toBeInTheDocument();
    expect(
      screen.getByText(/processed locally in your browser/i),
    ).toBeInTheDocument();
  });

  it("file input has an accessible name", () => {
    render(
      <DropZone
        accept="application/pdf"
        onFiles={() => {}}
        label="Drop a PDF here, or click to choose"
        hint="PDF · up to 100 MB"
      />,
    );
    const input = screen.getByLabelText(/Drop a PDF here, or click to choose/i);
    expect(input.tagName).toBe("INPUT");
  });

  it("calls onFiles when a file is selected", async () => {
    const onFiles = vi.fn();
    render(
      <DropZone
        accept="application/pdf"
        onFiles={onFiles}
        label="Drop"
        hint="hint"
      />,
    );
    const file = new File(["x"], "a.pdf", { type: "application/pdf" });
    const input = screen.getByLabelText(/Drop/i) as HTMLInputElement;
    await userEvent.upload(input, file);
    expect(onFiles).toHaveBeenCalledWith([file]);
  });
});
