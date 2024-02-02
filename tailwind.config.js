/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Poppins', 'sans-serif'],
    },
    extend: {
      width: {
        'main': '1220px',
      },
      textColor: {
        'red': '#ee3131',
        'black': '#505050',
        'white': '#ffffff',
        'nav': '#1d1d1d',
        'collection': '#1c1d1d',
        'tab': '#151515',
        'price': '#333333',
        'product': '#2b3743'
      },
      backgroundColor: {
        'red': '#ee3131',
        'white': '#ffffff'
      },
      borderColor: {
        'red': '#ee3131'
      }
    },
  },
  plugins: [],
}