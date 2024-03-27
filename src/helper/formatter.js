const convertPriceWithCommas = (price) => {
  if (typeof price === "number" && !isNaN(price)) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  return ""
}

export { convertPriceWithCommas }
