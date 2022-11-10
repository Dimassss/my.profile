/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    return config
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/home',
      permanent: false
    }
  ]
}

module.exports = nextConfig
