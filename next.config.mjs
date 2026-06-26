/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/expertise",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/expertise/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
