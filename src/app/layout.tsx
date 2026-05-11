import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/content/schema";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = rootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-[--color-brand] text-white px-4 py-2 rounded-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />

        <JsonLd data={[organizationSchema(), websiteSchema()]} />

        <Script
          id="webmasterid-tracker"
          src="https://webmasterid.com/tracker.iife.min.js"
          data-wmid="wm_b6f7wz6b9y2o5qzo"
          data-endpoint="https://webmasterid-ingest-api.vercel.app/api/events"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
