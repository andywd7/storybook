const StylelintPlugin = require("stylelint-webpack-plugin")

module.exports = {
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        context: "src",
        fix: true
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/toolbox.scss";`,
        sourceMap: true
      }
    },
    extract: true,
    sourceMap: true
  },
  productionSourceMap: false
}
