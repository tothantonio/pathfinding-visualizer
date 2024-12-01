/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        traversed: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#add8e6", // Light Blue
            borderRadius: "100%",
          },
          "50%": {
            backgroundColor: "#87ceeb", // Sky Blue
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#4682b4", // Steel Blue
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#1e90ff", // Dodger Blue
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
        path: "path 1.5s cubic-bezier(0, 0, 0.2, 1)",
        wall: "wall 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};