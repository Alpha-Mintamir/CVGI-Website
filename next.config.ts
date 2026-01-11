import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },

  trailingSlash: true, // prevents 404s on refresh
};

export default nextConfig;
