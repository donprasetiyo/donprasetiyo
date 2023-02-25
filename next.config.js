/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    CAPTCHA: process.env.CAPTCHA
  }
}

module.exports = nextConfig;
