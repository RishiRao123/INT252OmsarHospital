/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      colors: {
        primary: "#f58634",
      },
    },
  },
  plugins: [],
};
//#f78839,#fc8d3d,#f58634
//#1e0e87
