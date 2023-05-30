export const money = (amount: number) => {
  let price
  const i = parseInt(
    (price = Math.abs(Number(amount) ?? 0).toFixed(2)),
    10
  ).toString()
  const j = i.length > 3 ? i.length % 3 : 0

  return `${
    (j ? `${i.substr(0, j)}.` : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1.')
  },${Math.abs(Number(price) - Number(i))
    .toFixed(2)
    .slice(2)}`
}
