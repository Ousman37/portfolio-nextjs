/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add more configuration options here

  webpack: (config, { isServer }) => {
    // Add webpack customizations if needed
    // For example:
    if (isServer) {
      // Perform server-side specific configuration
    } else {
      // Perform client-side specific configuration
    }
    return config;
  },
};

module.exports = nextConfig;
