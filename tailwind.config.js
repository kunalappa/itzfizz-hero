/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        concrete: "#d9dde0", // page background
        asphalt: "#262a2e",  // road surface
        ink: "#14181b",      // main text
        muted: "#53595e",    // secondary text
        mark: "#e9b824",     // lane markings
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
