/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0D0D0D',
          secondary: '#1A1A1A',
          border: '#2E2E2E',
          hover: '#3A3A3A',
        }, 
        accent:{
          red: '#D72638',
          gold: '#C9B037',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
        },
      },
      fontFamily: {
        serif: ['var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-nunito)', 'sans'],
      },
    },
  },
  plugins: [],
}
