/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '-100': '-1',
    },

      fontFamily: {
        rasa: ["Rasa", "serif"],
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

