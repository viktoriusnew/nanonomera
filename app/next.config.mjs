const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && { output: 'standalone' }),
  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'kuhnisura.ru' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
