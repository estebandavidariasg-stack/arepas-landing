/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amarillo:  '#F5A623',
        verde:     '#2B4E1F',
        verde_claro: '#3D6B2C',
        crema:     '#FFF8EC',
        naranja:   '#ee8308',
        espresso: '#2C1810',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        modak:   ['Modak', 'cursive'],
        body:    ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}