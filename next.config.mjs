/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://irufano.github.io"
      : "http://localhost:3000",
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};

export default nextConfig;
