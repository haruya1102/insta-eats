/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softOrange: {
          100: '#ffcc80', // a bright, vibrant orange
          200: '#ffa726', // a deeper, more vivid orange
        },
      },
    },
  },
  plugins: [],
}
