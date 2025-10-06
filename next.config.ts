import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Optimisasi untuk gambar external
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-d9fefb329ddd42289dfb5c7f6499ec92.r2.dev',
        port: '',
        pathname: '/**',
      },
      // Domain berita Indonesia
      {
        protocol: 'https',
        hostname: 'rm.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cnnindonesia.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'money.kompas.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ekonomi.tempo.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'finansial.bisnis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.antaranews.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.republika.co.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tribunnews.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.detik.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn1-production-images-kly.akamaized.net',
        port: '',
        pathname: '/**',
      },
    ],
    // Format gambar yang didukung
    formats: ['image/webp', 'image/avif'],
    // Ukuran gambar yang akan di-generate
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimisasi untuk production
  compress: true,
  poweredByHeader: false,
  // Optimisasi bundle
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
  },
  env: {
    NEWSDATA_API_KEY: process.env.NEWSDATA_API_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true, // lewati ESLint saat build di Vercel
  },
};

export default nextConfig;
