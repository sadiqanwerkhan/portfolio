import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#6a8ec8',
          100: '#5780c1',
          200: '#4572ba',
          300: '#3e66a8',
          400: '#375b95',
          500: '#34568b',
          600: '#305082',
          700: '#294470',
          800: '#22395d',
          900: '#1c2e4a'
        },
        'secondary': {
          50: '#01fed8',
          100: '#01e4c2',
          200: '#01cbad',
          300: '#019882',
          400: '#019882',
          500: '#018673',
          600: '#017f6c',
          700: '#016556',
          800: '#004c41',
          900: '#00332b'
        },
        'third': {
          500: '#017f6c'
        },
        'fontColor': '#14213D',
        'fontColor2': '#6B7385',
      }
    },
    fontFamily: {
      Alkatra: "cursive",
      VT323: "monospace",
      ProductSans: "sans-serif",
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    nextui(),
  ],
}
export default config
