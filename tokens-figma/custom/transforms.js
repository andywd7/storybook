const camelCase = require("lodash/camelCase")
const kebabCase = require("lodash/kebabCase")

module.exports = StyleDictionary => {
  StyleDictionary.registerTransform({
    name: "size/removePX",
    type: "value",
    matcher: function(prop) {
      return prop.value.match(/^[\d.]+px$/)
    },
    transformer: function(prop) {
      return prop.value.replace(/px$/, "")
    }
  })

  StyleDictionary.registerTransform({
    name: "name/colors",
    type: "name",
    matcher: function(prop) {
      return prop.path[0] === "colors"
    },
    transformer: function(prop) {
      if (
        prop.attributes.type === "black" ||
        prop.attributes.type === "white"
      ) {
        return (prop.name = prop.attributes.type)
      } else if (prop.attributes.type === "theme") {
        return prop.name.match(/-/)
          ? `${prop.attributes.type}-${prop.attributes.subitem}`
          : camelCase(`${prop.attributes.type}${prop.attributes.subitem}`)
      } else {
        return prop.name.match(/-/)
          ? prop.attributes.item
          : camelCase(prop.attributes.item)
      }
    }
  })

  StyleDictionary.registerTransform({
    name: "name/typography",
    type: "name",
    matcher: function(prop) {
      return prop.path[0] === "typography"
    },
    transformer: function(prop) {
      return prop.name.match(/-/)
        ? kebabCase(`${prop.attributes.type}${prop.attributes.item}`)
        : camelCase(`${prop.attributes.type}${prop.attributes.item}`)
    }
  })

  // StyleDictionary.registerTransform({
  //   name: "value/typography",
  //   type: "value",
  //   matcher: function(prop) {
  //     // console.log(prop.alias)
  //     // return prop.path[0] === "typography"
  //     if (prop.alias) return true
  //   },
  //   transformer: function(prop) {
  //     console.log(prop.alias)
  //     return prop.alias.match(/-/)
  //       ? kebabCase(`${prop.attributes.type}${prop.attributes.item}`)
  //       : camelCase(`${prop.attributes.type}${prop.attributes.item}`)
  //   }
  // })

  // StyleDictionary.registerTransform({
  //   name: "value/theme",
  //   type: "value",
  //   matcher: function(prop) {
  //     // console.log(prop.path[1])
  //     return prop.path[1] === "theme"
  //   },
  //   transformer: function(prop) {
  //     // console.log(prop.valueName)
  //     return prop.valueName
  //   }
  // })

  StyleDictionary.registerTransform({
    name: "value/figma",
    type: "value",
    matcher: function(prop) {
      if (prop.figma && prop.figma !== "exclude") return true
    },
    transformer: function(prop) {
      return prop.figma
    }
  })

  // StyleDictionary.registerTransform({
  //   name: "value/typography",
  //   type: "value",
  //   matcher: function(prop) {
  //     // console.log(prop)
  //     return prop.alias && prop.attributes.category === "typography"
  //   },
  //   transformer: function(prop) {
  //     prop.value = prop.alias
  //     return prop.value
  //   }
  // })
}
