/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      screens:{
        'brk1':'900px',
        'brk2':'1300px'
      },
      colors: {
        'primary': '#232738',
        'secondary': '#303551',
        'ternary':'#ffce8a'
      }
    }
  }
  // ...
}