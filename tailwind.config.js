module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      colors:{
        primary:"#4ade80",
        text__color:"#0E131F"
        
      }
    },
  },
  plugins: [],
}
