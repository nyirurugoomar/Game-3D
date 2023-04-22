/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily :{
      'Poppins' : ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'orange': '#FA9021',
        'black-white': 'rgba(255, 255, 255, 0.11)'
      },
      backgroundImage: {
        'tool-background': "url('/src/assets/tools background.png')",
      }
    },
  },
  plugins: [],
}