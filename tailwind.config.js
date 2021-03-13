module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero": "url('./assets/images/hero.jpg')",
        "shield": "url('./assets/images/shield.jpg')",
        "space": "url('./assets/images/space.jpg')",
        "zig": "url('./assets/images/zig.svg')"
      }),

      colors: {
        "shield-black": "#0F0F0E",
        "rvrc-purple": "#532C6D",
        "rvrc-yellow": "#FFCB04",
        "memory-gray": "#333333",
        "memory-black": "#050507"
      }
    },
    // TODO: add Apple's system font and Segoe UI here
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
