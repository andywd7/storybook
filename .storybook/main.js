module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    // "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-addon-designs"
  ],
  // refs: {
  //   vue: { 
  //     title: "Vue",
  //     url: 'http://localhost:6006' 
  //   },
  //   html: { 
  //     title: "HTML",
  //     url: 'http://localhost:9006' 
  //   }
  // },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            prependData: `
              @import "src/assets/tokens/tokensAndPalette.scss";
              @import "src/assets/tokens/textStyles.map.scss";
              @import "src/assets/tokens/themes/dark.scss";
              @import "src/styles/toolbox.scss";
            `,
            sourceMap: true
          }
        }
      ]
    })

    // Return the altered config
    return config;
  },
}
