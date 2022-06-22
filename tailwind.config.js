/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
       backgroundImage: {
        'wallpaper': "url('/assets/images/wallpaper5.jpg')",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      screens: {
        'm': {'max': '634px'},
        'mi': {'max': '820px'},
        'l': {'max': '980px'}
      }
    },
  },
  plugins: [],
}
