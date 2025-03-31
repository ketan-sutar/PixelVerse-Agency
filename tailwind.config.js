/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 25"', 'sans-serif'],
        kanit: ['"Kanit"', 'sans-serif'],
        barlow: ['"Barlow"', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
