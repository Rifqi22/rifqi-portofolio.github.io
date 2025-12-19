/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#272829",
        secondary: "#ffffff",
        tertiary: "#42f5c2",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
