/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue":"#5840ba",
        "background":"#F8FAFC",
        "pair":"#a4db75"
      }
    },
  },
  plugins: [],
}