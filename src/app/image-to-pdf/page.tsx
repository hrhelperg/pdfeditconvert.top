import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { ImageToPdfTool } from "@/components/tools/ImageToPdfTool";
import content from "@/content/tools/image-to-pdf";

const route = getRoute("/image-to-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<ImageToPdfTool />} />;
}
