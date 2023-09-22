/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'clash': ['Clash Display', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'unica': ['Unica One', 'cursive']
      },
      colors: {
        'background': '#150E28',
        'pinky': '#FF26B9',
        'purp': '#D434FE',
        'dpurple': '#903AFF',
        'borderColor': 'rgba(255, 255, 255, 0.18)',
        'blur': 'rgba(0, 0, 0, 0.01);'
      },
      backgroundImage: {
        'button': 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)'
      }
    },
  },
  plugins: [],
}

