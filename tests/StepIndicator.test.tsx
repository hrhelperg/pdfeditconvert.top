import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";

describe("StepIndicator", () => {
  it("renders three steps with the active one marked aria-current", () => {
    render(
      <StepIndicator
        steps={["Upload", "Adjust", "Download"]}
        current={1}
      />,
    );
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
    expect(items[1]).toHaveAttribute("aria-current", "step");
    expect(items[0]).not.toHaveAttribute("aria-current");
  });

  it("uses an ordered list for sequence semantics", () => {
    render(<StepIndicator steps={["a", "b", "c"]} current={0} />);
    expect(screen.getByRole("list").tagName.toLowerCase()).toBe("ol");
  });
});
