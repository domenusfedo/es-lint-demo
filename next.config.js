/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['/src'], // Source Code Directory
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
