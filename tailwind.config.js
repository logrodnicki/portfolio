const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: {
        ...colors.indigo,
        1000: '#03001D',
      },
      yellow: colors.yellow,
      violet: colors.violet,
      slate: colors.slate,
      purple: colors.purple,
      neutral: colors.neutral,
      stone: colors.stone,
      custom: {
        1: '#291c3a',
        2: '#331c52',
        3: '#8121d0',
        4: '#dccfed',
      },
    },
    extend: {},
  },
  plugins: [],
};
