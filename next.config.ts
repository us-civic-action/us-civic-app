

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

const nextConfig = {
  compress: true, // Enable Gzip compression (default, but explicit for clarity)
  poweredByHeader: false, // Save bytes, improve security
  trailingSlash: true, // Required to accurately proxy relative assets

  typescript: {
    ignoreBuildErrors: true,
  },

  async rewrites() {
    return [
      {
        source: '/save-act',
        destination: 'https://save-act-three.vercel.app/',
      },
      {
        source: '/save-act/:path*',
        destination: 'https://save-act-three.vercel.app/:path*',
      },
      {
        source: '/medbill',
        destination: 'https://frontend-flax-nine-11.vercel.app/',
      },
      {
        source: '/medbill/:path*',
        destination: 'https://frontend-flax-nine-11.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
