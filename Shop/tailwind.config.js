/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        brandYellow: '#FEC108',
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
      
    },
  },
  plugins: [],
}

