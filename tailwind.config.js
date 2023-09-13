/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      inter: ['var(--font-inter)'],
      poppins: ['var(--font-poppins)'],
    },

    extend: {
    },
  },
}

