import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    emotion: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
