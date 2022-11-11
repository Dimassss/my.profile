require("dotenv").config

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
  ],
  env: {
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY
  }
}

module.exports = nextConfig
