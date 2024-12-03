'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PreviewModal from './PreviewModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Feedback', href: 'https://majna.canny.io', external: true },
    {
      name: 'Roadmap',
      href: 'https://sharing.clickup.com/9015256124/b/6-901503323024-2/board',
      external: true,
    },
    { name: 'Pricing', href: '#pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-10 bg-white/80 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'border-b border-gray-100 bg-white/80 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className='mx-auto max-w-6xl px-4 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo */}
            <Link href='/' className='group relative flex items-center gap-x-2'>
              <div className='relative overflow-hidden rounded-[var(--rounded)]'>
                <Image
                  src='/logo.png'
                  alt='Logo'
                  width={32}
                  height={32}
                  className='object-contain transition-transform duration-500 group-hover:scale-110'
                  priority
                />
              </div>
              <div className='relative'>
                <h1 className='text-xl font-semibold text-gray-900'>
                  Majna<span className='text-[#a5b68d]'>.</span>
                </h1>
                <div className='absolute -bottom-1 left-0 h-[2px] w-0 bg-[#a5b68d] transition-all duration-300 ease-out group-hover:w-full' />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:block'>
              <ul className='flex items-center gap-x-8'>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='group relative flex items-center gap-x-1 px-1 py-2'
                    >
                      <span className='text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900'>
                        {item.name}
                      </span>
                      {item.external && (
                        <ExternalLink className='h-3 w-3 text-gray-400 transition-colors group-hover:text-gray-600' />
                      )}
                      <span className='absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-[#a5b68d] transition-transform duration-300 ease-out group-hover:scale-x-100' />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Buttons */}
            <div className='hidden items-center gap-x-4 md:flex'>
              <Button
                onClick={() => setIsPreviewDialogOpen(true)}
                variant='link'
              >
                Preview
              </Button>
              <Button href='https://ashahin.gumroad.com/l/majna'>
                Purchase now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden'
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-full transform overflow-hidden bg-white transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? 'max-h-screen border-b border-gray-100 shadow-lg'
              : 'max-h-0'
          }`}
        >
          <nav className='px-4 pb-6'>
            <div className='space-y-3 py-4'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900'
                >
                  {item.name}
                  {item.external && (
                    <ExternalLink className='h-4 w-4 opacity-50' />
                  )}
                </Link>
              ))}
              <div className='mt-6 space-y-3 border-t border-gray-100 pt-6'>
                <Button
                  onClick={() => {
                    setIsPreviewDialogOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  variant='secondary'
                  className='w-full text-left'
                >
                  Preview
                </Button>
                <Button
                  href='https://ashahin.gumroad.com/l/majna'
                  className='block w-full text-center'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Purchase now
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Preview Dialog */}
      <PreviewModal
        isPreviewDialogOpen={isPreviewDialogOpen}
        setIsPreviewDialogOpen={setIsPreviewDialogOpen}
      />
    </>
  );
};

export default Header;
