/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('./assets/hero-1.webp')",
        hero2: "url('./assets/hero-2.webp')",
        hero3: "url('./assets/hero-3.webp')",
        hero4: "url('./assets/hero-4.webp')",
      },
    },
  },
  plugins: [],
};
