import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',      // Compiles your app into a flat static folder named /out
  images: {
    unoptimized: true,   // Required for free GitHub Pages static hosting
  },
};

export default nextConfig;
