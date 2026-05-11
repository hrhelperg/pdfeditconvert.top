import { describe, it, expect } from "vitest";
import {
  organizationSchema,
  breadcrumbSchema,
  howToSchema,
  faqSchema,
  softwareAppSchema,
} from "@/content/schema";

describe("schema builders", () => {
  it("organization includes Czech address", () => {
    const s = organizationSchema() as unknown as {
      address: { addressCountry: string };
      email: string;
    };
    expect(s.address.addressCountry).toBe("CZ");
    expect(s.email).toBe("info@hrhelperg.com");
  });

  it("breadcrumb numbers positions from 1", () => {
    const b = breadcrumbSchema([
      { label: "Home", path: "/" },
      { label: "Compress PDF", path: "/compress-pdf" },
    ]) as unknown as { itemListElement: { position: number }[] };
    expect(b.itemListElement[0].position).toBe(1);
    expect(b.itemListElement[1].position).toBe(2);
  });

  it("howTo renders each step with position", () => {
    const h = howToSchema({
      name: "Compress",
      description: "Compress a PDF",
      steps: [{ title: "Open", body: "Open the app." }],
    }) as unknown as { step: { position: number; name: string }[] };
    expect(h.step[0].position).toBe(1);
    expect(h.step[0].name).toBe("Open");
  });

  it("faq emits Question/Answer pairs", () => {
    const f = faqSchema([{ q: "Q?", a: "A." }]) as unknown as {
      mainEntity: { "@type": string; acceptedAnswer: { text: string } }[];
    };
    expect(f.mainEntity[0]["@type"]).toBe("Question");
    expect(f.mainEntity[0].acceptedAnswer.text).toBe("A.");
  });

  it("software app includes both store URLs", () => {
    const s = softwareAppSchema() as unknown as { downloadUrl: string[] };
    expect(s.downloadUrl).toContain(
      "https://apps.apple.com/app/id6747341672",
    );
    expect(s.downloadUrl.join(",")).toContain("com.helperg.editor.documents");
  });
});
