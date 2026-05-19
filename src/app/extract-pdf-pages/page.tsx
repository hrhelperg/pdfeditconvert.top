import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { ExtractPdfPagesTool } from "@/components/tools/ExtractPdfPagesTool";
import content from "@/content/tools/extract-pdf-pages";

const route = getRoute("/extract-pdf-pages");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<ExtractPdfPagesTool />} />;
}
