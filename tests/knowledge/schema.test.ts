import { describe, it, expect } from "vitest";
import { definedTermSchema } from "@/content/schema";

describe("definedTermSchema", () => {
  it("produces a DefinedTerm with aliases, description and set membership", () => {
    const s = definedTermSchema({
      term: "PDF/A",
      aliases: ["PDF A", "ISO 19005", "Archival PDF"],
      definition: "An ISO-standardised version of PDF for long-term archiving.",
      path: "/pdf-encyclopedia/pdf-a",
    });
    expect(s["@type"]).toBe("DefinedTerm");
    expect(s.name).toBe("PDF/A");
    expect(s.alternateName).toEqual(["PDF A", "ISO 19005", "Archival PDF"]);
    expect(s.url).toBe("https://pdfeditconvert.top/pdf-encyclopedia/pdf-a");
    expect(s.inDefinedTermSet.name).toBe("PDF Encyclopedia");
    expect(s.inDefinedTermSet.url).toBe(
      "https://pdfeditconvert.top/pdf-encyclopedia",
    );
  });
});
