
if (process.env.NODE_ENV == 'production') {
    module.exports = {
      publicPath: './',
      // publicPath: './dist/',
      // publicPath: path.resolve(__dirname, 'dist'),
      // outputDir: '../dist/',
      // configureWebpack: {
      //   // 关闭 webpack 的性能提示
      //   // performance: {
      //   //   hints:false
      //   // }
      //   // //或者
      //   // 警告 webpack 的性能提示
      //   performance: {
      //     hints: 'warning',
      //     // 入口起点的最大体积
      //     maxEntrypointSize: 50000000,
      //     // 生成文件的最大体积
      //     maxAssetSize: 30000000,
      //     // 只给出 js 文件的性能提示
      //     assetFilter: function (assetFilename) {
      //       return assetFilename.endsWith('.js')
      //     }
      //   }
      // }
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