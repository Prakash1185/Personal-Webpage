/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "bluee": "#5840ba",
        "background": "#fbfcf8",
        "pair": "#8adb44"
      },

    },
  },
  plugins: [],
}