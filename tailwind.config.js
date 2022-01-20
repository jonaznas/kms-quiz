const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'kms-blue': '#4b5f8f',
          'kms-lightblue': '#6dc1d6',
          'kms-gray': '#474747'
        }
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
