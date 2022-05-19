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
        "grey":"#9ca3af",
        "red":"rgb(239 68 68)",
        "green":"rgb(34 197 94)",
        "grey":"rgb(115 115 115)",
        "selected":"rgb(212 212 212)"

      },
      spacing:{
        "144":"37rem",
      }
    },

  },
  plugins: [],
}
