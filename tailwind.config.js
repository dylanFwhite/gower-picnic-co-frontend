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
      },
      height: {
        700: "700px",
        525: "525px",
      },
    },
  },
  plugins: [],
};
