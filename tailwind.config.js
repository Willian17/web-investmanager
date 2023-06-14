/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          800: '#299D91',
        },
        primary: '#299D91',
      }
    },

  },
  plugins: [],
}

