/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",  // Indigo
        secondary: "#3b82f6", // Blue
        accent: "#fbbf24",    // Yellow
        bgLight: "#f9fafb",
        textDark: "#1f2937",
        textGray: "#374151",
      },
    },
  },
  plugins: [],
};
