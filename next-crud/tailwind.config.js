/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    { 
      pattern: /from-(blue|green|gray)-400/,
    },
    { 
      pattern: /to-(blue|green|gray)-700/,
    },
  ],
  darkmode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
