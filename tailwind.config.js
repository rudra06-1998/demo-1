/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        heading: ['"Typeface/Family/Heading"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
