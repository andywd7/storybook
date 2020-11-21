module.exports = StyleDictionary => {
  StyleDictionary.registerFilter({
    name: "isToken",
    matcher: function(prop) {
      return (
        prop.attributes.category !== "colors" &&
        prop.attributes.category !== "typography"
      )
    }
  })

  StyleDictionary.registerFilter({
    name: "isColor",
    matcher: function(prop) {
      return prop.attributes.category === "colors" && prop.path[1] !== "theme"
    }
  })

  StyleDictionary.registerFilter({
    name: "isType",
    matcher: function(prop) {
      return (
        prop.attributes.category === "typography" &&
        prop.attributes.subitem !== "docs"
      )
    }
  })

  StyleDictionary.registerFilter({
    name: "isNotType",
    matcher: function(prop) {
      return prop.attributes.category !== "typography"
    }
  })

  StyleDictionary.registerFilter({
    name: "isFigma",
    matcher: function(prop) {
      if (prop.figma) {
        if (prop.figma !== "exclude") {
          return prop.figma
        }
      } else {
        if (prop.attributes.item !== "description") return prop.value
      }
    }
  })
}
