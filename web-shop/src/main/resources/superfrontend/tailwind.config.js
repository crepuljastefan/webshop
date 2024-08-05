/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        helveticaNow: ['"Helvetica Now Display Medium"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
