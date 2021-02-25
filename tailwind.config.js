module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero": "url('./assets/images/hero.jpg')"
      })
    },
    // add Apple's system font and Segoe UI here
    fontFamily: {
      sans: ["Maison Neue", "sans-serif"],
      extended: ["Maison Neue Extended", "sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
