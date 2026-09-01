import type { Metadata } from "next";
import { SiteDocument } from "@/components/layout/SiteDocument";
import { rootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = rootMetadata("tr");

export default function TurkishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="tr">{children}</SiteDocument>;
}
