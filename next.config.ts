import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.7'],
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 95],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'swiftstack.digital',
          },
        ],
        destination: 'https://www.swiftstack.digital/:path*',
        permanent: true,
      },
      {
        source: '/custom-web-development',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/custom-web-development/:path*',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/performance-optimization',
        destination: '/seo-services',
        permanent: true,
      },
      {
        source: '/performance-optimization/:path*',
        destination: '/seo-services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
