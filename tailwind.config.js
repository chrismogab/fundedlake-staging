/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      colors: {
        dark: '#181818',
        primary: '#00AEEF',
        navy: '#022150',
        secondory: '#ffae00',
        blackish: '#000000', // '#0000' is invalid — assuming you meant black
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

