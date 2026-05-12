import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { SplitPdfTool } from "@/components/tools/SplitPdfTool";
import content from "@/content/tools/split-pdf";

const route = getRoute("/split-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<SplitPdfTool />} />;
}
