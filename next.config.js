/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: '/src', //Our App root folder
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
