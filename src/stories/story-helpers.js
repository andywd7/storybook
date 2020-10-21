export const removePX = str => {
  return str.replace(new RegExp("px", "gi"), "")
}

export const rems = (px, base = 16) => {
  const value = removePX(px) / base + "rem"
  return value
}
