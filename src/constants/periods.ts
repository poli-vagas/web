export const PERIODS = [
  { value: getLastNDays(7), label: 'Últimos 7 dias' },
  { value: getLastNDays(30), label: 'Últimos 30 dias' },
  { value: getLastNDays(90), label: 'Últimos 90 dias' },
  { value: getLastNMonths(12), label: 'Últimos 12 meses' },
  {
    value: getFormattedDate(new Date(0)) + 'T00:00:00.000Z',
    label: 'Desde Sempre'
  }
]

function getLastNDays(n: number) {
  const currentDate = new Date()
  const startDate = new Date(currentDate)
  startDate.setDate(currentDate.getDate() - n + 1)
  return getFormattedDate(startDate) + 'T00:00:00.000Z'
}

function getLastNMonths(n: number) {
  const currentDate = new Date()
  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - n + 1,
    1
  )
  return getFormattedDate(startDate) + 'T00:00:00.000Z'
}

function getFormattedDate(date: Date) {
  const year = date.getUTCFullYear()
  const month = padZero(date.getUTCMonth() + 1)
  const day = padZero(date.getUTCDate())
  return `${year}-${month}-${day}`
}

function padZero(value: number) {
  return value.toString().padStart(2, '0')
}
