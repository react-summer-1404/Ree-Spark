module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs1: "135px",
      xs2: "240px",
      xs3: "280px",
      xs: "320px",
      xs4:"400px",
      sm1: "550px",
      sm2: "500px",
      sm3: "600px",
      sm4: "620px",
      sm: "640px",
      md1: "700px",
      md: "768px",
      lv: "900px",
      lv1: "950px",
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
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
