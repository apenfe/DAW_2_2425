/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './interfaces/tema-5/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3ab7f9',
          DEFAULT: '#1e40af',
          dark: '#1c3d8c'
        }
      }
    },
  },
  plugins: [],
}

