
if (process.env.NODE_ENV == 'production') {
    module.exports = {
      publicPath: '../dist/',
      // outputDir: '../dist/',
    }
} else {
  module.exports = {
    // chainWebpack: config => {
    //   config.module
    //     .test(/\.md$/)
    //     .use('markdown-loader')
    //     .end()
    //     .test(/\.md$/)
    //     .use('html-loader')
    // },
    // configureWebpack: config => {
    //   config.module.rules.push({
    //     test: /\.md$/,
    //     use: ['html-loader', 'markdown-loader']
    //   })
    // }
  }
}