import type { NextConfig } from "next";

/**
 * Permanent redirects for consolidated content.
 *
 * Aug 2026 indexation audit: /use-cases/students and /use-cases/business
 * targeted the same search intent as the /pdf-for-students and
 * /pdf-for-business hubs (near-identical titles and meta descriptions) while
 * carrying roughly a third of the hub's content. The hub is the stronger page
 * in both cases, so the weaker URL redirects into it rather than competing
 * with it. 308 (permanent) so the signal consolidates.
 */
const REDIRECTS = [
  { source: "/use-cases/students", destination: "/pdf-for-students", permanent: true },
  { source: "/use-cases/business", destination: "/pdf-for-business", permanent: true },
];

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return REDIRECTS;
  },
};

export default config;
