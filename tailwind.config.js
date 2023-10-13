module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: "#1F2028",
        bodyColorLight: "#282931",
        textGreen: "#F8B179",
        light: "#2e3039",
        base: '#eeeeee',
        dark: '#1f2028',
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
        codeColor: "hsla(44,6%,50%,.15)"
      },
      boxShadow: {
        navbarShadow:"0 10px 30px -10px rgba(2,12,27,0.7)"
      }
    },
    fontFamily: {
      sans: ["'Montserrat'"],
      mono: ["'Inconsolata'"]
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
