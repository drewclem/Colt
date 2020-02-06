// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', '-apple-system', 'sans-serif'],
        'body': ['Montserrat', '-apple-system', 'sans-serif']
      },
      colors: {
        red: 'var(--red)',
        blue: {
          dark: 'var(--dark-blue)',
          lightest: 'var(--light-blue)',
          light: 'var(--trans-blue)'
        },
        gray: 'var(--gray)',
        darkgray: 'var(--dark-gray)'
      }
    }
  },
  variants: {
    appearance: ['responsive']
  }
}
