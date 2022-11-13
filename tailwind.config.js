/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#171721",

          "base-100": "#FCFCFD",

          "info": "#46A8C3",

          "success": "#40E2A7",

          "warning": "#E29518",

          "error": "#F12513",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
