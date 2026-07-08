import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
  },
  async redirects() {
    return [
      {
        source: "/case-studies/:slug",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
