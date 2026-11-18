/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#070913',
          900: '#0B0E1A',
          800: '#13192E',
          700: '#1D2645',
        },
        pixel: {
          gold: '#FFD166',
          cyan: '#06D6A0',
          pink: '#EF476F',
          purple: '#9B5DE5',
          blue: '#3A86FF',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        arcade: ['"Silkscreen"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
