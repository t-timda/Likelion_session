const plugin = require('eslint-plugin-react');

module.exports = {
  content: ['.index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#657786',
      },
    },
    fontFamily: {
      sans: ['noto-sans', 'sans-serif'],
    },
  },
  plugins: [],
};
