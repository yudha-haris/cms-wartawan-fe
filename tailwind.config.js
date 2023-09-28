/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000', // Set all text colors to black
      },
      fontFamily: {
        heading: ['var(--font-poppins)'], 
        body: ['var(--font-roboto)']
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover'],
    },
  },
  plugins: [],
}
