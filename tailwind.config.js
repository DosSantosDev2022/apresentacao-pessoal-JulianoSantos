/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        'blue-charcoal-950': '#040F1A',
        'blue-charcoal-900': '#071422',
        'blue-charcoal-800': '#0B1B2B',
        'blue-charcoal-700': '#112131',
        'blue-charcoal-600': '#1C2F41',
        'blue-charcoal-500': '#3A536B',
        'blue-charcoal-400': '#7B96B2',
        'blue-charcoal-300': '#AFC2D4',
        'blue-charcoal-200': '#C4D4E3',
        'blue-charcoal-100': '#E7EDF4',
        'blue-highlight': '#3294F8',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
