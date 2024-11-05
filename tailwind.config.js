/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ssm:'375px',
    sm:'640px',
    md:'768px',
    lg:'1024px',
    extend: {
      fontFamily:{
        bodyFont:["Poppins", "sans-serif"],
        titleFont:["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor:"#F2FAFD",
        lightText:"#c4cfde",
        boxBg:"linear-gradient(145deg, #1e2024, #23272b)",
        designColor:"#ff014f",
      },
      boxShadow :{
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      }
    },
  },
  plugins: [],
}

