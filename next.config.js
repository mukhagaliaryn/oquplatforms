/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: [
      '127.0.0.1',
      "oqu-storage.s3.amazonaws.com",
    ],
  },
}

module.exports = nextConfig
