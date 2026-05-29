import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FBF8F3',
          100: '#F6F1E7',
          200: '#EFE6D2',
          300: '#E4D5B5',
          400: '#D4BE8E',
        },
        gold: {
          300: '#D4B981',
          400: '#C9A96A',
          500: '#B08D57',
          600: '#8E6E3F',
          700: '#6B5230',
        },
        emerald: {
          deep: '#1F3A2E',
          night: '#13241C',
        },
        ink: {
          DEFAULT: '#2A2520',
          soft: '#4A4038',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        script: ['var(--font-pinyon)', 'cursive'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra: '0.5em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
