/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["cdn.koyashiro.net"],
  },
};

module.exports = nextConfig;
