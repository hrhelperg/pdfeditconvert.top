import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { WatermarkPdfTool } from "@/components/tools/WatermarkPdfTool";
import content from "@/content/tools/add-watermark-to-pdf";

const route = getRoute("/add-watermark-to-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<WatermarkPdfTool />} />;
}
