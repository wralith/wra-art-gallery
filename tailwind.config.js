module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "sun-city": "url('./src/assets/images/bg.jpg')",
      },
      colors: {
        'primary': "#ff4747",
        'primary2': "#F6eC3E",
      },
      screens: {
        '-2xl': { max: '1535px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
        '@md': { min: '640px', max: '767px' },
        '@lg': { min: '768px', max: '1023px' },
        '@xl': { min: '1024px', max: '1279px' },
        '@2xl': { min: '1280px', max: '1535px' },
      },
    }
  },
  plugins: []
}
