import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/nextjs-retro-console-portfolio" : "",
  assetPrefix: isProd ? "/nextjs-retro-console-portfolio/" : "",
};

export default nextConfig;
