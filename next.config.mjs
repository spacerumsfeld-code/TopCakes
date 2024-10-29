/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:
    {
      remotePatterns: [
          {
            protocol: 'https',
            hostname: 'top-cakes-nickpapadakis-bucket-cesfwwdv.s3.us-east-1.amazonaws.com',
          }
          ,
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          }
        ],
    }
};

export default nextConfig;
