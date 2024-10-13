/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#FF3399",
        "secondary": {
          100: "#424242",
          200: "#333333",
        },
        "background": "#FBFBFE",
      },
    },
  },
  plugins: [],
}

