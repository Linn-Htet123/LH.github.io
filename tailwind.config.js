/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      fontFamily:{
        nav:['Red Hat Mono']
      },
      backgroundImage: {
        'hero-pattern': "url('assets/destination/background-destination-desktop.jpg')",
      }
    },

  },
  plugins: [],
}
