/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#495E57',
        secondary: '#F4CE14',
        tertiary: '#EE9972',
        quaternary: '#FBDABB',
        highlight_light: '#EDEDEE',
        highlight_dark: '#333333',
      },
    },
  },
  plugins: [],
};
