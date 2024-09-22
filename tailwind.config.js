/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        jaini: ['Jaini', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        happyMonkey: ['Happy Monkey', 'cursive'],
      },
      backgroundImage:{
        "Siuu" : "url(https://res.cloudinary.com/dmnjig3al/image/upload/v1726829001/Ticketing%20Project/fshpdifvcgz6kftv1mla.jpg)",
      },
      aspectRatio: {
        '5/3': '5 / 3',
        '4/3': '4 / 3',
        '3/3': '3 / 3',
        '2/3' : '2 / 3',
      },
    },
  },
  plugins: [typography,require('flowbite/plugin')],
}

