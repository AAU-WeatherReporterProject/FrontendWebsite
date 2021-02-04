module.exports = {
  publicPath:{
    proxy: {
      '/api': {
        target: 'http://35.157.65.50:8098', // this configuration needs to correspond to the Spring Boot backends' application.properties server.port
        ws: true,
        changeOrigin: true
      }
    }
  },
  // Change build paths to make them Maven compatible
  // see https://cli.vuejs.org/config/
  devServer: {
    proxy: {
      '/api': {
        target: 'http://35.157.65.50:8098', // this configuration needs to correspond to the Spring Boot backends' application.properties server.port
        ws: true,
        changeOrigin: true
      }
    }
  },
  outputDir: 'target/dist',
  assetsDir: 'static'
}