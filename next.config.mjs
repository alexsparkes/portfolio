/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.muetab.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
