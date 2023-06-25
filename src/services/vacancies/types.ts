export type Child = {
  id: number
  name: string
  gender: 'male' | 'female'
  bornDate: string
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

export interface Benefits {
  hasFoodVoucher: boolean | null
  hasTransportVoucher: boolean | null
  hasHealthInsurance: boolean | null
  hasLifeInsurance: boolean | null
  others: boolean | null
}

export type VacancyTableRow = {
  id: string
  company: {
    id: string
    name: string
  }
  type: string
  semester: number | null
  limitDate: string | null
  graduationDate: string | null
  integrationAgent: null
  courses: null
  description: string
  area: string
  workplace: string | null
  hoursPerDay: number | null
  salary: number | null
  benefits: Benefits
  requirements: {
    englishLevel: string | null
    otherLanguages: string | null
    softSkills: string | null
    hardSkills: string | null
  }
  contact: {
    linkedinUrl: string | null
    email: string | null
    emailInstructions: string | null
    phone: string | null
    url: string | null
    externalId: string | null
  }
  createdTime: string
}

export interface VacancyTableResponse {
  page: number
  pageSize: number
  total: number
  totalFiltered: number
  jobs: VacancyTableRow[] | []
}
