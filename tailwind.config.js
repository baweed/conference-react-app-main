/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      screens:{
        'xs': { max: '640px' }, // Mobile (iPhone 3 - iPhone XS Max).
        'm': {max: '749px', min:'641px'}
      },
      colors:{
        'mantis': {
          '50': '#f6faf3',
          '100': '#e9f5e3',
          '200': '#d3eac8',
          '300': '#afd89d',
          '400': '#82bd69',
          '500': '#61a146',
          '600': '#4c8435',
          '700': '#3d692c',
          '800': '#345427',
          '900': '#2b4522',
          '950': '#13250e',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};