/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "200px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // primary: "yellowgreen",
        // secondary: "rgb(96, 138, 13)",
        background: "#171612",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "yellowgreen",

          secondary: "rgb(96, 138, 13)",

          accent: "#1fb2a6",

          neutral: "#2a323c",

          "base-100": "#1d232a",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
