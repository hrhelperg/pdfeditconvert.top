import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/layout/Header";

describe("Header", () => {
  it("mobile menu is closed by default", () => {
    render(<Header />);
    const toggle = screen.getByLabelText(/Open menu/i);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("clicking the toggle opens the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByLabelText(/Open menu/i));
    expect(screen.getByLabelText(/Close menu/i)).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
