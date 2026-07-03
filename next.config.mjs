/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/expertise",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/expertise/:path*",
        destination: "/services/:path*",
        permanent: true,
      },
      {
        source: "/perspectives",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
