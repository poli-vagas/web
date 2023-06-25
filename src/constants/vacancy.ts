import { Benefits, NameId } from '~/services/vacancies/types'

export const type = (t: string) => {
  switch (t) {
    case 'Trainee':
      return 'Trainee'
    case 'Internship':
      return 'Estágio'
    case 'FullTime':
      return 'Emprego'
    default:
      return ''
  }
}

export const workplace = (t: string) => {
  switch (t) {
    case 'Remote':
      return 'Remoto'
    case 'Office':
      return 'Presencial'
    case 'Hybrid':
      return 'Híbrido'
    default:
      return ''
  }
}

export const englishLevel = (t: string) => {
  switch (t) {
    case 'Beginner':
      return 'Básico'
    case 'Intermediate':
      return 'Intermediário'
    case 'Advanced':
      return 'Avançado'
    default:
      return ''
  }
}

export const benefits = (b?: Benefits): string => {
  const benefitList: string[] = []

  if (b?.hasFoodVoucher) {
    benefitList.push('Vale alimentação')
  }

  if (b?.hasTransportVoucher) {
    benefitList.push('Vale transporte')
  }

  if (b?.hasHealthInsurance) {
    benefitList.push('Plano de saúde')
  }

  if (b?.hasLifeInsurance) {
    benefitList.push('Seguro de vida')
  }

  if (b?.others) {
    benefitList.push('Outros benefícios')
  }

  if (benefitList.length === 0) {
    return ''
  }

  return benefitList.join(', ')
}

export const courses = (c?: NameId[]): string => {
  const coursesList = c?.map?.((item) => item.name) ?? []

  return coursesList.join(', ')
}

export const SALARY_LIST = [
  { value: '1', label: 'R$ 0,00 - R$ 1000,00' },
  { value: '2', label: 'R$ 1000,01 - R$ 2000,00' },
  { value: '3', label: 'R$ 2000,01 - R$ 3000,00' },
  { value: '4', label: 'R$ 3000,01 - R$ 4000,00' },
  { value: '5', label: 'R$ 4000,01 - R$ 5000,00' }
]

export const HOURS_PER_DAY_LIST = [
  { value: 2, label: '2 horas' },
  { value: 4, label: '4 horas' },
  { value: 6, label: '6 horas' },
  { value: 8, label: '8 horas' }
]

export const TYPE_LIST = [
  { value: 'Trainee', label: 'Trainee' },
  { value: 'Internship', label: 'Estágio' },
  { value: 'FullTime', label: 'Emprego' }
]
