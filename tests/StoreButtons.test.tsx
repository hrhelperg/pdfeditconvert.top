import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StoreButtons } from "@/components/sections/StoreButtons";

describe("StoreButtons", () => {
  it("renders App Store link with descriptive aria-label", () => {
    render(<StoreButtons />);
    const a = screen.getByLabelText(/App Store/i);
    expect(a).toHaveAttribute(
      "href",
      expect.stringContaining("apps.apple.com"),
    );
    expect(a).toHaveAttribute("target", "_blank");
    expect(a).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("renders Google Play link with bundle id", () => {
    render(<StoreButtons />);
    const a = screen.getByLabelText(/Google Play/i);
    expect(a.getAttribute("href")).toContain("com.helperg.editor.documents");
  });
});
