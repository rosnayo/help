/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'icono-slide':'#131517',
        'secondary': {
          100: '#E1E1E1',
          200: '#D2D2D2',
          300: '#C3C3C3',
          400: '#B4B4B4',
          500: '#A5A5A5',
          600: '#969696',
          700: '#878787',
          800: '#787878',
          900: '#5A5A5A',
        },
        'tercero':'#131517',
        'titulo-grilla':'#FFFFFF',
        'white':'#FFFFFF',
        }, 
  },
  plugins: [require("@headlessui/tailwindcss")],
}
