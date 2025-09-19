/** @type {import('next').NextConfig} */

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.muetab.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
      },
    ],
    // Enable image optimization for better performance
    formats: ["image/webp", "image/avif"],
    // minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for better performance
  experimental: {
    // Enable modern CSS handling
    optimizeCss: true,
    // Optimize package imports
    optimizePackageImports: [
      "@icons-pack/react-simple-icons",
      "lucide-react",
      "framer-motion",
    ],
    // Note: ppr is only available in Next.js canary versions
    // ppr: "incremental",
  },

  // Compression
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      // Cache static assets
      {
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Bundle analyzer configuration
  webpack: (config, { dev }) => {
    // Only enable bundle analyzer when ANALYZE=true
    if (process.env.ANALYZE === "true") {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};

export default nextConfig;
