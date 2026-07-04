import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KnowledgeHubPage } from "@/components/sections/KnowledgeHubPage";
import { CLUSTER_ORDER, CLUSTERS } from "@/content/knowledge/_clusters";
import { entriesByCluster } from "@/content/knowledge";

describe("KnowledgeHubPage", () => {
  it("renders the hero", () => {
    render(<KnowledgeHubPage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /How PDF actually works/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders a heading for every cluster that has entries", () => {
    render(<KnowledgeHubPage />);
    for (const key of CLUSTER_ORDER) {
      if (entriesByCluster(key).length === 0) continue;
      expect(screen.getByText(CLUSTERS[key].title)).toBeInTheDocument();
    }
  });
});
