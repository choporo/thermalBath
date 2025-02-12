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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pjjwnwwiuqadctiveuie.supabase.co",
      },
    ],
  },
};

export default nextConfig;
