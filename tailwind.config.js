/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hoverable': {'raw': '(hover: hover)'},
      }
    },
    container: {
      screens: {
        "2xl": "1440px"
      }
    }
  },
  plugins: [],
}
