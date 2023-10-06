/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main-font' : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}