const groupBy = require("lodash/groupBy")

module.exports = StyleDictionary => {
  /* js module */
  StyleDictionary.registerFormat({
    name: "site",
    formatter(dictionary) {
      //   const prefix = config.prefix ? `${config.prefix}-` : "";
      const toRet = {}
      const grouped = groupBy(dictionary.allProperties, "attributes.category")

      const keys = Object.keys(grouped)
      /* eslint-disable */
      for (const key of keys) {
        // console.log(key)
        const newKey = key === "undefined" ? "misc" : key
        const catArr = grouped[key]
        toRet[newKey] = []

        for (let i = 0, len = catArr.length; i < len; i++) {
          const current = catArr[i]
          // console.log(catArr[0]);

          // if (_.has(current, "mixin")) {
          //   current.mixin = `${current.mixin}`;
          // }
          
          delete current.category
          delete current.original
          delete current.path
          // console.log(newKey)
          toRet[newKey].push(current)
        }
      }
      /* eslint-enable */
      // console.log(toRet)
      return JSON.stringify(toRet, null, 2)
    }
  })
}
