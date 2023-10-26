/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: '"Playfair Display", serif',
        main: '"Inter", sans-serif',
        specialHeading: 'Arial',
      },
      fontSize: {
        h2: '3rem',
        h3: '2.5rem',
        ['6xl']: '3.5rem',
        ['7xl']: '3.875rem',
        ['xxl']: '8rem',
      },
      colors: {
        primary: 'rgb(246, 165, 193)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
