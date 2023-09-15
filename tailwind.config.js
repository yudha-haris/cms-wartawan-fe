/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {

      },
      fontFamily: {
        heading: ['Poppins', 'sans'], 
        body: ['Roboto', 'sans']
      },
    },
  },
  plugins: [],
}
