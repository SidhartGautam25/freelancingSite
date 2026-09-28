import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.devlooperstudio.com",
          },
        ],
        destination: "https://devlooperstudio.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
