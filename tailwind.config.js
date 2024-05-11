/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      backgroundColor: "#35daec",
      "about-title": "#ff61c6",
    },
    extend: {},
  },
  plugins: [],
};
