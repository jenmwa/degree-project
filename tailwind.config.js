/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rust-100": "#DFA78F",
        "rust-200": "#B66644",
        "rust-300": "#A8491F",
        "rust-400": "#863F20",
        "rust-500": "#4D220F",
      },
      fontFamily: {
        serif: ["CormorantGaramond", "cormorant"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",

//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       colors: {
//         'rust-100': '#DFA78F',
//         'rust-200': '#B66644',
//         'rust-300': '#A8491F',
//         'rust-400': '#863F20',
//         'rust-500': '#4D220F'
//       },
//       fontFamily: {
//         serif: ['CormorantGaramond', 'cormorant'],
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
// }
// export default config

// // theme: {
// //   colors: {
// //     'rust-100': '#DFA78F',
// //     'rust-200': '#B66644',
// //     'rust-300': '#A8491F',
// //   },