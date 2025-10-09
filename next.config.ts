import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Transpile packages yang perlu di-compile
  transpilePackages: ['@preline/carousel', 'preline'],
  
  images: {
    // Gunakan host yang kamu butuhkan aja
    remotePatterns: [
      // CDN kamu (R2) — idealnya pakai custom domain cdn.kgp.co.id
      { protocol: 'https', hostname: 'pub-d9fefb329ddd42289dfb5c7f6499ec92.r2.dev', pathname: '/**' },

      // Stock images
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },

      // Sumber berita yang sering kamu ambil gambarnya
      { protocol: 'https', hostname: 'rm.id', pathname: '/**' },
      { protocol: 'https', hostname: 'www.cnnindonesia.com', pathname: '/**' },
      { protocol: 'https', hostname: 'money.kompas.com', pathname: '/**' },
      { protocol: 'https', hostname: 'ekonomi.tempo.co', pathname: '/**' },
      { protocol: 'https', hostname: 'finansial.bisnis.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.antaranews.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.republika.co.id', pathname: '/**' },
      { protocol: 'https', hostname: 'www.tribunnews.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.detik.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn1-production-images-kly.akamaized.net', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
    // Sesuaikan dengan desain kamu (Tailwind breakpoints umum)
    deviceSizes: [360, 640, 768, 1024, 1280, 1536], // buang 1920/2048/3840 kalau jarang perlu
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
  },

  // Jangan expose secret ke client. Ini hanya jadi default build-time var.
  // Di Vercel/GitLab, tetap set ENV di dashboard/CI Variables.
  env: {
    NEWSDATA_API_KEY: process.env.NEWSDATA_API_KEY,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
