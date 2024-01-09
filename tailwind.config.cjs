/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"]
      }
    }
  },

  plugins: []
};

module.exports = config;
