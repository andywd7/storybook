const StyleDictionary = require("style-dictionary")

// ==== Include custom transforms ====
require("../custom/transforms")(StyleDictionary)

// ==== Include custom transform groups ====
require("../custom/transformGroups")(StyleDictionary)

// ==== Include custom formats ====
require("../custom/formats/formats")(StyleDictionary)

// ==== Include custom filters ====
require("../custom/filters")(StyleDictionary)

require("./site")(StyleDictionary)

console.log("Build started...")

console.log("\n==============================================")

// StyleDictionary.extend({
//   source: ["tokens-figma/generic/**/*.json", "tokens-figma/palette/*.json"],
//   platforms: {
//     "web/palette-css": {
//       transformGroup: "tokens-scss",
//       buildPath: "tokens-figma/generated/palette/",
//       files: [
//         {
//           destination: "palette.css",
//           format: "css/variables",
//           filter: "isColor"
//         }
//       ]
//     },
//     "web/tokens-css": {
//       transformGroup: "tokens-scss",
//       buildPath: "tokens-figma/generated/tokens/",
//       files: [
//         {
//           destination: "tokens.css",
//           format: "css/variables",
//           filter: "isToken"
//         }
//       ]
//     },
//     "web/tokensAndPalette-css": {
//       transformGroup: "tokens-scss",
//       buildPath: "tokens-figma/generated/tokensAndPalette/",
//       files: [
//         {
//           destination: `tokensAndPalette.css`,
//           format: "css/variables",
//           filter: "isNotType"
//         }
//       ]
//     },
//     "web/palette-scss": {
//       transformGroup: "tokens-scss",
//       buildPath: "tokens-figma/generated/palette/",
//       files: [
//         {
//           destination: "palette.scss",
//           format: "scss/variables",
//           filter: "isColor"
//         }
//       ]
//     },
//     "web/tokens-scss": {
//       transformGroup: "tokens-scss",
//       buildPath: "tokens-figma/generated/tokens/",
//       files: [
//         {
//           destination: "tokens.scss",
//           format: "scss/variables",
//           filter: "isToken"
//         }
//       ]
//     },
//     "web/tokensAndPalette-scss": {
//       transformGroup: "tokens-scss",
//       buildPath: "tokens-figma/generated/tokensAndPalette/",
//       files: [
//         {
//           destination: "tokensAndPalette.scss",
//           format: "scss/variables",
//           filter: "isNotType"
//         }
//       ]
//     },
//     "web/palette-js": {
//       transformGroup: "tokens-js",
//       buildPath: "tokens-figma/generated/palette/",
//       files: [
//         {
//           destination: "palette.js",
//           format: "javascript/es6",
//           filter: "isColor"
//         }
//       ]
//     },
//     "web/tokens-js": {
//       transformGroup: "tokens-js",
//       buildPath: "tokens-figma/generated/tokens/",
//       files: [
//         {
//           destination: "tokens.js",
//           format: "javascript/es6",
//           filter: "isToken"
//         }
//       ]
//     },
//     "web/tokensAndPalette-js": {
//       transformGroup: "tokens-js",
//       buildPath: "tokens-figma/generated/tokensAndPalette/",
//       files: [
//         {
//           destination: `tokensAndPalette.js`,
//           format: "javascript/es6",
//           filter: "isNotType"
//         }
//       ]
//     }
//   }
// }).buildAllPlatforms()

StyleDictionary.extend({
  source: ["tokens-figma/**/*.json"],
  platforms: {
    figma: {
      transformGroup: "tokens-json",
      buildPath: "tokens-figma/generated/",
      files: [
        {
          destination: "docs.json",
          format: "site"
          // filter: "isFigma"
        }
      ]
    }
  }
}).buildAllPlatforms()

StyleDictionary.extend({
  source: [
    "tokens-figma/generic/*.json",
    "tokens-figma/palette/*.json",
    "tokens-figma/themes/core.json",
    "tokens-figma/themes/interactive.json",
    "tokens-figma/generic/typography.json"
  ],
  platforms: {
    figma: {
      transformGroup: "tokens-figma",
      buildPath: "tokens-figma/generated/",
      files: [
        {
          destination: "figma.json",
          format: "json/nested",
          filter: "isFigma"
        }
      ]
    }
  }
}).buildAllPlatforms()

StyleDictionary.extend({
  source: [
    "tokens-figma/generic/font.json",
    "tokens-figma/generic/lineHeight.json",
    "tokens-figma/generic/typography.json"
  ],
  platforms: {
    "web/text-styles-scss": {
      transformGroup: "text-styles-scss",
      buildPath: "tokens-figma/generated/",
      files: [
        {
          destination: `text-styles.map.scss`,
          format: "scss/text-styles",
          filter: "isType"
        }
      ]
    }
  }
}).buildAllPlatforms()

console.log("\nEnd processing")

console.log("\n==============================================")
console.log("\nBuild completed!")
