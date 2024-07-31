/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backColor: {
          1: "#e4eaec1a",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        header: "5% repeat(2,1fr) 5%",
        main: "5% 1fr 1fr 1fr 5%",
        main_small: "5% 1fr 5%",
        detail: "1fr 2fr",
      },
      gridTemplateRows: {
        main_small: "10% 2fr 1fr 6%",
      },
      fontFamily: {
        descript: ["Descript", "sans-serif"],
        sketch: ["Sketch", "serif"],
        avengers: ["Avengers"],
      },
      textShadow: {
        h1: "3px 3px 5px grey",
        stick: "3px 3px 0px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        { "text-shadow": (value) => ({ textShadow: value }) },
        { values: theme("textShadow") }
      );
    }),
  ],
};
