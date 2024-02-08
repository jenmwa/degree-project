/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      outline: {
        rust: ["2px solid #4D220F", "2px"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rust-50": "#DFC6BC",
        "rust-100": "#DFA78F",
        "rust-200": "#B66644",
        "rust-300": "#A8491F",
        "rust-400": "#863F20",
        "rust-500": "#4D220F",
        "green-100": "#D3D9D4",
        "green-200": "#556458",
        "green-300": "#4E5C51",
        "yellow-100": "#EEE7CD",
        "yellow-200": "#EBDDAD",
        "yellow-300": "#D8CA99",
        "greyish-100": "#EAECEC",
      },
      fontFamily: {
        serif: ["CormorantGaramond", "cormorant"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("postcss-nested")],
};
