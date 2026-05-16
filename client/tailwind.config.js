/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f4f7f0',
          100: '#e8f0e1',
          200: '#cddfc0',
          300: '#a8c792',
          400: '#7aaa61',
          500: '#5a8f42',
          600: '#4a7a35',
          700: '#3c612c',
          800: '#334e27',
          900: '#2b4122',
          950: '#142010',
        },
        cream: {
          50:  '#fefdf8',
          100: '#fdf9ed',
          200: '#faf2d3',
          300: '#f5e7ab',
          400: '#efd478',
          500: '#e8c14e',
        },
        forest: '#2d4a1e',
        moss:   '#4a6741',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':      'fadeUp 0.7s ease forwards',
        'fade-in':      'fadeIn 0.6s ease forwards',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s ease-in-out infinite',
        'spin-slow':    'spin 12s linear infinite',
        'marquee':      'marquee 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
