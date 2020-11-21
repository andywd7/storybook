const kebabCase = require("lodash/kebabCase")

// https://github.com/amzn/style-dictionary/blob/main/lib/common/formats.js
function fileHeader() {
  let to_ret = ""
  // for backward compatibility we need to have the user explicitly hide them
  // var showFileHeader = options ? options.showFileHeader : true
  // if (showFileHeader) {
  // to_ret += "\n"
  to_ret += "// Do not edit directly\n"
  to_ret += "// Generated on " + new Date().toUTCString() + "\n"
  to_ret += "\n"
  // }

  return to_ret
}

module.exports = StyleDictionary => {
  StyleDictionary.registerFormat({
    name: "scss/text-styles",
    formatter: function(dictionary) {
      const styleMaps = Object.keys(dictionary.properties.typography)
        .map(function(key) {
          // console.log(key)
          return Object.keys(dictionary.properties.typography[key])
            .map(function(key2) {
              return (
                `$${key2}: (\n` +
                Object.keys(dictionary.properties.typography[key][key2])
                  .map(function(key3) {
                    // console.log(key3)
                    let prop = dictionary.properties.typography[key][key2][key3]
                    // console.log(prop)
                    return `  ${key3}: $${kebabCase(prop.value)},`
                  })
                  .join("\n") +
                "\n) !default;\n"
              )
            })
            .join("\n")
        })
        .join("\n")

      const styleMapMap =
        "\n$tokens: (" +
        Object.keys(dictionary.properties.typography).map(function(key) {
          return Object.keys(dictionary.properties.typography[key]).map(
            function(key2) {
              return `\n  ${key2}: $${key2}`
            }
          )
        }) +
        "\n) !default;\n"

      return fileHeader() + styleMaps + styleMapMap
    }
  })

  // StyleDictionary.registerFormat({
  //   name: "scss/variables",
  //   formatter: function(dictionary) {
  //     return (
  //       fileHeader(this.options) +
  //       variablesWithPrefix("$", dictionary.allProperties)
  //     )
  //   }
  // })
}
