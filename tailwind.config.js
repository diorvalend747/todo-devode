/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16abf8",
        blacks: "#111111",
        greyBg: "#f4f4f4",
        danger: "#ED4C5C",
        greyText: "#888888",
        softBlack: "#4A4A4A",
        labelVeryHigh: "#ED4C5C",
        labelHigh: "#F8A541",
        labelNormal: "#00A790",
        labelLow: "#428BC1",
        labelVeryLow: "#8942C1",
      },
    },
  },
  plugins: [],
};
