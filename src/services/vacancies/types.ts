export type Child = {
  id: number
  name: string
  gender: 'male' | 'female'
  bornDate: string
}

export interface VacancyTotalsRequest {
  period: number
}

export interface VacancyTotalsResponse {
  totalVacancies: number
  activeVacancies: number
  totalPosts: number
}

export interface VacancyTableRequest {
  limit?: number
  page?: number
  period?: number
  name?: string | null
  salary?: string | null
  hoursPerDay: string | null
  type: string | null
}

export type VacancyTableRow = {
  id: string
  company: {
    id: string
    name: string
  }
  type: string
  semester: number
  limitDate: string | null
  graduationDate: null
  integrationAgent: null
  courses: null
  description: string
  area: string
  workplace: null
  hoursPerDay: number
  salary: number
  benefits: {
    hasFoodVoucher: null
    hasTransportVoucher: true
    hasHealthInsurance: null
    hasLifeInsurance: null
    others: null
  }
  requirements: {
    englishLevel: null
    otherLanguages: null
    softSkills: null
    hardSkills: null
  }
  contact: {
    linkedinUrl: null
    email: null
    emailInstructions: null
    phone: null
    url: null
    externalId: string
  }
  createdTime: string
}

export interface VacancyTableResponse {
  count: number
  rows: VacancyTableRow[] | []
}
