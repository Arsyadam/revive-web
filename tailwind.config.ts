import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary: "#1BAE80",
      },
    },
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
