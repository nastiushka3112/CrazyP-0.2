/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      main: "Gilroy",
      second: "Gilroy-semibold",
      body: "Benegraphic",
      about: "QuigleyWiggly",
      mainText: "Passion One",
      textSec: "Roboto",
    },
    extend: {
      backgroundImage: {
        Frame6: "url('/src/Components/Theme/Img/Frame6.png')",
        samurai: "url('/src/Components/Theme/Img/samurai.png')",
        headImage: "url('/src/Components/Theme/Img/background2.png')",
        variant1: "url('/src/Components/Theme/Img/variant1.png')",
        variant2: "url('/src/Components/Theme/Img/Variant2.png')",
        variant1img: "url('/src/Components/Theme/Img/variant1img.png')",
        variant2img: "url('/src/Components/Theme/Img/variant2img.png')",
        questionImage: "url('/src/Components/Theme/Img/question.png')",
        showcase: "url('/src/Components/Theme/Img/ShowCase.png')",
        testimonials: "url('/src/Components/Theme/Img/Testimonials.png')",
      },
      colors: {
        "main-color": "#2D061B",
        "text-color": "#433E3E",
        regular: "#EBB268",
        "regular-blue": "#3C6772",
        "f-white": "#FFF7E9",
        "t-pink": "#FDE3B5",
        "bg-main": "#2D061B",
        modal: "rgba(0, 0, 0, 0.62)",
      },
      boxShadow: {
        "card-shadow":
          "inset 0px 0px 34.0148px rgba(255, 255, 255, 0.05), inset 0px 2.26765px 2.26765px rgba(255, 255, 255, 0.15)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "20px 32px",
          gap: "10px",
          left: "1203px",
          top: "20px",
          background: "#EBB268",
          borderRadius: "199px",
          fontFamily: "Gilroy",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "22px",
          color: "#433E3E",
        },
        ".btn-second": {
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "20px 32px",
          gap: "10px",
          left: "1203px",
          top: "20px",
          border: "4px solid #EBB268",
          borderRadius: "199px",
          fontFamily: "Gilroy",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "22px",
          color: "#433E3E",
        },
      });
    }),
  ],
};
