/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "arabic-light": "arabicLight",
        "arabic-Regular": "arabicRegular",
        "arabic-bold": "arabicBold",
        "Shams": "Shams",
        "Samim": "samim",
        "Morabba-Bold": "Morabba-Bold",
        "Morabba-Light": "Morabba-Light",
        "Morabba-Regular": "Morabba-Regular",
      },
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      backgroundImage: {
        "header-desktop": "url('../images/headerBgDesktop.webp')",
        "header-mobile": "url('../images/headerBgMobile.webp')",
      },
      boxShadow: {
        normal: " 0px 1px 10px 0 rgba(0,0,0,0.2)"
      },
      spacing: {
        30: "7.5rem",
        35: "8.5rem",
        50: "12.5rem",
      },

      container: {
        center: "true",
        padding: {
          DEFAULT: "10px",
          md: "1rem"
        },
      },

    },

    screens: {
      "xs": "480px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    plugins: [
    ],
  },
}

