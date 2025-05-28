/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006241', // Starbucks green
          dark: '#004C33',
          light: '#007A52'
        },
        secondary: {
          DEFAULT: '#101010', // Rich black
          light: '#1F1F1F'
        },
        accent: {
          DEFAULT: '#CBA258', // Gold accent
          light: '#D4B06C'
        }
      }
    },
  },
  plugins: [],
};