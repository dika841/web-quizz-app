/** @type {import('tailwindcss').Config} */
import {colors} from './design-token.js';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors
  },
  plugins: [],
}
