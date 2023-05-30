import { sub } from 'date-fns'

const calcLastYears = () => {
  const currentYear = new Date().getFullYear()
  return Array.from(new Array(100), (_, index) => currentYear - index)
}

export const MAJOR_YEAR = sub(new Date(), {
  years: 18
}).getFullYear()

export const MONTH_LIST = [
  { value: 1, label: 'Janeiro' },
  { value: 2, label: 'Fevereiro' },
  { value: 3, label: 'Março' },
  { value: 4, label: 'Abril' },
  { value: 5, label: 'Maio' },
  { value: 6, label: 'Junho' },
  { value: 7, label: 'Julho' },
  { value: 8, label: 'Agosto' },
  { value: 9, label: 'Setembro' },
  { value: 10, label: 'Outubro' },
  { value: 11, label: 'Novembro' },
  { value: 12, label: 'Dezembro' }
]

export const YEAR_LIST = calcLastYears().map((item) => ({
  value: item,
  label: item.toString()
}))

export const YEAR_MAJOR_LIST = calcLastYears()
  .filter((year) => year <= MAJOR_YEAR)
  .map((item) => ({ value: item, label: item.toString() }))
