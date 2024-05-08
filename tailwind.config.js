/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors : {
        primary: '#6FC07A',
        secondary:{
          100:'#8dbe94',
          200:'#51925a',
          300: '#4e8c57'
        }
      },
      fontFamily: {
        body: ["Open Sans"]
      }
    },
  },
  plugins: [],
}

