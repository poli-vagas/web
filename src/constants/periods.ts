export const LAST_PERIODS = [
  { value: calculateDate(-7), label: 'Últimos 7 dias' },
  { value: calculateDate(-30), label: 'Últimos 30 dias' },
  { value: calculateDate(-90), label: 'Últimos 90 dias' },
  { value: calculateDate(-365), label: 'Últimos 12 meses' }
]

export const NEXT_PERIODS = [
  { value: calculateDate(7), label: 'Próximos 7 dias' },
  { value: calculateDate(30), label: 'Próximos 30 dias' },
  { value: calculateDate(90), label: 'Próximos 90 dias' },
  { value: calculateDate(365), label: 'Próximos 12 meses' }
]

function calculateDate(days: number) {
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + days)
  return endDate.toISOString()
}
