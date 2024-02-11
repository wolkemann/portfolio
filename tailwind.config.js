/** @type {import('tailwindcss').Config} */
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
      primary: "#fafafa",
      secondary: "#393A47",
      accent: "#5cecffff",
      link: "#f4ff61",
      bgloader: "#df00df",
    },
    extend: {},
  },
  plugins: [],
};
