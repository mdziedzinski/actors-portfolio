/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('./assets/unsplash1.jpg')",
      },
    },
  },
  plugins: [],
};
