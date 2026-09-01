import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { requireRoute } from "@/lib/i18n/routeMap";
import { getToolStrings } from "@/lib/i18n/registry";
import { getToolContent } from "@/content/registry";
import { ToolPage } from "@/components/sections/ToolPage";
import { ExtractPdfPagesTool } from "@/components/tools/ExtractPdfPagesTool";

const LOCALE = "de" as const;
const ROUTE_ID = "extract-pdf-pages" as const;

const route = requireRoute(LOCALE, ROUTE_ID);

export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
  locale: LOCALE,
  routeId: ROUTE_ID,
});

export default function Page() {
  const content = getToolContent(LOCALE, ROUTE_ID);
  if (!content) throw new Error(`Missing ${LOCALE} tool content for ${ROUTE_ID}`);
  return (
    <ToolPage
      content={content}
      locale={LOCALE}
      toolSlot={
        <ExtractPdfPagesTool strings={getToolStrings(LOCALE, ROUTE_ID)} locale={LOCALE} />
      }
    />
  );
}
