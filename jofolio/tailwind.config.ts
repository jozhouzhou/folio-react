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
        primary: '#466dff',
        'primary-50': '#DBE1F8',
        'primary-100': '#B8C4F0',
        'primary-400': '#4D6BDA',
        'primary-600': '#2E4083',
        'primary-700': '#1F2B57',
        'background-50': '#F2F4F6',
        background: '#EBEBEB',
        secondary:'#373737',
        secondaryRed: '#E94C55',
        secondaryYellow: '#fedc66',
        highlight: '#bccad2',
        primaryText: '#353633',
        primaryHover: '#0c4576',
        hover: '#70a1cc',
        hoverResume: '#111827',
        
        footer: '#18181b',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],

};
export default config;
