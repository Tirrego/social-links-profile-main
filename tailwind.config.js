/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {    
      colors: {
      "OffBlack": "hsl(0, 0%, 8%)",
      "DarkGrey": "hsl(0, 0%, 12%)",
      "Grey": "hsl(0, 0%, 20%)",
      "Green": "hsl(75, 94%, 57%)"
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
    }
  }},

  plugins: [],
}