module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:"280px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      colors:{
        primary:"#4ade80",
        text_color:"#0E131F",
        "grey":"#9ca3af"
        
      }
    },
  },
  plugins: [],
}
