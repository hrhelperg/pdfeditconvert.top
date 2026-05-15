import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SuccessState } from "@/components/tools/primitives/SuccessState";

describe("SuccessState", () => {
  it("shows filename, size, and a Start over button", async () => {
    const onReset = vi.fn();
    render(
      <SuccessState
        title="Your PDF is ready"
        filename="merged.pdf"
        sizeBytes={1234567}
        onReset={onReset}
      />,
    );
    expect(screen.getByText(/Your PDF is ready/i)).toBeInTheDocument();
    expect(screen.getByText("merged.pdf")).toBeInTheDocument();
    expect(screen.getByText(/1\.2 MB/)).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /Start over/i }));
    expect(onReset).toHaveBeenCalled();
  });

  it("renders related tool suggestions when provided", () => {
    render(
      <SuccessState
        title="Done"
        filename="x.pdf"
        sizeBytes={0}
        onReset={() => {}}
        related={[{ label: "Split a PDF", path: "/split-pdf" }]}
      />,
    );
    expect(screen.getByRole("link", { name: /Split a PDF/ })).toHaveAttribute(
      "href",
      "/split-pdf",
    );
  });

  it("emits a status announcement for assistive tech", () => {
    render(
      <SuccessState
        title="Your PDF is ready"
        filename="x.pdf"
        sizeBytes={0}
        onReset={() => {}}
      />,
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
