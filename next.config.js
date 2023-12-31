/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["cdn.koyashi.ro"],
  },
};

module.exports = nextConfig;
