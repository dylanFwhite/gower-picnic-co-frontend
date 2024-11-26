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
        525: "525px",
        600: "600px",
        1000: "1000px",
      },
      maxWidth: {
        700: "700px",
        1000: "1000px",
      },
      minHeight: {
        700: "700px",
        525: "525px",
        600: "600px",
        800: "800px",
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
