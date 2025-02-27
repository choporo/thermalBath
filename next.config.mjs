/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    staleTimes: {
      dynamin: 0,
      static: 180
    }
  },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pjjwnwwiuqadctiveuie.supabase.co",
      },
    ],
    formats:["image/avif", "image/webp"],
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  swcMinify: true
};

export default nextConfig;
