module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#cfd400',
        'customViolet': '#3c255b',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
