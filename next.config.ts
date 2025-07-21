import type { NextConfig } from "next";

// next.config.js

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/nextjs-retro-console-portfolio" : "",
  assetPrefix: isProd ? "/nextjs-retro-console-portfolio/" : "",
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
