module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      nn: "240px", 
      mm: "280px",
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgg: "1152px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Isans: ['Isans'],
      },
    },
  },
  plugins: [],
};