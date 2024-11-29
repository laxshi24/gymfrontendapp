/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        '-9': '-9',
      },
      blur: {
        '150px': '150px', // Custom blur value
      },
      colors: {
        customOrange: 'rgba(253,120,43,0.69)', // Custom color
      },
    },
  },
  plugins: [],
}

