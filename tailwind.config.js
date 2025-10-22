/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aventa', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        aventa: ['Aventa', 'sans-serif']
      }
    }
  },
  plugins: []
}
