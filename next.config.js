/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "itbhssqwjunahaltkmza.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
  // images: {
  //   domains: ["itbhssqwjunahaltkmza.supabase.co"],
  // },
};

module.exports = nextConfig;
