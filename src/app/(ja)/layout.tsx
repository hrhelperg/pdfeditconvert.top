import type { Metadata } from "next";
import { SiteDocument } from "@/components/layout/SiteDocument";
import { rootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = rootMetadata("ja");

export default function JapaneseRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="ja">{children}</SiteDocument>;
}
