/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        'm2xl': { 'max': '1536px' },
        'mxl': { 'max': '1280px' },
        'mlg': { 'max': '1024px' },
        'mmd': { 'max': '768px' },
        'msm': { 'max': '640px' },
      },
    },
  },

  plugins: [],
});
