/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      sm: '0.6rem',
      base: '0.8rem',
      '2xl': '1.0rem'
    },
    extend: {
      fontFamily: {
        'main-font' : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
