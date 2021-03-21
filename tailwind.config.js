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
        "zig": "url('./assets/images/zig.svg')",
        "your-frame": "url('./assets/images/your-frame.jpg')"
      }),

      colors: {
        "shield-black": "#0F0F0E",
        "rvrc-purple": "#532C6D",
        "rvrc-yellow": "#FFCB04",
        "memory-gray": "#333333",
        "memory-black": "#050507",
        "memory-light-gray": "#BDBDBD",
        "frame-gray": "#C2C2C2",
        "frame-gray-end": "#A0A0A0"
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
