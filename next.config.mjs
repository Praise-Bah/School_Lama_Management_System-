/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  // Suppress Recharts defaultProps warnings
  webpack: (config, { dev }) => {
    if (dev) {
      const originalWarn = console.warn;
      console.warn = (...args) => {
        if (
          typeof args[0] === 'string' &&
          (args[0].includes('defaultProps will be removed') ||
           args[0].includes('Support for defaultProps will be removed'))
        ) {
          return;
        }
        originalWarn(...args);
      };
    }
    return config;
  },
};

export default nextConfig;
