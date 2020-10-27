// import Vue from "vue"
import tokens from "../tokens/docs"
import themeDark from "../tokens/themes/theme.json"

const colors = [...new Set(tokens.color.map(col => col.attributes.type))]

export const store = {
  state: {
    tokens,
    themeDark,
    colors: colors
  }
}

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
