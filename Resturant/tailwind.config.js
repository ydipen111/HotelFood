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
        '2xl': { 'max': '1536px' },
        'xxl': { 'max': '1280px' },
        'llg': { 'max': '1024px' },
        'mmd': { 'max': '768px' },
        'ssm': { 'max': '640px' },
      },
    },
  },

  plugins: [],
});
