/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // reference: https://colorhunt.co/palette/f9f7f7dbe2ef3f72af112d4e
        "darkblue": "#112D4E",
        "blue": "#3F72AF",
        "lightblue": "#DBE2EF",
        "white": "#F9F7F7",
        // reference: https://colorhunt.co/palette/fff5e4ffe3e1ffd1d1ff9494
        "peach":"#FF9494",
        "pink":"#FFD1D1",
        "lightpink":"#FFE3E1",
        "yellow":"#FFF5E4"
      },
    },
  },
  plugins: [],
};
