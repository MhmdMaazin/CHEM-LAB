/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      fontFamily: {
        merienda: ['Merienda', 'cursive'],
        bree: ["\"Bree Serif\"", 'serif'],
      },
      keyframes: {
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'zoom-in': 'zoom-in 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};