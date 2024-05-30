/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001F3F", // Navy Blue
        secondary: "#007BFF", // Electric Blue
        hover: "#00aaff", // Blue for hover states
        accent: "#39CCCC", // Teal
        background: "#FFFFFF", // White
        text: "#333333", // Dark Gray
        border: "#DDDDDD", // Light Gray
        lightGray: "#F8F9FA", // Light Gray for background
        primaryRed: "#FF4136", // Red for error messages
        linkBackground: "#CDE7F3", // Light Blue for link backgrounds
        darkGray: "#555555", // Slightly lighter gray for text and elements
        lightAccent: "#BEE3F8", // Light blue for subtle accents
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },

    maxWidth: {
      custom: "1200px",
    },
  },
  plugins: [],
};
