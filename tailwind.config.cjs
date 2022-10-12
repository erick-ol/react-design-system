/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize : {
      'xs': '14px',
      'sm': '16px',
      'md': '18px',
      'lg': '20px',
      'xl': '24px',
      '2xl': '32px',
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'gray-100': '#e1e1e6',
      'gray-200': '#c4c4cc',
      'gray-400': '#7c7c8a',
      'gray-800': '#202024',
      'gray-900': '#121214',
      'cyan-300': '#9be1fb',
      'cyan-500': '#81d8f7',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
