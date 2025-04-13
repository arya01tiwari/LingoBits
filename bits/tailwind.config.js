export default {
  darkMode: "class", // Important for toggle-based dark mode
  content: [
    "./bits/index.html",  // For index.html in the bits folder
    "./bits/src/**/*.{js,ts,jsx,tsx}",  // For React components in the bits/src folder
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


