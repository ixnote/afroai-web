/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone", // This will ensure server-side rendering
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@mui/x-charts"],
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
