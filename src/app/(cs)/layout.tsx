import type { Metadata } from "next";
import { SiteDocument } from "@/components/layout/SiteDocument";
import { rootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = rootMetadata("cs");

export default function CzechRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="cs">{children}</SiteDocument>;
}
