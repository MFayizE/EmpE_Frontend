/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        'lg': ['1.125rem', {  //18px
          fontWeight: '700',
        }],
        base: '1rem',  //16px
        sm: '0.875rem', //14px
        xs: '0.75rem', //12px
        xxs: '0.55rem', //12px
      },
    },
    
  },
  plugins: [],
}

