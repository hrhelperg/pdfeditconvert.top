import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FAQ } from "@/components/sections/FAQ";

const items = [
  { q: "Is the app free?", a: "Yes, with optional Pro features." },
  { q: "Does it work offline?", a: "Yes, core editing is offline." },
];

describe("FAQ", () => {
  it("first item is open by default", () => {
    render(<FAQ items={items} />);
    expect(screen.getByText(/with optional Pro features/i)).toBeVisible();
  });

  it("clicking second question opens it and closes the first", async () => {
    const user = userEvent.setup();
    render(<FAQ items={items} />);
    await user.click(
      screen.getByRole("button", { name: /Does it work offline/i }),
    );
    expect(screen.getByText(/core editing is offline/i)).toBeVisible();
    expect(
      screen.queryByText(/with optional Pro features/i),
    ).not.toBeVisible();
  });
});
