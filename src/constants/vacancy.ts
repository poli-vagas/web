export const type = (t: string) => {
  switch (t) {
    case 'Trainee':
      return 'Trainee'
    case 'Internship':
      return 'Estágio'
    case 'FullTime':
      return 'Emprego'
    default:
      return 'Trainee'
  }
}

export const SALARY_LIST = [
  { value: '1', label: 'R$ 0,00 - R$ 1000,00' },
  { value: '2', label: 'R$ 1000,01 - R$ 2000,00' },
  { value: '3', label: 'R$ 2000,01 - R$ 3000,00' },
  { value: '4', label: 'R$ 3000,01 - R$ 4000,00' },
  { value: '5', label: 'R$ 4000,01 - R$ 5000,00' }
]

export const HOURS_PER_DAY_LIST = [
  { value: '4', label: '4 horas' },
  { value: '6', label: '6 horas' }
]

export const TYPE_LIST = [
  { value: 'Trainee', label: 'Trainee' },
  { value: 'Internship', label: 'Estágio' },
  { value: 'FullTime', label: 'Emprego' }
]
