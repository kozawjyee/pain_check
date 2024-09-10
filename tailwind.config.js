/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.html',
    './src/**/*.{tsx,ts}'
  ],
  theme: {
    screens: {
      mbsm: "360px",
      mblg: "400px",
      tablet: "450px",
      laptopsm: "1024px",
      laptoplg: "1280px",
      desktop: "1536px"
    },
    colors: {
      primary: "var(--primary-color)",
      containerbg: "var(--background-main)",
      bordercolor: "var(--background-dark)",
      hoverColor: "var(--hover-color)",
      activeColor: "var(--active-color)",
      partBg: "var(--background-part)",
    },
    extend: {},
  },
  plugins: [],
}

