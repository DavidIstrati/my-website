const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        pointer: "none",
      },
      width: {
        "1/8": "12.5%",
        "1/10": "10%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        blueprint: "url('/blueprint.svg')",
      },
      strokeWidth: {
        3: "3px",
        4: "4px",
        6: "6px",
      },
      fontFamily: {
        "spaceMono": ["var(--font-space-mono)", "mono"],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover"],
    },
  },
  plugins: [],
};
