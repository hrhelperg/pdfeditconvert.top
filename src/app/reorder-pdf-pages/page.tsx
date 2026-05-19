import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { ReorderPdfPagesTool } from "@/components/tools/ReorderPdfPagesTool";
import content from "@/content/tools/reorder-pdf-pages";

const route = getRoute("/reorder-pdf-pages");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<ReorderPdfPagesTool />} />;
}
