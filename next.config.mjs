// import withSvgr from "next-svgr";

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
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  formats:["image/avif", "image/webp"],
};

export default nextConfig;
