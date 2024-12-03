import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)'],
        sans: ['var(--font-chillax)'],
      },
      fontSize: {
        xs: '0.875rem', // 14px
        sm: '1rem', // 16px
        base: '1.125rem', // 18px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        '2xl': '1.875rem', // 30px
        '3xl': '2.25rem', // 36px
        '4xl': '3rem', // 48px
        '5xl': '4rem', // 64px
        '6xl': '5rem', // 80px
        '7xl': '6rem', // 96px
        '8xl': '7rem', // 112px
        '9xl': '9rem', // 144px
      },
      keyframes: {
        slowPulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        'slow-pulse-4': 'slowPulse 4s ease-in-out infinite',
        'slow-pulse-5': 'slowPulse 5s ease-in-out infinite',
        'slow-pulse-6': 'slowPulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
