export default {
  darkMode: "class", // Important for toggle-based dark mode
  content: [
    "./bits/index.html",
    "./bits/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#0f172a", // Optional: customize dark backgrounds
      }
    },
  },
  plugins: [],
}

