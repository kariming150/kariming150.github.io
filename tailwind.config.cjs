/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,svelte,js}'],
  theme: {
    extend: {
      screens: {
        "xs": "440px",
      }
    },
  },
  plugins: [],
}
