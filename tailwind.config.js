/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      colors: {
        dark: '#181818',
        primary: '#00AEEF',
        navy: '#022150',
        secondory: '#fcaf17',
        blackish: '#000000', // '#0000' is invalid — assuming you meant black
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
