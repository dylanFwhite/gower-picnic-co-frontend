/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sandal-yellow": "#F6C157",
      },
      maxHeight: {
        700: "700px",
        400: "400px",
        600: "600px",
        1000: "1000px",
      },
      minHeight: {
        700: "700px",
      },
      height: {
        700: "700px",
        600: "600px",
        525: "525px",
      },
    },
  },
  plugins: [],
};
