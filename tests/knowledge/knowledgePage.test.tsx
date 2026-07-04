import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KnowledgePage } from "@/components/sections/KnowledgePage";
import { makeKnowledgeFixture } from "./_fixture";

describe("KnowledgePage", () => {
  it("renders definition, misconceptions and See also, and emits DefinedTerm not HowTo", () => {
    const content = makeKnowledgeFixture({
      slug: "sample",
      h1: "Sample Concept",
      definition: "Sample is a test concept.",
      misconceptions: [
        { claim: "Sample is X.", truth: "Sample is actually Y." },
      ],
    });
    const { container } = render(<KnowledgePage content={content} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Sample Concept" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Sample is a test concept.")).toBeInTheDocument();
    expect(screen.getByText(/Common misconceptions/i)).toBeInTheDocument();

    const ld = [
      ...container.querySelectorAll('script[type="application/ld+json"]'),
    ]
      .map((s) => s.textContent ?? "")
      .join("");
    expect(ld).toContain('"DefinedTerm"');
    expect(ld).not.toContain('"HowTo"');
  });
});
