'use client';
import React, { useState } from 'react';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Dialog from '@/components/ui/dialog';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch(
          `https://majna.abshahin.workers.dev/subscribe?email=${email}`
        );

        if (response.ok) {
          setShowDialog(true);
          setTimeout(() => {
            setShowDialog(false);
            setEmail('');
          }, 3000);
        } else {
          const error = await response.json();
          setError(error.message);
        }
      } catch (error) {
        setError('Failed to subscribe. Please try again.');
        return error;
      }
    }
  };

  return (
    <div className='min-[calc(100vh - __-64px)] relative overflow-hidden'>
      {/* Improved animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='animate-slow-pulse-4 absolute right-0 top-0 h-96 w-96 rounded-full bg-green-200 opacity-20 blur-3xl' />
        <div className='animate-slow-pulse-5 absolute -left-32 top-96 h-96 w-96 rounded-full bg-[var(--accent)] opacity-20 blur-3xl' />
        <div className='animate-slow-pulse-6 absolute bottom-0 right-32 h-96 w-96 rounded-full bg-purple-200 opacity-20 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8'>
        {/* Enhanced animated badge with hover effect */}
        <div className='group inline-flex cursor-pointer items-center rounded-full border bg-white/80 px-4 py-2 text-sm font-medium text-[var(--accent)] backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg'>
          <Zap className='mr-2 h-4 w-4 animate-[pulse_2s_infinite]' />
          <span className='bg-gradient-to-r from-emerald-600 to-[var(--accent)] bg-clip-text text-transparent'>
            AI-Powered E-Commerce Platform
          </span>
        </div>

        {/* Enhanced heading with gradient */}
        <h1 className='mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
          Transform Your{' '}
          <span className='bg-gradient-to-r from-emerald-600 to-[var(--accent)] bg-clip-text text-transparent'>
            Online Business
          </span>
        </h1>

        {/* Enhanced description with better typography */}
        <p className='mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl'>
          Experience the future of e-commerce with Majna. Our AI-powered
          platform combines enterprise-level features with intuitive simplicity,
          helping you create, manage, and scale your online store effortlessly.
        </p>

        {/* Enhanced CTA section */}
        <div className='mt-12 flex flex-col items-center space-y-6'>
          <div className='flex items-center space-x-3'>
            <span className='text-lg font-semibold text-gray-900'>
              Limited Time Offer
            </span>
            <div className='relative'>
              <span className='relative inline-flex rounded-full bg-emerald-100 px-3 py-1 text-lg font-bold text-emerald-700'>
                30% OFF
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className='mx-auto w-full max-w-md space-y-4'
          >
            <div className='relative flex gap-4'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='h-12 w-full rounded-lg border border-gray-300 px-4 text-base shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-20'
                required
              />
              <Button type='submit' className='group h-12 min-w-[160px]'>
                <span className='flex items-center gap-2'>
                  Get Discount
                  <ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
                </span>
              </Button>
            </div>

            {error && <p className='text-sm text-red-500'>{error}</p>}

            <p className='text-sm text-gray-500'>
              By signing up, you agree to receive our newsletter.{' '}
              <span className='text-[var(--accent)] hover:underline'>
                No spam, unsubscribe at any time.
              </span>
            </p>
          </form>
        </div>

        {/* Trust indicators */}
        <div className='mt-16 flex flex-wrap items-center justify-center gap-8'>
          {['Institutional stability', '99.9% Uptime', '24/7 Support'].map(
            (item) => (
              <div
                key={item}
                className='flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm'
              >
                <CheckCircle className='h-4 w-4 text-emerald-500' />
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Simple Dialog */}
      {showDialog && (
        <Dialog isOpen onClose={() => setShowDialog(false)}>
          <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div
              className='fixed inset-0 bg-black/50'
              onClick={() => setShowDialog(false)}
            />
            <div className='relative rounded-lg bg-white p-6 shadow-lg'>
              <div className='flex flex-col items-center gap-4'>
                <div className='rounded-full bg-emerald-100 p-3'>
                  <CheckCircle className='h-6 w-6 text-emerald-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Thank you for signing up!
                </h3>
                <p className='text-center text-gray-600'>
                  Now that you&apos;ve signed up, you can claim your discount
                  code.
                </p>
                <Button
                  onClick={() =>
                    (window.location.href =
                      'https://ashahin.gumroad.com/l/majna')
                  }
                  className='mt-2 bg-gray-900 hover:bg-gray-800'
                >
                  Claim your discount
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Hero;
