/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-dark': '#161616',
        'main-light': '#e9e9e9',
        'main-accent': '#3898EC',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      rotate: {
        '270': '270deg',
      }
    }
  },
  plugins: [],
}
