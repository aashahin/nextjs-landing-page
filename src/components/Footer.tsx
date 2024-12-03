'use client';
import React from 'react';
import { Github, Twitter } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='mt-8 border-t bg-white py-8' role='contentinfo'>
      <div className='mx-auto max-w-4xl px-4'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='flex items-center justify-between gap-x-2'>
            <Image
              src='/logo.png'
              alt='Logo'
              width={32}
              height={32}
              className='object-contain transition-transform duration-500 group-hover:scale-110'
              priority
            />
            <h3 className='text-xl font-semibold text-gray-800'>Majna.</h3>
          </div>

          <a
            href='mailto:support@example.com'
            className='text-gray-600 transition-colors hover:text-[var(--accent)]'
            aria-label='Email support at support@majna.shop'
          >
            support@majna.shop
          </a>

          <div className='flex space-x-6'>
            <a
              href='https://github.com/aashahin'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 transition-colors hover:text-gray-600'
              aria-label='Visit our GitHub profile'
            >
              <Github size={20} aria-hidden='true' />
            </a>
            <a
              href='https://twitter.com/abshahin8'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 transition-colors hover:text-gray-600'
              aria-label='Visit our Twitter profile'
            >
              <Twitter size={20} aria-hidden='true' />
            </a>
          </div>

          <p className='text-sm text-gray-400'>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
