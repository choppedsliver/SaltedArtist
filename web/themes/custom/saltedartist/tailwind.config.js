/** @type {import('tailwindcss').Config} 
 *
*/
module.exports = {
  content: [
    './templates/**/*.html.twig',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#D6A047',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}
