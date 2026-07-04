import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KnowledgePage } from "@/components/sections/KnowledgePage";
import { KNOWLEDGE } from "@/content/knowledge";
import { makeKnowledgeFixture } from "./_fixture";

function ldOf(node: HTMLElement): string {
  return [...node.querySelectorAll('script[type="application/ld+json"]')]
    .map((s) => s.textContent ?? "")
    .join("");
}

describe("knowledge schema shape", () => {
  const samples = [
    makeKnowledgeFixture({ slug: "z" }),
    ...Object.values(KNOWLEDGE),
  ];
  it.each(samples.map((c) => [c.slug, c] as const))(
    "%s emits DefinedTerm/Article/FAQ/Breadcrumb and no HowTo",
    (_slug, content) => {
      const { container } = render(<KnowledgePage content={content} />);
      const ld = ldOf(container);
      expect(ld).toContain('"DefinedTerm"');
      expect(ld).toContain('"Article"');
      expect(ld).toContain('"FAQPage"');
      expect(ld).toContain('"BreadcrumbList"');
      expect(ld).not.toContain('"HowTo"');
    },
  );
});
