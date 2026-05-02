/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue 500
          dark: '#1D4ED8',    // Blue 700
        },
        navy: {
          light: '#1e293b',   // Slate 800
          DEFAULT: '#0f172a', // Slate 900
          dark: '#020617',    // Deepest Slate (near black)
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 10px #3B82F6, 0 0 20px #3B82F6' },
          'to': { boxShadow: '0 0 20px #3B82F6, 0 0 40px #3B82F6' },
        }
      }
    },
  },
  plugins: [],
}
