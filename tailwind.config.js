/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'PT': 'PT Sans, sans-serif',
    },
    colors: {
      'myBlack': '#2b2e3d',
      'Blue': '#5584ff',
      'Green': '#37b05d',
      'black': '#000000',
      'transparent': 'transparent',
      'white': 'white',
      'light': 'rgb(153, 153, 153)',
      'bgLight': '#f6f7fb',
      'LightBlue': 'rgba(85,132,255,0.1)',
    }
  },
  plugins: [],
}
