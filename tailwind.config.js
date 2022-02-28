const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    colors: {
      primary: "#22346d",
      secondary: "#68DFE2",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.lime,
      red: colors.red,
      yellow: colors.amber,
    },
    extend: {},
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Georama", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
