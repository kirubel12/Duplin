/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins':  ['var(--font-poppins)']
      },
      fontWeight: {
        200: '200',
        400: '400',
        600: '600',
        800: '800'
      }
    },
  },
  plugins: [],
}