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
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
        '8': '8 8 0%',
        '9': '9 9 0%',
      },
      textColor: {
        'red': '#ee3131',
        'black': '#505050',
        'white': '#ffffff',
        'nav': '#1d1d1d',
        'collection': '#1c1d1d',
        'tab': '#151515',
        'price': '#333333',
        'product': '#2b3743',
        'yellow': '#ffb400',
        'icon': '#2a2a2a',
        'time': '#8d8d8d'
      },
      backgroundColor: {
        'red': '#ee3131',
        'white': '#ffffff',
        'yellow': '#ffb400',
        'info': '#00d5d5',
        'icon': '#2a2a2a',
        'time': '#f4f4f4'
      },
      borderColor: {
        'red': '#ee3131',
        'icon': '#2a2a2a'
      },
      keyframes: {
        'slide-top': {
          '0%': { transform: 'translateY(0)', '-webkit-transform': 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)', '-webkit-transform': 'translateY(-50px)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        'slide-top': 'slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'fade-in': 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      }
    },
  },
  plugins: [],
}