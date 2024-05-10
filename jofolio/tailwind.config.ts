import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#1263aa',
        secondary: '#e94c55',
        tertiary: '#fedc66',
        primaryHover: '#0c4576',
        hover: '#70a1cc',
        hoverResume: '#111827',
        highlight: '#a7f3d0',
        footer: '#18181b',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],

};
export default config;
