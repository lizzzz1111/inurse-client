const HOST = process.env.HOST;
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: false, // 这个是关闭校验，因为我在创建项目的时候开启了
  devServer: {
    host: HOST || '0.0.0.0',
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};