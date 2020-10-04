// import Vue from "vue"
// import tokens from "../../tokens/docs"
// import themeDark from "../..tokens/themes/dark"

// const colors = [...new Set(tokens.color.map(col => col.attributes.type))]
// const formats = ["SCSS", "JS"]

// export const store = Vue.observable({
//   state: {
//     tokens,
//     // themeDark,
//     colors: colors,
//     formats: formats,
//     selectedFormat: formats[0]
//   }
// })

export const sizeOptions = {
  Default: null,
  Small: "sm"
}

export const typeOptions = {
  Default: null,
  Button: "button",
  Submit: "submit",
  Reset: "reset"
}

export const variantOptions = {
  Default: null,
  Primary: "primary",
  Secondary: "secondary",
  Standard: "standard",
  Danger: "danger",
  Ghost: "ghost"
}
