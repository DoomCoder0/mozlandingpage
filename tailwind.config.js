/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "#151515",
        },
        black: "#000",
        chocolate: {
          "100": "#f27920",
          "200": "#d96105",
        },
      },
      spacing: {},
      fontFamily: {
        helvetica: "Helvetica",
        "abhaya-libre": "'Abhaya Libre'",
        abeezee: "ABeeZee",
        "akaya-telivigala": "'Akaya Telivigala'",
        "helvetica-neue": "'Helvetica Neue'",
      },
      borderRadius: {
        "50xl": "69px",
      },
    },
    fontSize: {
      "16xl": "35px",
      "9xl": "28px",
      "2xl": "21px",
      "38xl": "57px",
      "27xl": "46px",
      "15xl": "34px",
      "37xl": "56px",
      "26xl": "45px",
      "17xl": "36px",
      "8xl": "27px",
      "32xl": "51px",
      "22xl": "41px",
      "12xl": "31px",
      "155xl": "174px",
      "51xl": "70px",
      "24xl": "43px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
