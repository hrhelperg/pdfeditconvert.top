import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MergePdfTool } from "@/components/tools/MergePdfTool";

describe("MergePdfTool", () => {
  it("Merge button is disabled until at least 2 PDFs are added", async () => {
    render(<MergePdfTool />);
    const btn = screen.getByRole("button", { name: /Merge PDFs/i });
    expect(btn).toBeDisabled();

    const input = screen.getByLabelText(/Drop PDFs here/i) as HTMLInputElement;
    const a = new File(["1"], "a.pdf", { type: "application/pdf" });
    await userEvent.upload(input, a);
    expect(btn).toBeDisabled(); // still 1 file

    const b = new File(["2"], "b.pdf", { type: "application/pdf" });
    await userEvent.upload(input, b);
    expect(btn).not.toBeDisabled();
  });

  it("renders the 3-step indicator", () => {
    render(<MergePdfTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("supports reorder via Move up/down buttons", async () => {
    render(<MergePdfTool />);
    const input = screen.getByLabelText(/Drop PDFs here/i) as HTMLInputElement;
    await userEvent.upload(input, [
      new File(["1"], "a.pdf", { type: "application/pdf" }),
      new File(["2"], "b.pdf", { type: "application/pdf" }),
    ]);
    const moveUp = screen.getByRole("button", { name: /Move b\.pdf up/i });
    await userEvent.click(moveUp);
    const items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("b.pdf");
  });
});
