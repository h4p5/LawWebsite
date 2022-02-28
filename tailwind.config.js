module.exports = {
  content: ["./src/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors:{
      'blueLaw' : '#390099',
      'cooperLaw' : '#BE7C4D',
      'silverLaw' : '#E5E5E6'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
