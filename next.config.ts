const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "website-actai.s3.sa-east-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  output: 'standalone'
};

export default nextConfig;
