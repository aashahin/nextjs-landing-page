import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Majna - AI-Powered E-Commerce Platform',
    short_name: 'Majna',
    description:
      'Transform your online business with Majna, the next-generation e-commerce platform that combines power with simplicity. Built to replace traditional solutions, Majna offers everything you need to create, manage, and scale your online store or marketplace.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#a5b68d',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
