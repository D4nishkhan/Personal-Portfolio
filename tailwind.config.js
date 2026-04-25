/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FFF8F3',
          100: '#FFEEE3',
          200: '#FFD5C2',
          300: '#FFBCA0',
          400: '#FFB89A',
          500: '#FFA47E',
          600: '#FF8F62',
        },
        lavender: {
          50: '#F8F4FF',
          100: '#F0E9FF',
          200: '#E6E6FA',
          300: '#D4C5F9',
          400: '#C5B4E3',
          500: '#B39DD8',
          600: '#9B86C7',
        },
        'warm-gray': {
          50: '#FAF9F7',
          100: '#F5F4F1',
          200: '#E8E6E1',
          300: '#D3D0C9',
          400: '#B8B3AA',
          500: '#9D988E',
          600: '#8B8680',
          700: '#6B6760',
          800: '#2D2A26',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-peach': '0 0 40px rgba(255, 184, 154, 0.3)',
        'glow-lavender': '0 0 40px rgba(197, 180, 227, 0.3)',
        'glow-peach-lg': '0 0 60px rgba(255, 184, 154, 0.4)',
        'glow-lavender-lg': '0 0 60px rgba(197, 180, 227, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.3',
        'relaxed': '1.6',
      },
    },
  },
  plugins: [],
}
