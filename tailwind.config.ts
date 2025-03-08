import { type Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      backgroundImage: {},
      colors: {},
      boxShadow: {},
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')],
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
        },
      },
    ],
  },
} satisfies Config;
