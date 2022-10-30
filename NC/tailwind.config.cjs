/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monsieur: ['"Monsieur La Doulaise"', "cursive"],
      },
    },
  },
  plugins: [],
};
