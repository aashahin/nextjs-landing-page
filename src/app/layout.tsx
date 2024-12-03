import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header';

import './globals.css';

const chillaxFont = localFont({
  src: [
    {
      path: '/fonts/chillax/Chillax-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '/fonts/chillax/Chillax-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/chillax/Chillax-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/chillax/Chillax-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/chillax/Chillax-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/chillax/Chillax-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  fallback: ['sans-serif'],
  preload: true,
  variable: '--font-chillax',
});

const JetbrainsMono = localFont({
  src: [
    {
      path: '/fonts/jetbrains/JetBrainsMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  fallback: ['monospace'],
  preload: true,
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Majna - AI-Powered E-Commerce Platform',
};

const title = 'Majna - AI-Powered E-Commerce Platform';
const description =
  'Transform your online business with Majna, the next-generation e-commerce platform that combines power with simplicity. Built to replace traditional solutions, Majna offers everything you need to create, manage, and scale your online store or marketplace.';
const ogImage =
  'https://pub-5e2c8cecebcf4985b55f09741b2f1382.r2.dev/Poster%20-%20Majna%20(1).png';
const url = 'https://majna.shop';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='description' content={description} />
        <meta name='author' content='Abdelrahman Shaheen' />
        <meta
          name='keywords'
          content='e-commerce platform, online store builder, majna, digital commerce, business solutions, ecommerce software, opencart alternative, woocommerce alternative, shopify alternative, magento alternative, prestashop alternative, headless commerce, omnichannel retail, payment processing, inventory management, dropshipping'
        />

        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />

        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='apple-mobile-web-app-title' content='Majna' />
        <meta name='application-name' content='Majna' />
        <meta name='mobile-web-app-capable' content='yes' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:site_name' content='Majna' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:creator' content='@abshahin8' />

        <meta property='og:locale' content='en_US' />
        <meta name='language' content='English' />

        <link rel='icon' type='image/png' href='/logo.png' />
      </head>
      <body
        className={`${chillaxFont.variable} ${chillaxFont.variable} ${JetbrainsMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
