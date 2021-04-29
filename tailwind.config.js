module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'group-focus'],
      borderWidth: ['last']
    }
  },
  plugins: [],
  purge: ['./src/components/**/*.vue', './src/pages/**/*.vue', './src/layouts/**/*.vue', './src/**/*.vue'],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
}
