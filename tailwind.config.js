/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      ...colors,
      primary: "#fafafa",
      secondary: "#393A47",
      accent: "#5cecffff",
      bgloader: "#df00df",
      menucolor: "white",
    },
    extend: {},
  },
  plugins: [],
};
