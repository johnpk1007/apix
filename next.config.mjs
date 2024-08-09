/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "charts-static.billboard.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.billboard.com",
        port: "",
      },
    ],
  },
  staticPageGenerationTimeout: 60,
};

export default nextConfig;
