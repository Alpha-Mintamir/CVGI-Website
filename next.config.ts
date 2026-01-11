import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages deployment path
  basePath: isProd ? "/CVGI-Website" : "",
  assetPrefix: isProd ? "/CVGI-Website/" : "",

  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },

  trailingSlash: true, // prevents 404s on refresh
};

export default nextConfig;
