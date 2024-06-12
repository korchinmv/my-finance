/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APPWRITE_KEY: process.env.APPWRITE_KEY,
  },
};

export default nextConfig;
