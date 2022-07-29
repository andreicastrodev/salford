/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'learn.g2crowd.com'] // <== Domain name
  }
}

module.exports = nextConfig
