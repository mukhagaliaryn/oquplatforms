/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '127.0.0.1',
      "oqu-storage.s3.amazonaws.com",
    ],
  },
}

module.exports = nextConfig
