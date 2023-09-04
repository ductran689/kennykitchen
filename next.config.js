/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;

const { withSuperjson } = require('next-superjson');

module.exports = withSuperjson()({
  reactStrictMode: true,
});
