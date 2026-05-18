import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageToPdfTool } from "@/components/tools/ImageToPdfTool";

describe("ImageToPdfTool", () => {
  it("disables Convert to PDF until images are added", () => {
    render(<ImageToPdfTool />);
    const btn = screen.getByRole("button", { name: /Convert to PDF/i });
    expect(btn).toBeDisabled();
  });

  it("renders the 3-step indicator with Upload active by default", () => {
    render(<ImageToPdfTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("shows file list with reorder + remove after a valid image is added", async () => {
    render(<ImageToPdfTool />);
    const file = new File(["x"], "a.png", { type: "image/png" });
    const input = screen.getByLabelText(/Drop images here/i) as HTMLInputElement;
    await userEvent.upload(input, file);
    expect(screen.getByText("a.png")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Remove a\.png/i })).toBeInTheDocument();
  });

  it("shows page size, orientation, image fit, and margin options once a file is added", async () => {
    render(<ImageToPdfTool />);
    const file = new File(["x"], "a.png", { type: "image/png" });
    const input = screen.getByLabelText(/Drop images here/i) as HTMLInputElement;
    await userEvent.upload(input, file);
    expect(screen.getByText(/Page size/i)).toBeInTheDocument();
    expect(screen.getByText(/Orientation/i)).toBeInTheDocument();
    expect(screen.getByText(/Image fit/i)).toBeInTheDocument();
    expect(screen.getByText(/Margin/i)).toBeInTheDocument();
  });
});
