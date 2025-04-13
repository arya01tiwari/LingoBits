/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Important for toggle-based dark mode
  content: [
    "./index.html", // Ensures Tailwind looks at index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind looks at all JS/TS/JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#0f172a", // Optional: customize dark backgrounds
      },
    },
  },
  plugins: [],
};
