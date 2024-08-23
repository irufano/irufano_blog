/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "https://irufano.github.io" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
