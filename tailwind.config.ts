import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors:{
        primary: {
          50: "#FFFFFF",
          100: "#67E8BC",
          200: "#1C352D",
          300: "#1A2421"
        },
        black: "#18181A"
      },

      fontFamily: {
        inter: ["Nunito", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
