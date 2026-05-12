import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { MergePdfTool } from "@/components/tools/MergePdfTool";
import content from "@/content/tools/merge-pdf";

const route = getRoute("/merge-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<MergePdfTool />} />;
}
