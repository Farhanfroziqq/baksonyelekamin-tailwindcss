/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins'],
      },
      colors: {
        'primary1': "#041b2b",
        'primary2': "#f5c10c"
      },
    },
  },
  plugins: [],
}
