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
        prependData: `
          @import "@/assets/tokens/tokensAndPalette.scss";
          @import "@/assets/tokens/textStyles.map.scss";
          @import "@/assets/tokens/themes/dark.scss";
          @import "@/styles/toolbox.scss";
        `,
        sourceMap: true
      }
    },
    extract: true,
    sourceMap: true
  },
  productionSourceMap: false
}
