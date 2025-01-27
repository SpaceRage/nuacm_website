/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'tiffany-blue': '#5FBBC4',
        'maximum-blue': '#4CAFCE',
        'celestial-blue': '#4098C2',
        'lapis-lazuli': '#2374A7',
        'gunmetal': '#1E2833',
        'cardinal-red': '#C8202F',
      },
    },
  },
  plugins: [],
};
