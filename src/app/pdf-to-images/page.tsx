import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { PdfToImagesTool } from "@/components/tools/PdfToImagesTool";
import content from "@/content/tools/pdf-to-images";

const route = getRoute("/pdf-to-images");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<PdfToImagesTool />} />;
}
