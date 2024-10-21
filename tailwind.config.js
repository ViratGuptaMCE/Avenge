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
        headBg:
          "radial-gradient(18% 28% at 24% 50%, #CEFAFFFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #FFFFFF59 6%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #1D919DFF 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #FFFFFFFF 24%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #2DF0149C 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #A12719F5 9%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #6DFFAEF5 24%, #073AFF00 100%),linear-gradient(125deg, #0D0D0DFF 1%, #FF0601FF 100%)",
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
