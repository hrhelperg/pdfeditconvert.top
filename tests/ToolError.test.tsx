import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToolError } from "@/components/tools/primitives/ToolError";

describe("ToolError", () => {
  it("renders nothing when message is null", () => {
    const { container } = render(<ToolError message={null} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders message and optional hint with role=alert", () => {
    render(<ToolError message="Bad input." hint="Try 1-3 or 2,4,6." />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Bad input.");
    expect(alert).toHaveTextContent("Try 1-3 or 2,4,6.");
  });
});
