import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToolPage } from "@/components/sections/ToolPage";
import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "demo-tool",
  hero: { eyebrow: "Demo", h1: "Run this thing", lead: "It does stuff." },
  privacyNote: "Your files stay on your device.",
  howTo: {
    heading: "How to use",
    steps: [{ title: "Open", body: "Click upload." }],
  },
  useCases: { heading: "When to use", items: [{ title: "Case", body: "Body" }] },
  limitations: { heading: "Limits", items: [{ title: "Limit", body: "Body" }] },
  related: [{ label: "Related", path: "/x" }],
  faq: [{ q: "Q?", a: "A." }],
  appCta: { heading: "Get the app", sub: "Free on iOS and Android." },
};

describe("ToolPage", () => {
  it("renders H1 and privacy note in initial HTML (server)", () => {
    render(<ToolPage content={content} toolSlot={<div data-testid="slot">tool</div>} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Run this thing");
    expect(screen.getByText(/files stay on your device/i)).toBeInTheDocument();
    expect(screen.getByTestId("slot")).toBeInTheDocument();
  });

  it("renders FAQ items", () => {
    render(<ToolPage content={content} toolSlot={<div />} />);
    expect(screen.getByText("Q?")).toBeInTheDocument();
  });

  it("renders related links", () => {
    render(<ToolPage content={content} toolSlot={<div />} />);
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute("href", "/x");
  });
});
