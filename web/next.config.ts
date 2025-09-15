import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    disableOptimizedLoading: true,
  },
};

export default nextConfig;


