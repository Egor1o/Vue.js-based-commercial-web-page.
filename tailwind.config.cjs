/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
      },
    },
  },
  plugins: [],
};
