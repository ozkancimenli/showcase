import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Serve Storybook static files
  async headers() {
    return [
      {
        source: '/storybook/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
