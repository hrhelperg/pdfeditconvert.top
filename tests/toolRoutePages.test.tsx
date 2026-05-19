// tests/toolRoutePages.test.tsx
//
// Regression guard for the "route wiring" class of bug: every tool route
// MUST render its interactive converter (a file upload zone + the tool's
// primary action button), not just static SEO/info content. If a route
// page is ever changed to drop its toolSlot, or a tool component fails to
// render, the matching case here fails.
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import type { ComponentType } from "react";

type RouteCase = {
  path: string;
  load: () => Promise<{ default: ComponentType }>;
  actionButton: RegExp;
};

const CASES: RouteCase[] = [
  {
    path: "/image-to-pdf",
    load: () => import("@/app/image-to-pdf/page"),
    actionButton: /Convert to PDF/i,
  },
  {
    path: "/merge-pdf",
    load: () => import("@/app/merge-pdf/page"),
    actionButton: /Merge PDFs?/i,
  },
  {
    path: "/split-pdf",
    load: () => import("@/app/split-pdf/page"),
    actionButton: /Split PDF/i,
  },
  {
    path: "/rotate-pdf",
    load: () => import("@/app/rotate-pdf/page"),
    actionButton: /Rotate PDF/i,
  },
  {
    path: "/pdf-to-images",
    load: () => import("@/app/pdf-to-images/page"),
    actionButton: /Convert to images/i,
  },
  {
    path: "/add-watermark-to-pdf",
    load: () => import("@/app/add-watermark-to-pdf/page"),
    actionButton: /Add watermark/i,
  },
  {
    path: "/compress-pdf",
    load: () => import("@/app/compress-pdf/page"),
    actionButton: /Compress PDF/i,
  },
  {
    path: "/pdf-to-word",
    load: () => import("@/app/pdf-to-word/page"),
    actionButton: /Convert to Word/i,
  },
  {
    path: "/word-to-pdf",
    load: () => import("@/app/word-to-pdf/page"),
    actionButton: /Convert to PDF/i,
  },
];

describe("every tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);

      // The tool's primary action button proves the real component mounted.
      expect(
        screen.getByRole("button", { name: c.actionButton }),
      ).toBeInTheDocument();

      // A file <input> proves the upload/drop zone is present — i.e. this is
      // a working tool, not a static information page.
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every interactive tool route", () => {
    expect(CASES.map((c) => c.path).sort()).toEqual(
      [
        "/add-watermark-to-pdf",
        "/compress-pdf",
        "/image-to-pdf",
        "/merge-pdf",
        "/pdf-to-images",
        "/pdf-to-word",
        "/rotate-pdf",
        "/split-pdf",
        "/word-to-pdf",
      ].sort(),
    );
  });
});
