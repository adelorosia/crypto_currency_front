/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      FONT_VIGA: ["Viga", "sans-serif"],
      FONT_ROBOTO: ["Roboto", "sans-serif"],
      FONT_SALSA: ["Salsa", "cursive"],
      ANTON: ["Anton", "sans-serif"],
    },
    extend: {
      colors: {
        PRIMARY_BLACK:"#020617",
        SECONDARY_BLACK: "#030712",
        PRIMARY_WHITE: "#f8fafc",
        SECONDARY_WHITE:"#f9fafb",
        PRIMARY_BLUE:"#0284c7",
        SECONDARY_BLUE:"#22d3ee",
        PRIMARY_ORANGE:"#ee8425",
        SECONDARY_ORANGE: "#fdba74",
        PRIMARY_RED:"#dc2626",
        SECONDARY_RED: "#ef4444",
        PRIMARY_GRAY:"#737373",
        SECONDARY_GRAY: "#a3a3a3",
      },
    },
  },
  plugins: [],
}