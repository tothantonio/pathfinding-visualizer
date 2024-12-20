/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        traversed: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#60a5fa", 
            borderRadius: "100%",
          },
          "50%": {
            backgroundColor: "#3b82f6", 
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#2563eb", 
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#60a5fa", 
          },
        },
        path: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#98fb98", // Pale Green
            borderRadius: "100%",
          },
          "25%": {
            backgroundColor: "#ff6347", // Tomato
          },
          "50%": {
            transform: "scale(1.2)",
            backgroundColor: "#ffd700", // Gold
          },
          "75%": {
            backgroundColor: "#ffa500", // Orange
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#32cd32", // Lime Green
          },
        },
        wall: {
          "0%": {
            transform: "scale(0.7)",
            backgroundColor: "#d3d3d3", // Light Gray
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#a9a9a9", // Dark Gray
          },
        },
      },
      animation: {
        traversed: "traversed 0.5s cubic-bezier(0, 0, 0.2, 1)",
        path: "path 2s cubic-bezier(0, 0, 0.2, 1)",
        wall: "wall 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};