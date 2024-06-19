// const withSvgr = require('@svgr/webpack');
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // this is webpack configuration to allow svgr
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // this is to ignore eslint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // this is to allow images from any domain
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
