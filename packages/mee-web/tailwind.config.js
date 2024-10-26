/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'loading-spin-1': {
          to: { transform: 'rotate(360deg)' },
        },
        'loading-spin-2': {
          '0%': { 'stroke-dasharray': '1, 800', 'stroke-dashoffset': '0' },
          '50%': { 'stroke-dasharray': '400, 400', 'stroke-dashoffset': '-200px' },
          '100%': { 'stroke-dasharray': '800, 1', 'stroke-dashoffset': '-800px' },
        }
      },
      animation: {
        'loading': 'loading-spin-2 1.5s ease-in-out infinite, loading-spin-1 2s linear infinite',
        // 'loading': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
