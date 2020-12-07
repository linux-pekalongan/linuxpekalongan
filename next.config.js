const withReactSvg = require('next-react-svg')
const path = require('path')
const withPWA = require('next-pwa')

module.exports = withReactSvg({
  include : path.resolve(__dirname, 'public/assets/icon'),
  webpack(config, options) {
    return config
  }
})

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
  }
})
