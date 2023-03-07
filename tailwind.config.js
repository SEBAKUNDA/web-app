/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily:{
        myfont:'Crete Round'
      },
      colors:{
        navyblue:'#000080',
      }
    },
  },
  plugins: [],
}
