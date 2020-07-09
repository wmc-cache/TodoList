module.exports = {
  lintOnSave: false,//取消检验代码
  productionSourceMap: false,
  devServer: {
    proxy: "http://localhost:3000"
  }
}