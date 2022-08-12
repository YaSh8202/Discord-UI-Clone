/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightGray: "#f6f6f6",
        glowingRed: "#ed4245",
        discordBlue: {
          100: "#5865f2",
          200: "#404eed",
        },
        Gray: {
          100: "#4f545c",
          200: "#36393f",
          300: "#2f3136",
          400: "#292b2f",
          500: "#202225",
          600: "#23272a",
        },
        green: "#3ba55d",
        orange: "#f26522",
      },
      fontFamily: {
        heading: ["Ginto", "Helvetica Neue", "Helvetica", "sans - serif"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
